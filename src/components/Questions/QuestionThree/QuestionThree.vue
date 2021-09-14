<template>
  <div class="question-three">
    {{age}}
    <MyHeader 
      msg="Уже совсем скоро Вы узнаете много
      интересного о своем будущем!"
    />

    <TextQuestion 
      text="Укажите свою дату
      рождения:"
    />
    <my-select :data=$data @age="addAge"></my-select>

    <p class="text-muted"> Вопрос 3 - 5 </p>
     
  </div>
</template>

<script>
import MyHeader from "@/components/Header/Header.vue"
import TextQuestion from "@/components/Text/TextQuestion.vue"
import MySelect from '@/components/UI/Select/Select.vue'

export default {
  name: 'QuestionTwo',
  components: {
    MyHeader,
    TextQuestion,
    MySelect
  },
  data() {
    return {
      age: null,
      postFontSize: 1,
      data: {}
    }
  },
  methods: {
    addAge: function (str) {
      return str
    }
  } 
}
</script>

<style lang="scss" scoped>
   @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap');
   $font-family: 'Roboto', sans-serif;

  .question-three {
    height: 100vh;
  }

  .question-three .header::before {
    content: "";
    display: block;
    position: absolute;
    background: url('../../../assets/eye1.svg');
    width: 84px;
    height: 55px;
    opacity: .2;
    right: -2%;
  }

   .text-muted {
    font-weight: 300;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 0.1em;
    color: rgba(255, 255, 255, 0.6);
  }

</style>