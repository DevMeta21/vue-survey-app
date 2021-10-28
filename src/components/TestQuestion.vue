<template>
<v-app>
  <div class="root2">
  <!-- <main class="main"> -->
  <div class="MBTI-2">
    <!-- <div class="col-md-5 col-md-offset-0"> -->
        <!-- <figure>
          <img class="layer" src="../../static/images/page01.png">
          <img class="Mask" src="../../static/images/page01.png">
        </figure>
      </div> -->
    <div class="maskWrap">
      <!-- <div class="titleWrap"> -->
          <!-- <h1 class="title">꽃갈피 - 둘</h1> -->
      <!-- </div> -->
  ` </div>
    <div class="question-label-big">{{q}}</div>
    <div class="question-label-small">{{title}}</div>
    <button class="question-button" 
      v-on:click="nextPage(productData[productPage].answer1_score)"
      v-if="endPage()">
      <span class="question-button-label">{{productData[productPage].answer1}}</span>
    </button>
    <button class="question-button" 
      v-else 
      v-on:click="lastPage(productData[productPage].answer1_score)">
      <span class="question-button-label">{{productData[productPage].answer1}}</span>
    </button>
    <button class="question-button" 
      v-on:click="nextPage(productData[productPage].answer2_score)"
      v-if="endPage()">
      <span class="question-button-label">{{productData[productPage].answer2}}</span>
    </button>
    <button class="question-button" 
      v-else 
      v-on:click="lastPage(productData[productPage].answer2_score)">
       <span class="question-button-label">{{productData[productPage].answer2}}</span>
    </button>

    
    <v-progress-linear
      v-model="valueDeterminate"
      color="amber"
    ></v-progress-linear>
    <div class="progress-text">
      {{productPage+1}}/20
    </div>
    
  </div>
  <!-- </main> -->
  </div>
</v-app>


</template>

<script>
// import VueAxios from 'vue-axios';


import productData from '../../static/products.json';
// import { eventBus } from "@/main.js";

// Vue.prototype.$axios = axios;
export default {
  // future

  data () {
      return {
        valueDeterminate: 5,
        productData: '',
        productPage: 0,
        productPercent: 5,
        totalScore: [],
        q: '',
        title: ''
      }
    },
  computed: {
    endPageData: function() {
      return this.productPercent + 5;
    }
  },
  methods: {
    nextPage(score) {
      this.totalScore.push(score);
      
      this.valueDeterminate += 5;
      this.productPage += 1;
      if (this.productPage > this.productData.length+1) {
        this.q = '';
        this.title = '';
        
      }else{
        this.q = this.productData[this.productPage].q;
        this.title = this.productData[this.productPage].title;
      }
      
    },
    endPage() {
      if (this.productPage > this.productData.length-2) {
        return false;
      }
      else {
        return true;
      }
    },
    lastPage(score) {
      this.totalScore.push(score);
      //console.log(this.totalScore);
      // eventBus.$emit('sendFinalData', this.totalScore);
      this.$router.push({name: 'TestWait', params: {"totalScore":this.totalScore}})

      
    },
  },
  created: function() {
    this.productData = productData.products;
    this.q = this.productData[this.productPage].q;
    this.title = this.productData[this.productPage].title;
    // axios.get('../../static/products.json').then(response => {
    //   this.products = response.data.products;
    //   console.log(productData.data.products);
    // });
  }
}
</script>


<style lang="scss">
.root2 {
    display: flex;
    // padding: 10px 10px 10px 10px;
    position: relative;
    // max-width: 600px;
    /* padding: 0; */
    margin: 0;
    background-color: #252525;
}
.maskWrap {
    position: relative;
    width: 176px;
    height: 176px;
    // margin: 0 59px 214px;
    //margin: 0 32.3px 18px 40px;
    object-fit: contain;
    background: url("../../static/images/page01.png");
    background-size: cover;
    background-position: center;
}
.titleWrap {
    width: 176px;
    height: 176px;
    
    mask-size: cover;
    -webkit-mask-size: cover;
    mask-position: center;
    -webkit-mask-position: center;
    // margin: 0 59px 214px;
    border-radius: 24px;
    -webkit-filter: blur(16.3px);
    filter: blur(16.3px);
    box-shadow: 0 2px 4px 0 #f5f5f5, 0 10px 15px 0 rgba(173, 149, 0, 0.64);
    border: solid 1.6px #979797;
    background-color: #f6f6f6;
}

.MBTI-2 {
  // width: 375px;
  // height: 812px;
  padding: 50px 30px 150px 30px;
  max-width: 600px; 
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: auto;
  align-items: center;
  background-color: #252525;
}
.question-button {
  width: 314px;
  height: 60px;
  margin: 14px 0 23px;
  padding: 9px 15px 9px 18px;
  border-radius: 12px;
  background-color:  white;
}

.question-button-label {
  width: 275px;
  height: 24px;
  margin: 1px 0 0;
  font-family: CookieRun-Regular;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.5px;
  color: #000000;
}

.question-label-big {
  width: 24px;
  height: 31px;
  margin: 0 277px 5px 4px;
  // background-color: #ffdc00;
  font-family: CookieRun-Regular;
  font-size: 19px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.63;
  letter-spacing: -0.79px;
  color: #ffdc00;
}

.question-label-small {
  width: 305px;
  height: 106px;
  margin: 5px 0 0;
  // background-color: #d8d8d8;
  font-family: CookieRun-Regular;
  font-size: 28px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.21;
  letter-spacing: -1.08px;
  color: #d8d8d8;
}

.progress-text {
  // width: 33px;
  // height: 32px;
  // margin: 6px 140.5px 0 24.5px;
  opacity: 0.5;
  font-family: CookieRun-Regular;
  font-size: 16px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 2;
  letter-spacing: -0.5px;
  text-align: center;
  color: #d8d8d8;
}

@font-face {
  font-family: 'CookieRun-Regular';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/CookieRun-Regular.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}


</style>