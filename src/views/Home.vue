<template>
  <div class="home">
    <vue-particles
      class="particles"
      :particleOpacity="1"
      :particlesNumber="50"
      :particleSize="3"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="1"
      :linesDistance="150"
      :moveSpeed="3"
      :hoverEffect="true"
      :clickEffect="true"
      linesColor="#0aa"
      color="#077"
      shapeType="polygon"
      hoverMode="grab"
      clickMode="push"
    ></vue-particles>
    <div class="inner">
      <div class="logo"/>
      <div class="name">Nicholas Fisher</div>
      <div class="sub">A web developer who enjoys it.</div>
      <p>Web development is really fun. The tools are better than they've ever been, and single a well-rounded web developer can build a landscape changing product in a matter of months. Even with an abundance of investment and excitement in tech companies, there's still so many problems to solve. The more developers there are who're trying to get better at what they do, the faster we can solve these problems.</p>
      <div class="attrs">
        <div class="attr">
          <div class="icon">
            <fa :icon="['fas', 'code']"/>
          </div>
          <div class="label">Code</div>
        </div>
        <div class="attr">
          <div class="icon">
            <fa :icon="['fas', 'pencil-ruler']"/>
          </div>
          <div class="label">UI</div>
        </div>
        <div class="attr">
          <div class="icon">
            <fa :icon="['fas', 'layer-group']"/>
          </div>
          <div class="label">Product</div>
        </div>
      </div>
      <p>
        I'm a programmer as well as a UI and product designer. Check out my portfolio
        <router-link to="/portfolio">here</router-link>.
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.particles {
  width: calc(100vw - 20px);
  height: calc(100vh - #{$header-height} - 10px);
  position: absolute;
  left: 0;
  top: 70px;
}
.inner {
  max-width: 500px;
}
.logo {
  height: 200px;
  width: 200px;
  border-radius: 50%;
  padding: 10px;
  background-color: #fff;
  background-image: url("./../assets/images/me-min.jpg");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  box-shadow: $std-shadow;
}
.inner {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  margin: 20px 20px 0 20px;
  .name {
    font-family: h;
    text-transform: uppercase;
    font-size: 40px;
    margin: 20px 0;
    color: $theme-color1;
    padding: 0 20px;
    text-align: center;
  }
  .sub {
    text-transform: uppercase;
    text-align: center;
    font-size: 20px;
    font-family: h;
  }
  p {
    @include card-style();
  }
}
.home {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - #{$header-height + $footer-margin});
  @media #{$mobile} {
    min-height: calc(100vh  - #{$mobile-nav-height + $footer-margin});
  }
}
.attrs {
  display: flex;
  width: 100%;
  justify-content: center;
  flex-wrap: wrap;
  .attr {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 90px;
    border-radius: 5px;

    .icon {
      background-color: $theme-color1;
      height: 60px;
      width: 60px;
      color: #fff;
      border-radius: 50%;
      font-size: 25px;
      @include flex-center();
    }
    .label {
      font-family: h;
      text-transform: uppercase;
      font-size: 20px;
      margin-top: 10px;
    }
  }
}
</style>
