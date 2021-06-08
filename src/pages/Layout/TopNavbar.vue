<template>
  <nav class="navbar navbar-expand-lg navbar-absolute"
       :class="{'bg-white': showMenu, 'navbar-transparent': !showMenu}">
    <div class="container-fluid">
      <div class="navbar-wrapper">
        <div class="navbar-toggle d-inline" :class="{toggled: $sidebar.showSidebar}">
          <button type="button"
                  class="navbar-toggler"
                  @click="toggleSidebar">
            <span class="navbar-toggler-bar bar1"></span>
            <span class="navbar-toggler-bar bar2"></span>
            <span class="navbar-toggler-bar bar3"></span>
          </button>
        </div>
        <a class="navbar-brand" href="javascript:void(0)"> {{ $route.name }}</a>
      </div>
      <button class="navbar-toggler" type="button"
              @click="toggleMenu"
              data-toggle="collapse"
              data-target="#navigation"
              aria-expanded="false"
              aria-label="Toggle navigation">
        <span class="navbar-toggler-bar navbar-kebab"></span>
        <span class="navbar-toggler-bar navbar-kebab"></span>
        <span class="navbar-toggler-bar navbar-kebab"></span>
      </button>
      <div class="collapse navbar-collapse show text-left col-lg-10" v-show="showMenu">
        <ul class="navbar-nav">
          <modal :show.sync="searchModalVisible"
                 class="modal-search"
                 id="searchModal"
                 :centered="false"
                 :show-close="true">
            <input slot="header" @keyup.enter="toggleEndpoint($event.currentTarget.value)" type="text" class="form-control" id="inlineFormInputGroup" v-bind:placeholder="endpoint">
          </modal>
          <li class="search-bar input-group"  @click="searchModalVisible = true">
            <button class="btn btn-link" id="search-button" data-toggle="modal" data-target="#searchModal"><i class="tim-icons icon-sound-wave"></i>
            </button>
          </li>
          <drop-down>
            <a href="javascript:void(0)" data-toggle="dropdown" class="dropdown-toggle nav-link">
              <i class="tim-icons icon-settings-gear-63"></i>
            </a>
            <ul class="dropdown-menu dropdown-menu-right dropdown-navbar">
              <li class="nav-link"><a href="#" @click="toggleEndpoint('wss://kusama.api.onfinality.io/public-ws')" class="nav-item dropdown-item">wss://kusama.api.onfinality.io/public-ws</a></li>
              <li class="nav-link"><a href="#" @click="toggleEndpoint('wss://kusama.elara.patract.io')" class="nav-item dropdown-item">wss://kusama.elara.patract.io</a></li>
              <li class="nav-link"><a href="#" @click="toggleEndpoint('ws://127.0.0.1:9944s')" class="nav-item dropdown-item">ws://127.0.0.1:9944</a></li>
              <li class="nav-link"><a href="#" @click="searchModalVisible=true" class="nav-item dropdown-item">Custom endpoint</a></li>
            </ul>
          </drop-down>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>

import DropDown from "@/components/Dropdown.vue";
import Modal from "@/components/Modal.vue";
import {
  SidebarPlugin
} from "@/components/index";

  export default{
    components:{
      DropDown,
      Modal,
      SidebarPlugin
    },
    data() {
      return {
        searchModalVisible: false,
        searchQuery: '',
        showMenu: false,
        endpoint: localStorage.getItem("endpoint")
      };
    },
    methods:{
      toggleSidebar(){
        this.$sidebar.displaySidebar(!this.$sidebar.showSidebar);
      },
      toggleMenu(){
        this.showMenu  = !this.showMenu;
      },
      toggleEndpoint(value){
        if(this.endpoint !== value){
          localStorage.setItem("endpoint", value);
          window.location.reload();
        }
      }
    },
    created(){
      localStorage.getItem("endpoint");
    },
    computed:{
    }
  }
</script>
<style>
</style>
