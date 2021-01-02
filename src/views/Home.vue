<template>
    <div class="home">
        <AdsSearch @on-search="search"/>
        <AdsList :filter="inputSearch"/>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import AdsList from '@/components/AdsList.vue';
import AdsSearch from '@/components/AdsSearch.vue';


@Component({
    components: {
        AdsList,
        AdsSearch,
    },
})
export default class Home extends Vue {
    public inputSearch: string = '';

    public search(inputSearch: string) {
        this.inputSearch = inputSearch;
    }
}
</script>
