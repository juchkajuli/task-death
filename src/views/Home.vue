<template>
  <div class="home">
    <QuestionPrimary />
  </div>
</template>

<script>
// @ is an alias to /src
import QuestionPrimary from '@/components/Questions/QuestionPrimary'

export default {
  name: 'Home',
  components: {
    QuestionPrimary
  }
}
</script>

<style lang="scss" scoped>
.home {
  background:   url('../assets/light.svg') no-repeat;
  background-position: 70% -11%;
}

</style>
