import { FC } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import { Gilda_Display } from 'next/font/google';

import Layout from '@/components/Layout';
import styles from '@/styles/pages/events/Packages.module.css';
import Link from 'next/link';

const gilda = Gilda_Display({ weight: '400', subsets: ['latin'] });

const Packages = () => {
    return (
        <>
            <main className={gilda.className}>
            <Layout>
                <section className={gilda.className} style={{ margin: '220px auto', position: 'relative' }}>
                    <h1 style={{ 
                        textAlign: 'center', 
                        fontSize: '48px', 
                        margin: '1rem 0 1.5rem 0', 
                        overflowWrap: 'break-word', 
                        lineHeight: '1.2',
                        fontWeight: '300'
                    }}>Make Your Day Extra Special</h1>
                    
                    <div className={styles.container}>
                        <section className={styles.sectionContainer}>
                            <div className={styles.packageImageContainer} style={{ aspectRatio: '1.3/1', width: 'auto' }}>
                                <Image src={'/Events/wedding.png'} alt={'wedding'} fill />
                            </div>
                            <div className={styles.packageContainer}>
                                <h2>Wedding Package (2 case minimum)</h2>
                                <p>
                                Receive 15% off per case of wine with customized wine label, a framed copy of your customized label, and topped off with a 
                                1 year anniversary bottled shipped to you. Price determined by wine choice(s)
                                </p>
                            </div>
                        </section>
                        
                        <section className={styles.sectionContainer}>
                            <div className={styles.packageImageContainer}>
                                <Image src={'/Events/Wine gift set.png'} alt={'Wine Gift Set'} fill />
                            </div>
                            <div className={styles.packageContainer}>
                                <div>
                                    <h2>
                                        Special Occassions
                                    </h2>
                                    {/*<select style={{ height: '30px', width: '50%', marginTop: '16px' }}>
                                        <option></option>
                                        <option>Wedding</option>
                                        <option>Anniversary</option>
                                        <option>Birthday</option>
                                        <option>Retirement</option>
                                        <option>Other</option>
                                        </select>*/}
                                </div>
                                <p>
                                Our 1 or 2 Bottle Gift Set includes a wine of your choice (excludes specialty wines), personalized celebration note, 
                                and 2 Front Four Cellar Wine Glasses - $45 
                                </p>
                            </div>
                            <div className={styles.packageImageContainer}>
                                <Image src={'/Events/Wine gift set.png'} alt={'Wine Gift Set'} fill />
                            </div>
                        </section>
                        <section className={styles.sectionContainer}>
                            <div className={styles.packageImageContainer} style={{ aspectRatio: '1', width: 'auto' }}>
                                <Image src={'/Events/realtor-package.png'} alt={'Realtor Package'} fill />
                            </div>
                            <div className={styles.packageContainer}>
                                <h2>Realtor &quot;Thank You&quot;</h2>
                                <p>
                                The 1 or 2 Bottle selection includes a wine of your choice (excludes specialty wines) with customized label, 
                                personalized &quot;welcome home&quot; note, and 2 Front Four Cellar Wine Glasses
                                </p>
                            </div>
                        </section>
                        <section id='tasting-room-reservation' className={styles.sectionContainer}>
                            <div className={styles.packageImageContainer} style={{ aspectRatio: '1', width: 'auto' }}>
                                <Image src={'/Events/tasting-room.png'} alt={'Wine Gift Set'} fill />
                            </div>
                            <div className={styles.packageContainer}>
                                <h2>Tasting Room Reservations</h2>
                                <p>
                                The Front Four Cellars Winery staff is ready and available to host your upcoming function at our Wolfeboro, New Hampshire Tasting Room. 
                                We offer an ideal venue for private, invitation-only, and wine club member functions. Contact us today for pricing and availability.
                                </p>
                            </div>
                            <div className={styles.packageImageContainer} style={{ aspectRatio: '1', width: 'auto' }}>
                                <Image src={'/Events/tasting-room.png'} alt={'Wine Gift Set'} fill />
                            </div>
                        </section>
                        <section style={{ textAlign: 'center' }}>
                            <Link href='/events/packageform'>
                                <button style={{ 
                                            backgroundColor: 'transparent', 
                                            border: '2px solid black', 
                                            padding: '0.667em 1.333em',
                                            fontWeight: '400',
                                            lineHeight: '1.1',
                                            fontSize: '16px',
                                            color: 'black',
                                            cursor: 'pointer',
                                            marginBottom: '40px',
                                        }}>Find Out More</button>
                            </Link>
                        </section>
                    </div>
                </section>
            </Layout>
            </main>
        </>
    );
}

export default Packages;
