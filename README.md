## **8. Evaluación**
Recuerda revisar la [rúbrica](https://docs.google.com/spreadsheets/u/1/d/e/2PACX-1vRktPN4ilZtkRN5tUb3DVhgeihwlzk63_-JI3moA-bXpKDbHDioAK2H3qbrwWNb0Ql4wX22Tgv7-PDv/pubhtml)
para ver la descripción detallada de cada habilidad y cada nivel. Esta es una
lista de todas las habilidades involucradas en este proyecto y que evaluaremos
cuando lo completes:

## **Pistas sobre cómo empezar a trabajar en el proyecto**



### **Diseño de experiencia de usuario (User Experience Design)**

* Investigación con usuario
* [Principios de diseño visual](https://lms.laboratoria.la/cohorts/scl-2019-01-bc-core-commoncore-scl008/courses/diseno-visual)


## **Checklist**

* [ ] Incluye _Definición del producto_ clara e informativa en `README.md`.
* [ ] Incluye _sketch_ de la solución (prototipo de baja fidelidad) en
  `README.md`.
* [ ] Incluye el listado de problemas que detectaste a través de tests de usabilidad en el `README.md`.


#Aqui estoy escribiendo

## INVESTIGACIÓN DEL USUARIO Y PROTOTIPADO

### Usuario

### **1.- Definición del producto**(Documenta brevemente tu trabajo en el archivo `README.md` de tu repositorio,contándonos cómo fue tu proceso de diseño y cómo crees que el producto resuelve el problema (o problemas) que tiene tu usuario.)

* ¿Cuándo utilizan o utilizarían el producto?

Como equipo hemos recurrido a diferentes herramientas y realizado una serie de etapas de investigación para poder cumplir de forma optima las necesidades del usuario . 

En primer lugar tomamos el desafío de _**aprender conceptos claves del juego**_ para poder tener una idea global del funcionamiento de éste. Para ello hablamos con usuarios de la aplicación Pokemon Go, los cuales manifestaron a grandes rasgos los puntos que consideraban relevantes para ellos.

Como segundo lugar elaboramos un breve _**cuestionario**_ basándonos en lo dicho por los jugadores y los recursos con los que se contaban, con el fin de evaluar y filtrar la información, descartando aquella que resulta poco relevante si no se encuentra sincronizado con el juego(por ejemplo: distancia del huevo,frecuencia de aparición, rango de distancia, etc).

Finalmente determinamos que nuestra página está dirigida principalmente a jugadores principiantes y seguidores de la serie, que quieran tener información de las capacidades de sus pokemon, teniendo una interfaz sencilla que le permita conocer los tipos de pokemon existentes y de ver las debilidades de cada uno, además de poder filtrar de acuerdo a las categorías ya mencionadas. También, como facilitador de búsqueda, se incluyó un selector que permite al usuario ordenar de forma alfabética y numérica de forma ascendente y descendente. Como otro punto se pensó en el uso de modales para mostrar información más específica de cada pokemon y no saturar visualmente la página principal.

### **2.- Historias de usuario** (Una vez que entiendas las necesidades de tu usuario, escribe las [Historias de Usuario](https://es.wikipedia.org/wiki/Historias_de_usuario) que representen todo lo que el usuario necesita hacer/ver. Asegúrate de incluir una definición de terminado (_definition o done_) para cada una.)

En el siguiente enlace se puede ver la planificación del proyecto y buscar las historias de usuario organizadas mediante el trabajo colaborativo en [Trello](https://trello.com/b/FtpL7G78/pokemon) , o ver en detalle cada historia de usuario a través de estos enlace directos a cada una de ellas puestos en los item inferiores.
- [Historia de usuario 1](https://trello.com/c/5Ssujcum/20-hu-1)
- [Historia de usuario 2](https://trello.com/c/PO4caJLp/21-hu-2)
- [Historia de usuario 3](https://trello.com/c/o4EC464E/22-hu-3)
- [Historia de usuario 4](https://trello.com/c/pBktnNl4/43-hu-4)

### **3.- Diseño de la Interfaz de Usuario**

#### Prototipo de baja fidelidad (Durante tu trabajo deberás haber hecho e iterado sketches (boceto) de tu solución usando papel y lápiz. Te recomendamos tomar fotos de todas las iteraciones que realices, y las subas a tu repositorio, y las menciones en tu `README.md`).

Dentro del proceso creamos _**prototipos de baja fidelidad**_, donde se tomaron los puntos principales obtenidos a través del cuestionario (realizado durante el estudio del usuario), para ser utilizados en la página con la idea de ayudarlo.

[Fotografía prototipo de baja fidelidad en Drive](https://drive.google.com/open?id=1MjarByTzzLahgDzRsPdHXtEMfL8bg592)

#### Prototipo de alta fidelidad

![Paleta de colores](img/Color-Tool.png)

 Pasamos al _**prototipo de alta fidelidad**_ apoyandonos de la plataforma Figma, *dividido* en 2 partes. El primero en [formato web](https://www.figma.com/proto/UklgZbnbeiRK3uRGfYdwxycz/Pokemon-prototipe?node-id=44%3A1&scaling=min-zoom) con las opciones filtrar (por tipo o debilidad), ordenar (por nombre o número), además de lanzar el cálculo de pokemon débiles a cierto tipo, en el filtro "debilidad".El segundo en [formato móvil](https://www.figma.com/file/dHEHnZKbmbC33I0HEpZOxOSB/App-Pokemon-para-celular?node-id=0%3A1), con la opción de **CALCULAR ENTRE DOS POKEMON**.
Aquí podrás ver los prototipos en [Zeplin](zpl.io/VQvB34m)

#### Testeos de usabilidad (Durante el reto deberás realizar tests de usabilidad con distintos usuarios, y en base a los resultados de esos tests, deberás iterar tus diseños. Cuéntanos qué problemas de usabilidad detectaste a través de los tests y cómo los mejoraste en tu propuesta final).

[Video Test de Usuario en Drive](https://drive.google.com/open?id=1YLESpd8c1876sfjE_PMoM8ctx_t6_vve)

### **4.- Implementación de la Interfaz de Usuario (HTML/CSS/JS)**


<!-- 1. Mostrar la data en una interfaz: puede ser un card, una tabla, una lista, etc.
2. Permitir al usuario filtrar y ordenar la data.
3. Calcular estadísticas de la colección (o subcolección) como media aritmética,
máximo y/o mínimo de algún atributo numérico, o contar cuántas veces aparece
un determinado valor, por ejemplo.
4. Visualizarse sin problemas desde distintos tamaños de pantallas: móviles,
tablets y desktops.

Es importante que tu interfaz, a pesar de ser una versión mínima de tu ideal,
siga los fundamentos de _visual design_. -->


### **5.- Pruebas unitarias**

<!-- El _boilerplate_ de este proyecto no incluye pruebas unitarias, pero esperamos
que escribas tu propias pruebas unitarias para las funciones encargadas de
_procesar_, _filtrar_ y _ordenar_ la data, así como _calcular_ estadísticas.
Para ello te recomendamos implementar las siguientes funciones en el archivo
`src/data.js`:

* `filterData(data, condition)`: esta función `filter` o filtrar recibiría la
data, y nos retornaría aquellos datos que sí cumplan con la condición.

* `sortData(data, sortBy, sortOrder)`: esta función `sort` u ordenar
recibe tres parámetros.
El primer parámetro, `data`, nos entrega los datos.
El segundo parámetro, `sortBy`, nos dice con respecto a cuál de los campos de
la data se quiere ordenar.
El tercer parámetro, `sortOrder`, indica si se quiere ordenar de manera
ascendente o descendente.

* `computeStats(data)`: la función `compute` o calcular, nos permitirá hacer
cálculos estadísticos básicos para ser mostrados de acuerdo a la data
proporcionada.

Estas son ideas de funciones que podrías implementar, pero esto depende de tu
propia implementación.

El archivo `src/data.js` tiene que tener una cobertura del 70% de _statements_
(_sentencias_), _functions_ (_funciones_), _lines_ (_líneas_), y _branches_
(_ramas_).

Estas funciones deben ser [_puras_](https://medium.com/laboratoria-developers/introducci%C3%B3n-a-la-programaci%C3%B3n-funcional-en-javascript-parte-2-funciones-puras-b99e08c2895d)
e independientes del DOM. Estas funciones serán después usadas desde el archivo
`src/main.js`, al cargar la página, y cada vez que el usuario interactúe (click,
filtrado, ordenado, ...). -->


