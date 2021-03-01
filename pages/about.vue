<template>
    <main class="dark:text-gray-600">
        <section id="about-intro" class="pt-8 md:pt-24">
            <div class="container">
                <div class="grid grid-cols-7 gap-0">
                    <div class="col-start-1 col-end-8 md:col-start-2 md:col-end-7">
                        <h1 class="title font-bold text-5xl xs:text-6xl md:text-5xl lg:text-6xl text-black dark:text-white mb-8 xl:mb-16">
                            Dian Baghawan Putera
                        </h1>

                        <p class="text-2xl xl:text-3xl italic text-black dark:text-white leading-tight mb-3 transition-color duration-300">
                            Specialized in refined digital web experiences.
                        </p>
                        <p class="text-lg xl:text-xl transition-color duration-300">
                            With focus on responsive, animated, and interactive content. Challenging conventions across mediums and platforms. And also delivering highly executed front-end user experiences by paying close attention to the nuances of design, optimization, and performance. My principium is to work closely with teams to drive growth and innovation through code quality and design.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script>
export default {
    data(){
        return {
            headTitle: 'About',
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

<style lang="scss" scoped>
main {
    padding-top: 60px;
    color: #939597;
}   


</style>
