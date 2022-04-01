const app = Vue.createApp({
     data() {
          return {
               courseGoalA: 'Finish the course and Learn Vue!',
               courseGoalB: 'Bing chilling and do NOTHING',
               vueLink: 'https://vuejs.org/'
          }
     },
     methods: {
          outputGoal() {
               const randomNumber = Math.random();
               if (randomNumber < 0.5) {
                    return this.courseGoalA;
               }
               return this.courseGoalB;
          }
     },
});
app.mount('#user-goal')