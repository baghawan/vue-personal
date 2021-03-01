<template>
    <div>
        <Header />
        <Nuxt />
    </div>
</template>

<script>
export default {
    head(){
        return {
            title: this.headTitle,
            link: [
                { rel: 'canonical', href: process.env.baseUrl + this.$route.path }
            ],
            meta: [

                // opengraph meta
                { name: 'og:type', content: 'website' },
                { name: 'og:url', content: process.env.baseUrl + this.$route.path },

                // twitter meta
                { name: 'twitter:card', content: 'summary' },
                { name: 'twitter:site', content: process.env.baseUrl + this.$route.path },
            ]
        }
    }
}
</script>