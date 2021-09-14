<template>
  <div class="form-date">
      <select 
        v-model="day" 
        class="select-date" 
        name="day"
        :class="{'text-danger': hasErrorDay}"
        @change="changeOptionDay($event)"
        >
        <option disabled value=""> День </option>
        <option 
          v-for="(day) in days" 
          :value="day.value" 
          :key="day.index"
          > {{day.text}} 
        </option>
      </select>

       <select 
          v-model="month"
          class="select-date" 
          name="month"
          :class="{'text-danger': hasErrorMonth}"
          @change="changeOptionMonth($event)"
       >
        <option disabled value=""> Месяц </option>
        <option 
          v-for="(month) in months" 
          :value="month.value" 
          :key="month.index"
        > {{month.text}} 
        </option>
      </select>

      <select 
        v-model="year" 
        class="select-date" 
        name="year"
        :class="{'text-danger': hasErrorYear}"
        @change="changeOptionYear($event)"
      >
        <option disabled value=""> Год </option>
        <option 
          v-for="(year) in years" 
          :value="year.value" 
          :key="year.index"
        > 
        {{year.text}} 
        </option>
      </select>

      <router-link to="/question4">
          <input 
            type="submit" 
            value="Далее"
            @click="addDate"
          />
          <input 
            type="hidden"
            v-model="age"
          />
          <p></p>
      </router-link>
    </div>
</template>

<script>
//import Button from '../Button/Button.vue'

  const arrayRangeDay = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]
  let objDay = []
  arrayRangeDay.forEach(r => objDay.push({text: r, value: r}))

  const arrayRangeMonth = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']
  let objMonth = []
  arrayRangeMonth.forEach((r, i) => objMonth.push({text: r, value: i + 1}))


  const currentYear = (new Date("2003-01-01")).getFullYear();
  const range = (start, stop, step) => Array.from({ length: (stop - start) / step + 1}, (_, i) => start + (i * step));
  const arrayRange = range(currentYear, currentYear - 70, -1)

  let objYear = []
  arrayRange.forEach(r => objYear.push({text: r, value: r}))

  export default {
  //components: { Button },
    name: 'MySelect',
    props: ["data"],
    data() {
      return {
        years: objYear,
        days: objDay,
        months: objMonth,
        type: "submit",
        day: '',
        month: '',
        year: '',
        hasErrorDay: false,
        hasErrorMonth: false,
        hasErrorYear: false,
        isLoading: false,
        age: null
      }
    },
    methods: {
      changeOptionDay: function(e) {
        this.day = e.target.value
      },

      changeOptionMonth: function(e) {
        this.month = e.target.value
      },
      
      changeOptionYear: function(e) {
        this.year = e.target.value
      },

      addDate: function (e) {

        let arrayDate = ['0' + this.day, '0' + this.month, this.year].join('.')
        const pattern = /(\d{2})\.(\d{2})\.(\d{4})/;
        let dt = new Date(arrayDate.replace(pattern,'$3-$2-$1'));
        let age = new Date() - dt
        let ageNum = Math.floor(age / 31557600000)
        this.age = ageNum

        if (this.day && this.month && this.year) {
        return true
        }

        if (!this.day) {
          this.hasErrorDay = true
        }

        if (!this.month) {
          this.hasErrorMonth = true
        }

        if (!this.year) {
        this.hasErrorYear = true
        }
        e.preventDefault();
      }
  },
  // mounted() {
  //   if (localStorage.age) {
  //     this.age = localStorage.age
  //   }
  // },
  watch: {
    age(newAge) {
      localStorage.age = newAge
    }
  }
}
</script>

<style lang="scss" scoped>
   @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap');
   $font-family: 'Roboto', sans-serif;
   $color: #fff;

  .form-date {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .select-date {
    margin-bottom: 3rem;
    width: 182px;
    height: 40px;
    border-radius: 50px;
    border: none;
    text-align-last: center;
    outline: none;
    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
    background: url('../../../assets/select.svg') no-repeat 92% 50%, linear-gradient(90deg, rgba(228, 228, 228, 0.9) -6.2%, rgba(203, 203, 203, 0.9) 100%);
    font-family: $font-family;
    color: #202024;
    font-size: 14px;
    line-height: 16px;
    -webkit-appearance: none;
    -moz-appearance: none;
  }

  .text-danger {
     border-radius: 50px;
     border: 1px solid #ee5353;
  }

  .form-date {
    input[type="submit"] {
      background: linear-gradient(90deg, rgba(246, 200, 102, 0.9) -6.2%, rgba(254, 173, 53, 0.9) 100%);
      width: 182px;
      height: 40px;
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
    }
  }
</style>