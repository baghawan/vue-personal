<template>
    <div class="section-header">
        <h3 class="no-margin">{{ title }}</h3>
    </div>
</template>

<script>
export default {
	name: "SectionHeader",
	props: {
		title: String
	}
};
</script>

<style scoped lang="scss">
@import "../assets/styles/components/_section-header.scss";
</style>
