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
  }
];
