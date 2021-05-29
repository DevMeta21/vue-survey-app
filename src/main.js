import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import store from './store'
import router from './router'
import VueAxios from 'vue-axios'
import axios from 'axios';
import firebase from 'firebase/app'
import 'firebase/firestore'
import firebaseConfig from '../firebaseConfig'

Vue.use(VueAxios, axios)

window.axios = require('axios');
new Vue({
  vuetify,
  store,
  router,
  render: h => h(App)
}).$mount('#app')


// Initialize Firebase
var db = firebase.initializeApp(firebaseConfig);
// firebase.analytics();

db.firestore().collection("test").add(
  {
    test: [1,0]
  }
).then(r => console.log(r)).catch(e => console.log(e));

