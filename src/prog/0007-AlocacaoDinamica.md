# 7- Alocação Dinâmica de Memória

## Estrutura de Memória de um Programa em C:

A estrutura de memória de um programa em C encontra-se organizada em vários segmentos com as seguintes designações e características:

- **Text/Code Segment**: Neste segmento encontra-se o código máquina do programa compilado. Este segmento deve ter acesso tipicamente só de leitura para evitar que o programa seja destruído ou acidentalmente modificado.
- **Intialized Data Segment (Data Segment)**: Neste segmento, são guardadas todas as variáveis globais, estáticas (static), constantes, (constant) e variáveis externas(extern) inicializadas. Este segmento tem secções de acesso para escrita e leitura, e de acesso só para leitura (caso das variáveis declaradas como const).
- **Uninitialized Data Segment (bss - “block started by symbol” ):** Neste segmento, armazenam-se todas as variáveis globais e estáticas inicializadas a 0 ou não inicializadas.
Stack Segment: Este segmento é utilizado para guardar todas as variáveis locais, para passar os argumentos para funções e para guardar o endereço de retorno. O Stack tem um acesso do tipo LIFO, i.e., Last In First Out.
- **Heap Segment**: Neste segmento, é onde se realiza a alocação dinâmica de memória.

![./img/img58.png](./img/img58.png)

A utilização do comando size permite determinar o espaço ocupado pelo programa ao nível dos 3 segmentos (texto, data e bss).

![./img/img59.png](./img/img59.png)

A gestão de memória na execução de um programa deve ser feita de forma eficiente.
• **Alocação Estática**: A reserva de espaço de memória por definição da dimensão das variáveis durante a fase de programação designa-se por alocação estática uma vez que não é alterada durante a fase de execução.
• **Alocação Dinâmica:** A reserva de espaço de memória durante a execução do programa em função da execução designa-se por alocação dinâmica e requer a utilização de apontadores para a zona de memória alocada. 

A **alocação dinâmica** permite uma gestão mais eficiente da memória uma vez que  apenas se precisa de manter alocada a memória estritamente necessária e toda a  restante pode ser libertada.

![./img/img60.png](./img/img60.png)

## void *calloc(int num, int size);

## void free(void *address);

## void *malloc(int num);

A função `malloc()`

## void *realloc(void *address, int newsize);