<template>
  <div id="nav">
  </div>
  <router-view/>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Bad+Script&family=Roboto:wght@300;400;500;700;900&display=swap');
$font-family: 'Roboto', sans-serif;
body {
  margin: 0;

}


#app {
  font-family: $font-family;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  background:#202024; 
  overflow: hidden;
  position: relative;
}

</style>
