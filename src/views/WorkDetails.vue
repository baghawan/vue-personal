<template>
    <div class="workDetail-content__wrapper">
        <section id="work-details" class="has-ver-padding" v-for="workList in workLists" :key="workList.key" v-if="wId == workList.slug">
	        <div class="section--inner has-ver-padding">
	        	<div class="work-details--intro">
	        		<div class="container">
	        			<div class="work-title_wrapper flexed halign-justify">
	        				<h1 class="work-title">{{ workList.title }}</h1>
	        				<a :href="workList.link" target="_blank">
	        					<i class="icon-link-ext"></i>
	        				</a>
	        			</div>
	        			<p class="work-label no-margin"><span v-for="label in workList.label">{{ label }}</span></p>

	        			<div class="work-extra-info">
	        				<p>
	        					<strong>Year:</strong>
	        					<span>{{ workList.year }}</span>
	        				</p>
	        			</div>

	        			<p class="client-description">{{ workList.clientDesc }}</p>
	        		</div>
	        	</div>

	        	<div class="work-details--content">
	        		<div class="container">
	        			<figure class="text-center">
	        				<img v-for="images in workList.images" :src="'/img/'+images">
	        			</figure>
	        			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
	        		</div>
	        	</div>

	        	<div class="back-top text-center">
	        		<div class="container">
	        			<div class="flexed halign-justify">
	        				<a href="#" id="back-to-top" class="link" @click.prevent="backToWork()">< Directory</a>
	        				<a href="#" id="back-to-top" class="link" @click.prevent="backToTop()">Back to Top</a>
	        			</div>
	        		</div>
	        		
	        	</div>
	        </div>
	    </section>
    </div>
</template>

<script>
import workLists from '@/components/json/worklist.json'

export default {
	name:'work-detail',

	data(){
		return {
			wId: this.$route.params.Wid,
			title:'work-detail',
			workLists
		}
	},
	methods: {
		backToTop(){
			window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
            })
		},
		backToWork() {
			this.$router.push({
				name:'works'
			})
		}
	},
	mounted: function() {
        document.getElementById('logo').setAttribute('class', 'logo show')
    }
}
</script>

<style scoped lang="scss">
@import "../assets/styles/components/work-details.scss";
</style>
