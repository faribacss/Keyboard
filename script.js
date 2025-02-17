document.addEventListener('keydown', (event)=>{
    const key = event.key.toUpperCase();
    const div = document.querySelector(`.key[data-key="${key}"]`);
    
    if(div){
        div.classList.add('pressed');
    }
})

document.addEventListener('keyup', (event)=>{
    const key = event.key.toUpperCase();
    const div = document.querySelector(`.key[data-key="${key}"]`);

    if(div){
        div.classList.remove('pressed');
    }
})