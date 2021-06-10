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
          <h4> BLOCK NUMBER </h4>
            <div>{{ blocknumber }}</div>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-6 col-xs-6">
          <h4> RUNTIME VERSION </h4>
            <div>{{ runtime }}</div>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-6 col-xs-6">
          <h4> CURRENT TIMESTAMP </h4>
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
      runtime: 0,
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
    getRuntime() {
      api.then(api => {
          api.rpc.state.getRuntimeVersion().then(result => {
            this.runtime = result.specVersion.toHuman();
        });
      });
    },
    getTimestamp(){
      api.then(api => {
        api.query.timestamp.now().then(ts => this.timestamp = ts);
      })
    }
  },
  created(){
    this.getBlockNumber();
    this.getRuntime();
    this.getTimestamp();
  }
};
</script>
<style>
</style>
