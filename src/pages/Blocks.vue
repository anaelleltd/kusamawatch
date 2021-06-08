<template>
  <div class="content">
    <card>
      <template slot="header">
        <h2 class="title">Blocks Info</h2>
        <h3 class="category">Live data</h3>
      </template>
      <div class="row">
        <div v-for="icon in icons" class="font-icon-list col-lg-4 col-md-4 col-sm-6">
          <i class="tim-icons" :class="[`${icon}`]"></i>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-6 col-xs-6">
          <h4> CURRENT BLOCK </h4>
            <div>{{ blocknumber }}</div>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-6 col-xs-6">
          <h4> BLOCK TIME </h4>
            <div>TBC</div>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-6 col-xs-6">
          <h4> TIMESTAMP </h4>
            <div>{{ timestamp }}</div>
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
      blocknumber: 0,
      blocktime: 0,
      timestamp: 0,
      icons: [
        "icon-app",
        "icon-watch-time",
        "icon-bell-55"
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
