# Problemas 2

### Exercicio 1 - By Tomás Martins

::: details Resolução

```c
#include <stdio.h>
#include <stdlib.h>

int main()
{
    int num1, num2 = 1, soma = 0, media = 0;
    printf("Escolha um numero: ");
    scanf("%d", &num1);
    printf("os divisores de %d sao: \n", num1);
    while(num2 <= num1){
       if(num1%num2 == 0){
        printf("%d\n", num1 / num2);
        soma += num2;
        media++;
        num2++;
       }else{
            num2++;
       }
    }
    printf("\na media e: %.3lf", (float)soma/media);
    return 0;
}
```
:::

### Exercicio 2 - By Tomás Martins

::: details Resolução

```c
#include <stdio.h>
#include <stdlib.h>

int main()
{
    printf("quantos dias tem um certo mes?\n");
    int mes;
    do{
    printf("Escolha um numero entre 1 e 12: ");
    scanf("%d", &mes);
    switch(mes){ 
        case 1 : case 3 : case 5 : case 7 : case 8 : case 10: 
        case 12:  printf("31 dias\n");
        break; case 4 : case 6 : case 9 :
        case 11: printf("30 dias\n");
        break; case 2: printf("29 dias\n");break;
        default :
            printf("invalid number");
    }
    }while(mes>= 1 && mes<=12);
    return 0;
}
```
:::

### Exercicio 3 - By Tomás Martins

::: details Resolução

```c
#include <stdio.h>
#include <stdlib.h>

int main()
{
    int num1, i, count, mark=1;
    printf("Insira a altura do triangulo: ");
    scanf("%d", &num1);
    for(count = 0; count < num1; count++){
        for(i=0; i <= num1 && i != mark; i++){
            printf("* ");
            }
        printf("\n");
        mark++;
    }
    mark = num1;
    for(count = 0; count < num1; count++){
        for(i = 1; i <= num1 && i !=mark; i++){
            printf("* ");
        }
        mark--;
        printf("\n");
    }
    return 0;
}
```
:::

### Exercicio 4 - By Tomás Martins

::: details Resolução

```c
#include <stdio.h>
#include <stdlib.h>

int main()
{
    char c;
    while(c = getchar()){
        printf("%c", toupper(c));
        if(c == '\n'){
            break;
        }
    }
    return 0;
}
```
:::

### Exercicio 5 - By Tomás Martins

::: details Resolução

```c
#include <stdio.h>
#include <stdlib.h>

int eprimo(int num1){
        int conta, i;
        for(i = 2; i <= num1; i++){
            conta = num1%i;
                if(conta == 0){
                    if (i == num1){
                    return 1;
                }else{
                    return 0;
                    }
                }
        }
        if(i == 1){
            return 1;
        }
}

int main(){
    int a, b;
    for(a = 1; a <= 998; a++){
        b = a + 2;
            if(eprimo(a) == 1 && eprimo(b) == 1){
            printf("%d\t%d\n", a, b);
            }
    }
    return 0;
}
```
:::

### Exercicio 6 - By Tomás Martins

::: details Resolução

```c
#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int main(int argc, char *argv[])
{
    int m, M, n, i, number[10], r, x, j, count, p, t;
    char c;

    n = atoi(argv[2]);
    m = atoi(argv[4]);
    M = atoi(argv[6]);
    if(!strcmp(argv[7],"-R"))
       c = 'R';
       else if(!strcmp(argv[7],"-r"))
        c = 'r';
        else{
            printf("Invalid letter");
        }

    srand(time(NULL));

    if(n <= 10){
        for(count=0;count<10;count++){
            number[count]=(rand() % (m - M + 1))+m;
        }
        switch(c){
        case 'r':
            while(i<10){
                j = (rand() % (m - M + 1))+m;
                for (x = 0; x < i; x++){
                    if(number[x]==j){
                        break;
                    }
                }
                if(x==i){
                    number[i++]=j;
                }
            }
            break;
        case 'R':
            break;
        }
    }

    for(p=0;p<10;p++){
        printf("%d ", number[p]);
    }
    return 0;
}
```
:::