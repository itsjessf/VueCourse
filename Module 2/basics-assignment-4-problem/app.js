const app = Vue.createApp({
  methods: {
    toggle() {
      this.paragraphIsVisible = !this.paragraphIsVisible;
    },
    changeColor() {
         this.inputBackgroundColor = event.target.value;
    },
  },
  computed: {
    paragraphClasses() {
      return {
        user1: this.inputClass === "user1",
        user2: this.inputClass === "user2",
        visible: this.paragraphIsVisible,
        hidden: !this.paragraphIsVisible
      };
    },
  },
  data() {
    return {
      inputClass: "",
      paragraphIsVisible: true,
      inputBackgroundColor: ''
    };
  },
});
app.mount("#assignment");
