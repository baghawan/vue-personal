<template>
    <div id="app">
        <header id="header">
            <div class="header--inner flexed halign-justify">
                <div class="logo-holder">
                    <router-link to="/">
                        <svg xmlns="http://www.w3.org/2000/svg" id="logo" class="logo" viewBox="0 0 52.972 100">
                            <title>Baghawan</title>
                            <desc>Baghawan Logo</desc>
                            <g>
                                <path class="a" fill="#ddd" d="M34.946,24.776c-2.815,0-5.493-1.648-6.678-4.396c-1.558-3.613-6.958-5.835-10.144-5.835H0V0h18.124c8.338,0,19.405,5.125,23.499,14.622c1.591,3.688-0.114,7.965-3.801,9.558C36.887,24.584,35.91,24.776,34.946,24.776z"/>

                                <path class="b" fill="#636c72" d="M15.227,93.636c0,3.516-2.849,6.364-6.364,6.364H0V25.454h8.862c3.516,0,6.364,2.851,6.364,6.364V93.636z"/>

                                <g transform="translate(0, 0)">
                                    <circle cx="0" cy="0" r="7.5" fill="#005aff" transform="translate(36 38)" class="c" />
                                </g>

                                <path class="d" fill="#ddd" d="M52.972,76.059C52.972,89.282,42.25,100,29.034,100V52.12C42.25,52.12,52.972,62.842,52.972,76.059z"/>
                            </g>
                        </svg>
                    </router-link>
                </div>
                <div class="header-button">
                    <button type="button" id="burger" class="btn"></button>
                    <nav id="menu">
                        <router-link to="/works">Works</router-link>
                        <router-link to="/about">About</router-link>
                    </nav>
                </div>
            </div>
        </header>
        <main>
            <transition name="component-fade" mode="out-in">
                <router-view />
            </transition>
        </main>
        <footer id="footer">
            <div class="footer--inner flexed halign-justify">
                <p class="no-margin">© 2018 — Baghawan</p>
                <p class="no-margin">v3.0.0</p>
                
            </div>
        </footer>
    </div>
</template>

<style lang="scss">
.component-fade-enter-active, .component-fade-leave-active {
  transition: opacity .5s ease;
}
.component-fade-enter, .component-fade-leave-to {
  opacity: 0;
}
</style>
