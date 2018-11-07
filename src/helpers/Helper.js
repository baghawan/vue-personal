var Helper = () => {
    function menuClick(){
        const buttonMenu = document.getElementById('burger')

        buttonMenu.addEventListener('click', (event) => {
            var self = event.target
            document.body.classList.toggle('menu-show')
            self.classList.toggle('clicked')
        })
    }

    menuClick()
}

export default Helper
