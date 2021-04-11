# Laboratório 2

## Exercicio de casa - by RodsCoimbra

::: details Resolução

```asm6502
	.data
a: .word 0
b: .word 0
c: .word 0
d: .word 0
y: .word 0

	.text
rede_neuronal_xor:
	la a1, c
	la a2, d
	la a3, y
	lw s0, a
	lw s1, b
	li s2, 2
	li s3, -2
	jal x1, neuronio
	sw x10, 0(a1)
	li s2, -2
	li s3, 2
	jal x1, neuronio
	sw x10, 0(a2)
	lw s0, 0(a1)
	lw s1, 0(a2)
	li s2, 2
	li s3, 2
	jal x1, neuronio
	sw x10, 0(a3)


	li x17, 1
	ecall
	li x17, 10
	ecall


neuronio:
	addi x2, x2, -12
	sw x1, 8(x2)
	sw s2, 4(x2)
	sw s0, 0(x2)
	jal x1, multiplica
	lw s5, 0(x2)
	addi x2,x2, 4
	sw s3, 4(x2)
	sw s1, 0(x2)
	jal x1, multiplica
	lw s6, 0(x2)
    addi x2, x2, 4
	add s6, s6, s5
	addi s6, s6, -1
	lw x1, 8(x2)
	addi x2, x2, 12
	bge s6, x0, retorno
	li x10, 0
	jalr x0, x1, 0
retorno:
	li x10, 1
	jalr x0, x1, 0

multiplica:
	lw t0, 0(x2)
	lw t1, 4(x2)
	li t2, 0
	bgtz t1, for
	neg t1,t1
	neg t0, t0

for:
	add t2, t0, t2
	addi t1, t1, -1
	bgtz t1, for

	addi x2, x2, -4
	sw t2, 0(x2)
	jalr x0, x1, 0

```

:::
