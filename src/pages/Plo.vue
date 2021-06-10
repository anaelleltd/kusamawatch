<template>
  <div class="content">
    <card>
      <template slot="header">
        <h2 class="title">Parachains Info</h2>
        <h3 class="category">On-chain data</h3>
      </template>
      <div class="row">
        <div v-for="icon in icons" class="font-icon-list col-lg-4 col-md-4 col-sm-6">
          <i class="tim-icons" :class="[`${icon}`]"></i>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-6 col-xs-6">
          <h4> AUCTIONS STARTED </h4>
            <div>{{ auctioncount }}</div>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-6 col-xs-6">
          <h4> ACTIVE CROWDLOANS </h4>
            <div>{{ crowdloans }}</div>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-6 col-xs-6">
          <h4> LIVE PARACHAINS </h4>
            <div>{{ liveparachains }}</div>
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
      auctioncount: 0,
      crowdloans: 0,
      liveparachains: 0, 
      icons: [
        "icon-cloud-upload-94",
        "icon-satisfied",
        "icon-check-2"
      ],
    }
  },
  methods: {
    getAuctionCount(){
      api.then(api => {
        api.query.auctions.auctionCounter().then(ac => this.auctioncount = ac);
      })
    },
    getCrowdloans(){
      api.then(api => {
        api.query.crowdloan.newRaise().then(result => {
          this.crowdloans = JSON.parse(result).length;
        })
      })
    },
    getLiveParachains(){
      api.then(api => {
        api.query.paras.parachains().then(result => {
          this.liveparachains = JSON.parse(result).length;
        })
      })
    }
  },
  created(){
    this.getAuctionCount();
    this.getCrowdloans();
    this.getLiveParachains();
  }
};
</script>
<style>
</style>
