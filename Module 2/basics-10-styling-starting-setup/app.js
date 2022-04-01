const app = Vue.createApp({
  computed: {
    boxAClasses() {
      return { active: this.blockA };
    }
  },
  methods: {
    boxSelected(box) {
      switch (box) {
        case "A":
          this.blockA = !this.blockA;
          break;
        case "B":
          this.blockB = !this.blockB;
          break;
        case "C":
          this.blockC = !this.blockC;
          break;
      }
    },
  },
  data() {
    return {
      blockA: false,
      blockB: false,
      blockC: false,
    };
  },
});
app.mount("#styling");
