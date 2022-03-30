const app = Vue.createApp({
  data() {
    return {
      output1: "",
      output2: "",
    };
  },
  methods: {
    enterPress() {
      this.output2 = event.target.value;
    },
    keyDownPress() {
      this.output1 = event.target.value;
    },
    itClick() {
      alert(
        "HEY STOP IT RIGHT THERE. You have commited crimes against skyrim and Her people, what say you in your defense?"
      );
    },
  },
});
app.mount("#assignment");
