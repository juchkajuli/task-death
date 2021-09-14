<template>
  <div class="text-question">
    <p>
      {{text}}
    </p>
  </div>
</template>

<script>
export default {
  name: 'TextQuestion',
  props: {
    text: String
  }
}
</script>

<style lang="scss" scoped>
  @import url('https://fonts.googleapis.com/css2?family=Bad+Script&family=Roboto:wght@300;400;500;700;900&display=swap');
  $font-family: 'Roboto', sans-serif;
  $color: #F6C866;

  .text-question {
    font-family: $font-family;
    color: $color;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 25px;
    color: $color;
    text-transform: uppercase;
    white-space: pre-line;
    margin-bottom: 2rem;
  }
</style>