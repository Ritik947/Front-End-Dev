var box = document.querySelectorAll(".box");
box.forEach(item => {
    item.addEventListener('click', () => {
        // if(box.classList.contains('boxclicked')){
        //     box.classList.remove('boxclicked');
        // }
        // else{
        //     box.classList.add('boxclicked');
        // }
        item.classList.toggle('boxclicked');
    })
})