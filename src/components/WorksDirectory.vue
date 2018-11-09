<template>
    <section id="work-list" class="has-ver-padding">
        <div class="section--inner has-ver-padding">
        	<div class="container">
                <SectionHeader title="Directory" />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat.</p>
        		<div class="works-row">
        			<div class="works-col" v-for="workList in workLists">
        				<div class="work-item">
	        				<figure class="work-image no-margin" data-ratio="square">
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
    name: 'WorksDirectory',
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

.works-row {
    margin-top: 3rem;
}
</style>
