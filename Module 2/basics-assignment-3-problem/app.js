const app = Vue.createApp({
  data() {
    return {
      result: 0,
    };
  },
  computed: {
    is37() {
      return this.result <= 37
        ? "Not there yet"
        : "Too much!";
    },
  },
  watch: {
       result() {
            setTimeout(() => {
                 this.result = 0;
            }, 5000)
       }
  },
  methods: {
    addFive() {
      this.result = this.result + 5;
    },
    addOne() {
      this.result++;
    },
  },
});
app.mount("#assignment");
