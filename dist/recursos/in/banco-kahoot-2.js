const inSecondKahootBank = {
  "propiedades": [
    {
      "number": 1,
      "topic": 6,
      "prompt": "¿Qué caracteriza a un buen agrupamiento?",
      "options": [
        "Máxima similitud intercluster y mínima intracluster.",
        "Máxima similitud intracluster y mínima intercluster.",
        "Máxima distancia intracluster y mínima intercluster.",
        "Igual número de objetos en todos los clusters."
      ],
      "correct": [
        1
      ],
      "explanation": "Máxima similitud intracluster y mínima intercluster."
    },
    {
      "number": 2,
      "topic": 6,
      "prompt": "¿Cuál NO es una propiedad deseable de un algoritmo de clustering?",
      "options": [
        "Capacidad para detectar clusters de formas arbitrarias.",
        "Escalabilidad con grandes conjuntos de datos.",
        "Sensibilidad al orden de los registros.",
        "Capacidad para manejar ruido."
      ],
      "correct": [
        2
      ],
      "explanation": "Sensibilidad al orden de los registros."
    },
    {
      "number": 3,
      "topic": 6,
      "prompt": "¿Qué parámetro utiliza Mean Shift para determinar la región de búsqueda?",
      "options": [
        "Soporte mínimo.",
        "minPts.",
        "Bandwidth.",
        "Número de clases."
      ],
      "correct": [
        2
      ],
      "explanation": "Bandwidth."
    },
    {
      "number": 4,
      "topic": 6,
      "prompt": "¿Cuándo se considera que un punto es núcleo en DBSCAN?",
      "options": [
        "Cuando tiene al menos minPts puntos en su vecindad ε, incluido él mismo.",
        "Cuando está más cerca del centroide que los demás.",
        "Cuando pertenece a la clase mayoritaria.",
        "Cuando no tiene vecinos."
      ],
      "correct": [
        0
      ],
      "explanation": "Cuando tiene al menos minPts puntos en su vecindad ε, incluido él mismo."
    },
    {
      "number": 5,
      "topic": 6,
      "prompt": "¿Qué es un punto frontera en DBSCAN?",
      "options": [
        "Un punto con suficientes vecinos para ser núcleo.",
        "Un punto que no pertenece a ningún cluster.",
        "Un punto situado exactamente entre dos centroides.",
        "Un punto que no es núcleo, pero puede alcanzarse desde uno."
      ],
      "correct": [
        3
      ],
      "explanation": "Un punto que no es núcleo, pero puede alcanzarse desde uno."
    },
    {
      "number": 6,
      "topic": 6,
      "prompt": "¿Qué información almacena BIRCH mediante una característica CF?",
      "options": [
        "Centroide, radio y diámetro.",
        "Número de clusters, distancia y entropía.",
        "Número de objetos, suma lineal y suma cuadrática.",
        "Soporte, confianza y lift."
      ],
      "correct": [
        2
      ],
      "explanation": "Número de objetos, suma lineal y suma cuadrática."
    },
    {
      "number": 7,
      "topic": 6,
      "prompt": "¿Qué distancia utiliza Single Linkage?",
      "options": [
        "La distancia máxima entre objetos de distintos clusters.",
        "La distancia mínima entre objetos de distintos clusters.",
        "La distancia entre centroides.",
        "La distancia media entre todos los objetos."
      ],
      "correct": [
        1
      ],
      "explanation": "La distancia mínima entre objetos de distintos clusters."
    },
    {
      "number": 8,
      "topic": 6,
      "prompt": "¿Qué distancia utiliza Complete Linkage?",
      "options": [
        "La distancia mínima entre objetos de distintos clusters.",
        "La distancia entre centroides.",
        "La distancia máxima entre objetos de distintos clusters.",
        "El incremento de la varianza."
      ],
      "correct": [
        2
      ],
      "explanation": "La distancia máxima entre objetos de distintos clusters."
    },
    {
      "number": 9,
      "topic": 6,
      "prompt": "¿Qué criterio utiliza el método de Ward para fusionar clusters?",
      "options": [
        "El menor incremento de la dispersión interna.",
        "La distancia mínima entre dos objetos.",
        "La mayor distancia entre centroides.",
        "El mayor número de objetos compartidos."
      ],
      "correct": [
        0
      ],
      "explanation": "El menor incremento de la dispersión interna."
    },
    {
      "number": 23,
      "topic": 7,
      "prompt": "¿Cuándo se considera fuerte una regla de asociación?",
      "options": [
        "Cuando su lift es superior a 1.",
        "Cuando cumple el soporte y la confianza mínimos.",
        "Cuando su confianza es del 100 %.",
        "Cuando contiene al menos tres ítems."
      ],
      "correct": [
        1
      ],
      "explanation": "Cuando cumple el soporte y la confianza mínimos."
    },
    {
      "number": 24,
      "topic": 7,
      "prompt": "¿Qué caracteriza a una regla de asociación cuantitativa?",
      "options": [
        "Relaciona únicamente productos presentes o ausentes.",
        "Necesita utilizar aprendizaje supervisado.",
        "Incorpora valores numéricos o intervalos.",
        "Presenta necesariamente confianza elevada."
      ],
      "correct": [
        2
      ],
      "explanation": "Incorpora valores numéricos o intervalos."
    },
    {
      "number": 25,
      "topic": 7,
      "prompt": "¿Qué propiedad establece el principio Apriori?",
      "options": [
        "Todo subconjunto de un conjunto frecuente es frecuente.",
        "Todo superconjunto de un conjunto frecuente es frecuente.",
        "Todo subconjunto de un conjunto infrecuente es infrecuente.",
        "Dos elementos frecuentes siempre forman una pareja frecuente."
      ],
      "correct": [
        0
      ],
      "explanation": "Todo subconjunto de un conjunto frecuente es frecuente."
    },
    {
      "number": 26,
      "topic": 7,
      "prompt": "¿Qué estructura utiliza FP-Growth?",
      "options": [
        "Árbol de decisión.",
        "Dendrograma.",
        "Matriz de confusión.",
        "FP-tree."
      ],
      "correct": [
        3
      ],
      "explanation": "FP-tree."
    },
    {
      "number": 45,
      "topic": 8,
      "prompt": "¿Cuál es la principal característica del Deep Learning?",
      "options": [
        "Utiliza únicamente redes con una capa oculta.",
        "Necesita que los expertos definan manualmente todas las características.",
        "Aprende automáticamente representaciones mediante múltiples capas neuronales.",
        "No necesita datos de entrenamiento."
      ],
      "correct": [
        2
      ],
      "explanation": "Aprende automáticamente representaciones mediante múltiples capas neuronales."
    },
    {
      "number": 46,
      "topic": 8,
      "prompt": "¿Qué objetivo tiene un autoencoder?",
      "options": [
        "Clasificar cada ejemplo en una única categoría.",
        "Determinar el número de clusters.",
        "Maximizar la distancia entre clases.",
        "Aprender una representación que permita reconstruir la entrada."
      ],
      "correct": [
        3
      ],
      "explanation": "Aprender una representación que permita reconstruir la entrada."
    },
    {
      "number": 47,
      "topic": 8,
      "prompt": "¿Por qué un autoencoder con un cuello de botella puede aprender características útiles?",
      "options": [
        "Porque aumenta el número de etiquetas.",
        "Porque debe conservar información relevante en una representación reducida.",
        "Porque utiliza exclusivamente ejemplos etiquetados.",
        "Porque impide actualizar los pesos."
      ],
      "correct": [
        1
      ],
      "explanation": "Porque debe conservar información relevante en una representación reducida."
    },
    {
      "number": 48,
      "topic": 8,
      "prompt": "¿En qué tres ideas fundamentales se basan las CNN?",
      "options": [
        "Autoencoders, clustering y boosting.",
        "Recurrencia, atención y normalización.",
        "Soporte, confianza y lift.",
        "Campos receptivos locales, pesos compartidos y pooling."
      ],
      "correct": [
        3
      ],
      "explanation": "Campos receptivos locales, pesos compartidos y pooling."
    },
    {
      "number": 49,
      "topic": 8,
      "prompt": "¿Cuál es la función de una capa convolucional?",
      "options": [
        "Reducir el número de clases.",
        "Aplicar filtros para extraer características.",
        "Generar etiquetas automáticamente.",
        "Calcular la matriz de confusión."
      ],
      "correct": [
        1
      ],
      "explanation": "Aplicar filtros para extraer características."
    },
    {
      "number": 50,
      "topic": 8,
      "prompt": "¿Cómo se obtienen los filtros de una CNN?",
      "options": [
        "Se mantienen siempre fijos.",
        "Se seleccionan mediante Apriori.",
        "Se aprenden durante el entrenamiento.",
        "Se calculan mediante Silhouette."
      ],
      "correct": [
        2
      ],
      "explanation": "Se aprenden durante el entrenamiento."
    },
    {
      "number": 51,
      "topic": 8,
      "prompt": "¿Cuál es la finalidad del padding?",
      "options": [
        "Eliminar todas las conexiones entre capas.",
        "Aumentar el número de categorías.",
        "Sustituir la función de activación.",
        "Añadir relleno para controlar las dimensiones de salida y conservar información de los bordes."
      ],
      "correct": [
        3
      ],
      "explanation": "Añadir relleno para controlar las dimensiones de salida y conservar información de los bordes."
    },
    {
      "number": 52,
      "topic": 8,
      "prompt": "¿Qué función desempeña el pooling en una CNN?",
      "options": [
        "Generar nuevas imágenes artificiales.",
        "Reducir las dimensiones espaciales de los mapas de características.",
        "Actualizar los pesos mediante gradientes.",
        "Aumentar el número de filtros."
      ],
      "correct": [
        1
      ],
      "explanation": "Reducir las dimensiones espaciales de los mapas de características."
    },
    {
      "number": 53,
      "topic": 8,
      "prompt": "¿Qué hace Max Pooling?",
      "options": [
        "Calcula la media de todos los píxeles.",
        "Selecciona el valor mínimo de cada región.",
        "Selecciona el valor máximo de cada región.",
        "Ordena los píxeles por frecuencia."
      ],
      "correct": [
        2
      ],
      "explanation": "Selecciona el valor máximo de cada región."
    },
    {
      "number": 54,
      "topic": 8,
      "prompt": "¿Qué sucede con las características aprendidas en las capas más profundas de una CNN?",
      "options": [
        "Se vuelven más abstractas y complejas.",
        "Se limitan a detectar bordes simples.",
        "Se vuelven idénticas a la imagen original.",
        "Dejan de depender de los datos."
      ],
      "correct": [
        0
      ],
      "explanation": "Se vuelven más abstractas y complejas."
    },
    {
      "number": 55,
      "topic": 8,
      "prompt": "¿Qué técnica permite aumentar la variedad de los datos mediante rotaciones y desplazamientos?",
      "options": [
        "Transfer Learning.",
        "Backpropagation.",
        "Pooling.",
        "Data Augmentation."
      ],
      "correct": [
        3
      ],
      "explanation": "Data Augmentation."
    },
    {
      "number": 56,
      "topic": 8,
      "prompt": "¿Qué caracteriza al Transfer Learning?",
      "options": [
        "Genera ejemplos sintéticos mediante interpolación.",
        "Reutiliza los conocimientos de un modelo previamente entrenado.",
        "Elimina los pesos de las primeras capas.",
        "Utiliza exclusivamente datos sin etiquetar."
      ],
      "correct": [
        1
      ],
      "explanation": "Reutiliza los conocimientos de un modelo previamente entrenado."
    },
    {
      "number": 57,
      "topic": 8,
      "prompt": "¿Qué función desempeña ReLU dentro de una CNN?",
      "options": [
        "Reducir el número de imágenes.",
        "Reconstruir la entrada original.",
        "Introducir no linealidad en la red.",
        "Determinar el número de clusters."
      ],
      "correct": [
        2
      ],
      "explanation": "Introducir no linealidad en la red."
    },
    {
      "number": 58,
      "topic": 8,
      "prompt": "¿Qué arquitectura combina un generador y un discriminador?",
      "options": [
        "Autoencoder.",
        "CNN.",
        "RNN.",
        "GAN."
      ],
      "correct": [
        3
      ],
      "explanation": "GAN."
    },
    {
      "number": 59,
      "topic": 8,
      "prompt": "¿Qué función desempeña el encoder de un autoencoder?",
      "options": [
        "Clasificar directamente los ejemplos.",
        "Obtener una representación latente de los datos.",
        "Reconstruir la entrada a partir de la salida.",
        "Calcular la probabilidad de pertenencia a una clase."
      ],
      "correct": [
        1
      ],
      "explanation": "Obtener una representación latente de los datos."
    },
    {
      "number": 68,
      "topic": 9,
      "prompt": "¿Cuáles son las principales estrategias para abordar el desbalanceo?",
      "options": [
        "Apriori, FP-Growth, PCA y k-means.",
        "Nivel de datos, nivel de algoritmo, aprendizaje sensible al coste y Ensemble.",
        "Aprendizaje inductivo, transductivo, ordinal y multietiqueta.",
        "Convolución, pooling, retropropagación y GAN."
      ],
      "correct": [
        1
      ],
      "explanation": "Nivel de datos, nivel de algoritmo, aprendizaje sensible al coste y Ensemble."
    },
    {
      "number": 69,
      "topic": 9,
      "prompt": "¿Qué caracteriza a un Tomek Link?",
      "options": [
        "Dos ejemplos de la misma clase que comparten centroide.",
        "Dos ejemplos sintéticos de SMOTE.",
        "Dos ejemplos con distancia necesariamente nula.",
        "Dos ejemplos de clases diferentes que son vecinos más cercanos entre sí."
      ],
      "correct": [
        3
      ],
      "explanation": "Dos ejemplos de clases diferentes que son vecinos más cercanos entre sí."
    },
    {
      "number": 70,
      "topic": 9,
      "prompt": "¿Qué significa CNN en el contexto de selección de instancias?",
      "options": [
        "Condensed Nearest Neighbor.",
        "Convolutional Neural Network.",
        "Cost-sensitive Neural Network.",
        "Clustering Nearest Network."
      ],
      "correct": [
        0
      ],
      "explanation": "Condensed Nearest Neighbor."
    },
    {
      "number": 71,
      "topic": 9,
      "prompt": "¿Qué caracteriza al aprendizaje sensible al coste?",
      "options": [
        "Asigna distintas penalizaciones a los errores de clasificación.",
        "Elimina todos los atributos poco relevantes.",
        "Sustituye la matriz de confusión por un dendrograma.",
        "Genera ejemplos mediante interpolación."
      ],
      "correct": [
        0
      ],
      "explanation": "Asigna distintas penalizaciones a los errores de clasificación."
    },
    {
      "number": 72,
      "topic": 9,
      "prompt": "¿Qué caracteriza al aprendizaje multietiqueta?",
      "options": [
        "Cada ejemplo tiene una única clase entre muchas posibles.",
        "Cada ejemplo puede tener varias etiquetas simultáneamente.",
        "Las categorías tienen un orden natural.",
        "Solo existen ejemplos sin etiquetar."
      ],
      "correct": [
        1
      ],
      "explanation": "Cada ejemplo puede tener varias etiquetas simultáneamente."
    },
    {
      "number": 73,
      "topic": 9,
      "prompt": "¿Qué caracteriza a la regresión ordinal?",
      "options": [
        "Predice exclusivamente variables continuas.",
        "Permite asignar varias etiquetas simultáneas.",
        "Ignora el orden entre categorías.",
        "Predice categorías ordenadas sin asumir distancias numéricas definidas."
      ],
      "correct": [
        3
      ],
      "explanation": "Predice categorías ordenadas sin asumir distancias numéricas definidas."
    },
    {
      "number": 74,
      "topic": 9,
      "prompt": "¿Qué caracteriza a los métodos semisupervisados inductivos?",
      "options": [
        "Construyen un modelo aplicable a nuevos ejemplos.",
        "Solo pueden utilizar datos sin etiquetar.",
        "No construyen clasificadores.",
        "Necesitan obligatoriamente un grafo."
      ],
      "correct": [
        0
      ],
      "explanation": "Construyen un modelo aplicable a nuevos ejemplos."
    }
  ],
  "diferencias": [
    {
      "number": 10,
      "topic": 6,
      "prompt": "¿Qué diferencia fundamental existe entre k-means y k-medoids?",
      "options": [
        "k-means utiliza objetos reales como representantes.",
        "k-medoids utiliza objetos reales como representantes.",
        "k-medoids no necesita establecer k.",
        "k-means es un método jerárquico."
      ],
      "correct": [
        1
      ],
      "explanation": "k-medoids utiliza objetos reales como representantes."
    },
    {
      "number": 11,
      "topic": 6,
      "prompt": "¿Qué diferencia existe entre los métodos jerárquicos aglomerativos y divisivos?",
      "options": [
        "Los aglomerativos dividen y los divisivos fusionan.",
        "Ambos comienzan con un único cluster.",
        "Ambos requieren fijar previamente k.",
        "Los aglomerativos fusionan clusters y los divisivos los separan."
      ],
      "correct": [
        3
      ],
      "explanation": "Los aglomerativos fusionan clusters y los divisivos los separan."
    },
    {
      "number": 12,
      "topic": 6,
      "prompt": "¿Qué diferencia existe entre Single Linkage y Complete Linkage?",
      "options": [
        "Single utiliza centroides y Complete utiliza medianas.",
        "Single maximiza la varianza y Complete la minimiza.",
        "Single utiliza la distancia mínima y Complete la máxima entre objetos de distintos clusters.",
        "Single es divisivo y Complete es particional."
      ],
      "correct": [
        2
      ],
      "explanation": "Single utiliza la distancia mínima y Complete la máxima entre objetos de distintos clusters."
    },
    {
      "number": 27,
      "topic": 7,
      "prompt": "¿Qué ocurre al invertir una regla A ⇒ B por B ⇒ A?",
      "options": [
        "El soporte permanece igual, pero la confianza puede cambiar.",
        "El soporte y la confianza permanecen iguales.",
        "El soporte cambia, pero la confianza permanece igual.",
        "El lift necesariamente aumenta."
      ],
      "correct": [
        0
      ],
      "explanation": "El soporte permanece igual, pero la confianza puede cambiar."
    },
    {
      "number": 60,
      "topic": 8,
      "prompt": "¿Qué diferencia el Deep Learning del aprendizaje tradicional de características?",
      "options": [
        "El Deep Learning no utiliza clasificadores.",
        "El aprendizaje tradicional siempre utiliza redes profundas.",
        "El Deep Learning aprende automáticamente las características relevantes.",
        "El Deep Learning necesita definir manualmente todos los filtros."
      ],
      "correct": [
        2
      ],
      "explanation": "El Deep Learning aprende automáticamente las características relevantes."
    },
    {
      "number": 61,
      "topic": 8,
      "prompt": "¿Qué tarea identifica los píxeles correspondientes a cada objeto individual?",
      "options": [
        "Segmentación de instancias.",
        "Clasificación de imágenes.",
        "Regresión ordinal.",
        "Detección mediante cuadros delimitadores."
      ],
      "correct": [
        0
      ],
      "explanation": "Segmentación de instancias."
    },
    {
      "number": 62,
      "topic": 8,
      "prompt": "¿Qué diferencia existe entre la clasificación y la detección de objetos?",
      "options": [
        "La detección identifica los objetos y también su localización.",
        "La clasificación siempre utiliza segmentación de píxeles.",
        "La detección no puede identificar categorías.",
        "Ambas proporcionan necesariamente las mismas salidas."
      ],
      "correct": [
        0
      ],
      "explanation": "La detección identifica los objetos y también su localización."
    },
    {
      "number": 63,
      "topic": 8,
      "prompt": "¿Qué diferencia existe entre Data Augmentation y Transfer Learning?",
      "options": [
        "Ambos generan obligatoriamente ejemplos sintéticos mediante interpolación.",
        "El primero aumenta la variedad de los datos y el segundo reutiliza modelos entrenados.",
        "El primero elimina ejemplos y el segundo reduce los atributos.",
        "Ambos consisten en modificar el número de capas de una red."
      ],
      "correct": [
        1
      ],
      "explanation": "El primero aumenta la variedad de los datos y el segundo reutiliza modelos entrenados."
    },
    {
      "number": 75,
      "topic": 9,
      "prompt": "¿Qué diferencia SMOTE del sobremuestreo aleatorio?",
      "options": [
        "SMOTE elimina los ejemplos mayoritarios.",
        "SMOTE necesita conocer previamente las clases de prueba.",
        "SMOTE crea ejemplos minoritarios mediante interpolación.",
        "SMOTE no utiliza medidas de distancia."
      ],
      "correct": [
        2
      ],
      "explanation": "SMOTE crea ejemplos minoritarios mediante interpolación."
    },
    {
      "number": 76,
      "topic": 9,
      "prompt": "¿Qué diferencia presenta SMOTE + ENN respecto a SMOTE + Tomek Links?",
      "options": [
        "SMOTE + ENN nunca elimina ejemplos.",
        "SMOTE + Tomek Links genera exclusivamente ejemplos mayoritarios.",
        "SMOTE + ENN utiliza obligatoriamente redes neuronales profundas.",
        "ENN suele realizar una limpieza más intensa de ejemplos inconsistentes."
      ],
      "correct": [
        3
      ],
      "explanation": "ENN suele realizar una limpieza más intensa de ejemplos inconsistentes."
    },
    {
      "number": 77,
      "topic": 9,
      "prompt": "¿Qué diferencia a los métodos semisupervisados inductivos de los transductivos?",
      "options": [
        "Los inductivos solo utilizan datos etiquetados.",
        "Los transductivos siempre utilizan redes neuronales.",
        "Los inductivos no generan modelos predictivos.",
        "Los inductivos aprenden modelos para nuevos ejemplos y los transductivos se centran en los ejemplos disponibles."
      ],
      "correct": [
        3
      ],
      "explanation": "Los inductivos aprenden modelos para nuevos ejemplos y los transductivos se centran en los ejemplos disponibles."
    },
    {
      "number": 78,
      "topic": 9,
      "prompt": "¿Qué diferencia existe entre clasificación multietiqueta y regresión ordinal?",
      "options": [
        "Ambas requieren necesariamente etiquetas numéricas continuas.",
        "La clasificación multietiqueta solo utiliza dos clases.",
        "La regresión ordinal permite varias etiquetas simultáneas.",
        "La primera permite varias etiquetas por ejemplo y la segunda utiliza categorías ordenadas."
      ],
      "correct": [
        3
      ],
      "explanation": "La primera permite varias etiquetas por ejemplo y la segunda utiliza categorías ordenadas."
    }
  ],
  "ventajas": [
    {
      "number": 13,
      "topic": 6,
      "prompt": "¿Qué limitación presenta k-means?",
      "options": [
        "No utiliza distancias entre objetos.",
        "No necesita fijar el número de clusters.",
        "Es incapaz de converger.",
        "Solo puede aplicarse cuando los centroides pueden calcularse mediante medias."
      ],
      "correct": [
        3
      ],
      "explanation": "Solo puede aplicarse cuando los centroides pueden calcularse mediante medias."
    },
    {
      "number": 14,
      "topic": 6,
      "prompt": "¿Cuál es una limitación importante de DBSCAN?",
      "options": [
        "Necesita fijar previamente el número de clusters.",
        "Presenta dificultades con clusters de densidades muy diferentes.",
        "No permite identificar ruido.",
        "Solo detecta clusters convexos."
      ],
      "correct": [
        1
      ],
      "explanation": "Presenta dificultades con clusters de densidades muy diferentes."
    },
    {
      "number": 15,
      "topic": 6,
      "prompt": "Si k-means se ejecuta varias veces con centroides iniciales distintos, ¿qué puede ocurrir?",
      "options": [
        "Siempre obtiene exactamente la misma partición.",
        "Puede converger a soluciones diferentes.",
        "El número de clusters cambia automáticamente.",
        "Deja de utilizar distancias."
      ],
      "correct": [
        1
      ],
      "explanation": "Puede converger a soluciones diferentes."
    },
    {
      "number": 16,
      "topic": 6,
      "prompt": "¿Qué ventaja presentan los dendrogramas en clustering jerárquico?",
      "options": [
        "Eliminan los outliers automáticamente.",
        "Garantizan clusters convexos.",
        "Permiten obtener distintos números de clusters mediante cortes a diferentes alturas.",
        "Evitan calcular distancias."
      ],
      "correct": [
        2
      ],
      "explanation": "Permiten obtener distintos números de clusters mediante cortes a diferentes alturas."
    },
    {
      "number": 17,
      "topic": 6,
      "prompt": "¿Cuál es una limitación del algoritmo k-means?",
      "options": [
        "Necesita fijar previamente el número de clusters.",
        "No utiliza distancias entre objetos.",
        "No converge en conjuntos de datos finitos.",
        "Detecta automáticamente clusters de formas arbitrarias."
      ],
      "correct": [
        0
      ],
      "explanation": "Necesita fijar previamente el número de clusters."
    },
    {
      "number": 28,
      "topic": 7,
      "prompt": "¿Cuál es la principal limitación de la confianza como medida de interés?",
      "options": [
        "No considera la frecuencia global del consecuente.",
        "No puede calcularse con itemsets frecuentes.",
        "Siempre es superior al soporte.",
        "Es una medida simétrica."
      ],
      "correct": [
        0
      ],
      "explanation": "No considera la frecuencia global del consecuente."
    },
    {
      "number": 29,
      "topic": 7,
      "prompt": "¿Cuál es la principal ventaja de FP-Growth frente a Apriori?",
      "options": [
        "Evita generar explícitamente todos los conjuntos candidatos.",
        "No utiliza soporte mínimo.",
        "Genera exclusivamente reglas fuertes.",
        "No necesita analizar las transacciones."
      ],
      "correct": [
        0
      ],
      "explanation": "Evita generar explícitamente todos los conjuntos candidatos."
    },
    {
      "number": 79,
      "topic": 9,
      "prompt": "¿Por qué puede ser engañosa la Accuracy en problemas desbalanceados?",
      "options": [
        "Porque no puede calcularse con dos clases.",
        "Porque solo considera los falsos positivos.",
        "Porque siempre proporciona valores inferiores al Recall.",
        "Porque puede ser alta aunque no se reconozca la clase minoritaria."
      ],
      "correct": [
        3
      ],
      "explanation": "Porque puede ser alta aunque no se reconozca la clase minoritaria."
    },
    {
      "number": 80,
      "topic": 9,
      "prompt": "¿Qué factores pueden dificultar la clasificación además del desbalanceo?",
      "options": [
        "Únicamente el número de atributos.",
        "Exclusivamente la normalización.",
        "Solapamiento, pequeñas disyunciones, falta de datos y ruido.",
        "El uso de validación cruzada."
      ],
      "correct": [
        2
      ],
      "explanation": "Solapamiento, pequeñas disyunciones, falta de datos y ruido."
    },
    {
      "number": 81,
      "topic": 9,
      "prompt": "¿Qué problema puede presentar SMOTE?",
      "options": [
        "Generar exclusivamente ejemplos mayoritarios.",
        "Sobregeneralizar creando ejemplos próximos a zonas mayoritarias.",
        "Eliminar todos los ejemplos de la clase minoritaria.",
        "Impedir el uso de clasificadores supervisados."
      ],
      "correct": [
        1
      ],
      "explanation": "Sobregeneralizar creando ejemplos próximos a zonas mayoritarias."
    },
    {
      "number": 82,
      "topic": 9,
      "prompt": "¿Cuál es una limitación del aprendizaje sensible al coste?",
      "options": [
        "No permite utilizar clasificadores binarios.",
        "Necesita obligatoriamente sobremuestreo.",
        "Puede resultar difícil determinar una matriz de costes adecuada.",
        "No permite penalizar los falsos negativos."
      ],
      "correct": [
        2
      ],
      "explanation": "Puede resultar difícil determinar una matriz de costes adecuada."
    }
  ],
  "medidas": [
    {
      "number": 18,
      "topic": 6,
      "prompt": "¿Por qué conviene normalizar los atributos antes de calcular distancias?",
      "options": [
        "Para evitar que los atributos con mayor escala dominen el cálculo.",
        "Para garantizar que todos los clusters tengan igual tamaño.",
        "Para eliminar los valores atípicos.",
        "Para obtener siempre el número óptimo de clusters."
      ],
      "correct": [
        0
      ],
      "explanation": "Para evitar que los atributos con mayor escala dominen el cálculo."
    },
    {
      "number": 19,
      "topic": 6,
      "prompt": "¿Qué representa un coeficiente Silhouette negativo?",
      "options": [
        "El objeto podría estar mal asignado a su cluster.",
        "El objeto está perfectamente agrupado.",
        "El cluster no tiene centroide.",
        "El número de clusters es óptimo."
      ],
      "correct": [
        0
      ],
      "explanation": "El objeto podría estar mal asignado a su cluster."
    },
    {
      "number": 20,
      "topic": 6,
      "prompt": "¿Qué índice de calidad mejora cuando disminuye su valor?",
      "options": [
        "Silhouette.",
        "Calinski-Harabasz.",
        "Dunn.",
        "Davies-Bouldin."
      ],
      "correct": [
        3
      ],
      "explanation": "Davies-Bouldin."
    },
    {
      "number": 30,
      "topic": 7,
      "prompt": "¿Qué mide el soporte de una regla A ⇒ B?",
      "options": [
        "La probabilidad de B dado A.",
        "La proporción de transacciones que contienen A y B.",
        "La frecuencia de A respecto a B.",
        "El grado de dependencia entre A y B."
      ],
      "correct": [
        1
      ],
      "explanation": "La proporción de transacciones que contienen A y B."
    },
    {
      "number": 31,
      "topic": 7,
      "prompt": "¿Qué mide la confianza de una regla A ⇒ B?",
      "options": [
        "La probabilidad conjunta de A y B.",
        "La frecuencia total de B.",
        "La probabilidad de B cuando aparece A.",
        "El grado de correlación entre A y B."
      ],
      "correct": [
        2
      ],
      "explanation": "La probabilidad de B cuando aparece A."
    },
    {
      "number": 32,
      "topic": 7,
      "prompt": "¿Cuál de estas medidas NO es simétrica?",
      "options": [
        "Soporte.",
        "Lift.",
        "Frecuencia conjunta.",
        "Confianza."
      ],
      "correct": [
        3
      ],
      "explanation": "Confianza."
    },
    {
      "number": 33,
      "topic": 7,
      "prompt": "¿Cuándo se elimina un candidato mediante la poda de Apriori?",
      "options": [
        "Cuando su confianza es inferior al mínimo.",
        "Cuando contiene demasiados elementos.",
        "Cuando alguno de sus elementos es frecuente.",
        "Cuando alguno de sus subconjuntos de tamaño inmediatamente inferior no es frecuente."
      ],
      "correct": [
        3
      ],
      "explanation": "Cuando alguno de sus subconjuntos de tamaño inmediatamente inferior no es frecuente."
    },
    {
      "number": 34,
      "topic": 7,
      "prompt": "¿Qué conjuntos combina Apriori durante la operación Join?",
      "options": [
        "Conjuntos infrecuentes de distinto tamaño.",
        "Conjuntos frecuentes que comparten un prefijo común.",
        "Conjuntos cuya confianza es del 100 %.",
        "Conjuntos de clases diferentes."
      ],
      "correct": [
        1
      ],
      "explanation": "Conjuntos frecuentes que comparten un prefijo común."
    },
    {
      "number": 35,
      "topic": 7,
      "prompt": "¿Qué ocurre al disminuir el soporte mínimo en Apriori?",
      "options": [
        "Se obtienen necesariamente menos conjuntos frecuentes.",
        "Aumenta la confianza de todas las reglas.",
        "Pueden aparecer más conjuntos frecuentes y aumentar el coste de búsqueda.",
        "Desaparece la necesidad de generar candidatos."
      ],
      "correct": [
        2
      ],
      "explanation": "Pueden aparecer más conjuntos frecuentes y aumentar el coste de búsqueda."
    },
    {
      "number": 36,
      "topic": 7,
      "prompt": "¿Qué indica un lift igual a 1?",
      "options": [
        "Asociación positiva.",
        "Asociación negativa.",
        "Confianza del 100 %.",
        "Independencia entre antecedente y consecuente."
      ],
      "correct": [
        3
      ],
      "explanation": "Independencia entre antecedente y consecuente."
    },
    {
      "number": 37,
      "topic": 7,
      "prompt": "Si una regla tiene confianza elevada y lift menor que 1, ¿qué significa?",
      "options": [
        "El antecedente provoca necesariamente el consecuente.",
        "El consecuente es proporcionalmente menos frecuente cuando aparece el antecedente.",
        "El soporte debe ser nulo.",
        "La regla tiene una asociación positiva."
      ],
      "correct": [
        1
      ],
      "explanation": "El consecuente es proporcionalmente menos frecuente cuando aparece el antecedente."
    },
    {
      "number": 38,
      "topic": 7,
      "prompt": "¿Qué caracteriza a las medidas subjetivas de interés?",
      "options": [
        "Utilizan exclusivamente soporte y confianza.",
        "Siempre requieren una fórmula matemática.",
        "Consideran si una regla es inesperada o útil.",
        "Únicamente evalúan la frecuencia del consecuente."
      ],
      "correct": [
        2
      ],
      "explanation": "Consideran si una regla es inesperada o útil."
    },
    {
      "number": 39,
      "topic": 7,
      "prompt": "Si ,  y  son frecuentes, ¿qué podemos afirmar sobre ?",
      "options": [
        "Es necesariamente frecuente.",
        "Tiene confianza del 100 %.",
        "Es necesariamente infrecuente.",
        "Es un candidato válido cuyo soporte debe comprobarse."
      ],
      "correct": [
        3
      ],
      "explanation": "Es un candidato válido cuyo soporte debe comprobarse."
    },
    {
      "number": 40,
      "topic": 7,
      "prompt": "¿Qué indica un lift menor que 1?",
      "options": [
        "Independencia entre antecedente y consecuente.",
        "Asociación negativa entre antecedente y consecuente.",
        "Asociación positiva entre antecedente y consecuente.",
        "Confianza necesariamente inferior al soporte."
      ],
      "correct": [
        1
      ],
      "explanation": "Asociación negativa entre antecedente y consecuente."
    },
    {
      "number": 41,
      "topic": 7,
      "prompt": "Si {A,B} es infrecuente, ¿qué podemos afirmar sobre {A,B,C}?",
      "options": [
        "También es infrecuente.",
        "Es frecuente si C tiene soporte elevado.",
        "Tiene necesariamente mayor soporte que {A,B}.",
        "Su frecuencia depende de la confianza mínima."
      ],
      "correct": [
        0
      ],
      "explanation": "También es infrecuente."
    },
    {
      "number": 64,
      "topic": 8,
      "prompt": "¿En qué consiste el preentrenamiento por capas?",
      "options": [
        "En entrenar progresivamente las capas antes de ajustar toda la red.",
        "En entrenar únicamente la última capa.",
        "En eliminar las capas ocultas.",
        "En mantener fijos todos los pesos."
      ],
      "correct": [
        0
      ],
      "explanation": "En entrenar progresivamente las capas antes de ajustar toda la red."
    },
    {
      "number": 65,
      "topic": 8,
      "prompt": "¿Qué ocurre generalmente al aumentar el stride en una convolución?",
      "options": [
        "Disminuye el tamaño espacial de salida.",
        "Aumenta el número de filtros.",
        "Aumenta necesariamente el tamaño espacial de salida.",
        "Desaparece la necesidad de entrenar."
      ],
      "correct": [
        0
      ],
      "explanation": "Disminuye el tamaño espacial de salida."
    },
    {
      "number": 66,
      "topic": 8,
      "prompt": "¿Qué algoritmo permite calcular los gradientes para entrenar una CNN?",
      "options": [
        "Backpropagation.",
        "Gradient Boosting.",
        "Expectation-Maximization.",
        "Apriori."
      ],
      "correct": [
        0
      ],
      "explanation": "Backpropagation."
    },
    {
      "number": 83,
      "topic": 9,
      "prompt": "¿Qué mide la relación de desequilibrio (IR)?",
      "options": [
        "La proporción entre errores positivos y negativos.",
        "La proporción entre ejemplos mayoritarios y minoritarios.",
        "El número de atributos por clase.",
        "La relación entre Precision y Recall."
      ],
      "correct": [
        1
      ],
      "explanation": "La proporción entre ejemplos mayoritarios y minoritarios."
    },
    {
      "number": 84,
      "topic": 9,
      "prompt": "¿Qué medidas resultan especialmente útiles para evaluar problemas desbalanceados?",
      "options": [
        "F1-score, G-mean y AUC.",
        "Silhouette, Dunn y Davies-Bouldin.",
        "Soporte, confianza y lift.",
        "Entropía y ganancia de información exclusivamente."
      ],
      "correct": [
        0
      ],
      "explanation": "F1-score, G-mean y AUC."
    },
    {
      "number": 85,
      "topic": 9,
      "prompt": "¿Qué caracteriza a los métodos de envoltura en aprendizaje semisupervisado?",
      "options": [
        "Únicamente utilizan clustering sin clasificador final.",
        "Eliminan todos los ejemplos etiquetados.",
        "Generan pseudoetiquetas para ampliar el entrenamiento supervisado.",
        "Predicen exclusivamente categorías ordinales."
      ],
      "correct": [
        2
      ],
      "explanation": "Generan pseudoetiquetas para ampliar el entrenamiento supervisado."
    },
    {
      "number": 86,
      "topic": 9,
      "prompt": "¿Qué medida multietiqueta evalúa si la etiqueta mejor posicionada es relevante?",
      "options": [
        "Hamming Loss.",
        "Ranking Loss.",
        "Average Precision.",
        "One-error."
      ],
      "correct": [
        3
      ],
      "explanation": "One-error."
    }
  ],
  "calculo": [
    {
      "number": 21,
      "topic": 6,
      "prompt": "Si dos clusters A y B tienen distancias entre sus objetos de 2, 4, 6 y 9, ¿cuál es su distancia mediante Complete Linkage?",
      "options": [
        "2.",
        "4.",
        "6.",
        "9."
      ],
      "correct": [
        3
      ],
      "explanation": "9."
    },
    {
      "number": 22,
      "topic": 6,
      "prompt": "Si un objeto tiene a(i) = 2 y b(i) = 5, ¿cuánto vale su Silhouette?",
      "options": [
        "0,6.",
        "−0,6.",
        "0,4.",
        "1,5."
      ],
      "correct": [
        0
      ],
      "explanation": "0,6."
    },
    {
      "number": 42,
      "topic": 7,
      "prompt": "Si A aparece en 10 transacciones y A y B aparecen juntos en 8, ¿cuál es la confianza de A ⇒ B?",
      "options": [
        "20 %.",
        "80 %.",
        "100 %.",
        "125 %."
      ],
      "correct": [
        1
      ],
      "explanation": "80 %."
    },
    {
      "number": 43,
      "topic": 7,
      "prompt": "Si el soporte de A es 0,4, el de B es 0,5 y el conjunto {A,B} tiene soporte 0,2, ¿cuánto vale su lift?",
      "options": [
        "0,5.",
        "0,8.",
        "1.",
        "2."
      ],
      "correct": [
        2
      ],
      "explanation": "1."
    },
    {
      "number": 44,
      "topic": 7,
      "prompt": "¿Cuántas reglas diferentes con antecedente y consecuente no vacíos pueden generarse a partir de un itemset de tres elementos?",
      "options": [
        "6.",
        "3.",
        "8.",
        "9."
      ],
      "correct": [
        0
      ],
      "explanation": "6."
    },
    {
      "number": 67,
      "topic": 8,
      "prompt": "Una convolución recibe una entrada de tamaño 5, filtro de tamaño 3, padding 1 y stride 2. ¿Cuál es el tamaño espacial de salida?",
      "options": [
        "2.",
        "3.",
        "4.",
        "5."
      ],
      "correct": [
        1
      ],
      "explanation": "3."
    },
    {
      "number": 87,
      "topic": 9,
      "prompt": "Un dataset tiene 900 ejemplos mayoritarios y 100 minoritarios. ¿Cuál es su relación de desequilibrio IR?",
      "options": [
        "0,11.",
        "10.",
        "9.",
        "90."
      ],
      "correct": [
        2
      ],
      "explanation": "9."
    },
    {
      "number": 88,
      "topic": 9,
      "prompt": "En SMOTE, si x = (2,2), su vecino es (6,4) y r = 0,5, ¿qué ejemplo se genera?",
      "options": [
        "(6,2).",
        "(4,3).",
        "(8,6).",
        "(2,4)."
      ],
      "correct": [
        1
      ],
      "explanation": "(4,3)."
    },
    {
      "number": 89,
      "topic": 9,
      "prompt": "En un problema ordinal con cinco categorías, ¿cuántos clasificadores utiliza OVA ordenada?",
      "options": [
        "4.",
        "5.",
        "10.",
        "20."
      ],
      "correct": [
        0
      ],
      "explanation": "4."
    }
  ]
};
