<template>
    <header id="main-header" class="absolute w-full">
        <div class="container">
            <div class="grid grid-cols-2 gap-2">
                <div>
                    <NuxtLink to="/" class="home-cta inline-block p-3">
                        <span class="sr-only">Baghawan Logo</span>
                        <svg xmlns="http://www.w3.org/2000/svg" id="logo" class="logo" viewBox="0 0 52.972 100">
                            <title>Baghawan</title>
                            <desc>Baghawan Logo</desc>
                            <g>
                                <path class="a" fill="#F5DF4D" d="M34.946,24.776c-2.815,0-5.493-1.648-6.678-4.396c-1.558-3.613-6.958-5.835-10.144-5.835H0V0h18.124c8.338,0,19.405,5.125,23.499,14.622c1.591,3.688-0.114,7.965-3.801,9.558C36.887,24.584,35.91,24.776,34.946,24.776z"/>

                                <path class="b" fill="#939597" d="M15.227,93.636c0,3.516-2.849,6.364-6.364,6.364H0V25.454h8.862c3.516,0,6.364,2.851,6.364,6.364V93.636z"/>

                                <g transform="translate(0, 0)">
                                    <circle cx="0" cy="0" r="7.5" fill="#939597" transform="translate(36 38)" class="c" />
                                </g>

                                <path class="d" fill="#F5DF4D" d="M52.972,76.059C52.972,89.282,42.25,100,29.034,100V52.12C42.25,52.12,52.972,62.842,52.972,76.059z"/>
                            </g>
                        </svg>
                    </NuxtLink>
                </div>

                <div class="flex items-center justify-end">
                    <nav>
                        <ul class="inline-flex space-x-5">
                            <li>
                                <NuxtLink to="/" class="font-bold">
                                    About
                                </NuxtLink>
                            </li>
                            <li>
                                <label id="toggle-mode" for="toggle-mode-cb" class="block">
                                    <input type="checkbox" id="toggle-mode-cb" @change="toggleMode" hidden />
                                    <span class="sr-only">Toggle Mode</span>
                                    <span class="toggle-border border-2">
                                        <span class="toggle-indicator bg-current"></span>
                                    </span>
                                </label>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    methods: {
        toggleMode() {
            this.$colorMode.preference =
                this.$colorMode.preference === "light" ? "dark" : "light";
        }
    }
};
</script>

<style lang="scss" scoped>
.home-cta {
    margin-left: -0.75rem;

    .logo {
        display: block;
        width: 20px;
        height: 30px;
    }
}

#toggle-mode {
    cursor: pointer;
    
    .toggle-border {
        width: 40px;
        height: 24px;
        display: block;
        border-radius: 20px;
        position: relative;

        .toggle-indicator {
            width: 16px;
            height: 16px;
            border-radius: 50%;
            position: absolute;
            top: 2px;
            left: 2px;
            transition: all 250ms linear;
            overflow: hidden;
            box-sizing: border-box;
            @apply bg-gray-900;

            &:after {
                content: '';
                width: 14px;
                height: 14px;
                border-radius: 50%;
                position: absolute;
                bottom: -2px;
                right: 5px;
                @apply bg-gray-900;
            }
        }
    }
}

.dark-mode {
    #toggle-mode {
        .toggle-border {
            .toggle-indicator {
                left: calc( 40px - 22px );
                @apply bg-white;
                transform: rotate(180deg);
            }
        }
    }
}

</style>