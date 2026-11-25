const inExamCollections = [...inQuestionnaires, ...inSimulationQuestionnaires, {
  title: 'Kahoot aleatorio · Temas 6–9', exam: 2, simulation: true, random: true,
  source: 'Banco de preguntas de los temas 6 a 9 aportado por el usuario', questions: []
}];
const inRandomDistribution = { propiedades: 7, diferencias: 5, ventajas: 4, medidas: 3, calculo: 1 };
function generateInRandomQuestions() {
  const counts = { ...inRandomDistribution };
  const categories = Object.keys(counts);
  const changes = 2 + Math.floor(Math.random() * 3);
  for (let i = 0; i < changes; i++) {
    const available = categories.filter(category => counts[category] > 1 && counts[category] > inRandomDistribution[category] - 2);
    const from = available[Math.floor(Math.random() * available.length)];
    const destinations = categories.filter(category => category !== from && counts[category] < inRandomDistribution[category] + 2);
    if (!destinations.length) continue;
    const to = destinations[Math.floor(Math.random() * destinations.length)];
    counts[from]--;
    counts[to]++;
  }
  return Object.entries(counts).flatMap(([category, count]) =>
    shuffleQuestions(inSecondKahootBank[category]).slice(0, count)
  );
}
const inStorageKey = 'archivo-in-cuestionarios-v1';
let inAnswers = {};
let inStorageAvailable = true;
try {
  const saved = JSON.parse(localStorage.getItem(inStorageKey) || '{}');
  inExamCollections.forEach((exam, index) => exam.questions.forEach(question => {
    const key = `${index}-${question.number}`;
    if (Array.isArray(saved[key])) {
      const valid = [...new Set(saved[key].filter(value => Number.isInteger(value) && value >= 0 && value < question.options.length))];
      inAnswers[key] = question.correct.length > 1 ? valid : valid.slice(0, 1);
    }
  }));
} catch { inStorageAvailable = false; }
function saveInAnswers() {
  try { localStorage.setItem(inStorageKey, JSON.stringify(inAnswers)); }
  catch { inStorageAvailable = false; }
}
function inExamStats(index) {
  const stats = { correct: 0, incorrect: 0, unanswered: 0, pending: 0, total: 0 };
  inExamCollections[index].questions.forEach(q => {
    if (q.reviewNote) { stats.pending++; return; }
    stats.total++;
    const values = inAnswers[`${index}-${q.number}`] || [];
    if (!values.length) stats.unanswered++;
    else if (values.length === q.correct.length && q.correct.every(value => values.includes(value))) stats.correct++;
    else stats.incorrect++;
  });
  return stats;
}
function renderInExam(container, selection) {
  const index = inExamCollections.findIndex((exam, i) => String(i) === selection);
  if (index < 0) { location.hash = '#in/examenes'; return; }
  const exam = inExamCollections[index];
  if (exam.random) {
    exam.questions = generateInRandomQuestions();
    Object.keys(inAnswers).filter(key => key.startsWith(`${index}-`)).forEach(key => delete inAnswers[key]);
    saveInAnswers();
  }
  const section = exam.simulation ? 'simulacros' : 'examenes';
  let reviewed = false;
  document.title = `IN · ${exam.title} · Formulario`;
  container.innerHTML = `<a class="back" href="#in/${section}">← Volver a IN</a><div class="eyebrow">${exam.title} · Cuestionario de teoría</div><h1>${exam.title}</h1><p class="intro">Selecciona una respuesta por pregunta. ${exam.random ? 'Cada intento combina 20 preguntas de los temas 6 a 9. El reparto por tipo de pregunta varía ligeramente y el orden es aleatorio.' : 'El orden de las preguntas es aleatorio.'}</p><p class="exam-source">Fuente: ${escapeExamText(exam.source)}. ${exam.questions.length} preguntas. Respuestas y explicaciones facilitadas por el usuario.</p><form id="bdd-exam"><div class="exam-toolbar"><span id="in-progress" role="status"></span><div><button type="submit">Corregir examen</button><button type="button" class="secondary" id="in-reset">${exam.random ? 'Nuevo Kahoot' : 'Reiniciar'}</button></div></div><p id="in-save-status" class="exam-source"></p><section id="in-result" class="exam-result" tabindex="-1" hidden></section><section class="question-group">${shuffleQuestions(exam.questions).map((q, position) => {
    const key = `${index}-${q.number}`;
    return `<fieldset class="exam-question" id="in-question-${q.number}"><legend><span class="question-number">${position + 1}.</span> ${escapeExamText(q.prompt)}</legend><p class="exam-source">${q.correct.length > 1 ? 'Varias respuestas posibles' : 'Una respuesta'}</p><div class="answer-options tic-options">${q.options.map((option, oi) => `<label><input type="${q.correct.length > 1 ? 'checkbox' : 'radio'}" name="${key}" value="${oi}" ${(inAnswers[key] || []).includes(oi) ? 'checked' : ''}><span>${String.fromCharCode(97 + oi)}. ${escapeExamText(option)}</span></label>`).join('')}<button type="button" class="clear-answer" data-clear="${key}">Dejar en blanco</button></div>${q.reviewNote ? `<p class="exam-notice">${escapeExamText(q.reviewNote)}</p>` : ''}<p class="answer-feedback" hidden></p></fieldset>`;
  }).join('')}</section><button type="submit">Corregir examen</button></form>`;
  const form = container.querySelector('form');
  function update() {
    container.querySelector('#in-progress').textContent = `${exam.questions.filter(q => (inAnswers[`${index}-${q.number}`] || []).length).length} de ${exam.questions.length} respondidas`;
    container.querySelector('#in-save-status').textContent = inStorageAvailable ? 'Tus respuestas se guardan en este navegador.' : 'Guardado local no disponible. Las respuestas se conservan mientras mantengas la página abierta.';
    const result = container.querySelector('#in-result');
    result.hidden = !reviewed;
    if (!reviewed) return;
    const stats = inExamStats(index);
    result.innerHTML = `<h2>${stats.correct} / ${stats.total} aciertos</h2><p>${stats.incorrect} incorrectas · ${stats.unanswered} sin responder${stats.pending ? ` · ${stats.pending} pendientes de revisión, excluidas de la puntuación` : ''}.</p><p>Sin penalización. En preguntas de varias respuestas se requiere coincidencia completa.</p>`;
    exam.questions.forEach(q => {
      const field = container.querySelector(`#in-question-${q.number}`);
      const feedback = field.querySelector('.answer-feedback');
      const values = inAnswers[`${index}-${q.number}`] || [];
      const correct = values.length === q.correct.length && q.correct.every(value => values.includes(value));
      field.classList.remove('correct', 'incorrect', 'pending');
      field.classList.add(q.reviewNote || !values.length ? 'pending' : correct ? 'correct' : 'incorrect');
      feedback.hidden = false;
      feedback.textContent = q.reviewNote ? 'Pregunta excluida de la puntuación por un error en el material original.' : `${!values.length ? 'Sin responder.' : correct ? 'Correcta.' : 'Incorrecta.'} Respuesta correcta: ${q.options[q.correct[0]]}${q.explanation ? ' ' + q.explanation : ''}`;
    });
  }
  form.addEventListener('change', event => {
    const input = event.target;
    if (!['radio', 'checkbox'].includes(input.type)) return;
    const value = Number(input.value);
    if (input.type === 'radio') inAnswers[input.name] = [value];
    else {
      const selected = new Set(inAnswers[input.name] || []);
      input.checked ? selected.add(value) : selected.delete(value);
      inAnswers[input.name] = [...selected];
    }
    saveInAnswers(); update();
  });
  form.addEventListener('click', event => {
    const key = event.target.dataset.clear;
    if (!key) return;
    delete inAnswers[key];
    form.querySelectorAll(`input[name="${key}"]`).forEach(input => input.checked = false);
    saveInAnswers(); update();
  });
  form.addEventListener('submit', event => {
    event.preventDefault(); reviewed = true; update(); container.querySelector('#in-result').focus();
  });
  container.querySelector('#in-reset').addEventListener('click', () => {
    if (exam.questions.some(q => (inAnswers[`${index}-${q.number}`] || []).length) && !confirm('¿Borrar las respuestas de este cuestionario y empezar de nuevo?')) return;
    exam.questions.forEach(q => delete inAnswers[`${index}-${q.number}`]);
    saveInAnswers(); renderInExam(container, selection);
  });
  update();
}
