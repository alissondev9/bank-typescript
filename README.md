# 💳 Bank System

Projeto de um banco digital desenvolvido em **TypeScript**, utilizando conceitos fundamentais de **Programação Orientada a Objetos (POO)** como herança, encapsulamento e abstração.

---

## 🚀 Tecnologias utilizadas

* **TypeScript**
* **Node.js**
* **ts-node**

---


## 🧠 Conceitos aplicados

* Classes e objetos
* **Herança**
* **Encapsulamento**
* Métodos personalizados
* Modificadores de acesso (`private`, `readonly`, `protected`)

---

## 🏦 Tipos de conta

### 1. DioAccount (Conta base)
Conta principal do sistema.
* **Funcionalidades:** Depósito, Saque, Controle de saldo e Status da conta.

### 2. CompanyAccount (Conta empresarial)
* **Funcionalidade extra:** `getLoan` (Empréstimo).
* **Regra:** Apenas contas com status ativo podem solicitar empréstimo.

### 3. BonusAccount (Conta com bônus)
* **Regra:** Todo depósito recebe **+10** de bônus (Ex: deposita 100, recebe 110).

---

## 📋 Regras do sistema

* Todos os atributos das contas são **privados**.
* Os atributos `name` e `accountNumber` são **imutáveis**.
* **Saques** só podem ocorrer se a conta estiver ativa e houver saldo suficiente.

