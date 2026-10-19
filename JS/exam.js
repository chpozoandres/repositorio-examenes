let examStorageKey = 'archivo-bdd-primer-examen-v1';
let examAnswers = {};
let activeQuestionGroups = bddQuestionGroups;
let activeExamMode = 'examenes';
let examReviewed = false;
let selectedExam = null;
let examStorageAvailable = true;
try {
  const saved = JSON.parse(localStorage.getItem(examStorageKey) || '{}');
  for (const [key, value] of Object.entries(saved)) {
    if (/^[0-4]-([1-9]|1[0-9]|20)$/.test(key) && typeof value === 'boolean') examAnswers[key] = value;
  }
} catch { examStorageAvailable = false; }
const escapeExamText = text => text.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');
function shuffleQuestions(questions) {
  const shuffled = [...questions];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}
function saveExamAnswers() {
  try { localStorage.setItem(examStorageKey, JSON.stringify(examAnswers)); }
  catch { examStorageAvailable = false; }
}
function examStats() {
  let correct = 0, incorrect = 0, unanswered = 0, pending = 0;
  activeQuestionGroups.forEach((group, gi) => { if (gi !== selectedExam) return; group.questions.forEach(q => {
    const answer = examAnswers[`${gi}-${q.number}`];
    if (q.correct === null) pending++;
    else if (answer === undefined) unanswered++;
    else if (answer === q.correct) correct++;
    else incorrect++;
  }); });
  return { correct, incorrect, unanswered, pending };
}
function renderBddExam(container, selection, mode = 'examenes') {
  if (mode !== activeExamMode) {
    saveExamAnswers();
    activeExamMode = mode;
    activeQuestionGroups = mode === 'simulacros' ? bddSimulationGroups : bddQuestionGroups;
    examStorageKey = mode === 'simulacros' ? 'archivo-bdd-simulacros-v1' : 'archivo-bdd-primer-examen-v1';
    examAnswers = {};
    try {
      const saved = JSON.parse(localStorage.getItem(examStorageKey) || '{}');
      for (const [key, value] of Object.entries(saved)) {
        if (/^[0-4]-([1-9]|1[0-9]|20)$/.test(key) && typeof value === 'boolean') examAnswers[key] = value;
      }
    } catch { examStorageAvailable = false; }
    selectedExam = null; examReviewed = false;
  }
  const route = mode === 'simulacros' ? 'simulacro' : 'primer-examen';
  const nextExam = activeQuestionGroups.some((group, index) => String(index) === selection) ? Number(selection) : null;
  if (nextExam !== selectedExam) examReviewed = false;
  selectedExam = nextExam;
  if (selectedExam === null) {
    document.title = mode === 'simulacros' ? 'BDD · Elegir simulacro' : 'BDD · Elegir examen';
    container.innerHTML = `<a class="back" href="#bdd/${mode}">← Volver a BDD</a><div class="eyebrow">Primer examen · Temas 1 y 2</div><h1>${mode === 'simulacros' ? 'Elige tu simulacro' : 'Elige tu examen'}</h1><p class="intro">Cada examen contiene 20 preguntas de verdadero/falso. Tus respuestas se guardan por separado.</p><div class="grid exam-picker">${activeQuestionGroups.map((group, gi) => `<a class="card" href="#bdd/${route}/${gi}"><h2>${group.title}</h2><p>20 preguntas · Verdadero / Falso</p><div class="card-bottom"><span>${group.questions.filter(q => examAnswers[`${gi}-${q.number}`] !== undefined).length} de 20 respondidas</span><strong>Realizar examen →</strong></div></a>`).join('')}</div>`;
    return;
  }
  document.title = 'BDD · Primer examen · Formulario';
  container.innerHTML = `<a class="back" href="#bdd/${mode}">← Volver a BDD</a><div class="eyebrow">Primer examen · Temas 1 y 2</div><h1>${mode === 'simulacros' ? activeQuestionGroups[selectedExam].title : 'Preguntas del primer parcial'}</h1><p class="intro">Responde verdadero o falso. Puedes dejar preguntas en blanco y corregir cuando termines. El orden de las preguntas es aleatorio.</p><p class="exam-source">Fuente: ${mode === 'simulacros' ? 'simulacros aportados por el usuario.' : 'documento aportado de AngMGR (Wuolah).'} ${activeQuestionGroups[selectedExam].title} · 20 preguntas.</p><a class="back" href="#bdd/${route}">← Elegir otro examen</a><form id="bdd-exam"><div class="exam-toolbar"><span id="exam-progress" role="status"></span><div><button type="submit">Corregir examen</button><button type="button" id="exam-reset" class="secondary">Reiniciar</button></div></div><p id="save-status" class="exam-source"></p><section id="exam-result" class="exam-result" tabindex="-1" hidden></section>${activeQuestionGroups.map((group, gi) => gi !== selectedExam ? '' : `<section class="question-group"><h2>${group.title} <span class="count">20 preguntas</span></h2>${shuffleQuestions(group.questions).map((q, position) => {
    const key = `${gi}-${q.number}`;
    return `<fieldset class="exam-question" id="question-${key}"><legend><span class="question-number">${position + 1}.</span> ${escapeExamText(q.prompt)}</legend><div class="answer-options">${[true, false].map(value => `<label><input type="radio" name="${key}" value="${value}" ${examAnswers[key] === value ? 'checked' : ''}> ${value ? 'Verdadero' : 'Falso'}</label>`).join('')}<button type="button" class="clear-answer" data-clear="${key}">Dejar en blanco</button></div><p class="answer-feedback" hidden></p></fieldset>`;
  }).join('')}</section>`).join('')}<button type="submit">Corregir examen</button></form>`;
  const form = container.querySelector('form');
  form.addEventListener('change', event => {
    if (event.target.type !== 'radio') return;
    examAnswers[event.target.name] = event.target.value === 'true';
    saveExamAnswers(); updateExamView(container);
  });
  form.addEventListener('click', event => {
    const key = event.target.dataset.clear;
    if (!key) return;
    delete examAnswers[key];
    form.querySelectorAll(`input[name="${key}"]`).forEach(input => input.checked = false);
    saveExamAnswers(); updateExamView(container);
  });
  form.addEventListener('submit', event => {
    event.preventDefault(); examReviewed = true; updateExamView(container);
    container.querySelector('#exam-result').focus();
  });
  container.querySelector('#exam-reset').addEventListener('click', () => {
    if (activeQuestionGroups[selectedExam].questions.some(q => examAnswers[`${selectedExam}-${q.number}`] !== undefined) && !confirm('¿Borrar las respuestas de este examen y empezar de nuevo?')) return;
    activeQuestionGroups[selectedExam].questions.forEach(q => delete examAnswers[`${selectedExam}-${q.number}`]); examReviewed = false; saveExamAnswers(); renderBddExam(container, String(selectedExam), activeExamMode);
  });
  updateExamView(container);
}
function updateExamView(container) {
  container.querySelector('#exam-progress').textContent = `${activeQuestionGroups[selectedExam].questions.filter(q => examAnswers[`${selectedExam}-${q.number}`] !== undefined).length} de 20 respondidas`;
  container.querySelector('#save-status').textContent = examStorageAvailable ? 'Tus respuestas se guardan en este navegador.' : 'El guardado local no está disponible. Las respuestas se conservan mientras mantengas esta página abierta.';
  const result = container.querySelector('#exam-result');
  result.hidden = !examReviewed;
  if (examReviewed) {
    const stats = examStats();
    result.innerHTML = `<h2>${stats.correct} / 20 aciertos</h2><p>${stats.incorrect} incorrectas · ${stats.unanswered} sin responder.</p><p>Puedes cambiar tus respuestas y practicar de nuevo. No se aplica penalización.</p>`;
  }
  activeQuestionGroups.forEach((group, gi) => { if (gi !== selectedExam) return; group.questions.forEach(q => {
    const key = `${gi}-${q.number}`, answer = examAnswers[key];
    const field = container.querySelector(`#question-${key}`);
    const feedback = field.querySelector('.answer-feedback');
    feedback.hidden = !examReviewed;
    field.classList.remove('correct', 'incorrect', 'pending');
    if (!examReviewed) return;
    if (q.correct === null) {
      field.classList.add('pending'); feedback.textContent = 'Pendiente de revisión: plantilla inconsistente. Esta pregunta no puntúa.';
    } else {
      field.classList.add(answer === q.correct ? 'correct' : answer === undefined ? 'pending' : 'incorrect');
      feedback.textContent = `${answer === undefined ? 'Sin responder.' : answer === q.correct ? 'Correcta.' : 'Incorrecta.'} Respuesta según la plantilla: ${q.correct ? 'Verdadero' : 'Falso'}.${q.explanation ? ' ' + q.explanation : ''}`;
    }
  }); });
}
