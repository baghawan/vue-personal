<template>
    <div>
    	<HomeIntro />
    	<HomeWorks />
    </div>
</template>

<script>
// @ is an alias to /src
import HomeIntro from '@/components/HomeIntro.vue'
import HomeWorks from '@/components/HomeWorks.vue'
import firstLoad from '@/helpers/firstload.js'

export default {
    name: 'home',
    components: {
        HomeIntro,
        HomeWorks
    },
    methods: {
        firstLoad: firstLoad
    },
    mounted: function () {
        this.$nextTick(() => {
        this.firstLoad()
        })
    }
}
</script>
