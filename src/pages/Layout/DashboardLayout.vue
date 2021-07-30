<template>
  <div class="wrapper">
    <!-- <div class="wrapper" :class="{'nav-open': $sidebar.showSidebar}"> -->

    <side-bar :background-color="backgroundColor">
      <!-- <mobile-menu slot="content"></mobile-menu> -->
      <sidebar-link to="/home">
        <i class="tim-icons icon-book-bookmark"></i>
          <p>Home</p>
      </sidebar-link>
      <sidebar-link to="/tablelist">
        <i class="tim-icons icon-chart-pie-36"></i>
          <p>Tokenomics</p>
      </sidebar-link>
      <sidebar-link to="/plo">
        <i class="tim-icons icon-trophy"></i>
          <p>Plo</p>
      </sidebar-link>
      <sidebar-link to="/blocks">
        <i class="tim-icons icon-link-72"></i>
          <p>Blocks</p>
      </sidebar-link>
      <sidebar-link to="/council">
        <i class="tim-icons icon-bank"></i>
          <p>Council</p>
      </sidebar-link>
      <sidebar-link to="/ecosystem">
        <i class="tim-icons icon-puzzle-10"></i>
          <p>Ecosystem</p>
      </sidebar-link>
      <sidebar-link to="/notifications">
        <i class="tim-icons icon-bell-55"></i>
          <p>Notifications</p>
      </sidebar-link>
      <sidebar-link to="/profiles">
        <i class="tim-icons icon-single-02"></i>
          <p>Profiles</p>
      </sidebar-link>
    </side-bar>

    <sidebar-share :background-color.sync="backgroundColor"></sidebar-share>

    <div class="main-panel" :data="backgroundColor">
      <top-navbar></top-navbar>

      <dashboard-content @click.native="toggleSidebar"></dashboard-content>

      <content-footer></content-footer>
    </div>

  </div>
</template>
<style lang="scss"></style>
<script>

import TopNavbar from "./TopNavbar.vue";
import ContentFooter from "./ContentFooter.vue";
import DashboardContent from "./DashboardContent.vue";
import SidebarShare from "./SidebarSharePlugin.vue";
import MobileMenu from "./MobileMenu.vue";
import SideBar from "@/components/SidebarPlugin/SideBar.vue";
import SidebarLink from "@/components/SidebarPlugin/SidebarLink.vue";



export default{
  components: {
    TopNavbar,
    DashboardContent,
    ContentFooter,
    MobileMenu,
    SideBar,
    SidebarLink,
    SidebarShare
  },
  data() {
    return {
      backgroundColor: "green"
    };
  },
  computed: {
  },
  methods: {
    toggleSidebar() {
      if (this.$sidebar.showSidebar) {
        this.$sidebar.displaySidebar(false);
      }
    }
  }
};
</script>
