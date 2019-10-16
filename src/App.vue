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
      <router-view class="router-view"/>
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
#app {
  width: 100%;
}
.content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: calc(100vh - #{$header-height});
  .router-view {
    flex: 1 0 auto;
  }
  .footer {
    flex: 0 0 $footer-height;
    @include flex-center();
  }
  @media #{$mobile} {
    min-height: calc(100vh - #{$mobile-nav-height});
    margin-bottom: $mobile-nav-height;
  }
}
#nav {
  height: $header-height;
  padding: 0 20px;
  background-color: #000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  box-shadow: 0 2px 4px rgba(0,0,0,0.15);
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
