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
// Normalize:
/*! normalize.css v8.0.0 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}h1{font-size:2em;margin:.67em 0}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}
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
