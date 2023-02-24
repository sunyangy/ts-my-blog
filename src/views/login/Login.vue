<script setup lang="ts">
import { parseStringStyle } from "@vue/shared";
import { ref, reactive, nextTick } from "vue";

const form = reactive({
  email: "",
  password: "",
});
const emailErr = ref();
const pwdErr = ref();
const email_f_ref = ref();
const email_s_ref = ref();
const pwd_f_ref = ref();
const pwd_s_ref = ref();
const pwdRef = ref();
const emailRef = ref();
const getFocus = () => {
  nextTick(() => {
    emailRef.value.focus();
  });
};
getFocus();
console.log(pwdRef);
const blurEmail = () => {
  if (form.email.trim() === "") {
    emailErr.value.innerHTML = "邮箱地址不能为空";
    email_f_ref.value.style.opacity = "1";
    email_s_ref.value.style.opacity = "0";
  } else {
    emailErr.value.innerHTML = "";
    email_f_ref.value.style.opacity = "0";
    email_s_ref.value.style.opacity = "1";
  }
};

const blurPwd = () => {
  if (form.password.trim() === "") {
    pwdErr.value.innerHTML = "密码不能为空";
    pwd_f_ref.value.style.opacity = "1";
    pwd_s_ref.value.style.opacity = "0";
  } else {
    pwdErr.value.innerHTML = "";
    pwd_f_ref.value.style.opacity = "0";
    pwd_s_ref.value.style.opacity = "1";
  }
};

const formSubmit = () => {
  if (form.password.trim() === "" || form.email.trim() === "") return;
};
</script>

<template>
  <div class="container">
    <form id="form">
      <div class="social">
        <div class="title">请 登录</div>
        <div class="question">
          你没有账号? <br />
          <span>注 册</span>
        </div>

        <div class="btn">
          <div class="btn-1">
            <img src="https://img.icons8.com/color/30/000000/google-logo.png" />
            登 录
          </div>
          <div class="btn-2">
            <img
              src="https://img.icons8.com/ios-filled/30/ffffff/facebook-new.png"
            />
            登 录
          </div>
        </div>

        <div class="or">Or</div>
      </div>
      <div>
        <label for="email" ref="email">邮箱</label>
        <i>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-youxiang2"></use>
          </svg>
        </i>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="请输入邮箱地址"
          v-model="form.email"
          @blur="blurEmail"
          ref="emailRef"
        />
        <i class="failure-icon" ref="email_f_ref">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-jinggao"></use>
          </svg>
        </i>
        <i class="success-icon" ref="email_s_ref">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-zhengque"></use>
          </svg>
        </i>
        <div class="error" ref="emailErr"></div>
      </div>
      <div>
        <label for="password">密码</label>
        <i>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-tianchongxing-"></use>
          </svg>
        </i>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="请输入密码"
          v-model="form.password"
          ref="pwdRef"
          @blur="blurPwd"
        />
        <i class="failure-icon" ref="pwd_f_ref">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-jinggao"></use>
          </svg>
        </i>
        <i class="success-icon" ref="pwd_s_ref">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-zhengque"></use>
          </svg>
        </i>
        <div class="error" ref="pwdErr"></div>
      </div>
      <button @click.prevent="formSubmit">Submit</button>
    </form>
  </div>
</template>

<style scoped lang="less">
.container {
  width: 30rem;
  // height: 40rem;
  margin: 10rem auto;
  form {
    display: flex;
    height: 100%;
    flex-direction: column;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
    padding: 2rem;
    .social {
      .title {
        font-size: 25px;
        font-weight: bold;
        margin-bottom: 20px;
      }
      .question {
        font-size: 15px;
        span {
          color: #f2796e;
          cursor: pointer;
        }
      }
      .btn {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        gap: 15px;
        .btn-1,
        .btn-2 {
          padding: 10px 5px;
          width: 100%;
          display: flex;
          gap: 15px;
          justify-content: center;
          align-items: center;
          border: 2px solid #c4c4c4;
          border-radius: 8px;
          box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
          cursor: pointer;
        }

        .btn-2 {
          background-color: #4f70b5;
          color: white;
        }
      }
      .or {
        text-align: center;
      }
    }

    div {
      position: relative;
      margin-bottom: 15px;
    }

    label {
      display: block;
      margin-bottom: 1rem;
    }
    input {
      width: 100%;
      height: 3rem;
      border-radius: 8px;
      outline: none;
      border: 2px solid #c4c4c4;
      padding: 1.5rem;
      box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
    }
    input:focus {
      border: 2px solid #f2796e;
    }
    i {
      font-size: 1.5rem;
      position: absolute;
      padding: 0.5rem 0.2rem;
    }

    .failure-icon,
    .error {
      color: red;
    }

    .success-icon {
      color: green;
    }

    .error {
      font-size: 14.5px;
      margin-top: 5px;
    }

    .success-icon,
    .failure-icon {
      right: 0;
      opacity: 0;
    }

    button {
      margin-top: 15px;
      width: 100%;
      height: 45px;
      background-color: #f2796e;
      border: 2px solid #f2796e;
      border-radius: 8px;
      color: #fff;
      font-size: 20px;
      cursor: pointer;
      box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
      transition: all 0.1s ease;
    }

    button:hover {
      opacity: 0.8;
    }
  }
}

/**
* ! Media Queries are here
**/
</style>
