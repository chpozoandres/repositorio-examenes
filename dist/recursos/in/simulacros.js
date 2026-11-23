const inSimulationQuestionnaires = [
  {
    "title": "Simulacro 1 · Nivel básico",
    "exam": 1,
    "simulation": true,
    "source": "Simulacro de temas 4 y 5 aportado por el usuario",
    "questions": [
      {
        "number": 1,
        "prompt": "El algoritmo ID3 selecciona el atributo que...",
        "options": [
          "Tiene el mayor número de valores diferentes.",
          "Produce el mayor número de ramas.",
          "Tiene mayor correlación con el resto de atributos.",
          "Proporciona la mayor ganancia de información."
        ],
        "correct": [
          3
        ],
        "explanation": "ID3 selecciona el atributo con mayor ganancia de información."
      },
      {
        "number": 2,
        "prompt": "El clasificador ZeroR...",
        "options": [
          "Asigna siempre la clase mayoritaria.",
          "Utiliza un único atributo para generar reglas.",
          "Clasifica según los vecinos más cercanos.",
          "Calcula probabilidades mediante Bayes."
        ],
        "correct": [
          0
        ],
        "explanation": "ZeroR asigna siempre la clase mayoritaria."
      },
      {
        "number": 3,
        "prompt": "¿Qué caracteriza al aprendizaje perezoso?",
        "options": [
          "Construye un modelo durante el entrenamiento.",
          "Selecciona atributos utilizando entropía.",
          "Almacena los ejemplos y retrasa la clasificación.",
          "Elimina los ejemplos repetidos."
        ],
        "correct": [
          2
        ],
        "explanation": "El aprendizaje perezoso almacena ejemplos y retrasa la clasificación."
      },
      {
        "number": 4,
        "prompt": "El objetivo principal de la poda en árboles de decisión es...",
        "options": [
          "Incrementar el número de hojas.",
          "Reducir el sobreajuste.",
          "Eliminar la clase minoritaria.",
          "Aumentar la entropía del conjunto."
        ],
        "correct": [
          1
        ],
        "explanation": "La poda busca reducir el sobreajuste."
      },
      {
        "number": 5,
        "prompt": "¿Qué mide la precisión (Precision) de un clasificador binario?",
        "options": [
          "La proporción total de aciertos.",
          "La proporción de positivos reales identificados.",
          "La proporción de negativos correctamente detectados.",
          "La proporción de predicciones positivas que son correctas."
        ],
        "correct": [
          3
        ],
        "explanation": "Precision = VP / (VP + FP)."
      },
      {
        "number": 6,
        "prompt": "El algoritmo PRISM genera reglas...",
        "options": [
          "Seleccionando condiciones que aumentan la proporción de ejemplos de una clase.",
          "Calculando distancias euclídeas.",
          "Utilizando únicamente atributos numéricos.",
          "Mediante muestras Bootstrap."
        ],
        "correct": [
          0
        ],
        "explanation": "PRISM genera reglas mediante cobertura."
      },
      {
        "number": 7,
        "prompt": "La hipótesis fundamental de Naïve Bayes establece que...",
        "options": [
          "Todas las clases tienen la misma probabilidad.",
          "Los atributos deben ser numéricos.",
          "Los atributos son independientes condicionados a la clase.",
          "Los ejemplos de entrenamiento son independientes de su clase."
        ],
        "correct": [
          2
        ],
        "explanation": "Naïve Bayes supone independencia condicional."
      },
      {
        "number": 8,
        "prompt": "¿Qué diferencia principalmente a Bagging de Boosting?",
        "options": [
          "Bagging utiliza exclusivamente árboles.",
          "Bagging entrena modelos de forma independiente y Boosting de forma secuencial.",
          "Boosting no combina clasificadores.",
          "Bagging siempre elimina ejemplos con ruido."
        ],
        "correct": [
          1
        ],
        "explanation": "Bagging entrena modelos independientes y Boosting secuenciales."
      },
      {
        "number": 9,
        "prompt": "La normalización Z-score utiliza...",
        "options": [
          "Los valores mínimo y máximo.",
          "El número total de atributos.",
          "La clase mayoritaria.",
          "La media y la desviación típica."
        ],
        "correct": [
          3
        ],
        "explanation": "Z-score utiliza media y desviación típica."
      },
      {
        "number": 10,
        "prompt": "¿Qué técnica permite transformar variables nominales sin imponerles un orden?",
        "options": [
          "One-Hot Encoding.",
          "Codificación ordinal.",
          "Normalización decimal.",
          "Discretización por igual amplitud."
        ],
        "correct": [
          0
        ],
        "explanation": "One-Hot Encoding no introduce relaciones de orden."
      },
      {
        "number": 11,
        "prompt": "En la imputación KNNI, un atributo numérico suele estimarse mediante...",
        "options": [
          "La clase más frecuente.",
          "La media de todos los ejemplos del conjunto.",
          "La media de los vecinos más próximos.",
          "La ganancia de información."
        ],
        "correct": [
          2
        ],
        "explanation": "KNNI utiliza los valores de los vecinos seleccionados."
      },
      {
        "number": 12,
        "prompt": "Los métodos Wrapper de selección de características...",
        "options": [
          "Son independientes del clasificador.",
          "Evalúan subconjuntos entrenando y validando un modelo.",
          "Solo pueden utilizar atributos categóricos.",
          "Son siempre más rápidos que Filter."
        ],
        "correct": [
          1
        ],
        "explanation": "Wrapper evalúa subconjuntos entrenando clasificadores."
      },
      {
        "number": 13,
        "prompt": "El algoritmo CNN de selección de instancias...",
        "options": [
          "Elimina únicamente ejemplos de la clase mayoritaria.",
          "Construye nuevas variables a partir de las originales.",
          "Genera ejemplos sintéticos.",
          "Incorpora al subconjunto ejemplos mal clasificados por 1-NN."
        ],
        "correct": [
          3
        ],
        "explanation": "CNN incorpora ejemplos mal clasificados por 1-NN."
      },
      {
        "number": 14,
        "prompt": "¿Qué diferencia existe entre ruido y valores anómalos?",
        "options": [
          "Un valor anómalo puede ser correcto, mientras que el ruido supone una alteración o error.",
          "Los outliers siempre deben eliminarse.",
          "El ruido solo aparece en atributos numéricos.",
          "Los valores anómalos siempre tienen etiquetas incorrectas."
        ],
        "correct": [
          0
        ],
        "explanation": "Un outlier puede ser una observación válida."
      },
      {
        "number": 15,
        "prompt": "La discretización por igual frecuencia consiste en...",
        "options": [
          "Generar intervalos de igual anchura.",
          "Utilizar la clase objetivo para dividir los datos.",
          "Generar intervalos con cantidades similares de ejemplos.",
          "Crear variables binarias."
        ],
        "correct": [
          2
        ],
        "explanation": "Igual frecuencia busca equilibrar los ejemplos por intervalo."
      },
      {
        "number": 16,
        "prompt": "¿Qué algoritmo de filtrado de ruido aplica CVCF repetidamente?",
        "options": [
          "CNN.",
          "IPF.",
          "ENN.",
          "SMOTE."
        ],
        "correct": [
          1
        ],
        "explanation": "IPF aplica CVCF de forma iterativa."
      },
      {
        "number": 17,
        "prompt": "¿Cuál es el principal objetivo de PCA?",
        "options": [
          "Corregir las etiquetas.",
          "Equilibrar las clases.",
          "Duplicar ejemplos minoritarios.",
          "Reducir dimensionalidad conservando la mayor varianza posible."
        ],
        "correct": [
          3
        ],
        "explanation": "PCA conserva la mayor varianza posible en menos dimensiones."
      },
      {
        "number": 18,
        "prompt": "La selección Forward de características...",
        "options": [
          "Parte del conjunto vacío y añade atributos progresivamente.",
          "Parte de todos los atributos y elimina los menos relevantes.",
          "Genera nuevas instancias.",
          "Utiliza siempre el algoritmo k-NN."
        ],
        "correct": [
          0
        ],
        "explanation": "Forward comienza con el conjunto vacío."
      },
      {
        "number": 19,
        "prompt": "El algoritmo ENN...",
        "options": [
          "Conserva siempre los ejemplos situados en la frontera.",
          "Añade los ejemplos mal clasificados.",
          "Elimina ejemplos cuya clase discrepa de la predicha por sus vecinos.",
          "Genera nuevas instancias por interpolación."
        ],
        "correct": [
          2
        ],
        "explanation": "ENN elimina ejemplos discordantes con sus vecinos."
      },
      {
        "number": 20,
        "prompt": "¿Qué técnica de balanceo genera ejemplos sintéticos de la clase minoritaria?",
        "options": [
          "RUS.",
          "SMOTE.",
          "ROS.",
          "CVCF."
        ],
        "correct": [
          1
        ],
        "explanation": "SMOTE genera ejemplos sintéticos por interpolación."
      }
    ]
  },
  {
    "title": "Simulacro 2 · Nivel intermedio",
    "exam": 1,
    "simulation": true,
    "source": "Simulacro de temas 4 y 5 aportado por el usuario",
    "questions": [
      {
        "number": 1,
        "prompt": "Si todos los ejemplos de un nodo pertenecen a la misma clase, la entropía es...",
        "options": [
          "1.",
          "0,5.",
          "0.",
          "Depende del número de atributos."
        ],
        "correct": [
          2
        ],
        "explanation": "Un nodo puro tiene entropía cero."
      },
      {
        "number": 2,
        "prompt": "En un árbol construido mediante el índice de Gini, se selecciona el atributo que...",
        "options": [
          "Minimiza la impureza ponderada de los subconjuntos.",
          "Maximiza la impureza posterior.",
          "Genera siempre dos ramas.",
          "Tiene menor número de ejemplos."
        ],
        "correct": [
          0
        ],
        "explanation": "Se selecciona el atributo que produce menor Gini ponderado."
      },
      {
        "number": 3,
        "prompt": "El algoritmo OneR selecciona...",
        "options": [
          "La regla con mayor número de condiciones.",
          "Los ejemplos más próximos.",
          "El atributo más correlacionado con todos los demás.",
          "El atributo cuyas reglas producen menos errores."
        ],
        "correct": [
          3
        ],
        "explanation": "OneR escoge el atributo con menor error de clasificación."
      },
      {
        "number": 4,
        "prompt": "El Recall de un clasificador con VP = 40 y FN = 10 es...",
        "options": [
          "0,4.",
          "0,8.",
          "0,5.",
          "0,9."
        ],
        "correct": [
          1
        ],
        "explanation": "Recall = 40 / (40 + 10) = 0,8."
      },
      {
        "number": 5,
        "prompt": "¿Qué representa el F1-score?",
        "options": [
          "La media aritmética de Accuracy y Recall.",
          "La media geométrica de TPR y TNR.",
          "La media armónica de Precision y Recall.",
          "La proporción de negativos correctos."
        ],
        "correct": [
          2
        ],
        "explanation": "F1 combina Precision y Recall mediante su media armónica."
      },
      {
        "number": 6,
        "prompt": "La validación cruzada k-fold consiste en...",
        "options": [
          "Entrenar k modelos alternando la partición utilizada para prueba.",
          "Utilizar siempre el mismo subconjunto de prueba.",
          "Realizar muestras exclusivamente con reemplazamiento.",
          "Eliminar k ejemplos de entrenamiento."
        ],
        "correct": [
          0
        ],
        "explanation": "Cada partición actúa una vez como conjunto de prueba."
      },
      {
        "number": 7,
        "prompt": "¿Qué mejora introduce C4.5 respecto a ID3?",
        "options": [
          "Solo utiliza atributos nominales.",
          "No necesita criterios de división.",
          "No permite podar árboles.",
          "Puede utilizar razón de ganancia, umbrales y poda."
        ],
        "correct": [
          3
        ],
        "explanation": "C4.5 incorpora razón de ganancia, umbrales y poda."
      },
      {
        "number": 8,
        "prompt": "Una regla perfecta de PRISM...",
        "options": [
          "Contiene todos los atributos.",
          "Cubre únicamente ejemplos de la clase objetivo.",
          "Predice todas las clases posibles.",
          "Necesita abarcar todos los ejemplos del conjunto."
        ],
        "correct": [
          1
        ],
        "explanation": "Una regla perfecta cubre exclusivamente ejemplos de la clase objetivo."
      },
      {
        "number": 9,
        "prompt": "El suavizado de Laplace en Naïve Bayes evita...",
        "options": [
          "La necesidad de calcular probabilidades.",
          "Que las clases estén desbalanceadas.",
          "Estimaciones de probabilidad cero para valores no observados.",
          "El uso de atributos categóricos."
        ],
        "correct": [
          2
        ],
        "explanation": "Laplace evita probabilidades estimadas iguales a cero."
      },
      {
        "number": 10,
        "prompt": "Para cuatro clases, One-vs-One necesita...",
        "options": [
          "6 clasificadores.",
          "4 clasificadores.",
          "8 clasificadores.",
          "12 clasificadores."
        ],
        "correct": [
          0
        ],
        "explanation": "4 × 3 / 2 = 6 clasificadores."
      },
      {
        "number": 11,
        "prompt": "¿Cuál es una característica de Random Forest?",
        "options": [
          "Utiliza siempre un único árbol.",
          "No aplica Bootstrap.",
          "Selecciona un solo atributo para todo el bosque.",
          "Selecciona aleatoriamente atributos candidatos en cada división."
        ],
        "correct": [
          3
        ],
        "explanation": "Random Forest selecciona atributos candidatos aleatoriamente."
      },
      {
        "number": 12,
        "prompt": "¿Qué problema puede producir el sobremuestreo aleatorio ROS?",
        "options": [
          "Eliminar demasiadas instancias mayoritarias.",
          "Sobreajuste por duplicación de ejemplos.",
          "Imposibilidad de trabajar con clases binarias.",
          "Pérdida obligatoria de todos los outliers."
        ],
        "correct": [
          1
        ],
        "explanation": "ROS duplica ejemplos y puede favorecer el sobreajuste."
      },
      {
        "number": 13,
        "prompt": "El algoritmo CNN se clasifica como...",
        "options": [
          "Método de edición.",
          "Método de imputación.",
          "Método de condensación.",
          "Método de discretización."
        ],
        "correct": [
          2
        ],
        "explanation": "CNN es un algoritmo de condensación."
      },
      {
        "number": 14,
        "prompt": "¿Qué técnica de discretización utiliza la información de las clases?",
        "options": [
          "Entropy-MDLP.",
          "Igual amplitud.",
          "Igual frecuencia.",
          "Escala decimal."
        ],
        "correct": [
          0
        ],
        "explanation": "Entropy-MDLP utiliza las etiquetas de clase."
      },
      {
        "number": 15,
        "prompt": "El método Feature Hashing presenta como inconveniente...",
        "options": [
          "Que exige categorías ordenadas.",
          "Que siempre genera más variables que One-Hot.",
          "Que no puede trabajar con texto.",
          "La aparición de colisiones entre categorías."
        ],
        "correct": [
          3
        ],
        "explanation": "Feature Hashing puede producir colisiones."
      },
      {
        "number": 16,
        "prompt": "Una correlación de Pearson próxima a -1 indica...",
        "options": [
          "Independencia estadística.",
          "Relación lineal negativa fuerte.",
          "Relación positiva fuerte.",
          "Ausencia de relaciones entre atributos."
        ],
        "correct": [
          1
        ],
        "explanation": "Un coeficiente próximo a -1 indica correlación lineal negativa intensa."
      },
      {
        "number": 17,
        "prompt": "El algoritmo CVCF se diferencia de EF principalmente porque...",
        "options": [
          "No necesita clasificadores.",
          "Genera ejemplos sintéticos.",
          "Utiliza el mismo algoritmo base para los modelos y estos evalúan todos los ejemplos.",
          "Solo admite atributos numéricos."
        ],
        "correct": [
          2
        ],
        "explanation": "CVCF utiliza el mismo algoritmo base y evalúa todos los ejemplos."
      },
      {
        "number": 18,
        "prompt": "En KNNI, cuando dos ejemplos tienen valores ausentes...",
        "options": [
          "La distancia puede calcularse usando los atributos conocidos en ambos.",
          "Se asigna distancia cero.",
          "Siempre se eliminan ambos ejemplos.",
          "Se utiliza obligatoriamente la distancia de Hamming."
        ],
        "correct": [
          0
        ],
        "explanation": "Se consideran los atributos conocidos en ambos ejemplos."
      },
      {
        "number": 19,
        "prompt": "En la selección Backward...",
        "options": [
          "Se parte del conjunto vacío.",
          "Se añaden nuevas variables.",
          "Solo se consideran atributos numéricos.",
          "Se parte de todos los atributos y se eliminan progresivamente."
        ],
        "correct": [
          3
        ],
        "explanation": "Backward empieza con todos los atributos."
      },
      {
        "number": 20,
        "prompt": "SMOTE genera un ejemplo numérico mediante...",
        "options": [
          "La media de toda la clase mayoritaria.",
          "La interpolación entre dos ejemplos de la clase minoritaria.",
          "La normalización Z-score.",
          "La eliminación de valores extremos."
        ],
        "correct": [
          1
        ],
        "explanation": "SMOTE interpola entre ejemplos minoritarios."
      }
    ]
  },
  {
    "title": "Simulacro 3 · Nivel avanzado",
    "exam": 1,
    "simulation": true,
    "source": "Simulacro de temas 4 y 5 aportado por el usuario",
    "questions": [
      {
        "number": 1,
        "prompt": "Si un clasificador obtiene VP = 30, FP = 10, FN = 20 y VN = 40, ¿cuál es su Accuracy?",
        "options": [
          "0,60.",
          "0,75.",
          "0,70.",
          "0,80."
        ],
        "correct": [
          2
        ],
        "explanation": "Accuracy = (30 + 40) / 100 = 0,70."
      },
      {
        "number": 2,
        "prompt": "Para un problema binario, un índice de Gini igual a cero indica...",
        "options": [
          "Que todos los ejemplos pertenecen a la misma clase.",
          "Que las clases están equilibradas.",
          "Que el atributo tiene dos valores.",
          "Que el conjunto está vacío necesariamente."
        ],
        "correct": [
          0
        ],
        "explanation": "Gini = 0 indica un nodo puro."
      },
      {
        "number": 3,
        "prompt": "Si al dividir un conjunto su entropía pasa de 0,9 a una entropía ponderada de 0,4, la ganancia es...",
        "options": [
          "1,3.",
          "0,4.",
          "0,9.",
          "0,5."
        ],
        "correct": [
          3
        ],
        "explanation": "Ganancia = 0,9 − 0,4 = 0,5."
      },
      {
        "number": 4,
        "prompt": "El algoritmo PRISM selecciona una condición en función de...",
        "options": [
          "El número de atributos del dataset.",
          "La proporción de ejemplos de la clase objetivo entre los cubiertos.",
          "La distancia a la media global.",
          "El número total de clases."
        ],
        "correct": [
          1
        ],
        "explanation": "PRISM maximiza la proporción de ejemplos de la clase objetivo entre los cubiertos."
      },
      {
        "number": 5,
        "prompt": "¿Cuál de estas afirmaciones sobre Naïve Bayes es correcta?",
        "options": [
          "Requiere que todos los atributos sean binarios.",
          "Su clase predicha se obtiene exclusivamente mediante distancias.",
          "Multiplica probabilidades condicionadas gracias a su hipótesis de independencia.",
          "Siempre ofrece probabilidades exactamente calibradas."
        ],
        "correct": [
          2
        ],
        "explanation": "Naïve Bayes supone independencia condicional de los atributos."
      },
      {
        "number": 6,
        "prompt": "¿Qué caracteriza a Bootstrap?",
        "options": [
          "Realiza muestreo con reemplazamiento.",
          "Divide los datos en folds sin repetición.",
          "Selecciona únicamente la clase minoritaria.",
          "Elimina todos los valores perdidos."
        ],
        "correct": [
          0
        ],
        "explanation": "Bootstrap utiliza muestreo con reemplazamiento."
      },
      {
        "number": 7,
        "prompt": "Si una variable presenta valores entre 20 y 80, ¿cuál es la normalización Min-Max de 50 al intervalo [0,1]?",
        "options": [
          "0,25.",
          "0,75.",
          "0,80.",
          "0,50."
        ],
        "correct": [
          3
        ],
        "explanation": "(50 − 20) / (80 − 20) = 0,5."
      },
      {
        "number": 8,
        "prompt": "¿Cuál es el inconveniente principal de utilizar códigos 1, 2 y 3 para categorías nominales sin orden?",
        "options": [
          "Impide cualquier comparación.",
          "Introduce relaciones de orden artificiales.",
          "Aumenta demasiado el número de atributos.",
          "Convierte los datos en valores ausentes."
        ],
        "correct": [
          1
        ],
        "explanation": "La codificación ordinal introduce un orden artificial."
      },
      {
        "number": 9,
        "prompt": "¿Qué método de selección es generalmente más costoso computacionalmente?",
        "options": [
          "Filter.",
          "Ranking por correlación.",
          "Wrapper.",
          "Normalización por escala decimal."
        ],
        "correct": [
          2
        ],
        "explanation": "Wrapper entrena y evalúa clasificadores para cada subconjunto."
      },
      {
        "number": 10,
        "prompt": "La selección Forward y la selección Backward se diferencian en...",
        "options": [
          "Añadir atributos desde el vacío frente a eliminarlos desde el conjunto completo.",
          "Utilizar clases nominales frente a numéricas.",
          "Aplicar aprendizaje supervisado frente a no supervisado.",
          "Trabajar con instancias frente a características."
        ],
        "correct": [
          0
        ],
        "explanation": "Forward añade atributos y Backward los elimina."
      },
      {
        "number": 11,
        "prompt": "Un inconveniente de PCA es...",
        "options": [
          "Que siempre aumenta las dimensiones.",
          "Que solo admite datos categóricos.",
          "Que no reduce la redundancia.",
          "Que puede dificultar la interpretabilidad de las variables."
        ],
        "correct": [
          3
        ],
        "explanation": "Los componentes principales pueden ser menos interpretables."
      },
      {
        "number": 12,
        "prompt": "El algoritmo ENN clasifica cada ejemplo utilizando...",
        "options": [
          "Todos los atributos menos relevantes.",
          "Sus k vecinos más cercanos, excluyendo el propio ejemplo.",
          "Las probabilidades previas de Naïve Bayes.",
          "El centroide de la clase mayoritaria exclusivamente."
        ],
        "correct": [
          1
        ],
        "explanation": "ENN utiliza los vecinos más cercanos sin incluir el propio ejemplo."
      },
      {
        "number": 13,
        "prompt": "¿Qué sucede si se incrementa mucho k en k-NN?",
        "options": [
          "Se eliminan todos los ejemplos ruidosos.",
          "El algoritmo deja de utilizar distancias.",
          "Las decisiones pueden ser más estables, pero menos locales.",
          "El clasificador se convierte en Naïve Bayes."
        ],
        "correct": [
          2
        ],
        "explanation": "Un valor alto de k suaviza las decisiones, pero reduce su carácter local."
      },
      {
        "number": 14,
        "prompt": "Si SMOTE utiliza x = 2, x_vecino = 10 y λ = 0,25, el valor sintético es...",
        "options": [
          "4.",
          "6.",
          "8.",
          "3."
        ],
        "correct": [
          0
        ],
        "explanation": "2 + 0,25 × (10 − 2) = 4."
      },
      {
        "number": 15,
        "prompt": "¿Qué técnica de filtrado de ruido elimina un ejemplo por consenso?",
        "options": [
          "Cuando falla un único clasificador.",
          "Cuando la mayoría simple lo clasifica bien.",
          "Cuando tiene una distancia elevada a la media.",
          "Cuando todos los clasificadores lo predicen incorrectamente."
        ],
        "correct": [
          3
        ],
        "explanation": "El consenso exige que todos los clasificadores indiquen un error."
      },
      {
        "number": 16,
        "prompt": "La discretización por igual frecuencia puede provocar...",
        "options": [
          "Que todos los intervalos tengan igual anchura.",
          "Que los intervalos tengan amplitudes diferentes.",
          "Que la variable deje de tener ejemplos.",
          "Que sea obligatorio usar la clase objetivo."
        ],
        "correct": [
          1
        ],
        "explanation": "Igual frecuencia puede generar intervalos de anchuras diferentes."
      },
      {
        "number": 17,
        "prompt": "¿Qué método permite reducir directamente la cantidad de ejemplos sin crear otros nuevos?",
        "options": [
          "PCA.",
          "One-Hot Encoding.",
          "Selección de instancias.",
          "Extracción de características."
        ],
        "correct": [
          2
        ],
        "explanation": "La selección de instancias conserva un subconjunto de los ejemplos originales."
      },
      {
        "number": 18,
        "prompt": "Si tenemos cinco clases, ¿cuántos clasificadores necesita One-vs-All?",
        "options": [
          "5.",
          "10.",
          "15.",
          "20."
        ],
        "correct": [
          0
        ],
        "explanation": "One-vs-All construye un clasificador por clase."
      },
      {
        "number": 19,
        "prompt": "¿Qué mide la G-mean en clasificación binaria?",
        "options": [
          "La diferencia entre VP y FP.",
          "La tasa de aciertos total.",
          "La media aritmética de precisión y sensibilidad.",
          "La media geométrica de sensibilidad y especificidad."
        ],
        "correct": [
          3
        ],
        "explanation": "G-mean = √(TPR × TNR)."
      },
      {
        "number": 20,
        "prompt": "¿Qué riesgo existe si aplicamos SMOTE antes de separar entrenamiento y prueba?",
        "options": [
          "Se eliminan todas las clases minoritarias.",
          "Puede producirse fuga de información entre entrenamiento y evaluación.",
          "La normalización pasa a ser imposible.",
          "Todos los modelos se vuelven idénticos."
        ],
        "correct": [
          1
        ],
        "explanation": "Aplicar SMOTE antes de separar los datos puede introducir fuga de información."
      }
    ]
  },
  {
    "title": "Simulacro 1 - Temas 6–9",
    "exam": 2,
    "simulation": true,
    "source": "Simulacro de Kahoot aportado por el usuario",
    "questions": [
      {
        "number": 1,
        "prompt": "¿Qué inconveniente presenta k-means?",
        "options": [
          "Con distancia euclídea genera regiones de asignación convexas.",
          "No converge en conjuntos de datos finitos.",
          "No utiliza centroides.",
          "Determina automáticamente el número óptimo de clusters."
        ],
        "correct": [
          0
        ],
        "explanation": "Respuesta correcta: A. Con distancia euclídea genera regiones de asignación convexas."
      },
      {
        "number": 2,
        "prompt": "En BIRCH, ¿qué información almacena la característica de clustering (CF)?",
        "options": [
          "Centroide, radio y diámetro.",
          "Número de objetos, suma lineal y suma cuadrática.",
          "Número de etiquetas, entropía y ganancia.",
          "Soporte, confianza y lift."
        ],
        "correct": [
          1
        ],
        "explanation": "Respuesta correcta: B. Número de objetos, suma lineal y suma cuadrática."
      },
      {
        "number": 3,
        "prompt": "¿Qué distancia utiliza el enlace simple en clustering aglomerativo?",
        "options": [
          "La máxima entre objetos de ambos clusters.",
          "La media de todas las distancias.",
          "La mínima entre objetos de ambos clusters.",
          "La distancia entre los centroides."
        ],
        "correct": [
          2
        ],
        "explanation": "Respuesta correcta: C. La mínima entre objetos de ambos clusters."
      },
      {
        "number": 4,
        "prompt": "En DBSCAN, ¿qué caracteriza a un punto núcleo?",
        "options": [
          "Es el punto más próximo al centroide.",
          "Solo puede tener vecinos de su misma clase.",
          "Siempre está en la frontera del cluster.",
          "Su vecindad de radio ε contiene al menos minPts puntos."
        ],
        "correct": [
          3
        ],
        "explanation": "Respuesta correcta: D. Su vecindad de radio ε contiene al menos minPts puntos."
      },
      {
        "number": 5,
        "prompt": "¿Qué indica un coeficiente Silhouette próximo a −1?",
        "options": [
          "El objeto podría estar asignado a un cluster incorrecto.",
          "El objeto está muy bien agrupado.",
          "El número de clusters es óptimo.",
          "El objeto pertenece necesariamente a un cluster vacío."
        ],
        "correct": [
          0
        ],
        "explanation": "Respuesta correcta: A. El objeto podría estar asignado a un cluster incorrecto."
      },
      {
        "number": 6,
        "prompt": "¿Cuál es el principio Apriori?",
        "options": [
          "Todo superconjunto de un conjunto frecuente es frecuente.",
          "Los conjuntos frecuentes tienen siempre confianza alta.",
          "Todos los subconjuntos de un conjunto frecuente son frecuentes.",
          "Los conjuntos infrecuentes no pueden contener subconjuntos frecuentes."
        ],
        "correct": [
          2
        ],
        "explanation": "Respuesta correcta: C. Todos los subconjuntos de un conjunto frecuente son frecuentes."
      },
      {
        "number": 7,
        "prompt": "¿Cómo se calcula el lift de la regla A ⇒ B?",
        "options": [
          "P(A) / P(B).",
          "P(B | A) / P(B).",
          "P(A ∩ B) / P(A).",
          "P(B | A) · P(B)."
        ],
        "correct": [
          1
        ],
        "explanation": "Respuesta correcta: B. P(B | A) / P(B)."
      },
      {
        "number": 8,
        "prompt": "Al invertir A ⇒ B por B ⇒ A, ¿qué medida puede cambiar?",
        "options": [
          "El soporte de la pareja.",
          "El número de transacciones que contienen A y B.",
          "La frecuencia conjunta de A y B.",
          "La confianza de la regla."
        ],
        "correct": [
          3
        ],
        "explanation": "Respuesta correcta: D. La confianza de la regla."
      },
      {
        "number": 9,
        "prompt": "¿Cuándo se poda un candidato de tres ítems en Apriori?",
        "options": [
          "Cuando alguna de sus parejas no es frecuente.",
          "Cuando contiene tres subconjuntos frecuentes.",
          "Cuando su confianza es inferior al 100 %.",
          "Cuando tiene más soporte que sus subconjuntos."
        ],
        "correct": [
          0
        ],
        "explanation": "Respuesta correcta: A. Cuando alguna de sus parejas no es frecuente."
      },
      {
        "number": 10,
        "prompt": "¿Qué caracteriza a FP-Growth frente a Apriori?",
        "options": [
          "Necesita generar todas las combinaciones posibles.",
          "No utiliza soporte mínimo.",
          "Utiliza un FP-tree sin generar explícitamente todos los candidatos.",
          "Solo encuentra reglas con confianza del 100 %."
        ],
        "correct": [
          2
        ],
        "explanation": "Respuesta correcta: C. Utiliza un FP-tree sin generar explícitamente todos los candidatos."
      },
      {
        "number": 11,
        "prompt": "¿Para qué sirve principalmente el pooling en una CNN?",
        "options": [
          "Para actualizar los pesos mediante gradientes.",
          "Para reducir las dimensiones espaciales de los mapas de características.",
          "Para generar nuevos ejemplos artificiales.",
          "Para aumentar el número de filtros."
        ],
        "correct": [
          1
        ],
        "explanation": "Respuesta correcta: B. Para reducir las dimensiones espaciales de los mapas de características."
      },
      {
        "number": 12,
        "prompt": "¿Qué algoritmo se utiliza habitualmente para calcular los gradientes durante el entrenamiento de una CNN?",
        "options": [
          "Gradient Boosting.",
          "Expectation-Maximization.",
          "Apriori.",
          "Backpropagation."
        ],
        "correct": [
          3
        ],
        "explanation": "Respuesta correcta: D. Backpropagation."
      },
      {
        "number": 13,
        "prompt": "¿Qué significa que una CNN utiliza pesos compartidos?",
        "options": [
          "El mismo filtro se aplica en distintas posiciones.",
          "Todas las neuronas tienen pesos iguales.",
          "Todas las capas comparten un único peso.",
          "Los pesos no se actualizan durante el entrenamiento."
        ],
        "correct": [
          0
        ],
        "explanation": "Respuesta correcta: A. El mismo filtro se aplica en distintas posiciones."
      },
      {
        "number": 14,
        "prompt": "¿Cuál es el objetivo principal de un autoencoder?",
        "options": [
          "Determinar un número óptimo de clusters.",
          "Asignar varias clases a un objeto.",
          "Aprender una representación que permita reconstruir la entrada.",
          "Maximizar la distancia entre clases."
        ],
        "correct": [
          2
        ],
        "explanation": "Respuesta correcta: C. Aprender una representación que permita reconstruir la entrada."
      },
      {
        "number": 15,
        "prompt": "¿Qué redes componen una GAN?",
        "options": [
          "Encoder y decoder.",
          "Dos clasificadores k-NN.",
          "Una red recurrente y una convolucional.",
          "Generador y discriminador."
        ],
        "correct": [
          3
        ],
        "explanation": "Respuesta correcta: D. Generador y discriminador."
      },
      {
        "number": 16,
        "prompt": "¿Qué problema puede presentar SMOTE?",
        "options": [
          "Sobregeneralización al generar ejemplos minoritarios cerca de zonas mayoritarias.",
          "Eliminación obligatoria de todos los ejemplos minoritarios.",
          "Generación exclusiva de ejemplos mayoritarios.",
          "Imposibilidad de utilizar vecinos cercanos."
        ],
        "correct": [
          0
        ],
        "explanation": "Respuesta correcta: A. Sobregeneralización al generar ejemplos minoritarios cerca de zonas mayoritarias."
      },
      {
        "number": 17,
        "prompt": "¿Qué es el aprendizaje multietiqueta?",
        "options": [
          "Cada conjunto de datos solo puede tener una clase.",
          "Cada atributo debe tener varias etiquetas.",
          "Un mismo ejemplo puede pertenecer a varias clases.",
          "Cada ejemplo se divide en varias instancias independientes."
        ],
        "correct": [
          2
        ],
        "explanation": "Respuesta correcta: C. Un mismo ejemplo puede pertenecer a varias clases."
      },
      {
        "number": 18,
        "prompt": "¿Cómo se calcula la relación de desequilibrio (IR) en un problema binario?",
        "options": [
          "N minoritaria / N total.",
          "N mayoritaria / N minoritaria.",
          "N total / N atributos.",
          "N falsos positivos / N falsos negativos."
        ],
        "correct": [
          1
        ],
        "explanation": "Respuesta correcta: B. N mayoritaria / N minoritaria."
      },
      {
        "number": 19,
        "prompt": "¿Qué caracteriza al aprendizaje semisupervisado inductivo?",
        "options": [
          "Solo predice los ejemplos usados en entrenamiento.",
          "No admite datos etiquetados.",
          "Utiliza exclusivamente grafos.",
          "Construye un modelo aplicable a nuevos ejemplos."
        ],
        "correct": [
          3
        ],
        "explanation": "Respuesta correcta: D. Construye un modelo aplicable a nuevos ejemplos."
      },
      {
        "number": 20,
        "prompt": "¿Qué caracteriza a la variable objetivo en regresión ordinal?",
        "options": [
          "Es numérica continua.",
          "Tiene categorías ordenadas sin distancias necesariamente definidas.",
          "Tiene categorías sin relación de orden.",
          "Contiene varias etiquetas simultáneas."
        ],
        "correct": [
          1
        ],
        "explanation": "Respuesta correcta: B. Tiene categorías ordenadas sin distancias necesariamente definidas."
      }
    ]
  },
  {
    "title": "Simulacro 2 - Temas 6-9",
    "exam": 2,
    "simulation": true,
    "source": "Simulacro aportado por el usuario, temas 6 a 9",
    "questions": [
      {
        "number": 1,
        "prompt": "¿Qué criterio utiliza el método de Ward para fusionar clusters?",
        "options": [
          "La distancia mínima entre objetos de distintos clusters.",
          "La distancia máxima entre objetos de distintos clusters.",
          "El menor incremento de la dispersión interna.",
          "La mayor distancia entre centroides."
        ],
        "correct": [
          2
        ],
        "explanation": "Respuesta correcta: C. El menor incremento de la dispersión interna."
      },
      {
        "number": 2,
        "prompt": "¿Qué indica un lift igual a 1 en una regla de asociación?",
        "options": [
          "La regla tiene una confianza del 100 %.",
          "El antecedente y el consecuente son independientes.",
          "Existe una asociación positiva.",
          "El soporte de la regla es mínimo."
        ],
        "correct": [
          1
        ],
        "explanation": "Respuesta correcta: B. El antecedente y el consecuente son independientes."
      },
      {
        "number": 3,
        "prompt": "¿Qué caracteriza a los campos receptivos locales de una CNN?",
        "options": [
          "Cada neurona analiza toda la imagen.",
          "Todas las neuronas tienen los mismos pesos.",
          "Cada neurona analiza una pequeña región de la entrada.",
          "Cada capa tiene una única neurona."
        ],
        "correct": [
          2
        ],
        "explanation": "Respuesta correcta: C. Cada neurona analiza una pequeña región de la entrada."
      },
      {
        "number": 4,
        "prompt": "¿Por qué puede resultar engañosa la Accuracy en conjuntos desbalanceados?",
        "options": [
          "Porque solo considera los falsos positivos.",
          "Porque no puede calcularse con dos clases.",
          "Porque siempre proporciona valores inferiores al Recall.",
          "Porque puede ser elevada aunque no se reconozca la clase minoritaria."
        ],
        "correct": [
          3
        ],
        "explanation": "Respuesta correcta: D. Porque puede ser elevada aunque no se reconozca la clase minoritaria."
      },
      {
        "number": 5,
        "prompt": "En clustering jerárquico, ¿qué criterio utiliza Complete Linkage?",
        "options": [
          "La máxima distancia entre objetos de distintos clusters.",
          "La mínima distancia entre objetos de distintos clusters.",
          "La distancia entre centroides.",
          "La media de las distancias intracluster."
        ],
        "correct": [
          0
        ],
        "explanation": "Respuesta correcta: A. La máxima distancia entre objetos de distintos clusters."
      },
      {
        "number": 6,
        "prompt": "¿Qué mide la confianza de una regla A ⇒ B?",
        "options": [
          "La proporción de transacciones que contienen A o B.",
          "La probabilidad de que aparezca B cuando aparece A.",
          "La probabilidad de que aparezca A cuando aparece B.",
          "La frecuencia global de B."
        ],
        "correct": [
          1
        ],
        "explanation": "Respuesta correcta: B. La probabilidad de que aparezca B cuando aparece A."
      },
      {
        "number": 7,
        "prompt": "¿Qué representa el kernel en una CNN?",
        "options": [
          "Una función que determina el número de clases.",
          "Un conjunto de etiquetas de entrenamiento.",
          "Un filtro que se desplaza sobre la entrada para detectar características.",
          "Un algoritmo de optimización de los pesos."
        ],
        "correct": [
          2
        ],
        "explanation": "Respuesta correcta: C. Un filtro que se desplaza sobre la entrada para detectar características."
      },
      {
        "number": 8,
        "prompt": "¿Qué caracteriza a un Tomek Link?",
        "options": [
          "Dos ejemplos de la misma clase con distancia máxima.",
          "Dos ejemplos de clases diferentes que son vecinos más cercanos entre sí.",
          "Dos ejemplos sintéticos generados mediante SMOTE.",
          "Dos ejemplos con el mismo valor en todos sus atributos."
        ],
        "correct": [
          1
        ],
        "explanation": "Respuesta correcta: B. Dos ejemplos de clases diferentes que son vecinos más cercanos entre sí."
      },
      {
        "number": 9,
        "prompt": "¿Qué parámetro controla el tamaño de la vecindad en DBSCAN?",
        "options": [
          "k.",
          "minPts.",
          "IR.",
          "ε (epsilon)."
        ],
        "correct": [
          3
        ],
        "explanation": "Respuesta correcta: D. ε (epsilon)."
      },
      {
        "number": 10,
        "prompt": "¿Qué ocurre si aumentamos el soporte mínimo en Apriori?",
        "options": [
          "Generalmente se obtienen menos conjuntos frecuentes.",
          "Se obtienen obligatoriamente más reglas.",
          "Aumenta la confianza de todas las reglas.",
          "Todos los itemsets pasan a ser frecuentes."
        ],
        "correct": [
          0
        ],
        "explanation": "Respuesta correcta: A. Generalmente se obtienen menos conjuntos frecuentes."
      },
      {
        "number": 11,
        "prompt": "¿Cuál es la finalidad del decoder en un autoencoder?",
        "options": [
          "Clasificar los ejemplos en categorías.",
          "Calcular la distancia entre ejemplos.",
          "Reconstruir la entrada a partir de la representación latente.",
          "Generar las etiquetas originales de entrenamiento."
        ],
        "correct": [
          2
        ],
        "explanation": "Respuesta correcta: C. Reconstruir la entrada a partir de la representación latente."
      },
      {
        "number": 12,
        "prompt": "¿En qué consiste el aprendizaje sensible al coste?",
        "options": [
          "En reducir el número de atributos del conjunto de datos.",
          "En asignar distintas penalizaciones a los errores de clasificación.",
          "En eliminar todos los ejemplos minoritarios.",
          "En minimizar únicamente el tiempo de entrenamiento."
        ],
        "correct": [
          1
        ],
        "explanation": "Respuesta correcta: B. En asignar distintas penalizaciones a los errores de clasificación."
      },
      {
        "number": 13,
        "prompt": "¿Qué indica un índice Calinski-Harabasz elevado?",
        "options": [
          "Que existe un mayor número de outliers.",
          "Que todos los clusters tienen el mismo tamaño.",
          "Que el número de clusters es necesariamente óptimo.",
          "Que generalmente existe una buena separación y cohesión de los clusters."
        ],
        "correct": [
          3
        ],
        "explanation": "Respuesta correcta: D. Que generalmente existe una buena separación y cohesión de los clusters."
      },
      {
        "number": 14,
        "prompt": "¿Qué ventaja presenta FP-Growth frente a Apriori?",
        "options": [
          "Evita generar explícitamente todos los conjuntos candidatos.",
          "No necesita conocer el soporte mínimo.",
          "Utiliza clasificación supervisada.",
          "Solo puede descubrir itemsets de dos elementos."
        ],
        "correct": [
          0
        ],
        "explanation": "Respuesta correcta: A. Evita generar explícitamente todos los conjuntos candidatos."
      },
      {
        "number": 15,
        "prompt": "¿Qué efecto tiene aumentar el stride en una convolución, manteniendo los demás parámetros?",
        "options": [
          "Aumenta necesariamente el número de filtros.",
          "Incrementa siempre el tamaño de salida.",
          "Generalmente reduce las dimensiones espaciales de salida.",
          "Elimina la necesidad de utilizar funciones de activación."
        ],
        "correct": [
          2
        ],
        "explanation": "Respuesta correcta: C. Generalmente reduce las dimensiones espaciales de salida."
      },
      {
        "number": 16,
        "prompt": "¿Cuál es la principal diferencia entre el sobremuestreo aleatorio y SMOTE?",
        "options": [
          "SMOTE elimina ejemplos mayoritarios.",
          "SMOTE genera ejemplos sintéticos mediante interpolación.",
          "El sobremuestreo aleatorio modifica los atributos mediante PCA.",
          "SMOTE únicamente puede utilizarse con clases equilibradas."
        ],
        "correct": [
          1
        ],
        "explanation": "Respuesta correcta: B. SMOTE genera ejemplos sintéticos mediante interpolación."
      },
      {
        "number": 17,
        "prompt": "¿Qué representa un dendrograma?",
        "options": [
          "La matriz de confusión de un clasificador.",
          "La evolución del error de entrenamiento.",
          "La distribución de los centroides de k-means.",
          "La jerarquía de agrupaciones obtenida mediante clustering."
        ],
        "correct": [
          3
        ],
        "explanation": "Respuesta correcta: D. La jerarquía de agrupaciones obtenida mediante clustering."
      },
      {
        "number": 18,
        "prompt": "¿Qué propiedad caracteriza a las reglas de asociación?",
        "options": [
          "Una asociación no implica necesariamente causalidad.",
          "Todas las reglas con soporte elevado tienen lift superior a 1.",
          "La confianza es igual en ambos sentidos de una regla.",
          "El consecuente siempre debe contener un único ítem."
        ],
        "correct": [
          0
        ],
        "explanation": "Respuesta correcta: A. Una asociación no implica necesariamente causalidad."
      },
      {
        "number": 19,
        "prompt": "¿Qué función desempeña el discriminador en una GAN?",
        "options": [
          "Comprimir los datos originales.",
          "Generar nuevas imágenes a partir de ruido.",
          "Distinguir los ejemplos reales de los artificiales.",
          "Reducir la dimensionalidad mediante pooling."
        ],
        "correct": [
          2
        ],
        "explanation": "Respuesta correcta: C. Distinguir los ejemplos reales de los artificiales."
      },
      {
        "number": 20,
        "prompt": "¿Qué caracteriza al aprendizaje semisupervisado?",
        "options": [
          "Utiliza exclusivamente ejemplos sin etiquetar.",
          "Combina datos etiquetados y no etiquetados.",
          "Solo permite resolver problemas de clustering.",
          "Necesita que todos los ejemplos tengan varias etiquetas."
        ],
        "correct": [
          1
        ],
        "explanation": "Respuesta correcta: B. Combina datos etiquetados y no etiquetados."
      }
    ]
  },
  {
    "title": "Simulacro 3 - Temas 6-9",
    "exam": 2,
    "simulation": true,
    "source": "Simulacro aportado por el usuario, temas 6 a 9",
    "questions": [
      {
        "number": 1,
        "prompt": "¿Qué diferencia fundamental existe entre k-means y k-medoids?",
        "options": [
          "K-medoids utiliza objetos reales como representantes de los clusters.",
          "K-means no necesita calcular distancias.",
          "K-medoids solo puede generar un cluster.",
          "K-means siempre es más robusto frente a outliers."
        ],
        "correct": [
          0
        ],
        "explanation": "Respuesta correcta: A. K-medoids utiliza objetos reales como representantes de los clusters."
      },
      {
        "number": 2,
        "prompt": "¿Qué mide G-mean en un problema de clasificación desbalanceada?",
        "options": [
          "La media aritmética de Precision y Recall.",
          "La media geométrica de sensibilidad y especificidad.",
          "La proporción de ejemplos correctamente clasificados.",
          "El área bajo la curva ROC."
        ],
        "correct": [
          1
        ],
        "explanation": "Respuesta correcta: B. La media geométrica de sensibilidad y especificidad."
      },
      {
        "number": 3,
        "prompt": "Si el conjunto  no es frecuente, ¿qué ocurre con el candidato  en Apriori?",
        "options": [
          "Se conserva porque contiene tres elementos.",
          "Se calcula su confianza antes de decidir.",
          "Se conserva si  es frecuente.",
          "Se elimina mediante la poda."
        ],
        "correct": [
          3
        ],
        "explanation": "Respuesta correcta: D. Se elimina mediante la poda."
      },
      {
        "number": 4,
        "prompt": "¿Cuál es el resultado de aplicar Max Pooling a la siguiente región?",
        "options": [
          "1.",
          "4.",
          "7.",
          "17."
        ],
        "correct": [
          2
        ],
        "explanation": "Respuesta correcta: C. 7."
      },
      {
        "number": 5,
        "prompt": "En el coeficiente Silhouette, ¿qué representa a(i)?",
        "options": [
          "La distancia máxima entre clusters.",
          "La distancia media del objeto a los demás objetos de su cluster.",
          "El número de elementos del cluster.",
          "La distancia entre los centroides."
        ],
        "correct": [
          1
        ],
        "explanation": "Respuesta correcta: B. La distancia media del objeto a los demás objetos de su cluster."
      },
      {
        "number": 6,
        "prompt": "Si 8 de 20 transacciones contienen simultáneamente A y B, ¿cuál es el soporte de A ⇒ B?",
        "options": [
          "40 %.",
          "60 %.",
          "80 %.",
          "20 %."
        ],
        "correct": [
          0
        ],
        "explanation": "Respuesta correcta: A. 40 %."
      },
      {
        "number": 7,
        "prompt": "En SMOTE, si x = (2,4), su vecino es (6,8) y r = 0,25, ¿qué ejemplo sintético se genera?",
        "options": [
          "(4,6).",
          "(6,8).",
          "(3,5).",
          "(8,12)."
        ],
        "correct": [
          2
        ],
        "explanation": "Respuesta correcta: C. (3,5)."
      },
      {
        "number": 8,
        "prompt": "¿En qué consiste el Transfer Learning?",
        "options": [
          "En duplicar los ejemplos de entrenamiento.",
          "En aplicar pooling a todas las capas.",
          "En entrenar redes sin datos etiquetados.",
          "En reutilizar conocimientos de un modelo previamente entrenado."
        ],
        "correct": [
          3
        ],
        "explanation": "Respuesta correcta: D. En reutilizar conocimientos de un modelo previamente entrenado."
      },
      {
        "number": 9,
        "prompt": "¿Qué información almacena BIRCH en una característica de clustering (CF)?",
        "options": [
          "Centroide, radio y diámetro.",
          "Número de objetos, suma lineal y suma cuadrática.",
          "Entropía, ganancia y número de clases.",
          "Soporte, confianza y frecuencia."
        ],
        "correct": [
          1
        ],
        "explanation": "Respuesta correcta: B. Número de objetos, suma lineal y suma cuadrática."
      },
      {
        "number": 10,
        "prompt": "En OVA ordenada, ¿cuántos clasificadores se necesitan para cuatro categorías ordinales?",
        "options": [
          "4.",
          "6.",
          "3.",
          "2."
        ],
        "correct": [
          2
        ],
        "explanation": "Respuesta correcta: C. 3."
      },
      {
        "number": 11,
        "prompt": "¿Qué indica un lift mayor que 1?",
        "options": [
          "Existe una asociación positiva entre antecedente y consecuente.",
          "El antecedente y el consecuente son independientes.",
          "La regla tiene necesariamente confianza del 100 %.",
          "Los elementos aparecen juntos menos de lo esperado."
        ],
        "correct": [
          0
        ],
        "explanation": "Respuesta correcta: A. Existe una asociación positiva entre antecedente y consecuente."
      },
      {
        "number": 12,
        "prompt": "¿Qué función desempeña Backpropagation en una red neuronal?",
        "options": [
          "Generar nuevos ejemplos sintéticos.",
          "Determinar el número óptimo de capas.",
          "Eliminar las neuronas menos importantes.",
          "Calcular los gradientes necesarios para ajustar los pesos."
        ],
        "correct": [
          3
        ],
        "explanation": "Respuesta correcta: D. Calcular los gradientes necesarios para ajustar los pesos."
      },
      {
        "number": 13,
        "prompt": "¿Qué parámetro determina principalmente el tamaño de la región de búsqueda en Mean Shift?",
        "options": [
          "Bandwidth.",
          "minPts.",
          "Número de clases.",
          "Soporte mínimo."
        ],
        "correct": [
          0
        ],
        "explanation": "Respuesta correcta: A. Bandwidth."
      },
      {
        "number": 14,
        "prompt": "¿Qué caracteriza al aprendizaje multietiqueta?",
        "options": [
          "Cada ejemplo pertenece obligatoriamente a una única clase.",
          "Un ejemplo puede pertenecer simultáneamente a varias clases.",
          "Cada conjunto de entrenamiento tiene una única etiqueta global.",
          "Las clases deben estar ordenadas."
        ],
        "correct": [
          1
        ],
        "explanation": "Respuesta correcta: B. Un ejemplo puede pertenecer simultáneamente a varias clases."
      },
      {
        "number": 15,
        "prompt": "¿Por qué una confianza elevada no garantiza una asociación interesante?",
        "options": [
          "Porque la confianza siempre es igual al soporte.",
          "Porque el antecedente debe ser infrecuente.",
          "Porque el consecuente puede ser muy frecuente incluso sin el antecedente.",
          "Porque una confianza elevada implica independencia."
        ],
        "correct": [
          2
        ],
        "explanation": "Respuesta correcta: C. Porque el consecuente puede ser muy frecuente incluso sin el antecedente."
      },
      {
        "number": 16,
        "prompt": "¿Cuál es el principal objetivo de Data Augmentation?",
        "options": [
          "Aumentar la variedad de los datos de entrenamiento y mejorar la generalización.",
          "Eliminar los ejemplos de la clase mayoritaria.",
          "Reducir el número de capas ocultas.",
          "Convertir un problema supervisado en clustering."
        ],
        "correct": [
          0
        ],
        "explanation": "Respuesta correcta: A. Aumentar la variedad de los datos de entrenamiento y mejorar la generalización."
      },
      {
        "number": 17,
        "prompt": "¿Cómo funcionan los métodos jerárquicos divisivos?",
        "options": [
          "Comienzan con un cluster por objeto y los fusionan.",
          "Comienzan con todos los objetos en un cluster y lo dividen sucesivamente.",
          "Asignan cada objeto al centroide más próximo.",
          "Generan ejemplos sintéticos entre clusters."
        ],
        "correct": [
          1
        ],
        "explanation": "Respuesta correcta: B. Comienzan con todos los objetos en un cluster y lo dividen sucesivamente."
      },
      {
        "number": 18,
        "prompt": "¿Qué diferencia a los métodos inductivos de los transductivos en aprendizaje semisupervisado?",
        "options": [
          "Los inductivos utilizan exclusivamente datos sin etiquetar.",
          "Los transductivos necesitan clases ordinales.",
          "Los inductivos no permiten realizar predicciones.",
          "Los inductivos construyen modelos para nuevos ejemplos, mientras que los transductivos se centran en los ejemplos disponibles."
        ],
        "correct": [
          3
        ],
        "explanation": "Respuesta correcta: D. Los inductivos construyen modelos para nuevos ejemplos, mientras que los transductivos se centran en los ejemplos disponibles."
      },
      {
        "number": 19,
        "prompt": "Si A aparece en 12 transacciones y A y B aparecen juntos en 6, ¿cuál es la confianza de A ⇒ B?",
        "options": [
          "25 %.",
          "75 %.",
          "50 %.",
          "200 %."
        ],
        "correct": [
          2
        ],
        "explanation": "Respuesta correcta: C. 50 %."
      },
      {
        "number": 20,
        "prompt": "En una convolución con entrada de tamaño 7, filtro de tamaño 3, padding 0 y stride 2, ¿cuál es el tamaño de salida?",
        "options": [
          "5.",
          "4.",
          "2.",
          "3."
        ],
        "correct": [
          3
        ],
        "explanation": "Respuesta correcta: D. 3."
      }
    ]
  }
];
