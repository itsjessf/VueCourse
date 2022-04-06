<template>
  <ul>
    <li v-for="goal in goals" :key="goal"> {{goal}}</li>
    <slot :item="goal"></slot>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      goals: ["Finishe the course", "Learn vue"],
    };
  },
};
</script>
