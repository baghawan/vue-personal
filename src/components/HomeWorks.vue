<template>
    <section id="work-list" class="has-ver-padding">
        <div class="section--inner">
        	<div class="container">
                <SectionHeader title="Selected Works" />
        		<div class="works-row">
        			<div class="works-col" v-for="workList in workLists">
        				<div class="work-item">
	        				<figure class="work-image" data-ratio="square">
						        <a href="#">
						            <img srcset="@/assets/img/dummy-key-1.jpg 1x, @/assets/img/dummy-key-1@2x.jpg 2x"
						                 src="@/assets/img/dummy-key-1.jpg" alt="Key 1" />

                                    <span class="overlay-grd"></span>

                                    <figcaption class="work-info">
                                        <h6 class="work-title">{{ workList.title }}</h6>
                                        <p class="work-label no-margin"><span v-for="label in workList.label">{{ label }}</span></p>
                                    </figcaption>
						        </a href="#">
						    </figure>
	        				
	        			</div>
        			</div>
        		</div>
        	</div>
        </div>
    </section>
</template>

<script>
import workLists from './json/worklist.json'
import SectionHeader from "@/components/SectionHeader.vue";

export default {
    name: 'HomeWorks',
    components: {
        SectionHeader
    },
    data() {
    	return {
    		workLists: workLists
    	}
    }
}
</script>

<style scoped lang="scss">
@import "../assets/styles/base/images.scss";
@import "../assets/styles/components/worklist.scss";
</style>