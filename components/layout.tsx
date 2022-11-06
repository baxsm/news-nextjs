import React from "react";
import Footer from "./common/Footer";
import Header from "./common/Header";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}