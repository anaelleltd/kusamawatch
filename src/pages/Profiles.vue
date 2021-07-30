<template>
  <div class="content">
    <card>
      <template slot="header">
        <h2 class="title">Profiles</h2>
        <h3 class="category">On-chain identities</h3>
        <p>View Kusama users' details.</p>
      </template>
      <div class="row">
        <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 col-xs-12">
          <input
            class="form-control"
            type="text"
            placeholder="PhngluimglwnafhCthulhuRlyehwgahnaglfhtagn"
            id="idlookup"
            v-model="newaddress"
            v-on:keyup.enter="lookup"
          />
          <p>
            {{ error }}
          </p>
        </div>
      </div>
    </card>
    <card>
      <identity :address="address"></identity>
    </card>
  </div>
</template>
<script>
import { Card } from "@/components/index";
import api from "@/kusama.js";
import { checkAddress } from "@polkadot/util-crypto";

export default {
  components: {
    Card,
    Identity: () => import("@/components/Cards/Identity"),
  },
  data() {
    return {
      address: "",
      error: "",
      newaddress: "",
      currentPrefix: "0",
    };
  },
  methods: {
    lookup: function() {
      if (this.validateAddress(this.newaddress)) {
        this.address = this.newaddress;
      }
    },
    validateAddress: function(address) {
      let check = checkAddress(address, this.currentPrefix);
      console.log(check[1]);
      this.error = check[1];
      return check[0];
    },
  },
  created: function() {
    api.then(async (api) => {
      this.currentPrefix = JSON.parse(
      await api.rpc.system.properties()
      ).ss58Format;
    });
  },
};
</script>
<style>
</style>
