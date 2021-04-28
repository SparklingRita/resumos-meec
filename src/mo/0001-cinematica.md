# Cinemática

A cinemática é o ramo da física que estuda e descreve o movimento dos corpos, sem se preocupar com a análise das suas causas.

## Velocidade Média

Rapidez com que é realizado o deslocamento de um corpo.

$$\overrightarrow{\varDelta r} = \overrightarrow{r_2}-\overrightarrow{r_1} = \varDelta x  \overrightarrow{e_x}+\varDelta y  \overrightarrow{e_y}+\varDelta z  \overrightarrow{e_z}$$

Substituindo pela fórmula do deslocamento temos:

$$\overrightarrow{v_m} = \frac {\overrightarrow{\varDelta r}}{\varDelta t} = \frac {\overrightarrow{r_2}-\overrightarrow{r_1}}{t_2 - t_1} \implies \overrightarrow{v_m} = (\frac {\varDelta x}{\varDelta t}) \overrightarrow{e_x} + (\frac {\varDelta y}{\varDelta t}) \overrightarrow{e_y} + (\frac {\varDelta z}{\varDelta t}) \overrightarrow{e_z} $$

Sendo:

$\begin{cases}\varDelta x = x_2 - x_1 \\\varDelta y = y_2 - y_1 \\\varDelta z = z_2 - z_1\end{cases}$

## Velocidade Instantânea

Corresponde à derivada do deslocamento.

$$\overrightarrow{v}(t)=(\frac {dx}{dt})\overrightarrow{e_x}+(\frac {dy}{dt})\overrightarrow{e_y}+(\frac {dz}{dt})\overrightarrow{e_z}$$

## Aceleração Média

$$\overrightarrow{v}(t)=\overrightarrow{v_2}-\overrightarrow{v_1}=\varDelta v_x \overrightarrow{e_x}+\varDelta v_y \overrightarrow{e_y}+\varDelta v_z \overrightarrow{e_z}$$

Substituindo pela fórmula da velocidade temos:

$$\overrightarrow{a_m} = \frac {\overrightarrow{\varDelta v}}{\varDelta t}\implies \overrightarrow{a_m}=(\frac{\varDelta v_x}{\varDelta t})\overrightarrow{e_x}+(\frac{\varDelta v_y}{\varDelta t})\overrightarrow{e_y}+(\frac{\varDelta v_z}{\varDelta t})\overrightarrow{e_z}$$

## Aceleração Instantânea

Corresponde à derivada da velocidade.

$$\overrightarrow{a}=(\frac{dv_x}{dt})\overrightarrow{e_x}+(\frac{dv_y}{dt})\overrightarrow{e_y}+(\frac{dv_z}{dt})\overrightarrow{e_z}$$

## Equações do Movimento

$\begin{cases}x=x_0+v_{0x}t+\frac{1}{2}a t^2\\ y=y_0+v_{0y}t+\frac{1}{2}a t^2\end{cases}$

$v=v_0+at$

Também podemos tirar as seguintes informações relativas ao ângulo de lançamento:

$\begin{cases}v_{ox}=v_0\cos{\theta}\\v_{oy}=v_0\sin{\theta}\end{cases}$

::: tip Exemplos

1. **Calcular o alcance de um projétil, ou seja, o valor de x para quando o y voltar a 0.**

Sabemos que $x_0=y_0=0$, porque começamos na origem do referencial.  
A aceleração, neste caso, só tem componente em $y$.
Substituindo $v_{0x}$ e $v_{0y}$ por $v_0\cos{\theta}$ e $v_0\sin{\theta}$, respetivamente temos:

$\begin{cases}x=x_0+v_{0x}t+\frac{1}{2}a t^2\\ y=y_0+v_{0y}t+\frac{1}{2}a t^2\end{cases} \implies \begin{cases}x=(v_0\cos{\theta})t\\y=(v_0\sin{\theta})t-\frac{1}{2}gt^2 \end{cases}$

Quando $\displaystyle y=0 \implies (v_0\sin\theta)t-\frac{1 2}gt^2=0 \implies t_{voo}=\frac{2v_0\sin\theta}{g}$

Substituindo $t$ em $x$:  
$\displaystyle x_{alcance}=v_0\cos\theta(\frac{2v_0\sin\theta}{g})\implies x_{alcance}=\frac{2v_0^2\sin\theta\cos\theta}{g}$

Para ter o alcance máximo, substitui-se $\theta$ por $\frac {\pi} {4}$ ou $45\degree$

---

2. **Calcular a altura máxima**

Na altura máxima, $v=0$

$v=v_0\sin\theta-gt \implies v_0\sin\theta=0 \implies t=\frac{v_0\sin\theta}{g}$

Substituindo $t$ na equação do movimento temos:
$\displaystyle y=(v_0\sin\theta)(\frac{v_0\sin\theta}{g})-\frac{1}{2}g(\frac{v_0\sin\theta}{g})^2 \implies y=\frac{v_0^2\cdot{\sin\theta}^2}{2g}$

Sendo $\theta$ o ângulo de lançamento do projétil.
:::

## Movimento Circular

Ex: Um pêndulo gravítico descreve um movimento circular.

- O vetor velocidade é tangente à trajetória

$\displaystyle v=\omega R$

Sendo $\omega$ a velocidade angular:

$\displaystyle \omega = \frac {d\theta}{dt} \iff \omega = \dot \theta$

Nos movimentos retilíneos, como não ocorre mudança de direção do vetor velocidade, a aceleração só apresenta a componente tangencial.  
A aceleração pode ser separada em duas componentes:

- Aceleração Tangencial, $a_T$
  Possui o sentido da velocidade
- Aceleração Normal, $a_N$
  Também conhecida como aceleração centrípeta, é perpendicular à aceleração tangencial e dirigida para o centro da circunferência. Responsável pela direção do vetor velocidade num dado intervalo de tempo.

Assim, temos que:

$$\displaystyle \overrightarrow{a} = R \ddot \theta \cdot \overrightarrow{e_\theta} - R (\dot \theta)^2 \cdot \overrightarrow{e_r}$$

## Movimento Circular Uniforme

No caso particular do movimento circular uniforme temos:

$\displaystyle \omega = \frac {2 \pi}{T} = \text{Constante} \implies \text{Aceleração angular é nula}$

$\displaystyle v=\omega R$

$\displaystyle a_N=-\frac{v^2}{R}=-\omega ^2 R$

::: tip Movimentos Curvilíneos

Qualquer movimento curvilíneo pode ser descrito em cada instante como um movimento circular, em que tem uma velocidade tangente à trajetória, uma componente da aceleração perpendicular e outra paralela à trajetória só que, como a curvatura muda, estes vetores mudam de instante para instante.

:::
