const inQuestionnaires = [{
  title: 'Parcial 1 · Preguntas oficiales', exam: 1,
  source: 'Preguntas originales/oficiales aportadas por el usuario',
  questions: [
    { number: 1, prompt: '¿Para qué se usa la ganancia de información en árboles de decisión?', options: ['Para medir la cardinalidad de la variable.', 'Para medir la incertidumbre de la regla.', 'Para medir la separabilidad de la clase.', 'Para medir la capacidad predictiva de una variable.'], correct: [3], explanation: 'La ganancia de información mide la reducción de incertidumbre al dividir los ejemplos según un atributo.' },
    { number: 2, prompt: 'Las reglas generadas por el algoritmo PRISM...', options: ['Son difícilmente interpretables.', 'Mejoran, en general, al algoritmo C4.5.', 'Cubren todos los ejemplos de entrenamiento.', 'Son equivalentes a un árbol de decisión.'], correct: [2], explanation: 'PRISM genera reglas para cubrir los ejemplos de entrenamiento, trabajando sucesivamente con las distintas clases. La cobertura no implica que todas las reglas sean mutuamente excluyentes.' },
    { number: 3, prompt: 'El clasificador Naïve Bayes...', options: ['Solo funciona con variables numéricas.', 'Considera que las variables son independientes.', 'Considera que las variables tienen correlación lineal.', 'No acepta valores perdidos.'], correct: [1], explanation: 'Más precisamente, supone que los atributos son independientes condicionados a la clase.' },
    { number: 4, prompt: 'El método Bagging tiene como objetivo...', options: ['Hacer coincidir distintos clasificadores.', 'Favorecer el consenso entre clasificadores.', 'Mejorar cada clasificador.', 'Generar diversidad en los clasificadores.'], correct: [3], explanation: 'Bagging entrena modelos sobre diferentes muestras Bootstrap para combinar sus predicciones.' },
    { number: 5, prompt: '¿Qué técnica es más apropiada para imputar valores ausentes en una variable?', options: ['Imputar conservando la desviación típica de esa variable.', 'Imputar conservando la media de esa variable.', 'Imputar en base a un predictor sobre esa variable.', 'Ignorar la instancia.'], correct: [2], explanation: 'La imputación predictiva puede aprovechar las relaciones entre atributos. Es la respuesta esperada en este test, aunque su eficacia real depende de la calidad de los datos y del predictor.' },
    { number: 6, prompt: 'Ventaja de las técnicas envolventes de selección de características:', options: ['Son más aplicables.', 'Son más eficientes.', 'Son más eficaces.', 'Son más generales.'], correct: [2], explanation: 'Los métodos Wrapper evalúan las características mediante el propio clasificador, por lo que suelen obtener subconjuntos más adaptados a él, aunque con mayor coste computacional.' },
    { number: 7, prompt: 'El algoritmo ENN (Edited Nearest Neighbor) de selección de instancias...', options: ['Conserva las instancias outliers.', 'Elimina las instancias clasificadas incorrectamente.', 'Inserta solo las instancias mal clasificadas.', 'Elimina las instancias de la frontera.'], correct: [1], explanation: 'ENN elimina ejemplos cuya clase real no coincide con la clase mayoritaria de sus vecinos cercanos.' },
    { number: 8, prompt: '¿Cuál de los siguientes órdenes de preprocesamiento es el más adecuado?', options: ['Ruido → Valores ausentes → Reducción de características → Selección de instancias.', 'Valores ausentes → Ruido → Selección de instancias → Reducción de características.', 'Selección de instancias → Reducción de características → Valores ausentes → Ruido.', 'Ruido → Selección de instancias → Valores ausentes → Reducción de características.'], correct: [0] }
  ]
},
{
  "title": "Parcial 2 · Preguntas oficiales",
  "exam": 2,
  "source": "Preguntas originales del Kahoot 2 aportadas por el usuario",
  "questions": [
    {
      "number": 1,
      "prompt": "¿Qué inconveniente tiene el algoritmo k-means?",
      "options": [
        "Solo genera clusters convexos.",
        "No converge con facilidad.",
        "El valor de k debe ser pequeño.",
        "Es muy ineficiente."
      ],
      "correct": [
        0
      ],
      "explanation": "Solo genera clusters convexos."
    },
    {
      "number": 2,
      "prompt": "En el algoritmo BIRCH, ¿qué información se guarda en CF?",
      "options": [
        "Centroide y número de objetos.",
        "Centroide, radio y diámetro.",
        "Suma lineal, suma cuadrática y número de objetos.",
        "Radio, diámetro y número de objetos."
      ],
      "correct": [
        2
      ],
      "explanation": "Suma lineal, suma cuadrática y número de objetos."
    },
    {
      "number": 3,
      "prompt": "¿Cuál es el principio de poda en Apriori?",
      "options": [
        "Un conjunto infrecuente no tiene reglas con confianza mínima.",
        "Si un conjunto es frecuente, también lo es su superconjunto.",
        "Cualquier subconjunto de un conjunto frecuente es frecuente.",
        "Un conjunto infrecuente no contiene subconjuntos frecuentes."
      ],
      "correct": [
        2
      ],
      "explanation": "Cualquier subconjunto de un conjunto frecuente es frecuente."
    },
    {
      "number": 4,
      "prompt": "¿Qué mide el lift (empuje) en la regla A ⇒ B?",
      "options": [
        "La confianza compuesta de A y B.",
        "El grado de correlación entre A y B.",
        "La probabilidad condicional de B dado A.",
        "El factor de mejora en la frecuencia de B restringido a A."
      ],
      "correct": [
        3
      ],
      "explanation": "El factor de mejora en la frecuencia de B restringido a A."
    },
    {
      "number": 5,
      "prompt": "¿Para qué sirve el pooling en una CNN?",
      "options": [
        "Para simplificar la red reduciendo las conexiones entre neuronas.",
        "Para reducir la dimensión y así acelerar la convergencia.",
        "Para muestrear las neuronas y mejorar la diversidad.",
        "Para transformar matrices 3D en una sola capa."
      ],
      "correct": [
        1
      ],
      "explanation": "Para reducir la dimensión y así acelerar la convergencia."
    },
    {
      "number": 6,
      "prompt": "¿Qué algoritmo base utiliza una red CNN para aprender?",
      "options": [
        "Gradient Boosting.",
        "Expectation-Maximization.",
        "MinMax.",
        "Backpropagation."
      ],
      "correct": [
        3
      ],
      "explanation": "Backpropagation."
    },
    {
      "number": 7,
      "prompt": "¿Qué problema puede presentar SMOTE en clases desbalanceadas?",
      "options": [
        "Puede sobregeneralizar por crear datos minoritarios en zonas mayoritarias.",
        "Puede provocar indirectamente una reducción de la clase minoritaria.",
        "Puede crear ejemplos sintéticos de la clase mayoritaria.",
        "Puede crear ejemplos sintéticos tan parecidos que conduzcan al sobreajuste."
      ],
      "correct": [
        0
      ],
      "explanation": "Puede sobregeneralizar por crear datos minoritarios en zonas mayoritarias."
    },
    {
      "number": 8,
      "prompt": "¿Qué es el aprendizaje multietiqueta?",
      "options": [
        "Cuando un conjunto de ejemplos tiene varias clases.",
        "Cuando un ejemplo es un conjunto de instancias con una única clase.",
        "Cuando un ejemplo tiene varias clases.",
        "Cuando un conjunto de instancias tiene múltiples valores."
      ],
      "correct": [
        2
      ],
      "explanation": "Cuando un ejemplo tiene varias clases."
    }
  ]
}
];
