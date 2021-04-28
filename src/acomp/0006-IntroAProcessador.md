# Introdução à Arquitectura do processador

![single precision](<./img/ACOMP_IntroducaoArquiteturaProcessador(7).jpg>)
![single precision](<./img/ACOMP_IntroducaoArquiteturaProcessador(8).jpg>)
![single precision](<./img/ACOMP_IntroducaoArquiteturaProcessador(9).jpg>)
![single precision](<./img/ACOMP_IntroducaoArquiteturaProcessador(10).jpg>)

::: details Saber para o teste:

- **Instruction Fetch**: Contem o PC e o banco de memória de instruções.
- **Operand Fetch**: Contem os registos, a ALU e a FP UNIT.
- **Instruction decode**: Onde está a decoder (entra a instrução e saem os sinais associados). Realiza o controlo da execução das instruções no processador, nomeadamente a leitura da instrução do PC e as instruções de controlo de fluxo.
- **Write back**: Contem os MULS, estes selecionam o valor a escrever no REG. Dão suporte às instruções JAL/JALR porque são eles que decidem o próximo passo do processador, desta forma são tambem eles que escrevem de volta nos registos.

:::
