<template>
  <div class="question-two">
    <MyHeader 
      msg="Мы расскажем Вам не только подробности
      вашей смерти, но также поможем Вам
      избежать этой ужасной даты и продлить
      вашу жизнь на многие годы."
    />

    <TextQuestion 
      text="Когда Вы чувствуете себя
      наиболее комфортно?"
    />

    <div class="btn-router"> 
      <router-link to="/question3">
        <MyButton msg="Утро" />
        <MyButton msg="День" />
        <MyButton msg="Вечер" />
        <MyButton msg="Ночь" />
      </router-link>
      <p class="text-muted"> Вопрос 2 - 5 </p>
    </div>
  </div>
</template>

<script>
import MyHeader from "@/components/Header/Header.vue"
import TextQuestion from "@/components/Text/TextQuestion.vue"
import MyButton from "@/components/UI/Button/Button.vue"

export default {
  name: 'QuestionTwo',
  components: {
    MyHeader,
    TextQuestion,
    MyButton
  },
  data() {
    return {
      isTextQuestion: true
    }
  }
}
</script>

<style lang="scss" scoped>
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap');
  $font-family: 'Roboto', sans-serif;
  $color: #F6C866;
    
  .question-two {
    height: 100vh;
  }

  .question-two .header {
    position: relative;
  }

  .question-two .header::before {
    content: "";
    display: block;
    position: absolute;
    background: url('../../../assets/eye1.svg');
    width: 84px;
    height: 55px;
    opacity: .2;
    right: -2%;
  }

  .btn-router {
    max-width: min-content;
    margin: auto;
  }

  .text-muted {
    font-weight: 300;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 0.1em;
    color: rgba(255, 255, 255, 0.6);
  }

</style>