import { FC, ReactNode } from 'react';
import Head from 'next/head';

import Header from './Header';
import Footer from './Footer';
import Script from 'next/script';

type Props = {
    children: ReactNode,
}

const Layout: FC<Props> = ({ children }) => {
    return (
        <>
            <Head>
                <title>Front Four Cellars</title>
            </Head>

            <Header />

            {children}

            <Footer />
        </>
    )
}

export default Layout;
