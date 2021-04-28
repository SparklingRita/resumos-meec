# Momento Linear

O momento linear é uma grandeza física vetorial essencial para o estudo da transferência de movimento em sistemas onde ocorrem colisões ou quaisquer outras formas de interação entre corpos.

- Tem sempre a mesma direção e sentido da velocidade do corpo.

$$\overrightarrow p = m \overrightarrow v$$

## Conservação do Momento Linear

Pela segunda lei de Newton temos: $\overrightarrow{F}=m\overrightarrow{a}$

$$\displaystyle \overrightarrow{F}=m\overrightarrow{a} \implies \overrightarrow{F}=m\frac{d\overrightarrow{v}}{dt} \implies \overrightarrow{F}=\frac{d\overrightarrow{p}}{dt}$$

::: tip Nota
O efeito das forças internas não contribui para a alteração do momento linear total do sistema
:::

Quando há conservação do momento linear temos que:

$$\overrightarrow{p_i} = \overrightarrow{p_f} \implies \Delta \overrightarrow{p}=0$$

## Choque de Partículas

- Choque Elástico Frontal

  - As partículas antes e depois do choque são exatamente as mesmas, logo:

    $$\overrightarrow{p_i} = \overrightarrow{p_f}$$
    $$\overrightarrow{p_A} + \overrightarrow{p_B} = \overrightarrow{p_A'} + \overrightarrow{p_B'}$$
    $$m_A \overrightarrow{v_A} + m_B \overrightarrow{v_B} =  m_A \overrightarrow{v_A'} + m_B \overrightarrow{v_B'}$$
    $$\text{continuando a desenvolver vamos chegar à expressão:}$$
    $$v'_A = \frac {[1 - \frac {m_B}{m_A}]}{[1 + \frac {m_B}{m_A}]} v_A$$

  ::: details Casos Particulares:

  - A particula B, inicialmente em repouso muito mais leve.
    $\frac {m_B}{m_A} \to 0$
    $v'_A = v_A$

  - A particula A fica em repouso, e a particula B adquire a velocidade da particula A.
    $\frac {m_B}{m_A} = 1$
    $v'_A = 0$

  - Choque com uma parede.
    $\frac {m_B}{m_A} \to \infty$
    $v'_A = - v_A$

  :::

  - Há conservação do momento linear e conservação de energia cinética.

- Choque Inelástico

  - Após a colisão, as partículas adquirem a mesma velocidade.

  - Há conservação do momento linear, mas há dissipação de energia, pelo que: $Ec_f<Ec_i$

  - Após a colisão, os corpos ficam deformados.
