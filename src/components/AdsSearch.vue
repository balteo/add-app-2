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

export default class AdsSearch extends Vue {

    searchInput: string = '';

    onSearch() {
        console.log('searchInput', this.searchInput);
        this.$emit('on-search', this.searchInput);
    }
}
</script>
