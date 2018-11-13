<template>
    <section id="home-outro" class="has-ver-padding">
            <div class="section--inner">
                <div class="container">
                    <p>
                        Currently working at <a href="https://mineral.co.id/" target="_blank" class="link">Mineral Studio</a> as a Frontend Developer,
                        and had the opportunity to do projects for some of the most respected brands around.
                        I am happiest working on meaningful projects with creative and passionate people.
                    </p>
                </div>
            </div>
            <div class="section--inner has-ver-padding">
                <div class="container">
                    <SectionHeader title="Selected Clients" />
                    <p>I've been fortunate enough to produce work for these clients.</p>

                    <ul class="brand-name">
                        <li v-for="Brand in Brands.Brands">{{ Brand }}</li>
                    </ul>
                </div>
            </div>
            <div class="section--inner">
                <div class="container">
                    <p>
                        Thanks for stopping by.
                        <br/>
                        Feel free to <a href="mailto:dianbaghawanputera@gmail.com" class="link">Get in Touch</a>
                    </p>
                </div>
            </div>
        </section>
</template>

<script>
import Brands from './json/brands.json'
import SectionHeader from "@/components/SectionHeader.vue";

export default {
    name: 'HomeOutro',
    components: {
        SectionHeader
    },
    data() {
    	return {
    		Brands: Brands
    	}
    }
}
</script>

<style scoped lang="scss">
@import "../assets/styles/components/home-outro.scss";
</style>