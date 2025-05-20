//Selecionando elementos e criando variáveis, babendo quem é quem 
let btnNext = document.querySelector('.next')
let btnBack = document.querySelector('.back')

let container = document.querySelector('.container')
let list = document.querySelector('.container .list')
let thumb = document.querySelector('.container .thumb')
//quando o botão for clicado chamo a função do next e back
btnNext.onclick = () => moveItemsOnClick('next')
btnBack.onclick = () => moveItemsOnClick('back')



function moveItemsOnClick(type){
    let listItems = document.querySelectorAll('.list .list-item')
    let thumbItems=document.querySelectorAll('.thumb.thumb-item')
    if(type === 'next'){
        list.appendChild(listItems[0])
        thumb.appendChild(thumbItems[0])
    }else{
        list.prepend(listItems[listItems.length -1])
        thumb.prepend(thumbItems[listItems.length-1])
    }
}