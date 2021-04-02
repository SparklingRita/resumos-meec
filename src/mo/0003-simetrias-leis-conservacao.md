# Simetrias e Leis de Conservação

## Princípio da Ação Mínima (Princípio de Hamilton)

O princípio de Hamilton diz nos que um sistema físico irá seguir, de entre todas as trajetórias possíveis, aquela que minimiza o integral S designado por Ação.

::: tip Lagrangiano

A função $\mathscr{L}$ designada função de Lagrange depende das coordenadas $r=(r_1,r_2,...,r_n)$ e respetivas derivadas $\dot r=(\dot r_1, \dot r_2,..., \dot r_n)$.

$\displaystyle \delta S = \delta (\int^{t_2}_{t_1} \mathscr{L}(r, \dot r, t)dt) = 0$

Em mecânica clássica, a função $\mathscr{L}$ é dada por:

$\displaystyle \mathscr{L}=T-U$

em que T e U representam, respetivamente, as energias cinética e potencial do sistema.

:::

::: tip Demonstração das Leis de Newton

Usando o princípio da ação mínima e equações de Euler-Lagrange, é possível demonstrar todas as Leis de Newton

:::

## Voltando a Newton

![Formulas de Newton](./img/fisica-newton.jpg)

::: tip

- O trabalho de uma força é igual à variação de energia cinética

$W_{AB}=\Delta E_c$

- O trabalho de uma força conservativa é igual à variação da energia portencial, pelo que não depende do caminho de aplicação da força.

:::

## Graus de liberdade e Coordenadas Generalizadas

Graus de Liberdade de um sistema correponde ao número mínimo de variáveis independentes necessárias para a descrição do sistema.

Por exemplo, no caso do pêndulo gravítico plano, as variáveis $x$ e $y$ não são independentes uma bez que a trajetória (circular) do pêndulo permite conhecer $x$ para um dado $y$ e vice-versa. Neste caso, utiliza-se apenas uma variável $(\theta)$ que define a posição do pêndulo. Diz-se então que o sistema tem apenas **um** grau de liberdade.

![Pendulo Gravitico](./img/pendulo-gravitico.jpg)

A partir desta imagem, de um pêndulo gravítico, podemos deduzir que:

$$\begin{cases} x = l \sin \theta \\ y = l \cos \theta \end{cases} \implies \begin{cases} \dot x = l \ \dot \theta \cos \theta \\ \dot y = -l \ \dot \theta \sin \theta \end{cases}$$
