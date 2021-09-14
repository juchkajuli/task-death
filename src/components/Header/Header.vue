<template>
  <div class="header" >
    <p>
      {{ msg }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'MyHeader',
  props: {
    msg: String
  }
}
</script>

<style lang="scss" scoped>

@import url('https://fonts.googleapis.com/css2?family=Bad+Script&display=swap');
$font-family: 'Bad Script', cursive;
$color: #fff; 

.header {
  font-family: $font-family;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  color: $color;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  margin: 1rem 0;
  white-space: pre-line;
  opacity: .6;
  padding: 2rem 0;
  
  p {
    margin-block-start: 0;
    margin-block-end: 0;
  }
}

</style>