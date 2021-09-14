<template>
  <div class="footer">
    <p class="footer-text"> 
      TERMENI SI CONDITII: ACESTA ESTE UN SERVICIU
      DE DIVERTISMENT. PRIN FOLOSIREA LUI
      DECLARATI CA AVETI 18 ANI IMPLINITI.
    </p>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="scss" scoped>
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap');

  $color: #9D9D9D;
  $font-family: 'Roboto', sans-serif;

  .footer-text {
    font-family: $font-family;
    font-style: normal;
    font-weight: normal;
    font-size: 7px;
    line-height: 9px;
    text-align: center;
    letter-spacing: 3px;
    text-transform: uppercase;
    white-space: pre-line;
    color: $color;
  }

//   .footer {
//     position: fixed;
//     bottom: 0;
//     right: 0;
//     left: 0;
// }
</style>