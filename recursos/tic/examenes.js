const ticPastExams = [
  {
    "title": "Parcial 1",
    "exam": 1,
    "source": "Sr_Aprobados (Wuolah), documento aportado por el usuario",
    "questions": [
      {
        "number": 1,
        "prompt": "Una fuente que genera mensajes donde la elección del mensaje actual es estadísticamente independiente de los mensajes anteriores se denomina:",
        "options": [
          "Fuente con memoria",
          "Fuente sin memoria",
          "Fuente determinista",
          "Fuente continua"
        ],
        "correct": [
          1
        ],
        "sourceAnswer": "La respuesta correcta es: Fuente sin memoria"
      },
      {
        "number": 2,
        "prompt": "Un canal en el que la salida determina unívocamente la entrada se denomina:",
        "options": [
          "Canal determinista",
          "Canal sin ruido",
          "Canal sin pérdida",
          "Canal simétrico"
        ],
        "correct": [
          2
        ],
        "sourceAnswer": "La respuesta correcta es: Canal sin pérdida"
      },
      {
        "number": 3,
        "prompt": "¿Cómo se define un código uniforme?",
        "options": [
          "Un código donde todas las palabras tienen la misma probabilidad de ser generadas",
          "Un código donde todas las palabras del código tienen la misma longitud",
          "Un código que utiliza un alfabeto binario (A={0,1})",
          "Un código que es instantáneo y se puede representar con un árbol"
        ],
        "correct": [
          1
        ],
        "sourceAnswer": "La respuesta correcta es: Un código donde todas las palabras del código tienen la misma longitud"
      },
      {
        "number": 4,
        "prompt": "Un código C={10,0,001} sobre el alfabeto A={0,1} se clasifica como",
        "options": [
          "Instantáneo",
          "No Instantáneo",
          "Uniforme",
          "Indescifrable"
        ],
        "correct": [
          1
        ],
        "sourceAnswer": "La respuesta correcta es: No Instantáneo"
      },
      {
        "number": 5,
        "prompt": "¿Qué es un canal inútil?",
        "options": [
          "Un canal que invierte todos los bits (0 se convierte en 1, 1 en 0)",
          "Un canal donde la entrada determina unívocamente la salida",
          "Un canal donde todas las celdas de la matriz de codificación tienen el mismo valor",
          "Un canal sin pérdida donde varias salidas se asocian a la misma entrada"
        ],
        "correct": [
          2
        ],
        "sourceAnswer": "La respuesta correcta es: Un canal donde todas las celdas de la matriz de codificación tienen el mismo valor"
      },
      {
        "number": 6,
        "prompt": "En Teoría de la Información, ¿qué mide la Entropía (H(X)) de una fuente de información discreta?",
        "options": [
          "La cantidad total de datos almacenados",
          "La velocidad a la que se transmiten los símbolos",
          "La incertidumbre promedio asociada a la fuente o la cantidad promedio de información por símbolo",
          "La probabilidad del símbolo más frecuente de la fuente"
        ],
        "correct": [
          2
        ],
        "sourceAnswer": "La respuesta correcta es: La incertidumbre promedio asociada a la fuente o la cantidad promedio de información por símbolo"
      },
      {
        "number": 7,
        "prompt": "¿Para qué tipo de distribución de probabilidad una fuente discreta sin memoria alcanza su entropía máxima?",
        "options": [
          "Cuando todos los símbolos son equiprobables (distribución uniforme)",
          "Cuando un símbolo tiene probabilidad 1 y los demás 0",
          "Cuando la mitad de los símbolos tiene probabilidad 0.5 y la otra mitad 0"
        ],
        "correct": [
          0
        ],
        "sourceAnswer": "La respuesta correcta es: Cuando todos los símbolos son equiprobables (distribución uniforme)"
      },
      {
        "number": 8,
        "prompt": "¿Qué mide la Información Mutua (I(X;Y)) entre dos variables aleatorias X e Y?",
        "options": [
          "La suma de las entropías H(X) y H(Y)",
          "La cantidad de información que Y proporciona sobre X (o viceversa)",
          "La entropía total del sistema conjunto H(X, Y)",
          "La diferencia entre H(X) y H(Y)"
        ],
        "correct": [
          1
        ],
        "sourceAnswer": "La respuesta correcta es: La cantidad de información que Y proporciona sobre X (o viceversa)"
      },
      {
        "number": 9,
        "prompt": "¿Cuál de las siguientes relaciones (regla de la cadena de la entropía) es siempre verdadera?",
        "options": [
          "H(X, Y)=H(X)+H(Y)",
          "H(X, Y)=H(X)+H(Y∣X)",
          "H(X, Y)=H(X)−H(Y)",
          "H(X, Y)=I(X;Y)+H(X)"
        ],
        "correct": [
          1
        ],
        "sourceAnswer": "La respuesta correcta es: H(X, Y)=H(X)+H(Y∣X)"
      },
      {
        "number": 10,
        "prompt": "¿Qué representa la Entropía Condicional H(Y|X)?",
        "options": [
          "La incertidumbre total del sistema (X, Y)",
          "La información que X comparte con Y",
          "La incertidumbre que queda sobre Y después de haber observado X",
          "La probabilidad de que ocurra Y dado X"
        ],
        "correct": [
          2
        ],
        "sourceAnswer": "La respuesta correcta es: La incertidumbre que queda sobre Y después de haber observado X"
      },
      {
        "number": 11,
        "prompt": "Según el Primer Teorema de Shannon (Teorema de Codificación de Fuente), la entropía H(X) de una fuente establece el límite fundamental para",
        "options": [
          "La velocidad de transmisión en un canal ruidoso",
          "La compresión de datos sin pérdidas",
          "La corrección de errores",
          "La seguridad de un criptosistema"
        ],
        "correct": [
          1
        ],
        "sourceAnswer": "La respuesta correcta es: La compresión de datos sin pérdidas"
      },
      {
        "number": 12,
        "prompt": "Si dos variables aleatorias X e Y son estadísticamente independientes, ¿cuál es el valor de su Información Mutua I(X;Y)?",
        "options": [
          "1",
          "0",
          "Infinito",
          "Sus entropías individuales (H(X) y H(Y)) deben ser 0"
        ],
        "correct": [
          1
        ],
        "sourceAnswer": "La respuesta correcta es: 0"
      },
      {
        "number": 13,
        "prompt": "Si dos variables aleatorias X e Y son idénticas (X=Y), ¿cuál es la relación correcta entre su entropía conjunta H(X, Y) y su entropía individual H(X)?",
        "options": [
          "H(X, Y)=2⋅H(X)",
          "H(X, Y)=H(X)",
          "H(X, Y)=(H(X))²"
        ],
        "correct": [
          1
        ],
        "sourceAnswer": "La respuesta correcta es: H(X, Y)=H(X)"
      },
      {
        "number": 14,
        "prompt": "¿Cuál es la longitud esperada para un código transmitido por un canal discreto sin memoria y sin ruido (noiseless), cuyo alfabeto de entrada tiene M símbolos equiprobables?",
        "options": [
          "1 bit/símbolo",
          "0",
          "log₂(M)",
          "M bits/símbolo"
        ],
        "correct": [
          2
        ],
        "sourceAnswer": "La respuesta correcta es: log₂(M)"
      },
      {
        "number": 15,
        "prompt": "¿Cuál es el objetivo principal de la codificación de fuente sin pérdidas (ej. Código de Huffman)?",
        "options": [
          "Introducir redundancia controlada para la corrección de errores",
          "Cifrar el mensaje para seguridad",
          "Representar los datos de la fuente usando la menor cantidad media de bits por símbolo, acercándose a la entropía H(X)",
          "Asegurar que todos los símbolos tengan la misma longitud de código"
        ],
        "correct": [
          2
        ],
        "sourceAnswer": "La respuesta correcta es: Representar los datos de la fuente usando la menor cantidad media de bits por símbolo, acercándose a la entropía H(X)"
      },
      {
        "number": 16,
        "prompt": "Según el Primer Teorema de Shannon para codificación sin ruido, ¿cuál es la relación entre la entropía H(S) y la longitud promedio de palabra n?",
        "options": [
          "La entropía H(S) es siempre igual a la longitud promedio de palabra n",
          "La entropía H(S) es el límite superior de la longitud promedio de palabra n (es decir, n<=H(S))",
          "La entropía H(S) es el límite inferior de la longitud promedio de palabra n (es decir, H(S)<=n)",
          "La entropía H(S) no tiene ninguna relación con la longitud promedio de palabra n"
        ],
        "correct": [
          2
        ],
        "sourceAnswer": "La respuesta correcta es: La entropía H(S) es el límite inferior de la longitud promedio de palabra n (es decir, H(S)<=n)"
      },
      {
        "number": 17,
        "prompt": "La desigualdad de Kraft establece la condición necesaria y suficiente para que",
        "options": [
          "Exista un código instantáneo con longitudes de palabra {ni} para un alfabeto de K símbolos",
          "Un código sea óptimo",
          "Un código sea uniforme",
          "La entropía H(S) sea mínima"
        ],
        "correct": [
          0
        ],
        "sourceAnswer": "La respuesta correcta es: Exista un código instantáneo con longitudes de palabra {ni} para un alfabeto de K símbolos"
      },
      {
        "number": 18,
        "prompt": "Si intentamos diseñar un código binario (K=2) para 6 mensajes con longitudes {2,2,2,2,2,2} (todas de longitud 2), ¿qué nos dice la desigualdad de Kraft?",
        "options": [
          "El código existe y es completo",
          "El código existe, pero no es completo",
          "El código no existe",
          "El código es óptimo"
        ],
        "correct": [
          2
        ],
        "sourceAnswer": "La respuesta correcta es: El código no existe"
      },
      {
        "number": 19,
        "prompt": "Sea el código C={0,10,11}. ¿Por qué se afirma que es completo?",
        "options": [
          "Porque su longitud promedio de palabra es 1",
          "Porque todas sus palabras tienen la misma longitud",
          "Porque cumple la igualdad de Kraft",
          "Porque es la salida del algoritmo de Shannon-Fano"
        ],
        "correct": [
          2
        ],
        "sourceAnswer": "La respuesta correcta es: Porque cumple la igualdad de Kraft"
      },
      {
        "number": 20,
        "prompt": "Se nos da una fuente S con sus probabilidades p(si) y un código instantáneo C con longitudes de palabra ni. ¿Cuál de las siguientes situaciones demostraría de forma concluyente que el código C NO puede haber sido generado por el algoritmo de Huffman?",
        "options": [
          "El código no es uniforme (es decir, ni≠nj para algún par de símbolos i,j)",
          "El código no es completo (es decir, no cumple la igualdad de Kraft)",
          "El código no es óptimo (es decir, se puede demostrar que existe otro código C′ para la misma fuente tal que su longitud de palabra promedio n(C′) es menor que n(C))",
          "El código tiene dos símbolos si y sj con probabilidades diferentes (p(si)≠p(sj)) pero con la misma longitud de palabra (ni=nj)"
        ],
        "correct": [
          2
        ],
        "sourceAnswer": "La respuesta correcta es: El código no es óptimo (es decir, se puede demostrar que existe otro código C′ para la misma fuente tal que su longitud de palabra promedio n(C′) es menor que n(C))"
      }
    ]
  },
  {
    "title": "Parcial 2",
    "exam": 2,
    "source": "Sr_Aprobados (Wuolah), documento aportado por el usuario",
    "questions": [
      {
        "number": 1,
        "prompt": "Sea un código de suma modular que envía mensajes de 4 bits codificados en un código de bloque, agrupando los mensajes de 3 en 3 y añadiendo un checksum calculado como el complemento a dos de la suma de los tres mensajes. Entonces, para el envío del bloque 0101101001101000...",
        "options": [
          "No se detecta error en el receptor.",
          "Los bits correspondientes al checksum están mal calculados.",
          "Ninguna de las demás opciones es correcta.",
          "Se detecta error en el receptor."
        ],
        "correct": [
          1,
          3
        ],
        "sourceAnswer": "Las respuestas correctas son: Se detecta error en el receptor, Los bits correspondientes al checksum están mal calculados"
      },
      {
        "number": 2,
        "prompt": "Sea una fuente que genera 8 mensajes S={a,b,c,d,e,f,g,h}, codificados en un código uniforme. Se genera un código de bloque incorporando dos bits de paridad: uno es de paridad par y otro de paridad impar. El código generado es capaz de:",
        "options": [
          "Detectar 3 errores y corregir 1 error.",
          "Detectar 1 error y corregir 1 error.",
          "Ninguna de las demás opciones.",
          "Detectar 2 errores.",
          "Detectar 1 error."
        ],
        "correct": [
          4
        ],
        "sourceAnswer": "La respuesta correcta es: Detectar 1 error"
      },
      {
        "number": 3,
        "prompt": "Se desea calcular el código de verificación de errores X de una tarjeta de crédito 123456789012345. El valor de X debe ser:",
        "options": [
          "Ninguna de las demás opciones es la correcta.",
          "X=5",
          "X=0",
          "X=9",
          "X=1"
        ],
        "correct": [
          0
        ],
        "sourceAnswer": "La respuesta correcta es: Ninguna de las demás opciones es la correcta"
      },
      {
        "number": 4,
        "prompt": "Se dispone de un código lineal, donde la matriz generadora viene dada por dos vectores fila G=(F1; F2). Los vectores son F1=(11111010) y F2=(11100101). Dicho código:",
        "options": [
          "Permite detectar un error y corregir 3.",
          "Puede corregir dos errores.",
          "Permite detectar y corregir un error.",
          "Ninguna de las demás opciones es correcta.",
          "Permite detectar 3 errores y corregir uno."
        ],
        "correct": [
          1
        ],
        "sourceAnswer": "La respuesta correcta es: Puede corregir dos errores"
      },
      {
        "number": 5,
        "prompt": "Se dispone de un código lineal, donde la matriz generadora viene dada por dos vectores fila G=(F1; F2). Los vectores son F1=(11111010) y F2=(11100101). La codificación de la palabra (11) da como resultado el vector:",
        "options": [
          "01100110",
          "10011001",
          "00011111",
          "Ninguna de las demás opciones es correcta.",
          "11100100"
        ],
        "correct": [
          2
        ],
        "sourceAnswer": "La respuesta correcta es: 00011111"
      },
      {
        "number": 6,
        "prompt": "Se dispone de un código lineal, donde la matriz generadora viene dada por dos vectores fila G=(F1; F2). Los vectores son F1=(11111010) y F2=(11100101). El receptor recibe la palabra (11111001). Entonces:",
        "options": [
          "Detecta que hay un error, lo corrige y decodifica la palabra (00).",
          "Detecta que hay un error, lo corrige y decodifica la palabra (11).",
          "Decodifica la palabra (10).",
          "Decodifica la palabra (01).",
          "Detecta que hay dos errores, pero no es capaz de corregirlos."
        ],
        "correct": [
          2
        ],
        "sourceAnswer": "La respuesta correcta es: Decodifica la palabra (10)"
      },
      {
        "number": 7,
        "prompt": "Se dispone de un código lineal, donde la matriz generadora viene dada por dos vectores fila G=(F1; F2). Los vectores son F1=(11111010) y F2=(11100101). El emisor desea codificar la palabra (00). Entonces:",
        "options": [
          "Ninguna de las demás opciones es correcta.",
          "El receptor siempre va a recibir la palabra del código (00000000).",
          "Si se recibe (01000010), se detecta error y se corrige, decodificando (00).",
          "No se puede corregir más de un error.",
          "Si se recibe (11100000), se detecta error y se corrige, decodificando (00)."
        ],
        "correct": [
          2
        ],
        "sourceAnswer": "La respuesta correcta es: Si se recibe (01000010), se detecta error y se corrige, decodificando (00)"
      },
      {
        "number": 8,
        "prompt": "Un código de Hamming (7,4) permite detectar 2 errores y corregir 1 error. Sin embargo, un código de Hamming (15,11)...",
        "options": [
          "Tiene la misma capacidad de detección y corrección.",
          "Detecta errores en un mayor número de bits, pero tiene la misma capacidad de corrección.",
          "Ninguna de las demás opciones es correcta.",
          "Detecta 3 errores y es capaz de corregir 2 errores."
        ],
        "correct": [
          0
        ],
        "sourceAnswer": "La respuesta correcta es: Tiene la misma capacidad de detección y corrección"
      },
      {
        "number": 9,
        "prompt": "Sea un código de Hamming (7,4) diseñado con el formato (u4, u3, u2, p3, u1, p2, p1) para codificar palabras de 4 bits con el formato u=(u4, u3, u2, u1). La codificación de (1001) es:",
        "options": [
          "(1000100)",
          "(1000101)",
          "(1000110)",
          "(1001100)",
          "Ninguna de las demás opciones es correcta."
        ],
        "correct": [
          3
        ],
        "sourceAnswer": "La respuesta correcta es: (1001100)"
      },
      {
        "number": 10,
        "prompt": "Sea un código de Hamming (7,4) diseñado con el formato (u4, u3, u2, p3, u1, p2, p1). El receptor recibe la palabra (1111111).",
        "options": [
          "Su síndrome asociado es (000), por lo que no se puede corregir el error existente.",
          "Su síndrome asociado es (101), donde el error se encuentra en la posición 2.",
          "La palabra no se corresponde con una codificación posible.",
          "Su síndrome asociado es (101), donde el error se encuentra en la posición 5.",
          "Su síndrome asociado es (000), e indica que no hay ningún error."
        ],
        "correct": [
          0,
          4
        ],
        "sourceAnswer": "Las respuestas correctas son: Su síndrome asociado es (000), por lo que no se puede corregir el error existente, Su síndrome asociado es (000), e indica que no hay ningún error"
      }
    ]
  }
];
