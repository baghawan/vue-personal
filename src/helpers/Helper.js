var Helper = () => {
    function menuClick(){
        const buttonMenu = document.getElementById('burger')

        buttonMenu.addEventListener('click', (event) => {
        	event.stopPropagation();
            var self = event.target
            document.body.classList.toggle('menu-show')
            self.classList.toggle('clicked')
        })
    }

    menuClick()

    $('body').on('click',function(e){
        if(!$(e.target).hasClass("header-button") && $(e.target).parents("#menu").length == 0) {
            document.body.classList.remove('menu-show')
            document.getElementById('burger').classList.remove('clicked')
            
        };
    });
}

export default Helper
