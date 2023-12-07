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
    text: "Confirm",
    color: "black",
    isCancel: false,
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
    text: "Button Clicked Tmrw !!!!!",
    color: "red",
    isCancel: false,
  },
};

export const CancelButton = {
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: '<Button v-bind="args" />',
  }),
  args: {
    text: "Cancel",
    color: "gray",
    isCancel: true,
  },
};
