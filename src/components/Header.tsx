import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCartShopping, faUser } from '@fortawesome/free-solid-svg-icons';

import { Roboto, Karla } from 'next/font/google';
import styles from '@/styles/components/Header.module.css';
import Head from 'next/head';
import Script from 'next/script';

const roboto = Roboto({ weight: '400', subsets: ['latin'] });
const karla = Karla({ weight: 'variable', subsets: ['latin'] });

type SubItemProps = {
    text: string,
    url: string,
}

type NavItemProps = {
    text: string,
    url: string,
    subItems?: SubItemProps[],
}

const NavItem = (props: NavItemProps) => {
    const { text, url, subItems } = props;

    const [showSubMenu, setShowSubMenu] = useState(false);

    const handleHoverChange = () => {
        if (!subItems?.length) {
            return;
        }

        setShowSubMenu(!showSubMenu);
    }

    return (
        <li style={{ position: 'relative' }} onMouseEnter={handleHoverChange} onMouseLeave={handleHoverChange}>
            <Link href={url}>{text}</Link>
            {/* subItems?.length && (<button>
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="7" viewBox="0 0 12 7">
                    <path 
                        fill-rule="evenodd" 
                        stroke="currentColor" 
                        stroke-linecap="round" 
                        stroke-linejoin="round" 
                        stroke-width="1.5" 
                        d="M1.385 1.417L6 5.583m4.615-4.166L6 5.583">
                    </path>
                </svg>
            </button>)*/}

            { subItems?.length && showSubMenu && (
                <ul style={{ 
                    position: 'absolute', 
                    top: '40px', 
                    left: '0', 
                    width: '220px', 
                    display: 'flex', 
                    flexDirection: 'column', 
                    textAlign: 'left',
                    zIndex: '999999',
                    backgroundColor: 'white',
                    border: '1px solid #ccc', 
                }}>
                    {subItems.map((item) => {
                        return (
                            <li style={{ width: '100%' }} key={item.text}>
                                <Link href={item.url} style={{ padding: '12px 30px', fontSize: '16px', cursor: 'pointer' }}>{item.text}</Link>
                            </li>
                        );
                    })}
                </ul>
            )}
        </li>
    );
}

const Header = () => {
    const [showMobileNav, setShowMobileNav] = useState(false);

    const shopSubItems: SubItemProps[] = [
        {
            text: 'All Wines',
            url: 'https://frontfourcellars.orderport.net/wines/All-Wines',
        },
        {
            text: 'Reds',
            url: 'https://frontfourcellars.orderport.net/wines/All-Wines/Red-Wine',
        },
        {
            text: 'Roses',
            url: 'https://frontfourcellars.orderport.net/wines/All-Wines/Rose-Wine',
        },
        {
            text: 'Whites',
            url: 'https://frontfourcellars.orderport.net/wines/All-Wines/White-Wine',
        },
        {
            text: 'Merchandise',
            url: 'https://frontfourcellars.orderport.net/wines/Merchandise',
        },
        /*{
            text: 'Dry Mill Collection',
            url: 'https://shop.frontfourcellars.com/Wines/Dry-Mill-Collection',
        },
        {
            text: 'Front Four Selections',
            url: 'https://shop.frontfourcellars.com/Shop/Front-Four-Selections',
        }*/
        /*{
            text: 'Fruits',
            url: '#',
        },
        {
            text: 'Julia\'s Kitchen',
            url: '#',
        },
        {
            text: 'Wedding Packages',
            url: '#',
        },
        {
            text: 'Merchandise',
            url: '#',
        },
        {
            text: 'Gift Sets',
            url: '#',
        },*/
    ];

    const eventsSubItems: SubItemProps[] = [
        {
            text: 'Packages',
            url: '/events/packages',
        },
        /*{
            text: 'Event Calendar',
            url: 'https://shop.frontfourcellars.com/Special-Events/Event-Calendar'
        }*/
    ];

    const aboutUsSubItems: SubItemProps[] = [
        {
            text: 'Our Story',
            url: '/about/story',
        },
        {
            text: 'Our Team',
            url: '/about/team',
        },
        {
            text: 'Our Philosophy',
            url: '/about/philosophy',
        },
        {
            text: 'Contact Us',
            url: '/about/contactus',
        },
    ];

    const handleMobileToggleClicked = () => {
        setShowMobileNav(!showMobileNav);
    }

    useEffect(() => {
        /*const script = document.createElement('script');
        script.id = 'init-wd';
        script.innerHTML = `
            vin65remote.cart.init('https://shop.frontfourcellars.com/',0);
            vin65remote.usertools.loginWidget('https://shop.frontfourcellars.com/');
        `;
        script.async = true;

        document.body.appendChild(script);

        replaceCartInfo();

        return () => {
            document.body.removeChild(script);
        }*/
    });

    const [itemCount, setItemCount] = useState<string>('0');
    const [cost, setCost] = useState<string>('$0.00');

    const replaceCartInfo = () => {
        setTimeout(() => {
            const itemCount = document.getElementsByClassName('v65-widgetModalCart-itemCount')?.[0]?.innerHTML;
            const cost = document.getElementsByClassName('v65-widgetModalCart-subTotal')?.[0]?.innerHTML;

            setItemCount(itemCount || '0');
            setCost(cost || '$0.00');
        }, 1000)
    }

    /*
    <div className={styles.headerLogin}>
        <span className={karla.className} style={{ display: 'flex' }}>
            <FontAwesomeIcon icon={faUser} style={{ height: '10px', cursor: 'pointer', marginTop: '3px', marginRight: '5px', color: '#5d0000' }} />
            <div v65remotejs="loginWidget"></div>
        </span>
    </div>
    */

    return (
        <>
        <header className={styles.headerContainer}>
            <div className={styles.headerTagline}>
                An Urban Craft Winery Where People Connect
            </div>
            <section>
                <Link href="/">
                    <Image src="/FFC final circle logo only.png" alt="image" height="100" width="100" />
                </Link>
            </section>
            <section className={styles.navContainer}>
                <nav className={karla.className}>
                    <ul>
                        <NavItem text="Home" url="/" />
                        <NavItem text="Shop" url="https://frontfourcellars.orderport.net/wines/All-Wines" subItems={shopSubItems} />
                        <NavItem text="Wine Club" url="https://frontfourcellars.orderport.net/wine-club/" />
                        <NavItem text="Special Events" url="/events/packages" subItems={eventsSubItems} />
                        <NavItem text="About Us" url="" subItems={aboutUsSubItems} />
                    </ul>
                </nav>
            </section>
            <section className={styles.navMobileContainer}>
                <FontAwesomeIcon icon={faBars} style={{ height: '25px', cursor: 'pointer' }} onClick={handleMobileToggleClicked} />
            </section>
            {showMobileNav && (
            <section className={styles.mobileNav}>
                <ul>
                    <li>
                        <Link href={'/'}>Home</Link>
                    </li>
                    <li>
                        <Link href={'https://frontfourcellars.orderport.net/wines/All-Wines'}>Shop</Link>
                    </li>
                    <li>
                        <ul>
                            <li>
                                <Link href={'https://frontfourcellars.orderport.net/wines/All-Wines'}>All Wines</Link>
                            </li>
                            <li>
                                <Link href={'https://frontfourcellars.orderport.net/wines/All-Wines/Red-Wine'}>Reds</Link>
                            </li>
                            <li>
                                <Link href={'https://frontfourcellars.orderport.net/wines/All-Wines/Rose-Wine'}>Roses</Link>
                            </li>
                            <li>
                                <Link href={'https://frontfourcellars.orderport.net/wines/All-Wines/White-Wine'}>Whites</Link>
                            </li>
                            {/*<li>
                                <Link href={'https://shop.frontfourcellars.com/Wines/Dry-Mill-Collection'}>Dry Mill Collection</Link>
                            </li>
                            <li>
                                <Link href={'https://shop.frontfourcellars.com/Shop/Front-Four-Selections'}>Front Four Selections</Link>
                            </li>*/}
                        </ul>
                    </li>
                    <li>
                        <Link href={'https://frontfourcellars.orderport.net/wine-club/'}>Wine Club</Link>
                    </li>
                    <li>
                        <Link href={'/events/packages'}>Special Events</Link>
                    </li>
                    <li>
                        <ul>
                            <li>
                                <Link href={'/events/packages'}>Packages</Link>
                            </li>
                            {/*<li>
                                <Link href={'https://shop.frontfourcellars.com/Special-Events/Event-Calendar'}>Event Calendar</Link>
                        </li>*/}
                        </ul>
                    </li>
                    <li>About Us</li>
                    <li>
                        <ul>
                            <li>
                                <Link href={'/about/story'}>Our Story</Link>
                            </li>
                            <li>
                                <Link href={'/about/team'}>Our Team</Link>
                            </li>
                            <li>
                                <Link href={'/about/philosophy'}>Our Philosophy</Link>
                            </li>
                            <li>
                                <Link href={'/about/contactus'}>Contact Us</Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </section>
            )}
            {/*<section className={styles.otherContainer}>
                <div style={{ display: 'flex', gap: '5px' }}>
                    {/*<div style={{ position: 'relative', height: '20px', padding: '1px' }}>
                        <input style={{ height: '100%', padding: '5px 15px 5px 5px' }} />
                        <FontAwesomeIcon icon={faMagnifyingGlass} style={{ height: '17px', position: 'absolute', right: '8px', top: '8px' }} />
                        </div>*/}
                    {/*<div>
                        <button style={{ height: '35px', width: '150px', backgroundColor: '#5d0000', border: 0, color: 'white' }}>MY ACCOUNT</button>
                    </div>}
                    <div>
                        <a id="cart-selection-link" href='javascript:vin65remote.cart.toggleCart();'>
                            <FontAwesomeIcon icon={faCartShopping} style={{ height: '12px', marginTop: '10px', color: '#5d0000', marginRight: '5px' }} />
                            <span id="itemCount">({itemCount})</span> | <span id="cost">{cost}</span>
                        </a>
                        
                        {/* @ts-ignore  }
                        <div v65remotejs="modalCart" style={{ display: 'none' }}></div>
                    </div>
                </div>
                    </section>*/}
            <section style={{ width: '100%' }}>
            </section>
        </header>
        </>
    );
}

export default Header;