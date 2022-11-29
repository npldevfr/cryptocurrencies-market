<template>
  <div class="CardChart" v-if="marketCap">
    <apexchart height="100%" :options="chartOptions" :series="series"/>
  </div>
</template>

<script lang="ts">
import VueApexCharts from "vue3-apexcharts";
import {defineComponent} from "vue";

export default defineComponent({
  name: "CardChart",
  props: {
    cardColor: {
      type: String,
      required: true,
    },
    marketCap: {
      required: true,
    }
  },
  components: {
    // [process.browser && 'apexchart']: () => import('vue3-apexcharts'),
    apexchart: VueApexCharts,
  },
  data: function () {
    return {
      chartOptions: {
        color: [this.cardColor],
        tooltip: {
          enabled: false,
        },
        chart: {
          type: 'area',
          id: 'vuechart-example',
          animations: {
            enabled: false,
          },
          toolbar: {
            show: false,
          },
          tooltip: {
            enabled: false,
          },
          sparkline: {
            enabled: true
          }
        },
        stroke: {
          curve: 'smooth',
          color: '#000000',
          width: 2
        },
        fill: {
          type: "gradient",
          opacity: 0.9,
          colors: [this.cardColor],
          gradient: {
            shadeIntensity: 0,
            opacityFrom: 0.7,
            opacityTo: 0.1,
            stops: [0, 100]
          }
        },
      },
      series: [
        {
          color: this.cardColor,
          name: "series-1",
          data: this.marketCap
        },
      ]
    }
  }
})
</script>

<style lang="scss" scoped>
.CardChart {
  margin-top: -5px;
}
</style>