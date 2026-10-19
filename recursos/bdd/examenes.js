const bddQuestionGroups = [
  {
    "title": "Tema 1",
    "questions": [
      {
        "number": 1,
        "prompt": "En una base de datos centralizada, todos los datos se almacenan en un único lugar.",
        "correct": true
      },
      {
        "number": 2,
        "prompt": "En una base de datos distribuida, cada localidad puede ejecutar aplicaciones locales.",
        "correct": true
      },
      {
        "number": 3,
        "prompt": "En un sistema distribuido, las localidades no pueden funcionar de forma autónoma.",
        "correct": false
      },
      {
        "number": 4,
        "prompt": "Un DDBMS homogéneo utiliza el mismo tipo de DBMS en todas las localidades.",
        "correct": true
      },
      {
        "number": 5,
        "prompt": "La heterogeneidad sintáctica aparece cuando los distintos nodos usan modelos de datos o lenguajes diferentes.",
        "correct": true
      },
      {
        "number": 6,
        "prompt": "Una base de datos federada nace del diseño conjunto de un único esquema lógico global.",
        "correct": false
      },
      {
        "number": 7,
        "prompt": "Una base de datos autonómica se diseña desde el principio como distribuida.",
        "correct": true
      },
      {
        "number": 8,
        "prompt": "En una base de datos federada, cada base componente conserva cierto grado de autonomía.",
        "correct": true
      },
      {
        "number": 9,
        "prompt": "En las bases de datos distribuidas, los usuarios perciben una única base de datos global.",
        "correct": true
      },
      {
        "number": 10,
        "prompt": "En una base de datos centralizada puede haber varios esquemas físicos, uno por cada localidad.",
        "correct": false
      },
      {
        "number": 11,
        "prompt": "La transparencia mide el grado en que el usuario desconoce los detalles de distribución y fragmentación.",
        "correct": true
      },
      {
        "number": 12,
        "prompt": "La autonomía local indica hasta qué punto una localidad puede funcionar de manera independiente del resto.",
        "correct": true
      },
      {
        "number": 13,
        "prompt": "El control semántico de datos asegura que se mantengan las restricciones de integridad en toda la base distribuida.",
        "correct": true
      },
      {
        "number": 14,
        "prompt": "La transparencia de localización permite acceder a los datos sin conocer su ubicación física.",
        "correct": true
      },
      {
        "number": 15,
        "prompt": "En una base de datos distribuida, el esquema lógico global se fragmenta y distribuye entre los nodos.",
        "correct": true
      },
      {
        "number": 16,
        "prompt": "En las bases de datos federadas el diseño es descendente (top-down).",
        "correct": false
      },
      {
        "number": 17,
        "prompt": "En las bases de datos distribuidas el diseño es descendente (top-down).",
        "correct": true
      },
      {
        "number": 18,
        "prompt": "En las bases de datos federadas, algunos usuarios pueden ver varias bases componentes sin transparencia total.",
        "correct": true
      },
      {
        "number": 19,
        "prompt": "Un asignador central de nombres mejora la autonomía local.",
        "correct": false
      },
      {
        "number": 20,
        "prompt": "La independencia física protege las aplicaciones frente a cambios en la estructura física de almacenamiento.",
        "correct": true
      }
    ]
  },
  {
    "title": "Tema 2",
    "questions": [
      {
        "number": 1,
        "prompt": "El diseño de una base de datos distribuida incluye las etapas de fragmentación y asignación de fragmentos.",
        "correct": true
      },
      {
        "number": 2,
        "prompt": "El objetivo principal del diseño distribuido es maximizar el número de referencias remotas.",
        "correct": false
      },
      {
        "number": 3,
        "prompt": "Minimizar las referencias remotas equivale a maximizar el procesamiento local.",
        "correct": true
      },
      {
        "number": 4,
        "prompt": "La disponibilidad y fiabilidad se mejoran mediante la replicación de datos.",
        "correct": true
      },
      {
        "number": 5,
        "prompt": "La distribución de la carga de trabajo puede afectar negativamente al procesamiento local.",
        "correct": true
      },
      {
        "number": 6,
        "prompt": "En las bases de datos federadas se utiliza una estrategia de diseño descendente (top-down).",
        "correct": false
      },
      {
        "number": 7,
        "prompt": "En las bases de datos distribuidas autonómicas se aplica una estrategia top-down.",
        "correct": true
      },
      {
        "number": 8,
        "prompt": "La fragmentación horizontal divide una relación global en subconjuntos de tuplas.",
        "correct": true
      },
      {
        "number": 9,
        "prompt": "La fragmentación vertical divide una relación global en subconjuntos de atributos.",
        "correct": true
      },
      {
        "number": 10,
        "prompt": "En la fragmentación horizontal derivada, las condiciones se definen sobre atributos de la misma relación.",
        "correct": false
      },
      {
        "number": 11,
        "prompt": "En la fragmentación vertical, la reconstrucción de la relación se realiza con el operador de unión.",
        "correct": false
      },
      {
        "number": 12,
        "prompt": "En la fragmentación horizontal, la reconstrucción se hace mediante el operador unión (UN).",
        "correct": true
      },
      {
        "number": 13,
        "prompt": "En la fragmentación vertical, cada fragmento debe incluir la clave primaria o un identificador de tupla.",
        "correct": true
      },
      {
        "number": 14,
        "prompt": "Un conjunto de fragmentos cumple la propiedad de completitud si permite reconstruir la relación global.",
        "correct": false
      },
      {
        "number": 15,
        "prompt": "Un conjunto de predicados es minimal si todos sus predicados simples son relevantes.",
        "correct": true
      },
      {
        "number": 16,
        "prompt": "En la fragmentación mixta se pueden combinar fragmentaciones horizontales y verticales.",
        "correct": true
      },
      {
        "number": 17,
        "prompt": "La asignación redundante consiste en asignar un fragmento solo a una localidad.",
        "correct": false
      },
      {
        "number": 18,
        "prompt": "La asignación “todas las localidades beneficiosas” replica los fragmentos en todas las localidades donde el beneficio sea positivo.",
        "correct": true
      },
      {
        "number": 19,
        "prompt": "La fragmentación horizontal derivada facilita la ejecución del producto natural distribuido.",
        "correct": true
      },
      {
        "number": 20,
        "prompt": "En la fragmentación vertical, si el beneficio B_ist es positivo, se realiza la fragmentación.",
        "correct": true
      }
    ]
  },
  {
    "title": "Mezcla de temas 1 y 2",
    "questions": [
      {
        "number": 1,
        "prompt": "En una base de datos distribuida, los programas de aplicación deben conocer en qué nodo están los datos para acceder a ellos.",
        "correct": false
      },
      {
        "number": 2,
        "prompt": "El control semántico de datos garantiza la coherencia lógica y el mantenimiento de las restricciones de integridad en toda la BD distribuida.",
        "correct": true
      },
      {
        "number": 3,
        "prompt": "La transparencia de localización permite acceder a los datos sin conocer su ubicación física.",
        "correct": true
      },
      {
        "number": 4,
        "prompt": "En las bases de datos centralizadas, puede haber varios esquemas físicos, uno por cada localidad.",
        "correct": false
      },
      {
        "number": 5,
        "prompt": "En las bases de datos federadas, las bases componentes pierden completamente su autonomía.",
        "correct": false
      },
      {
        "number": 6,
        "prompt": "En el diseño distribuido, maximizar el procesamiento local equivale a minimizar las referencias remotas.",
        "correct": true
      },
      {
        "number": 7,
        "prompt": "La estrategia top-down se aplica en el diseño de bases de datos distribuidas autonómicas.",
        "correct": true
      },
      {
        "number": 8,
        "prompt": "La fragmentación vertical divide una relación global en subconjuntos de tuplas.",
        "correct": false
      },
      {
        "number": 9,
        "prompt": "La fragmentación horizontal derivada se basa en la fragmentación de otra relación.",
        "correct": true
      },
      {
        "number": 10,
        "prompt": "En la fragmentación vertical, se utiliza el operador proyección para definir los fragmentos.",
        "correct": true
      },
      {
        "number": 11,
        "prompt": "En una BD distribuida, la transparencia de replicación significa que el usuario no necesita saber cuántas copias existen de un dato.",
        "correct": true
      },
      {
        "number": 12,
        "prompt": "La independencia física protege las aplicaciones ante cambios en la estructura lógica de la base de datos.",
        "correct": false
      },
      {
        "number": 13,
        "prompt": "La fragmentación completa garantiza que todos los datos de la relación global están presentes en los fragmentos.",
        "correct": true
      },
      {
        "number": 14,
        "prompt": "La reconstrucción asegura que sea posible recomponer la relación global a partir de sus fragmentos.",
        "correct": true
      },
      {
        "number": 15,
        "prompt": "La propiedad de disjunción indica que los fragmentos no deben solaparse.",
        "correct": true
      },
      {
        "number": 16,
        "prompt": "En una BD distribuida, el DDBMS local y el global siempre deben ser idénticos para garantizar la homogeneidad.",
        "correct": false
      },
      {
        "number": 17,
        "prompt": "En la asignación “todas las localidades beneficiosas”, un fragmento se replica en cada localidad donde el beneficio neto sea positivo.",
        "correct": true
      },
      {
        "number": 18,
        "prompt": "La transparencia de nombre implica que todos los elementos de información tienen un identificador único en el sistema.",
        "correct": true
      },
      {
        "number": 19,
        "prompt": "El diseño de una base de datos distribuida incluye el diseño del esquema conceptual, lógico y físico.",
        "correct": true
      },
      {
        "number": 20,
        "prompt": "En las bases de datos federadas, el diseño se realiza de forma ascendente (bottom-up), integrando esquemas ya existentes.",
        "correct": true
      }
    ]
  }
];
