// Button.stories.js
import Button from "./Button.vue";

const meta = {
  component: Button,
};

export default meta;

export const Default = {
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: '<Button v-bind="args" />',
  }),
  args: {
    text: "Click Me",
    color: "black",
  },
};

export const ButtonClicked = {
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: '<Button v-bind="args" />',
  }),
  args: {
    text: "Button Clicked!",
    color: "red",
  },
};
