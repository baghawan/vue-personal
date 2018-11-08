import TypeIt from 'typeit'

// MODULES
var firstLoad = () => {
    const svg = document.getElementById('logo')

    var introText = $('#intro-text')
    var dataText = introText.data('text').split('<br/>')

    if(introText.length){
        new TypeIt(introText, {
            strings: dataText,
            speed: 50,
            autoStart: false,
            breakLines: true,
            cursor: false,
            afterComplete: function (instance) {
                $('body').addClass('first-intro-finish')

                setTimeout(() => {
                    svg.setAttribute('class', 'logo show')
                }, 1000)
            }
        })
    }

    

    // fullHeight()

    // function fullHeight(){
    //     var elem = $('.fh-js')
    //     var winHeight = $(window).height()

    //     if(elem.length){
    //         $(window).on('ready resize',function(e){
    //             elem.css({
    //                 'height' : $(window).height() + 'px'
    //             })
    //         })
    //     }
    // }
}

export default firstLoad
