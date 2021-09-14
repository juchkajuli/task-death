<template>
  <div class="text-content">
    <p>
      {{text}}
    </p>
  </div>
</template>

<script>
export default {
  name: 'TextContent',
  props: {
    text: String
  }
}
</script>

<style lang="scss" scoped>
  @import url('https://fonts.googleapis.com/css2?family=Bad+Script&family=Roboto:wght@300;400;500;700;900&display=swap');
  $font-family: 'Roboto', sans-serif;

  .text-content {
    font-family: $font-family;
    line-height: 25px;
    font-size: 16px;
  }

  .text-content p {
    white-space: pre-line;
    margin: 0;
  }
</style>