const subjects = [
  { id: 'bdd', code: 'BDD', name: 'Bases de Datos Distribuidas', accent: '#54795e', tint: '#edf3e9' },
  { id: 'in', code: 'IN', name: 'Inteligencia de Negocio', accent: '#65859c', tint: '#edf3f7' },
  { id: 'ri', code: 'RI', name: 'Recuperación de Información', accent: '#9b7f51', tint: '#f8f2e7' },
  { id: 'tic', code: 'TIC', name: 'Teoría de la Información y la Codificación', accent: '#86719f', tint: '#f2edf7' }
];
// Recursos del repositorio; no se presupone la convocatoria de los documentos.
const resources = Object.fromEntries(subjects.map(s => [s.id, { examenes: [], simulacros: [] }]));
resources.in.examenes.push(...inPastExams);
resources.in.examenes.push(...inQuestionnaires.map((exam, index) => ({
  title: exam.title, exam: exam.exam, format: 'form',
  questions: exam.questions.length, url: `#in/cuestionario/${index}`
})));
resources.in.simulacros.push(...inSimulationQuestionnaires.map((exam, index) => ({
  title: exam.title, exam: exam.exam, format: 'form', simulation: true,
  questions: exam.questions.length, url: `#in/simulacro/${inQuestionnaires.length + index}`
})));
resources.ri.examenes.push(...riPastExams);
resources.tic.examenes.push(...ticPastExams.map((exam, index) => ({
  title: exam.title, exam: exam.exam, format: 'form',
  questions: exam.questions.length, url: `#tic/cuestionario/${index}`
})));
resources.bdd.examenes.push({
  title: 'Preguntas del primer parcial',
  exam: 1,
  url: '#bdd/primer-examen'
});
resources.bdd.simulacros.push(...bddSimulationGroups.map((group, index) => ({
  title: group.title,
  exam: 1,
  url: `#bdd/simulacro/${index}`
})));
const bddExams = [
  { exam: 1, title: 'Primer examen', topics: 'Temas 1 y 2' },
  { exam: 2, title: 'Segundo examen', topics: 'Tema 3' },
  { exam: 3, title: 'Tercer examen', topics: 'Tema 4' }
];
const plannedExams = {
  in: [
    { title: 'Primer Kahoot / prueba tipo test', topics: 'Temas 4 y 5', description: '20 preguntas, cuatro opciones y una única respuesta correcta. Kahoot! de repaso en la sesión de teoría anterior a la prueba.' },
    { title: 'Segundo Kahoot / prueba tipo test', topics: 'Temas 6, 7, 8 y 9', description: '20 preguntas, cuatro opciones y una única respuesta correcta. Kahoot! de repaso en la sesión de teoría anterior a la prueba.' },
    { title: 'Examen final', topics: 'Teoría desde el tema 4 · Métodos y algoritmos', description: 'Dos bloques: 2 o 3 preguntas de teoría y 2 o 3 ejercicios. Duración: entre 2 h y 2 h 30 min, según los contenidos.' }
  ],
  ri: [
    { title: 'Primer parcial eliminatorio', topics: 'Temas 1, 2 y 3 · Tema 4 por confirmar', description: 'El tema 4 podría incluirse en este parcial; su inclusión está pendiente de confirmar.' },
    { title: 'Segundo parcial eliminatorio', topics: 'Temas 4, 5, 6 y 7', description: 'Segundo bloque de evaluación parcial.' }
  ],
  tic: [
    { title: 'Primer cuestionario de teoría', topics: 'Tipo test · Hasta 2,5 puntos de la nota final', description: 'Relacionado con las diapositivas de teoría y el trabajo práctico desarrollado. Temas concretos pendientes de definir.' },
    { title: 'Segundo cuestionario de teoría', topics: 'Tipo test · Hasta 2,5 puntos de la nota final', description: 'Relacionado con las diapositivas de teoría y el trabajo práctico desarrollado. Puede incluir la parte teórica de las prácticas. Temas concretos pendientes de definir.' }
  ]
};
function renderPlannedExams(id, section) {
  return `<div class="exam-groups">${plannedExams[id].map((group, index) => {
    const documents = resources[id][section].filter(resource => resource.exam === index + 1);
    return `<section class="exam-group"><div class="exam-heading"><div><h2>${group.title}</h2><p>${group.topics}</p></div><span class="count">${documents.length} ${section === 'examenes' ? 'exámenes' : 'simulacros'}</span></div><p class="planned-description">${group.description}</p>${documents.length ? documents.map(resource => resource.format === 'form' ? `<article class="resource"><div><span class="resource-type">Formulario · ${resource.simulation ? 'Simulacro' : 'Preguntas oficiales'}</span><h3>${resource.title}</h3><p>${resource.questions} preguntas · Cuatro opciones y una respuesta correcta</p></div><div class="resource-actions"><a href="${resource.url}">Realizar examen →</a></div></article>` : `<article class="resource"><div><span class="resource-type">PDF · Examen anterior${resource.legacy ? ' · Anterior a 2022' : ''}</span><h3>${resource.title}</h3><p>${resource.pages} ${resource.pages === 1 ? 'página' : 'páginas'} de enunciado${resource.solutionUrl ? ' · Soluciones disponibles por separado' : ''}</p>${resource.note ? `<p class="pdf-note">${resource.note}</p>` : ''}</div><div class="resource-actions"><a href="${resource.url}" target="_blank" rel="noopener">Abrir examen <span class="sr-only">(abre en otra pestaña)</span></a><a href="${resource.url}" download>Descargar</a>${resource.solutionUrl ? `<a href="${resource.solutionUrl}" target="_blank" rel="noopener">Ver soluciones <span class="sr-only">(abre en otra pestaña)</span></a>` : ''}</div></article>`).join('') : `<p class="group-empty">${section === 'examenes' ? 'Todavía no hay exámenes anteriores para este bloque.' : 'Todavía no hay simulacros para este bloque.'}</p>`}</section>`;
  }).join('')}</div>`;
}
function renderTicResources(section) {
  return `<div class="exam-groups">${plannedExams.tic.map((group, index) => {
    const documents = resources.tic[section].filter(resource => resource.exam === index + 1);
    return `<section class="exam-group"><div class="exam-heading"><div><h2>${group.title}</h2><p>${group.topics}</p></div><span class="count">${documents.length} ${section === 'examenes' ? 'exámenes' : 'simulacros'}</span></div>${documents.length ? documents.map(resource => `<article class="resource"><div><span class="resource-type">Formulario · Examen anterior</span><h3>${resource.title}</h3><p>${resource.questions} preguntas tipo test · Respuesta única o múltiple</p></div><div class="resource-actions"><a href="${resource.url}">Realizar examen →</a></div></article>`).join('') : `<p class="group-empty">Todavía no hay ${section === 'examenes' ? 'exámenes anteriores' : 'simulacros'} para este cuestionario.</p>`}</section>`;
  }).join('')}</div>`;
}
function renderTicGuidance() {
  return `<section class="course-guidance" aria-labelledby="tic-guidance-title"><h2 id="tic-guidance-title">Cuestionarios de teoría de TIC</h2><p class="guidance-source">Según las indicaciones facilitadas para la asignatura.</p><details open><summary>Dos cuestionarios tipo test</summary><p>Se realizarán dos cuestionarios durante el curso. Cada uno aporta hasta 2,5 puntos de la calificación final; en conjunto constituyen el 50 % correspondiente a teoría.</p><p>Estarán relacionados con las diapositivas de teoría y el trabajo práctico desarrollado. La parte teórica de las prácticas también puede aparecer en estos cuestionarios.</p><p>Los temas concretos de cada cuestionario están pendientes de definir.</p></details></section>`;
}
function renderInGuidance() {
  return `<section class="course-guidance" aria-labelledby="in-guidance-title"><h2 id="in-guidance-title">Indicaciones de evaluación · Curso 2026–27</h2><p class="guidance-source">Según las indicaciones facilitadas para la asignatura.</p><details open><summary>Estructura del examen final</summary><p>Dos bloques: 2 o 3 preguntas de teoría y 2 o 3 ejercicios para mostrar el comportamiento de métodos o algoritmos. Duración: entre 2 h y 2 h 30 min, según los contenidos incluidos.</p><p>La estructura y los contenidos de teoría son similares en la convocatoria ordinaria (enero), extraordinaria (febrero) y evaluación única final.</p></details><details><summary>Teoría: contenidos y tipo de respuesta</summary><p>Explicaciones concisas, breves y esquemáticas sobre cuestiones específicas desde el tema 4 en adelante. También podrá pedirse elegir el método o enfoque más adecuado dadas las propiedades de un conjunto de datos.</p><ul><li>Validación en aprendizaje supervisado y tratamiento del sobreaprendizaje.</li><li>Bagging frente a boosting y componentes de series temporales.</li><li>Calidad de reglas de asociación y ventajas e inconvenientes de métodos de clustering.</li><li>Desbalanceo, multi-instancia y multi-etiqueta.</li><li>Aprendizaje incremental frente a minería de flujo de datos, tratamiento del concept drift y medidas grupales de fairness.</li></ul></details><details><summary>Problemas: métodos y medidas de calidad</summary><p>A partir de un conjunto de datos: ID3 con índice Gini, PRISM, Naïve Bayes, k-NN, KNNI, selección de instancias con CNN o ENN, K-Means, Jerárquico Aglomerativo, Apriori o SMOTE.</p><p>También podrán pedirse medidas de calidad como F1-score o G-mean en clasificación, coeficiente de silueta en clustering y empuje (lift) en reglas de asociación.</p></details><details><summary>Evaluación continua y Kahoot!</summary><p>Dos pruebas de teoría tipo test con 20 preguntas y cuatro respuestas posibles, de las que solo una es correcta. Primera: temas 4 y 5. Segunda: temas 6, 7, 8 y 9.</p><p>En la sesión de teoría anterior a cada prueba se realizará un Kahoot! de repaso y práctica.</p></details><details><summary>Exámenes de cursos anteriores</summary><p>Los enunciados están disponibles en <a href="https://prado.ugr.es" target="_blank" rel="noopener">PRADO UGR <span class="sr-only">(abre en otra pestaña)</span></a>. Los anteriores a 2022 no reflejan íntegramente el esquema de la próxima convocatoria, aunque pueden contener preguntas y problemas que podrían incluirse.</p></details></section>`;
}
function renderBdd(section) {
  return `<div class="exam-groups">${bddExams.map(group => {
    const documents = resources.bdd[section].filter(resource => resource.exam === group.exam);
    return `<section class="exam-group"><div class="exam-heading"><div><h2>${group.title}</h2><p>${group.topics}</p></div><span class="count">${documents.length} ${section === 'examenes' ? (documents.length === 1 ? 'examen' : 'exámenes') : 'simulacros'}</span></div>${documents.length ? documents.map(resource => `<article class="resource"><div><span class="resource-type">Formulario · ${section === 'simulacros' ? 'Simulacro' : 'Examen anterior'}</span><h3>${resource.title}</h3><p>${group.topics} · ${section === 'simulacros' ? '20 preguntas de verdadero/falso' : '3 exámenes de 20 preguntas'}</p></div><div class="resource-actions"><a href="${resource.url}">Realizar examen <span aria-hidden="true">→</span></a></div></article>`).join('') : `<p class="group-empty">${section === 'examenes' ? 'Todavía no hay exámenes anteriores para este bloque.' : 'Todavía no hay simulacros para este bloque.'}</p>`}</section>`;
  }).join('')}</div>`;
}
const main = document.querySelector('main');
const badge = s => `<span class="badge" style="--accent:${s.accent};--tint:${s.tint}">${s.code}</span>`;
function render() {
  const [id, requestedSection, selectedExamId] = location.hash.slice(1).split('/');
  const subject = subjects.find(s => s.id === id);
  if (id === 'in' && ['cuestionario', 'simulacro'].includes(requestedSection)) {
    renderInExam(main, selectedExamId);
    return;
  }
  if (id === 'tic' && requestedSection === 'cuestionario') {
    renderTicExam(main, selectedExamId);
    return;
  }
  if (id === 'bdd' && requestedSection === 'simulacro') {
    renderBddExam(main, selectedExamId, 'simulacros');
    return;
  }
  if (id === 'bdd' && requestedSection === 'primer-examen') {
    renderBddExam(main, selectedExamId);
    return;
  }
  if (!subject) {
    document.title = 'Archivo de exámenes · Informática';
    main.innerHTML = `<div class="eyebrow">Tu biblioteca de estudio</div>
      <h1>Todo empieza con<br><em>una buena preparación.</em></h1>
      <p class="intro">Exámenes anteriores y simulacros, organizados por asignatura.<br>Elige por dónde quieres empezar.</p>
      <div class="section-heading"><h2>Asignaturas</h2><span>04 asignaturas</span></div>
      <div class="grid">${subjects.map((s, i) => `<a class="card" href="#${s.id}/examenes"><div class="card-top">${badge(s)}<span class="subject-number">0${i + 1}</span></div><h3>${s.name}</h3><p>Exámenes anteriores y simulacros</p><div class="card-bottom"><span>${resources[s.id].examenes.length} ${resources[s.id].examenes.length === 1 ? 'examen' : 'exámenes'} · ${resources[s.id].simulacros.length} simulacros</span><strong>Explorar <span aria-hidden="true">↗</span></strong></div></a>`).join('')}</div>
      <div class="note"><span class="note-icon" aria-hidden="true">ⓘ</span><span><strong>El archivo está tomando forma.</strong> Los exámenes y simulacros aparecerán aquí cuando estén disponibles.</span></div>`;
  } else {
    const section = requestedSection === 'simulacros' ? 'simulacros' : 'examenes';
    const exams = section === 'examenes';
    document.title = `${subject.code} · ${exams ? 'Exámenes anteriores' : 'Simulacros'} · Archivo`;
    main.innerHTML = `<a class="back" href="#inicio">← Todas las asignaturas</a><div class="eyebrow">${subject.name}</div>
      <div class="subject-title">${badge(subject)}<h1>${subject.name}</h1></div>
      <p class="intro">Tu espacio de preparación para ${subject.code}.</p>
      ${id === 'in' ? renderInGuidance() : ''}
      ${id === 'tic' ? renderTicGuidance() : ''}
      <nav class="tabs" aria-label="Tipo de recurso"><a href="#${id}/examenes" ${exams ? 'aria-current="page"' : ''}>Exámenes anteriores <span class="count">${resources[id].examenes.length}</span></a><a href="#${id}/simulacros" ${!exams ? 'aria-current="page"' : ''}>Simulacros <span class="count">${resources[id].simulacros.length}</span></a></nav>
      ${id === 'bdd' ? renderBdd(section) : id === 'tic' ? renderTicResources(section) : plannedExams[id] ? renderPlannedExams(id, section) : `<section class="empty"><h2>${exams ? 'Todavía no hay exámenes' : 'Todavía no hay simulacros'}</h2><p>Los recursos de esta asignatura aparecerán aquí cuando estén disponibles.</p></section>`}`;
  }
}
window.addEventListener('hashchange', () => { render(); window.scrollTo(0, 0); main.setAttribute('tabindex', '-1'); main.focus({ preventScroll: true }); });
render();
