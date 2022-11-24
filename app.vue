<template>
  <div>
    <NuxtPage/>
  </div>
</template>

<script lang="ts">
import {mapActions, mapState} from "pinia";
import {useCoinsStore} from "~/stores/coinsStore";

export default {
  name: "App",
  mounted() {
    this.FETCH_COINS();
  },
  methods: {
    ...mapActions(useCoinsStore, ["FETCH_COINS"]),
  }
};
</script>