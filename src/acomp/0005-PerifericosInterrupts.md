# Periféricos e Interrupções

Um periférico é um conjunto de registos, periféricos diferentes têm registos diferentes. Os registos do periférico são diferentes dos registos do processador.

![single precision](<./img/ACOMP_IntroducaoArquiteturaProcessador(1).jpg>)

Os registos dos periféricos são mapeados numa gama de endereços específica.
Para aceder aos dados na memória utilizamos as instruções convencionais: **lw** e **sw**, mas para realizar a leitura/escrita de dados no periféricos existem instruções específicas:

    iolw Xn, xpto -> leitura do registo com o endereço xpto

    iosw Xn, xpto -> escrita no registo

::: details Saber para o teste

- **Port-Mapped I/O**: Barramentos independentes de acesso à memória e aos periféricos

- **Memory-Mapped I/O**: Barramento único para acesso à memória e aos periféricos.

:::

![single precision](<./img/ACOMP_IntroducaoArquiteturaProcessador(2).jpg>)
![single precision](<./img/ACOMP_IntroducaoArquiteturaProcessador(3).jpg>)
![single precision](<./img/ACOMP_IntroducaoArquiteturaProcessador(4).jpg>)
![single precision](<./img/ACOMP_IntroducaoArquiteturaProcessador(5).jpg>)
![single precision](<./img/ACOMP_IntroducaoArquiteturaProcessador(6).jpg>)
