const ticSimulationExams = [
  {
    "title": "Simulacro 1 · Primer parcial TIC",
    "exam": 1,
    "simulation": true,
    "source": "Simulacros aportados por el usuario, temas 1, 2 y 3",
    "questions": [
      {
        "number": 1,
        "prompt": "Una fuente discreta sin memoria se caracteriza porque:",
        "options": [
          "Genera siempre mensajes equiprobables.",
          "La probabilidad de cada mensaje no depende de los mensajes emitidos anteriormente.",
          "Los mensajes se generan de forma determinista.",
          "No puede transmitir mensajes repetidos."
        ],
        "correct": [
          1
        ],
        "optionLabels": [
          "a",
          "b",
          "c",
          "d"
        ],
        "sourceAnswer": "Respuesta según la plantilla: b) La probabilidad de cada mensaje no depende de los mensajes emitidos anteriormente.. En una fuente sin memoria, los mensajes emitidos en distintos instantes son estadísticamente independientes."
      },
      {
        "number": 2,
        "prompt": "¿Qué caracteriza a un canal sin pérdida?",
        "options": [
          "La entrada determina unívocamente la salida.",
          "La salida determina unívocamente la entrada.",
          "Todos los símbolos llegan sin modificaciones.",
          "La matriz del canal contiene únicamente probabilidades iguales."
        ],
        "correct": [
          1
        ],
        "optionLabels": [
          "a",
          "b",
          "c",
          "d"
        ],
        "sourceAnswer": "Respuesta según la plantilla: b) La salida determina unívocamente la entrada.. En un canal sin pérdida, la salida determina unívocamente la entrada."
      },
      {
        "number": 3,
        "prompt": "¿Cuál de los siguientes códigos binarios es instantáneo?",
        "options": [
          "C={0,01,11}",
          "C={1,10,001}",
          "C={00,01,10,11}",
          "C={0,00,01}"
        ],
        "correct": [
          2
        ],
        "optionLabels": [
          "a",
          "b",
          "c",
          "d"
        ],
        "sourceAnswer": "Respuesta según la plantilla: c) C={00,01,10,11}. Ninguna palabra es prefijo de otra."
      },
      {
        "number": 4,
        "prompt": "Un canal sin ruido es aquel que:",
        "options": [
          "Tiene una probabilidad de error inferior a 0,5.",
          "Es simultáneamente determinista y sin pérdida.",
          "Tiene todas las filas idénticas en su matriz.",
          "Siempre utiliza un alfabeto binario."
        ],
        "correct": [
          1
        ],
        "optionLabels": [
          "a",
          "b",
          "c",
          "d"
        ],
        "sourceAnswer": "Respuesta según la plantilla: b) Es simultáneamente determinista y sin pérdida.. Un canal sin ruido es simultáneamente determinista y sin pérdida."
      },
      {
        "number": 5,
        "prompt": "Si una fuente genera un mensaje con probabilidad p(s)=1/8, ¿cuánta información aporta?",
        "options": [
          "1 bit.",
          "2 bits.",
          "3 bits.",
          "8 bits."
        ],
        "correct": [
          2
        ],
        "optionLabels": [
          "a",
          "b",
          "c",
          "d"
        ],
        "sourceAnswer": "Respuesta según la plantilla: c) 3 bits.. I(s)=-log₂(1/8)=3 bits."
      },
      {
        "number": 6,
        "prompt": "La entropía de una fuente con cinco mensajes posibles alcanza su valor máximo cuando:",
        "options": [
          "Uno de los mensajes tiene probabilidad 1.",
          "Todos los mensajes son equiprobables.",
          "Dos mensajes tienen probabilidad 0.",
          "La fuente tiene memoria."
        ],
        "correct": [
          1
        ],
        "optionLabels": [
          "a",
          "b",
          "c",
          "d"
        ],
        "sourceAnswer": "Respuesta según la plantilla: b) Todos los mensajes son equiprobables.. La entropía es máxima cuando todos los mensajes son equiprobables."
      },
      {
        "number": 7,
        "prompt": "Si dos variables X e Y son independientes, entonces:",
        "options": [
          "H(X,Y)=H(X)-H(Y)",
          "H(X|Y)=0",
          "H(X,Y)=H(X)+H(Y)",
          "I(X;Y)=H(X)"
        ],
        "correct": [
          2
        ],
        "optionLabels": [
          "a",
          "b",
          "c",
          "d"
        ],
        "sourceAnswer": "Respuesta según la plantilla: c) H(X,Y)=H(X)+H(Y). Para variables independientes, H(X,Y)=H(X)+H(Y)."
      },
      {
        "number": 8,
        "prompt": "La entropía condicional H(X|Y) representa:",
        "options": [
          "La incertidumbre conjunta de X e Y.",
          "La incertidumbre restante sobre X después de conocer Y.",
          "La cantidad total de información de Y.",
          "La probabilidad de X condicionada a Y."
        ],
        "correct": [
          1
        ],
        "optionLabels": [
          "a",
          "b",
          "c",
          "d"
        ],
        "sourceAnswer": "Respuesta según la plantilla: b) La incertidumbre restante sobre X después de conocer Y.. La entropía condicional mide la incertidumbre restante después de conocer otra variable."
      },
      {
        "number": 9,
        "prompt": "¿Cuál de las siguientes relaciones es siempre correcta?",
        "options": [
          "H(X,Y)=H(X)+H(Y)",
          "H(X,Y)=H(X)-H(Y|X)",
          "H(X,Y)=H(X)+H(Y|X)",
          "H(X|Y)=H(Y|X)"
        ],
        "correct": [
          2
        ],
        "optionLabels": [
          "a",
          "b",
          "c",
          "d"
        ],
        "sourceAnswer": "Respuesta según la plantilla: c) H(X,Y)=H(X)+H(Y|X). Es la ley de entropías totales."
      },
      {
        "number": 10,
        "prompt": "Si X e Y son variables idénticas (X=Y), ¿cuánto vale su entropía conjunta?",
        "options": [
          "2H(X)",
          "H(X)",
          "0",
          "H(X)^2"
        ],
        "correct": [
          1
        ],
        "optionLabels": [
          "a",
          "b",
          "c",
          "d"
        ],
        "sourceAnswer": "Respuesta según la plantilla: b) H(X). Si X=Y, entonces H(X,Y)=H(X)."
      },
      {
        "number": 11,
        "prompt": "La información mutua I(X;Y) es cero cuando:",
        "options": [
          "X e Y son independientes.",
          "X e Y son idénticas.",
          "Ambas variables tienen entropía máxima.",
          "X tiene más símbolos que Y."
        ],
        "correct": [
          0
        ],
        "optionLabels": [
          "a",
          "b",
          "c",
          "d"
        ],
        "sourceAnswer": "Respuesta según la plantilla: a) X e Y son independientes.. Las variables independientes no comparten información: I(X;Y)=0."
      },
      {
        "number": 12,
        "prompt": "¿Qué establece el primer teorema de Shannon para la codificación de fuente sin ruido?",
        "options": [
          "Todo código binario tiene longitud media exactamente igual a H(S).",
          "Existe un código binario instantáneo cuya longitud media cumple H(S)≤n̄<H(S)+1.",
          "La entropía es siempre mayor que la longitud media.",
          "La longitud media de cualquier código es menor que H(S)+1."
        ],
        "correct": [
          1
        ],
        "optionLabels": [
          "a",
          "b",
          "c",
          "d"
        ],
        "sourceAnswer": "Respuesta según la plantilla: b) Existe un código binario instantáneo cuya longitud media cumple H(S)≤n̄<H(S)+1.. Shannon garantiza que existe un código que cumple H(S)≤n̄<H(S)+1."
      },
      {
        "number": 13,
        "prompt": "Para un código binario con longitudes {1,2,3,3}, ¿cuánto vale la suma de Kraft?",
        "options": [
          "0,75.",
          "0,875.",
          "1.",
          "1,25."
        ],
        "correct": [
          2
        ],
        "optionLabels": [
          "a",
          "b",
          "c",
          "d"
        ],
        "sourceAnswer": "Respuesta según la plantilla: c) 1.. 2^{-1}+2^{-2}+2^{-3}+2^{-3}=1."
      },
      {
        "number": 14,
        "prompt": "Si para unas longitudes de palabra la suma de Kraft es superior a 1:",
        "options": [
          "Existe un código instantáneo completo.",
          "Existe un código instantáneo no completo.",
          "No existe ningún código instantáneo con esas longitudes.",
          "El código es necesariamente óptimo."
        ],
        "correct": [
          2
        ],
        "optionLabels": [
          "a",
          "b",
          "c",
          "d"
        ],
        "sourceAnswer": "Respuesta según la plantilla: c) No existe ningún código instantáneo con esas longitudes.. Si la suma de Kraft supera 1, no existe un código instantáneo con esas longitudes."
      },
      {
        "number": 15,
        "prompt": "¿Qué significa que un código instantáneo sea completo?",
        "options": [
          "Que todas sus palabras tienen la misma longitud.",
          "Que no pueden añadirse nuevas palabras sin perder la propiedad de prefijo.",
          "Que su longitud media coincide con la entropía.",
          "Que todas sus palabras tienen la misma probabilidad."
        ],
        "correct": [
          1
        ],
        "optionLabels": [
          "a",
          "b",
          "c",
          "d"
        ],
        "sourceAnswer": "Respuesta según la plantilla: b) Que no pueden añadirse nuevas palabras sin perder la propiedad de prefijo.. Un código instantáneo completo no permite incorporar nuevas palabras sin perder la propiedad de prefijo."
      },
      {
        "number": 16,
        "prompt": "¿Cuál es la principal limitación del algoritmo de Shannon-Fano?",
        "options": [
          "No permite construir códigos binarios.",
          "No genera códigos instantáneos.",
          "No garantiza obtener un código óptimo.",
          "Solo funciona con mensajes equiprobables."
        ],
        "correct": [
          2
        ],
        "optionLabels": [
          "a",
          "b",
          "c",
          "d"
        ],
        "sourceAnswer": "Respuesta según la plantilla: c) No garantiza obtener un código óptimo.. Shannon-Fano genera códigos instantáneos, pero no garantiza la optimalidad."
      },
      {
        "number": 17,
        "prompt": "En el algoritmo binario de Huffman, ¿qué nodos se fusionan en cada iteración?",
        "options": [
          "Los dos de mayor probabilidad.",
          "Los dos de menor probabilidad.",
          "Los dos de mayor longitud.",
          "Dos nodos elegidos aleatoriamente."
        ],
        "correct": [
          1
        ],
        "optionLabels": [
          "a",
          "b",
          "c",
          "d"
        ],
        "sourceAnswer": "Respuesta según la plantilla: b) Los dos de menor probabilidad.. Huffman fusiona los dos nodos de menor probabilidad en cada iteración."
      },
      {
        "number": 18,
        "prompt": "¿Qué propiedad garantiza el algoritmo binario de Huffman?",
        "options": [
          "Todos los códigos generados son uniformes.",
          "La longitud media siempre es igual a la entropía.",
          "El código obtenido es instantáneo y óptimo.",
          "Solo existe una codificación óptima para cada fuente."
        ],
        "correct": [
          2
        ],
        "optionLabels": [
          "a",
          "b",
          "c",
          "d"
        ],
        "sourceAnswer": "Respuesta según la plantilla: c) El código obtenido es instantáneo y óptimo.. Huffman garantiza un código instantáneo óptimo para codificación binaria símbolo a símbolo."
      },
      {
        "number": 19,
        "prompt": "En una fuente con probabilidades p(A)=0,5, p(B)=0,25 y p(C)=p(D)=0,125, ¿cuál es su entropía?",
        "options": [
          "1,25 bits.",
          "1,5 bits.",
          "1,75 bits.",
          "2 bits."
        ],
        "correct": [
          2
        ],
        "optionLabels": [
          "a",
          "b",
          "c",
          "d"
        ],
        "sourceAnswer": "Respuesta según la plantilla: c) 1,75 bits.. H(S)=0,5+0,5+0,375+0,375=1,75 bits."
      },
      {
        "number": 20,
        "prompt": "Para un código instantáneo completo sobre un alfabeto de K=3 símbolos, ¿cuál de estos números de palabras es compatible con la condición m=1+λ(K-1)?",
        "options": [
          "4.",
          "5.",
          "6.",
          "8."
        ],
        "correct": [
          1
        ],
        "optionLabels": [
          "a",
          "b",
          "c",
          "d"
        ],
        "sourceAnswer": "Respuesta según la plantilla: b) 5.. Para K=3, m=1+2λ. Con m=5, se obtiene λ=2."
      }
    ]
  },
  {
    "title": "Simulacro 2 · Primer parcial TIC",
    "exam": 1,
    "simulation": true,
    "source": "Simulacros aportados por el usuario, temas 1, 2 y 3",
    "questions": [
      {
        "number": 1,
        "prompt": "¿Cuál de las siguientes afirmaciones sobre las fuentes de información es correcta?",
        "options": [
          "Una fuente discreta genera necesariamente mensajes equiprobables.",
          "Una fuente sin memoria genera siempre el mismo mensaje.",
          "En una fuente sin memoria, la probabilidad de un mensaje no depende de los anteriores.",
          "Una fuente con memoria no puede describirse mediante probabilidades."
        ],
        "correct": [
          2
        ],
        "optionLabels": [
          "a",
          "b",
          "c",
          "d"
        ],
        "sourceAnswer": "Respuesta según la plantilla: c) En una fuente sin memoria, la probabilidad de un mensaje no depende de los anteriores.. Los mensajes de una fuente sin memoria son estadísticamente independientes."
      },
      {
        "number": 2,
        "prompt": "Un canal determinista se caracteriza porque:",
        "options": [
          "Cada salida se corresponde con una única entrada.",
          "Cada entrada determina una única salida.",
          "Todas las entradas tienen la misma probabilidad de generar una salida determinada.",
          "No puede alterar los símbolos transmitidos."
        ],
        "correct": [
          1
        ],
        "optionLabels": [
          "a",
          "b",
          "c",
          "d"
        ],
        "sourceAnswer": "Respuesta según la plantilla: b) Cada entrada determina una única salida.. En un canal determinista, cada entrada determina una única salida."
      },
      {
        "number": 3,
        "prompt": "¿Cuál de las siguientes matrices representa un canal inútil?",
        "options": [
          "[1  0; 0  1]",
          "[0,8  0,2; 0,8  0,2]",
          "[0,9  0,1; 0,1  0,9]",
          "[1  0; 1  0]"
        ],
        "correct": [
          1,
          3
        ],
        "optionLabels": [
          "a",
          "b",
          "c",
          "d"
        ],
        "sourceAnswer": "Respuestas según la plantilla: b) [0,8  0,2; 0,8  0,2] y d) [1  0; 1  0]. Ambas matrices tienen filas idénticas y representan canales inútiles."
      },
      {
        "number": 4,
        "prompt": "Sea el código binario C={0,01,11}. ¿Cuál de las siguientes afirmaciones es correcta?",
        "options": [
          "Es uniforme e instantáneo.",
          "Es instantáneo, pero no uniforme.",
          "No es instantáneo porque una palabra es prefijo de otra.",
          "Es indescifrable porque contiene palabras de diferente longitud."
        ],
        "correct": [
          2
        ],
        "optionLabels": [
          "a",
          "b",
          "c",
          "d"
        ],
        "sourceAnswer": "Respuesta según la plantilla: c) No es instantáneo porque una palabra es prefijo de otra.. La palabra 0 es prefijo de 01."
      },
      {
        "number": 5,
        "prompt": "Si dos mensajes independientes tienen probabilidades p(A)=1/4 y p(B)=1/8, ¿cuánta información aporta la aparición conjunta de ambos?",
        "options": [
          "3 bits.",
          "4 bits.",
          "5 bits.",
          "6 bits."
        ],
        "correct": [
          2
        ],
        "optionLabels": [
          "a",
          "b",
          "c",
          "d"
        ],
        "sourceAnswer": "Respuesta según la plantilla: c) 5 bits.. I(A,B)=-log₂(1/32)=5."
      },
      {
        "number": 6,
        "prompt": "Una fuente discreta tiene cuatro símbolos con probabilidades {0,5;0,25;0,125;0,125}. ¿Cuál es su entropía?",
        "options": [
          "1,25 bits.",
          "1,5 bits.",
          "1,75 bits.",
          "2 bits."
        ],
        "correct": [
          2
        ],
        "optionLabels": [
          "a",
          "b",
          "c",
          "d"
        ],
        "sourceAnswer": "Respuesta según la plantilla: c) 1,75 bits.. La entropía es 1,75 bits."
      },
      {
        "number": 7,
        "prompt": "¿Cuál de las siguientes afirmaciones sobre la entropía es falsa?",
        "options": [
          "La entropía nunca es negativa.",
          "La entropía es máxima cuando los símbolos son equiprobables.",
          "La entropía siempre aumenta al incrementar el número de símbolos posibles, aunque tengan probabilidad nula.",
          "La entropía es cero cuando un símbolo tiene probabilidad 1."
        ],
        "correct": [
          2
        ],
        "optionLabels": [
          "a",
          "b",
          "c",
          "d"
        ],
        "sourceAnswer": "Respuesta según la plantilla: c) La entropía siempre aumenta al incrementar el número de símbolos posibles, aunque tengan probabilidad nula.. Añadir símbolos de probabilidad cero no modifica la entropía."
      },
      {
        "number": 8,
        "prompt": "Si H(X)=3 bits y H(X|Y)=1 bit, ¿cuánto vale I(X;Y)?",
        "options": [
          "1 bit.",
          "2 bits.",
          "3 bits.",
          "4 bits."
        ],
        "correct": [
          1
        ],
        "optionLabels": [
          "a",
          "b",
          "c",
          "d"
        ],
        "sourceAnswer": "Respuesta según la plantilla: b) 2 bits.. I(X;Y)=3-1=2."
      },
      {
        "number": 9,
        "prompt": "Si H(X)=2, H(Y)=3 y H(X,Y)=4, ¿cuánto vale H(Y|X)?",
        "options": [
          "1 bit.",
          "2 bits.",
          "3 bits.",
          "4 bits."
        ],
        "correct": [
          1
        ],
        "optionLabels": [
          "a",
          "b",
          "c",
          "d"
        ],
        "sourceAnswer": "Respuesta según la plantilla: b) 2 bits.. H(Y|X)=4-2=2."
      },
      {
        "number": 10,
        "prompt": "¿Cuál de las siguientes condiciones implica que X queda completamente determinada al conocer Y?",
        "options": [
          "H(X|Y)=H(X)",
          "H(X,Y)=H(X)+H(Y)",
          "H(X|Y)=0",
          "I(X;Y)=0"
        ],
        "correct": [
          2
        ],
        "optionLabels": [
          "a",
          "b",
          "c",
          "d"
        ],
        "sourceAnswer": "Respuesta según la plantilla: c) H(X|Y)=0. La entropía condicional nula implica dependencia completa de X respecto de Y."
      },
      {
        "number": 11,
        "prompt": "Si dos variables son estadísticamente independientes, ¿qué relación se cumple?",
        "options": [
          "H(X|Y)=H(X)",
          "H(X,Y)=H(X)",
          "I(X;Y)=H(X)"
        ],
        "correct": [
          0
        ],
        "optionLabels": [
          "a",
          "c",
          "d"
        ],
        "sourceAnswer": "Respuesta según la plantilla: a) H(X|Y)=H(X). La independencia implica H(X|Y)=H(X).",
        "note": "La opción b no aparece en el texto aportado por un error de formato. Se muestran las tres opciones disponibles."
      },
      {
        "number": 12,
        "prompt": "¿Cuál de las siguientes expresiones de información mutua es correcta?",
        "options": [
          "I(X;Y)=H(X,Y)-H(X)",
          "I(X;Y)=H(X)+H(Y)-H(X,Y)",
          "I(X;Y)=H(X|Y)+H(Y|X)",
          "I(X;Y)=H(X,Y)+H(Y)"
        ],
        "correct": [
          1
        ],
        "optionLabels": [
          "a",
          "b",
          "c",
          "d"
        ],
        "sourceAnswer": "Respuesta según la plantilla: b) I(X;Y)=H(X)+H(Y)-H(X,Y). Es una expresión equivalente de información mutua."
      },
      {
        "number": 13,
        "prompt": "Un código binario instantáneo tiene longitudes {1,3,3,3,3}. ¿Qué indica la desigualdad de Kraft?",
        "options": [
          "No puede existir.",
          "Puede existir y es completo.",
          "Puede existir, pero no es completo.",
          "Es necesariamente óptimo."
        ],
        "correct": [
          1
        ],
        "optionLabels": [
          "a",
          "b",
          "c",
          "d"
        ],
        "sourceAnswer": "Respuesta según la plantilla: b) Puede existir y es completo.. La suma de Kraft es 1/2+4/8=1."
      },
      {
        "number": 14,
        "prompt": "¿Cuál de las siguientes afirmaciones sobre Kraft es correcta?",
        "options": [
          "Si se cumple Kraft, cualquier código concreto con esas longitudes es instantáneo.",
          "Si la suma de Kraft es menor que 1, el código es completo.",
          "Si la suma de Kraft es mayor que 1, no existe un código instantáneo con esas longitudes.",
          "La desigualdad de Kraft únicamente puede aplicarse a códigos binarios."
        ],
        "correct": [
          2
        ],
        "optionLabels": [
          "a",
          "b",
          "c",
          "d"
        ],
        "sourceAnswer": "Respuesta según la plantilla: c) Si la suma de Kraft es mayor que 1, no existe un código instantáneo con esas longitudes.. Si Kraft supera 1, el código instantáneo no puede existir."
      },
      {
        "number": 15,
        "prompt": "Para una fuente con entropía H(S)=2,4 bits, ¿cuál de las siguientes longitudes medias podría corresponder a un código binario instantáneo?",
        "options": [
          "2,1 bits.",
          "2,3 bits.",
          "2,8 bits.",
          "1,9 bits."
        ],
        "correct": [
          2
        ],
        "optionLabels": [
          "a",
          "b",
          "c",
          "d"
        ],
        "sourceAnswer": "Respuesta según la plantilla: c) 2,8 bits.. La longitud media debe ser mayor o igual que 2,4."
      },
      {
        "number": 16,
        "prompt": "¿Qué ocurre con la longitud media por mensaje cuando se utilizan bloques cada vez mayores en la codificación de Shannon?",
        "options": [
          "Aumenta indefinidamente.",
          "Puede aproximarse arbitrariamente a la entropía.",
          "Se vuelve necesariamente igual a cero.",
          "Siempre coincide exactamente con la entropía."
        ],
        "correct": [
          1
        ],
        "optionLabels": [
          "a",
          "b",
          "c",
          "d"
        ],
        "sourceAnswer": "Respuesta según la plantilla: b) Puede aproximarse arbitrariamente a la entropía.. La codificación por bloques permite aproximarse a la entropía."
      },
      {
        "number": 17,
        "prompt": "¿Cuál de las siguientes características distingue a Shannon-Fano de Huffman?",
        "options": [
          "Shannon-Fano construye el código de forma ascendente.",
          "Shannon-Fano garantiza siempre un código óptimo.",
          "Shannon-Fano divide recursivamente los mensajes en grupos de probabilidades similares.",
          "Shannon-Fano únicamente puede utilizar símbolos equiprobables."
        ],
        "correct": [
          2
        ],
        "optionLabels": [
          "a",
          "b",
          "c",
          "d"
        ],
        "sourceAnswer": "Respuesta según la plantilla: c) Shannon-Fano divide recursivamente los mensajes en grupos de probabilidades similares.. Shannon-Fano utiliza divisiones descendentes."
      },
      {
        "number": 18,
        "prompt": "¿Por qué Huffman garantiza una longitud media mínima?",
        "options": [
          "Porque asigna necesariamente la misma longitud a todas las palabras.",
          "Porque fusiona repetidamente los nodos de menor probabilidad siguiendo una estrategia óptima.",
          "Porque utiliza siempre más símbolos que Shannon-Fano.",
          "Porque elimina los mensajes menos probables."
        ],
        "correct": [
          1
        ],
        "optionLabels": [
          "a",
          "b",
          "c",
          "d"
        ],
        "sourceAnswer": "Respuesta según la plantilla: b) Porque fusiona repetidamente los nodos de menor probabilidad siguiendo una estrategia óptima.. Huffman aplica una estrategia voraz que garantiza optimalidad."
      },
      {
        "number": 19,
        "prompt": "¿Cuál de las siguientes afirmaciones sobre los códigos óptimos es correcta?",
        "options": [
          "Todo código instantáneo es óptimo.",
          "Todo código completo es óptimo.",
          "Pueden existir varios códigos óptimos para una misma fuente.",
          "Un código óptimo debe ser necesariamente uniforme."
        ],
        "correct": [
          2
        ],
        "optionLabels": [
          "a",
          "b",
          "c",
          "d"
        ],
        "sourceAnswer": "Respuesta según la plantilla: c) Pueden existir varios códigos óptimos para una misma fuente.. Una fuente puede admitir diferentes códigos óptimos."
      },
      {
        "number": 20,
        "prompt": "Para un código completo sobre un alfabeto ternario (K=3), ¿cuál de los siguientes números de palabras no es compatible con la condición m=1+λ(K-1)?",
        "options": [
          "3.",
          "5.",
          "7.",
          "8."
        ],
        "correct": [
          3
        ],
        "optionLabels": [
          "a",
          "b",
          "c",
          "d"
        ],
        "sourceAnswer": "Respuesta según la plantilla: d) 8.. Para K=3, el número de palabras debe ser impar."
      }
    ]
  },
  {
    "title": "Simulacro 3 · Primer parcial TIC",
    "exam": 1,
    "simulation": true,
    "source": "Simulacros aportados por el usuario, temas 1, 2 y 3",
    "questions": [
      {
        "number": 1,
        "prompt": "Si un canal es determinista, pero no es sin pérdida, ¿qué puede ocurrir?",
        "options": [
          "Una misma entrada puede generar varias salidas.",
          "Varias entradas pueden producir una misma salida.",
          "Cada salida identifica siempre la entrada original.",
          "El canal debe ser necesariamente inútil."
        ],
        "correct": [
          1
        ],
        "optionLabels": [
          "a",
          "b",
          "c",
          "d"
        ],
        "sourceAnswer": "Respuesta según la plantilla: b) Varias entradas pueden producir una misma salida.. Un canal determinista puede asociar varias entradas a una misma salida."
      },
      {
        "number": 2,
        "prompt": "¿Cuál de las siguientes afirmaciones sobre un canal sin ruido es correcta?",
        "options": [
          "Las salidas deben coincidir físicamente con las entradas.",
          "El canal debe ser binario.",
          "La correspondencia entre entradas y salidas es biyectiva.",
          "Todas las salidas deben tener la misma probabilidad."
        ],
        "correct": [
          2
        ],
        "optionLabels": [
          "a",
          "b",
          "c",
          "d"
        ],
        "sourceAnswer": "Respuesta según la plantilla: c) La correspondencia entre entradas y salidas es biyectiva.. Un canal sin ruido es determinista y sin pérdida."
      },
      {
        "number": 3,
        "prompt": "Sea el código C={0,01,11}. ¿Cuál de las siguientes afirmaciones es correcta?",
        "options": [
          "Es instantáneo y uniforme.",
          "Es de traducción única, aunque no instantáneo.",
          "No es de traducción única, porque la secuencia 011 admite varias descodificaciones.",
          "No es uniforme y tampoco instantáneo."
        ],
        "correct": [
          3
        ],
        "optionLabels": [
          "a",
          "b",
          "c",
          "d"
        ],
        "sourceAnswer": "Respuesta según la plantilla: d) No es uniforme y tampoco instantáneo.. 0 es prefijo de 01; las longitudes también son diferentes."
      },
      {
        "number": 4,
        "prompt": "Un código es uniforme cuando:",
        "options": [
          "Todos los mensajes tienen la misma probabilidad.",
          "Todas las palabras tienen la misma longitud.",
          "Todas las palabras empiezan por símbolos diferentes.",
          "Su longitud media coincide con la entropía."
        ],
        "correct": [
          1
        ],
        "optionLabels": [
          "a",
          "b",
          "c",
          "d"
        ],
        "sourceAnswer": "Respuesta según la plantilla: b) Todas las palabras tienen la misma longitud.. La uniformidad depende exclusivamente de las longitudes."
      },
      {
        "number": 5,
        "prompt": "¿Cuál es la información aportada por un mensaje cuya probabilidad es 1?",
        "options": [
          "1 bit.",
          "0 bits.",
          "Infinita.",
          "Depende del número de mensajes de la fuente."
        ],
        "correct": [
          1
        ],
        "optionLabels": [
          "a",
          "b",
          "c",
          "d"
        ],
        "sourceAnswer": "Respuesta según la plantilla: b) 0 bits.. -log₂(1)=0."
      },
      {
        "number": 6,
        "prompt": "Una fuente tiene cuatro mensajes con probabilidades {0,5;0,5;0;0}. ¿Cuál es su entropía?",
        "options": [
          "0 bits.",
          "1 bit.",
          "1,5 bits.",
          "2 bits."
        ],
        "correct": [
          1
        ],
        "optionLabels": [
          "a",
          "b",
          "c",
          "d"
        ],
        "sourceAnswer": "Respuesta según la plantilla: b) 1 bit.. Solo hay dos símbolos con probabilidad positiva, ambos equiprobables."
      },
      {
        "number": 7,
        "prompt": "¿Cuál de las siguientes relaciones es siempre verdadera?",
        "options": [
          "H(X,Y)≤ H(X)+H(Y)",
          "H(X,Y)=H(X)+H(Y)",
          "H(X|Y)=H(Y|X)",
          "I(X;Y)=H(X,Y)"
        ],
        "correct": [
          0
        ],
        "optionLabels": [
          "a",
          "b",
          "c",
          "d"
        ],
        "sourceAnswer": "Respuesta según la plantilla: a) H(X,Y)≤ H(X)+H(Y). La entropía conjunta es subaditiva."
      },
      {
        "number": 8,
        "prompt": "Si H(X,Y)=H(X), ¿qué podemos afirmar?",
        "options": [
          "X e Y son independientes.",
          "Y queda completamente determinada por X.",
          "X queda completamente determinada por Y.",
          "Ambas variables tienen entropía cero."
        ],
        "correct": [
          1
        ],
        "optionLabels": [
          "a",
          "b",
          "c",
          "d"
        ],
        "sourceAnswer": "Respuesta según la plantilla: b) Y queda completamente determinada por X.. H(X,Y)=H(X) implica H(Y|X)=0."
      },
      {
        "number": 9,
        "prompt": "Si H(X)=4 bits, H(Y)=3 bits e I(X;Y)=2 bits, ¿cuánto vale H(X,Y)?",
        "options": [
          "2 bits.",
          "3 bits.",
          "5 bits.",
          "7 bits."
        ],
        "correct": [
          2
        ],
        "optionLabels": [
          "a",
          "b",
          "c",
          "d"
        ],
        "sourceAnswer": "Respuesta según la plantilla: c) 5 bits.. H(X,Y)=4+3-2=5."
      },
      {
        "number": 10,
        "prompt": "Si H(X)=3 y H(X|Y)=3, entonces:",
        "options": [
          "X queda determinada por Y.",
          "X e Y son independientes.",
          "H(X,Y)=0.",
          "I(X;Y)=3."
        ],
        "correct": [
          1
        ],
        "optionLabels": [
          "a",
          "b",
          "c",
          "d"
        ],
        "sourceAnswer": "Respuesta según la plantilla: b) X e Y son independientes.. Si H(X|Y)=H(X), la información mutua es cero."
      },
      {
        "number": 11,
        "prompt": "¿Cuál de las siguientes afirmaciones es falsa?",
        "options": [
          "La información mutua es simétrica.",
          "La información mutua nunca es negativa.",
          "La información mutua puede superar la entropía de ambas variables.",
          "La información mutua es cero para variables independientes."
        ],
        "correct": [
          2
        ],
        "optionLabels": [
          "a",
          "b",
          "c",
          "d"
        ],
        "sourceAnswer": "Respuesta según la plantilla: c) La información mutua puede superar la entropía de ambas variables.. I(X;Y)≤min(H(X),H(Y))."
      },
      {
        "number": 12,
        "prompt": "Una fuente tiene ocho símbolos equiprobables. ¿Cuál es su entropía?",
        "options": [
          "2 bits.",
          "3 bits.",
          "4 bits.",
          "8 bits."
        ],
        "correct": [
          1
        ],
        "optionLabels": [
          "a",
          "b",
          "c",
          "d"
        ],
        "sourceAnswer": "Respuesta según la plantilla: b) 3 bits.. H(S)=log₂ 8=3."
      },
      {
        "number": 13,
        "prompt": "Para un código binario con longitudes {1,2,2,3}, ¿qué indica la desigualdad de Kraft?",
        "options": [
          "Existe un código instantáneo completo.",
          "Existe un código instantáneo no completo.",
          "No existe un código instantáneo con esas longitudes.",
          "El código es óptimo."
        ],
        "correct": [
          2
        ],
        "optionLabels": [
          "a",
          "b",
          "c",
          "d"
        ],
        "sourceAnswer": "Respuesta según la plantilla: c) No existe un código instantáneo con esas longitudes.. La suma de Kraft es 0,5+0,25+0,25+0,125=1,125."
      },
      {
        "number": 14,
        "prompt": "Si la suma de Kraft de un conjunto de longitudes es igual a 1, entonces:",
        "options": [
          "Cualquier conjunto de palabras con esas longitudes es instantáneo.",
          "Existe un código instantáneo completo con esas longitudes.",
          "El código resultante es necesariamente óptimo.",
          "Todas las palabras tienen igual longitud."
        ],
        "correct": [
          1
        ],
        "optionLabels": [
          "a",
          "b",
          "c",
          "d"
        ],
        "sourceAnswer": "Respuesta según la plantilla: b) Existe un código instantáneo completo con esas longitudes.. La igualdad de Kraft permite construir un código instantáneo completo."
      },
      {
        "number": 15,
        "prompt": "¿Cuál de las siguientes afirmaciones sobre un código instantáneo completo es necesariamente correcta?",
        "options": [
          "Tiene longitud media igual a la entropía.",
          "Cumple la igualdad de Kraft.",
          "Todas sus palabras tienen la misma longitud.",
          "Puede ampliarse añadiendo nuevas palabras sin modificar las existentes."
        ],
        "correct": [
          1
        ],
        "optionLabels": [
          "a",
          "b",
          "c",
          "d"
        ],
        "sourceAnswer": "Respuesta según la plantilla: b) Cumple la igualdad de Kraft.. Todo código instantáneo completo cumple la igualdad de Kraft."
      },
      {
        "number": 16,
        "prompt": "Una fuente tiene entropía H(S)=1,6 bits. ¿Cuál de las siguientes afirmaciones es correcta?",
        "options": [
          "Cualquier código instantáneo tiene longitud media exactamente 1,6.",
          "Existe un código binario instantáneo con longitud media inferior a 2,6 bits.",
          "Todo código instantáneo tiene longitud media inferior a 2,6 bits.",
          "Es imposible construir un código instantáneo para esa fuente."
        ],
        "correct": [
          1
        ],
        "optionLabels": [
          "a",
          "b",
          "c",
          "d"
        ],
        "sourceAnswer": "Respuesta según la plantilla: b) Existe un código binario instantáneo con longitud media inferior a 2,6 bits.. Shannon garantiza la existencia de un código con n̄<H(S)+1."
      },
      {
        "number": 17,
        "prompt": "¿Cuál de las siguientes afirmaciones sobre Huffman es falsa?",
        "options": [
          "Utiliza una estrategia voraz.",
          "Genera códigos instantáneos.",
          "Garantiza códigos óptimos para codificación símbolo a símbolo.",
          "Siempre produce un único código óptimo posible."
        ],
        "correct": [
          3
        ],
        "optionLabels": [
          "a",
          "b",
          "c",
          "d"
        ],
        "sourceAnswer": "Respuesta según la plantilla: d) Siempre produce un único código óptimo posible.. Pueden existir varios códigos óptimos."
      },
      {
        "number": 18,
        "prompt": "Si dos símbolos tienen probabilidades distintas, ¿pueden tener palabras de igual longitud en un código Huffman?",
        "options": [
          "No, porque la longitud debe ser inversamente proporcional a la probabilidad de manera exacta.",
          "Sí, porque diferentes probabilidades pueden corresponder a la misma profundidad del árbol.",
          "No, porque Huffman asigna una longitud diferente a cada símbolo.",
          "Solo si ambos símbolos tienen probabilidad cero."
        ],
        "correct": [
          1
        ],
        "optionLabels": [
          "a",
          "b",
          "c",
          "d"
        ],
        "sourceAnswer": "Respuesta según la plantilla: b) Sí, porque diferentes probabilidades pueden corresponder a la misma profundidad del árbol.. Diferentes probabilidades pueden compartir longitud."
      },
      {
        "number": 19,
        "prompt": "¿Qué diferencia fundamental existe entre la construcción de Shannon-Fano y la de Huffman?",
        "options": [
          "Shannon-Fano utiliza probabilidades y Huffman no.",
          "Huffman construye el árbol desde las hojas, mientras Shannon-Fano lo hace desde la raíz.",
          "Huffman solo puede utilizar alfabetos ternarios.",
          "Shannon-Fano garantiza una longitud media menor."
        ],
        "correct": [
          1
        ],
        "optionLabels": [
          "a",
          "b",
          "c",
          "d"
        ],
        "sourceAnswer": "Respuesta según la plantilla: b) Huffman construye el árbol desde las hojas, mientras Shannon-Fano lo hace desde la raíz.. Shannon-Fano es descendente y Huffman ascendente."
      },
      {
        "number": 20,
        "prompt": "Para una fuente de seis mensajes y un alfabeto ternario, ¿qué indica la condición m=1+λ(K-1)?",
        "options": [
          "Existe necesariamente un código completo.",
          "No puede existir un código instantáneo completo.",
          "Todo código ternario es óptimo.",
          "La longitud media debe ser exactamente 3."
        ],
        "correct": [
          1
        ],
        "optionLabels": [
          "a",
          "b",
          "c",
          "d"
        ],
        "sourceAnswer": "Respuesta según la plantilla: b) No puede existir un código instantáneo completo.. λ=(6-1)/(3-1)=2,5, que no es entero."
      }
    ]
  },
  {
    "title": "Simulacro 4 · Primer parcial TIC",
    "exam": 1,
    "simulation": true,
    "source": "Simulacros aportados por el usuario, temas 1, 2 y 3",
    "questions": [
      {
        "number": 1,
        "prompt": "Una fuente cuyos mensajes dependen estadísticamente de los mensajes emitidos anteriormente se denomina:",
        "options": [
          "Fuente determinista.",
          "Fuente sin memoria.",
          "Fuente con memoria.",
          "Fuente uniforme."
        ],
        "correct": [
          2
        ],
        "optionLabels": [
          "a",
          "b",
          "c",
          "d"
        ],
        "sourceAnswer": "Respuesta según la plantilla: c) Fuente con memoria.. Los mensajes dependen de la historia previa de la fuente."
      },
      {
        "number": 2,
        "prompt": "¿Cuál de las siguientes afirmaciones sobre un canal sin pérdida es correcta?",
        "options": [
          "Cada entrada produce exactamente una salida.",
          "La salida permite identificar unívocamente la entrada.",
          "No puede existir ruido en el canal.",
          "Todas las entradas y salidas son equiprobables."
        ],
        "correct": [
          1
        ],
        "optionLabels": [
          "a",
          "b",
          "c",
          "d"
        ],
        "sourceAnswer": "Respuesta según la plantilla: b) La salida permite identificar unívocamente la entrada.. La salida determina unívocamente la entrada."
      },
      {
        "number": 3,
        "prompt": "Un canal se considera simétrico cuando:",
        "options": [
          "Todas las celdas de su matriz tienen el mismo valor.",
          "Las filas de su matriz son permutaciones de los mismos elementos.",
          "Cada entrada determina una única salida.",
          "La matriz contiene únicamente ceros y unos."
        ],
        "correct": [
          1
        ],
        "optionLabels": [
          "a",
          "b",
          "c",
          "d"
        ],
        "sourceAnswer": "Respuesta según la plantilla: b) Las filas de su matriz son permutaciones de los mismos elementos.. Las filas de un canal simétrico son permutaciones de los mismos valores."
      },
      {
        "number": 4,
        "prompt": "Sea el código binario C={00,01,10,11}. ¿Cuál de las siguientes afirmaciones es correcta?",
        "options": [
          "Es uniforme e instantáneo.",
          "Es no uniforme e instantáneo.",
          "Es uniforme, pero no instantáneo.",
          "Es indescifrable."
        ],
        "correct": [
          0
        ],
        "optionLabels": [
          "a",
          "b",
          "c",
          "d"
        ],
        "sourceAnswer": "Respuesta según la plantilla: a) Es uniforme e instantáneo.. Todas las palabras tienen longitud 2 y ninguna es prefijo de otra."
      },
      {
        "number": 5,
        "prompt": "La información proporcionada por un mensaje según Shannon depende de:",
        "options": [
          "Su longitud física.",
          "La velocidad del canal.",
          "Su probabilidad de aparición.",
          "El número de receptores."
        ],
        "correct": [
          2
        ],
        "optionLabels": [
          "a",
          "b",
          "c",
          "d"
        ],
        "sourceAnswer": "Respuesta según la plantilla: c) Su probabilidad de aparición.. I(s)=-log₂p(s)."
      },
      {
        "number": 6,
        "prompt": "Una fuente tiene cuatro mensajes equiprobables. ¿Cuál es su entropía?",
        "options": [
          "1 bit.",
          "2 bits.",
          "3 bits.",
          "4 bits."
        ],
        "correct": [
          1
        ],
        "optionLabels": [
          "a",
          "b",
          "c",
          "d"
        ],
        "sourceAnswer": "Respuesta según la plantilla: b) 2 bits.. H(S)=log₂ 4=2."
      },
      {
        "number": 7,
        "prompt": "¿Cuál de las siguientes afirmaciones sobre la entropía es correcta?",
        "options": [
          "Siempre es negativa.",
          "Es máxima cuando un mensaje tiene probabilidad 1.",
          "Mide la incertidumbre media asociada a una fuente.",
          "Es independiente de las probabilidades."
        ],
        "correct": [
          2
        ],
        "optionLabels": [
          "a",
          "b",
          "c",
          "d"
        ],
        "sourceAnswer": "Respuesta según la plantilla: c) Mide la incertidumbre media asociada a una fuente.. La entropía mide la incertidumbre media."
      },
      {
        "number": 8,
        "prompt": "La entropía conjunta H(X,Y) mide:",
        "options": [
          "La incertidumbre de X después de conocer Y.",
          "La incertidumbre considerando conjuntamente las variables X e Y.",
          "La información que comparten necesariamente ambas variables.",
          "La diferencia entre las entropías individuales."
        ],
        "correct": [
          1
        ],
        "optionLabels": [
          "a",
          "b",
          "c",
          "d"
        ],
        "sourceAnswer": "Respuesta según la plantilla: b) La incertidumbre considerando conjuntamente las variables X e Y.. La entropía conjunta considera ambas variables simultáneamente."
      },
      {
        "number": 9,
        "prompt": "¿Cuál de las siguientes expresiones corresponde a la ley de entropías totales?",
        "options": [
          "H(X,Y)=H(X)+H(Y|X)",
          "H(X,Y)=H(X)H(Y)",
          "H(X,Y)=I(X;Y)"
        ],
        "correct": [
          0
        ],
        "optionLabels": [
          "a",
          "c",
          "d"
        ],
        "sourceAnswer": "Respuesta según la plantilla: a) H(X,Y)=H(X)+H(Y|X). Es una de las expresiones de la ley de entropías totales.",
        "note": "La opción b no aparece en el texto aportado por un error de formato. Se muestran las tres opciones disponibles."
      },
      {
        "number": 10,
        "prompt": "¿Cuándo se cumple H(X|Y)=0?",
        "options": [
          "Cuando las variables son independientes.",
          "Cuando conocer Y permite determinar completamente X.",
          "Cuando ambas variables tienen máxima entropía.",
          "Cuando X tiene más símbolos que Y."
        ],
        "correct": [
          1
        ],
        "optionLabels": [
          "a",
          "b",
          "c",
          "d"
        ],
        "sourceAnswer": "Respuesta según la plantilla: b) Cuando conocer Y permite determinar completamente X.. La entropía condicional es cero cuando no queda incertidumbre sobre X."
      },
      {
        "number": 11,
        "prompt": "Si X e Y son independientes, su información mutua es:",
        "options": [
          "H(X)+H(Y)",
          "H(X)",
          "H(Y)",
          "0."
        ],
        "correct": [
          3
        ],
        "optionLabels": [
          "a",
          "b",
          "c",
          "d"
        ],
        "sourceAnswer": "Respuesta según la plantilla: d) 0.. Las variables independientes tienen información mutua nula."
      },
      {
        "number": 12,
        "prompt": "Si H(X)=2, H(Y)=2 y H(X,Y)=3, ¿cuánto vale I(X;Y)?",
        "options": [
          "0 bits.",
          "1 bit.",
          "2 bits.",
          "3 bits."
        ],
        "correct": [
          1
        ],
        "optionLabels": [
          "a",
          "b",
          "c",
          "d"
        ],
        "sourceAnswer": "Respuesta según la plantilla: b) 1 bit.. I(X;Y)=2+2-3=1."
      },
      {
        "number": 13,
        "prompt": "Según el primer teorema de Shannon, la entropía de una fuente establece:",
        "options": [
          "Un límite superior para la longitud media de cualquier código.",
          "Un límite inferior para la longitud media de los códigos binarios instantáneos.",
          "La longitud exacta de todas las palabras.",
          "La capacidad máxima de cualquier canal con ruido."
        ],
        "correct": [
          1
        ],
        "optionLabels": [
          "a",
          "b",
          "c",
          "d"
        ],
        "sourceAnswer": "Respuesta según la plantilla: b) Un límite inferior para la longitud media de los códigos binarios instantáneos.. La entropía establece el límite inferior de la longitud media."
      },
      {
        "number": 14,
        "prompt": "¿Qué establece la desigualdad de Kraft?",
        "options": [
          "La condición necesaria y suficiente para que exista un código instantáneo con determinadas longitudes.",
          "La condición necesaria y suficiente para que un código sea óptimo.",
          "La longitud exacta del código de Huffman.",
          "La probabilidad mínima de cada símbolo."
        ],
        "correct": [
          0
        ],
        "optionLabels": [
          "a",
          "b",
          "c",
          "d"
        ],
        "sourceAnswer": "Respuesta según la plantilla: a) La condición necesaria y suficiente para que exista un código instantáneo con determinadas longitudes.. Kraft determina la existencia de códigos instantáneos con longitudes dadas."
      },
      {
        "number": 15,
        "prompt": "Para un código binario con longitudes {2,2,2,2}, la suma de Kraft es:",
        "options": [
          "0,5.",
          "0,75.",
          "1.",
          "2."
        ],
        "correct": [
          2
        ],
        "optionLabels": [
          "a",
          "b",
          "c",
          "d"
        ],
        "sourceAnswer": "Respuesta según la plantilla: c) 1.. 4·2^{-2}=1."
      },
      {
        "number": 16,
        "prompt": "¿Cuál de los siguientes códigos es instantáneo y completo?",
        "options": [
          "C={0,01,11}",
          "C={00,01,1}",
          "C={00,01,10}",
          "C={0,00,01}"
        ],
        "correct": [
          1
        ],
        "optionLabels": [
          "a",
          "b",
          "c",
          "d"
        ],
        "sourceAnswer": "Respuesta según la plantilla: b) C={00,01,1}. Es instantáneo y cumple 2^{-2}+2^{-2}+2^{-1}=1."
      },
      {
        "number": 17,
        "prompt": "¿Cuál es el objetivo principal de la codificación de fuente sin pérdidas?",
        "options": [
          "Introducir redundancia para corregir errores.",
          "Reducir la longitud media de representación sin perder información.",
          "Garantizar el cifrado de los mensajes.",
          "Aumentar la velocidad física del canal."
        ],
        "correct": [
          1
        ],
        "optionLabels": [
          "a",
          "b",
          "c",
          "d"
        ],
        "sourceAnswer": "Respuesta según la plantilla: b) Reducir la longitud media de representación sin perder información.. Busca minimizar la representación sin perder información."
      },
      {
        "number": 18,
        "prompt": "El algoritmo de Shannon-Fano:",
        "options": [
          "Garantiza siempre un código óptimo.",
          "Fusiona los dos símbolos menos probables en cada iteración.",
          "Divide recursivamente los mensajes en grupos de probabilidades similares.",
          "Produce exclusivamente códigos uniformes."
        ],
        "correct": [
          2
        ],
        "optionLabels": [
          "a",
          "b",
          "c",
          "d"
        ],
        "sourceAnswer": "Respuesta según la plantilla: c) Divide recursivamente los mensajes en grupos de probabilidades similares.. Shannon-Fano utiliza divisiones descendentes."
      },
      {
        "number": 19,
        "prompt": "¿Cuál de las siguientes situaciones demuestra que un código instantáneo no es óptimo?",
        "options": [
          "Que tenga palabras de longitudes distintas.",
          "Que dos mensajes tengan palabras de igual longitud.",
          "Que exista otro código instantáneo para la misma fuente con menor longitud media.",
          "Que cumpla la igualdad de Kraft."
        ],
        "correct": [
          2
        ],
        "optionLabels": [
          "a",
          "b",
          "c",
          "d"
        ],
        "sourceAnswer": "Respuesta según la plantilla: c) Que exista otro código instantáneo para la misma fuente con menor longitud media.. La existencia de otro código con menor longitud media demuestra que no es óptimo."
      },
      {
        "number": 20,
        "prompt": "¿Cuál de las siguientes propiedades corresponde al algoritmo de Huffman?",
        "options": [
          "Construye códigos instantáneos óptimos.",
          "Siempre produce códigos uniformes.",
          "Nunca permite varias codificaciones óptimas.",
          "Su longitud media siempre coincide exactamente con la entropía."
        ],
        "correct": [
          0
        ],
        "optionLabels": [
          "a",
          "b",
          "c",
          "d"
        ],
        "sourceAnswer": "Respuesta según la plantilla: a) Construye códigos instantáneos óptimos.. Huffman construye códigos instantáneos óptimos."
      }
    ]
  },
  {
    "title": "Simulacro 5 · Primer parcial TIC",
    "exam": 1,
    "simulation": true,
    "source": "Simulacros aportados por el usuario, temas 1, 2 y 3",
    "questions": [
      {
        "number": 1,
        "prompt": "Una fuente discreta sin memoria se caracteriza porque:",
        "options": [
          "Todos sus símbolos tienen la misma probabilidad.",
          "La generación de un símbolo no depende estadísticamente de los símbolos anteriores.",
          "Genera una secuencia de símbolos predeterminada.",
          "Los símbolos generados no pueden repetirse."
        ],
        "correct": [
          1
        ],
        "optionLabels": [
          "a",
          "b",
          "c",
          "d"
        ],
        "sourceAnswer": "Respuesta según la plantilla: b) La generación de un símbolo no depende estadísticamente de los símbolos anteriores.."
      },
      {
        "number": 2,
        "prompt": "¿Cuál de las siguientes afirmaciones sobre los canales deterministas es correcta?",
        "options": [
          "Cada salida permite identificar una única entrada.",
          "Una entrada puede generar varias salidas diferentes.",
          "Cada entrada determina unívocamente la salida, aunque varias entradas puedan producir la misma.",
          "Todo canal determinista es necesariamente sin ruido."
        ],
        "correct": [
          2
        ],
        "optionLabels": [
          "a",
          "b",
          "c",
          "d"
        ],
        "sourceAnswer": "Respuesta según la plantilla: c) Cada entrada determina unívocamente la salida, aunque varias entradas puedan producir la misma.."
      },
      {
        "number": 3,
        "prompt": "Un canal sin pérdida se diferencia de uno determinista porque:",
        "options": [
          "La salida permite determinar la entrada, mientras que en un canal determinista la entrada determina la salida.",
          "Un canal sin pérdida siempre transmite símbolos sin modificaciones.",
          "Un canal determinista no puede presentar ruido.",
          "Un canal sin pérdida debe tener el mismo número de entradas y salidas."
        ],
        "correct": [
          0
        ],
        "optionLabels": [
          "a",
          "b",
          "c",
          "d"
        ],
        "sourceAnswer": "Respuesta según la plantilla: a) La salida permite determinar la entrada, mientras que en un canal determinista la entrada determina la salida.."
      },
      {
        "number": 4,
        "prompt": "¿Cuál de las siguientes afirmaciones sobre un canal sin ruido es verdadera?",
        "options": [
          "Es necesariamente un canal inútil.",
          "Es simultáneamente determinista y sin pérdida.",
          "Todas las probabilidades de su matriz son iguales.",
          "Únicamente puede transmitir símbolos binarios."
        ],
        "correct": [
          1
        ],
        "optionLabels": [
          "a",
          "b",
          "c",
          "d"
        ],
        "sourceAnswer": "Respuesta según la plantilla: b) Es simultáneamente determinista y sin pérdida.."
      },
      {
        "number": 5,
        "prompt": "Un código uniforme es aquel en el que:",
        "options": [
          "Todos los mensajes tienen la misma probabilidad de aparición.",
          "Todas las palabras tienen la misma longitud.",
          "Todas las palabras comienzan por símbolos diferentes.",
          "La longitud media siempre coincide con la entropía."
        ],
        "correct": [
          1
        ],
        "optionLabels": [
          "a",
          "b",
          "c",
          "d"
        ],
        "sourceAnswer": "Respuesta según la plantilla: b) Todas las palabras tienen la misma longitud.."
      },
      {
        "number": 6,
        "prompt": "¿Cuál de las siguientes afirmaciones sobre los códigos instantáneos es correcta?",
        "options": [
          "Todos los códigos instantáneos son uniformes.",
          "Un código instantáneo puede contener una palabra que sea prefijo de otra.",
          "Todo código instantáneo permite una descodificación única.",
          "Todo código de traducción única es instantáneo."
        ],
        "correct": [
          2
        ],
        "optionLabels": [
          "a",
          "b",
          "c",
          "d"
        ],
        "sourceAnswer": "Respuesta según la plantilla: c) Todo código instantáneo permite una descodificación única.."
      },
      {
        "number": 7,
        "prompt": "La cantidad de información de Shannon asociada a un mensaje:",
        "options": [
          "Aumenta cuando aumenta su probabilidad.",
          "Es independiente de su probabilidad.",
          "Disminuye cuando aumenta su probabilidad.",
          "Depende exclusivamente de la longitud de su representación."
        ],
        "correct": [
          2
        ],
        "optionLabels": [
          "a",
          "b",
          "c",
          "d"
        ],
        "sourceAnswer": "Respuesta según la plantilla: c) Disminuye cuando aumenta su probabilidad.."
      },
      {
        "number": 8,
        "prompt": "¿Cuál de las siguientes propiedades de la entropía es correcta?",
        "options": [
          "Puede tomar valores negativos cuando existen mensajes poco probables.",
          "Es máxima cuando todos los mensajes son equiprobables.",
          "Es máxima cuando uno de los mensajes es seguro.",
          "No depende de la distribución de probabilidades."
        ],
        "correct": [
          1
        ],
        "optionLabels": [
          "a",
          "b",
          "c",
          "d"
        ],
        "sourceAnswer": "Respuesta según la plantilla: b) Es máxima cuando todos los mensajes son equiprobables.."
      },
      {
        "number": 9,
        "prompt": "Si una fuente genera siempre el mismo mensaje, entonces:",
        "options": [
          "Su entropía es máxima.",
          "Su entropía es nula.",
          "Su entropía depende del número de símbolos del alfabeto.",
          "Su entropía es necesariamente infinita."
        ],
        "correct": [
          1
        ],
        "optionLabels": [
          "a",
          "b",
          "c",
          "d"
        ],
        "sourceAnswer": "Respuesta según la plantilla: b) Su entropía es nula.."
      },
      {
        "number": 10,
        "prompt": "La entropía conjunta de dos variables aleatorias:",
        "options": [
          "Siempre coincide con la suma de sus entropías individuales.",
          "Nunca puede ser inferior a la entropía de cualquiera de ellas.",
          "Siempre es igual a su información mutua.",
          "Es nula únicamente cuando las variables son independientes."
        ],
        "correct": [
          1
        ],
        "optionLabels": [
          "a",
          "b",
          "c",
          "d"
        ],
        "sourceAnswer": "Respuesta según la plantilla: b) Nunca puede ser inferior a la entropía de cualquiera de ellas.."
      },
      {
        "number": 11,
        "prompt": "Si dos variables aleatorias son independientes, entonces:",
        "options": [
          "Su entropía conjunta es la suma de sus entropías individuales.",
          "Su entropía condicional es necesariamente cero.",
          "Ambas deben tener la misma entropía.",
          "Su información mutua es máxima."
        ],
        "correct": [
          0
        ],
        "optionLabels": [
          "a",
          "b",
          "c",
          "d"
        ],
        "sourceAnswer": "Respuesta según la plantilla: a) Su entropía conjunta es la suma de sus entropías individuales.."
      },
      {
        "number": 12,
        "prompt": "La entropía condicional mide:",
        "options": [
          "La incertidumbre conjunta de dos variables.",
          "La incertidumbre restante sobre una variable después de conocer otra.",
          "La cantidad total de símbolos transmitidos.",
          "La diferencia entre las probabilidades marginales."
        ],
        "correct": [
          1
        ],
        "optionLabels": [
          "a",
          "b",
          "c",
          "d"
        ],
        "sourceAnswer": "Respuesta según la plantilla: b) La incertidumbre restante sobre una variable después de conocer otra.."
      },
      {
        "number": 13,
        "prompt": "¿Cuál de las siguientes relaciones es siempre verdadera?",
        "options": [
          "La entropía condicional nunca supera la entropía de la variable condicionada.",
          "La entropía condicional siempre es igual a cero.",
          "La entropía condicional siempre supera la entropía conjunta.",
          "Las entropías condicionales de dos variables son necesariamente iguales."
        ],
        "correct": [
          0
        ],
        "optionLabels": [
          "a",
          "b",
          "c",
          "d"
        ],
        "sourceAnswer": "Respuesta según la plantilla: a) La entropía condicional nunca supera la entropía de la variable condicionada.."
      },
      {
        "number": 14,
        "prompt": "La información mutua entre dos variables aleatorias:",
        "options": [
          "Puede tomar valores negativos.",
          "Mide la información que una variable proporciona sobre la otra.",
          "Es siempre igual a la entropía conjunta.",
          "Es máxima cuando las variables son independientes."
        ],
        "correct": [
          1
        ],
        "optionLabels": [
          "a",
          "b",
          "c",
          "d"
        ],
        "sourceAnswer": "Respuesta según la plantilla: b) Mide la información que una variable proporciona sobre la otra.."
      },
      {
        "number": 15,
        "prompt": "El primer teorema de Shannon para codificación sin ruido establece que:",
        "options": [
          "Todo código binario tiene longitud media igual a la entropía.",
          "La entropía establece un límite fundamental para la compresión sin pérdidas.",
          "Es imposible aproximar la longitud media de un código a la entropía.",
          "Todos los códigos instantáneos son óptimos."
        ],
        "correct": [
          1
        ],
        "optionLabels": [
          "a",
          "b",
          "c",
          "d"
        ],
        "sourceAnswer": "Respuesta según la plantilla: b) La entropía establece un límite fundamental para la compresión sin pérdidas.."
      },
      {
        "number": 16,
        "prompt": "La desigualdad de Kraft establece:",
        "options": [
          "Una condición necesaria y suficiente para la existencia de un código instantáneo con determinadas longitudes.",
          "Una condición necesaria y suficiente para que un código sea óptimo.",
          "Que todos los códigos instantáneos son completos.",
          "Que todas las palabras deben tener la misma longitud."
        ],
        "correct": [
          0
        ],
        "optionLabels": [
          "a",
          "b",
          "c",
          "d"
        ],
        "sourceAnswer": "Respuesta según la plantilla: a) Una condición necesaria y suficiente para la existencia de un código instantáneo con determinadas longitudes.."
      },
      {
        "number": 17,
        "prompt": "Si un código instantáneo cumple estrictamente la desigualdad de Kraft, entonces:",
        "options": [
          "Es necesariamente óptimo.",
          "No es completo.",
          "Es necesariamente uniforme.",
          "No permite descodificación única."
        ],
        "correct": [
          1
        ],
        "optionLabels": [
          "a",
          "b",
          "c",
          "d"
        ],
        "sourceAnswer": "Respuesta según la plantilla: b) No es completo.."
      },
      {
        "number": 18,
        "prompt": "¿Cuál de las siguientes afirmaciones sobre los códigos completos es correcta?",
        "options": [
          "Todo código completo es óptimo.",
          "Un código instantáneo completo no permite añadir nuevas palabras sin perder la propiedad de prefijo.",
          "Todo código uniforme es completo.",
          "Los códigos completos deben tener palabras de diferente longitud."
        ],
        "correct": [
          1
        ],
        "optionLabels": [
          "a",
          "b",
          "c",
          "d"
        ],
        "sourceAnswer": "Respuesta según la plantilla: b) Un código instantáneo completo no permite añadir nuevas palabras sin perder la propiedad de prefijo.."
      },
      {
        "number": 19,
        "prompt": "La principal limitación de Shannon-Fano es que:",
        "options": [
          "No genera códigos instantáneos.",
          "No utiliza probabilidades.",
          "No garantiza obtener un código óptimo.",
          "Solo funciona con alfabetos ternarios."
        ],
        "correct": [
          2
        ],
        "optionLabels": [
          "a",
          "b",
          "c",
          "d"
        ],
        "sourceAnswer": "Respuesta según la plantilla: c) No garantiza obtener un código óptimo.."
      },
      {
        "number": 20,
        "prompt": "¿Cuál de las siguientes propiedades caracteriza al algoritmo de Huffman?",
        "options": [
          "Siempre produce códigos uniformes.",
          "Garantiza un código instantáneo óptimo para codificación símbolo a símbolo.",
          "Genera necesariamente un único código posible.",
          "No utiliza las probabilidades de los mensajes."
        ],
        "correct": [
          1
        ],
        "optionLabels": [
          "a",
          "b",
          "c",
          "d"
        ],
        "sourceAnswer": "Respuesta según la plantilla: b) Garantiza un código instantáneo óptimo para codificación símbolo a símbolo.."
      }
    ]
  },
  {
    "title": "Simulacro 6 · Primer parcial TIC",
    "exam": 1,
    "simulation": true,
    "source": "Simulacros aportados por el usuario, temas 1, 2 y 3",
    "questions": [
      {
        "number": 1,
        "prompt": "¿Cuál de las siguientes afirmaciones describe mejor la información según Shannon?",
        "options": [
          "Mide el significado semántico de un mensaje.",
          "Cuantifica la información considerando la probabilidad de aparición del mensaje.",
          "Mide exclusivamente el tamaño físico del mensaje.",
          "Determina la utilidad práctica de la información recibida."
        ],
        "correct": [
          1
        ],
        "optionLabels": [
          "a",
          "b",
          "c",
          "d"
        ],
        "sourceAnswer": "Respuesta según la plantilla: b) Cuantifica la información considerando la probabilidad de aparición del mensaje.."
      },
      {
        "number": 2,
        "prompt": "¿Qué ocurre con la información proporcionada por un mensaje cuando disminuye su probabilidad de aparición?",
        "options": [
          "Disminuye.",
          "Permanece constante.",
          "Aumenta.",
          "Se vuelve necesariamente negativa."
        ],
        "correct": [
          2
        ],
        "optionLabels": [
          "a",
          "b",
          "c",
          "d"
        ],
        "sourceAnswer": "Respuesta según la plantilla: c) Aumenta.."
      },
      {
        "number": 3,
        "prompt": "¿Cuál de las siguientes afirmaciones sobre la medida de Hartley es correcta?",
        "options": [
          "Considera las probabilidades individuales de todos los símbolos.",
          "Cuantifica información en función del tamaño del alfabeto y de la longitud de la secuencia.",
          "Es equivalente a la entropía condicional.",
          "Se utiliza exclusivamente para fuentes con memoria."
        ],
        "correct": [
          1
        ],
        "optionLabels": [
          "a",
          "b",
          "c",
          "d"
        ],
        "sourceAnswer": "Respuesta según la plantilla: b) Cuantifica información en función del tamaño del alfabeto y de la longitud de la secuencia.."
      },
      {
        "number": 4,
        "prompt": "La entropía de una fuente discreta representa:",
        "options": [
          "La incertidumbre media asociada a los mensajes generados.",
          "La longitud exacta de cualquier código.",
          "La cantidad de información compartida entre dos fuentes.",
          "El número máximo de errores de transmisión."
        ],
        "correct": [
          0
        ],
        "optionLabels": [
          "a",
          "b",
          "c",
          "d"
        ],
        "sourceAnswer": "Respuesta según la plantilla: a) La incertidumbre media asociada a los mensajes generados.."
      },
      {
        "number": 5,
        "prompt": "¿Cuál de las siguientes condiciones caracteriza una fuente de entropía máxima?",
        "options": [
          "Todos sus símbolos son equiprobables.",
          "Un único símbolo tiene probabilidad uno.",
          "Todos los símbolos tienen probabilidad cero.",
          "La fuente genera siempre la misma secuencia."
        ],
        "correct": [
          0
        ],
        "optionLabels": [
          "a",
          "b",
          "c",
          "d"
        ],
        "sourceAnswer": "Respuesta según la plantilla: a) Todos sus símbolos son equiprobables.."
      },
      {
        "number": 6,
        "prompt": "¿Cuál de las siguientes afirmaciones es correcta?",
        "options": [
          "La entropía de una fuente puede superar el logaritmo del número de símbolos posibles.",
          "La entropía nunca es negativa.",
          "La entropía siempre es estrictamente positiva.",
          "La entropía aumenta necesariamente cuando una fuente se vuelve más predecible."
        ],
        "correct": [
          1
        ],
        "optionLabels": [
          "a",
          "b",
          "c",
          "d"
        ],
        "sourceAnswer": "Respuesta según la plantilla: b) La entropía nunca es negativa.."
      },
      {
        "number": 7,
        "prompt": "Si una variable aleatoria puede determinarse con certeza, entonces:",
        "options": [
          "Su entropía es máxima.",
          "Su entropía es cero.",
          "Su información mutua con cualquier otra variable es infinita.",
          "Su entropía depende necesariamente del número de resultados imposibles."
        ],
        "correct": [
          1
        ],
        "optionLabels": [
          "a",
          "b",
          "c",
          "d"
        ],
        "sourceAnswer": "Respuesta según la plantilla: b) Su entropía es cero.."
      },
      {
        "number": 8,
        "prompt": "¿Qué representa la probabilidad marginal de una variable?",
        "options": [
          "La probabilidad de un valor concreto, sin fijar el valor de la otra variable.",
          "La probabilidad de dos sucesos simultáneos.",
          "La probabilidad de un suceso después de conocer otro.",
          "La información compartida entre dos variables."
        ],
        "correct": [
          0
        ],
        "optionLabels": [
          "a",
          "b",
          "c",
          "d"
        ],
        "sourceAnswer": "Respuesta según la plantilla: a) La probabilidad de un valor concreto, sin fijar el valor de la otra variable.."
      },
      {
        "number": 9,
        "prompt": "La entropía conjunta de dos variables independientes:",
        "options": [
          "Es necesariamente cero.",
          "Coincide con la suma de las entropías individuales.",
          "Es siempre inferior a ambas entropías individuales.",
          "Coincide con su información mutua."
        ],
        "correct": [
          1
        ],
        "optionLabels": [
          "a",
          "b",
          "c",
          "d"
        ],
        "sourceAnswer": "Respuesta según la plantilla: b) Coincide con la suma de las entropías individuales.."
      },
      {
        "number": 10,
        "prompt": "Si dos variables son idénticas, entonces:",
        "options": [
          "Su entropía conjunta duplica la entropía individual.",
          "Su entropía conjunta coincide con la entropía individual.",
          "Su información mutua es necesariamente cero.",
          "Son necesariamente independientes."
        ],
        "correct": [
          1
        ],
        "optionLabels": [
          "a",
          "b",
          "c",
          "d"
        ],
        "sourceAnswer": "Respuesta según la plantilla: b) Su entropía conjunta coincide con la entropía individual.."
      },
      {
        "number": 11,
        "prompt": "La ley de entropías totales establece que:",
        "options": [
          "La entropía conjunta puede expresarse como una entropía marginal más una entropía condicional.",
          "La entropía conjunta siempre es la suma de las entropías marginales.",
          "La información mutua siempre coincide con la entropía condicional.",
          "Las entropías marginales deben ser iguales."
        ],
        "correct": [
          0
        ],
        "optionLabels": [
          "a",
          "b",
          "c",
          "d"
        ],
        "sourceAnswer": "Respuesta según la plantilla: a) La entropía conjunta puede expresarse como una entropía marginal más una entropía condicional.."
      },
      {
        "number": 12,
        "prompt": "¿Cuál de las siguientes propiedades de la entropía condicional es correcta?",
        "options": [
          "Siempre es negativa.",
          "Nunca supera la entropía de la variable cuya incertidumbre se mide.",
          "Siempre es mayor que la entropía conjunta.",
          "Es necesariamente igual en ambas direcciones."
        ],
        "correct": [
          1
        ],
        "optionLabels": [
          "a",
          "b",
          "c",
          "d"
        ],
        "sourceAnswer": "Respuesta según la plantilla: b) Nunca supera la entropía de la variable cuya incertidumbre se mide.."
      },
      {
        "number": 13,
        "prompt": "Si conocer Y permite determinar completamente X, entonces:",
        "options": [
          "X e Y son necesariamente independientes.",
          "La entropía de X condicionada a Y es cero.",
          "La información mutua es necesariamente cero.",
          "La entropía conjunta es necesariamente nula."
        ],
        "correct": [
          1
        ],
        "optionLabels": [
          "a",
          "b",
          "c",
          "d"
        ],
        "sourceAnswer": "Respuesta según la plantilla: b) La entropía de X condicionada a Y es cero.."
      },
      {
        "number": 14,
        "prompt": "Si dos variables son independientes, entonces:",
        "options": [
          "Conocer una reduce completamente la incertidumbre sobre la otra.",
          "La entropía condicional de una variable coincide con su entropía marginal.",
          "La entropía conjunta es necesariamente cero.",
          "Ambas variables deben ser equiprobables."
        ],
        "correct": [
          1
        ],
        "optionLabels": [
          "a",
          "b",
          "c",
          "d"
        ],
        "sourceAnswer": "Respuesta según la plantilla: b) La entropía condicional de una variable coincide con su entropía marginal.."
      },
      {
        "number": 15,
        "prompt": "¿Cuál de las siguientes afirmaciones sobre la información mutua es correcta?",
        "options": [
          "Es simétrica.",
          "Puede ser negativa.",
          "Siempre es superior a la entropía conjunta.",
          "Es máxima cuando las variables son independientes."
        ],
        "correct": [
          0
        ],
        "optionLabels": [
          "a",
          "b",
          "c",
          "d"
        ],
        "sourceAnswer": "Respuesta según la plantilla: a) Es simétrica.."
      },
      {
        "number": 16,
        "prompt": "Si la información mutua entre dos variables es cero, entonces:",
        "options": [
          "Ambas variables tienen entropía cero.",
          "Las variables son estadísticamente independientes.",
          "Las variables son idénticas.",
          "Sus entropías individuales deben coincidir."
        ],
        "correct": [
          1
        ],
        "optionLabels": [
          "a",
          "b",
          "c",
          "d"
        ],
        "sourceAnswer": "Respuesta según la plantilla: b) Las variables son estadísticamente independientes.."
      },
      {
        "number": 17,
        "prompt": "La información mutua entre dos variables idénticas:",
        "options": [
          "Es necesariamente cero.",
          "Coincide con la entropía de cualquiera de ellas.",
          "Duplica la entropía individual.",
          "Es siempre mayor que la entropía conjunta."
        ],
        "correct": [
          1
        ],
        "optionLabels": [
          "a",
          "b",
          "c",
          "d"
        ],
        "sourceAnswer": "Respuesta según la plantilla: b) Coincide con la entropía de cualquiera de ellas.."
      },
      {
        "number": 18,
        "prompt": "En un canal inútil, ¿qué relación existe entre el símbolo enviado y el recibido?",
        "options": [
          "El símbolo recibido determina completamente el enviado.",
          "El símbolo enviado determina completamente el recibido.",
          "Son estadísticamente independientes.",
          "Sus probabilidades deben coincidir."
        ],
        "correct": [
          2
        ],
        "optionLabels": [
          "a",
          "b",
          "c",
          "d"
        ],
        "sourceAnswer": "Respuesta según la plantilla: c) Son estadísticamente independientes.."
      },
      {
        "number": 19,
        "prompt": "En un canal sin pérdida, ¿qué ocurre con la incertidumbre sobre el símbolo enviado cuando conocemos el recibido?",
        "options": [
          "Desaparece completamente.",
          "Aumenta necesariamente.",
          "Coincide con la entropía del símbolo enviado.",
          "Siempre es máxima."
        ],
        "correct": [
          0
        ],
        "optionLabels": [
          "a",
          "b",
          "c",
          "d"
        ],
        "sourceAnswer": "Respuesta según la plantilla: a) Desaparece completamente.."
      },
      {
        "number": 20,
        "prompt": "¿Cuál de las siguientes afirmaciones es correcta?",
        "options": [
          "Todo canal simétrico es inútil.",
          "Todo canal determinista es sin pérdida.",
          "Un canal inútil no transmite información mutua entre entrada y salida.",
          "Todo canal con ruido tiene información mutua nula."
        ],
        "correct": [
          2
        ],
        "optionLabels": [
          "a",
          "b",
          "c",
          "d"
        ],
        "sourceAnswer": "Respuesta según la plantilla: c) Un canal inútil no transmite información mutua entre entrada y salida.."
      }
    ]
  },
  {
    "title": "Simulacro 7 · Primer parcial TIC",
    "exam": 1,
    "simulation": true,
    "source": "Simulacros aportados por el usuario, temas 1, 2 y 3",
    "questions": [
      {
        "number": 1,
        "prompt": "El objetivo principal de la codificación de fuente sin pérdidas es:",
        "options": [
          "Añadir redundancia para corregir errores.",
          "Representar los mensajes utilizando la menor longitud media posible sin perder información.",
          "Garantizar que todos los mensajes tengan la misma longitud.",
          "Eliminar completamente la incertidumbre de la fuente."
        ],
        "correct": [
          1
        ],
        "optionLabels": [
          "a",
          "b",
          "c",
          "d"
        ],
        "sourceAnswer": "Respuesta según la plantilla: b) Representar los mensajes utilizando la menor longitud media posible sin perder información.."
      },
      {
        "number": 2,
        "prompt": "¿Cuál de las siguientes afirmaciones sobre códigos instantáneos es correcta?",
        "options": [
          "Todos los códigos instantáneos deben ser uniformes.",
          "Ninguna palabra puede ser prefijo de otra palabra del mismo código.",
          "Todo código de traducción única es instantáneo.",
          "Un código instantáneo nunca puede ser completo."
        ],
        "correct": [
          1
        ],
        "optionLabels": [
          "a",
          "b",
          "c",
          "d"
        ],
        "sourceAnswer": "Respuesta según la plantilla: b) Ninguna palabra puede ser prefijo de otra palabra del mismo código.."
      },
      {
        "number": 3,
        "prompt": "¿Qué relación existe entre los códigos instantáneos y los códigos de traducción única?",
        "options": [
          "Todos los códigos de traducción única son instantáneos.",
          "Ambos conceptos son equivalentes.",
          "Todo código instantáneo permite descodificación única.",
          "Ningún código instantáneo puede ser de traducción única."
        ],
        "correct": [
          2
        ],
        "optionLabels": [
          "a",
          "b",
          "c",
          "d"
        ],
        "sourceAnswer": "Respuesta según la plantilla: c) Todo código instantáneo permite descodificación única.."
      },
      {
        "number": 4,
        "prompt": "¿Cuál de las siguientes afirmaciones sobre los códigos uniformes es verdadera?",
        "options": [
          "Un código uniforme siempre tiene palabras de distinta longitud.",
          "Un código uniforme de palabras distintas y longitud positiva es instantáneo.",
          "Un código uniforme siempre es óptimo.",
          "Un código uniforme siempre es completo."
        ],
        "correct": [
          1
        ],
        "optionLabels": [
          "a",
          "b",
          "c",
          "d"
        ],
        "sourceAnswer": "Respuesta según la plantilla: b) Un código uniforme de palabras distintas y longitud positiva es instantáneo.."
      },
      {
        "number": 5,
        "prompt": "La longitud media de palabra de un código depende de:",
        "options": [
          "Únicamente del número de mensajes de la fuente.",
          "Las probabilidades de los mensajes y las longitudes de sus palabras.",
          "Exclusivamente de la longitud máxima de palabra.",
          "La velocidad de transmisión del canal."
        ],
        "correct": [
          1
        ],
        "optionLabels": [
          "a",
          "b",
          "c",
          "d"
        ],
        "sourceAnswer": "Respuesta según la plantilla: b) Las probabilidades de los mensajes y las longitudes de sus palabras.."
      },
      {
        "number": 6,
        "prompt": "¿Qué establece la entropía respecto a la longitud media de un código binario instantáneo?",
        "options": [
          "Constituye un límite inferior.",
          "Constituye siempre un límite superior.",
          "Debe coincidir exactamente con ella.",
          "No existe ninguna relación."
        ],
        "correct": [
          0
        ],
        "optionLabels": [
          "a",
          "b",
          "c",
          "d"
        ],
        "sourceAnswer": "Respuesta según la plantilla: a) Constituye un límite inferior.."
      },
      {
        "number": 7,
        "prompt": "El primer teorema de Shannon garantiza que:",
        "options": [
          "Todos los códigos binarios instantáneos son óptimos.",
          "Existe un código binario instantáneo con longitud media inferior a la entropía más una unidad.",
          "La longitud media es independiente de las probabilidades de la fuente.",
          "Los códigos uniformes son siempre más eficientes."
        ],
        "correct": [
          1
        ],
        "optionLabels": [
          "a",
          "b",
          "c",
          "d"
        ],
        "sourceAnswer": "Respuesta según la plantilla: b) Existe un código binario instantáneo con longitud media inferior a la entropía más una unidad.."
      },
      {
        "number": 8,
        "prompt": "¿Qué permite conseguir la codificación por bloques de mensajes?",
        "options": [
          "Reducir la entropía original de la fuente.",
          "Aproximar la longitud media por mensaje a la entropía de la fuente.",
          "Eliminar la necesidad de descodificación.",
          "Garantizar que todos los mensajes originales sean equiprobables."
        ],
        "correct": [
          1
        ],
        "optionLabels": [
          "a",
          "b",
          "c",
          "d"
        ],
        "sourceAnswer": "Respuesta según la plantilla: b) Aproximar la longitud media por mensaje a la entropía de la fuente.."
      },
      {
        "number": 9,
        "prompt": "¿Cuál de las siguientes afirmaciones sobre la desigualdad de Kraft es correcta?",
        "options": [
          "Solo se aplica a códigos uniformes.",
          "Proporciona una condición necesaria y suficiente de existencia de códigos instantáneos con longitudes dadas.",
          "Garantiza que un código concreto sea óptimo.",
          "Se cumple exclusivamente cuando el código es completo."
        ],
        "correct": [
          1
        ],
        "optionLabels": [
          "a",
          "b",
          "c",
          "d"
        ],
        "sourceAnswer": "Respuesta según la plantilla: b) Proporciona una condición necesaria y suficiente de existencia de códigos instantáneos con longitudes dadas.."
      },
      {
        "number": 10,
        "prompt": "Si un conjunto de longitudes incumple la desigualdad de Kraft:",
        "options": [
          "No puede existir un código instantáneo con esas longitudes.",
          "El código es necesariamente óptimo.",
          "Existe un código instantáneo completo.",
          "El código debe ser uniforme."
        ],
        "correct": [
          0
        ],
        "optionLabels": [
          "a",
          "b",
          "c",
          "d"
        ],
        "sourceAnswer": "Respuesta según la plantilla: a) No puede existir un código instantáneo con esas longitudes.."
      },
      {
        "number": 11,
        "prompt": "Si un código instantáneo satisface la igualdad de Kraft:",
        "options": [
          "Es necesariamente óptimo.",
          "Es completo.",
          "Todas sus palabras tienen la misma longitud.",
          "Su longitud media coincide con la entropía."
        ],
        "correct": [
          1
        ],
        "optionLabels": [
          "a",
          "b",
          "c",
          "d"
        ],
        "sourceAnswer": "Respuesta según la plantilla: b) Es completo.."
      },
      {
        "number": 12,
        "prompt": "¿Cuál de las siguientes afirmaciones sobre los códigos completos es falsa?",
        "options": [
          "Un código instantáneo completo satisface la igualdad de Kraft.",
          "Un código completo puede tener palabras de distintas longitudes.",
          "Todo código instantáneo completo es necesariamente óptimo.",
          "No pueden añadirse nuevas palabras manteniendo la propiedad de prefijo."
        ],
        "correct": [
          2
        ],
        "optionLabels": [
          "a",
          "b",
          "c",
          "d"
        ],
        "sourceAnswer": "Respuesta según la plantilla: c) Todo código instantáneo completo es necesariamente óptimo.."
      },
      {
        "number": 13,
        "prompt": "¿Qué representa un nodo hoja en el árbol de un código instantáneo?",
        "options": [
          "Un símbolo del alfabeto de codificación.",
          "Una palabra completa asociada a un mensaje de la fuente.",
          "Una probabilidad marginal.",
          "Un prefijo que necesariamente debe ampliarse."
        ],
        "correct": [
          1
        ],
        "optionLabels": [
          "a",
          "b",
          "c",
          "d"
        ],
        "sourceAnswer": "Respuesta según la plantilla: b) Una palabra completa asociada a un mensaje de la fuente.."
      },
      {
        "number": 14,
        "prompt": "¿Por qué los árboles permiten descodificar instantáneamente?",
        "options": [
          "Porque todas las palabras tienen la misma longitud.",
          "Porque cada mensaje se identifica al alcanzar una hoja.",
          "Porque eliminan todas las probabilidades.",
          "Porque utilizan únicamente alfabetos binarios."
        ],
        "correct": [
          1
        ],
        "optionLabels": [
          "a",
          "b",
          "c",
          "d"
        ],
        "sourceAnswer": "Respuesta según la plantilla: b) Porque cada mensaje se identifica al alcanzar una hoja.."
      },
      {
        "number": 15,
        "prompt": "¿Cuál de las siguientes características corresponde a Shannon-Fano?",
        "options": [
          "Construye el código mediante fusiones ascendentes de nodos.",
          "Divide recursivamente los mensajes en grupos con probabilidades similares.",
          "Garantiza obtener un código óptimo.",
          "No utiliza las probabilidades de los símbolos."
        ],
        "correct": [
          1
        ],
        "optionLabels": [
          "a",
          "b",
          "c",
          "d"
        ],
        "sourceAnswer": "Respuesta según la plantilla: b) Divide recursivamente los mensajes en grupos con probabilidades similares.."
      },
      {
        "number": 16,
        "prompt": "¿Qué propiedad garantiza Shannon-Fano?",
        "options": [
          "La optimalidad de cualquier código generado.",
          "La instantaneidad del código generado.",
          "La uniformidad de todas las palabras.",
          "La igualdad exacta entre entropía y longitud media."
        ],
        "correct": [
          1
        ],
        "optionLabels": [
          "a",
          "b",
          "c",
          "d"
        ],
        "sourceAnswer": "Respuesta según la plantilla: b) La instantaneidad del código generado.."
      },
      {
        "number": 17,
        "prompt": "¿Cuál es el criterio de selección utilizado por Huffman?",
        "options": [
          "Seleccionar los símbolos más probables para fusionarlos primero.",
          "Seleccionar los dos nodos menos probables en cada iteración.",
          "Dividir los mensajes en dos grupos equiprobables.",
          "Seleccionar aleatoriamente los nodos."
        ],
        "correct": [
          1
        ],
        "optionLabels": [
          "a",
          "b",
          "c",
          "d"
        ],
        "sourceAnswer": "Respuesta según la plantilla: b) Seleccionar los dos nodos menos probables en cada iteración.."
      },
      {
        "number": 18,
        "prompt": "¿Cuál de las siguientes afirmaciones sobre Huffman es correcta?",
        "options": [
          "Puede generar distintos códigos óptimos para una misma fuente.",
          "Siempre produce un código uniforme.",
          "Nunca puede producir un código completo.",
          "Siempre genera exactamente las mismas palabras que Shannon-Fano."
        ],
        "correct": [
          0
        ],
        "optionLabels": [
          "a",
          "b",
          "c",
          "d"
        ],
        "sourceAnswer": "Respuesta según la plantilla: a) Puede generar distintos códigos óptimos para una misma fuente.."
      },
      {
        "number": 19,
        "prompt": "Si se demuestra que existe otro código instantáneo con menor longitud media que un código dado, entonces:",
        "options": [
          "El código original es necesariamente uniforme.",
          "El código original no es óptimo.",
          "El código original debe ser completo.",
          "El código original fue generado necesariamente por Shannon-Fano."
        ],
        "correct": [
          1
        ],
        "optionLabels": [
          "a",
          "b",
          "c",
          "d"
        ],
        "sourceAnswer": "Respuesta según la plantilla: b) El código original no es óptimo.."
      },
      {
        "number": 20,
        "prompt": "¿Cuál de las siguientes afirmaciones es correcta?",
        "options": [
          "Shannon-Fano y Huffman garantizan siempre la misma longitud media.",
          "Huffman garantiza una longitud media mínima entre códigos binarios instantáneos símbolo a símbolo.",
          "Shannon-Fano siempre supera estrictamente a Huffman.",
          "Huffman únicamente puede utilizarse cuando los mensajes son equiprobables."
        ],
        "correct": [
          1
        ],
        "optionLabels": [
          "a",
          "b",
          "c",
          "d"
        ],
        "sourceAnswer": "Respuesta según la plantilla: b) Huffman garantiza una longitud media mínima entre códigos binarios instantáneos símbolo a símbolo.."
      }
    ]
  },
  {
    "title": "Simulacro 8 · Primer parcial TIC",
    "exam": 1,
    "simulation": true,
    "source": "Simulacros aportados por el usuario, temas 1, 2 y 3",
    "questions": [
      {
        "number": 1,
        "prompt": "Una fuente discreta sin memoria se caracteriza porque:",
        "options": [
          "Todos sus mensajes son equiprobables.",
          "La generación de cada mensaje es independiente de los anteriores.",
          "Produce siempre mensajes diferentes.",
          "La probabilidad de cada mensaje depende de la secuencia emitida previamente."
        ],
        "correct": [
          1
        ],
        "optionLabels": [
          "a",
          "b",
          "c",
          "d"
        ],
        "sourceAnswer": "Respuesta según la plantilla: b) La generación de cada mensaje es independiente de los anteriores.."
      },
      {
        "number": 2,
        "prompt": "¿Cuál de las siguientes afirmaciones sobre un canal determinista es necesariamente correcta?",
        "options": [
          "La salida permite identificar siempre la entrada.",
          "Cada entrada produce una única salida posible.",
          "Todas las entradas producen salidas diferentes.",
          "El canal no puede perder información."
        ],
        "correct": [
          1
        ],
        "optionLabels": [
          "a",
          "b",
          "c",
          "d"
        ],
        "sourceAnswer": "Respuesta según la plantilla: b) Cada entrada produce una única salida posible.."
      },
      {
        "number": 3,
        "prompt": "Si un canal es sin pérdida, pero no determinista, entonces:",
        "options": [
          "Una entrada puede generar varias salidas, pero cada salida identifica una única entrada.",
          "Varias entradas pueden generar una misma salida.",
          "Cada entrada genera necesariamente una única salida.",
          "El canal es inútil."
        ],
        "correct": [
          0
        ],
        "optionLabels": [
          "a",
          "b",
          "c",
          "d"
        ],
        "sourceAnswer": "Respuesta según la plantilla: a) Una entrada puede generar varias salidas, pero cada salida identifica una única entrada.."
      },
      {
        "number": 4,
        "prompt": "¿Cuál de las siguientes afirmaciones sobre un canal sin ruido es correcta?",
        "options": [
          "Los símbolos recibidos deben ser idénticos a los enviados.",
          "El canal es simultáneamente determinista y sin pérdida.",
          "Todas las filas de su matriz son idénticas.",
          "No puede utilizar un alfabeto ternario."
        ],
        "correct": [
          1
        ],
        "optionLabels": [
          "a",
          "b",
          "c",
          "d"
        ],
        "sourceAnswer": "Respuesta según la plantilla: b) El canal es simultáneamente determinista y sin pérdida.."
      },
      {
        "number": 5,
        "prompt": "Un canal inútil se caracteriza porque:",
        "options": [
          "Siempre invierte los símbolos transmitidos.",
          "La salida determina completamente la entrada.",
          "La distribución de la salida no depende de la entrada.",
          "Es necesariamente determinista."
        ],
        "correct": [
          2
        ],
        "optionLabels": [
          "a",
          "b",
          "c",
          "d"
        ],
        "sourceAnswer": "Respuesta según la plantilla: c) La distribución de la salida no depende de la entrada.."
      },
      {
        "number": 6,
        "prompt": "Sea el código binario C={00,01,10,11}. ¿Cómo se clasifica?",
        "options": [
          "Uniforme, instantáneo y completo.",
          "Uniforme, pero no instantáneo.",
          "No uniforme e instantáneo.",
          "Instantáneo, pero no completo."
        ],
        "correct": [
          0
        ],
        "optionLabels": [
          "a",
          "b",
          "c",
          "d"
        ],
        "sourceAnswer": "Respuesta según la plantilla: a) Uniforme, instantáneo y completo.."
      },
      {
        "number": 7,
        "prompt": "Sea el código C={0,10,110}. ¿Cuál de las siguientes afirmaciones es correcta?",
        "options": [
          "No es instantáneo porque sus palabras tienen distinta longitud.",
          "Es instantáneo, pero no uniforme.",
          "Es uniforme y completo.",
          "No permite descodificación única."
        ],
        "correct": [
          1
        ],
        "optionLabels": [
          "a",
          "b",
          "c",
          "d"
        ],
        "sourceAnswer": "Respuesta según la plantilla: b) Es instantáneo, pero no uniforme.."
      },
      {
        "number": 8,
        "prompt": "Sea el código C={0,01,11}. ¿Cuál de las siguientes afirmaciones es correcta?",
        "options": [
          "Es instantáneo porque sus palabras son diferentes.",
          "Es uniforme porque utiliza un alfabeto binario.",
          "No es instantáneo porque una palabra es prefijo de otra.",
          "Es necesariamente óptimo."
        ],
        "correct": [
          2
        ],
        "optionLabels": [
          "a",
          "b",
          "c",
          "d"
        ],
        "sourceAnswer": "Respuesta según la plantilla: c) No es instantáneo porque una palabra es prefijo de otra.."
      },
      {
        "number": 9,
        "prompt": "¿Cuál de las siguientes afirmaciones sobre un código instantáneo es verdadera?",
        "options": [
          "Todas sus palabras deben tener la misma longitud.",
          "Ninguna palabra puede ser prefijo de otra.",
          "Debe utilizar obligatoriamente un alfabeto binario.",
          "Su longitud media debe coincidir con la entropía."
        ],
        "correct": [
          1
        ],
        "optionLabels": [
          "a",
          "b",
          "c",
          "d"
        ],
        "sourceAnswer": "Respuesta según la plantilla: b) Ninguna palabra puede ser prefijo de otra.."
      },
      {
        "number": 10,
        "prompt": "¿Qué relación existe entre códigos instantáneos y códigos de traducción única?",
        "options": [
          "Todo código de traducción única es instantáneo.",
          "Todo código instantáneo es de traducción única.",
          "Ambos conceptos son equivalentes.",
          "Un código instantáneo no puede permitir traducción única."
        ],
        "correct": [
          1
        ],
        "optionLabels": [
          "a",
          "b",
          "c",
          "d"
        ],
        "sourceAnswer": "Respuesta según la plantilla: b) Todo código instantáneo es de traducción única.."
      },
      {
        "number": 11,
        "prompt": "La cantidad de información de Shannon asociada a un mensaje es mayor cuando:",
        "options": [
          "Su probabilidad de aparición es mayor.",
          "Su probabilidad de aparición es menor.",
          "Su longitud codificada es mayor.",
          "La fuente es determinista."
        ],
        "correct": [
          1
        ],
        "optionLabels": [
          "a",
          "b",
          "c",
          "d"
        ],
        "sourceAnswer": "Respuesta según la plantilla: b) Su probabilidad de aparición es menor.."
      },
      {
        "number": 12,
        "prompt": "La entropía de una fuente discreta es máxima cuando:",
        "options": [
          "Un mensaje tiene probabilidad uno.",
          "Todos los mensajes son equiprobables.",
          "Existe un único mensaje posible.",
          "La fuente tiene memoria."
        ],
        "correct": [
          1
        ],
        "optionLabels": [
          "a",
          "b",
          "c",
          "d"
        ],
        "sourceAnswer": "Respuesta según la plantilla: b) Todos los mensajes son equiprobables.."
      },
      {
        "number": 13,
        "prompt": "Si dos variables aleatorias son independientes, entonces:",
        "options": [
          "Su información mutua es máxima.",
          "Su entropía conjunta es nula.",
          "Su información mutua es cero.",
          "Sus entropías individuales deben coincidir."
        ],
        "correct": [
          2
        ],
        "optionLabels": [
          "a",
          "b",
          "c",
          "d"
        ],
        "sourceAnswer": "Respuesta según la plantilla: c) Su información mutua es cero.."
      },
      {
        "number": 14,
        "prompt": "Si X e Y son variables idénticas, entonces:",
        "options": [
          "Su entropía conjunta duplica la entropía individual.",
          "Su entropía conjunta coincide con la entropía individual.",
          "Son necesariamente independientes.",
          "Su información mutua es cero."
        ],
        "correct": [
          1
        ],
        "optionLabels": [
          "a",
          "b",
          "c",
          "d"
        ],
        "sourceAnswer": "Respuesta según la plantilla: b) Su entropía conjunta coincide con la entropía individual.."
      },
      {
        "number": 15,
        "prompt": "La entropía condicional H(X|Y) es nula cuando:",
        "options": [
          "X e Y son independientes.",
          "X es equiprobable.",
          "Conocer Y permite determinar completamente X.",
          "La entropía de Y es máxima."
        ],
        "correct": [
          2
        ],
        "optionLabels": [
          "a",
          "b",
          "c",
          "d"
        ],
        "sourceAnswer": "Respuesta según la plantilla: c) Conocer Y permite determinar completamente X.."
      },
      {
        "number": 16,
        "prompt": "¿Cuál de las siguientes afirmaciones sobre el primer teorema de Shannon es correcta?",
        "options": [
          "La longitud media de cualquier código es exactamente igual a la entropía.",
          "La entropía constituye un límite inferior para la longitud media de los códigos binarios instantáneos.",
          "La codificación sin pérdidas puede alcanzar siempre una longitud media inferior a la entropía.",
          "Todos los códigos instantáneos son óptimos."
        ],
        "correct": [
          1
        ],
        "optionLabels": [
          "a",
          "b",
          "c",
          "d"
        ],
        "sourceAnswer": "Respuesta según la plantilla: b) La entropía constituye un límite inferior para la longitud media de los códigos binarios instantáneos.."
      },
      {
        "number": 17,
        "prompt": "Si un código instantáneo cumple la igualdad de Kraft, entonces:",
        "options": [
          "Es necesariamente óptimo.",
          "Es completo.",
          "Debe ser uniforme.",
          "Su longitud media coincide con la entropía."
        ],
        "correct": [
          1
        ],
        "optionLabels": [
          "a",
          "b",
          "c",
          "d"
        ],
        "sourceAnswer": "Respuesta según la plantilla: b) Es completo.."
      },
      {
        "number": 18,
        "prompt": "¿Cuál de las siguientes afirmaciones sobre la desigualdad de Kraft es verdadera?",
        "options": [
          "Garantiza que cualquier conjunto concreto de palabras sea instantáneo.",
          "Establece una condición necesaria y suficiente para la existencia de un código instantáneo con determinadas longitudes.",
          "Únicamente se aplica a códigos binarios.",
          "Demuestra que un código es óptimo."
        ],
        "correct": [
          1
        ],
        "optionLabels": [
          "a",
          "b",
          "c",
          "d"
        ],
        "sourceAnswer": "Respuesta según la plantilla: b) Establece una condición necesaria y suficiente para la existencia de un código instantáneo con determinadas longitudes.."
      },
      {
        "number": 19,
        "prompt": "¿Cuál es la principal diferencia entre Shannon-Fano y Huffman?",
        "options": [
          "Shannon-Fano garantiza optimalidad y Huffman no.",
          "Huffman construye el código mediante fusiones ascendentes de nodos.",
          "Shannon-Fano no utiliza probabilidades.",
          "Huffman genera exclusivamente códigos uniformes."
        ],
        "correct": [
          1
        ],
        "optionLabels": [
          "a",
          "b",
          "c",
          "d"
        ],
        "sourceAnswer": "Respuesta según la plantilla: b) Huffman construye el código mediante fusiones ascendentes de nodos.."
      },
      {
        "number": 20,
        "prompt": "¿Cuál de las siguientes situaciones demuestra que un código no puede ser un resultado óptimo de Huffman?",
        "options": [
          "Tiene palabras de distintas longitudes.",
          "Dos mensajes tienen palabras de igual longitud.",
          "Existe otro código instantáneo para la misma fuente con menor longitud media.",
          "El código es completo."
        ],
        "correct": [
          2
        ],
        "optionLabels": [
          "a",
          "b",
          "c",
          "d"
        ],
        "sourceAnswer": "Respuesta según la plantilla: c) Existe otro código instantáneo para la misma fuente con menor longitud media.."
      }
    ]
  },
  {
    "title": "Simulacro 9 · Primer parcial TIC",
    "exam": 1,
    "simulation": true,
    "source": "Simulacros aportados por el usuario, temas 1, 2 y 3",
    "questions": [
      {
        "number": 1,
        "prompt": "¿Cuál de las siguientes afirmaciones sobre los canales es correcta?",
        "options": [
          "Todo canal determinista es sin pérdida.",
          "Todo canal sin pérdida es determinista.",
          "Todo canal sin ruido es determinista.",
          "Todo canal simétrico es inútil."
        ],
        "correct": [
          2
        ],
        "optionLabels": [
          "a",
          "b",
          "c",
          "d"
        ],
        "sourceAnswer": "Respuesta según la plantilla: c) Todo canal sin ruido es determinista.."
      },
      {
        "number": 2,
        "prompt": "Si un canal es determinista y sin pérdida simultáneamente, entonces:",
        "options": [
          "Es un canal inútil.",
          "Es un canal sin ruido.",
          "Debe ser necesariamente binario.",
          "Sus entradas deben ser equiprobables."
        ],
        "correct": [
          1
        ],
        "optionLabels": [
          "a",
          "b",
          "c",
          "d"
        ],
        "sourceAnswer": "Respuesta según la plantilla: b) Es un canal sin ruido.."
      },
      {
        "number": 3,
        "prompt": "¿Cuál de las siguientes afirmaciones sobre los canales inútiles es falsa?",
        "options": [
          "La salida es estadísticamente independiente de la entrada.",
          "La información mutua entre entrada y salida es cero.",
          "La salida permite determinar completamente la entrada.",
          "Todas las filas de la matriz del canal son idénticas."
        ],
        "correct": [
          2
        ],
        "optionLabels": [
          "a",
          "b",
          "c",
          "d"
        ],
        "sourceAnswer": "Respuesta según la plantilla: c) La salida permite determinar completamente la entrada.."
      },
      {
        "number": 4,
        "prompt": "¿Cuál de las siguientes afirmaciones sobre los canales simétricos es correcta?",
        "options": [
          "Todos los canales simétricos son deterministas.",
          "Todos los canales simétricos son sin pérdida.",
          "Las filas de su matriz contienen los mismos valores, aunque puedan aparecer en distinto orden.",
          "Los canales simétricos nunca presentan ruido."
        ],
        "correct": [
          2
        ],
        "optionLabels": [
          "a",
          "b",
          "c",
          "d"
        ],
        "sourceAnswer": "Respuesta según la plantilla: c) Las filas de su matriz contienen los mismos valores, aunque puedan aparecer en distinto orden.."
      },
      {
        "number": 5,
        "prompt": "Sea el código binario C={00,01,1}. ¿Cuál de las siguientes afirmaciones es correcta?",
        "options": [
          "Es instantáneo, completo y no uniforme.",
          "Es uniforme y completo.",
          "No es instantáneo.",
          "Es instantáneo, pero no completo."
        ],
        "correct": [
          0
        ],
        "optionLabels": [
          "a",
          "b",
          "c",
          "d"
        ],
        "sourceAnswer": "Respuesta según la plantilla: a) Es instantáneo, completo y no uniforme.."
      },
      {
        "number": 6,
        "prompt": "Sea el código C={0,10,11}. ¿Cuál de las siguientes propiedades no puede deducirse únicamente de sus palabras?",
        "options": [
          "Es instantáneo.",
          "Es completo.",
          "Es óptimo para una fuente determinada.",
          "No es uniforme."
        ],
        "correct": [
          2
        ],
        "optionLabels": [
          "a",
          "b",
          "c",
          "d"
        ],
        "sourceAnswer": "Respuesta según la plantilla: c) Es óptimo para una fuente determinada.."
      },
      {
        "number": 7,
        "prompt": "¿Cuál de las siguientes afirmaciones sobre códigos de traducción única es correcta?",
        "options": [
          "Todo código de traducción única es necesariamente instantáneo.",
          "Un código puede permitir traducción única sin ser instantáneo.",
          "Todo código no uniforme carece de traducción única.",
          "Los códigos de traducción única deben ser completos."
        ],
        "correct": [
          1
        ],
        "optionLabels": [
          "a",
          "b",
          "c",
          "d"
        ],
        "sourceAnswer": "Respuesta según la plantilla: b) Un código puede permitir traducción única sin ser instantáneo.."
      },
      {
        "number": 8,
        "prompt": "Si un código no es instantáneo, entonces:",
        "options": [
          "No puede permitir descodificación única.",
          "Es necesariamente indescifrable.",
          "Puede permitir descodificación única.",
          "Debe ser uniforme."
        ],
        "correct": [
          2
        ],
        "optionLabels": [
          "a",
          "b",
          "c",
          "d"
        ],
        "sourceAnswer": "Respuesta según la plantilla: c) Puede permitir descodificación única.."
      },
      {
        "number": 9,
        "prompt": "¿Cuál de las siguientes afirmaciones sobre la entropía es falsa?",
        "options": [
          "La entropía es siempre no negativa.",
          "La entropía es máxima para una distribución uniforme.",
          "La entropía es cero cuando un mensaje es seguro.",
          "La entropía aumenta necesariamente cuando aumenta la probabilidad del mensaje más frecuente."
        ],
        "correct": [
          3
        ],
        "optionLabels": [
          "a",
          "b",
          "c",
          "d"
        ],
        "sourceAnswer": "Respuesta según la plantilla: d) La entropía aumenta necesariamente cuando aumenta la probabilidad del mensaje más frecuente.."
      },
      {
        "number": 10,
        "prompt": "Si dos variables aleatorias son independientes, entonces:",
        "options": [
          "Su entropía conjunta es igual a la suma de sus entropías marginales.",
          "Su entropía conjunta es siempre cero.",
          "Su entropía condicional es siempre cero.",
          "Su información mutua es igual a la entropía de ambas variables."
        ],
        "correct": [
          0
        ],
        "optionLabels": [
          "a",
          "b",
          "c",
          "d"
        ],
        "sourceAnswer": "Respuesta según la plantilla: a) Su entropía conjunta es igual a la suma de sus entropías marginales.."
      },
      {
        "number": 11,
        "prompt": "Si la entropía conjunta de dos variables coincide con la suma de sus entropías marginales, entonces:",
        "options": [
          "Las variables son idénticas.",
          "Las variables son independientes.",
          "Una variable determina completamente la otra.",
          "Ambas variables tienen entropía cero."
        ],
        "correct": [
          1
        ],
        "optionLabels": [
          "a",
          "b",
          "c",
          "d"
        ],
        "sourceAnswer": "Respuesta según la plantilla: b) Las variables son independientes.."
      },
      {
        "number": 12,
        "prompt": "Si conocer Y permite determinar completamente X, entonces:",
        "options": [
          "La información mutua coincide con la entropía de X.",
          "La información mutua es necesariamente cero.",
          "Las variables son independientes.",
          "La entropía conjunta es siempre cero."
        ],
        "correct": [
          0
        ],
        "optionLabels": [
          "a",
          "b",
          "c",
          "d"
        ],
        "sourceAnswer": "Respuesta según la plantilla: a) La información mutua coincide con la entropía de X.."
      },
      {
        "number": 13,
        "prompt": "¿Cuál de las siguientes afirmaciones sobre la información mutua es falsa?",
        "options": [
          "Es simétrica.",
          "No puede ser negativa.",
          "Puede superar la entropía individual de ambas variables.",
          "Es nula si las variables son independientes."
        ],
        "correct": [
          2
        ],
        "optionLabels": [
          "a",
          "b",
          "c",
          "d"
        ],
        "sourceAnswer": "Respuesta según la plantilla: c) Puede superar la entropía individual de ambas variables.."
      },
      {
        "number": 14,
        "prompt": "¿Cuál de las siguientes afirmaciones sobre la entropía condicional es correcta?",
        "options": [
          "Conocer otra variable nunca puede reducir la incertidumbre.",
          "La entropía condicional puede ser mayor que la entropía marginal correspondiente.",
          "La entropía condicional es igual a la entropía marginal si las variables son independientes.",
          "Las entropías condicionales en ambas direcciones son siempre iguales."
        ],
        "correct": [
          2
        ],
        "optionLabels": [
          "a",
          "b",
          "c",
          "d"
        ],
        "sourceAnswer": "Respuesta según la plantilla: c) La entropía condicional es igual a la entropía marginal si las variables son independientes.."
      },
      {
        "number": 15,
        "prompt": "¿Cuál de las siguientes afirmaciones sobre la ley de entropías totales es verdadera?",
        "options": [
          "Solo se cumple para variables independientes.",
          "Relaciona la entropía conjunta con las entropías marginales y condicionales.",
          "Solo se aplica a canales sin ruido.",
          "Implica que ambas variables tienen la misma entropía."
        ],
        "correct": [
          1
        ],
        "optionLabels": [
          "a",
          "b",
          "c",
          "d"
        ],
        "sourceAnswer": "Respuesta según la plantilla: b) Relaciona la entropía conjunta con las entropías marginales y condicionales.."
      },
      {
        "number": 16,
        "prompt": "¿Cuál de las siguientes afirmaciones sobre el primer teorema de Shannon es incorrecta?",
        "options": [
          "La entropía establece un límite inferior para la longitud media de un código binario instantáneo.",
          "Es posible aproximar la longitud media por mensaje a la entropía utilizando bloques suficientemente grandes.",
          "Todo código binario instantáneo debe tener una longitud media inferior a la entropía más una unidad.",
          "El teorema establece límites fundamentales para la compresión sin pérdidas."
        ],
        "correct": [
          2
        ],
        "optionLabels": [
          "a",
          "b",
          "c",
          "d"
        ],
        "sourceAnswer": "Respuesta según la plantilla: c) Todo código binario instantáneo debe tener una longitud media inferior a la entropía más una unidad.."
      },
      {
        "number": 17,
        "prompt": "Si un código instantáneo no es completo, entonces:",
        "options": [
          "Su suma de Kraft es estrictamente menor que uno.",
          "No permite descodificación única.",
          "Es necesariamente uniforme.",
          "Es necesariamente óptimo."
        ],
        "correct": [
          0
        ],
        "optionLabels": [
          "a",
          "b",
          "c",
          "d"
        ],
        "sourceAnswer": "Respuesta según la plantilla: a) Su suma de Kraft es estrictamente menor que uno.."
      },
      {
        "number": 18,
        "prompt": "¿Cuál de las siguientes condiciones es suficiente para demostrar que un código instantáneo es completo?",
        "options": [
          "Que todas sus palabras tengan distinta longitud.",
          "Que cumpla la igualdad de Kraft.",
          "Que haya sido construido mediante Shannon-Fano.",
          "Que tenga la menor longitud máxima posible."
        ],
        "correct": [
          1
        ],
        "optionLabels": [
          "a",
          "b",
          "c",
          "d"
        ],
        "sourceAnswer": "Respuesta según la plantilla: b) Que cumpla la igualdad de Kraft.."
      },
      {
        "number": 19,
        "prompt": "¿Cuál de las siguientes afirmaciones sobre Shannon-Fano es verdadera?",
        "options": [
          "Garantiza la longitud media mínima posible.",
          "Genera códigos instantáneos mediante divisiones recursivas de los mensajes.",
          "Siempre genera las mismas palabras que Huffman.",
          "No puede construir códigos completos."
        ],
        "correct": [
          1
        ],
        "optionLabels": [
          "a",
          "b",
          "c",
          "d"
        ],
        "sourceAnswer": "Respuesta según la plantilla: b) Genera códigos instantáneos mediante divisiones recursivas de los mensajes.."
      },
      {
        "number": 20,
        "prompt": "¿Cuál de las siguientes afirmaciones sobre Huffman es correcta?",
        "options": [
          "Todos los códigos Huffman son uniformes.",
          "Todos los códigos Huffman tienen longitud media exactamente igual a la entropía.",
          "Huffman garantiza optimalidad, aunque pueden existir varias soluciones óptimas.",
          "Huffman no puede generar códigos con palabras de igual longitud."
        ],
        "correct": [
          2
        ],
        "optionLabels": [
          "a",
          "b",
          "c",
          "d"
        ],
        "sourceAnswer": "Respuesta según la plantilla: c) Huffman garantiza optimalidad, aunque pueden existir varias soluciones óptimas.."
      }
    ]
  },
  {
    "title": "Simulacro 10 · Primer parcial TIC",
    "exam": 1,
    "simulation": true,
    "source": "Simulacros aportados por el usuario, temas 1, 2 y 3",
    "questions": [
      {
        "number": 1,
        "prompt": "Una fuente sin memoria y una fuente con memoria se diferencian principalmente en:",
        "options": [
          "El número de símbolos de su alfabeto.",
          "La dependencia estadística entre los mensajes emitidos en diferentes instantes.",
          "La velocidad física del canal utilizado.",
          "La necesidad de emplear códigos uniformes."
        ],
        "correct": [
          1
        ],
        "optionLabels": [
          "a",
          "b",
          "c",
          "d"
        ],
        "sourceAnswer": "Respuesta según la plantilla: b) La dependencia estadística entre los mensajes emitidos en diferentes instantes.."
      },
      {
        "number": 2,
        "prompt": "¿Cuál de las siguientes afirmaciones sobre canales deterministas y sin pérdida es verdadera?",
        "options": [
          "Son conceptos equivalentes.",
          "Un canal determinista permite identificar siempre la entrada a partir de la salida.",
          "Un canal sin pérdida permite identificar la entrada a partir de la salida.",
          "Todo canal sin pérdida es necesariamente sin ruido."
        ],
        "correct": [
          2
        ],
        "optionLabels": [
          "a",
          "b",
          "c",
          "d"
        ],
        "sourceAnswer": "Respuesta según la plantilla: c) Un canal sin pérdida permite identificar la entrada a partir de la salida.."
      },
      {
        "number": 3,
        "prompt": "Un canal cuya salida no proporciona información sobre la entrada se denomina:",
        "options": [
          "Canal determinista.",
          "Canal sin pérdida.",
          "Canal inútil.",
          "Canal sin ruido."
        ],
        "correct": [
          2
        ],
        "optionLabels": [
          "a",
          "b",
          "c",
          "d"
        ],
        "sourceAnswer": "Respuesta según la plantilla: c) Canal inútil.."
      },
      {
        "number": 4,
        "prompt": "¿Cuál de las siguientes afirmaciones sobre un canal sin ruido es correcta?",
        "options": [
          "Puede asociar varias entradas diferentes a una misma salida.",
          "Puede asociar varias salidas diferentes a una misma entrada.",
          "Cada entrada determina una única salida y cada salida identifica una única entrada.",
          "Todas las entradas generan la misma salida."
        ],
        "correct": [
          2
        ],
        "optionLabels": [
          "a",
          "b",
          "c",
          "d"
        ],
        "sourceAnswer": "Respuesta según la plantilla: c) Cada entrada determina una única salida y cada salida identifica una única entrada.."
      },
      {
        "number": 5,
        "prompt": "Sea el código C={10,11,001}. ¿Cómo se clasifica?",
        "options": [
          "Uniforme e instantáneo.",
          "No uniforme e instantáneo.",
          "Uniforme, pero no instantáneo.",
          "No uniforme y no instantáneo."
        ],
        "correct": [
          1
        ],
        "optionLabels": [
          "a",
          "b",
          "c",
          "d"
        ],
        "sourceAnswer": "Respuesta según la plantilla: b) No uniforme e instantáneo.."
      },
      {
        "number": 6,
        "prompt": "¿Cuál de las siguientes afirmaciones sobre los códigos instantáneos es falsa?",
        "options": [
          "Permiten identificar una palabra al terminar de leerla.",
          "Ninguna palabra es prefijo de otra.",
          "Todos los códigos instantáneos son completos.",
          "Todos los códigos instantáneos permiten descodificación única."
        ],
        "correct": [
          2
        ],
        "optionLabels": [
          "a",
          "b",
          "c",
          "d"
        ],
        "sourceAnswer": "Respuesta según la plantilla: c) Todos los códigos instantáneos son completos.."
      },
      {
        "number": 7,
        "prompt": "La información aportada por un mensaje es nula cuando:",
        "options": [
          "Su probabilidad es cero.",
          "Su probabilidad es uno.",
          "La fuente contiene varios símbolos.",
          "La longitud de su código es uniforme."
        ],
        "correct": [
          1
        ],
        "optionLabels": [
          "a",
          "b",
          "c",
          "d"
        ],
        "sourceAnswer": "Respuesta según la plantilla: b) Su probabilidad es uno.."
      },
      {
        "number": 8,
        "prompt": "¿Cuál de las siguientes afirmaciones sobre la entropía es correcta?",
        "options": [
          "Es máxima cuando el resultado es completamente predecible.",
          "Es mínima cuando todos los mensajes son equiprobables.",
          "Mide la incertidumbre media de una fuente.",
          "Depende exclusivamente de la cantidad de símbolos posibles."
        ],
        "correct": [
          2
        ],
        "optionLabels": [
          "a",
          "b",
          "c",
          "d"
        ],
        "sourceAnswer": "Respuesta según la plantilla: c) Mide la incertidumbre media de una fuente.."
      },
      {
        "number": 9,
        "prompt": "Si dos variables aleatorias son idénticas, entonces:",
        "options": [
          "Su información mutua coincide con su entropía individual.",
          "Su información mutua es necesariamente cero.",
          "Su entropía conjunta es el doble de la entropía individual.",
          "Son necesariamente independientes."
        ],
        "correct": [
          0
        ],
        "optionLabels": [
          "a",
          "b",
          "c",
          "d"
        ],
        "sourceAnswer": "Respuesta según la plantilla: a) Su información mutua coincide con su entropía individual.."
      },
      {
        "number": 10,
        "prompt": "¿Cuál de las siguientes afirmaciones sobre la entropía conjunta es verdadera?",
        "options": [
          "Siempre coincide con la suma de las entropías marginales.",
          "Nunca supera la suma de las entropías marginales.",
          "Siempre es inferior a cada entropía marginal.",
          "Siempre coincide con la información mutua."
        ],
        "correct": [
          1
        ],
        "optionLabels": [
          "a",
          "b",
          "c",
          "d"
        ],
        "sourceAnswer": "Respuesta según la plantilla: b) Nunca supera la suma de las entropías marginales.."
      },
      {
        "number": 11,
        "prompt": "La entropía condicional de X respecto de Y:",
        "options": [
          "Es siempre superior a la entropía de X.",
          "Es siempre igual a la entropía de Y.",
          "Mide la incertidumbre restante sobre X al conocer Y.",
          "Solo puede calcularse cuando las variables son independientes."
        ],
        "correct": [
          2
        ],
        "optionLabels": [
          "a",
          "b",
          "c",
          "d"
        ],
        "sourceAnswer": "Respuesta según la plantilla: c) Mide la incertidumbre restante sobre X al conocer Y.."
      },
      {
        "number": 12,
        "prompt": "¿Cuál de las siguientes relaciones es siempre verdadera?",
        "options": [
          "H(X,Y)=H(X)+H(Y)",
          "H(X,Y)=H(X)+H(Y|X)",
          "H(X|Y)=H(Y|X)",
          "I(X;Y)=H(X,Y)"
        ],
        "correct": [
          1
        ],
        "optionLabels": [
          "a",
          "b",
          "c",
          "d"
        ],
        "sourceAnswer": "Respuesta según la plantilla: b) H(X,Y)=H(X)+H(Y|X)."
      },
      {
        "number": 13,
        "prompt": "Si la información mutua entre dos variables es cero, entonces:",
        "options": [
          "Las variables son estadísticamente independientes.",
          "Ambas variables tienen entropía máxima.",
          "Una variable determina completamente la otra.",
          "Sus entropías individuales son necesariamente iguales."
        ],
        "correct": [
          0
        ],
        "optionLabels": [
          "a",
          "b",
          "c",
          "d"
        ],
        "sourceAnswer": "Respuesta según la plantilla: a) Las variables son estadísticamente independientes.."
      },
      {
        "number": 14,
        "prompt": "El primer teorema de Shannon para codificación sin ruido establece que:",
        "options": [
          "La longitud media de cualquier código coincide exactamente con la entropía.",
          "La entropía representa un límite inferior para la longitud media de códigos binarios instantáneos.",
          "La longitud media de cualquier código es necesariamente inferior a la entropía más una unidad.",
          "Todos los códigos instantáneos son óptimos."
        ],
        "correct": [
          1
        ],
        "optionLabels": [
          "a",
          "b",
          "c",
          "d"
        ],
        "sourceAnswer": "Respuesta según la plantilla: b) La entropía representa un límite inferior para la longitud media de códigos binarios instantáneos.."
      },
      {
        "number": 15,
        "prompt": "¿Cuál de las siguientes afirmaciones sobre la desigualdad de Kraft es correcta?",
        "options": [
          "Si se cumple, cualquier código concreto con esas longitudes es instantáneo.",
          "Si no se cumple, es imposible construir un código instantáneo con esas longitudes.",
          "Solo puede aplicarse cuando todos los mensajes son equiprobables.",
          "Garantiza la optimalidad de los códigos que la satisfacen."
        ],
        "correct": [
          1
        ],
        "optionLabels": [
          "a",
          "b",
          "c",
          "d"
        ],
        "sourceAnswer": "Respuesta según la plantilla: b) Si no se cumple, es imposible construir un código instantáneo con esas longitudes.."
      },
      {
        "number": 16,
        "prompt": "Un código instantáneo completo se caracteriza porque:",
        "options": [
          "Todas sus palabras tienen la misma longitud.",
          "No pueden añadirse nuevas palabras sin perder la propiedad de prefijo.",
          "Su longitud media coincide siempre con la entropía.",
          "Todos sus mensajes tienen la misma probabilidad."
        ],
        "correct": [
          1
        ],
        "optionLabels": [
          "a",
          "b",
          "c",
          "d"
        ],
        "sourceAnswer": "Respuesta según la plantilla: b) No pueden añadirse nuevas palabras sin perder la propiedad de prefijo.."
      },
      {
        "number": 17,
        "prompt": "¿Cuál de las siguientes afirmaciones sobre un código instantáneo que cumple la igualdad de Kraft es falsa?",
        "options": [
          "Es completo.",
          "No permite añadir nuevas palabras conservando la propiedad de prefijo.",
          "Es necesariamente óptimo.",
          "Puede tener palabras de diferentes longitudes."
        ],
        "correct": [
          2
        ],
        "optionLabels": [
          "a",
          "b",
          "c",
          "d"
        ],
        "sourceAnswer": "Respuesta según la plantilla: c) Es necesariamente óptimo.."
      },
      {
        "number": 18,
        "prompt": "¿Cuál de las siguientes afirmaciones sobre Shannon-Fano es correcta?",
        "options": [
          "Garantiza códigos instantáneos óptimos.",
          "Construye el código mediante divisiones recursivas de los mensajes según sus probabilidades.",
          "Fusiona en cada iteración los dos nodos menos probables.",
          "Siempre genera códigos uniformes."
        ],
        "correct": [
          1
        ],
        "optionLabels": [
          "a",
          "b",
          "c",
          "d"
        ],
        "sourceAnswer": "Respuesta según la plantilla: b) Construye el código mediante divisiones recursivas de los mensajes según sus probabilidades.."
      },
      {
        "number": 19,
        "prompt": "¿Cuál de las siguientes propiedades es característica del algoritmo de Huffman?",
        "options": [
          "Construye el árbol de forma descendente.",
          "Garantiza un código instantáneo óptimo para una fuente determinada.",
          "Genera siempre palabras de la misma longitud.",
          "No necesita conocer las probabilidades de los mensajes."
        ],
        "correct": [
          1
        ],
        "optionLabels": [
          "a",
          "b",
          "c",
          "d"
        ],
        "sourceAnswer": "Respuesta según la plantilla: b) Garantiza un código instantáneo óptimo para una fuente determinada.."
      },
      {
        "number": 20,
        "prompt": "¿Cuál de las siguientes situaciones demuestra de forma concluyente que un código instantáneo no es óptimo?",
        "options": [
          "Tiene palabras de diferentes longitudes.",
          "No es uniforme.",
          "Existe otro código instantáneo para la misma fuente con una longitud media inferior.",
          "Dos mensajes de probabilidades diferentes tienen palabras de igual longitud."
        ],
        "correct": [
          2
        ],
        "optionLabels": [
          "a",
          "b",
          "c",
          "d"
        ],
        "sourceAnswer": "Respuesta según la plantilla: c) Existe otro código instantáneo para la misma fuente con una longitud media inferior.."
      }
    ]
  }
];
