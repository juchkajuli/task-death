<template>
  <div class="content-answer">
    <LoadAudio v-show="loading" />
    <div class="content" v-show="content">

      <div class="text-msg">
        <TextContent 
          text="Спасибо за ваши ответы!"
        />
        <TextContent
          :class="{bold: isBold}"
          text="Мы подготовили для вас
           персональную аудио запись с
           вашим прогнозом."
        />
      </div>
      
      <TextContent 
        :class="{textNormal: isTextNormal}"
        text="Вы можете узнать, как повлиять
        на события, которые ожидают
        вас в ближайшем будущем. "
      />

      <div class="text-color">
        <TextContent 
          :class="{color: isColor, bold: isBold, uppercase: isUppercase}"
          :text=" 'Первое значимое событие' + 
           ' может произойти уже ' +
          '' + date + ',' "
        />
        <TextContent
          :class="{color: isColor}"
          text="вам надо быть готовым, 
          что бы последствия
          не оказались необратимыми."
         />
      </div>

      <TextContent 
        :class="{textNormal: isTextNormal}"
        text="Нажмите на кнопку ниже прямо
          сейчас и наберите наш номер
          телефона. Прослушайте важную
          информацию!"
      />

      <MyLink
        :class="{background: isBackground}"
        msg="Позвонить и прослушать"
      />

      <Footer 
        :class="{hover: isHover}"
      />
    </div>
  </div>
</template>

<script>
import TextContent from '@/components/Text/TextContent.vue'
import MyLink from '@/components/UI/Link/Link.vue'
import Footer from '@/components/Footer/Footer.vue'
import LoadAudio from '@/components/UI/Loading/Audio/LoadAudio.vue'

function getTomorrow() {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1); // even 32 is acceptable
    let month = tomorrow.getMonth() + 1
    return `${tomorrow.getDate()}.${month}.${tomorrow.getUTCFullYear()}`;

}

export default {
  name: 'Answer',
  components: {
    TextContent,
    MyLink,
    Footer,
    LoadAudio
  },
  data() {
    return {
      loading: true,
      content: false,
      isColor: true,
      isBold: true,
      isTextNormal: true,
      isUppercase: true,
      isBtnCall: true,
      isBackground: true,
      date: getTomorrow(),
      isHover: true
    }
  },
  mounted() {
    setTimeout(() => {
      this.loading = false
      this.content = true
    }, 5000)
  },
  watch: {
    $route() {
      this.loading = true
      this.content = false
      setTimeout(() => {
        this.loading = false
        this.content = true
      })
    }
  }
}
</script>

<style lang="scss" scoped>

.content {
  height: 100vh;
  overflow: hidden;
}

.color {
  color: #F6C866;
  white-space: pre-line;  
}

.uppercase {
  text-transform: uppercase;
}

.text-msg {
    background: #fff;
    width: 249px;
    margin: 2rem auto;
    border-radius: 5px;
    border: 20px solid transparent; 
    position: relative;
    color:  #202024;
    font-size: 14px;
    font-style: normal;
    line-height: 18px;
    white-space: pre-line;
  }

  .text-msg::after {
    content: ''; 
    position: absolute;
    right: 0;
    bottom: -39px;
    border: 10px solid transparent;
    border-top: 9px solid #fff;
  }

  .bold {
    font-weight: bold;
  }

  .textNormal {
    font-weight: 300;
    line-height: 16px;
    margin-bottom: 2rem;
    font-size: 14px;
  }

  .text-color {
    border: 1px solid #FFFFFF;
    box-sizing: border-box;
    border-radius: 3px;
    width: 259px;
    margin: auto;
    padding: 1rem 1rem;
    font-size: 16px;
    line-height: 25px;
    margin-bottom: 2rem;
  }

  .hover {
    height: 17px;
    cursor: pointer;
    margin: 2rem auto 0;
    transition: height 3s;
  }
  .hover:hover {
    height: 45px;
    transition: height 3s;
  }
</style>