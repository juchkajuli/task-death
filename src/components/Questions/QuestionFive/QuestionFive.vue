<template>
  <div class="question-five">
    <input v-model="age" type="hidden" />
      <div class="group-age"> 
        <MyHeader 
          v-if="age > 18 && age < 35"
          msg="По вам скучает очень близкий человек,
            которого больше нет в мире живых ."
          :class="{message}"
        />
        <MyHeader 
          v-if="age > 36 && age < 45" 
          msg="По вам скучает очень близкий человек,
            которого больше нет в мире живых.
            Возможно это дедушка или бабушка."
          :class="{message}"
        />

        <MyHeader 
          v-if="age > 46" 
          msg="По вам скучает очень близкий человек,
            которого больше нет в мире живых.
            Возможно это кто-то из Ваших родителей."
          :class="{message}"
        />
        </div>
        <hr/>
        <TextQuestion 
          text="
          Запись, которую Вы услышите,
          может шокировать людей с
          неокрепшей психикой. Вы готовы
          узнать, что ждет именно Вас?
          "
        />

        <div class="group-btn">
          <router-link to="/answer">
            <MyButton msg="Да" />
            <MyButton msg="Затрудняюсь ответить" />
          </router-link>
        </div>

        <p class="text-muted"> Вопрос 5 - 5 </p>
  </div>
</template>

<script>
import MyHeader from '@/components/Header/Header'
import TextQuestion from '@/components/Text/TextQuestion.vue'
import MyButton from '@/components/UI/Button/Button.vue'

export default {
  name: 'QuestionFive',
  components: {
    MyHeader,
    TextQuestion,
    MyButton
  },
    data() {
    return {
      age: 0,
      message: true,
      loading: true,
      content: false,
    }
  },
  mounted() {
    if (localStorage.age) {
      this.age = localStorage.age;
    }
  }
}
</script>

<style lang="scss" scoped>
  .question-five {
    height: 100vh;

    hr {
      border-width: .1px;
      opacity: .5;
    }
  }

  .question-five::before {
    content: "";
    display: block;
    position: absolute;
    background: url('../../../assets/eye1.svg');
    width: 84px;
    height: 55px;
    opacity: .2;
    right: -2%;
    top: 5%;
  }

  .message {
    background: #fff;
    width: 260px;
    height: 54px;
    margin: 2rem auto;
    border-radius: 5px;
    border: 20px solid transparent; 
    position: relative;
    color:  #202024;
    font-size: 14px;
    opacity: 0;
    transition: 1s;
    animation: show 3s 1;
    animation-fill-mode: forwards;
    animation-delay: .4s;
    padding: 0;
  }

  .message::after {
    content: ''; 
    position: absolute;
    right: 0;
    bottom: -39px;
    border: 10px solid transparent;
    border-top: 9px solid #fff;
    opacity: 0;
    transition: 1s;
    animation: show 3s 1;
    animation-fill-mode: forwards;
    animation-delay: .4s;
  }

  @keyframes show {
    0% {
      opacity:0;
    }
    100% {
      opacity:1;
    }
  }

   .text-muted {
    font-weight: 300;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 0.1em;
    color: rgba(255, 255, 255, 0.6);
  }

</style>