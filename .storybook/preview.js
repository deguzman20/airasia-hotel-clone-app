import { addDecorator, addParameters } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import { theme } from "./../src/theme/theme";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: (a, b) =>
      a[1].kind === b[1].kind
        ? 0
        : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
  },
};

addDecorator((story) => <ThemeProvider theme={theme}>{story()}</ThemeProvider>);

addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
});
