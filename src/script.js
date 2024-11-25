let cover = document.querySelector('#cover');
let open = document.querySelector('#open');
let body = document.querySelector('body');
let cont = document.querySelector('#cont')



open.addEventListener('click', ()=>{
    cover.style.display = 'none'
    body.classList.remove('overflow-hidden')
    cont.classList.remove('hidden')
})
