<template>
<v-app>
  
  <div class="root2">
 
    <main class="main">
  <div class="MBTI-2">
  <div class="text-center">
  <!-- <div>
    <span class="user-text">mint 집사님 </span>
    <span class="user-text-white">만의</span>
  </div> -->
  <div>
    <span class="user-text">{{this.$route.params.title}}!</span>
  </div>
  
  <p>
  <span> </span>
  <p>

  <div class="col-md-5 col-md-offset-0">
      <figure>
        <img class="layer" :src='`https://insidepersonalimages.s3.ap-northeast-2.amazonaws.com/${imgSrc}.png`'>
      </figure>
    </div>

  <div class="wait-label-small">
    {{ storyData[this.$route.params.simple_code]["text"][0] }}
  </div>

  <div class="wait-label-small">
    {{ storyData[this.$route.params.simple_code]["text"][1] }}
  </div>

  <div class="wait-label-small">
    {{ storyData[this.$route.params.simple_code]["text"][2] }}
  </div>

  <div class="wait-label-small">
    {{ storyData[this.$route.params.simple_code]["text"][3] }}
  </div>

   <div class="wait-label-small">
    감사합니다!!!
  </div>
  </div> 
    
  </div>
  </main>
  </div>
</v-app>


</template>

<script>
import storyData from '../../static/story.json';

export default {
  // future
  data () {
      return {
        imgSrc: '',
        storyData: ''
      }
    },
    methods: {

    },
  created() {
    console.log(this.$route.params.title);
    this.storyData = storyData;
    this.imgSrc = this.$route.params.simple_code


  // function() {
    
  //   setTimeout(() => {
  //   //this.$router.push({name: 'TestStart'})
    
  //   }, 2000);
  //       // });
  //     }
  }
    }
</script>


<style lang="scss">
.v-progress-circular {
  margin: 1rem;
}
.layer {
  /* width: 254.7px;
  height: 241px; */
  margin: 0px auto;
  object-fit: cover;
  display: block;
  // width: 100%;
  max-width: 300px;
  border: 0;
  vertical-align: top;
  text-align: center;
 
}
.wait-label-small {
  // width: 136px;
  // height: 32px;
  margin: 30px 20px 0 20px;
  opacity: 0.8;
  font-family: CookieRun-Regular;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 2;
  letter-spacing: -0.5px;
  text-align: center;
  color: white;
}

.user-text {
  width: 161px;
  height: 44px;
  margin: 4px 6px 7px 10px;
  font-family: CookieRun-Regular;
  font-size: 36px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.22;
  letter-spacing: -1.38px;
  text-align: center;
  color: #ffdc00;
}
.user-text-white {
  width: 232px;
  height: 44px;
  margin: 7px 5px;
  font-family: CookieRun-Regular;
  font-size: 36px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.22;
  letter-spacing: -1px;
  text-align: center;
  color: white;
}

@font-face {
  font-family: 'CookieRun-Regular';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/CookieRun-Regular.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}

</style>