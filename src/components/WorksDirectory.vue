<template>
    <section id="work-list" class="has-ver-padding">
        <div class="section--inner has-ver-padding">
        	<div class="container">
                <SectionHeader title="Directory" />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat.</p>
                
        		<div class="works-row">
                    <WorkListShared v-for="workList in workLists" :key="workList.key" :workList="workList" />
        		</div>
        	</div>
        </div>
    </section>
</template>

<script>
import workLists from './json/worklist.json'
import SectionHeader from "@/components/SectionHeader.vue";
import WorkListShared from "@/components/shared/WorkListShared.vue";

export default {
    name: 'WorksDirectory',
    components: {
        SectionHeader,
        WorkListShared
    },
    data(){
        return {
            workLists
        }
    }
}
</script>

<style scoped lang="scss">
.works-row {
    @extend .row;
    margin-top: 3rem;
}
</style>
