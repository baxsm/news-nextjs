import Head from "next/head";
import React from "react";
import Footer from "./common/Footer";
import Header from "./common/Header";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Head>
                <title>News</title>
            </Head>
            <Header />
            <main className="min-h-[80vh]">
            {children}
            </main>
            <Footer />
        </>
    )
}