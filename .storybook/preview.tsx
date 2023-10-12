import "@css/globals.scss";
import { Preview } from "@storybook/react";
// import { yourFont } from "@css/font";

const preview: Preview = {
    parameters: {
        layout: "fullscreen",
        actions: { argTypesRegex: "^on[A-Z].*" },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
    },
    decorators: [
        Story => (
            // <div className={yourFont.className}>
            <Story />
            // </div>
        ),
    ],
};

export default preview;
