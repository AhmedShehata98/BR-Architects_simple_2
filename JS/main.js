const toggle_open =document.getElementById('open');
const toggle_close =document.getElementById('close');
const links =document.getElementById('links');

toggle_open.addEventListener('click',()=>{

    links.style.transform="translateY(0px)"
    toggle_open.style.display='none'
    toggle_close.style.display='flex'
})

toggle_close.addEventListener('click',()=>{

    links.style.transform='translateY(-200px)'
    toggle_open.style.display='flex'
    toggle_close.style.display='none'
})

console.log(toggle_close);