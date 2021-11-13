import * as React from "react";
import { Builder } from "@builder.io/react";

export const Heading1 = (props) => <h1>{props.text}</h1>;

Builder.registerComponent(Heading1, {
    name: "Custom Heading 1",
    inputs: [
        {
            name: "text",
            type: "string",
            defaultValue: "hello world",
        },
    ],
});