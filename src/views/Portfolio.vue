<template>
  <div>
    <h1 class="page-title">
      <span>Portfolio</span>
    </h1>
    <div class="block-container">
      <div class="block">
        <div class="top-half">
          <div class="image">
            <img src="./../assets/images/tapmenuca-min.png" />
          </div>
          <div class="right-side">
            <div class="title">Tap Menu Product Site</div>
            <a class="std-btn" target="_blank" href="https://tapmenu.ca">Check it Out</a>
          </div>
        </div>
        <p
          class="description"
        >A very simple website to showcase the Tap Menu app. Tap Menu is a web app that allows customers at restaurants to order using their own mobile devices.</p>
      </div>

      <div class="block">
        <div class="top-half">
          <div class="image">
            <img src="./../assets/images/tapmenuapp-min.png" />
          </div>
          <div class="right-side">
            <div class="title">Tap Menu App</div>
            <a class="std-btn" target="_blank" href="https://tapmenu.app?c=000">Check it Out</a>
          </div>
        </div>
        <p
          class="description"
        >A mobile web app that allows users to order food from their phone while sitting in a restuarant. The app had to be fast loading on mobile networks, responsive on low end mobile devices, allow for real time communication between the client and the restaurant, and support custom theming so that restaurants could maintain their brand through their own colors, fonts, and messenging. Make sure to check it out on a mobile device.</p>
      </div>

      <div class="block">
        <div class="top-half">
          <div class="image">
            <img src="./../assets/images/tapmenumanager-min.png" />
          </div>
          <div class="right-side">
            <div class="title">Tap Menu Manager</div>
            <a class="std-btn" target="_blank" href="https://tapmenumanager.com">Check it Out</a>
          </div>
        </div>
        <p
          class="description"
        >An administrative mobile/desktop web app that allows Tap Menu subscribers to manage their incoming notifications and set up their restaurant menus for consumption in the Tap Menu mobile app. It was built with Material Design UI framework and features light/dark themes.</p>
      </div>

      <div class="block">
        <div class="top-half">
          <div class="image">
            <img src="./../assets/images/lunchcms-min.png" />
          </div>
          <div class="right-side">
            <div class="title">Lunch CMS</div>
            <a class="std-btn" target="_blank" href="https://lunchcms.com">Check it Out</a>
          </div>
        </div>
        <p
          class="description"
        >An administrative mobile/desktop CMS that I made to allow my clients to edit content on the web applications that I've made for them. I decided to make a CMS instead of using a 3rd party solution to avoid licensing fees and because I couldn't find a dead simple static site headless CMS.</p>
      </div>

      <div class="block">
        <div class="top-half">
          <div class="image">
            <img src="./../assets/images/ragequest-min.png" />
          </div>
          <div class="right-side">
            <div class="title">Rage Quest</div>
            <a class="std-btn" target="_blank" href="https://ragequestgame.com">Check it Out</a>
          </div>
        </div>
        <p
          class="description"
        >A website made to showcase a game that I made for PC and mobile devices. The game is currently on the Android Google Play Store and Steam if you'd like to check it out as well!</p>
      </div>

      <div class="block">
        <div class="top-half">
          <div class="image">
            <img src="./../assets/images/twocanoes-min.png" />
          </div>
          <div class="right-side">
            <div class="title">Two Canoes Trading</div>
            <a class="std-btn" target="_blank" href="http://twocanoestrading.com/#/">Check it Out</a>
          </div>
        </div>
        <p
          class="description"
        >A website built for a trading company. They specifically wanted to enlist the help of a freelancer because their unique design featured a lot of intersectional elements that would not have been possible with a website builder. The design was a pixel perfect replication of a provided PDF design.</p>
      </div>

      <div class="block">
        <div class="top-half">
          <div class="image">
            <img src="./../assets/images/scoutcanning-min.png" />
          </div>
          <div class="right-side">
            <div class="title">Scout Canning</div>
            <a class="std-btn" target="_blank" href="http://enjoyscout.com/#/">Check it Out</a>
          </div>
        </div>
        <p
          class="description"
        >A website built for a sustainable fish cannery. Like Two cannoes, this site has a lot of interesting visual features that couldn't be done with your typical website builder. It was also built on a super tight timeline.</p>
      </div>

      <div class="block">
        <div class="top-half">
          <div class="image">
            <img src="./../assets/images/caribbeansunset-min.png" />
          </div>
          <div class="right-side">
            <div class="title">Caribbean Sunset</div>
            <a
              class="std-btn"
              target="_blank"
              href="https://tm-sunset.firebaseapp.com/#/"
            >Check it Out</a>
          </div>
        </div>
        <p
          class="description"
        >A website made for friend who owned a Caribbean cuisine restarant in Leslieville. It features a fully responsive layout and a unique thumb-friendly mobile menu. I designed it with a light pastel beach themed color pallete to give it that island feel. The menu was hooked up to a custom CMS so that he could edit it on his own.</p>
      </div>

      <div class="block">
        <div class="top-half">
          <div class="image">
            <img src="./../assets/images/preszii-min.png" />
          </div>
          <div class="right-side">
            <div class="title">Preszii (WIP)</div>
            <a class="std-btn" target="_blank" href="https://preszii.firebaseapp.com/">Check it Out</a>
          </div>
        </div>
        <p
          class="description"
        >A website that I'm currently working on for an on-call barber that comes to the clients house. The design draws inspiration from other websites that he liked. As it is currently a work in progress the content and appearance is placeholder and not final.</p>
      </div>

      <div class="block">
        <div class="top-half">
          <div class="image">
            <img src="./../assets/images/mysite-min.png" />
          </div>
          <div class="right-side">
            <div class="title">This Website</div>
            <a class="std-btn" href="#">Check it Out</a>
          </div>
        </div>
        <p class="description">How meta.</p>
      </div>
    </div>

    <h1 class="page-title">
      <span>Design Gallery</span>
    </h1>
    <div class="gallery">
      <thumb
        v-for="(image, index) in gallery"
        :key="index"
        :img="image.imageUrl"
        :text="image.text"
      />
    </div>

    <p class="disclaimer">
      <span>This is not an exhaustive list of everything I've built in my career. Check out my&nbsp;</span>
      <router-link to="/resume">resume</router-link>
      <span>&nbsp;to see what I've worked on while working full-time.</span>
    </p>
  </div>
</template>

<script>
import img1 from "@/assets/images/design/tap-menu-design1-min.jpg";
import img2 from "@/assets/images/design/tap-menu-design2-min.jpg";
import img3 from "@/assets/images/design/tap-menu-design3-min.jpg";
import img4 from "@/assets/images/design/tap-menu-flyer-min.png";
import img5 from "@/assets/images/design/tap-menu-menu-designs-min.png";

export default {
  data() {
    return {
      gallery: [
        {
          imageUrl: img1,
          text: "Tap Menu Product Site."
        },
        {
          imageUrl: img2,
          text: "Tap Menu Product Site."
        },
        {
          imageUrl: img3,
          text: "Tap Menu Product Site."
        },
        {
          imageUrl: img4,
          text: "Tap Menu flyer design."
        },
        {
          imageUrl: img5,
          text: "Tap Menu web app design."
        }
      ]
    };
  }
};
</script>

<style lang="scss">
.gallery {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
}
.block-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.disclaimer {
  text-align: center;
  font-weight: bold;
  margin-top: 20px;
  padding: 0 20px;
}
.block {
  flex: 0 1 540px;
  margin: 20px 40px;
  @include card-style();
  .top-half {
    display: flex;
    flex-wrap: wrap;
    @media #{$mobile} {
      justify-content: center;
    }
  }
  .image {
    flex: 0 0 200px;
    height: 150px;
    @include flex-center();
    border: 1px solid #ccc;
    border-radius: 5px;
    overflow: hidden;
    img {
      max-height: 148px;
    }
  }
  .right-side {
    flex: 0 1 300px;
    padding-left: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 150px;
    @media #{$mobile} {
      align-items: center;
      text-align: center;
      padding-left: 0;
      height: auto;
      margin-top: 20px;
    }
    .title {
      font-family: h;
      font-size: 27px;
      text-transform: uppercase;
    }
  }
  .description {
    margin-top: 15px;
    flex: 0 0 100%;
  }
}
.std-btn {
  max-width: 125px;
}
</style>
