<!-- Button.vue -->
<template>
  <div>
    <button :style="{ color: textColor, backgroundColor: bgColor }" @click="handleButtonClick">
      {{ buttonText }}
    </button>
  </div>
</template>

<script setup>
import { ref, computed, defineProps } from "vue";

const props = defineProps(["text", "color", "isCancel"]);

const buttonClicked = ref(false);

const handleButtonClick = () => {
  if (!props.isCancel) {
    buttonClicked.value = !buttonClicked.value;
  }
};

const buttonText = computed(() => {
  return buttonClicked.value ? "Button Clicked!" : props.text || (props.isCancel ? "Cancel" : "Confirm");
});

const textColor = computed(() => props.color || "black");
const bgColor = computed(() => (buttonClicked.value ? "lightgreen" : "lightblue"));
</script>

<style scoped>
/* Add scoped styles here if needed */
</style>
