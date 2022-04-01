const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirmedName: '',
    };
  },
  computed: {
    //this is used like properties not like functions in a way.
    // we should call them like we would call properties
    // Vue checks if there is a property called full name, if it doesnt, it searches for computed
    fullName(){
      if (this.name === ''){
        return '';
      }
      return this.name + ' ' + 'Ferreira'; 
    }
  },
  methods: {
    outputFullName() {
      if (this.name === ''){
        return '';
      }
      return this.name + ' ' + 'Ferreira'; 
    },
    resetInput() {
      this.name = "";
    },
    submitForm() {
      alert("Submitted!");
    },
    add(num) {
      this.counter = this.counter + num;
    },
    subtract(num) {
      this.counter = this.counter - num;
    },
    setName(event, lastName) {
      this.name = event.target.value + " " + lastName;
    },
  },
});

app.mount("#events");
