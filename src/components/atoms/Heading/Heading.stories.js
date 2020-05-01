import React from "react";
import {storiesOf} from "@storybook/react";
import Heading from "./Heading";

const text = "Title text";

storiesOf("Atoms|Heading", module)
  .add("default", () => <Heading>{text}</Heading>)
  .add("secondary", () => <Heading palette="secondary">{text}</Heading>)
  .add("level 2", () => <Heading level={2}>{text}</Heading>)
  .add("level 3", () => <Heading level={3}>{text}</Heading>);
