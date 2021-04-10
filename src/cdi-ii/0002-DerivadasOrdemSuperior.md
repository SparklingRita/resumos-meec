# Derivadas de Ordem Superior

## Matriz Hessiana

Sendo a Jacobiana de uma função $\mathscr{f}$ em $a$:

$$
J^{f}_{a} =\begin{bmatrix}
\frac{\partial f_{1}}{\partial x_{1}}( a) & \frac{\partial f_{1}}{\partial x_{2}}( a) & \dotsc  & \frac{\partial f_{1}}{\partial x_{n}}( a)\\
\frac{\partial f_{2}}{\partial x_{1}}( a) & \frac{\partial f_{2}}{\partial x_{2}}( a) & \dotsc  & \frac{\partial f_{2}}{\partial x_{n}}( a)\\
\vdots  & \vdots  & \ddots  & \vdots \\
\frac{\partial f_{m}}{\partial x_{1}}( a) & \frac{\partial f_{m}}{\partial x_{2}}( a) & \dotsc  & \frac{\partial f_{m}}{\partial x_{n}}( a)
\end{bmatrix}
$$

Então, a Hessiana de $\mathscr{f}$:

$$
Hf( a) =\begin{bmatrix}
\frac{\partial ^{2} f}{\partial x^{2}_{1}} & \frac{\partial ^{2} f}{\partial x_{2} \partial x_{1}} & \dotsc  & \frac{\partial ^{2} f}{\partial x_{n} \partial x_{1}}\\
\frac{\partial ^{2} f}{\partial x_{1} \partial x_{2}} & \frac{\partial ^{2} f}{\partial x^{2}_{2}} & \dotsc  & \frac{\partial ^{2} f}{\partial x_{2} \partial x_{1}}\\
\vdots  & \vdots  & \ddots  & \vdots \\
\frac{\partial ^{2} f}{\partial x_{1} \partial x_{n}} & \frac{\partial ^{2} f}{\partial x_{2} \partial x_{n}} & \dotsc  & \frac{\partial ^{2} f}{\partial x^{2}_{n}}
\end{bmatrix}
$$

Note-se que esta matriz é simétrica.

## Extremos

::: tip Teorema
$D \subset \R^n$ aberto, $f:D \to \R^n$, $f$ de classe $C^1$. Se $f$ tem um extremo local em $a \in D$ então,

$$\nabla f(a) = 0$$

:::

Se $\nabla f(a) = 0$, $a$ diz-se um **ponto crítico de $f$**. Neste caso, $a$ pode ser um _extremo local_ (máximo local ou mínimo local) ou um _ponto de sela_

Para averiguar-mos a classificação do ponto crítico, devemos basear-nos na matriz hessiana:

### Matriz Hessiana 2x2

Se o determinante da matriz for negativo $\implies a$ é ponto de sela.  
Se o determinante da matriz for positivo, temos de averiguar o traço.

- Se o traço for positivo $\implies a$ é mínimo local
- Se o traço for negativo $\implies a$ é máximo local

### Matriz Hessiana 3x3

Após determinar a matriz hessiana, temos de calcular os valores próprios, $\lambda$, da mesma.

- Se $\lambda > 0$ então há mínimo local em $a$
- Se $\lambda < 0$ então há máximo local em $a$
- Se $\lambda > 0$ e $\lambda < 0$ então $a$ é ponto de sela
- Se $\lambda \ge 0$ então há mínimo ou ponto de sela em $a$
- Se $\lambda \ge 0$ então há máximo ou ponto de sela em $a$

::: tip
Para exemplos, recomenda-se ver a resolução do exercício 4 da ficha 5.
:::
