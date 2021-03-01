<template>
    <main>
        <Header />
        <!-- <Slider /> -->
        <h1 class="title sr-only">
            baghawan
        </h1>
    </main>
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

                { name: 'og:title', content: `Baghawan | ${this.headTitle}` },
                { name: 'og:description', content: 'Description for Homepage' },
                { name: 'og:image', content: '' },

                { name: 'twitter:title', content: `Baghawan | ${this.headTitle}` },
                { name: 'twitter:description', content: 'Description for Homepage' },
                { name: 'twitter:image', content: '' }
            ]
        }
    }
}
</script>

<style></style>
