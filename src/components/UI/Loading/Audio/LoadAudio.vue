<template>
  <div class="load-audio">
    <img class="image" src="@/assets/microphone.svg" alt="" />

    <div id="ProgressBar">
      <div id="Progress" >
      </div>
      {{ progress() }}
        <p>{{item}}</p>
        <p>Запись сообщения </p>
    </div>

  </div>
</template>

<script>
export default {
  name: 'LoadAudio',
  data() {
    return {
      item: 0,
      width: 0
    }
  },
  methods: {
    progress: function() {
      setTimeout(() => {
        if (this.width < 100) {
          this.width++
          this.item = this.width * 1 + '%'
        } 
      }, 40)
      
    }
  }
}
</script>

<style lang="scss" scoped>
.load-audio {
  height: 100vh;
  position: relative;
  top: 30vh;
}

#ProgressBar {
  width: 50%;
  height: 4px;
  border-radius: 7px;
  background: #fff;
  margin: auto;
}

#Progress {
  width: 100%;
  background-color: #F6C866;
  height: 4px;
  border-top-left-radius: 7px;
  border-bottom-left-radius: 7px;
  animation-name: progressBar;
  animation-iteration-count: 1;
  animation-duration: 5s;
  border-radius: 7px;
}

@keyframes progressBar {
  0% {
    width: 0;
  }
  
  100% {
    width: 100%;
  }
}

</style>