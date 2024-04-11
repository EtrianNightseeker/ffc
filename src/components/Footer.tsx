import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faYoutube, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Karla, Prata } from 'next/font/google';

import styles from '@/styles/components/Footer.module.css';

const karla = Karla({ weight: 'variable', subsets: ['latin'] });
const prata = Prata({ weight: '400', subsets: ['latin'] });

const Footer = () => {
    return (
        <>
            <section className={styles.container}>
                <div className={karla.className} style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <section className={styles.sectionContainer}>
                        <h3 className={prata.className}>Site Navigation</h3>
                        <hr />
                        <div style={{ fontSize: '15px', lineHeight: '1.5em' }}>
                            <Link href="/">Home</Link>
                            <br/>
                            <Link href="/legal/privacypolicy">Privacy Policy</Link>
                            <br/>
                            <Link href="/legal/termsofuse">Terms Of Use</Link>
                            <br/>
                            <Link href="/legal/returns">Returns & Cancellations</Link>
                        </div>
                    </section>
                    <section className={styles.sectionContainer}>
                        <h3 className={prata.className}>Address & Hours</h3>
                        <hr />
                        <div className={styles.addressesContainer}>
                            <div>
                                <strong>Virginia Corporate Office</strong>
                                <br/>
                                <em>Box 2931</em>
                                <br/>
                                <em>Glen Allen, Virginia 23058</em>
                            </div>
                            <div>
                                <strong>New Hampshire Tasting Room</strong>
                                <br/>
                                <em>13 Railroad Avenue</em>
                                <br/>
                                <em>Wolfeboro, NH 03894</em>
                            </div>
                            <div>
                                <strong>Hours:</strong>
                                <br/>
                                <em>By appointment only</em>
                                <br/>
                                <em>Winery Tasting Room</em>
                                <br/>
                                <em>Coming Fall 2023</em>
                            </div>
                            <div>
                                <strong>Hours:</strong>
                                <br/>
                                <em>Mon-Thurs: 12 - 7p</em>
                                <br/>
                                <em>Fri & Sat: 11a - 8p</em>
                                <br/>
                                <em>Sunday: 1p - 6p</em>
                            </div>
                        </div>
                    </section>
                    <section className={styles.sectionContainer}>
                        <h3 className={prata.className}>Get Connected</h3>
                        <hr />
                        <div style={{ display: 'flex', justifyContent: 'left', gap: '10px' }}>
                            <a target='_blank' href='https://www.facebook.com/profile.php?id=100088721062486' style={{ color: '#066' }}>
                                <div style={{ height: '30px', width: '30px', padding: '5px', textAlign: 'center' }}>
                                    <FontAwesomeIcon icon={faFacebook} style={{ height: '25px', marginTop: '2px' }} />
                                </div>
                            </a>
                            <a target='_blank' href='https://twitter.com/front4cellars' style={{ color: '#066' }}>
                                <div style={{ height: '30px', width: '30px', padding: '5px', textAlign: 'center' }}>
                                    <FontAwesomeIcon icon={faTwitter} style={{ height: '25px', marginTop: '2px' }} />
                                </div>
                            </a>
                            <a target='_blank' href='https://youtube.com/@FrontFourCellars' style={{ color: '#066' }}>
                                <div style={{ height: '30px', width: '30px', padding: '5px', textAlign: 'center' }}>
                                    <FontAwesomeIcon icon={faYoutube} style={{ height: '25px', marginTop: '2px' }} />
                                </div>
                            </a>
                            <a target='_blank' href='https://www.linkedin.com/in/front-four-cellars-973128264/' style={{ color: '#066' }}>
                                <div style={{ height: '30px', width: '30px', padding: '5px', textAlign: 'center' }}>
                                    <FontAwesomeIcon icon={faLinkedin} style={{ height: '25px', marginTop: '2px' }} />
                                </div>
                            </a>
                            <a target='_blank' href='https://www.instagram.com/frontfourcellars/' style={{ color: '#066' }}>
                                <div style={{ height: '30px', width: '30px', padding: '5px', textAlign: 'center' }}>
                                    <FontAwesomeIcon icon={faInstagram} style={{ height: '25px', marginTop: '2px' }} />
                                </div>
                            </a>
                        </div>
                    </section>
                </div>
                <div className={karla.className} style={{ 
                    flex: '100%',
                    width: '100%',
                    marginBottom: '20px', 
                    textAlign: 'right' 
                }}>&copy; 2023 Front Four Cellars, LC All Rights Reserved</div>
            </section>
            {/*<section className={styles.container}>
                <div style={{ width: '40%' }}>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', padding: '10px' }}>
                        <a target='_blank' href='https://www.facebook.com/profile.php?id=100088721062486' style={{ backgroundColor: '#066', padding: '5px', color: '#066' }}>
                            <div style={{ backgroundColor: 'white', height: '30px', width: '30px', padding: '5px', textAlign: 'center' }}>
                                <FontAwesomeIcon icon={faFacebook} style={{ height: '25px', marginTop: '2px' }} />
                            </div>
                        </a>
                        <a target='_blank' href='https://twitter.com/front4cellars' style={{ backgroundColor: '#066', padding: '5px', color: '#066' }}>
                            <div style={{ backgroundColor: 'white', height: '30px', width: '30px', padding: '5px', textAlign: 'center' }}>
                                <FontAwesomeIcon icon={faTwitter} style={{ height: '25px', marginTop: '2px' }} />
                            </div>
                        </a>
                        <a target='_blank' href='' style={{ backgroundColor: '#066', padding: '5px', color: '#066' }}>
                            <div style={{ backgroundColor: 'white', height: '30px', width: '30px', padding: '5px', textAlign: 'center' }}>
                                <FontAwesomeIcon icon={faYoutube} style={{ height: '25px', marginTop: '2px' }} />
                            </div>
                        </a>
                        <a target='_blank' href='https://www.linkedin.com/in/front-four-cellars-973128264/' style={{ backgroundColor: '#066', padding: '5px', color: '#066' }}>
                            <div style={{ backgroundColor: 'white', height: '30px', width: '30px', padding: '5px', textAlign: 'center' }}>
                                <FontAwesomeIcon icon={faLinkedin} style={{ height: '25px', marginTop: '2px' }} />
                            </div>
                        </a>
                        <a target='_blank' href='https://www.instagram.com/frontfourcellars/' style={{ backgroundColor: '#066', padding: '5px', color: '#066' }}>
                            <div style={{ backgroundColor: 'white', height: '30px', width: '30px', padding: '5px', textAlign: 'center' }}>
                                <FontAwesomeIcon icon={faInstagram} style={{ height: '25px', marginTop: '2px' }} />
                            </div>
                        </a>
                    </div>
                    <div style={{ padding: '10px', backgroundColor: '#066', color: 'white' }}>
                        <div style={{ marginBottom: '10px', fontWeight: 'bold' }}>EMAIL NEWSLETTER SIGN-UP</div>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <input style={{ height: '20px', marginTop: '2px', width: '65%' }} placeholder="Your email address" />
                            <button style={{ backgroundColor: '#5d0000', border: 0, color: 'white', height: '30px', minWidth: '125px' }}>ALL ABOARD</button>
                        </div>
                    </div>
                </div>
                <div className={styles.divider}></div>
                <div style={{ width: '20%' }}>
                    <div style={{ fontWeight: 'bold' }}>Site Navigation</div>
                    <div><Link href='/'>Home</Link></div>
                    <div><Link href='/about/story'>Our Story</Link></div>
                    <div><Link href='/about/team'>Our Team</Link></div>
                </div>
                <div className={styles.divider}></div>
                <div className={styles.footerImageContainer}>
                    <Image src="/logo.png" alt="image" className={styles.footerImage} height="100" width="100" />
                    <div>
                        Front Four Cellars, LC
                        <br/>
                        Hanover County, Virginia
                        <br/>
                        <a href="mailto:wine@frontfourcellars.com">wine@frontfourcellars.com</a>
                        <br/>
                        Hours: By appointment only
                    </div>
                </div>
                <div style={{ 
                    width: '100%',
                    marginBottom: '20px', 
                    textAlign: 'right' 
                }}>&copy; 2023 Front Four Cellars&nbsp;&nbsp;&nbsp;&nbsp;Privacy Policy | Terms & Conditions | Shipping & Returns</div>
            </section>*/}
        </>
    )
}

export default Footer;