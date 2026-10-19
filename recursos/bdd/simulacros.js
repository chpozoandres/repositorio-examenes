const bddSimulationGroups = [
  {
    "title": "Simulacro 1",
    "questions": [
      {
        "number": 1,
        "prompt": "Una base de datos distribuida almacena sus datos en diferentes localidades de un sistema distribuido.",
        "correct": true,
        "explanation": ""
      },
      {
        "number": 2,
        "prompt": "En un sistema distribuido, todas las localidades dependen necesariamente de una localidad central para poder funcionar.",
        "correct": false,
        "explanation": "las localidades pueden operar autónomamente."
      },
      {
        "number": 3,
        "prompt": "Un DDBMS homogéneo utiliza el mismo DBMS para gestionar los diferentes fragmentos.",
        "correct": true,
        "explanation": ""
      },
      {
        "number": 4,
        "prompt": "Una base de datos federada se diseña desde el principio como una única base de datos distribuida.",
        "correct": false,
        "explanation": "eso corresponde a una BDD autonómica; una federada integra BD previamente existentes."
      },
      {
        "number": 5,
        "prompt": "En una base de datos federada, las bases componentes conservan cierto grado de autonomía.",
        "correct": true,
        "explanation": ""
      },
      {
        "number": 6,
        "prompt": "La transparencia de localización permite consultar los datos sin conocer la localidad concreta en la que están almacenados.",
        "correct": true,
        "explanation": ""
      },
      {
        "number": 7,
        "prompt": "Un asignador central de nombres aumenta la autonomía de las localidades.",
        "correct": false,
        "explanation": "introduce una dependencia central y reduce la autonomía."
      },
      {
        "number": 8,
        "prompt": "La transparencia de replicación permite que el usuario ignore que existen varias copias de un mismo dato.",
        "correct": true,
        "explanation": ""
      },
      {
        "number": 9,
        "prompt": "La independencia física evita que las aplicaciones se vean afectadas por cambios en los métodos de almacenamiento y acceso.",
        "correct": true,
        "explanation": ""
      },
      {
        "number": 10,
        "prompt": "En una base de datos distribuida, el diseño suele seguir una estrategia ascendente o bottom-up.",
        "correct": false,
        "explanation": "las BDD autonómicas siguen normalmente top-down."
      },
      {
        "number": 11,
        "prompt": "Maximizar el procesamiento local equivale a minimizar las referencias remotas.",
        "correct": true,
        "explanation": ""
      },
      {
        "number": 12,
        "prompt": "La replicación puede aumentar la disponibilidad y fiabilidad de los datos.",
        "correct": true,
        "explanation": ""
      },
      {
        "number": 13,
        "prompt": "La fragmentación horizontal divide una relación en subconjuntos de atributos.",
        "correct": false,
        "explanation": "divide en subconjuntos de tuplas."
      },
      {
        "number": 14,
        "prompt": "Una relación fragmentada horizontalmente se reconstruye mediante la unión de sus fragmentos.",
        "correct": true,
        "explanation": ""
      },
      {
        "number": 15,
        "prompt": "En fragmentación vertical se utiliza el operador de proyección para crear los fragmentos.",
        "correct": true,
        "explanation": ""
      },
      {
        "number": 16,
        "prompt": "La fragmentación horizontal derivada se basa en la fragmentación de otra relación.",
        "correct": true,
        "explanation": ""
      },
      {
        "number": 17,
        "prompt": "Un conjunto de predicados es minimal cuando todos sus predicados simples son relevantes.",
        "correct": true,
        "explanation": ""
      },
      {
        "number": 18,
        "prompt": "La asignación no redundante permite almacenar varias copias del mismo fragmento.",
        "correct": false,
        "explanation": "cada fragmento se almacena en una única localidad."
      },
      {
        "number": 19,
        "prompt": "En la estrategia de todas las localidades beneficiosas, se replica un fragmento en las localidades donde el beneficio de hacerlo sea positivo.",
        "correct": true,
        "explanation": ""
      },
      {
        "number": 20,
        "prompt": "Una fragmentación correcta debe permitir reconstruir la relación global original.",
        "correct": true,
        "explanation": ""
      }
    ]
  },
  {
    "title": "Simulacro 2",
    "questions": [
      {
        "number": 1,
        "prompt": "Los procesos globales utilizan datos procedentes de más de una localidad.",
        "correct": true,
        "explanation": ""
      },
      {
        "number": 2,
        "prompt": "Si todos los procesos de una organización son locales y no se comparten datos, una BDD distribuida es siempre la solución más adecuada.",
        "correct": false,
        "explanation": "serían más apropiadas bases de datos independientes."
      },
      {
        "number": 3,
        "prompt": "Cuando una localidad realiza muchos más accesos que las demás, puede resultar conveniente centralizar los datos en esa localidad.",
        "correct": true,
        "explanation": ""
      },
      {
        "number": 4,
        "prompt": "Una base de datos replicada puede ser especialmente adecuada cuando los datos compartidos se consultan mucho pero cambian poco.",
        "correct": true,
        "explanation": ""
      },
      {
        "number": 5,
        "prompt": "Un punto de acceso es necesariamente una localidad que almacena algún fragmento de la base de datos.",
        "correct": false,
        "explanation": "un punto de acceso es la localidad desde la que se consulta; no tiene por qué almacenar el dato."
      },
      {
        "number": 6,
        "prompt": "Un fragmento es una parte de la BDD almacenada en un punto de almacenamiento.",
        "correct": true,
        "explanation": ""
      },
      {
        "number": 7,
        "prompt": "En un DDBMS heterogéneo pueden existir diferencias de modelo de datos y lenguaje entre las localidades.",
        "correct": true,
        "explanation": ""
      },
      {
        "number": 8,
        "prompt": "Una mayor transparencia implica que el usuario necesita conocer más detalles de la distribución.",
        "correct": false,
        "explanation": "ocurre lo contrario."
      },
      {
        "number": 9,
        "prompt": "Incluir la localidad dentro del nombre completo de un dato puede reducir la transparencia.",
        "correct": true,
        "explanation": ""
      },
      {
        "number": 10,
        "prompt": "El control semántico de datos está relacionado con el cumplimiento de las restricciones de integridad.",
        "correct": true,
        "explanation": ""
      },
      {
        "number": 11,
        "prompt": "En el diseño top-down, la fragmentación se realiza antes de obtener el esquema lógico.",
        "correct": false,
        "explanation": "primero se diseña el esquema lógico y posteriormente la fragmentación."
      },
      {
        "number": 12,
        "prompt": "El diseño bottom-up se basa en integrar esquemas ya existentes.",
        "correct": true,
        "explanation": ""
      },
      {
        "number": 13,
        "prompt": "La completitud exige que todos los datos de la relación global aparezcan en algún fragmento.",
        "correct": true,
        "explanation": ""
      },
      {
        "number": 14,
        "prompt": "La propiedad de reconstrucción implica que los fragmentos deben ser siempre disjuntos.",
        "correct": false,
        "explanation": "reconstrucción y disyunción son propiedades diferentes."
      },
      {
        "number": 15,
        "prompt": "En fragmentación vertical puede ser necesario repetir una clave en varios fragmentos.",
        "correct": true,
        "explanation": ""
      },
      {
        "number": 16,
        "prompt": "La fragmentación mixta solo puede aplicar primero fragmentación horizontal y después vertical.",
        "correct": false,
        "explanation": "puede aplicarse horizontal sobre vertical o viceversa."
      },
      {
        "number": 17,
        "prompt": "Un predicado simple tiene la forma atributo-operador-valor.",
        "correct": true,
        "explanation": ""
      },
      {
        "number": 18,
        "prompt": "Un predicado que no provoca ninguna diferencia en los patrones de acceso de las aplicaciones puede considerarse irrelevante.",
        "correct": true,
        "explanation": ""
      },
      {
        "number": 19,
        "prompt": "La estrategia de replicación adicional comienza con una solución redundante y va eliminando copias.",
        "correct": false,
        "explanation": "parte de una solución no redundante y añade réplicas."
      },
      {
        "number": 20,
        "prompt": "La distribución de la carga de trabajo puede entrar en conflicto con el objetivo de maximizar el procesamiento local.",
        "correct": true,
        "explanation": ""
      }
    ]
  },
  {
    "title": "Simulacro 3",
    "questions": [
      {
        "number": 1,
        "prompt": "En una BDD, los programas de aplicación deben indicar siempre en qué localidad se encuentra cada dato.",
        "correct": false,
        "explanation": "una de las características buscadas es ocultar la localización."
      },
      {
        "number": 2,
        "prompt": "La transparencia pretende que una BDD pueda percibirse como una única base de datos.",
        "correct": true,
        "explanation": ""
      },
      {
        "number": 3,
        "prompt": "La autonomía local mide el grado de independencia que puede mantener una localidad respecto al resto del sistema.",
        "correct": true,
        "explanation": ""
      },
      {
        "number": 4,
        "prompt": "Las bases de datos distribuidas y federadas presentan exactamente el mismo grado de autonomía.",
        "correct": false,
        "explanation": "las federadas conservan mayor autonomía en sus componentes."
      },
      {
        "number": 5,
        "prompt": "Una BDD distribuida suele diseñarse mediante una estrategia descendente.",
        "correct": true,
        "explanation": ""
      },
      {
        "number": 6,
        "prompt": "En una base de datos federada no existen bases componentes previamente diseñadas.",
        "correct": false,
        "explanation": "precisamente integra bases previamente existentes."
      },
      {
        "number": 7,
        "prompt": "En una arquitectura federada, el esquema componente permite representar el esquema local mediante un modelo común.",
        "correct": true,
        "explanation": ""
      },
      {
        "number": 8,
        "prompt": "El esquema de exportación representa la parte del esquema componente que se comparte con la federación.",
        "correct": true,
        "explanation": ""
      },
      {
        "number": 9,
        "prompt": "El esquema federado integra información procedente de los distintos esquemas de exportación.",
        "correct": true,
        "explanation": ""
      },
      {
        "number": 10,
        "prompt": "El principal objetivo de la fragmentación es dividir los datos arbitrariamente en partes del mismo tamaño.",
        "correct": false,
        "explanation": "se buscan agrupaciones útiles según patrones de acceso y asignación."
      },
      {
        "number": 11,
        "prompt": "Los fragmentos deben agrupar datos que tengan propiedades similares desde el punto de vista de su asignación.",
        "correct": true,
        "explanation": ""
      },
      {
        "number": 12,
        "prompt": "La fragmentación horizontal primaria utiliza predicados de selección.",
        "correct": true,
        "explanation": ""
      },
      {
        "number": 13,
        "prompt": "Un conjunto completo de predicados implica necesariamente que todos sus predicados sean relevantes.",
        "correct": false,
        "explanation": "un conjunto puede ser completo y no minimal."
      },
      {
        "number": 14,
        "prompt": "Un conjunto minimal puede no ser completo.",
        "correct": true,
        "explanation": ""
      },
      {
        "number": 15,
        "prompt": "La fragmentación horizontal derivada puede ayudar a evitar productos naturales parciales que se sabe que serán vacíos.",
        "correct": true,
        "explanation": ""
      },
      {
        "number": 16,
        "prompt": "En el grafo de producto natural distribuido, una arista representa un producto natural no vacío entre fragmentos.",
        "correct": true,
        "explanation": ""
      },
      {
        "number": 17,
        "prompt": "En fragmentación vertical, lo ideal es que cada aplicación necesite acceder al mayor número posible de fragmentos.",
        "correct": false,
        "explanation": "se intenta que muchas aplicaciones puedan funcionar utilizando un único fragmento."
      },
      {
        "number": 18,
        "prompt": "La agrupación con solapamiento de atributos puede introducir replicación.",
        "correct": true,
        "explanation": ""
      },
      {
        "number": 19,
        "prompt": "La replicación suele favorecer especialmente a aplicaciones de lectura.",
        "correct": true,
        "explanation": ""
      },
      {
        "number": 20,
        "prompt": "Las actualizaciones pueden hacer menos conveniente una replicación elevada.",
        "correct": true,
        "explanation": ""
      }
    ]
  },
  {
    "title": "Simulacro 4",
    "questions": [
      {
        "number": 1,
        "prompt": "Si los datos de una organización se encuentran físicamente repartidos, necesariamente forman una base de datos distribuida.",
        "correct": false,
        "explanation": "que los datos estén físicamente separados no basta; deben gestionarse de forma integrada como BDD."
      },
      {
        "number": 2,
        "prompt": "Una BDD federada puede estar formada por bases componentes gestionadas por administradores diferentes.",
        "correct": true,
        "explanation": ""
      },
      {
        "number": 3,
        "prompt": "En una BDD convencional, los DBMS locales tienen más autonomía que en una federada.",
        "correct": false,
        "explanation": "ocurre lo contrario; las federadas mantienen mayor autonomía de los componentes."
      },
      {
        "number": 4,
        "prompt": "La transparencia del SGBD busca ocultar las diferencias entre los gestores utilizados en las distintas localidades.",
        "correct": true,
        "explanation": ""
      },
      {
        "number": 5,
        "prompt": "Un modelo de datos de referencia puede utilizarse para facilitar la interoperabilidad entre DBMS heterogéneos.",
        "correct": true,
        "explanation": ""
      },
      {
        "number": 6,
        "prompt": "En una base de datos distribuida, la fragmentación determina dónde se almacena físicamente cada fragmento.",
        "correct": false,
        "explanation": "eso corresponde a la asignación; la fragmentación establece la división lógica."
      },
      {
        "number": 7,
        "prompt": "La asignación determina la localización física de los fragmentos.",
        "correct": true,
        "explanation": ""
      },
      {
        "number": 8,
        "prompt": "La frecuencia de ejecución de las aplicaciones es información relevante para diseñar la distribución.",
        "correct": true,
        "explanation": ""
      },
      {
        "number": 9,
        "prompt": "Aumentar el número de copias de los datos mejora siempre el rendimiento global.",
        "correct": false,
        "explanation": "aumenta disponibilidad/lectura, pero puede elevar el coste de las actualizaciones."
      },
      {
        "number": 10,
        "prompt": "En una estrategia bottom-up pueden ser necesarias transformaciones desde modelos locales a un modelo común.",
        "correct": true,
        "explanation": ""
      },
      {
        "number": 11,
        "prompt": "La fragmentación horizontal completa implica que las cualificaciones cubren todos los valores permitidos.",
        "correct": true,
        "explanation": ""
      },
      {
        "number": 12,
        "prompt": "Una fragmentación horizontal disjunta permite que una misma tupla pertenezca simultáneamente a varios fragmentos.",
        "correct": false,
        "explanation": ""
      },
      {
        "number": 13,
        "prompt": "La fragmentación vertical se reconstruye mediante producto natural.",
        "correct": true,
        "explanation": ""
      },
      {
        "number": 14,
        "prompt": "La clave puede repetirse en distintos fragmentos verticales para garantizar la reconstrucción.",
        "correct": true,
        "explanation": ""
      },
      {
        "number": 15,
        "prompt": "Si una fragmentación cumple completitud, automáticamente cumple reconstrucción.",
        "correct": false,
        "explanation": "son propiedades distintas."
      },
      {
        "number": 16,
        "prompt": "Dos términos de predicados pueden diferenciarse mediante un predicado relevante si las aplicaciones acceden de forma distinta a los fragmentos resultantes.",
        "correct": true,
        "explanation": ""
      },
      {
        "number": 17,
        "prompt": "En una asignación no redundante, se selecciona normalmente la localidad con mayor beneficio para el fragmento.",
        "correct": true,
        "explanation": ""
      },
      {
        "number": 18,
        "prompt": "En una asignación redundante, las actualizaciones de las diferentes copias generan un coste que debe tenerse en cuenta.",
        "correct": true,
        "explanation": ""
      },
      {
        "number": 19,
        "prompt": "El grado de replicación no influye en el problema de asignación redundante.",
        "correct": false,
        "explanation": "el grado de replicación es una variable del problema."
      },
      {
        "number": 20,
        "prompt": "La disponibilidad y fiabilidad pueden formar parte del beneficio asociado a crear una nueva réplica.",
        "correct": true,
        "explanation": ""
      }
    ]
  },
  {
    "title": "Simulacro 5",
    "questions": [
      {
        "number": 1,
        "prompt": "En una base de datos distribuida, todos los datos deben estar replicados en todas las localidades.",
        "correct": false,
        "explanation": ""
      },
      {
        "number": 2,
        "prompt": "Una localidad de un sistema distribuido puede actuar de forma autónoma.",
        "correct": true,
        "explanation": ""
      },
      {
        "number": 3,
        "prompt": "Los DDBMS heterogéneos pueden requerir mecanismos de traducción entre modelos de datos y lenguajes.",
        "correct": true,
        "explanation": ""
      },
      {
        "number": 4,
        "prompt": "Las bases de datos autonómicas nacen de integrar bases de datos previamente independientes.",
        "correct": false,
        "explanation": "esa descripción corresponde a las federadas."
      },
      {
        "number": 5,
        "prompt": "En las bases federadas, las bases componentes pueden conservar su propio administrador.",
        "correct": true,
        "explanation": ""
      },
      {
        "number": 6,
        "prompt": "La transparencia de fragmentación evita que el usuario necesite conocer cómo se ha dividido una relación.",
        "correct": true,
        "explanation": ""
      },
      {
        "number": 7,
        "prompt": "La transparencia de nombres exige que todos los elementos de información puedan identificarse de forma única.",
        "correct": true,
        "explanation": ""
      },
      {
        "number": 8,
        "prompt": "La independencia lógica protege frente a cambios en la estructura física de almacenamiento.",
        "correct": false,
        "explanation": "eso corresponde a la independencia física."
      },
      {
        "number": 9,
        "prompt": "El diseño top-down parte de niveles de mayor abstracción y progresa hacia niveles físicos locales.",
        "correct": true,
        "explanation": ""
      },
      {
        "number": 10,
        "prompt": "El diseño bottom-up se utiliza para integrar esquemas existentes.",
        "correct": true,
        "explanation": ""
      },
      {
        "number": 11,
        "prompt": "En fragmentación horizontal, cada fragmento contiene un subconjunto de atributos.",
        "correct": false,
        "explanation": "contiene subconjuntos de tuplas."
      },
      {
        "number": 12,
        "prompt": "La fragmentación horizontal derivada utiliza la fragmentación de otra relación relacionada.",
        "correct": true,
        "explanation": ""
      },
      {
        "number": 13,
        "prompt": "Una fragmentación vertical completa requiere que cada atributo aparezca en al menos un fragmento.",
        "correct": true,
        "explanation": ""
      },
      {
        "number": 14,
        "prompt": "La fragmentación mixta puede representarse mediante un árbol de fragmentación.",
        "correct": true,
        "explanation": ""
      },
      {
        "number": 15,
        "prompt": "Un predicado simple irrelevante debería mantenerse siempre para garantizar que el conjunto sea minimal.",
        "correct": false,
        "explanation": "precisamente impediría que el conjunto fuese minimal."
      },
      {
        "number": 16,
        "prompt": "Un conjunto minimal está formado únicamente por predicados relevantes.",
        "correct": true,
        "explanation": ""
      },
      {
        "number": 17,
        "prompt": "La escisión vertical comienza con atributos independientes y los va agrupando.",
        "correct": false,
        "explanation": "eso corresponde a agrupación; la escisión parte de la relación completa."
      },
      {
        "number": 18,
        "prompt": "En asignación redundante puede almacenarse un mismo fragmento en más de una localidad.",
        "correct": true,
        "explanation": ""
      },
      {
        "number": 19,
        "prompt": "La estrategia de replicación adicional añade copias mientras estas sigan proporcionando beneficio.",
        "correct": true,
        "explanation": ""
      },
      {
        "number": 20,
        "prompt": "Si el beneficio de realizar una fragmentación vertical es positivo, la fragmentación puede considerarse beneficiosa.",
        "correct": true,
        "explanation": ""
      }
    ]
  }
];
