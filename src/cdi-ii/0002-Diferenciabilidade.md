# Derivadas direcionais. Diferenciabilidade.
## Derivadas segundo um vetor
Seja $D \subset \R^n$ um conjunto aberto, $f: D \to \R$ uma função escalar diferenciável em $D$. Consideremos um vetor $v \isin \R^n$, 
define-se a derivada de $f$ em $a \isin D$ segundo o vetor $v$ como sendo o limite

$$
D_{v}f(a) = \lim\limits_{t \to 0} \frac{f(a+tv)-f(a)}{t} = \frac{d}{dt}(f(a+tv))\vert_{t=0} = \nabla f(a) \cdot v
$$

---
***Nota***

As habituais derivadas parciais são as derivadas segundo os vetores da base canónica de $\R^n$. Notações comuns são:

$$
\frac{\partial f}{\partial x_i}(a) \text{\space\space\space ou \space\space} D_{i}f(a)
$$

---

## Diferenciabilidade
Seja $D \subset \R^n$ um conjunto aberto com $a \isin D$, $f: D \to \R^m$. A função f é diferenciável em $a$ se e só se existir uma transformação linear $Df(a): \R^m \to \R^n$ tal que

$$
\lim\limits_{h \to 0} \frac{\parallel f(a+h) - (f(a) + Df(a) \cdot h) \parallel}{\parallel h \parallel} = 0
$$

com $h = x - a$

---
***Nota***

O uso da definição de função diferenciável pode tornar-se impratico/penoso. Esta tarefa pode ser facilitada recorrendo às propriedades das funções diferenciáveis. Neste contexto, a propriedade mais importante é a que se refere à derivada da composição de funções:

::: tip 
Se $g$ é diferenciável no ponto $a$ e f é diferenciável no ponto g(a), então f $\circ$ g é difereciável no ponto $a$ e

$$
D(f \circ g)(a) = Df(g(a)) \cdot Dg(a)
$$
:::

---