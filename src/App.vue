<template>
  <div id="app">
    <div id="nav" class="not-on-mobile">
      <div class="left-side">
        <router-link to="/" class="title">NICHOLAS FISHER</router-link>
      </div>
      <div class="right-side">
        <router-link v-for="(r, index) in routes" :key="index" :to="r.to" class="nav-btn" exact>
          <span v-text="r.name"/>
        </router-link>
      </div>
    </div>
    <div class="content">
      <router-view/>
      <div class="footer">&copy; Nicholas Fisher {{new Date().getFullYear()}}</div>
    </div>
    <hamburger-menu :routes="routes"/>
  </div>
</template>


<script>
export default {
  data() {
    return {
      routes: [
        {
          to: "/",
          name: "Home"
        },
        {
          to: "/portfolio",
          name: "Portfolio"
        },
        {
          to: "/resume",
          name: "Resume"
        },
        {
          to: "/contact",
          name: "Contact"
        }
      ]
    };
  },
};
</script>

<style lang="scss">
@import "./scss/_globals.scss";

.content {
  margin-top: $header-height;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: calc(100vh - #{$header-height});
  .footer {
    height: $footer-margin;
    text-align: center;
    @include flex-center();
  }
  @media #{$mobile} {
    margin-top: 0;
    margin-bottom: $mobile-nav-height;
    min-height: calc(100vh - #{$mobile-nav-height});
  }
}
#nav {
  height: $header-height;
  padding: 0 20px;
  background-color: #000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top:0;
  left: 0;
  width: 100vw;
  box-shadow: 0 2px 4px rgba(0,0,0,0.15);
  z-index: 999;
  .right-side, .left-side {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
  a {
    font-family: h;
    font-size: 20px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: #fff;
    text-transform: uppercase;
    padding: 0 20px;
    border-left: 15px solid $theme-color1;
  }
  .title {
    font-family: h;
    font-size: 25px;
    height: auto;
    padding: 0;
    padding-bottom: 5px;
    border-bottom: 5px solid $theme-color1;
    border-left: none;
    color: #fff;
  }
}
</style>
