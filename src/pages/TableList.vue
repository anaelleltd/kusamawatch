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
          "project": "Heiko",
          "supply": "10M",
          "allocation": "5%",
          "rewards": ">25 HKO",
          "events": "Whitelist (ends 12th July)",
          "webpage": "https://parallelfinance.medium.com/introducing-heiko-parallels-parachain-on-kusama-958bf553c6ae"
        },
        {
          "id": 2,
          "project": "Kabocha",
          "supply": "5B",
          "allocation": "5-10%",
          "rewards": "-- KAB",
          "events": "EDG holders airdrop",
          "webpage": "https://commonwealth.im/edgeware/proposal/discussion/1415-kabocha-kab-a-ksm-parachain-from-edgeware"
        },
        {
          "id": 3,
          "project": "TrustBase",
          "supply": "1B",
          "allocation": "--%",
          "rewards": "-- TBE",
          "events": "None",
          "webpage": "https://trustbase.network/"
        },
        {
          "id": 4,
          "project": "Sora",
          "supply": "600M",
          "allocation": "25%",
          "rewards": "-- PSWAP",
          "events": "LP farming",
          "webpage": "https://medium.com/polkaswap/pswap-rewards-1-polkaswap-liquidity-reward-farming-3e045d71509"
        },
        {
          "id": 5,
          "project": "SherpaX",
          "supply": "21M",
          "allocation": "<40%",
          "rewards": "-- KSX",
          "events": "2+1 Testnet Competition",
          "webpage": "https://chainx-org.medium.com/polkax-advice-on-ksx-crowdloan-69bbb751807a"
        },
        {
          "id": 6,
          "project": "Zeitgeist",
          "supply": "100M",
          "allocation": "6.6%",
          "rewards": " % pool",
          "events": "Bonus Derby",
          "webpage": "https://zeitgeist.pm/"
        },
        {
          "id": 7,
          "project": "Litentry",
          "supply": "100M",
          "allocation": "--%",
          "rewards": "-- LIT",
          "events": "None",
          "webpage": "https://forum.litentry.com/t/quick-sync-on-our-parachain-slot-auction-strategy/185"
        },
        {
          "id": 8,
          "project": "Kylin",
          "supply": "1B",
          "allocation": "<10%",
          "rewards": "-- KYL",
          "events": "None",
          "webpage": "https://wiki.kylin.network/getting-started/kylin-network-token-economics"
        },
        {
          "id": 9,
          "project": "SubDAO",
          "supply": "1B",
          "allocation": "<30%",
          "rewards": "-- GOV",
          "events": "GOV farming",
          "webpage": "https://drive.google.com/file/d/19PldVYbXazmwYRRz-LLdv1I3U1-vYi4z/view"
        },
        {
          "id": 10,
          "project": "Bit.Country",
          "supply": "--M",
          "allocation": "--%",
          "rewards": "-- NUUM",
          "events": "Continuum testnet competition",
          "webpage": "https://bit.country/"
        },
        {
          "id": 11,
          "project": "Subsocial",
          "supply": "100M",
          "allocation": "20%",
          "rewards": " -- SUB",
          "events": "KSM holders airdrop",
          "webpage": "https://subsocial.network/"
        },
        {
          "id": 12,
          "project": "Unique",
          "supply": "--M",
          "allocation": "--%",
          "rewards": "-- UNQ",
          "events": "Chelobrick NFT marketplace",
          "webpage": "https://unqnft.io/#/market"
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
