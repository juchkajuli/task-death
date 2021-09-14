<template>
  <div class="question-one">
    <TextQuestion 
      :class="{marginBottom: isMarginBottom}"
      text="Боитесь ли вы умереть?" 
    />
    <router-link to="/question2">
      <MyButton msg="Да" />
      <MyButton msg="Нет" />
    </router-link>
    <span class="text-muted">Вопрос 1 - 5</span>
  </div>
   <router-view/>
</template>

<script>
import TextQuestion from '@/components/Text/TextQuestion.vue'
import MyButton from '@/components/UI/Button/Button.vue'


export default {
  name: 'QuestionOne',
  components: {
    TextQuestion,
    MyButton
  },
  data() {
    return {
      isMarginBottom: true
    }
  }
}
</script>

<style lang="scss" scoped>
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap');
  $font-family: 'Roboto', sans-serif;
  $color: #F6C866;

  .question-one {
    margin-bottom: 10rem;
  }

  .text-muted {
    font-weight: 300;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 0.1em;
    color: rgba(255, 255, 255, 0.6);
  }

  .marginBottom {
    margin-bottom: 2rem;
  }
</style>