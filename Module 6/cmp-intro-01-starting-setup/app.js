const app = Vue.createApp({});
app.component("friend-contact", {
  template: ` <li>
  <h2>{{friend.name}}</h2>
  <button @click="toggleDetails()">
    {{detailsAreVisible ? 'Hide' : 'Show'}} Details</button>
  <ul v-if="detailsAreVisible">
    <li><strong>Phone:</strong> {{friend.phone}}</li>
    <li><strong>Email:</strong> {{friend.email}}</li>
  </ul>
</li>`,
  data() {
    return {
      detailsAreVisible: false,
      friend: {
        id: "manuel",
        name: "Manuel Lorenz",
        phone: "00939434324",
        email: "thisisanemail@email.com",
      },
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    }
  },
});
app.mount("#app");
