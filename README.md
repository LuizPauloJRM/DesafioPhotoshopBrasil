# DesafioPhotoshopBrasil
Site desenvolvido para desafios Adobe Photoshop Brasil , todos partiipante terao acesso atraves de um login onde poderao participar de desafios photoshop bras
#  Galeria Interativa - Desafio Photoshop Brasil

Este é um projeto front-end desenvolvido com **HTML, CSS e JavaScript puro**, com o objetivo de praticar manipulação da DOM, criação de layouts modernos e navegação interativa por imagens.

##  Sobre o Projeto

A aplicação simula uma **galeria de desafios de design**, inspirada em trabalhos artísticos. Os usuários podem navegar entre as imagens com botões de seta, visualizar miniaturas (thumbnails) e interagir com os botões "Saiba mais" e "Acessar".

---

##  Funcionalidades

- ✅ Galeria com carrossel de imagens em destaque
- ✅ Miniaturas sincronizadas com o item principal
- ✅ Navegação por botões de "próximo" e "voltar"
- ✅ Layout 100% responsivo
- ✅ Estilização moderna com foco em UI/UX
- ✅ Lógica de manipulação do DOM com JavaScript puro

---

##  Tecnologias Utilizadas

- `HTML5` — Estrutura semântica da página
- `CSS3` — Layout responsivo, Flexbox, Grid, Transições e efeitos visuais
- `JavaScript` — Manipulação da DOM, lógica de rotação da galeria

---

## Estrutura de Pastas

```plaintext
/
├── index.html
├── sobre.html
├── contato.html
├── rankings.html
├── desafios.html
├── style/
│   └── style.css
├── js/
│   └── script.js
└── Assets/
    └── (imagens utilizadas na galeria)
⚙️ Como Rodar o Projeto Localmente
Clone este repositório:

bash
git clone https://github.com/seu-usuario/seu-repositorio.git
Navegue até o diretório do projeto:

bash
cd nome-do-projeto
Abra o arquivo index.html no navegador:

Clique duas vezes no arquivo index.html, ou

Use uma extensão como Live Server (VS Code) para rodar localmente.

 Explicação do Funcionamento (passo a passo)
 1. Estrutura HTML
A página principal possui:

Um header com links de navegação

Um main com duas seções principais:

.list: onde ficam as imagens em destaque

.thumb: onde ficam as miniaturas sincronizadas

 2. Lógica JavaScript
No script.js:

Os botões .next e .back manipulam a galeria.

O primeiro item é movido para o fim (ou o último para o início), criando o efeito de rotação.

js

btnNext.onclick = () => moveItemsOnClick('next')
btnBack.onclick = () => moveItemsOnClick('back')

function moveItemsOnClick(type){
    let listItems = document.querySelectorAll('.list .list-item')
    let thumbItems = document.querySelectorAll('.thumb .thumb-item')

    if(type === 'next'){
        list.appendChild(listItems[0])
        thumb.appendChild(thumbItems[0])
    } else {
        list.prepend(listItems[listItems.length -1])
        thumb.prepend(thumbItems[thumbItems.length -1])
    }
}
 3. Estilo com CSS
O CSS aplica:

Layout flexível e centralizado

Efeitos com hover, filter, brightness

Botões com aparência moderna

Miniaturas redondas e destacadas

 Como Rodar o Projeto Localmente
Clone este repositório:

bash
Copiar
Editar
git clone https://github.com/seu-usuario/seu-repositorio.git
Navegue até o diretório do projeto:

bash
```
cd nome-do-projeto
```
Abra o arquivo index.html no navegador:

Clique duas vezes no arquivo index.html, ou

Use uma extensão como Live Server (VS Code) para rodar localmente.

 Explicação do Funcionamento (passo a passo)
 1. Estrutura HTML
A página principal possui:

Um header com links de navegação

Um main com duas seções principais:

.list: onde ficam as imagens em destaque

.thumb: onde ficam as miniaturas sincronizadas

 2. Lógica JavaScript
No script.js:

Os botões .next e .back manipulam a galeria.

O primeiro item é movido para o fim (ou o último para o início), criando o efeito de rotação.

js

btnNext.onclick = () => moveItemsOnClick('next')
btnBack.onclick = () => moveItemsOnClick('back')

function moveItemsOnClick(type){
    let listItems = document.querySelectorAll('.list .list-item')
    let thumbItems = document.querySelectorAll('.thumb .thumb-item')

    if(type === 'next'){
        list.appendChild(listItems[0])
        thumb.appendChild(thumbItems[0])
    } else {
        list.prepend(listItems[listItems.length -1])
        thumb.prepend(thumbItems[thumbItems.length -1])
    }
}
 3. Estilo com CSS
O CSS aplica:

Layout flexível e centralizado

Efeitos com hover, filter, brightness

Botões com aparência moderna

Miniaturas redondas e destacadas

 Melhorias Futuras
 Sistema de login para participantes

 Rankings dinâmicos com dados reais

 Filtro por categorias ou autores

☁️ Hospedagem do projeto (Netlify/Vercel)

 Autor
Desenvolvido por Luiz Paulo Medeiros da Cunha Júnior
LinkedIn
Portfólio (opcional)

 Licença
Este projeto está sob a licença MIT.
Sinta-se à vontade para estudar, modificar e compartilhar.

yaml


---

Se quiser, posso:
- Adaptar com seu **link do GitHub**
- Criar um **badge de preview online** com Vercel ou Netlify
- Traduzir para inglês se for usar internacionalmente

Quer que eu gere o `README.md` com seu usuário/link reais?







