import DashboardLayout from "@/pages/Layout/DashboardLayout.vue";

import Home from "@/pages/Home.vue";
import TableList from "@/pages/TableList.vue";
import Plo from "@/pages/Plo.vue";
import Blocks from "@/pages/Blocks.vue";
import Council from "@/pages/Council.vue";
import Ecosystem from "@/pages/Ecosystem.vue";
import Notifications from "@/pages/Notifications.vue";
import Icons from "@/pages/Icons.vue";
import Maps from "@/pages/Maps.vue";
import Typography from "@/pages/Typography.vue";


const routes = [{
  path: "/",
  component: DashboardLayout,
  redirect: "home",
  children:[
    {
      path: "home",
      name: "Home",
      component: Home
    },
    {
      path: "tablelist",
      name: "Tokenomics",
      component: TableList
    },
      {
      path: "plo",
      name: "Plo",
      component: Plo
    },
    {
      path: "blocks",
      name: "Blocks",
      component: Blocks
    },
    {
      path: "council",
      name: "Council",
      component: Council
    },
    {
      path: "ecosystem",
      name: "Ecosystem",
      component: Ecosystem
    },
    {
      path: "notifications",
      name: "Notifications",
      component: Notifications
    },
    {
      path: "icons",
      name: "Icons",
      component: Icons
    },
    {
      path: "maps",
      name: "Maps",
      component: Maps
    },
    {
      path: "typography",
      name: "Typography",
      component: Typography
    }
  ]

}];

export default routes;
