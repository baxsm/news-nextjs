import Head from "next/head";
import React, { useEffect } from "react";
import Footer from "./common/Footer";
import Header from "./common/Header";

export default function Layout({ children, active}) {

    return (
        <>
            <Head>
                <title>News</title>
            </Head>
            <Header active={active}/>
            {children}
            <Footer />
        </>
    )
}