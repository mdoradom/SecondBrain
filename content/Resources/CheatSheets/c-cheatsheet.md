---
title: C Cheatsheet
date: 2022-09-22
tags:
  - cheatsheet
  - C
---
# Hello World

```c
#include <stdio.h>

int main() {
    printf("Hello World!");
}
```

# Comments

```c
// this is a comment
```

# Data type

```c
// type varName = value;

int var = 1;
float;
double;
char;
```

# Constants

```c
const int var = 1;
```

# C Operators

Operator | Example | Same as
-- | -- | --
= |	x = 5 |	x = 5 	
+= |	x += 3 |	x = x + 3 	
-= |	x -= 3 |	x = x - 3 	
*= |	x *= 3 |	x = x * 3 	
/= |	x /= 3 |	x = x / 3 	
%= |	x %= 3 |	x = x % 3 	
&= |	x &= 3 |	x = x & 3 	
|= |	x \|= 3 |	x = x | 3 	
^= |	x ^= 3 |	x = x ^ 3 	
\>>= |	x >>= 3 |	x = x >> 3 	
<<= |	x <<= 3 |	x = x << 3

# if else

## Conditions

- Less than: **a < b**

- Less than or equal to: **a <= b**
 
- Greater than: **a > b**
 
- Greater than or equal to: **a >= b**
 
- Equal to **a == b**
 
- Not Equal to: **a != b**

## Conditionals

- Use **if** to specify a block of code to be executed, if a specified condition is true

- Use **else** to specify a block of code to be executed, if the same condition is false

- Use **else if** to specify a new condition to test, if the first condition is false

- Use **switch** to specify many alternative blocks of code to be executed

```c
if (x > y) {
    // code block
}
```

```c
if (x > y) {
    // code that will be executed if the condition = true
} else {
    // code that will be executed if the condition != true
}
```

```c
if (x > y) {
    // code that will be executed if the condition = true
} else if (y > z) {
    // code that will be executed if the first condition != false and second condition == true
}
```

# Switch

```c
switch(expression) {
    case x:
        // code block
        break;
    case y:
        // code block
        break;
    default:
        // remaining code block
}
```

# While Loop

## While

```c
while (condition) {
    // code block
}
```

## Do/While

```c
do {
    // code block
} while(condition)
```

# For Loop

```c
for (i = 0; i < x; i++) {
    // code block
}
```

# Arrays

## Create a defined Array

```c
// type varName[] = {x, y, z};
int var[] = {1, 2, 3};

printf(var[o]);

// output: 1
```

## Set Array size

```c
int var[4];

var[0] = 1;
var[1] = 2;
var[2] = 3;
var[3] = 4;
```

# Strings

>En C no hay un tipo de variable `String`, solo puedes usar `char` y crear un _array_ de caracteres para hacer una ``String``
{: .prompt-danger }

Esto quiere decir que podemos manipular una ``"String"`` como si fuera un ``Array``

```c
char greetings[] = "Hello World!";
greetings[0] = 'J';
printf("%s", greetings);
// Outputs Jello World! instead of Hello World!
```

Puedes declarar el char como un `Array` o de forma normal, a efectos prácticos es lo mismo:

```c
char greetings[] = {'H', 'e', 'l', 'l', 'o', ' ', 'W', 'o', 'r', 'l', 'd', '!', '\0'};
char greetings2[] = "Hello World!";

printf("%lu\n", sizeof(greetings));   // Outputs 13
printf("%lu\n", sizeof(greetings2));  // Outputs 13
```

# user Input

```c
#include <stdio.h>

int main() {
	// Create an integer variable that will store the number we get from the user
	int myNum;

	// Ask the user to type a number
	printf("Type a number: \n");

	// Get and save the number the user types
	scanf_s("%d", &myNum);

	// Output the number the user typed
	printf("Your number is: %d", myNum);
}
```

> Hay que poner `scanf_s`, no `scanf`, ya que _C_ considera que ``scanf`` ya no es seguro y te obliga a usar la versión segura. XD.
{: .prompt-warning }

# Memory Address

Cuando creas una variable en `C`, se le asigna una dirección de memoria.

La dirección de memoria es la localización donde la variable se almacena en el ordenador.

Cuando asignamos un valor a la variable, es almacenado en esa dirección de memoria.

Para acceder a el, tenemos que usar el operador de referéncia `&`, y el resultado mostrará dónde está almacenada esa variable.

```c
int var = 43;
printf("%p", &var);
```

> La dirección de memoria está en hexadecimal desde `(0x...)`. Probablemente no saldrá el mismo resultado en tu mismo programa
{: .prompt-info}

> ``&var`` es lo que se conoce como un ``"pointer"``. Un pointer basicamente, almacena la dirección de memoria de la variable como su valor. Para mostrar el valor del pointer, usamos el especificador `%p`
{: .prompt-info}

# Crear Pointers

Ahora sabemos que, podemos conseguir la **dirección de memoria** de una variable con el operador `&`:

```c
int myAge = 43; // an int variable

printf("%d", myAge);  // Outputs the value of myAge (43)
printf("%p", &myAge); // Outputs the memory address of myAge (0x7ffe5367e044)
```

# Funciones

```c
// Create a function
void myFunction() {
  printf("I just got executed!");
}

int main() {
  myFunction(); // call the function
  return 0;
}

// Outputs "I just got executed!"
```

## Parámetros de Funciones

```c
void myFunction(char name[]) {
  printf("Hello %s\n", name);
}

int main() {
  myFunction("Liam");
  myFunction("Jenny");
  myFunction("Anja");
  return 0;
}

// Hello Liam
// Hello Jenny
// Hello Anja
```

# Recursividad

>El concepto de recursividad se refiere a una función que se llama a ella misma.
{: .prompt-info}

```c
#include <stdio.h>

int main() {
  int result = sum(10); // llamas a la función
  printf("%d", result);
  return 0;
}

int sum(int k) {
  if (k > 0) {
    return k + sum(k - 1); // vuelves a llamar a la función
  } else {
    return 0;
  }
}

// output 55
```

# C Math Functions

>Para utilizar las funciones de math, tenemos que incluir en el **header del archivo**, la línea de `math.h`
{: .prompt-info}

```c
#include <math.h>
```

## Square Root

```c
printf("%f", sqrt(16));
// output 4.000000
```

## Round a Number

La función ``ceil()`` redondea un número hacia arriba a su entero más cercano, y el método ``floor()`` redondea un número hacia abajo a su entero más cercano y devuelve el resultado:

```c
printf("%f", ceil(1.4));
printf("%f", floor(1.4));

// output 2.000000
// output 1.000000
```

## Power

```c
printf("%f", pow(4, 3));
// output 64.000000
```

## Otros

Funtion | Description
-- | --
abs(x) | Returns the absolute value of x
acos(x) | Returns the arccosine of x
asin(x) | Returns the arcsine of x
atan(x) | Returns the arctangent of x
cbrt(x) | Returns the cube root of x
cos(x) | Returns the cosine of x
exp(x) | Returns the value of Ex
sin(x) | Returns the sine of x (x is in radians)
tan(x) | Returns the tangent of an angle

# C Estructuras (structs)

**Estructuras** (también llamado **structs**) son un grupo de variables relacionadas en un solo sitio. Cada variable en la estructura se denomina **miembro** de la estructura.

A diferéncia de las _array_, una estructura puede contener diferentes tipos de datos (int, float, char, etc...).

## Crear una Estructura

```c
struct MyStructure {   // Structure declaration
  int myNum;           // Member (int variable)
  char myLetter;       // Member (char variable)
}; // End the structure with a semicolon
```

## Acceder a una Estructura

```c
struct myStructure {
  int myNum;
  char myLetter;
};

int main() {
  struct myStructure s1;
  return 0;
} 
```

_TODO_
