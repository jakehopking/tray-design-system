import React from "react";
import {storiesOf} from "@storybook/react";
import Badge from "./Badge";

const text = "Badge";

storiesOf("Atoms|Badge", module)
  .add("default", () => <Badge>{text}</Badge>)
  .add("reverse", () => <Badge reverse>{text}</Badge>)
  .add("secondary", () => <Badge palette="secondary">{text}</Badge>)
  .add("greyscale", () => <Badge palette="greyscale">{text}</Badge>);
