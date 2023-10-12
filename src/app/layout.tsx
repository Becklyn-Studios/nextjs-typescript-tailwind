import React, { PropsWithChildren } from "react";
import "@css/globals.scss";

const RootLayout = ({ children }: PropsWithChildren) => {
    return (
        <html lang="de">
            <head />
            <body className="antialiased">{children}</body>
        </html>
    );
};

export default RootLayout;
