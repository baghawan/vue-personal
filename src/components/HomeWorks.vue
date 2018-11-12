<template>
    <section id="work-list" class="has-ver-padding">
        <div class="section--inner">
        	<div class="container">
                <SectionHeader title="Latest Works" />
        		<div class="works-row">
                    <WorkListShared v-for="workList in WorksToDisplay" :key="workList.key" :workList="workList" />
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
    name: 'HomeWorks',
    components: {
        SectionHeader,
        WorkListShared
    },
    data() {
    	return {
    		workLists: workLists
    	}
    },
    computed: {
        WorksToDisplay: function() {
            // ref: https://stackoverflow.com/questions/39483677/how-to-get-first-n-elements-of-an-object-using-lodash
            function firstN(obj, n) {
                //get the keys out
                return Object.keys(obj)

                    //this will ensure consistent ordering of what you will get back
                    // .sort()

                    //get the first N
                    // .slice(0, n)

                    //get the last N
                    .slice(-n)

                    //generate a new object out of them
                    .reduce(function(memo, current) {
                        memo[current] = obj[current]
                        return memo;
                    }, {})
            }

            var obj = this.workLists
            // console.log(firstN(obj, 3))

            return firstN(obj, 1)
        }
    },
    mounted(){
        // reverse the order on mounted
        var list = $('#work-list .works-row');
        var listItems = list.children('.works-col');

        list.append(listItems.get().reverse());
    }
}
</script>

<style scoped lang="scss">
#work-list {
    background-color: #f9f9f9;

    .works-row {
        @extend .row;
    }
}
</style>
