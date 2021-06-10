<template>
  <div class="content">
    <card>
      <template slot="header">
        <h2 class="title">Council Info</h2>
        <h3 class="category">Stored data</h3>
      </template>
      <div class="row">
        <div v-for="icon in icons" class="font-icon-list col-lg-4 col-md-4 col-sm-6">
          <i class="tim-icons" :class="[`${icon}`]"></i>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-6 col-xs-6">
          <h4> ACTIVE REGISTRARS </h4>
            <div>{{ totalregistrars }}</div>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-6 col-xs-6">
          <h4> TOTAL KSM ISSUANCE </h4>
            <div>{{ totalKSM }}</div>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-6 col-xs-6">
          <h4> PROPOSALS FUNDED </h4>
            <div>{{ totalproposals }}</div>
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
      totalregistrars: 0,
      totalKSM: 0,
      totalproposals: 0,
      icons: [
        "icon-badge",
        "icon-coins",
        "icon-paper"
      ],
    }
  },
  methods:{
    getTotalRegistrars(){
      api.then(api => {
        api.query.identity.registrars().then(result => {
          this.totalregistrars = JSON.parse(result).length;
        })
      })
    },
    getTotalKSM(){
      api.then(api => {
        api.query.balances.totalIssuance().then(result => {
          this.totalKSM = result.toHuman();
        })
      })
    },
    getTotalProposals(){
      api.then(api => {
        api.query.council.proposalCount().then(tp => this.totalproposals = tp);
      })
    }
  },
  created(){
    this.getTotalRegistrars();
    this.getTotalKSM();
    this.getTotalProposals();
  },
};
</script>
<style>
</style>
