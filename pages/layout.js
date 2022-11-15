import Head from "next/head";
import React, { Suspense, useEffect } from "react";
import Loading from "./article/Loading";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";

export default function Layout({ children, active }) {

    return (
        <>
            <Head>
                <title>News</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" />
            </Head>
            <Header active={active} />
            <Suspense fallback={<Loading />}>
                <main className="min-h-[70vh]">
                    {children}
                </main>
            </Suspense>
            <Footer />
        </>
    )
}