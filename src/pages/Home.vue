<template>
  <div class="content">
    <div class="row">
      <div class="col-12">
        <card
        type="chart"
        >
        <template slot="header">
          <div class="row">
            <div class="col-sm-6">
                <h5 class="card-category">News</h5>
                <h3 class="card-title">PLO Summary</h3>
            </div>
            <div class="col-sm-6">
              <div class="btn-group btn-group-toggle"
                   data-toggle="buttons">
                     <label v-for="(option, index) in bigLineChartCategories"
                            :key="option"
                            class="btn btn-success btn-sm btn-simple"
                            :class="{active:bigLineChart.activeIndex === index}"
                            :id="index">
                        <input type="radio"
                              @click="initBigChart(index)"
                              name="options" autocomplete="off"
                              :checked="bigLineChart.activeIndex === index">
                        {{ option }}
                     </label>
              </div>
            </div>
          </div>
        </template>
        <line-chart
                    class="chart-area"
                    ref="bigChart"
                    chart-id="big-line-chart"
                    :chart-data="bigLineChart.chartData"
                    :gradient-colors="bigLineChart.gradientColors"
                    :gradient-stops="bigLineChart.gradientStops"
                    :extra-options="bigLineChart.extraOptions">
        </line-chart>
        </card>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-6">
        <card
        type="chart"
        cardCol>
        <template slot="header">
          <h5 class="card-category">Top rewarders</h5>
          <h3 class="card-title"><i class="tim-icons icon-gift-2 text-info "></i> Percentage of initial supply</h3>
        </template>
          <bar-chart
                  class="chart-area"
                  chart-id="blue-bar-chart"
                  :chart-data="blueBarChart.chartData"
                  :gradient-stops="blueBarChart.gradientStops"
                  :extra-options="blueBarChart.extraOptions">
          </bar-chart>
        </card>
      </div>
      <div class="col-lg-6">
        <card
        type="chart"
        cardCol>
        <template slot="header">
          <h5 class="card-category">Top Liquidity</h5>
          <h3 class="card-title"><i class="tim-icons icon-money-coins text-info "></i> Pricing in KSM</h3>
        </template>
          <bar-chart
                  class="chart-area"
                  chart-id="purple-bar-chart"
                  :chart-data="purpleBarChart.chartData"
                  :gradient-stops="purpleBarChart.gradientStops"
                  :extra-options="purpleBarChart.extraOptions"
                  :min="0">
          </bar-chart>
        </card>
      </div>
    </div>
    <card>
    <div slot="footer" class="button-container text-center">
      <h5 class="card-category"> Contact </h5>
      <base-button icon round class="btn-facebook">
        <a href="https://t.me/AnaelleLTD"><i class="fab fa-telegram"></i></a>
      </base-button>
      <base-button icon round class="btn-google">
        <a href="https://www.reddit.com/user/Nachann26/"><i class="fab fa-reddit"></i></a>
      </base-button>
    </div>
  </card>
  </div>
</template>
<script>

import {
  Card
} from "@/components/index";

import LineChart from '@/components/Charts/LineChart';
import BarChart from '@/components/Charts/BarChart';
import * as chartConfigs from '@/components/Charts/config';
import BaseButton from '@/components/BaseButton';

import config from '@/config';

export default {
  components: {
    Card,
    LineChart,
    BarChart,
  },
  data(){
    return{
      Table: {
            'background-color': '#f9f9f9'
        },
      bigLineChartCategories:[
        "Live Parachains",
        "Listed projects",
        "Ongoing Events"
      ],
      bigLineChart: {
        allData: [
          [1, 1, 1, 2, 3, 4, 5, 6],
          [0, 6, 13, 12, 11, 16, 16, 15],
          [10, 15, 8, 7, 5, 4, 4, 4]
        ],
        activeIndex: 0,
        chartData: { datasets: [{ }]},
        extraOptions: chartConfigs.greenChartOptions,
        gradientColors: config.colors.primaryGradient,
        gradientStops: [1, 0.4, 0],
        categories: []
      },
      blueBarChart: {
        extraOptions: chartConfigs.blueChartOptions,
        chartData: {
          labels: ['RMRK', 'KSX', 'MOVR', 'GOV', 'AIR', 'PSWAP', 'SDN', 'GENS'],
          datasets: [{
            label: "%",
            smooth: true,
            fill: true,
            borderColor: config.colors.info,
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            data: [100, 40, 30, 30, 27, 25, 22, 20],
          }]
        },
        gradientColors: config.colors.primaryGradient,
        gradientStops: [1, 0.4, 0],
      },
      purpleBarChart: {
        extraOptions: chartConfigs.purpleChartOptions,
        chartData: {
          labels: ['XRT', 'K-PHA', 'KYL', 'PSWAP', 'KPN' ,'CSM', 'CRING', 'GENS'],
          datasets: [{
            label: "$",
            fill: true,
            borderColor: config.colors.danger,
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            data: [0.048382, 0.002154, 0.0006458, 0.00059, 0.0002420, 0.000198, 0.0000089, 0.00007],
          }]
        },
        gradientColors: ['rgba(66,134,121,0.15)', 'rgba(66,134,121,0.0)', 'rgba(66,134,121,0)'],
        gradientStops: [1, 0.4, 0],
      }
    }
  },
  computed:{
  },
  methods:{
    initBigChart(index) {
      let chartData = {
        datasets: [{
          fill: true,
          borderColor: config.colors.primary,
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: config.colors.primary,
          pointBorderColor: 'rgba(255,255,255,0)',
          pointHoverBackgroundColor: config.colors.primary,
          pointBorderWidth: 20,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 15,
          pointRadius: 4,
          data: this.bigLineChart.allData[index]
        }],
        labels: ['4th June', '11th June', '18th June', '25th June', '2nd July', '9th July', '16th July', '23rd July'],
      }
      this.$refs.bigChart.updateGradients(chartData);
      this.bigLineChart.chartData = chartData;
      this.bigLineChart.activeIndex = index;
    }
  },
  mounted(){
    this.i18n = this.$i18n;
    this.initBigChart(0);
  },
}
</script>
<style>
</style>
