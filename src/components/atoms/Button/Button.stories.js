import React from "react";
import {storiesOf} from "@storybook/react";
import {action} from "@storybook/addon-actions";
import Button from "./Button";

const text = "Button text";

// Action data for type action button
export const actionsData = {
  onButtonClick: action("onButtonClick"),
};

storiesOf("Atoms|Button", module)
  .add("default", () => (
    <Button id="someId" {...actionsData}>
      {text}
    </Button>
  ))
  .add("reverse", () => (
    <Button reverse id="someId" {...actionsData}>
      {text}
    </Button>
  ))
  .add("secondary", () => (
    <Button palette="secondary" id="someId" {...actionsData}>
      {text}
    </Button>
  ))
  .add("danger", () => (
    <Button palette="danger" id="someId" {...actionsData}>
      {text}
    </Button>
  ))
  .add("disabled", () => (
    <Button disabled id="someId" {...actionsData}>
      {text}
    </Button>
  ))
  .add("transparent", () => (
    <Button transparent id="someId" {...actionsData}>
      {text}
    </Button>
  ))
  .add("height", () => (
    <Button height={80} id="someId" {...actionsData}>
      {text}
    </Button>
  ))
  .add("action", () => (
    <Button id="someId" type={"button"} {...actionsData}>
      {text}
    </Button>
  ))
  .add("link", () => (
    <Button id="someId" href="https://tray.io">
      Tray.io
    </Button>
  ));
