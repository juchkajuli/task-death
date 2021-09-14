<template>
  <div class="question">
    <TextContent 
      :class="{textSmall: isTextSmall}"
      text="Лучшие астрологи и экстрасенсы Румынии" />

    <div class="description">
      <TextContent 
        :class="{opacity: isOpacity, fontSize: isFontSize,
        weightSmall: isWeightSmall}"
        text="Точность прогноза: 97%"
      />
      <div class="description-image">
        <img src="@/assets/woman1.png" alt="девушка" class="description-image-woman" />
        <img src="@/assets/icon1.svg" alt="" class="description-image-icon" />
      </div> 
      
      <div class="text-question">
        <TextContent 
          text="Вас беспокоит вопрос о том, "
          :class="{color: isColor}"/>

        <TextContent
          :class="{color: isColor, uppercase: isUppercase}"
          text="когда Вы покинете этот Мир и
           при каких обстоятельствах?"
         />
      </div>
      <a href="#question1">
        <MyButton
          msg="Да" 
        />
      </a>
      <a href="#question1">
        <MyButton
          msg="Нет" 
        />
      </a>
        <p class="textSmall"> Онлайн предсказание </p>
    </div>

    <div class="content">
        <div class="content-top">
          <TextContent 
            text="Позвольте нам раскрыть
            эту волнующую тайну и"
          />
          <TextContent 
            :class="{color: isColor, 
              weightBold: isWeightBold,
              fontSize: isFontSize
            }"
            text="с точностью определить дату 
            и время вашей смерти,"
          />
          <TextContent 
            text="а также предшествующую
            этому событию причину"
          />
        </div>

      <div class="content-medium">
        <TextContent 
          text="Многие не верят
          предсказаниям и мы
          решили доказать каждому, "
        />

        <TextContent
          :class="{color: isColor, fontSize: isFontSize}"
          text="что прогноз может
          изменить жизнь
          любого человека! "
        />
      </div>

      <div id="question1">
        <QuestionOne />
      </div>

      <div class="text-bad"> 
        <img src="@/assets/eye1.svg" class="image-eye" alt="" />
        <img src="@/assets/eye.svg" class="image-moon" alt="" />
        <TextContent 
            :class="{badScript: isBadScript}"
            text="Вы, конечно, умрете. 
              И все, с кем вы знакомы, 
              тоже однажды умрут."
        />
      </div>

    </div>
   
      <Footer />
  </div>
</template>

<script>
import MyButton from '@/components/UI/Button/Button.vue'
import QuestionOne from '@/components/Questions/QuestionOne/QuestionOne.vue'
import Footer from '@/components/Footer/Footer.vue'
import TextContent from '@/components/Text/TextContent.vue'

export default {
  name: 'QuestionPrimary',
  components: {
    MyButton,
    QuestionOne,
    TextContent,
    Footer
  },

  props: {
    msg: String
  },
  data() {
    return {
      isBadScript: true,
      isColor: true, 
      isUppercase: true,
      isFontSize: true,
      isOpacity: true,
      isWeightSmall: true,
      isWeightBold: true,
      isTextSmall: true,
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Bad+Script&display=swap');
  $font-family-badScript: 'Bad Script', cursive;

  $color: #fff;
  $color2: rgba(255, 255, 255, 0.6);
  $font-family: 'Roboto', sans-serif;
    
  .badScript {
      font-family: $font-family-badScript;
    }

  .color {
    color: #F6C866;
    font-size: 16px;
    line-height: 25px;
  }

  .uppercase {
    text-transform: uppercase;
  }

  .opacity {
    opacity: .6;
  }

  .weightSmall {
    font-weight: 300;
    letter-spacing: .1em;
  }

  .weightBold {
    font-weight: 500;
  }

  .fontSize {
    line-height: 25px;
    font-size: 20px;
  } 

  .textSmall {
    font-style: normal;
    font-weight: 300;
    font-size: 12px;
    line-height: 14px;
    text-align: center;
    letter-spacing: 0.1em;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    margin: 2rem 0;
    padding-bottom: .5rem;
    color: rgba(255, 255, 255, 0.6);
  }


  .text-question {
    margin-bottom: 2rem;
  }

  .description p {
    border: none;
  }

  .content-top {
    border: 1px solid #FFFFFF;
    box-sizing: border-box;
    border-radius: 3px;
    margin: 0 auto 5rem;
    padding: 3rem 1rem 2rem;
    position: relative;
    max-width: 380px;
    max-height: 435px;
  }

  .content-top::before {
    content: '';
    position: absolute;
    display: block;
    background: url('../../assets/hands.svg') no-repeat;
    width: 78px;
    height: 78px;
    top: -44px;
    right: 42%;
  }

  .content-medium {
    position: relative;
    width: 100vw;
    padding: 10rem 0;
    margin-bottom: 3rem;
  }

  .content-medium::before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: url('../../assets/img.jpg') no-repeat;
    background-size: cover;
    background-position: center;
    opacity: .2;
  }

  .description-image-icon, 
  .description-image-woman {
    display: block;
    margin: auto;
  }

  .description-image {
    position: relative;
    z-index: 100;
    margin-bottom: 7rem;
   
  }
  .description-image-woman {
    z-index: 10;
    position: relative;
    top: 43px;
    
  }

  .description-image-icon {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    z-index: -10;
    opacity: .2;
  }

  .description {
    margin-bottom: 10rem;
  }

  .text-bad {
    position: relative;
    margin: 10rem auto;
  }

  .image-eye, .image-moon {
    position: absolute;
    opacity: .2;
  }

  .image-eye {
    right: -2%;
    top: -100%;
  }

  .image-moon {
    left: 0%;
    bottom: -100%;
  }

  .text-bad::before {
    content: '';
    display: block;
    position: absolute;
    background: url('../../assets/rune1.svg');
    width: 32px;
    height: 10px;
    right: 50%;
    top: -75%;
  }

 .text-bad::after {
    content: '';
    display: block;
    position: absolute;
    background: url('../../assets/rune2.svg');
    width: 32px;
    height: 10px;
    right: 50%;
    top: 175%;
  }

</style>