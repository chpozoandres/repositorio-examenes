const ticStorageKey = 'archivo-tic-examenes-v1';
let ticAnswers = {};
let ticStorageAvailable = true;
try {
  const saved = JSON.parse(localStorage.getItem(ticStorageKey) || '{}');
  ticPastExams.forEach((exam, index) => exam.questions.forEach(question => {
    const key = `${index}-${question.number}`;
    if (Array.isArray(saved[key])) {
      const valid = [...new Set(saved[key].filter(value => Number.isInteger(value) && value >= 0 && value < question.options.length))];
      ticAnswers[key] = question.correct.length > 1 ? valid : valid.slice(0, 1);
    }
  }));
} catch { ticStorageAvailable = false; }
function saveTicAnswers() {
  try { localStorage.setItem(ticStorageKey, JSON.stringify(ticAnswers)); }
  catch { ticStorageAvailable = false; }
}
function ticExamStats(index) {
  const stats = { correct: 0, incorrect: 0, unanswered: 0, pending: 0, total: 0 };
  ticPastExams[index].questions.forEach(q => {
    if (q.reviewNote) { stats.pending++; return; }
    stats.total++;
    const values = ticAnswers[`${index}-${q.number}`] || [];
    if (!values.length) stats.unanswered++;
    else if (values.length === q.correct.length && q.correct.every(value => values.includes(value))) stats.correct++;
    else stats.incorrect++;
  });
  return stats;
}
function renderTicExam(container, selection) {
  const index = ticPastExams.findIndex((exam, i) => String(i) === selection);
  if (index < 0) { location.hash = '#tic/examenes'; return; }
  const exam = ticPastExams[index];
  let reviewed = false;
  document.title = `TIC · ${exam.title} · Formulario`;
  container.innerHTML = `<a class="back" href="#tic/examenes">← Volver a TIC</a><div class="eyebrow">${exam.title} · Cuestionario de teoría</div><h1>${exam.title}</h1><p class="intro">Selecciona la respuesta o respuestas correctas. Las preguntas con varias respuestas usan casillas: debes marcar todas las correctas para acertar. El orden de las preguntas es aleatorio.</p><p class="exam-source">Fuente: ${escapeExamText(exam.source)}. ${exam.questions.length} preguntas. La corrección sigue la plantilla del documento; las preguntas con errores señalados quedan fuera de la puntuación.</p><form id="bdd-exam"><div class="exam-toolbar"><span id="tic-progress" role="status"></span><div><button type="submit">Corregir examen</button><button type="button" class="secondary" id="tic-reset">Reiniciar</button></div></div><p id="tic-save-status" class="exam-source"></p><section id="tic-result" class="exam-result" tabindex="-1" hidden></section><section class="question-group">${shuffleQuestions(exam.questions).map((q, position) => {
    const key = `${index}-${q.number}`;
    return `<fieldset class="exam-question" id="tic-question-${q.number}"><legend><span class="question-number">${position + 1}.</span> ${escapeExamText(q.prompt)}</legend><p class="exam-source">${q.correct.length > 1 ? 'Varias respuestas posibles' : 'Una respuesta'}</p><div class="answer-options tic-options">${q.options.map((option, oi) => `<label><input type="${q.correct.length > 1 ? 'checkbox' : 'radio'}" name="${key}" value="${oi}" ${(ticAnswers[key] || []).includes(oi) ? 'checked' : ''}><span>${String.fromCharCode(97 + oi)}. ${escapeExamText(option)}</span></label>`).join('')}<button type="button" class="clear-answer" data-clear="${key}">Dejar en blanco</button></div>${q.reviewNote ? `<p class="exam-notice">${escapeExamText(q.reviewNote)}</p>` : ''}<p class="answer-feedback" hidden></p></fieldset>`;
  }).join('')}</section><button type="submit">Corregir examen</button></form>`;
  const form = container.querySelector('form');
  function update() {
    container.querySelector('#tic-progress').textContent = `${exam.questions.filter(q => (ticAnswers[`${index}-${q.number}`] || []).length).length} de ${exam.questions.length} respondidas`;
    container.querySelector('#tic-save-status').textContent = ticStorageAvailable ? 'Tus respuestas se guardan en este navegador.' : 'Guardado local no disponible. Las respuestas se conservan mientras mantengas la página abierta.';
    const result = container.querySelector('#tic-result');
    result.hidden = !reviewed;
    if (!reviewed) return;
    const stats = ticExamStats(index);
    result.innerHTML = `<h2>${stats.correct} / ${stats.total} aciertos</h2><p>${stats.incorrect} incorrectas · ${stats.unanswered} sin responder${stats.pending ? ` · ${stats.pending} pendientes de revisión, excluidas de la puntuación` : ''}.</p><p>Sin penalización. En preguntas de varias respuestas se requiere coincidencia completa.</p>`;
    exam.questions.forEach(q => {
      const field = container.querySelector(`#tic-question-${q.number}`);
      const feedback = field.querySelector('.answer-feedback');
      const values = ticAnswers[`${index}-${q.number}`] || [];
      const correct = values.length === q.correct.length && q.correct.every(value => values.includes(value));
      field.classList.remove('correct', 'incorrect', 'pending');
      field.classList.add(q.reviewNote || !values.length ? 'pending' : correct ? 'correct' : 'incorrect');
      feedback.hidden = false;
      feedback.textContent = q.reviewNote ? 'Pregunta excluida de la puntuación por un error en el material original.' : `${!values.length ? 'Sin responder.' : correct ? 'Correcta.' : 'Incorrecta.'} ${q.sourceAnswer}`;
    });
  }
  form.addEventListener('change', event => {
    const input = event.target;
    if (!['radio', 'checkbox'].includes(input.type)) return;
    const value = Number(input.value);
    if (input.type === 'radio') ticAnswers[input.name] = [value];
    else {
      const selected = new Set(ticAnswers[input.name] || []);
      input.checked ? selected.add(value) : selected.delete(value);
      ticAnswers[input.name] = [...selected];
    }
    saveTicAnswers(); update();
  });
  form.addEventListener('click', event => {
    const key = event.target.dataset.clear;
    if (!key) return;
    delete ticAnswers[key];
    form.querySelectorAll(`input[name="${key}"]`).forEach(input => input.checked = false);
    saveTicAnswers(); update();
  });
  form.addEventListener('submit', event => {
    event.preventDefault(); reviewed = true; update(); container.querySelector('#tic-result').focus();
  });
  container.querySelector('#tic-reset').addEventListener('click', () => {
    if (exam.questions.some(q => (ticAnswers[`${index}-${q.number}`] || []).length) && !confirm('¿Borrar las respuestas de este cuestionario y empezar de nuevo?')) return;
    exam.questions.forEach(q => delete ticAnswers[`${index}-${q.number}`]);
    saveTicAnswers(); renderTicExam(container, selection);
  });
  update();
}
