<template>
    <div class="works-content__wrapper">
        <WorksDirectory />
    </div>
</template>

<script>
import WorksDirectory from '@/components/WorksDirectory.vue'

export default {
	components: {
        WorksDirectory
    },
	mounted: function() {
        document.getElementById('logo').setAttribute('class', 'logo show')
    }
}
</script>
