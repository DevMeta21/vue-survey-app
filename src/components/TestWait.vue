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
    <span class="user-text-white">INSIDE만의 성향을</span>
  </div>
  <div>
    <span class="user-text-white">분석하고 있어요!</span>
  </div>
  <p>
  <span> </span>
  <p>
    <v-progress-circular
      :size="50"
      color="amber"
      indeterminate
    ></v-progress-circular>
  <div class="wait-label-small">
    잠시만 기다려주세요!!!
  </div>
  </div> 
    
  </div>
  </main>
  </div>
</v-app>


</template>

<script>
import axios from 'axios';
export default {
  // future
  data () {
      return {
        "title" : "",
        "simple_code" : "",
        "dptoken":""
      }
    },
    methods: {

    },
  created : 
    
  function() {
    console.log(this.$route.params.totalScore);

    if (this.$cookies.get("dptoken")) {
      this.dptoken = this.$cookies.get("dptoken");
      console.log("get")
      console.log(this.dptoken)
    } else {
      this.dptoken = Math.random().toString(36).substr(2,11);
      console.log("get")
      this.$cookies.set("dptoken", this.dptoken);
      console.log(this.dptoken)
    }

    axios.post('https://23tqd8hnq1.execute-api.ap-northeast-2.amazonaws.com/default/personalityClassify', {
    "UserID": this.dptoken,
    "Code": this.$route.params.totalScore
}) .then(res => { console.log(res.data)
this.title =  res.data.ResultDesc[1]
this.simple_code = res.data.ResultDesc[2]});
    setTimeout(() => { 
    this.$router.push({name: 'TestResult', params : {"title":this.title, "simple_code": this.simple_code}})
    
    }, 2000);
        // });
      }
  }
    
</script>


<style lang="scss">
.v-progress-circular {
  margin: 1rem;
}
.wait-label-small {
  // width: 136px;
  // height: 32px;
  margin: 150px 52px 0 54px;
  opacity: 0.5;
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