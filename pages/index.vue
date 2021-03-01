<template>
    <main class="h-screen">
        <h1 class="title sr-only">
            baghawan
        </h1>

        <client-only>
        <swiper class="swiper h-full" :options="swiperOption">
            <swiper-slide v-for="work of works" :key="work.slug" class="flex items-center justify-center">
                <div class="work--wrapper text-center px-4">
                    <h2 class="text-4xl xs:text-5xl md:text-6xl font-bold mb-12">{{ work.title }}</h2>
                    <NuxtLink :to="{ name: 'works-slug', params: { slug: work.slug } }" class="btn btn-work">See Details</NuxtLink>
                </div>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
        </client-only>
    </main>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
    components: {
        Swiper,
        SwiperSlide
    },

    async asyncData({ $content, params }) {
        const works = await $content('works', params.slug)
            .only(['title', 'description', 'slug'])
            // .sortBy('createdAt', 'asc')
            .fetch()

        return {
            works
        }
    },
    
    data(){
        return {
            headTitle: 'Front-End Engineer',
            swiperOption: {
                speed: 800,
                allowTouchMove: false,
                autoplay: {
                    delay: 5000,
                },
                effect: 'fade',
                fadeEffect: {
                    crossFade: true
                },
                pagination: {
                    el: '.swiper-pagination',
                    dynamicBullets: true
                }
            }
        }
    },
    head(){
        return {
            title: this.headTitle,
            meta: [
                { hid: 'description', name: 'description', content: 'Front-end Engineer based in Indonesia, specialized in refined digital web experiences' },

                { name: 'og:title', content: `Baghawan | ${this.headTitle}` },
                { name: 'og:description', content: 'Front-end Engineer based in Indonesia, specialized in refined digital web experiences' },
                { name: 'og:image', content: '' },

                { name: 'twitter:title', content: `Baghawan | ${this.headTitle}` },
                { name: 'twitter:description', content: 'Front-end Engineer based in Indonesia, specialized in refined digital web experiences' },
                { name: 'twitter:image', content: '' }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.work--wrapper {
    max-width: 450px;
}

.btn-work {
    padding: .45rem 2rem;
    background-color: #F5DF4D;
    color: #1a202c;
    border-radius: 2rem;
    font-weight: 500;
    display: inline-block;
    transition: background-color 300ms ease-in-out;

    &:hover {
        background-color: darken(#F5DF4D, 15%);
    }
}

.swiper-pagination {
    bottom: 2rem;

    /deep/ .swiper-pagination-bullet {
        background-color: #939597;

        &-active {
            background-color: #F5DF4D;
        }
    }
}
</style>
