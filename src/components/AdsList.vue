<template>
    <ul>
        <li v-for="ad in ads">
            {{ ad.title }},
            {{ ad.description }}
        </li>
    </ul>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import { Ad } from '@/models/ad.model';

@Component
export default class AdsList extends Vue {

    public ads: Ad[] = [];
    @Prop() private filter!: string;

    @Watch('filter')
    public async onPropertyChange() {
        const response = await fetch('/api/ads?q=' + this.filter);
        this.ads = await response.json();
    }

    public async created() {
        const response = await fetch('/api/ads');
        this.ads = await response.json();
    }
}
</script>
