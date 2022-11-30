<template>
  <div>
    <NuxtPage/>
  </div>
</template>

<script lang="ts">
import {mapActions, mapState} from "pinia";
import {useCoinsStore} from "~/stores/coinsStore";
import {onMounted} from "#imports";
import {useLocalCoinsStore} from "~/stores/localCoinsStore";
import 'vue3-marquee/dist/style.css'

export default {
  name: "App",
  mounted() {
    this.FETCH_COINS();
  },
  methods: {
    ...mapActions(useCoinsStore, ["FETCH_COINS"]),
  },
  setup() {
    const localStore = useLocalCoinsStore();

    onMounted(() => {
      localStore.REFRESH_COINS();
    });
  }
};
</script>