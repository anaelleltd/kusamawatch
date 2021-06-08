<template>
  <div class="content">
    <card>
      <template slot="header">
        <h2 class="title">Parachains Info</h2>
        <h3 class="category">Events data</h3>
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
          <h4> CROWDLOANS FUNDS </h4>
            <div>{{ crwdloanfunds }}</div>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-6 col-xs-6">
          <h4> EVENTS SUBMISSION </h4>
            <div>{{ totalevents }}</div>
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
      crwdloanfunds: 0,
      totalevents: 0,
      icons: [
        "icon-check-2",
        "icon-chart-pie-36",
        "icon-send"
      ],
    }
  },
  methods: {
    getBlockNumber() {
      api.then(api => {
        api.rpc.chain.getBlock().then(result => {
          this.blocknumber = result.block.header.number.toNumber();
        });
      });
    },
    getTimestamp(){
      api.then(api => {
        api.query.timestamp.now().then(ts => this.timestamp = ts);
        })
    },
    /*getEvents() {
      api.then(api => {
          api.query.system.events.range(starthdr, endhdr).then(result => {
            this.event = result.block.header.??();
        });
      });
    }*/
  },
  created(){
    this.getBlockNumber();
    this.getTimestamp();
  }
};
</script>
<style>
</style>
