const app = Vue.createApp({
     methods: {
          addtask(){
               this.taskList.push(this.inputValue);
          }
     },
     data() {
          return {
               inputValue: '',
               taskList: []
          }
     },
})
app.mount('#assignment')