import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase/app'
import 'firebase/firestore'
import firebaseConfig from '../firebaseConfig'

Vue.config.productionTip = false

new Vue({
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

