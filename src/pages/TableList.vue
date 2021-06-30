<template>
  <div class="content">
    <div class="row">
      <div class="col-12">
        <card>
          <template slot="header">
            <h2 class="title">Tokenomics</h2>
            <h3 class="category">Overview</h3>
          </template>
          <div class="table-full-width text-center">
            <base-table :data="table1.data"
                        :columns="table1.columns"
                        thead-classes="text-primary">
            </base-table>
          </div>
        </card>
      </div>
    </div>
  </div>
</template>
<script>

import {
  Card
} from "@/components/index";

import BaseTable from "@/components/BaseTable";

const tableColumns = ["Project", "Supply", "Allocation", "Rewards", "Events", "Webpage"];
const tableData = [
        {
          "id": 1,
          "project": "Altair",
          "supply": "425M",
          "allocation": "<27%",
          "rewards": ">50 AIR",
          "events": "CFG holders airdrop",
          "webpage": "https://medium.com/centrifuge/announcing-altair-centrifuges-kusama-parachain-d4cd7d328187"
        },
        {
          "id": 2,
          "project": "Sora",
          "supply": "600M",
          "allocation": "25%",
          "rewards": ">600 PSWAP",
          "events": "LP farming",
          "webpage": "https://medium.com/polkaswap/pswap-rewards-1-polkaswap-liquidity-reward-farming-3e045d71509"
        },
        {
          "id": 3,
          "project": "Zeitgeist",
          "supply": "100M",
          "allocation": "6.6%",
          "rewards": " % pool",
          "events": "Bonus Derby",
          "webpage": "https://proto.zeitgeist.pm/kusama-derby"
        },
        {
          "id": 4,
          "project": "Kpron",
          "supply": "80M",
          "allocation": "<8%",
          "rewards": ">10 KPN",
          "events": "None",
          "webpage": "https://apron-network.medium.com/apron-network-will-compete-the-kusama-parachain-slot-auction-14c13de5a645"
        },
        {
          "id": 5,
          "project": "Subsocial",
          "supply": "100M",
          "allocation": "20%",
          "rewards": "-- SUB",
          "events": "KSM holders airdrop",
          "webpage": "https://app.subsocial.network/faucet"
        },
        {
          "id": 6,
          "project": "SubDAO",
          "supply": "1B",
          "allocation": "<30%",
          "rewards": "-- GOV",
          "events": "GOV farming",
          "webpage": "https://drive.google.com/file/d/19PldVYbXazmwYRRz-LLdv1I3U1-vYi4z/view"
        },
        {
          "id": 7,
          "project": "Basilisk",
          "supply": "100B",
          "allocation": "15%",
          "rewards": " -- BSX",
          "events": "HDX holders airdrop",
          "webpage": "https://hydradx.substack.com/p/introducing-basilisk"
        },
        {
          "id": 8,
          "project": "Hedgeware",
          "supply": "5B",
          "allocation": "<10%",
          "rewards": "-- HEDG",
          "events": "EDG holders airdrop",
          "webpage": "https://commonwealth.im/edgeware/proposal/discussion/1153-announcing-hedgeware-a-kusama-parachain-for-edgeware"
        },
        {
          "id": 9,
          "project": "Kylin",
          "supply": "1B",
          "allocation": "<10%",
          "rewards": "-- KYL",
          "events": "None",
          "webpage": "https://wiki.kylin.network/getting-started/kylin-network-token-economics"
        },
        {
          "id": 10,
          "project": "Litentry",
          "supply": "100M",
          "allocation": "--%",
          "rewards": "-- LIT",
          "events": "None",
          "webpage": "https://forum.litentry.com/t/quick-sync-on-our-parachain-slot-auction-strategy/185"
        },
        {
          "id": 11,
          "project": "Unique",
          "supply": "--M",
          "allocation": "--%",
          "rewards": "-- UNQ",
          "events": "Chelobrick NFT gift",
          "webpage": "https://whitelabel.market/#/market"
        },
        {
          "id": 12,
          "project": "Bit.Country",
          "supply": "--M",
          "allocation": "--%",
          "rewards": "-- NUUM",
          "events": "None",
          "webpage": "https://bit.country/"
        }
];


export default{
  components:{
    Card,
    BaseTable
  },
  data() {
    return {
      table1: {
        title: "Project information",
        columns: [...tableColumns],
        data: [...tableData]
      },
      table2: {
        title: "Tokenomics",
        columns: [...tableColumns],
        data: [...tableData]
      }
    };
  }
}
</script>
<style>
th {
  text-align: center;
}
</style>
