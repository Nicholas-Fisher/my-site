import 'normalize.css';
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Thumb from '@/components/Thumb.vue'
import HamburgerMenu from "@/components/HamburgerMenu.vue";
import VueParticles from 'vue-particles'
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faBars,
  faTimes,
  faPrint,
  faUser,
  faMobileAndroidAlt,
  faInbox,
  faGlobe,
  faClock,
  faHandshake,
  faMapMarker,
  faCalendarAlt,
  faTrophy,
  faGraduationCap,
  faBook,
  faBriefcase,
  faCode,
  faPencilRuler,
  faLayerGroup,
} from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(
  faBars,
  faTimes,
  faPrint,
  faUser,
  faMobileAndroidAlt,
  faInbox,
  faGlobe,
  faClock,
  faHandshake,
  faMapMarker,
  faCalendarAlt,
  faTrophy,
  faGraduationCap,
  faBook,
  faBriefcase,
  faCode,
  faPencilRuler,
  faLayerGroup,
);

Vue.component('fa', FontAwesomeIcon);
Vue.component('hamburger-menu', HamburgerMenu);
Vue.component('thumb', Thumb);

Vue.use(VueParticles)

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
