<template>
  <div class="content">
    <card>
      <template slot="header">
        <h2 class="title">Council Info</h2>
        <h3 class="category">Updated data</h3>
      </template>
      <div class="row">
        <div v-for="icon in icons" class="font-icon-list col-lg-4 col-md-4 col-sm-6">
          <i class="tim-icons" :class="[`${icon}`]"></i>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-6 col-xs-6">
          <h4> TOTAL REGISTRARS </h4>
            <div>TBC</div>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-6 col-xs-6">
          <h4> TOTAL KSM ISSUANCE </h4>
            <div>{{ totalKSM }}</div>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-6 col-xs-6">
          <h4> TOTAL PROPOSALS </h4>
            <div>TBC</div>
        </div>
      </div>
    </card>
  </div>
</template>
<script>

import {
  Card
} from "@/components/index";

import api from "../kusama.js";


export default{
  components:{
    Card
  },
  data(){
    return{
      totalregistrar: 0,
      totalKSM: 0,
      totalproposal: 0,
      icons: [
        "icon-badge",
        "icon-coins",
        "icon-paper"
      ],
    }
  },
  methods:{
    getTotalKSM(){
      api.then(api => {
        api.query.balances.totalIssuance().then(result => {
          this.totalKSM = result.toHuman();
        })
        })
      }
    },
  created(){
    this.getTotalKSM();
    },
  };
</script>
<style>
</style>
