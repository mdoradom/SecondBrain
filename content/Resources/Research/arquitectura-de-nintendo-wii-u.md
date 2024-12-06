---
title: Arquitectura de la Nintendo Wii U
date: 2023-5-12 12:00:00 +0800
tags:
  - research
  - gamedev
draft: true
---
# Descripción de la consola y Contexto

A finales del año 2012 Nintendo sacaba al mercado la Wii U, una nueva consola que agotaría existencias en su primer lanzamiento en Estados Unidos y Japón, y que despertaría un gran interés al ser la nueva apuesta de la empresa después de su éxito mundial en 2006 con la Wii.

La Nintendo Wii U se compone de una consola y un mando inalámbrico con pantalla táctil integrada que pretendía aportar nuevas e innovadoras experiencias de juego, como por ejemplo la opción de pasar el juego de la TV al mando con pantalla sin cortar la partida. Encontramos dos piezas principales: la consola en forma rectangular y de diseño horizontal, que contaba con un lector de discos ópticos de alta densidad de 12 cm en la parte frontal, y con sus puertos para salidas de audio y vídeo en la parte posterior. Venía incluido también un mando adicional, el Wii U GamePad: un mando de forma rectangular con pantalla táctil incorporada, micrófono, cámara y giroscopio, que pretendía aportar un soplo de innovación al mundo de las consolas de sobremesa.
Además, la consola ofrecía retrocompatibilidad con su predecesora, la Wii: permitía usar accesorios lanzados previamente y diseñados para la consola Wii, así como juegos anteriores.

También ofrecía la posibilidad de compra de mandos complementarios al Wii U GamePad, de diseño tradicional para ofrecer una experiencia multijugador.

# Fecha de lanzamiento

La Nintendo Wii U fue lanzada al mercado Norteamericano el 18 de noviembre de 2012 después de su respectivo anuncio por parte de la compañía, así como una gran campaña de marketing para introducir el concepto del novedoso Wii U GamePad. Al tratarse de la sucesora de la consola Wii se había creado una gran expectativa.

En Europa, se puso a la venta el 30 de noviembre, mientras que en Japón se hizo el 8 de diciembre de ese mismo año.
A pesar del rumbo de sus ventas, la compañía nipona no dejó de fabricarla hasta el año 2017, en el que decidieron dejar esa etapa atrás para centrarse en su próximo lanzamiento (Nintendo Switch).

# Coste y Ventas

A pesar de su prometedor lanzamiento, el rendimiento en ventas de la consola fue decepcionante, considerado para muchos un fracaso.
Durante los primeros meses posteriores al lanzamiento, la Nintendo Wii U obtuvo un buen comienzo con unos números bastante decentes de ventas, lo que podría ser indicativo de unos buenos resultados en el futuro. Lamentablemente, con el tiempo empezó a perder terreno, y finalmente las ventas disminuyeron en picado cuando la competencia lanzó sus respectivas consolas de próxima generación: la PlayStation 4 y la Xbox One.

En el lanzamiento, se puso a la venta la Wii U por un precio de 261€ (pack básico), un precio bastante competitivo y asequible. También ofrecían un pack Premium que añadía unos soportes extra y un cargador para el mando por 314€.
En su primera semana después del lanzamiento en estados Unidos, la compañía japonesa superó unas ventas de 400.000 unidades, agotando prácticamente el stock en la mayoría de tiendas. Como hemos comentado, parecía un buen indicativo, aunque seguía sin superar a su predecesora, la Wii, que consiguió una cifra de ventas de 600.000 unidades en su primera semana.
A pesar de los buenos inicios y de aportar varias exclusivas en juegos, Nintendo solo conseguiría colocar una cifra de 13,5 millones de unidades, un número bastante más pequeño que el éxito previo de Wii (más de 100M unidades).

Nintendo supo aprender de sus errores y corregirlos para el lanzamiento de su consola posterior, así como utilizar y aprovechar los puntos fuertes de la Wii U y de los videojuegos lanzados con esta, e incorporar algunos de estos a la Switch.

# Componentes

![](https://www.copetti.org/images/consoles/wiiu/motherboard.04c5d73df8daa4e56758f3fa6ba8f1501712a1740ed816d60eb8b0a096decc83.png)

![](https://www.copetti.org/images/consoles/wiiu/motherboard_marked.d043f77d424842b5c73a31c44de79c5ba7b2e1956da94bd69e0609a14b9a2cdd.png)

![](https://www.copetti.org/images/consoles/wiiu/diagram.946ed078441fc37de399090a4206e0b116354f46b9625f1db521da66866fcecf.png)

## Procesador

El procesador que encontramos en la Wii U es un chip multinúcleo fabricado por IBM, llamado “Espresso”.

### Características

* **Arquitectura:** El procesador Espresso está basado en la arquitectura PowerPC de IBM, que es una arquitectura de procesador de 64 bits que se utiliza en sistemas de alta gama como servidores y supercomputadoras. Aunque el Espresso en sí mismo es un chip de 32 bits.

* **Velocidad de reloj:** Cada núcleo del procesador Espresso funciona a una velocidad de reloj de 1.24 GHz.

* **Caché:** El procesador Espresso cuenta con un caché L1 de 32 KB por núcleo y una caché L2 de 2 MB compartido entre los tres núcleos.

* **Tecnología de fabricación:** El procesador Espresso está fabricado con tecnología de 45 nanómetros.

* **Rendimiento:** Según las pruebas de rendimiento realizadas, el procesador Espresso de la Wii U es capaz de ofrecer un rendimiento similar al de una consola Xbox 360 o PlayStation 3 de la misma época.

* **TDP:** El TDP (Thermal Design Power) del procesador Espresso es de alrededor de 35 vatios, lo que significa que es relativamente eficiente en términos de consumo de energía.

### Tamaño del bus

El PowerPC 601 presentaba un protocolo de bus llamado bus 60x. Esto era bastante avanzado y flexible para la época, ya que admitía operaciones de 64 bits.

![](https://www.copetti.org/images/consoles/wiiu/espresso/cores.9e614f14d34c212eabf0bd440192b27bbf763f5c8f12bd908a9b3e0ce7ece80f.png)

### Coprocesadores

La Wii U tiene varios coprocesadores que trabajan junto con el procesador principal para ayudar a manejar tareas específicas y mejorar el rendimiento general de la consola:

* **Coprocesador gráfico:** La Wii U cuenta con un chip gráfico personalizado de AMD conocido como "Latte". Este chip se encarga de manejar la mayoría de las tareas gráficas de la consola, como renderizar imágenes y videos en 3D, y proporciona una salida de vídeo de alta definición a través de la conexión HDMI.

* **Coprocesador de audio:** La Wii U también tiene un coprocesador de audio dedicado que se encarga de procesar y reproducir el sonido de los juegos y otras aplicaciones.

* **Coprocesador de seguridad:** La Wii U está equipada con un coprocesador de seguridad conocido como "Starbuck". Este chip se encarga de gestionar el cifrado y la protección de los datos de la consola, y ayuda a prevenir la piratería y otros tipos de manipulación no autorizada.

* **Coprocesador de comunicaciones inalámbricas:** La Wii U también tiene un chip dedicado para gestionar las conexiones inalámbricas, como el Wi-Fi y Bluetooth.

* **Coprocesador de entrada/salida (I/O):** Este coprocesador se encarga de gestionar la entrada y salida de datos a través de los diferentes puertos y dispositivos de la consola, como el GamePad, los puertos USB y los lectores de tarjetas.

* **Coprocesador de movimiento:** La Wii U también tiene un coprocesador de movimiento conocido como "Café2D". Este chip se encarga de gestionar el reconocimiento de movimiento y la entrada de los sensores de movimiento de la consola, como el acelerómetro y el giroscopio.

## Memoria

La Wii U cuenta con tres posibles lugares en los cuales almacenar datos volátiles.

* Un chunk considerable de 2GB de SDRAM DDR2 llamado MEM2.

* Un bloque más pequeño de 32MB de EDRAM llamado MEM1.

* Un bloque aún más pequeño de 3MB de 1t-SRAM llamado MEM0.

![](https://www.copetti.org/images/consoles/wiiu/espresso/memory.22ea5058d7827b7946e23361bf0ce849a33f23a394f71c629d708e08076c99a9.png)

¿Por qué hay tantos bloques de memorias repartidos en la consola? La respuesta es simple, MEM1 y MEM0 son herencia de las consolas Wii y GameCube, Nintendo decidió reutilizar esas partes de la arquitectura de sus anteriores consolas, ampliando ligeramente MEM1.

Desde el punto de vista del desarrollador, solo son accesibles MEM2 y MEM1 (los dos bloques de memoria más grandes). Los 2 GB de DDR3 pueden contener cualquier tipo de datos (suministrando CPU y GPU), mientras que los otros dos tienen funciones más limitadas. MEM1 se usa para datos gráficos y MEM0 es usado por el sistema operativo.

### ¿GDDR3 o DDR3?

La vieja Wii empleaba memoria GDDR3, que es particularmente rápida para operaciones gráficas. La elección de Wii U no solo es más grande, sino que también presenta un nuevo tipo llamado DDR3 (sin la 'G' al principio). ¿Significa esto que la Wii U ha sido empeorada? Es bastante confuso, pero no.

La memoria GDDR3 es una versión mejorada de DDR2 para operaciones gráficas. Años más tarde llegó la versión DDR3, que sucede tanto a DDR2 como a GDDR3. Para hacer las cosas más desconcertantes, las siguientes GDDR4 y GDDR5 son mejoras sobre DDR3.

La nomenclatura es engañosa. Pero no perdamos el foco, la Wii U emplea DDR3 y eso significa un mayor ancho de banda en comparación con la GDDR3 de la Wii.

La velocidad de reloj de esta memoria DDR3 era de unos 1600Mhz, lo cual es una velocidad relativamente alta para una consola.

### Jerarquía

La Wii U tiene un total de 64KB de caché L1 para cada núcleo del procesador (al igual que la Wii y GameCube).

Dos de los núcleos cuentan con 512KB de caché L2 y uno de ellos cuenta con la friolera de 2MB de L2, que en realidad no significa que haya 2,5MB de caché "practica", ya que es posible que diferentes núcleos necesiten almacenar en caché la misma parte de RAM, algo que no sucedería si compartieran la caché (como la caché de la Xbox 360).

Todas las cachés L2 del Espresso, son asociativas de 4 vías. Comparación con otras cachés asociativas de 8 vías como la de Xenon o Cell que, en el caso de Xenon, está destinado a aliviar el estrés de los 3 núcleos que compiten por 1MB de L2 compartido. En el caso de Espresso, la iteración a través de asociaciones de caché lleva menos tiempo, pero conlleva errores de caché más frecuentes.

Para manejar la coherencia entre los 3 bloques de caché L2 independientes, la interfaz del bus interna de Espresso utiliza el protocolo [MERSI](https://en.wikipedia.org/wiki/MERSI_protocol) (igual que Cell y Xenon).

![](https://www.copetti.org/images/consoles/wiiu/espresso/espresso.add469b7e627cb2a1aa292b687af9d3e5eacdf5f194fd6e0ad034aee2cfdfec7.png)

Contamos con una caché más en el sistema, la cual se encuentra en la GPU. Tiene un tamaño de 32MB y se utiliza para reducir el tiempo de acceso a la memoria principal.

![](https://www.copetti.org/images/consoles/wiiu/gpu/gpu_content.29a4b22afb8007942eafd00be46fcf427edf15eaf2ede97de3c3075fbd4cf2ff.png)

## Almacenamiento

Vamos a ver todas las opciones de almacenamiento que nos brinda la Wii U:

* **Boot ROMs:**

La sexta generación consolidó el concepto de un sistema operativo en una consola de videojuegos. Sin embargo, el dispositivo todavía estaba expuesto a las vulnerabilidades resultantes de la combinación de componentes listos para usar con los internos. Como los fabricantes de consolas no podían adaptar el diseño de los chips de terceros, los componentes de seguridad personalizados tenían que residir en ubicaciones separadas dentro de la placa base, por lo que estaban expuestos a la manipulación y la ingeniería inversa.

Con la séptima generación, IBM presentó una nueva gama de procesadores PowerPC que incorporaba una ROM de máscara oculta dentro del silicio. Esto permitió que PlayStation 3 y Xbox 360 albergaran código confidencial en forma simple (ya que las CPU solo entienden código sin cifrar) sin temor a que los piratas informáticos los lean. Dicho esto, ahora es el turno de la Wii U, por lo que IBM también tenía algo preparado para ella: dentro de Espresso, hay una ROM oculta de 16 KB conectada a uno de los núcleos. Esto se usa como la primera etapa de arranque de Espresso y, una vez que se ejecuta, se asegura de que Nintendo apruebe los archivos binarios posteriores.

Combinado esto con los 4 KB de Boot ROM de Starbuck (heredados del modelo anterior de Wii), tienes dos CPU que aplican el modelo de seguridad de Nintendo tan pronto como se inician.

* **ROMs sensibles:**

Nintendo también incluyó otras ROM repartidas por Latte que contenían información muy confidencial.

El primero es 1 KB de memoria programable por única vez (OTP) donde se almacenan muchas claves de cifrado. Esta memoria también se encontraba en la Wii pero en un tamaño más pequeño (128 Bytes). OTP almacena la información utilizada para cifrar/descifrar datos y verificar la integridad de los datos existentes. También almacena indicadores para habilitar/deshabilitar la funcionalidad de bajo nivel de la placa base (es decir, JTAG). Además, OTP está segregado entre el banco de Espresso y el de Starbuck, ya que ambos necesitarán leer claves diferentes y, posteriormente, bloquear el acceso a OTP en diferentes momentos.

El segundo es de 512 bytes de SPI EEPROM (SEEPROM) que se puede escribir (aunque no se edita en su totalidad) y alberga muchas flags de configuración y metadatos varios. Algunos datos en SEEPROM están encriptados con claves que se encuentran en la memoria OTP.

* **NAND diversificadas:**

Habiendo hablado sobre la parte de bajo nivel del sistema, echemos un vistazo ahora a dónde se almacena la parte "visible". Hay dos espacios de almacenamiento que se encuentran en la placa base:

En primer lugar, tenemos 1 GB de NAND dividido en dos bancos:

* Los primeros 512 MB almacenan el sistema operativo de Wii U (later-stage bootloaders y Cafe OS).

* Los segundos 512 MB albergan el software que conforma el sistema operativo de Wii (menú del sistema, ranuras y canales de IOS), excepto los cargadores de arranque originales.

![](https://i.imgur.com/4vRtnAN.jpg)

En segundo lugar, contamos con 8GB o 32GB de MultiMediaCard integrada (eMMC), según el modelo de la consola. Esta memoria está disponible solo para datos de usuario (juegos descargados, DLCs y actualizaciones de juegos).

![](https://i.imgur.com/Xt48nx5.jpeg)

* **Almacenamiento Extra:**

La Wii U cuenta con soporte para almacenamiento externo vía USB. La única limitación que tiene es que el dispositivo en cuestión tiene que ser previamente formateado utilizado el sistema de archivos patentado de Wii U y solo puede almacenar los datos de usuario.

Los puertos USB de la consola solo emiten hasta 500mA de corriente, lo que, irónicamente, no es suficiente para los discos duros USB típicos (los cuales necesitan alrededor de 900mA). Los usuarios en su día tenían que recurrir a combinar los dos puertos USB para suplir la demanda energética de los discos.

![](https://i.imgur.com/gJFa0vc.png)

También cuenta con una ranura para tarjetas SD, pero solo es aprovechada por ciertos programas y juegos que almacenan multimedia intercambiable (como imágenes). En caso de las tarjetas SD, es compatible con FAT32, así que no es necesario formatearla.

## Otros dispositivos

* **Wii U GamePad:** Es el controlador principal de la Wii U, que cuenta con una pantalla táctil incorporada y un micrófono. El GamePad también tiene una cámara y un giroscopio incorporados, lo que permite usarlo como una vista en primera persona en ciertos juegos.

![](https://i.imgur.com/Pacgyfz.png)

* **Wii U Pro Controller:** Es un controlador de juegos opcional que se asemeja a un controlador de consola tradicional, con dos joysticks y botones de acción.

![](https://i.imgur.com/0q3vwoW.png)

* **Sensor Bar:** Es un dispositivo que se coloca encima o debajo de la televisión y que ayuda a detectar el movimiento de los controles remotos de la Wii y Wii U.

![](https://i.imgur.com/eP6bhm2.png)

* **Wii Remote:** Es el controlador de movimiento principal de la Wii, pero también es compatible con la Wii U. Tiene una variedad de sensores incorporados, como un acelerómetro y un sensor de infrarrojos.

![](https://i.imgur.com/QBArCmo.png)

* **Wii U Proximity Sensor:** Es un sensor que detecta la proximidad del GamePad a la consola y ajusta la potencia de transmisión de la señal inalámbrica para ahorrar energía.

![](https://i.imgur.com/dPSK2pQ.png)

* **Adaptador de corriente:** Es el dispositivo que suministra energía a la Wii U.

![](https://i.imgur.com/ijyWmbF.png)

# Comparativa con el PC de la época y PC actual

| Característica | Wii U (2012) | PC de 2012 | PC de 2023 |
| --- | --- | --- | --- |
| CPU | Procesador de 3 núcleos IBM a 1,24 GHz | Intel Core i7 3770K 4 núcleos a 3,5 GHz | AMD Ryzen 7 5800X 16 núcleos a 4,7 GHz |
| GPU | AMD Radeon HD personalizada | NVIDIA GeForce GTX 660 | NVIDIA GeForce RTX 4080 |
| RAM | 2 GB | 8 GB DDR3 | 32 GB DDR4 |
| Almacenamiento | 8 GB o 32 GB de memoria interna; compatible con dispositivos de almacenamiento externos | Disco duro de 1 TB | Unidad de estado sólido (SSD) de 2 TB |
| Precio | 299€ para la versión de 8 GB, 349€ para la versión de 32 GB | 800€ para un sistema de nivel de entrada | 2.500€ para un sistema de gama alta |

# Referencias

Zahumenszky, C. (2012, 19 noviembre). Nintendo Wii U. Xataka. https://www.xataka.com/videojuegos/nintendo-wii-u-1

Hardware de Wii U. (s. f.). Eurogamer. https://www.eurogamer.es/nintendo-detalla-el-hardware-de-wii-u

Omer, N. (2012, 2 septiembre). Nintendo Wii U características de la nueva consola de juegos. Infonucleo.com. https://www.infonucleo.com/nintendo-wii-u-caracteristicas-de-la-nueva-consola-de-juegos/

Omer, N. (2012, 2 septiembre). Nintendo Wii U características de la nueva consola de juegos. Infonucleo.com. https://www.infonucleo.com/nintendo-wii-u-caracteristicas-de-la-nueva-consola-de-juegos/

Martí, A. (2017, 31 julio). Adiós, Wii U: la historia de la consola que dio a Nintendo más penas que gloria. Xataka. https://www.xataka.com/videojuegos/adios-wii-u-la-historia-de-la-consola-que-dio-a-nintendo-mas-penas-que-gloria

Candil, D. (2011, 8 junio). Nintendo Wii U. Vidaextra. https://www.vidaextra.com/wii-u/nintendo-wii-u