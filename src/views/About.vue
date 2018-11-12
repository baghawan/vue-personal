<template>
    <div class="about-content__wrapper">
        <AboutIntro />
    </div>
</template>

<script>
import AboutIntro from '@/components/AboutIntro.vue'

export default {
	components: {
        AboutIntro
    },
	mounted: function() {
        document.getElementById('logo').setAttribute('class', 'logo show')
    }
}
</script>
