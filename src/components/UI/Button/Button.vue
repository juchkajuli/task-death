<template>
  <div class="button">
    <button 
      class="btn" 
      :type="type"
    >
      {{ msg }}  
    </button>
  </div>
</template>

<script>
export default {
  name: 'MyButton',
  props: {
    msg: String,
    type: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
   @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap');
   $font-family: 'Roboto', sans-serif;
   $color: #fff;

  .btn {
    background: linear-gradient(90deg, rgba(246, 200, 102, 0.9) -6.2%, rgba(254, 173, 53, 0.9) 100%);
    margin-bottom: 20px;
    border-radius: 50px;
    border: none;
    font-family: $font-family;
    color: $color;
    font-size: 14px;
    line-height: 16px;
    font-style: normal;
    font-weight: normal;
    cursor: pointer;
    padding: 1rem 0;
    width: 180px;
    position: relative;
}

.btn::before {
  content: '';
  display: block;
  position: absolute;
  width: 100%;
  height: 48px;
  background: linear-gradient(248.67deg, rgba(255, 255, 255, 0) 30.84%, rgba(255, 255, 255, 0.29) 46.06%, rgba(255, 255, 255, 0) 64.04%);
  top: -1px;
  animation: gradient 7s infinite linear; // 10s - скорость анимации
  background-size: 350%;
  border-radius: 50px;
}

@keyframes gradient {
    0% {
        background-position: 80% 0%;
    }
    50% {
        background-position: 20% 100%;
    }
    100% {
        background-position: 80% 0%;
    }
}
</style>