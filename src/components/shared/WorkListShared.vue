<template>
	<div class="works-col">
		<div class="work-item">
			<figure class="work-image no-margin" data-ratio="square">
		        <a @click="goToDetail(workList.slug)">
		            <img :src="workList.thumb" alt="Key 1" />

		            <span class="overlay-grd"></span>

		            <figcaption class="work-info">
		                <h6 class="work-title">{{ workList.title }}</h6>
		                <p class="work-label no-margin"><span v-for="label in workList.label">{{ label }}</span></p>
		            </figcaption>
		        </a>
		    </figure>
		</div>
	</div>
</template>

<script>
export default {
    name: 'WorkListShared',
    props: ['workList'],
    methods: {
    	goToDetail: function(workId) {
    		let wId = workId
			this.$router.push({
				name:'work-detail',
				params: {
					Wid: wId
				}
			})
		}
    }
}
</script>

<style scoped lang="scss">
@import "../../assets/styles/base/images.scss";
@import "../../assets/styles/components/worklist.scss";
</style>
