<!-- Button.vue -->
<template>
  <div>
    <button :style="{ color: textColor, backgroundColor: bgColor }" @click="toggleButton">
      {{ buttonText }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, defineProps } from "vue";

const props = defineProps(["text", "color"]);

const buttonClicked = ref(false);

const toggleButton = () => {
  buttonClicked.value = !buttonClicked.value;
};

const buttonText = computed(() => {
  return buttonClicked.value ? "Button Clicked!" : props.text || "Click Me";
});

const textColor = computed(() => props.color || "black");
const bgColor = computed(() => (buttonClicked.value ? "lightgreen" : "lightblue"));
</script>

<style scoped>
/* Add scoped styles here if needed */
</style>
