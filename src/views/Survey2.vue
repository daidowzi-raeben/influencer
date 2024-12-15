<template>
  <div class="wrap">
    <img src="../static/images/top_banner.png" />
    <div class="box top-line">
        <h1 class="box-tit">Join Us as a "Creator" on Keverything!</h1>
        <div class="box-line"></div>
        <p class="box-txt color-red">* Mark is a required question</p>
    </div>
    <div class="box">
        <h4 class="bg-tit">Join Us as a "Creator" on Keverything!</h4>
        <p class="box-txt">
          We are looking for creators to chase their dreams together with Keverything!  
        </p>
    </div>
    <div class="box">
        <h5>1. Do you have a social media account? <span class="color-red">*</span></h5>
        <div class="check-wrap">
            <input type="radio" id="radio1" name="radio" required />
            <label for="radio1">1. Yes, I do</label>
        </div>
        <div class="check-wrap">
            <input type="radio" id="radio1_2" name="radio" required />
            <label for="radio1_2">2. No, I don't</label>
        </div>
        <p class="input-guide">※ This is an essential question</p>
    </div>
    <div class="box">
        <h5>2. If you answered "Yes" above, which social media accounts do you have?</h5>
        <div class="check-wrap">
            <input type="radio" id="radio2" name="radio2" required />
            <label for="radio2">1. YouTube</label>
        </div>
        <div class="check-wrap">
            <input type="radio" id="radio2_2" name="radio2" required />
            <label for="radio2_2">2. Facebook</label>
        </div>
        <div class="check-wrap">
            <input type="radio" id="radio2_3" name="radio2" required />
            <label for="radio2_3">3. Instagram</label>
        </div>
        <div class="check-wrap">
            <input type="radio" id="radio2_4" name="radio2" required />
            <label for="radio2_4">4. TikTok</label>
        </div>
        <div class="check-wrap">
            <input type="radio" id="radio2_5" name="radio2" required />
            <label for="radio2_5">5. etc</label>
        </div>
    </div>
    <div class="box">
        <h5>3. What type of content do you primarily share on your social media? <span class="color-red">*</span></h5>
        <div class="check-wrap">
            <input type="checkbox" id="check1" name="check[]" />
            <label for="check1">1. Food</label>
        </div>
        <div class="check-wrap">
            <input type="checkbox" id="check1_2" name="check[]" />
            <label for="check1_2">2. Beauty, Cosmetic</label>
        </div>
        <div class="check-wrap">
            <input type="checkbox" id="check1_3" name="check[]" />
            <label for="check1_3">3. Fashion</label>
        </div>
        <div class="check-wrap">
            <input type="checkbox" id="check1_4" name="check[]" />
            <label for="check1_4">4. Music</label>
        </div>
        <div class="check-wrap">
            <input type="checkbox" id="check1_5" name="check[]" />
            <label for="check1_5">5. Life</label>
        </div>
        <div class="check-wrap">
            <input type="checkbox" id="check1_6" name="check[]" />
            <label for="check1_6">6. etc</label>
        </div>
        <p class="input-guide">※ This is an essential question</p>
    </div>
    <div class="box">
        <h5>4. Could you please provide the link to your primary social media account?</h5>
        <div class="input-wrap">
            <input type="text" placeholder="my answer" class="input-text" required />
        </div>
    </div>
    <div class="box">
        <h5>5. What is your name? <span class="color-red">*</span></h5>
        <div class="input-wrap">
            <input type="text" placeholder="my answer" class="input-text" required />
            <p class="input-guide">※ This is an essential question</p>
        </div>
    </div>
    <div class="box">
        <h5>6. What is your Email Address? <span class="color-red">*</span></h5>
        <div class="input-wrap">
            <input type="text" placeholder="my answer" class="input-text" required />
            <p class="input-guide">※ This is an essential question</p>
        </div>
    </div>
    <div class="box">
        <h5>7. Could you please provide your contact information?  <span class="color-red">*</span></h5>
        <div class="input-wrap">
            <input type="text" placeholder="my answer" class="input-text" required />
            <p class="input-guide">※ This is an essential question</p>
        </div>
    </div>
    <div class="box">
        <h5>8. If you have any questions, feel free to leave them below.</h5>
        <div class="input-wrap">
            <input type="text" placeholder="my answer" class="input-text w-100" />
        </div>
    </div>
  </div>
  <div class="btn-wrap">
      <div>
        <router-link to="/" class="btn">back</router-link>
        <router-link to="/surveyComplete" class="btn btn-primary">submit</router-link>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
  },
  components: {},
  created() {},
  mounted() {},
  methods: {},
};
</script>


<style>
</style>