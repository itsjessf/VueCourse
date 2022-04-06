<template>
  <div>
    <li>
      <h2>{{ name }} {{ isFavorite ? "(Favorite)" : "" }}</h2>
      <button @click="toggleDetails">
        {{ detailsAreVisible ? "Hide" : "Show" }} Details
      </button>
      <button @click="toggleFavorite">Toggle Favorite</button>
      <ul v-if="detailsAreVisible">
        <li><strong>Phone</strong> {{ phoneNumber }}</li>
        <li><strong>Email</strong> {{ emailAddress }}</li>
      </ul>
      <button @click="$emit('delete', id)">Delete</button>
    </li>
  </div>
</template>

<script>
export default {
  props: {
    name: { type: String, required: true },
    id: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    emailAddress: { type: String, required: true },
    isFavorite: { type: Boolean, required: true },
  },
  emits: ["toggle-favorite", "delete"],
  data() {
    return {
      detailsAreVisible: false,
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFavorite() {
      this.$emit("toggle-favorite", this.id);
    },
  },
};
</script>
