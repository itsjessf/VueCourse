const app = Vue.createApp({
  methods: {
    addGoal() {
      this.goals.push(this.enteredGoalValue);
      this.enteredGoalValue = '';
    },
    removeGoal (index) {
      const newGoals = this.goals.splice(index,1);
      //this.goals = newGoals; 
    }
  },
  computed: {
    
  },
  data() {
    return { 
      enteredGoalValue: "", 
      goals: [] 
    };
  },
});

app.mount("#user-goals");
