# 🥗 Projeto Conecta Alimento

<p align="center">
  <!-- Dica: Tire um screenshot da sua aplicação, suba no imgur.com e cole o link da imagem aqui -->
  <img src="https://i.imgur.com/your-image-url.png" alt="Screenshot da página inicial do Conecta Alimento" width="700"/>
</p>

## 📖 Sobre o Projeto

O **Conecta Alimento** é uma aplicação web desenvolvida como projeto acadêmico, com o objetivo de criar uma ponte digital para combater o desperdício de alimentos. A plataforma permite que doadores (como restaurantes, padarias e pessoas físicas) cadastrem alimentos disponíveis para doação, que são exibidos em um painel público para que receptores necessitados possam encontrá-los e entrar em contato de forma simples e direta via WhatsApp.

Este projeto foi construído como uma **Single Page Application (SPA)**, utilizando tecnologias modernas do ecossistema Vue.js.

---

## ✨ Funcionalidades Principais

*   **🌉 Painel Público:** Exibe todos os cards de doações disponíveis, buscando dinamicamente os dados cadastrados.
*   **👤 Autenticação de Doadores:** Sistema completo de Cadastro e Login para que os doadores possam gerenciar suas ofertas.
*   **⚙️ Dashboard do Doador:** Uma área privada e segura onde o usuário logado pode:
    *   Visualizar todas as suas doações cadastradas.
    *   Adicionar novas doações.
    *   Editar informações de doações existentes.
    *   Excluir doações que não estão mais disponíveis.
*   **📱 Integração com WhatsApp:** Um botão de "Entrar em Contato" em cada card gera um link pré-formatado para o WhatsApp, facilitando a comunicação imediata entre o receptor e o doador.
*   **✅ Validação de Formulários:** Feedback em tempo real para o usuário durante o cadastro e login, com mensagens de erro e sucesso.
*   **🖼️ Interface Responsiva:** O design se adapta para uma experiência de uso agradável em desktops, tablets e smartphones.

---

## 🛠️ Tecnologias Utilizadas

Este projeto foi desenvolvido com as seguintes tecnologias:

*   **Front-End:**
    *   [Vue.js 3](https://vuejs.org/) (utilizando a Composition API)
    *   [Vite](https://vitejs.dev/) como ferramenta de build e servidor de desenvolvimento
    *   [Vue Router](https://router.vuejs.org/) para gerenciamento de rotas (SPA)
    *   [Pinia](https://pinia.vuejs.org/) para gerenciamento de estado global (autenticação do usuário)
*   **Back-End (Simulado):**
    *   A lógica de "banco de dados" foi simulada utilizando o `localStorage` do navegador para persistir os dados de usuários e doações, permitindo uma experiência full-stack sem a necessidade de um servidor real.
*   **Hospedagem:**
    *   [GitHub Pages](https://pages.github.com/) para o deploy e hospedagem da aplicação.

---

## 🚀 Como Executar o Projeto Localmente

Para rodar este projeto em sua máquina, siga os passos abaixo:

```bash
# 1. Clone o repositório
git clone https://github.com/ruannegodoi/projeto-conecta-alimento.git

# 2. Navegue até o diretório do projeto
cd projeto-conecta-alimento

# 3. Instale as dependências
npm install

# 4. Inicie o servidor de desenvolvimento
npm run dev

# 5. Após executar os comandos, abra seu navegador e acesse http://localhost:5173.

👩‍💻 Autora
Ruanne Godoi
Contato: ruannegodoi@gmail.com
Este projeto foi desenvolvido como parte do trabalho da graduação de Análise e Desenvolvimento de Sistemas na Uniritter.