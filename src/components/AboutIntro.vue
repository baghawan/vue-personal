<template>
    <section id="about-intro" class="has-ver-padding flexed halign-center">
        <div class="container">
            <!-- <p class="about-text-content">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p> -->

            <p class="about-text-content">
                I'm an Indonesian based Designer and Frontend Developer. Living and working in Bandung.
                Specialized and focused in Web Design, UX/UI, and Identity.
                Currently i spend my weekdays at <a href="https://www.mirumagency.com/en/country/indonesia" target="_blank" class="link">Mirum</a> working and learning as a Frontend Developer,
                and sometimes spend my weekends roaming the streets to paint.
            </p>

            <p class="social-links no-margin">
                <span>Connect</span>
                <a href="mailto:dianbaghawanputera@gmail.com?Subject=Hello" target="_blank" class="link"><i class="icon-mail"></i></a>
                <a href="https://github.com/baghawan" target="_blank" class="link"><i class="icon-github-circled"></i></a>
                <a href="https://instagram.com/baghawan" target="_blank" class="link"><i class="icon-instagram"></i></a>
            </p>
        </div>
    </section>
</template>

<script>
import SectionHeader from "@/components/SectionHeader.vue"

export default {
    name: 'AboutIntro',
    components: {
        SectionHeader
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../assets/styles/components/about-intro.scss";
</style>
