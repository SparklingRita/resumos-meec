# Laboratório 2

## Exercicio de casa - by RodsCoimbra

::: details Resolução

```asm6502
.data
a: .word 1
b: .word 1
.text
rede_neuronal_xor:
	lw a1,a
	lw a2,b
	li a3,-2
	li a4,2
	jal x3,neuronio
	mv s1,a0
	li a3,2
	li a4,-2
	jal x3,neuronio
	mv s2,a0
	mv a1,s1
	mv a2,s2
	li a3,2
	li,a4,2
	jal x3,neuronio
	
	li x17,1
	ecall
	
	li x17,10
	ecall

neuronio:
	mv a5,a1
	mv a6,a4
	jal x1,multiplica
	lw s3,0(sp)
	addi sp,sp,4
	mv a5,a2
	mv a6,a3
	jal x1,multiplica
	lw s4,0(sp)
	addi sp,sp,4
	li a5,-1
	add s3,s3,s4
	add s3,s3,a5
	bgez s3,if1
	li a0,0
	jalr x0,x3,0
if1:
	li a0,1	
	jalr x0,x3,0

multiplica:
	addi sp,sp,-12
	mv t1,a5
	sw t1,4(sp)
	mv t2,a6
	sw t2,0(sp)
	li t3,0
	bgez t2,loop
loop1:
	neg t2,t2
	add t3,t3,t1
	addi t2,t2,-1
	bgtz t2,loop1
	neg t3,t3
	sw t3,8(sp)
	
	addi sp,sp,8
	ret
loop:
	add t3,t3,t1
	addi t2,t2,-1
	bgtz t2,loop
	sw t3,8(sp)
	
	addi sp,sp,8
	ret
```

:::

### Ex de casa - by Tomás Martins

::: details Resolução

```asm6502
.data
a: .word 1
b: .word 1
.text
rede_neuronal_xor:
	lw a1,a
	lw a2,b
	li a3,-2
	li a4,2
	jal x2,neuronio
	mv s1,a0
	li a3,2
	li a4,-2
	jal x2,neuronio
	mv s2,a0
	mv a1,s1
	mv a2,s2
	li a3,2
	li,a4,2
	jal x2,neuronio
	
	li x17,1
	ecall
	
	li x17,10
	ecall

neuronio:
	mv a5,a1
	mv a6,a4
	jal x1,multiplica
	lw s3,0(sp)
	addi sp,sp,4
	mv a5,a2
	mv a6,a3
	jal x1,multiplica
	lw s4,0(sp)
	addi sp,sp,4
	li a5,-1
	add s3,s3,s4
	add s3,s3,a5
	bgez s3,if1
	li a0,0
	jalr x0,x2,0
if1:
	li a0,1	
	jalr x0,x2,0

multiplica:
	addi sp,sp,-12
	mv t1,a5
	sw t1,4(sp)
	mv t2,a6
	sw t2,0(sp)
	li t3,0
	bgez t2,loop
loop1:
	neg t2,t2
	add t3,t3,t1
	addi t2,t2,-1
	bgtz t2,loop1
	neg t3,t3
	sw t3,8(sp)
	
	addi sp,sp,8
	ret
loop:
	add t3,t3,t1
	addi t2,t2,-1
	bgtz t2,loop
	sw t3,8(sp)
	
	addi sp,sp,8
	ret
```

:::

## Lab 2 - by Martim Bento

Modifique o código de forma a implementar a função: $y = A \oplus \overline{C}$.
A função **y** deve receber os 3 parametros pela pilha.
As funções OR e A $\oplus$ $\overline{C}$ podem ser implementados por neurónios com os seguintes pesos:

- OR: w1 = 2, w2 = 2, b= -1
- A $\oplus$ $\overline{C}$: w1 = 2, w2 = -2, b= -1

Teste a função utilizando código que a chama 8 vezes com os valores da tabela de verdade (não é necessário um loop) e apresente os resultados na consola.

::: details Resolução

```asm6502
	.data

a:	.word 0
b:	.word 0
c:	.word 1

	.text
#x14 = w1; x15 = w2; x16 = b; x3 =


rede_neuronal_xor:
lw x3, a
lw x4, b
li x14, 2
li x15, -2
li x16, -1
jal neuronio
mv x20, x19
li x14, -2
li x15, 2
li x16, -1
jal neuronio
li x14, 2
li x15, 2
li x16, -1
mv x3, x20
mv x4, x19
jal neuronio  #daqui sai A xor B no x19
mv x20, x19 #gravar A xor B no x20
li x14, 3
li x15, -2
li x16, -2
lw x3, c
lw x4, a
jal neuronio #daqui sai C and (Not A)
mv x21, x19 #gravar C and (Not A) no x21
li x14, 2
li x15, 2
li x16, -1
mv x3, x20
mv x4, x21
jal neuronio #daqui deve sair (A xor B) or (C and (Not A))
jal x0, end

neuronio:
addi sp, sp, -4
sw x1, 0(sp)

mv x10, x3
mv x11, x14
jal multiplica
lw x18, 0(sp)
addi sp, sp, 4
mv x10, x4
mv x11, x15
jal multiplica
lw x19, 0(sp)
addi sp, sp, 4
add x19, x19, x18
add x19, x19, x16
lw x1, 0(sp)
addi sp, sp, 4
blt x19, zero, null
li x19, 1
jalr x0, x1, 0
null:
li x19, 0
jalr x0, x1, 0

multiplica:
li x12, 0
li x13, 0
blt x11, zero, negative
while:
add x13, x13, x10
addi x12, x12, 1
blt x12, x11, while
addi sp, sp, -4
sw x13, 0(sp)
jalr x0, x1, 0
negative:
sub x13, x13, x10
addi x12, x12, -1
bge x12, x11, negative
addi sp, sp, -4
sw x13, 0(sp)
jalr x0, x1, 0

end:
mv x10, x19
li x17, 1
ecall
li x17, 10
ecall

```

:::
