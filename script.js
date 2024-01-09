let blocks = document.querySelectorAll('.block')

let buttons = document.querySelectorAll('.count')
buttons.forEach((button) => {
    button.addEventListener('click', function(){

        // всем поставить класс .active
        blocks.forEach((block) => {
            block.classList.add('active');
        })

        // удалить у target класс .active
        button.parentElement.parentElement.classList.remove('active')
    })
})