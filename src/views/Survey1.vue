<script setup>
 import { useRouter } from 'vue-router';
 import { ref } from 'vue';
 import { watch } from 'vue';

 const router = useRouter();

  const agreeYn = ref('');

</script>

<template>
  <div class="wrap">
    <img src="../static/images/top_banner.png" />
    <div class="box top-line">
        <h1 class="box-tit">Join Us as a "Creator" on Keverything!</h1>
        <p class="box-txt">
          Become a "Creator" on Keverything! Connect a variety of Korean products to your social media accounts, promote and sell them, and earn profits. You choose only the products you love. we handle the rest, including shipping, payments, and customer support. Join us today and start earning effortlessly!
        </p>
        <p class="box-txt">
          We, <strong>The Kore Impact INC</strong>, headquartered in Beverly Hills, California, are committed to promoting Korea's K-Wave in the U.S. market. Our <strong>Keverything platform</strong>, launching in December 2024, will offer a valuable opportunity to connect a wide variety of Korean products and services to the U.S. market in collaboration with over 500,000 global influencers.
        </p>
        <p class="box-txt">
          We are currently recruiting "Creators" to join us in expanding into the U.S. market through <strong>Keverything</strong>. We kindly ask for the support and participation of many Korean companies, and we would be grateful if you could provide your valuable information.
        </p>
        <p class="box-txt">
          Thank you for your interest and participation.
        </p>
        <p class="box-txt">
          <strong>Inauiry</strong>
        </p>
        <ul>
            <li>uskoreimpct@gmail.com</li>
        </ul>
        <div class="box-line"></div>
        <p class="box-txt color-red">* Mark is a required question</p>
    </div>
    <div class="box">
        <h5>* Please agree to the collection and use of personal information. <span class="color-red">*</span></h5>
        <p class="box-txt">
            <strong>Consent for the Collection and Use of Your Information in Accordance with CCPA Section 1798.100, CCPA Section 1798.105, CPRA Section 1798.121, and CCPA/CPRA in California, USA.</strong><br />
            We request your consent for the collection and use of your personal information in accordance with the laws outlined below. Please read the following information carefully and indicate your consent.
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
      <button @click="()=>{
        if(agreeYn == 'N') return;
        router.push({
          path: '/survey2',
          state: { agree: 'Y' }
        });

      }" class="btn">next</button>
  </div>
</template>




<style>
</style>