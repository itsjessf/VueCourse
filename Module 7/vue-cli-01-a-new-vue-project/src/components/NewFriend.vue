<template>
  <section>
    <form>
      <div>
        <label>Name</label>
        <input type="text" v-model="name" />
      </div>
      <div>
        <label>Phone</label>
        <input type="text" v-model="phone" />
      </div>
      <div>
        <label>Email</label>
        <input type="text" v-model="email" />
      </div>
      <button @click="submit">Add New Friend</button>
    </form>
  </section>
</template>

<script>
export default {
  emits: ["add-friend"],
  data() {
    return {
      name: "",
      phone: "",
      email: "",
    };
  },
  methods: {
    submit() {
      this.$emit("add-friend", this.name, this.phone, this.email);
    },
  },
};
</script>
