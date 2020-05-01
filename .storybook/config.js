import React from "react";
import {addDecorator} from "@storybook/react";
import {ThemeProvider} from "styled-components";
import theme from "../src/themes/default";
import "../src/index.css";

addDecorator((story) => <ThemeProvider theme={theme}>{story()}</ThemeProvider>);
