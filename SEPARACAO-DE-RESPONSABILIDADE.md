# 👥 Organização da Equipe — Eco Viewer (Back-end)

Este documento define a divisão de responsabilidades entre os integrantes do projeto **Eco Viewer**, com o objetivo de garantir organização, produtividade e aprendizado equilibrado entre os membros.

---

## 📌 Estrutura do Projeto

O projeto segue uma arquitetura baseada em separação de responsabilidades:

src/
├── controllers/
├── routes/
├── services/
├── database/


---

## 👤 Integrantes

- **Jonathan**
- **Yan**

---

## 🧩 Divisão de Responsabilidades

### 🔹 Yan Victor Scopel

Responsável pelas partes mais críticas do sistema:

#### 📁 `services/`
- Implementação das regras de negócio
- Integração com a API externa (Perenual)
- Tratamento e transformação dos dados recebidos
- Lógica de decisão (uso de cache vs chamada externa)

#### 📁 `database/`
- Configuração da conexão com PostgreSQL
- Modelagem das tabelas
- Criação de queries
- Gerenciamento da persistência de dados

---

### 🔹 Jonathan

Responsável pela estrutura de comunicação da API:

#### 📁 `routes/`
- Definição das rotas da aplicação, para conexão com front-end mais tarde.
- Organização dos endpoints (ex: `/plants`, `/plants/:id`)
- Encaminhamento correto das requisições para os controllers

**EXEMPLO BASICO**
    Import { Router } from "express";
    import { getPlants, getPlantById, searchPlants } from "../controllers/plants.controller";

    const router = Router();

    // Listar plantas
    router.get("/plants", getPlants);

    // Buscar por ID
    router.get("/plants/:id", getPlantById);

    // Buscar por nome
    router.get("/plants/search", searchPlants);

    export default router;

#### 📁 `controllers/`
- Recebimento das requisições HTTP
- Manipulação de parâmetros (`req.params`, `req.query`, `req.body`)
- Chamada dos services
- Retorno das respostas para o cliente

---

## 🔄 Fluxo de Comunicação
    Cliente (Front-end)
            ↓
    Routes
            ↓
    Controller
            ↓
    Service
            ↓
    [ Banco de Dados ] ←→ [ API Perenual ]
            ↓
    Controller
            ↓
    Resposta JSON