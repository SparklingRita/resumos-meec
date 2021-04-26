---
title: Resumos MEEC
description: Site comunitário para resumos do curso de MEEC
---

# ![IST Logo](./IST_Logo.png) Resumos MEEC

## Introdução

Bem vindos ao site comunitário de resumos de MEEC.  
Criado por um grupo de alunos gostosos e baseado
no site de LEIC-A.

## Contribuidores 💛

- [João Gonçalves](https://github.com/SparklingRita/resumos-meec/commits?author=eusouojoao)
- [João Rodrigues](https://github.com/SparklingRita/resumos-meec/commits?author=Joao-Ex-Machina)
- [Madalena Barros](https://github.com/SparklingRita/resumos-meec/commits?author=madalenarb)
- [Martim Bento](https://github.com/SparklingRita/resumos-meec/commits?author=G05B3)
- [Rafaela Oliveira](https://github.com/SparklingRita/resumos-meec/commits?author=rafaelacorreiaoliveira)
- [Rita Mendes](https://github.com/SparklingRita/resumos-meec/commits?author=SparklingRita)
- [Rodrigo Coimbra](https://github.com/SparklingRita/resumos-meec/commits?author=RodsCoimbra)
- [Rui Oliveira](https://github.com/SparklingRita/resumos-meec/commits?author=rui-star)
- [Tomás Martins](https://github.com/SparklingRita/resumos-meec/commits?author=tomasmartins77)

## Como Contribuir

### Instalar Ferramentas

Para correr o código localmente, é necessário instalar as seguintes ferramentas: `git` e `nodejs`.

### Verificar se já tens o nodejs instalado e atualizado

```bash
npm -v  #verifica se tens o npm instalado e mostra-te a versao
npm i -g npm #atualizar para a versao mais recente (7.--)
```

### Se ainda precisares de Instalar:

#### Windows

1. Fazer [download do `git`](http://git-scm.com/) e instalar o executável.
2. Fazer [download do `node`](https://nodejs.org/en/) e instalar a última versão LTS (à data, 14.X LTS).

#### Linux

1. Instalar o `git` e o `node` pelo package manager da distribuição. Atenção que o `node` em Debian/Ubuntu/etc está desatualizado.
   Recomendo seguir [este tutorial](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-20-04#option-3-%E2%80%94-installing-node-using-the-node-version-manager) para ter o Node 14 LTS.

### Contribuir

1. Fazer fork do repositório no GitHub, clickar no botão "Fork" no canto superior direito;

2. Fazer clone da vossa fork:

```bash
git clone https://github.com/<vosso username do github>/resumos-meec.git
```

3. Dar setup do remote upstream

```bash
cd resumos-meec #ir para a pasta certa
git remote add upstream https://github.com/SparklingRita/resumos-meec.git
```

4. Instalar dependências

```bash
npm i
```

### Alterar conteúdos

::: warning
Antes de alterar qualquer conteúdo, deves criar um novo `branch` apenas para essa alteração.
Não deves repetir nomes de branches.

Para o fazer no VSCode, faz `Ctrl+Shift+P` , seleciona **Git: Create Branch From** , depois dá um nome (ex: `acomp-aula1`) e seleciona `main`.

Para fazer o mesmo, mas pelo terminal, é necessário o comando:

```bash
git checkout -b nome-do-branch
```

:::

Para contribuires com os teus próprios resumos, precisas de editar os ficheiros `.md` (ficheiros markdown) que estão na pasta `src`.  
Para alterar os links na sidebar, é necessário alterar o ficheiro `src/.vuepress/config.js` para o respetivo tema/título da matéria.  
Se nunca trabalhaste com esta linguagem, tens [aqui](https://www.markdownguide.org/basic-syntax) um guia para te ajudar, é bastante simples.
Para equações matemáticas, usa-se KateX (semelhante ao LateX), se precisarem de ajuda, está [aqui](https://katex.org/docs/supported.html) um guia.

Para iniciar o servidor local, para ver como ficou, correr o comando:

```bash
npm run dev
```

### Últimos passos

Já está praticamente tudo feito, basta fazer `commit` e `push` pela interface do VSCode, ou então, pelo terminal:

```bash
git add .
git commit -m "mensagem"
git push
```

::: tip
Se forem ao site e ainda não estiver lá, não se preocupem, demora algum tempo.
Só serão aceites resumos que realmente acrescentem algo, para que não haja repetição de conteúdos.
Agradecemos todas as contribuições :)
:::

### Para as próximas vezes

Caso seja a primeira vez que estão a contribuir, este passo não é necessário, só precisarão para as próximas contribuições.
Antes de voltar a fazer alterações, tem de ser necessário atualizar a `fork`, para isso, têm de voltar para o `branch main`, fazer `pull` do upstream e `push` para o origin:

```bash
git checkout main
git pull upstream main
git push
```

A partir daqui, é criar um novo branch e fazer as alterações, tal como da última vez.

### Abrir um Pull-Request no GitHub

Para podermos adicionar os vossos resumos ao site, é preciso criarem um pull request no GitHub, para isso, basta irem a [este link](https://github.com/SparklingRita/resumos-meec/compare) e selecionar o vosso branch.
