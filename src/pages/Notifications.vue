<template>
  <div class="content">
    <div class="row">
      <div class="col-lg-12 col-md-12">
        <card>
          <template slot="header">
            <h2 class="title">Notifications</h2>
            <h3 class="category">On-chain events</h3>
         </template>
         <div class="row">
          <div class="col-lg col-md col-sm-6">
            <card v-for="(event, block) in events">
              {{ block }}
              <p v-for="e in event">
              {{ e }}
              </p>
          </card>
          </div>
         </div>
        </card>
      </div>
    </div>
  </div>
</template>
<script>
import { Card } from "@/components/index";

import api from "../kusama.js";

export default {
  components: {
    Card,
  },
  data() {
    return {
      events: {},
      unsub: null,
    };
  },
  methods: {
    subscribe: async function(){
      let myapi = await api;

      // Set API query for events
      myapi.query.system.events(async (events) => {

        // Get block number from block header
        let header = await myapi.rpc.chain.getHeader();
        let blockNumber = header.toJSON().number;

        // Format event data 
        let eventArray = [];
        events.forEach((record) => {
          const { event, phase } = record;
          const types = event.typeDef;
          console.log(event);
          eventArray.push(
            `\t${event.section}:${
              event.method
            }`
          );
        });

        // Check subscription status
        console.log("Still here");
        this.$set(this.events, blockNumber, eventArray);
      })
      .then((_unsub) => (this.unsub = _unsub)); //Unsub
    },
    unsubscribe: function() {
      if (this.unsub) {
        this.unsub();
        console.log("Unsubbed");
      }
    },
  },
  created(){
    this.subscribe();
  },
  beforeDestroy() {
    this.unsubscribe();
  },
};
</script>
<style>
</style>
