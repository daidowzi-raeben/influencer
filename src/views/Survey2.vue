<script setup>
    import { reactive } from 'vue';
    import { ref } from 'vue';
    import { watch } from 'vue';
    import { useRouter } from 'vue-router';
    import { onMounted } from 'vue';


    const router = useRouter();
    const isSubmit = ref(false);
    const checkEmail = ref(false);

    const mediaArr = ['YouTube','Facebook','Instagram','TikTok','Other'];
    const contentArr = ['Food','Beauty, Cosmetic','Fashion','Music','Life','etc'];
    const activityArr = ['Product seeding','Product sales (utilizing API provided by Keverything), Cosmetic','Gonggu'];

    onMounted(() => {
        const agreeYn = window.history.state?.agree;
        if(agreeYn != 'Y'){
            alert("Invalid approach.");
            router.replace("/");
        }
    });

    const data = reactive({
        accountYn : '',
        accountType : '',
        contentType:[],
        mediaLink:'',
        firstName:'',
        lastName:'',
        password:'',
        email:'',
        phoneNumber:'',
        questions:'',
        activityType:'',
    });

    watch(
        () => data.email,
        (newVal) => {
            if (newVal) {
                checkEmail.value = validateEmail(newVal);
                console.log(checkEmail);
            }
        }
    );

    const submit = async()=>{

        isSubmit.value=true;

        if(data.accountYn == '' || 
            data.contentType.length <= 0 ||
            data.firstName == '' ||
            data.lastName == '' ||
            (data.email == '' || !checkEmail.value) ||
            data.phoneNumber == '' ||
            data.activityType == ''
        ){
            return;
        }

        try {
            const response = await fetch('https://api.3alliance.co.kr/kworld/insert.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', 
            },
            body: JSON.stringify(data),
            });
            console.log("response>>>",response);
            if(response != ''){

            }
        } catch (error) {
            console.log(error);
            alert("Failed, please contact your administrator.")
        }
        
        router.push('/surveyComplete');

        
    }

    const validateEmail = (email) => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
    }



</script>
<template>
  <div class="wrap">
    <img src="../static/images/top_banner.png" />
    <div class="box top-line">
        <h1 class="box-tit">Join Us as a "Creator" on Keverything!</h1>
        <div class="box-line"></div>
        <p class="box-txt color-red">All (*) marked fields are mandatory</p>
    </div>
    <div class="box">
        <h4 class="bg-tit">Join Us as a "Creator" on Keverything!</h4>
        <p class="box-txt">
          We are looking for creators to chase their dreams together with Keverything!  
        </p>
    </div>
    <div class="box" :class="isSubmit && data.accountYn == '' ? 'error' : null">
        <h5>1. Do you have a social media account? <span class="color-red">*</span></h5>
        <div class="check-wrap">
            <input type="radio" id="radio1" name="radio" v-model="data.accountYn" value="Y" required />
            <label for="radio1">1. Yes, I do</label>
        </div>
        <div class="check-wrap">
            <input type="radio" id="radio1_2" name="radio" v-model="data.accountYn" value="N" required />
            <label for="radio1_2">2. No, I don't</label>
        </div>
        <p class="input-guide">※ This is an essential question</p>
    </div>
    <div class="box">
        <h5>2. If you answered "Yes" above, which social media accounts do you have?</h5>
        <div class="check-wrap" v-for="(item, index) in mediaArr" :key="index">
            <input type="radio" :id="item" name="radio2" v-model="data.accountType" :value="item" required />
            <label :for="item">{{ index + 1 }}. {{ item }}</label>
        </div>
    </div>
    <div class="box" :class="isSubmit && data.contentType.length <= 0 ? 'error' : null">
        <h5>3. What type of content do you primarily share on your social media? <span class="color-red">*</span></h5>
        <div class="check-wrap" v-for="(item, index) in contentArr" :key="index">
            <input type="checkbox" :id="item" name="check[]" v-model="data.contentType" :value="item"/>
            <label :for="item">{{ index+1 }}. {{ item }}</label>
        </div>
        <p class="input-guide">※ This is an essential question</p>
    </div>
    <!-- 2.11 추가 -->
    <div class="box" :class="isSubmit && data.activityType.length <= 0 ? 'error' : null">
        <h5>4. What activity are you most interested in? <span class="color-red">*</span></h5>
        <div class="check-wrap" v-for="(item, index) in activityArr" :key="index">
            <input type="radio" :id="item" name="radio3" v-model="data.activityType" :value="item" required />
            <label :for="item">{{ index + 1 }}. {{ item }}</label>
        </div>
        <p class="input-guide">※ This is an essential question</p>
    </div>
    <!-- //2.11 추가 -->
    <div class="box">
        <h5>5. Please provide the link to your primary social media account</h5>
        <div class="input-wrap">
            <input type="text" placeholder="my answer" class="input-text" v-model="data.mediaLink" required />
        </div>
    </div>
    <div class="box" :class="isSubmit && data.firstName == '' ? 'error' : null">
        <h5>6. What is your first name? <span class="color-red">*</span></h5>
        <div class="input-wrap">
            <input type="text" placeholder="my answer" class="input-text" v-model="data.firstName" required />
        </div>
        <p class="input-guide">※ This is an essential question</p>
    </div>
    <!-- 2.11 추가 -->
    <div class="box" :class="isSubmit && data.lastName == '' ? 'error' : null">
        <h5>7. What is your last name? <span class="color-red">*</span></h5>
        <div class="input-wrap">
            <input type="text" placeholder="my answer" class="input-text" v-model="data.lastName" required />
        </div>
        <p class="input-guide">※ This is an essential question</p>
    </div>
    <!-- //2.11 추가 -->
    <div class="box" :class="isSubmit && (data.email == ''|| !checkEmail) ? 'error' : null">
        <h5>8. What is your Email address? <span class="color-red">*</span></h5>
        <div class="input-wrap">
            <input type="text" placeholder="my answer" class="input-text" v-model="data.email" required />
        </div>
        <p class="input-guide">※ Please check the email</p>
    </div>
    <!-- 2.11 추가 -->
    <div class="box" :class="isSubmit && (data.password == '') ? 'error' : null">
        <h5>9. Please provide a password to use for Keverything(All passwords are securely encrypted) <span class="color-red">*</span></h5>
        <div class="input-wrap">
            <input type="password" placeholder="my answer" class="input-text" v-model="data.password" required />
        </div>
        <p class="input-guide">※ Please check the password</p>
    </div>
    <!-- //2.11 추가 -->
    <div class="box" :class="isSubmit && data.phoneNumber == '' ? 'error' : null">
        <h5>10. Please provide your cell number  <span class="color-red">*</span></h5>
        <div class="input-wrap">
            <input type="text" placeholder="my answer" class="input-text" v-model="data.phoneNumber" required />
        </div>
        <p class="input-guide">※ This is an essential question</p>
    </div>
    <div class="box">
        <h5>11. If you have any questions, feel free to leave them below.</h5>
        <div class="input-wrap">
            <input type="text" placeholder="my answer" class="input-text w-100" v-model="data.questions"/>
        </div>
    </div>
  </div>
  <div class="btn-wrap">
      <div>
        <router-link to="/" class="btn">back</router-link>
        <button @click="submit" class="btn btn-primary">submit</button>
      </div>
  </div>
</template>

<style>
</style>