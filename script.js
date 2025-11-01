//Alterar nome

const alterarNome = document.getElementById('nome-input');
const h3CartaoNome = document.getElementById('cartao-nome');

console.log(alterarNome);
console.log(h3CartaoNome);

alterarNome.addEventListener('input', function() {
    h3CartaoNome.textContent = alterarNome.value;
});


//Mudar cor de fundo
const cartao = document.getElementById('cartao')
const btnAzul = document.getElementById('btn-azul')
const btnVerde = document.getElementById('btn-verde')

function alterarCorAzul(){
    cartao.classList.remove('fundo-verde')
    cartao.classList.add('fundo-azul')
}

function alterarCorVerde(){
    cartao.classList.remove('fundo-azul')
    cartao.classList.add('fundo-verde')
}

btnAzul.addEventListener('click', alterarCorAzul)
btnVerde.addEventListener('click', alterarCorVerde)


//Alternar o Estilo da Fonte
const fonte = document.getElementById('btn-fonte')

function alterarFonte(){
    cartao.classList.toggle('fonte-alternativa')
}

fonte.addEventListener('click', alterarFonte);


//Mudar Icone
const imagem = document.getElementById('imagem-select')
const imgCartao = document.getElementById('cartao-img')

function novaImg(){
    const imgNova = imagem.value
    imgCartao.setAttribute('src', imgNova)
}

imagem.addEventListener('change', novaImg)




/*  4. **Mudar o Ícone:**
    - Selecione o `<select>` com id `#imagem-select` e a imagem `#cartao-img`.
    - Adicione um evento `change` ao `<select>`. Quando o usuário escolher uma nova opção, use `setAttribute()` para mudar o `src` da imagem para o valor da opção selecionada.

    5. **Criar e Adicionar Habilidades:**
    - Selecione o input `#habilidade-input`, o botão `#btn-adicionar` e a lista `<ul>` com id `#lista-habilidades`.
    - Adicione um evento de `click` ao botão `#btn-adicionar`.
    - Dentro do evento, crie um novo elemento `<li>` com `document.createElement()`.
    - Defina o `textContent` do novo `<li>` para o valor do input de habilidade.
    - Adicione o novo `<li>` à lista de habilidades usando `appendChild()`.
    - **Bônus:** Limpe o campo de input depois de adicionar a habilidade. */