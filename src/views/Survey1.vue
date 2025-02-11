<script setup>
 import { useRouter } from 'vue-router';
 import { ref } from 'vue';
 import { watch } from 'vue';

 const router = useRouter();

  const agreeYn = ref('N');

  const goNext = ()=>{
    if(agreeYn.value == 'N'){
      alert("Please check to agree.");
      return;
    }else{
      router.push({
      path: '/survey2',
      state: { agree: 'Y' }
    });
  }
}

</script>

<template>
  <div class="wrap">
    <img src="../static/images/top_banner.png" />
    <div class="box top-line">
        <h1 class="box-tit">Join Us as a "Creator" on Keverything!</h1>
        <p class="box-txt">
          Discover a variety of Korean products and sync your social media accounts so you can promote and sell items while monetizing off your sales. You choose only the products you love and we handle the rest - including shipping, payments, and customer support. Join us as a creator and start earning effortlessly!
        </p>
        <p class="box-txt">
          Take part in an everyday marketing strategy that Korean creators have been using to drive sales, boost engagement and earn more revenue!
        </p>
        <p class="box-txt">
          <strong>Introducing Gonggu "creator group buying" for K-products.</strong>
        </p>
        <p class="box-txt">
          The premise is simple: you recommend a product or service to your loyal followers, and they collectively purchase it together within a limited timeframe. This collaborative shopping experience not only generates significant sales, but also fosters a strong sense of community and exclusivity around your brand recommendations.
        </p>
        <p class="box-txt">
          But the benefits extend far beyond just revenue. Gonggu also helps you deepen connections with your audience, because we plan to bring K-products that are currently hot in the Korean market but have not yet been introduced to the US at the best price possible. Be the first to bring exciting and trendy Korean products to your audience at competitive prices.
        </p>
        <p class="box-txt">
          At The Kore Impact, Inc., we are committed to promoting Korea's culture and hallyu in the U.S. market. We are headquartered in Beverly Hills, California. Our platform, Keverything(<a href="keverythings.com" target="_blank" class="a-link">keverythings.com</a>), will be launching in March 2025 and will offer a valuable opportunity to connect a wide variety of Korean products and services to the U.S. market in collaboration with over 500,000 global creators.
        </p>
        <p class="box-txt">
          We are currently recruiting "Creators" to join us in expanding into the U.S. market through Keverything. We kindly ask for your support and participation and would be grateful if you could provide us with your information.
        </p>
        <p class="box-txt">
          <strong>Thank you for your interest and participation.</strong>
        </p>
        <p class="box-txt">
          <strong>Inquiry</strong>
        </p>
        <ul>
            <li>uskoreimpact@gmail.com</li>
        </ul>
        <div class="box-line"></div>
        <p class="box-txt color-red">All (*) marked fields are mandatory</p>
    </div>
    <div class="box">
        <h5>* Please agree to the collection and use of personal information. <span class="color-red">*</span></h5>
        <p class="box-txt">
            <strong>Consent for the Collection and Use of Your Information in Accordance with CCPA Section 1798.100, CCPA Section 1798.105, CPRA Section 1798.121, and CCPA/CPRA in California, USA.</strong><br />
            We request your consent for the collection and use of your personal information in accordance with the laws outlined below. Please read the following information carefully and indicate whether you consent.
        </p>
        <ul>
            <li><b>Purpose of Collection and Use</b>&nbsp;&nbsp;<br>
            <b>The Kore Impact INC,</b>&nbsp;&lt;<b>Keverything</b>&gt; Collection and Use of Information for Creator Registration<br><br></li>
            <li><b>Items Collected and Used&nbsp;&nbsp;<br></b>: Name / Contact Information / Email Address / SNS Information</li>
        </ul>
        <ul>
            <li><b>Retention and Usage Period&nbsp;&nbsp;<br></b>Personal information will be discarded within 3 months after the partner recruitment period ends. If there is a separate request from the user, the information will be discarded immediately.</li>
        </ul>
        <ul>
            <li>&nbsp;<b>Right to Consent or Refuse, and Consequences of Refusal</b>&nbsp;&nbsp;<br>You have the right to refuse consent to the collection and use of your personal information, and there will be no disadvantage to you if you choose to refuse.</li>
        </ul>
        <div class="space"></div>
        <div class="check-wrap">
            <input type="radio" id="radio1" name="radio" v-model="agreeYn" value="Y" required />
            <label for="radio1">1. Agree</label>
        </div>
        <div class="check-wrap">
            <input type="radio" id="radio2" name="radio" v-model="agreeYn" value="N" required />
            <label for="radio2">2. Disagree</label>
        </div>
        <div class="space"></div>
    </div>
  </div>
  <div class="btn-wrap">
      <button @click="goNext" class="btn">next</button>
  </div>
</template>




<style>
</style>