<template>
  <div class="content">
    <div class="row">
      <div class="col-lg-12 col-md-12">
        <card>
          <template slot="header">
            <h2 class="title">Noticeboard</h2>
            <h3 class="category">Breaking news</h3>
         </template>
          <base-alert type="primary" dismissible>
            <span>PLOs are coming soon!</span>
          </base-alert>
          <base-alert type="info" dismissible>
            <span>You need to <b> unbond your KSM</b> ASAP.</span>
          </base-alert>
          <base-alert type="success" dismissible>
            <span>Keep an eye on Pre-PLO events webpages for more information.</span>
          </base-alert>
          <base-alert type="warning" dismissible>
            <span>Make sure you have a <u>strategy</u> for allocating your KSM between loaning and staking.</span>
          </base-alert>
          <base-alert type="danger" dismissible>
            <span><b> NEVER </b> Send your KSM to anybody. PLOs are conducted through wallets and DApps.</span>
          </base-alert>
        </card>
      </div>
    </div>
  </div>
</template>
<script>
import {
  Card
} from "@/components/index";

import BaseAlert from '@/components/BaseAlert';
import BaseButton from '@/components/BaseButton';
import NotificationTemplate from './Notifications/NotificationTemplate';


export default{
  components:{
    BaseAlert,
    BaseButton,
    Card
  },
  data(){
    return {
      type:["","info","success","warning","danger"],
      notifications:{
        topCenter: false
      }
    };
  },
  methods:{
    notifyVue(verticalAlign, horizontalAlign){
      const color = Math.floor(Math.random() * 4 + 1);
      this.$notify({
        component: NotificationTemplate,
        icon: "tim-icons icon-bell-55",
        horizontalAlign: horizontalAlign,
        verticalAlign: verticalAlign,
        type: this.type[color],
        timeout: 0
      });
    }
  }
}
</script>
<style>
</style>
