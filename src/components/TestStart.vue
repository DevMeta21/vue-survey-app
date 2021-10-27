<template>
<div class="root">
  <main class="main">
  <div class="MBTI-1">
    <div class="col-md-5 col-md-offset-0">
        <figure>
          <img class="layer" src="../../static/images/page01.png">
        </figure>
      </div>
    <div class="start-label-big">당신의 성향을 알아볼까요?</div>
    <div class="start-label-small">무슨 일이 일어날지 기대되네요!</div>
    <div class="start-button" @click="$router.push({name: 'TestQuestion'})">
       <span class="start-button-label"> 성향분석 시작하기</span>
      <!-- <router-link class="start-button-label" to="/question">성향분석 시작하기</router-link>
     <router-view/> -->
    </div>
  </div>
  </main>
</div>
</template>

<script>
export default {
  // future
}
</script>

<style lang="scss">
body {
  min-width: 320px;
  overflow-y: scroll;
  // padding: 10px 10px 10px 10px;
  margin: 0;
  display: block;
  //background-color: #ffdc00;
  background-image: linear-gradient( rgb(207,231,252), rgb(221,176,253));
}
.root {
    display: flex;
    // padding: 10px 10px 10px 10px;
    position: relative;
    // max-width: 600px;
    padding: 0;
    margin: 0;

}
.main {
  align-items: center;
  min-height: 100vh;
  min-height: calc(100vh - 50px);
  max-width: 640px;
  margin: 0 auto;
  // padding: 0 16px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;

}

.MBTI-1 {
  padding: 90px 0 0 0;
  max-width: 600px; 
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: auto;
  align-items: center;
  
}

.layer {
  /* width: 254.7px;
  height: 241px; */
  // margin: 0 32.3px 18px 40px;
  // object-fit: contain;
  display: block;
  // width: 100%;
  max-width: 700px;
  border: 0;
  vertical-align: top;
 
}

.start-button {
  /* width: 327px; */
  /* height: 54px; */
  // margin: 106px 0 26px;
  padding: 18px 107px 19px 108px;
  border-radius: 6px;
  background-color: #1a1a1a;
}

.start-button-label {
  /* width: 112px; */
  /* height: 17px; */
  font-family: CookieRun-Regular;
  font-size: 15px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.2px;
  text-align: center;
  color: white;
}

.start-label-big {
  /* width: 222px;
  height: 20px; */
  margin: 18px 48px 5px 57px;
  font-family: CookieRun-Regular;
  font-size: 20px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1;
  letter-spacing: normal;
  text-align: center;
  color: #000000;
}

.start-label-small {
  /* width: 233px;
  height: 24px; */
  margin: 5px 43px 106px 51px;
  font-family: CookieRun-Regular;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.71;
  letter-spacing: -0.2px;
  text-align: center;
  color: #000000;
}

@font-face {
  font-family: 'CookieRun-Regular';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/CookieRun-Regular.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}


</style>