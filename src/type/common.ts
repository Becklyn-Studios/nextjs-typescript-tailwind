import { CSSProperties } from "react";

export type PageProps<T> = { params: T };

export type CustomStyleProps = {
    className?: string | undefined;
    style?: CSSProperties | undefined;
};
