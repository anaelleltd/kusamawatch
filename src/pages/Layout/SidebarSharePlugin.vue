<template>
  <div class="fixed-plugin" v-click-outside="closeDropDown">
    <div class="dropdown show-dropdown" :class="{show: isOpen}">
      <a data-toggle="dropdown" class="settings-icon">
        <i class="fa fa-cog fa-2x" @click="toggleDropDown">
        </i>
      </a>
      <ul class="dropdown-menu" :class="{show:isOpen}">
        <li class="header-title">Sidebar Background</li>
        <li class="adjustments-line">
          <a class="switch-trigger background-color">
            <div class="badge-colors text-center">
              <span v-for="item in sidebarColors" :key="item.color" class="badge filter"
                    :class="[`badge-${item.color}`,{active:item.active}]"
                    :data-color="item.color"
                    @click="changeSidebarBackground(item)">
              </span>
            </div>
            <div class="clearfix"></div>
          </a>
        </li>

        <li class="header-title">Share this app!</li>

        <li class="button-container text-center">
          <social-sharing url="https://anaelleltd.company/" inline-template
                          title="Anaelle LTD Web Services for Web 3.0"
                          hashtags="web services, digital economy, web3.0">
            <div>
              <base-button network="twitter" class="btn btn-round btn-info sharrre">
                <i class="fab fa-twitter"></i>
              </base-button>
              <base-button network="facebook" class="btn btn-round btn-info sharrre">
                <i class="fab fa-facebook"></i>
              </base-button>
            </div>
          </social-sharing>
        </li>

        <!-- <li class="button-container d-flex justify-content-center">
          <gh-btns-star slug="AnaelleLTD-Web-services-for-Web-3.0" show-count></gh-btns-star>
          <gh-btns-fork slug="AnaelleLTD-Web-services-for-Web-3.0" show-count></gh-btns-fork>
        </li> -->

      </ul>
    </div>
  </div>
</template>
<script>
  export default {
    props:{
      backgroundColor: String
    },
    data(){
      return {
        isOpen: false,
        sidebarColors: [
          { color: 'primary', active: false, value: 'primary' },
          { color: 'info', active: false, value: 'blue' },
          { color: 'success', active: false, value: 'green' },
        ]
      }
    },
    methods:{
      toggleDropDown(){
        this.isOpen = !this.isOpen
      },
      closeDropDown(){
        this.isOpen = false
      },
      toggleList(list, itemToActivate) {
        list.forEach((listItem) => {
          listItem.active = false
        });
        itemToActivate.active = true
      },
      changeSidebarBackground(item){
        this.$emit('update:backgroundColor', item.value)
        this.toggleList(this.sidebarColors, item)
      }
    }
  }
</script>
<style>
</style>
