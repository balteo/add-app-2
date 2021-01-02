<template>
    <div>
        <form @submit.prevent="onSearch">
            <label for="searchInput">Search</label>
            <input id="searchInput" type="text" v-model="searchInput">
            <input type="submit" value="Search">
        </form>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Emit } from 'vue-property-decorator';

export default class AdsSearch extends Vue {

    searchInput: string = '';

    @Emit('on-search')
    onSearch() {
        console.log('searchInput', this.searchInput);
        return this.searchInput;
    }
}
</script>
