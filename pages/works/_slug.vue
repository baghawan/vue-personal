<template>
    <article>
        <nuxt-content :document="work" />
    </article>
</template>

<script>
export default {
    async asyncData({ $content, params }) {
        const work = await $content('works', params.slug).fetch()

        return { work }
    }
}
</script>

<style lang="scss" scoped></style>