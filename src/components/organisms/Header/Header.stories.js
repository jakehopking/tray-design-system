import React from "react";
import {withKnobs, object} from "@storybook/addon-knobs/react";
import {action} from "@storybook/addon-actions";

import Header from "./Header";

export default {
  component: Header,
  title: "Organisms|Header",
  decorators: [withKnobs],
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};

export const headerData = {
  auth: {
    id: "headerId",
    title: "Authentications",
    button: {
      id: "buttonId",
      title: "New authentication",
      onButtonClick: action("onButtonClick"),
    },
  },
  dashboard: {
    id: "headerId",
    title: "Dashboard",
    button: {
      id: "buttonId",
      title: "New workflow",
      onButtonClick: action("onButtonClick"),
    },
  },
};

// export const Default = () => <Header header={object("header", {...headerData})} />;

export const Dashboard = () => (
  <Header header={object("header", {...headerData.dashboard})} />
);

export const Authentication = () => (
  <Header header={object("header", {...headerData.auth})} />
);
