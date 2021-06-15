<template>
  <div id="app">
    <div id="nav" class="not-on-mobile">
      <div class="left-side">
        <router-link to="/" class="title">NICHOLAS FISHER</router-link>
      </div>
      <div class="right-side">
        <router-link v-for="(r, index) in routes" :key="index" :to="r.to" class="nav-btn" exact>
          <span v-text="r.name" />
        </router-link>
      </div>
    </div>
    <div class="content">
      <router-view class="router-view" />
      <div class="footer">&copy; Nicholas Fisher {{new Date().getFullYear()}}</div>
      <div
        class="image-viewer-container"
        v-show="imageViewerVisible"
        @click="imageViewerVisible = false"
      >
        <p class="close-text">Click to close.</p>
        <div class="image-viewer">
          <div class="image-viewer-image" :style="'background-image: url(' + currImage + ')'"></div>
        </div>
      </div>
    </div>
    <hamburger-menu :routes="routes" />
  </div>
</template>


<script>
export default {
  data() {
    return {
      imageViewerVisible: false,
      currImage: "",
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
  watch: {
    $route() {
      this.imageViewerVisible = false;
    }
  },
  methods: {
    onThumbnailClick(img) {
      this.$data.imageViewerVisible = true;
      this.$data.currImage = img;
    }
  }
};
</script>

<style lang="scss">
@import "./scss/_globals.scss";
#app {
  width: 100%;
}
.content {
  margin-top: $header-height;
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
    margin-top: 0;
    min-height: calc(100vh - #{$mobile-nav-height});
    margin-bottom: $mobile-nav-height;
  }
}
#nav {
  position: fixed;
  height: $header-height;
  padding: 0 20px;
  background-color: #000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
  .right-side,
  .left-side {
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
.close-text {
  text-align: center;
  color: #fff;
}
.image-viewer-container {
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
}
.image-viewer {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  height: 80vh;
  width: 80vw;
}
@media (max-width: 768px) {
  .image-viewer {
    height: 100vh;
    width: 100vw;
  }
}
.image-viewer .close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
}
.image-viewer-image {
  width: 100%;
  height: 100%;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
