<template>
     <dialog open>
          <slot></slot>
     </dialog>
</template>

<style scoped>
dialog {
     position: fixed;
     top: 20vh;
     left: 30%;
     width: 30%;
     background-color: white;
     box-shadow: black;
}
</style>