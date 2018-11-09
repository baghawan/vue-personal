<template>
    <div class="home-content__wrapper">
    	<HomeIntro />
        <HomeWorks />
    	<HomeOutro />
    </div>
</template>

<script>
// @ is an alias to /src
import HomeIntro from '@/components/HomeIntro.vue'
import HomeWorks from '@/components/HomeWorks.vue'
import HomeOutro from '@/components/HomeOutro.vue'

import firstLoad from '@/helpers/firstload.js'


export default {
    name: 'home',
    components: {
        HomeIntro,
        HomeWorks,
        HomeOutro
    },
    methods: {
        firstLoad: firstLoad
    },
    mounted: function () {
        this.$once("hook:mounted", () => {
        this.firstLoad()
        })
    }
}
</script>

<style scoped lang="scss">
.home-content__wrapper {
    height: 100vh;
    overflow-y: hidden;
}

body.first-intro-finish {
    .home-content__wrapper {
        height: auto;
        overflow-y: auto;
    }
}
</style>
