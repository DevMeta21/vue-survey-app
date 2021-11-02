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
  <p>
  <span>  </span>
  <p>
<div>
  <span class="user-text-white1">성향분석에 만족 하셨다면</span>
    <span class="user-text1">별점 </span>
    <span class="user-text-white1">부탁드립니다~!!</span>
  </div>
  <div class="text-center mt-12">
      <v-rating
      v-model="rating"
      background-color="orange lighten-3"
      color="orange"
      large
      @input="ratingScore($event)"
    ></v-rating>
      </div>
  <div class="wait-label-small"> 
    <v-text-field
      label="NickName"
      :rules="rules"
      hide-details="auto"
      color="white"
      v-model="NickName"
      dark
    ></v-text-field>
    <v-text-field 
    label="결과 의견"
    color="white"
    v-model="Opinion"
      dark></v-text-field>
  </div>

  <div class="wait-label-small">
            <v-btn
              color="warning"
              dark
              @click="opinionSave"
            >
              저장하기
            </v-btn>
          </div>
   <div class="wait-label-small">
    {{ this.thanks }}
  </div>
  </div> 
    
  </div>
  </main>
  </div>
</v-app>


</template>

<script >
import axios from 'axios';
import storyData from '../../static/story.json';

export default {
  // future
  data () {
      return {
        imgSrc: '',
        storyData: '',
        rating: 3,
        NickName:'',
        Opinion:'',
        dptoken: '',
        thanks: '감사합니다!!',
        rules: [
        value => !!value || 'Required.',
        value => (value && value.length >= 3) || 'Min 3 characters',
      ],
      }
    },
    methods: {
      ratingScore(value) {
      
      this.rating = value;
      console.log(this.rating);
      axios.post('https://23tqd8hnq1.execute-api.ap-northeast-2.amazonaws.com/default/personalityUpdate', {
    "user_id": this.dptoken,
    "feedback": this.rating,
    "nickname": this.NickName,
    "opinion": this.Opinion
    }) .then(res => { console.log(res.data)
          })
      },
      opinionSave() {
      console.log(this.Opinion, this.NickName);
      this.thanks = "소중한 의견 저장되었습니다.";
      axios.post('https://23tqd8hnq1.execute-api.ap-northeast-2.amazonaws.com/default/personalityUpdate', {
    "user_id": this.dptoken,
    "feedback": this.rating,
    "nickname": this.NickName,
    "opinion": this.Opinion
    }) .then(res => { console.log(res.data)
          })
    }
    },
  created() {
    console.log(this.$route.params.title);
    this.storyData = storyData;
    this.imgSrc = this.$route.params.simple_code
    this.dptoken = this.$route.params.dptoken

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

.user-text1 {
  width: 161px;
  height: 44px;
  margin: 4px 6px 7px 10px;
  font-family: CookieRun-Regular;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.22;
  letter-spacing: -1.38px;
  text-align: center;
  color: #ffdc00;
}
.user-text-white1 {
  width: 232px;
  height: 44px;
  margin: 7px 5px;
  font-family: CookieRun-Regular;
  font-size: 16px;
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