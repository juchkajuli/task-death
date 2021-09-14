<template>
  <div class="btn-link">
    <button class="link" @click="getList()">
      {{ msg }}  
    </button>
    <div class="info" v-show="info">
      <ul>
        <li>Имя : {{name}}</li>
        <li>Рост : {{height}}</li>
        <li>Вес : {{mass}}</li>
        <li>Цвет волос : {{hair_color}}</li>
        <li>Цвет глаз : {{eye_color}}</li>
        <li>Год рождения : {{birth_year}}</li>
        <li>Пол : {{gender}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
const api = 'https://swapi.dev/api/people/1/'

export default {
  name: 'MyLink',
  props: {
    msg: String
  },
  data() {
    return {
      info: false,
      name: null,
      height: null,
      mass: null,
      hair_color: null, 
      eye_color: null, 
      birth_year: null, 
      gender: null
    }
  },
  methods: {
     getList() {
      this.axios.get(api).then((response) => {
        const res = response.data
        this.name = res.name
        this.height = res.height
        this.mass = res.mass
        this.hair_color = res.hair_color
        this.eye_color = res.eye_color
        this.birth_year = res.birth_year
        this.gender = res.gender
        this.info = true
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
   @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap');
   $font-family: 'Roboto', sans-serif;
   $color: #fff;

  .btn-link, .link {
    font-family: $font-family;
    font-size: 14px;
    line-height: 16px;
    font-style: normal;
    font-weight: normal;
  }

  .link {
    background: linear-gradient(90deg, rgba(76, 217, 100, 0.9) -6.2%, rgba(50, 185, 73, 0.9) 100%);
    display: inline-block;
    border-radius: 50px;
    border: none;
    color: $color;
    cursor: pointer;
    padding: 1rem 2rem;
    position: relative;
  }

    
  .link::before {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 48px;
    background: linear-gradient(248.67deg, rgba(255, 255, 255, 0) 30.84%, rgba(255, 255, 255, 0.29) 46.06%, rgba(255, 255, 255, 0) 64.04%);
    top: -1px;
    animation: gradient 7s infinite linear; // 10s - скорость анимации
    background-size: 200%;
    border-radius: 50px;
    right: 0;
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

  .info {
    z-index: 100;
    border: 1px solid #ccc;
    width: 300px;
    height: 286px;
    border-radius: 3px;
    margin: 2rem auto;

    ul {
      margin: 2rem;
      padding: 0;
      text-align: left;

      li {
        list-style: none;
        margin-bottom: 1rem;
      }
    }
  }
</style>