<template>
<v-app>
  <div class="MBTI-2">
  <div class="text-center">
  <div>
    <span class="user-text">mint 집사님 </span>
    <span class="user-text-white">만의</span>
  </div>
  <div>
    <span class="user-text-white">트레이닝 센터를</span>
  </div>
  <div>
    <span class="user-text-white">추천하고 있어요!</span>
  </div>
  <p>
  <p>
  <p>
  <p>
  

    <v-progress-circular
      :size="50"
      color="amber"
      indeterminate
    ></v-progress-circular>
  <div class="wait-label-small">
    잠시만 기다려주세요!
  </div>
  </div> 
    
    
  </div>
</v-app>


</template>

<script>

export default {
  // future
  data () {
      return {

      }
    },
  created: function() {
    // $router.push({name: 'TestStart'})
    setTimeout(() => {
    this.$router.push({name: 'TestStart'})
    }, 2000);
        // });
      }
    }
</script>


<style lang="scss">
header h1{
    padding: 10px 20px;
}
body {
    max-width: 970px !important;
}
.v-progress-circular {
  margin: 1rem;
}

.maskWrap {
    position: relative;
    width: 176px;
    height: 176px;
    // margin: 0 59px 214px;
    margin: 0 32.3px 18px 40px;
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
  padding: 121px 30px 92px 40px;
  background-color: #252525;
}

.layer {
  /* width: 254.7px;
  height: 241px; */
  margin: 0 32.3px 18px 40px;
  object-fit: contain;
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
  font-family: SpoqaHanSans;
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
  font-family: SpoqaHanSansNeo;
  font-size: 19px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.63;
  letter-spacing: -0.79px;
  color: #ffdc00;
}

.wait-label-small {
  // width: 136px;
  // height: 32px;
  margin: 150px 52px 0 54px;
  opacity: 0.5;
  font-family: SpoqaHanSansNeo;
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
  font-family: Helvetica;
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
  font-family: SpoqaHanSans;
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

@media (min-width: 1200px) {
    .container{
        max-width: 970px;
    }
}
</style>