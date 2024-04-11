// @ts-ignore

import { FC } from 'react';
import Image from 'next/image';
import Script from 'next/script';
import Head from 'next/head';
import { Gilda_Display } from 'next/font/google';

import Layout from '@/components/Layout';
import styles from '@/styles/pages/shop/Wines.module.css';

const gilda = Gilda_Display({ weight: '400', subsets: ['latin'] });

type WineBlockProps = {
    name: string,
    description: string,
    productsku: string,
    image: string,
}

const WineBlock: FC<WineBlockProps> = (props) => {
    const { name, description, productsku, image } = props;

    return (
        <div className={styles.widget}>
            <div style={{ aspectRatio: '1/4', position: 'relative', width: '25%', margin: 'auto' }}>
                <Image src={image} alt={name} fill />
            </div>
            <div style={{ fontSize: '28px', fontWeight: '300', margin: '10px 0' }}>{name}</div>
            <div style={{ fontSize: '20px', fontWeight: '300', margin: '10px 0' }}>{description}</div>
            <div dangerouslySetInnerHTML={{ __html: `<div v65remotejs="addToCartForm" productsku="${productsku}"></div>` }}></div>
        </div>
    );
}

const Wines = () => {
    return (
        <>
            <Head>
                <script id="init-wd" dangerouslySetInnerHTML={{ __html: `vin65remote.cart.init('https://frontfourcellars.uswest2.vin65dev.com/',0);` }}></script>
                <script id="init-wd-cart" dangerouslySetInnerHTML={{ __html: `vin65remote.product.addToCartForm('https://frontfourcellars.uswest2.vin65dev.com/');` }}></script>
            </Head>
            <Layout>
                <section className={gilda.className} style={{ width: '90%', margin: '0 auto', position: 'relative' }}>
                    <h1 style={{ 
                        textAlign: 'center', 
                        fontSize: '60px', 
                        margin: '1rem 0 1.5rem 0', 
                        overflowWrap: 'break-word', 
                        lineHeight: '1.2',
                        fontWeight: '300'
                    }}>All Wine</h1>
                    
                    <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', margin: '3em 0' }}>
                        <WineBlock name={'Limited Edition'} description={'Wine description here.'} image={'/Wines/limitededition.png'} productsku={'20LEC01FFC1'} />
                        <WineBlock name={'Nosedive'} description={'Wine description here.'} image={'/Wines/nosedive.png'} productsku={'20ND01FFC1'} />
                        <WineBlock name={'Private Reserve'} description={'Wine description here.'} image={'/Wines/privatereserve.png'} productsku={'20PRC01FFC1'} />
                        <WineBlock name={'Sail Away Viognier'} description={'Wine description here.'} image={'/Wines/SailAwayViognier.png'} productsku={'22SAV01FFC1'} />
                        <WineBlock name={'Three Birches'} description={'Wine description here.'} image={'/Wines/ThreeBirches.png'} productsku={'22TB01DUC1'} />
                        <WineBlock name={'The Golden Loon'} description={'Wine description here.'} image={'/Wines/goldenloon.png'} productsku={'22GLSV01FFC1'} />
                    </div>
                </section>
            </Layout>
        </>
    );
}

export default Wines;