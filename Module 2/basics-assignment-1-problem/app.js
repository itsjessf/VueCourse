const app = Vue.createApp({
     data() {
          return {
               name: 'Jessica Ferreira',
               age: '26',
               futureAge: '31',
               niceImage: 'https://styles.redditmedia.com/t5_1q3tkm/styles/profileIcon_5ujxu3m8zwa61.jpg?width=256&height=256&crop=256:256,smart&s=8fe93e219997dc33182d1b7a0263736a143d34f7',
     
          }
     },
     methods: {
          randomInt () {
               return Math.random();
          }
     },
})
app.mount('#assignment');