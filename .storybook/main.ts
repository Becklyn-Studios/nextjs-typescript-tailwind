import * as path from "path";
import { StorybookConfig } from "@storybook/nextjs";

const config: StorybookConfig = {
    stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
    addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-onboarding",
        "@storybook/addon-interactions",
    ],
    framework: {
        name: "@storybook/nextjs",
        options: {},
    },
    docs: {
        autodocs: "tag",
    },
    staticDirs: [
        "./public",
        {
            from: "../src/css/font",
            to: "src/css/font",
        },
    ],
    webpackFinal: async (config, { configType }) => {
        config.resolve.alias = {
            ...config.resolve.alias,
            "@components": path.resolve(__dirname, "../src/components"),
            "@css": path.resolve(__dirname, "../src/css"),
            "@lib": path.resolve(__dirname, "../src/lib"),
            "@type": path.resolve(__dirname, "../src/type"),
            "@icon": path.resolve(__dirname, "../src/icon"),
        };

        return config;
    },
};
export default config;
