<template>
    <div class="container">
        <div>
            <Logo />
            <h1 class="title">
                baghawan
            </h1>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            headTitle: 'Front-End Engineer',
        }
    },
    head(){
        return {
            title: this.headTitle,
            meta: [
                { hid: 'description', name: 'description', content: 'Description for Homepage' },

                // opengraph meta
                { name: 'og:type', content: 'website' },
                { name: 'og:url', content: process.env.baseUrl + this.$route.path },
                { name: 'og:title', content: `Koridor 137 | ${this.headTitle}` },
                { name: 'og:description', content: 'Description for Homepage' },
                { name: 'og:image', content: '' },

                // twitter meta
                { name: 'twitter:card', content: 'summary' },
                { name: 'twitter:site', content: process.env.baseUrl + this.$route.path },
                { name: 'twitter:title', content: `Koridor 137 | ${this.headTitle}` },
                { name: 'twitter:description', content: 'Description for Homepage' },
                { name: 'twitter:image', content: '' }
            ]
        }
    }
}
</script>

<style></style>
