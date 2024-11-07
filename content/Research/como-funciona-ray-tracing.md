---
title: Como funciona el Ray Tracing
date: 2023-5-12 12:00:00 +0800
tags:
  - research
  - gamedev
  - raytracing
---
## Introducción

En gráficos por computadora 3D, el trazado de rayos es una técnica para modelar el transporte de la luz para su uso en una amplia variedad de algoritmos de renderizado para generar imágenes digitales.

En un espectro de costo computacional y fidelidad visual, las técnicas de renderizado basadas en trazado de rayos (o raytracing), como el lanzamiento de rayos, el trazado de rayos recursivo, el trazado de rayos de distribución, el mapeo de fotones y el trazado de caminos, son generalmente más lentas y tienen una mayor fidelidad que los métodos de renderizado de línea de exploración. Por lo tanto, el trazado de rayos se implementó por primera vez en aplicaciones donde se podía tolerar un tiempo relativamente largo para renderizar, como imágenes generadas por computadora estáticas y efectos visuales (VFX) de cine y televisión, pero era menos adecuado para aplicaciones en tiempo real como videojuegos, donde la velocidad es crítica en la renderización de cada cuadro.

Sin embargo, desde 2019, la aceleración de hardware para trazado de rayos en tiempo real se ha vuelto estándar en nuevas tarjetas gráficas comerciales, y las API de gráficos han seguido el mismo camino, lo que permite a los desarrolladores utilizar el renderizado híbrido de trazado de rayos y rasterización en juegos y otras aplicaciones en tiempo real con un impacto menor en los tiempos de renderización de cuadros.

El trazado de rayos es capaz de simular una variedad de efectos ópticos, como reflexión, refracción, sombras suaves, dispersión, profundidad de campo, desenfoque de movimiento, caustics, oclusión ambiental y fenómenos de dispersión (como aberración cromática). También se puede usar para rastrear el camino de las ondas sonoras de manera similar a las ondas de luz, lo que lo convierte en una opción viable para un diseño de sonido más inmersivo en videojuegos al renderizar reverberación y ecos realistas. De hecho, cualquier fenómeno de onda física o de partícula con movimiento aproximadamente lineal se puede simular con trazado de rayos.

Las técnicas de renderizado basadas en trazado de rayos que implican el muestreo de la luz sobre un dominio generan artefactos de ruido de imagen que se pueden solucionar trazando una cantidad muy grande de rayos o utilizando técnicas de eliminación de ruido.

## Como funciona su Algoritmo

La técnica de trazado de rayos ópticos describe un método para producir imágenes visuales construidas en entornos de gráficos por computadora 3D, con más fotorealismo que las técnicas de ray casting o de renderizado de scanline. Funciona trazando un camino desde un ojo imaginario a través de cada píxel en una pantalla virtual, y calculando el color del objeto visible a través de él.

Las escenas en el trazado de rayos se describen matemáticamente por un programador o por un artista visual (normalmente utilizando herramientas intermedias). Las escenas también pueden incorporar datos de imágenes y modelos capturados por medios como la fotografía digital.

Por lo general, cada rayo debe ser probado para su intersección con algún subconjunto de todos los objetos en la escena. Una vez identificado el objeto más cercano, el algoritmo estimará la luz entrante en el punto de intersección, examinará las propiedades del material del objeto y combinará esta información para calcular el color final del píxel. Ciertos algoritmos de iluminación y materiales reflectantes o translúcidos pueden requerir que se vuelvan a lanzar más rayos en la escena.

Al principio, puede parecer contra intuitivo o "al revés" enviar rayos desde la cámara en lugar de hacia ella (como lo hace la luz real en la realidad), pero hacerlo es mucho más eficiente. Dado que la abrumadora mayoría de los rayos de luz de una fuente de luz dada no llegan directamente al ojo del espectador, una simulación "hacia adelante" podría potencialmente desperdiciar una cantidad tremenda de cálculo en trayectorias de luz que nunca se registran.

Por lo tanto, el atajo tomado en el trazado de rayos es presuponer que un rayo dado interseca el marco de la vista. Después de un número máximo de reflexiones o de que un rayo viaje una cierta distancia sin intersección, el rayo deja de viajar y se actualiza el valor del píxel.

![](https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Ray_trace_diagram.svg/1024px-Ray_trace_diagram.svg.png)

### Como calcular rayos para un viewport rectangular

En la entrada (en el cálculo utilizamos normalización de vectores y producto cruzado):

$ E\in \mathbb {R^{3}} $ eye position


$ T\in \mathbb {R^{3}} $ target position


$ \theta \in [0,\pi] $ field of view - for humans, we can assume ≈ π / 2 rad = 90°



$ m,k\in \mathbb {N} $ numbers of square pixels on viewport vertical and horizontal direction


$ i,j\in \mathbb {N},1\leq i\leq k\land 1\leq j\leq m $ numbers of actual pixel


$ \vec{v}\in \mathbb {R^{3}} $ vertical vector which indicates where is up and down, usually $$ \vec{v}=[0,1,0] $$ (not visible on picture) - roll component which determine viewport rotation around point C (where the axis of rotation is the ET section)


![](https://upload.wikimedia.org/wikipedia/commons/b/b2/RaysViewportSchema.png)

La idea es encontrar la posición de cada centro de píxel de la vista $P_{ij}$, lo que nos permite encontrar la línea que va desde el ojo $E$ a través de ese píxel y finalmente obtener el rayo descrito por el punto $E$ y el vector $\vec{R}{ij}=P{ij}-E$ (o su normalización $\vec{r}{ij}$). Primero, necesitamos encontrar las coordenadas del píxel inferior izquierdo de la vista $P{1m}$ y encontrar el siguiente píxel haciendo un desplazamiento a lo largo de direcciones paralelas a la vista (vectores $\vec{b}_n$ y $\vec{v}n$) multiplicados por el tamaño del píxel. A continuación, se presentan fórmulas que incluyen la distancia $d$ entre el ojo y la vista. Sin embargo, este valor se reducirá durante la normalización del rayo $\vec{r}{ij}$ (por lo que podría aceptarse que $d=1$ y eliminarse de los cálculos).

**Pre-cálculos:**

Encontremos y normalicemos el vector ${\vec{t}}$ y los vectores ${\vec{b}}$ y ${\vec{v}}$ que son paralelos a la vista (todos representados en la imagen de arriba).

${\vec{t}} = T - E$, ${\vec{b}} = {\vec{t}} \times {\vec{v}}$


$\vec{t}_n = \frac{\vec{t}}{\lvert\vec{t}\rvert}$


${\vec{b}}_n = \frac{\vec{b}}{\lvert\vec{b}\rvert}$ 


${\vec{v}}_n = {\vec{t}}_n \times {\vec{b}}_n$


Note que el centro de la vista $C = E + {\vec{t}}_{n}d$.


A continuación, calculamos los tamaños de la vista $h_x$, $h_y$ divididos por 2, incluyendo la relación de aspecto inversa $\frac{m-1}{k-1}$:


$g_x = \frac{h_x}{2} = d \tan{\frac{\theta}{2}}, \qquad g_y = \frac{h_y}{2} = g_x\frac{m-1}{k-1}$


Luego, calculamos los vectores de desplazamiento del siguiente píxel ${\vec{q}}_x$, ${\vec{q}}y$ a lo largo de direcciones paralelas a la vista (${b}$ y ${v}$), y el centro del píxel inferior izquierdo ${\vec{p}}{1m}$:


${\vec{q}}{x} = \frac{2g_x}{k-1}{\vec{b}}{n}, \qquad {\vec{q}}{y} = \frac{2g_y}{m-1}{\vec{v}}{n}, \qquad {\vec{p}}{1m} = {\vec{t}}{n}d - g_x{\vec{b}}{n} - g_y{\vec{v}}{n}$


**Cálculos:**

Ten en cuenta que $P_{ij} = E + {\vec{p}}{ij}$ y que el rayo ${\vec{R}}{ij} = P_{ij} - E = {\vec{p}}_{ij}$, por lo que


${\vec{p}}{ij} = {\vec{p}}{1m} + {\vec{q}}_x(i-1) + {\vec{q}}_y(j-1)$


$\vec{r}{ij} = \frac{\vec{R}{ij}}{\lvert\vec{R}{ij}\rvert} = \frac{\vec{p}{ij}}{\lvert\vec{p}_{ij}\rvert}$


Donde $i$ y $j$ son índices de píxeles, y los valores de $i$ y $j$ varían desde $1$ hasta $k$ y desde $1$ hasta $m$, respectivamente.

> *Kielczewski, K. (n.d.). Fractals [GitHub repository]. Retrieved May 12, 2023, from https://github.com/kamil-kielczewski/fractals*

## Como funciona su implementación en tiempo real

El problema de renderizar gráficos en 3D puede presentarse conceptualmente como encontrar todas las intersecciones entre un conjunto de "primitivas" (generalmente triángulos o polígonos) y un conjunto de "rayos" (generalmente uno o más por píxel).

Hasta el año 2010, todas las tarjetas de aceleración gráfica típicas, llamadas unidades de procesamiento gráfico (GPU), utilizaban algoritmos de rasterización. El algoritmo de trazado de rayos resuelve el problema de renderización de una manera diferente. En cada paso, encuentra todas las intersecciones de un rayo con un conjunto de primitivas relevantes de la escena.

Ambos enfoques tienen sus propios beneficios y desventajas. La rasterización se puede realizar utilizando dispositivos basados en un modelo de cómputo de flujo, un triángulo a la vez, y solo se necesita acceso a la escena completa una vez. La desventaja de la rasterización es que los efectos no locales, necesarios para una simulación precisa de una escena, como reflejos y sombras son difíciles; y las refracciones son casi imposibles de calcular.

El algoritmo de trazado de rayos es inherentemente adecuado para escalar mediante la paralelización de renderizados de rayos individuales. Sin embargo, cualquier cosa que no sea el lanzamiento de rayos requiere la recursión del algoritmo de trazado de rayos (y el acceso aleatorio al gráfico de la escena) para completar su análisis, ya que los rayos reflejados, refractados y dispersos requieren que se vuelvan a acceder varias partes de la escena de una manera no fácilmente predecible. Pero puede calcular fácilmente varios tipos de efectos físicamente correctos, proporcionando una impresión mucho más realista que la rasterización.

La complejidad de un algoritmo de trazado de rayos bien implementado escala de forma logarítmica; esto se debe a que los objetos (triángulos y colecciones de triángulos) se colocan en árboles BSP o estructuras similares, y solo se analizan si un rayo se interseca con el volumen de enlace de la partición binaria.

## Bibliografía

- *Kielczewski, K. (n.d.). Fractals [GitHub repository]. Retrieved May 12, 2023, from https://github.com/kamil-kielczewski/fractals*

- *Wikipedia. (2023). Ray tracing (graphics). En Wikipedia. Recuperado el 12 de mayo de 2023, de https://en.wikipedia.org/wiki/Ray_tracing_(graphics)*

- *Wikipedia. (2021, December 7). Ray-tracing hardware. In Wikipedia. Retrieved 21:14, May 12, 2023, from https://en.wikipedia.org/wiki/Ray-tracing_hardware*

- Binary space partitioning. (n.d.). In Wikipedia. Retrieved May 12, 2023, from https://en.wikipedia.org/wiki/Binary_space_partitioning