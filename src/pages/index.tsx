import Head from 'next/head'
import Image from 'next/image'
import { Inter, Gilda_Display } from 'next/font/google'
import { EmblaOptionsType } from 'embla-carousel-react';

import styles from '@/styles/Home.module.css'
import Layout from '@/components/Layout';
import EmblaCarousel from '@/components/EmblaCarousel';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const inter = Inter({ subsets: ['latin'] })
const gilda = Gilda_Display({ weight: '400', subsets: ['latin'] });

const emblaOptions: EmblaOptionsType = {
    //slidesToScroll: 'auto',
    align: 'start',
    containScroll: 'trimSnaps',
}

const slides = [
    {
        image: '/Wines/goldenloon.png',
        title: 'The Golden Loon',
        description: 'Seyval Blanc',
        url: 'https://frontfourcellars.orderport.net/product-details/0067/2022-The-Golden-Loon',
    },
    {
        image: '/Wines/limitededition.png',
        title: 'Limited Edition',
        description: 'Rye Barrel Aged',
        url: 'https://frontfourcellars.orderport.net/product-details/0052/2020-Limited-Edition',
    },
    {
        image: '/Wines/nosedive.png',
        title: 'Nosedive',
        description: 'Cabernet Sauvignon',
        url: 'https://frontfourcellars.orderport.net/product-details/0014/2017-Nosedive',
    },
    {
        image: '/Wines/privatereserve.png',
        title: 'Private Reserve',
        description: 'Bourbon Barrel Aged',
        url: 'https://frontfourcellars.orderport.net/product-details/0056/2020-Private-Reserve',
    },
    
    {
        image: '/Wines/SailAwayViognier.png',
        title: 'Sail Away',
        description: 'Viognier',
        url: 'https://frontfourcellars.orderport.net/product-details/0063/2022-Sail-Away',
    },
    {
        image: '/Wines/ThreeBirches.png',
        title: 'Three Birches',
        description: 'Virginia White Wine',
        url: 'https://frontfourcellars.orderport.net/product-details/0069/2022-Three-Birches',
    },
    {
        image: '/Wines/swans.png',
        title: 'Swan\'s Summer Breeze',
        description: 'Swans Summer',
        url: 'https://frontfourcellars.orderport.net/product-details/0065/2022-Swans-Summer-Breeze',
    }
]

type SubSectionProps = {
    image?: string,
    title: string,
    text: string,
    buttonText: string,
    url: string,
}

const SubSection = (props: SubSectionProps) => {
    const { image, title, text, buttonText, url } = props;

    return (
        <div className={styles.subSection}>
            <div>
                <div style={{ width: '100%', aspectRatio: '3/2', position: 'relative' }}>
                    <Link href={url}><Image src={image || '/placeholder.jpg'} alt="image" fill /></Link>
                </div>
                <h3 style={{ fontSize: '38px', lineHeight: '1.2', marginTop: '1rem', marginBottom: '1.5rem', fontWeight: '300' }}>{title}</h3>
                <p style={{ fontSize: '20px', lineHeight: '1.5', minHeight: '80px', letterSpacing: '0.02em', marginTop: '1.5em', overflowWrap: 'break-word' }}>{text}</p>
                <div className={styles.mobileOnly}>
                    <Link href={url}>
                        <button style={{ 
                            backgroundColor: 'transparent', 
                            border: '2px solid black', 
                            padding: '0.667em 1.333em',
                            fontWeight: '400',
                            lineHeight: '1.1',
                            fontSize: '16px',
                            cursor: 'pointer',
                        }}>{buttonText}</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

const AgeVerification = () => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const value = sessionStorage.getItem('age-agree');
    
        if (value !== 'yes' && !show) {
            setShow(true);
        }
    }, []);

    const handleClickYes = () => {
        sessionStorage.setItem('age-agree', 'yes');
        setShow(false);
    }

    const handleClickNo = () => {
        history.back();
    }

    return (
        <div style={{
            background: 'rgba(0,0,0,.7)',
            position: 'fixed',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            zIndex: '1000000',
            display: show ? 'block' : 'none',
        }}>
            <div style={{ 
                position: 'absolute', 
                left: '50%', 
                top: '50%', 
                transform: 'translate(-50%, -50%)',
                background: 'white',
                border: '4px solid black',
                width: '300px',
                padding: '40px',
            }}>
                <div style={{ textAlign: 'center' }}>
                    <Image src='/FFC final circle logo only.png' alt='logo' width='100' height='100' />
                </div>
                <div style={{ fontSize: '22px' }}>Are you of legal drinking age?</div>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '20px' }}>
                    <button style={{ 
                        background: '#5d0000', 
                        color: 'white', 
                        border: '1px solid #5d0000', 
                        width: '100px', 
                        fontSize: '18px', 
                        padding: '5px', 
                        cursor: 'pointer' 
                    }} onClick={handleClickYes}>Yes</button>
                    <button style={{ 
                        background: '#5d0000', 
                        color: 'white', 
                        border: '1px solid #5d0000', 
                        width: '100px', 
                        fontSize: '18px', 
                        padding: '5px', 
                        cursor: 'pointer' 
                    }} onClick={handleClickNo}>No</button>
                </div>
            </div>
        </div>
    );
}

export default function Home() {
    return (
        <>
        <Head>
            <title>Front Four Cellars</title>
            <meta name="description" content="Generated by create next app" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={gilda.className}>
            <AgeVerification />
            <Layout>
                <section className={styles.container}>
                    <div style={{ width: '100%', aspectRatio: '16/9', position: 'relative', marginBottom: '6vh' }}>
                        <Image src='/Home/top pic.png' alt="image" fill />
                    </div>
                    <h1 style={{ 
                        textAlign: 'center', 
                        fontSize: '60px', 
                        margin: '1rem 0 1.5rem 0', 
                        overflowWrap: 'break-word', 
                        lineHeight: '1.2',
                        fontWeight: '300'
                    }}>Welcome to Front Four Cellars</h1>
                    <p style={{ 
                        maxWidth: '1000px',
                        margin: '1.5em auto',
                        lineHeight: '1.5', 
                        letterSpacing: '0.02em', 
                        overflowWrap: 'break-word',
                        textAlign: 'center',
                        fontSize: '22px',
                    }}>
                        Our winery is dedicated to crafting premium wines from locally sourced fruit that bring joy in every sip.  Every glass of 
                        Front Four Cellars wine provides an opportunity to unwind and connect with friends and family. Come rediscover your connections today!
                    </p>
                    <h2 style={{
                        textAlign: 'center', 
                        fontSize: '48px', 
                        margin: '1rem 0 1.5rem 0', 
                        overflowWrap: 'break-word', 
                        lineHeight: '1.2',
                        fontWeight: '300'
                    }}>
                        Cheers to Extraordinary Experiences
                    </h2>
                    <section className={styles.subSectionContainer}>
                        <SubSection 
                            title={'Wine of the Month'} 
                            text={'Enjoy our specially selected monthly wine, hand selected by the owners and winemakers.'} 
                            buttonText={'Get It Today'} 
                            image={'/Home/third sub.png'}
                            url={'https://frontfourcellars.orderport.net/product-details/0075/2022-The-Kanc'}
                        />
                        <SubSection 
                            title={'Dry Mill Collection'} 
                            text={'These fine wines from the heart of Virginia are now a Front Four Cellars favorite.'} 
                            buttonText={'Learn More'} 
                            image={'/Home/Dry Mill Collection.png'}
                            url={'/shop/drymill'}
                        />
                        <SubSection 
                            title={'Special Event Packages'} 
                            text={'Make your day even more memorable with the help of Front Four Cellars.'} 
                            buttonText={'Find Out How!'} 
                            image={'/Home/first sub.png'}
                            url={'/events/packages'}
                        />
                    </section>
                    <section className={styles.subSectionButtons}>
                        <div style={{ width: '33%' }}>
                            <Link href={'https://frontfourcellars.orderport.net/product-details/0075/2022-The-Kanc'}>
                                <button style={{ 
                                    backgroundColor: 'transparent', 
                                    border: '2px solid black', 
                                    padding: '0.667em 1.333em',
                                    fontWeight: '400',
                                    lineHeight: '1.1',
                                    fontSize: '16px',
                                    cursor: 'pointer',
                                }}>{'Get It Today'}</button>
                            </Link>
                        </div>
                        <div style={{ width: '33%' }}>
                            <Link href={'/shop/drymill'}>
                                <button style={{ 
                                    backgroundColor: 'transparent', 
                                    border: '2px solid black', 
                                    padding: '0.667em 1.333em',
                                    fontWeight: '400',
                                    lineHeight: '1.1',
                                    fontSize: '16px',
                                    cursor: 'pointer',
                                }}>{'Learn More'}</button>
                            </Link>
                        </div>
                        <div style={{ width: '33%' }}>
                            <Link href={'/events/packages'}>
                                <button style={{ 
                                    backgroundColor: 'transparent', 
                                    border: '2px solid black', 
                                    padding: '0.667em 1.333em',
                                    fontWeight: '400',
                                    lineHeight: '1.1',
                                    fontSize: '16px',
                                    cursor: 'pointer',
                                }}>{'Find Out How!'}</button>
                            </Link>
                        </div>
                    </section>
                    <section className={styles.mainSectionContainer}>
                        <div className={styles.tealBackground}></div>
                        <div className={styles.imageContainer} style={{ justifyContent: 'left' }}>
                            <Image src="/About/Wolfeboro tasting room.png" alt="image" width="650" height="550" />
                            <Image src="/About/Wolfeboro tasting room.png" alt="image" fill />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', flex: '1', position: 'relative', textAlign: 'center', justifyContent: 'center', color: 'white' }}>
                            <div>
                                <h2 style={{ fontSize: '48px', lineHeight: '1.2', marginTop: '1rem', marginBottom: '1.5rem', fontWeight: '300' }}>Experience New Hampshire</h2>
                                <p style={{ fontSize: '20px', lineHeight: '1.5', letterSpacing: '0.02em', marginTop: '1.5em', overflowWrap: 'break-word' }}>
                                Sample and savor our varietals by trying a tasting, flight or simply enjoy a glass or even a wine slushie while realxing and connecting with 
                                friends in our new tasting room.  Indoor and limited outdoor seating is available.
                                </p>
                            </div>
                            <div>
                                <Link href={'/newhampshire'}>
                                    <button style={{ 
                                        backgroundColor: 'transparent', 
                                        border: '2px solid white', 
                                        padding: '0.667em 1.333em',
                                        fontWeight: '400',
                                        lineHeight: '1.1',
                                        fontSize: '16px',
                                        color: 'white',
                                        cursor: 'pointer',
                                    }}>Visit Us</button>
                                </Link>
                            </div>
                        </div>
                    </section>
                    <section className={styles.mainSectionContainer}>
                        <div style={{ display: 'flex', flexDirection: 'column', flex: '1', position: 'relative', textAlign: 'center', justifyContent: 'center' }}>
                            <div>
                                <h2 style={{ fontSize: '48px', lineHeight: '1.2', marginTop: '1rem', marginBottom: '1.5rem', fontWeight: '300' }}>Experience Front Four Cellars</h2>
                                <p style={{ fontSize: '20px', lineHeight: '1.5', letterSpacing: '0.02em', marginTop: '1.5em', overflowWrap: 'break-word' }}>
                                Relax on your patio or chill out with friends with a selection of Front Four Cellars Wines and tastings to suit any wine lover. With a large selection of red, 
                                white, and fruit wines, you are sure to find one that pleases your palate. 
                                </p>
                            </div>
                        </div>
                        <div className={styles.imageContainer}>
                            <Link href='https://frontfourcellars.orderport.net/wines/All-Wines'>
                                    <Image src="/Home/section header 2.png" alt="image" width="600" height="550" />
                                    <Image src="/Home/section header 2.png" alt="image" fill />
                            </Link>
                        </div>
                    </section>
                    <section style={{ position: 'relative' }}>
                        <h2 style={{ fontSize: '48px', lineHeight: '1.2', marginTop: '1rem', marginBottom: '1.5rem', fontWeight: '300', textAlign: 'center' }}>Explore Our Best-Selling Wines</h2>
                        <EmblaCarousel slides={slides} options={emblaOptions} />
                    </section>
                    <section className={styles.mainSectionContainer}>
                        <div className={styles.goldBackground}></div>
                        <div style={{ display: 'flex', flexDirection: 'column', flex: '1', position: 'relative', textAlign: 'center', justifyContent: 'center' }}>
                            <div>
                                <h2 style={{ fontSize: '48px', lineHeight: '1.2', marginTop: '1rem', marginBottom: '1.5rem', fontWeight: '300' }}>Taking a Chance</h2>
                                <p style={{ fontSize: '20px', lineHeight: '1.5', letterSpacing: '0.02em', marginTop: '1.5em', overflowWrap: 'break-word' }}>
                                    Julia and Michael have always had a sense of adventure and a love for wine.  Their winery started in their garage as a hobby, and by working 
                                    together, they have developed it into something beyond their wildest expectations.
                                </p>
                            </div>
                            <div>
                                <Link href='/about/story'>
                                    <button style={{ 
                                        backgroundColor: 'transparent', 
                                        border: '2px solid black', 
                                        padding: '0.667em 1.333em',
                                        fontWeight: '400',
                                        lineHeight: '1.1',
                                        fontSize: '16px',
                                        cursor: 'pointer',
                                    }}>Check Out Our Story</button>
                                </Link>
                            </div>
                        </div>
                        <div className={styles.imageContainer}>
                            <Image src="/Home/bottles-text.png" alt="image" width="750" height="550" />
                            <Image src="/Home/bottles-text.png" alt="image" fill />
                        </div>
                    </section>
                    <blockquote style={{ textAlign: 'center', padding: '40px 8.5%', margin: 0 }}>
                        <div style={{ fontSize: '68px', fontWeight: 'bold', height: '40px' }}>&ldquo;</div>
                        <p style={{ fontSize: '32px' }}>
                        Age and glasses of wine should never be counted.
                        </p>
                        <cite style={{ fontSize: '22px' }}>
                            Italian proverb
                        </cite>
                    </blockquote>
                </section>
                <section className={styles.mainSectionContainer}>
                    <div className={styles.redBackground}></div>
                    <div className={styles.imageContainer}>
                        <Image src="/Home/wineclub.png" alt="image" width="650" height="550" />
                        <Image src="/Home/wineclub.png" alt="image" fill />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', flex: '1', position: 'relative', textAlign: 'center', justifyContent: 'center', color: 'white' }}>
                        <div>
                            <h2 style={{ fontSize: '48px', lineHeight: '1.2', marginTop: '1rem', marginBottom: '1.5rem', fontWeight: '300' }}>Join The Club</h2>
                            <p style={{ fontSize: '20px', lineHeight: '1.5', letterSpacing: '0.02em', marginTop: '1.5em', overflowWrap: 'break-word' }}>
                                There are so many reasons to join the Diamond Wine Club, from exclusive access to limited-release wines, discounts on our wines and products, 
                                and invitations to members-only events. Choose your level today! 
                            </p>
                        </div>
                        <div>
                            <Link href={'https://frontfourcellars.orderport.net/wine-club/'}>
                                <button style={{ 
                                    backgroundColor: 'transparent', 
                                    border: '2px solid white', 
                                    padding: '0.667em 1.333em',
                                    fontWeight: '400',
                                    lineHeight: '1.1',
                                    fontSize: '16px',
                                    color: 'white',
                                    cursor: 'pointer',
                                }}>Join the Club</button>
                            </Link>
                        </div>
                    </div>
                </section>
            </Layout>
        </main>
        </>
    )
}
