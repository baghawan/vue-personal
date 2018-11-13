<template>
    <section id="work-list" class="has-ver-padding">
        <div class="section--inner has-ver-padding">
        	<div class="container">
                <SectionHeader title="Directory" />
                <!-- <p class="small">
                    The information, images, and/or data contained in this page are copyrighted<br/>
                    by their respective owner and may not be distributed, modified, reproduced<br/>
                    in whole or in part without permission of the respective owner.
                </p> -->
                
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
