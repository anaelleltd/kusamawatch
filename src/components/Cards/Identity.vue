<template>
  <card type="user">
    <div class="identity">
      <a href="#">
        <img class="avatar" src="../../assets/img/profile.png" alt="Profile picture">
        <h5 class="title">{{ user.fullName || address }}</h5>
      </a>
      <p class="address" v-if="user.fullName">
        {{ address }}
      </p>
    </div>
    <p class="card-description" v-if="user.email">
      <a href="mailto:user.email">{{ user.email }}</a>
    </p>
  </card>
</template>
<script>
import { Card } from "@/components/index";
import api from "@/kusama.js";
import { hexToString } from "@polkadot/util";

export default {
  components: {
    Card
  },
  data() {
    return {
      user: {
          fullName: "Test",
          email: "test@test.com"
      }
    };
  },
  props: {
      address: String
  },
  watch: {
    address: function(val) {
      this.readIdentity(val);
    },
  },
  methods: {
    readIdentity(address) {
      api.then(async (api) => {
        let id = JSON.parse(await api.query.identity.identityOf(address));
        console.log(id.info);     
        this.user.fullName = (id.info.display.raw) ? hexToString(id.info.display.raw) : "";
        this.user.email = (id.info.email.raw) ? hexToString(id.info.email.raw) : "";
      });
    },
  },
};
</script>
<style>
</style>
