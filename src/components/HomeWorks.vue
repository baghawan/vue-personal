<template>
    <section id="work-list" class="has-ver-padding">
        <div class="section--inner has-ver-padding">
        	<div class="container">
        		<div class="works-row">
        			<div class="works-col" v-for="workList in workLists">
        				<div class="work-item">
	        				<figure class="work-image no-margin" data-ratio="landscape">
						        <a href="#">
						            <img srcset="@/assets/img/dummy-key-1.jpg 1x, @/assets/img/dummy-key-1@2x.jpg 2x"
						                 src="@/assets/img/dummy-key-1.jpg" alt="Key 1" />
						        </a href="#">
						    </figure>
	        				<figcaption>
						        <h5 class="work-title"><a href="#" class="link">{{ workList.title }}</a></h5>
						        <p class="work-label"><span>{{ workList.label }}</span></p>
						        <p class="work-description">{{ workList.description }}</p>
						    </figcaption>
	        			</div>
        			</div>
        		</div>
        	</div>
        </div>
    </section>
</template>

<script>
import workLists from './json/worklist.json'

export default {
    name: 'HomeWorks',
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