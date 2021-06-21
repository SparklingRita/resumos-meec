# Funções

## Definição Geral

A definição de uma função envolve as seguintes partes:
return_type: return-type indica o tipo de dados devolvido pela função. No caso da função não devolver qualquer valor este tipo é void.
function_name: function_name é o nome da função.
parameters list: parameter_list são o conjunto de argumentos ou parâmetros da função. Uma função pode ter ou não parâmetros.
body_of_the_function: body_of_the_function corresponde ao conjunto de
instruções que descrevem o que a função realiza.

```c
return_type function_name( parameter list ){
	body of the function
}
```

```c
/* function returning the max between two numbers */
int max(int num1, int num2){

	/* local variable declaration */
	int result;

	if (num1 > num2)
		result = num1;
	else
		result = num2;

	return result;
}
```

## Declaração

A declaração da função dá indicação ao compilador do nome da função e de como esta deve ser chamada.
A declaração de uma função envolve as seguintes partes: return_type, **function_name** e **parameters_list**. Na parameter_list é obrigatório incluir os tipos dos parâmetros mas o seu nome é opcional.

```c
return_type function_name( parameter list );
```

```c
int max(int num1, int num2);
```

```c
int max(int, int);
```

Quando **a função está definida num ficheiro diferente**, esta deve ser declarada no topo do ficheiro que a chama.

## Chamada

A chamada a uma função é realizada através do seu nome e caso retorne um valor, esse valor pode ser atribuído a uma variável do tipo correspondente ao valor retornado.

```c
#include <stdio.h>

/* function declaration */
int max(int num1, int num2);

int main () {

	/* local variable definition */
	int a = 100;
	int b = 200;
	int ret;

	/* calling a function to get max value */
	ret = max(a, b);

	printf( "Max value is : %d\n", ret );

	return 0;
}

/* function returning the max be*ween two numbers */
int max(int num1, int num2) {
	/* local variable declaration */
	int result;
	
	if (num1 > num2)
		result = num1;
	else
		result = num2;

	return result;
}
```

## Passagem de Parâmetros

A **passagem de parâmetros** para uma função pode ser **por valor** (o valor do
argumento é copiado para um parâmetro da função, alterações ao valor dentro da função não afectam o valor fora da função) ou **por referência** (é passado o endereço do argumento, alterações ao valor dentro da função afectam o argumento).

### Passagem de Par. por Valor

Este método copia o valor atual de um argumento para a respetiva variável da função. Neste caso, mudanças feitas à variável dentro da função em questão não irão ter qualquer efeito fora desta.

```c
#include <stdio.h>

/* function declaration */
void swap(int x, int y);

int main() {
	/* local variable definition */
	int a = 100;
	int b = 200;

	printf("Before swap, value of a: %d\n", a );
	printf("Before swap, value of b: %d\n", b );

	//calling a function to swap the values
	swap(a, b);

	printf("After swap, value of a : %d\n", a );
	printf("After swap, value of b : %d\n", b);

	return 0;	
}
```

```c
//function definition to swap the values
void swap(int x, int y){

	int temp;

	temp = x;

	temp = x; //save the value of x
	x = y; //colocar y em x
	y = temp; // colocar temp into y

	return;
}
```

### Passagem de Par. por Referência

Este método copia o endereço de um argumento para a variável da função. Dentro desta, o endereço será utilizado para aceder ao valor guardado no endereço em questão e, portanto, mudanças neste irão provocar a alteração do valor para todo o programa e não só dentro esta função.

```c
#include <stdio.h>

/* function declaration */
void swap(int *x, int *y);

int main (){
	
	/* local variable definition */
	int a = 100;
	int b = 200;

	printf("Before swap, value of a: %d\n", a );
	printf("Before swap, value of b: %d\n", b );

	/*calling a function to swap the values.
		* &a indicates pointer to a ie. address of variable a and
		* &b indicates pointer to b ie. address of variable b.
	*/
	swap(&a, &b);

	printf("After swap, value of a : %d\n", a );
	printf("After swap, value of b : %d\n", b);

	return 0;	
	}
```

```c
/* function definition to swap the values */
void swap(int *x, int *y) {

	int temp;
	int temp = *x; // save the value at address x
	*x = *y // put y into x
	*y = temp; // put temp int y

	return;
}
```

## Recursividade

A recursividade corresponde a uma função se chamar si própria, o que é muito útil, por exemplo, na implementação de funções matemáticas. A **definição de uma condição de saída é fundamental** para evitar que a execução resulte num ciclo infinito de chamadas à função.

```c
void recursion() {
	recursion(); //function calls itself
}

int main() {
	recursion();
}
```

## Variáveis Globais e Var. Locais

**Variáveis Globais**: Definem-se fora de todas as funções.
**Variáveis Locais**: Definem-se numa função ou bloco. As variáveis locais não são conhecidas pelo programa fora da função onde estão definidas. O valor das variáveis locais sobrepõe-se ao das variáveis globais.

    Nota
    As variáveis locais não são inicializadas pelo sistema (é boa prática inicializar sempre as variáveis). As variáveis globais são inicializadas com os seguintes valores:

## Função time( ) da time.h

**time_t time**(time_t *seconds): A função time() retorna o tempo decorrido desde 1 Jan 1970 medido em segundos. A função retorna um valor do tipo time_t (definido para armazenar valores de tempo).
**CLOCKS_PER_SEC**: CLOCKS_PER_SEC é uma macro correspondente ao número de ciclos de relógio do processador por segundo.

    NOTA
    A função time( ) faz parte da biblioteca standard do C time.h

## Funções rand( ) e srand( ) da stdlib.h

**int rand(void)**: A função rand() retorna um número aleatório entre 0 e RAND_MAX.
**void srand()**: a função srand() permite definir o ponto de inicio da sequência pseudoaleatória gerada por rand()
**RAND_MAX**: RAND_MAX é uma macro correspondente ao valor máximo da função rand( )

    NOTA
    As funções rand( ) e srand(  ) fazem parte da biblioteca standard do C stdlib.h
