<template>
  <div class="question-four">
    <Load v-show="loading" />
    <div v-show="content" >
      <MyHeader 
          msg="Смерть родного человека – одно из
          тяжелейших испытаний в жизни каждого 
          из нас!"
      />

        <TextQuestion
          text="Снятся ли Вам умершие 
          люди?"
        />

        <div class="btn-qroup">
          <router-link to='question5'>
            <MyButton msg="Да" />
            <MyButton msg="Нет" />
            <MyButton msg="Иногда" />
          </router-link>
        </div>

        <p class="text-muted">Вопрос 4 - 5 </p>
    </div>
  </div>
</template>

<script>
  import MyHeader from '@/components/Header/Header.vue'
  import TextQuestion from '@/components/Text/TextQuestion.vue'
  import MyButton from '@/components/UI/Button/Button.vue'
  import Load from '@/components/UI/Loading/Spinner/LoadSpinner.vue'

  export default {
    name: 'QuestionFour',
    components: {
      MyHeader,
      TextQuestion, 
      MyButton,
      Load
    },
    data() {
      return {
        loading: true,
        content: false,
        age: ""
      }
    },
    mounted() {
      setTimeout(() => {
      this.loading = false;
      this.content = true
      }, 2000);
    },
    watch: {
      $route() {
        this.loading = true;
        this.content = false
        setTimeout(() => {
          this.loading = false;
          this.content = true
        }, 2000);
      },
    },
  }
</script>

<style lang="scss" scoped>
  .question-four {
    height: 100vh;
  }

  .question-four .header::before {
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