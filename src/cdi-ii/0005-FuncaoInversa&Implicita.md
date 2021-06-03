# Função Inversa e Implícita

## Função Inversa
### Teorema:

>Seja $f: U \subset \R^n \to \R^n$ uma função de classe $C^1$, com $U$ aberto e um $p\isin U$. Se $\vert Df(p)\vert \ne 0$, então $\exists$ um $V \subset \R^n$ aberto, onde $f(p) \isin V$, tal que $f: U \to V$ é bijetiva e $f^{-1}: V \to U$ é de classe $C^1$. Isto é, para $\forall p \isin U$ temos:

$$ Df^{-1}(f(p)) = \lbrack Df(p)\rbrack^{-1} $$

::: tip

Se $\vert Df(p)\vert = 0$ o teorema **nada afirma sobre a injetividade de $f$**! Normalmente nestes casos o prof. considera que é trivial ver
a "olho" a injetividade de $f$ à volta do ponto considerado.

:::

## Função Implícita
### Teorema:

>Seja $F : \R^n \to \R^m$, com m < n, uma função de classe $C^1$ e $(a,b) \isin \R^n$ tal que $a \isin \R^{n-m}$, $b \isin \R^m$ e 

$$ F(a,b) = 0; \; \vert DF_{y}(a,b) \vert = 0 $$

>Então, existe uma função $f$ de classe $C^1$, tal que, **localmente** em torno de $(a,b)$ se tem 

$$ F(x,y) = 0 \Leftrightarrow y = f(x) $$

---
***Notas***

1. No caso geral, temos um sistema de m equações em $R^n$ que nas condições acima descritas define implicitamente m variáveis, definidas por *y* em função das restantes n-m variáveis restantes, definidas por *x*.
2. A matriz $DF_y(a,b)$ designa a matriz das derivadas parciais da função F em ordem às variáveis designadas por *y*, no ponto (a,b).
3. Para demonstrar o caso geral, recorre-se ao Teorema da Função Inversa:

::: details Detalhes 
Seja $G: R^n \to R^n$ uma função de classe $C^1$ dada por:

$$ G(x,y) = (x,F(x,y)),\space logo\space por\space consequência\space G(a,b) = (x,0) $$

$$ \vert DG(a,b)\vert = \det\begin{bmatrix} I & 0\\D_xF(a,b) & D_y(a,b) \end{bmatrix} = \det D_y(a,b) \ne 0, $$

$I$ designa a matriz identidade com (n-m) linhas e (n-m) colunas. \
Pelo Teorema da Função Inversa, $G$ é localmente injetiva na vizinhana de (a,b) e teremos então:

$$ G(x,y) = (x,F(x,y)) = (x,0) \Leftrightarrow (x,y) = G^{-1}(x,0) $$

ou seja, existe uma função $f$ definida na vizinhança do ponto a, tal que se verifica a equivalência:

$$ F(x,y) = 0 \Leftrightarrow y = f(x) $$

Visto que $G^{-1}$ é de classe $C^1$, a função $f$ também será.

:::

---

### Calcular as derivadas implícitas 
#### Exemplo em que $F: \R^3 \to \R$ e queremos calcular $\frac{\partial z}{\partial x}$.
1. Definimos $F(x,y,z) = 0$ 
2. Calculamos $DF(a,b,c)$, e verificamos se $DF_z(a,b,c) \ne 0$
    - (Se $\frac{\partial F}{\partial z}$ = 0 então não podemos escrever *z* como função implícita de x e de y, como pelo Teorema F. Imp.)
3. Definimos $F$ como $F(x,y,f(x,y)) = 0$ (em que $z = f(x,y)$)
4. Derivamos F em ordem a x e y (neste caso como só queremos $\frac{\partial z}{\partial x}$ podiamos só calcular a derivada de F em ordem a *x*, mas assim ficamos com o caso geral..)

$$ \frac{\partial F}{\partial (x,y)}(a,b,c) = \begin{cases}  \frac{\partial F}{\partial x}(a,b,c) + \frac{\partial F}{\partial z}(a,b,c)\frac{\partial f}{\partial x}(a,b) = 0\\ \frac{\partial F}{\partial y}(a,b,c) + \frac{\partial F}{\partial z}(a,b,c)\frac{\partial f}{\partial y}(a,b) = 0\end{cases}$$

5. Massajar a equação $\frac{\partial F}{\partial x}(a,b,c) + \frac{\partial F}{\partial z}(a,b,c)\frac{\partial f}{\partial x}(a,b) = 0$

$$ \\
\frac{\partial F}{\partial x}(a,b,c) + \frac{\partial F}{\partial z}(a,b,c)\frac{\partial f}{\partial x}(a,b) = 0 \Leftrightarrow \\ \Leftrightarrow \frac{\partial F}{\partial z}(a,b,c)\frac{\partial f}{\partial x}(a,b) = -\frac{\partial F}{\partial x}(a,b,c) \Leftrightarrow \\ \Leftrightarrow \frac{\partial f}{\partial x}(a,b) = \frac{-\frac{\partial F}{\partial x}(a,b,c)}{\frac{\partial F}{\partial z}(a,b,c)} \Leftrightarrow \\ \Leftrightarrow \frac{\partial z}{\partial x}(a,b) = \frac{-\frac{\partial F}{\partial x}(a,b,c)}{\frac{\partial F}{\partial z}(a,b,c)}
$$

6. Vitória! Mas e se F não for um campo escalar ($\R^n \to \R$)?

#### Exemplo em que $F: \R^3 \to \R^2$
1. Seja $F(x,y,z) = \begin{cases} F_1(x,y,z) = 0 \\ F_2(x,y,z) = 0 \end{cases}$
    - Neste caso conseguimos escrever 2 incognitas em função da terceira, como por exemplo $y = f(x)$ e $z = g(x)$.
2. Calculamos $DF(a,b,c)$, e verificamos se $\vert DF_{yz}(a,b,c) \vert \ne 0$
    - (Tal como no exemplo acima, se o $\vert DF_{yz}(a,b,c) \vert = 0$ não conseguimos escrever y e z como funções de x)
3. Definimos $F(x,y,z) = \begin{cases} F_1(x,f(x),g(x)) = 0 \\ F_2(x,f(x),g(x)) = 0 \end{cases}$
4. Se quisermos as derivadas em ordem a x como no exemplo anterior então:

$$ \frac{\partial F}{\partial x}(a,b,c) = \begin{cases} \frac{\partial F_1}{\partial x}(a,b,c) + \frac{\partial F_1}{\partial y}(a,b,c) \frac{\partial f}{\partial x}(a) + \frac{\partial F_1}{\partial z}(a,b,c) \frac{\partial g}{\partial x}(a) = 0 \\
\frac{\partial F_2}{\partial x}(a,b,c) + \frac{\partial F_2}{\partial y}(a,b,c) \frac{\partial f}{\partial x}(a) + \frac{\partial F_2}{\partial z}(a,b,c) \frac{\partial g}{\partial x}(a) = 0\end{cases} $$

5. Massajamos $\frac{\partial F}{\partial x}(a,b,c)$ de modo a acharmos $f'(a)$ e $g'(a)$

$$ \frac{\partial F}{\partial x}(a,b,c) = \begin{cases} \frac{\partial F_1}{\partial y}(a,b,c) \frac{\partial f}{\partial x}(a) + \frac{\partial F_1}{\partial z}(a,b,c) \frac{\partial g}{\partial x}(a) =  -\frac{\partial F_1}{\partial x}(a,b,c)\\ 
\frac{\partial F_2}{\partial y}(a,b,c) \frac{\partial f}{\partial x}(a) + \frac{\partial F_2}{\partial z}(a,b,c) \frac{\partial g}{\partial x}(a) = -\frac{\partial F_2}{\partial x}(a,b,c)\end{cases} \Leftrightarrow \\ \Leftrightarrow
\begin{bmatrix} 
\frac{\partial F_1}{\partial y}(a,b,c)  &  \frac{\partial F_1}{\partial z}(a,b,c) \\ \frac{\partial F_2}{\partial y}(a,b,c)  &  \frac{\partial F_2}{\partial z}(a,b,c) 
\end{bmatrix}
\begin{bmatrix}
f'(a) \\ g'(a)
\end{bmatrix}
= -
\begin{bmatrix}
\frac{\partial F_1}{\partial x}(a,b,c) \\
\frac{\partial F_2}{\partial x}(a,b,c)
\end{bmatrix}
$$
Só conseguimos calcular as derivadas se

$$
\det
\begin{bmatrix} 
\frac{\partial F_1}{\partial y}(a,b,c)  &  \frac{\partial F_1}{\partial z}(a,b,c) \\ \frac{\partial F_2}{\partial y}(a,b,c)  &  \frac{\partial F_2}{\partial z}(a,b,c) 
\end{bmatrix}
\ne 0 \Leftrightarrow \vert DF_{yz}(a,b,c) \vert \ne 0
$$

No caso de conseguirmos temos, então

$$
\begin{bmatrix}
f'(a) \\ g'(a)
\end{bmatrix}
= -
\begin{bmatrix} 
\frac{\partial F_1}{\partial y}(a,b,c)  &  \frac{\partial F_1}{\partial z}(a,b,c) \\ \frac{\partial F_2}{\partial y}(a,b,c)  &  \frac{\partial F_2}{\partial z}(a,b,c) 
\end{bmatrix}^{-1}
\begin{bmatrix}
\frac{\partial F_1}{\partial x}(a,b,c) \\
\frac{\partial F_2}{\partial x}(a,b,c)
\end{bmatrix}
$$

6. =] Casos gerais visitados.
