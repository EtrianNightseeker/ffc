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

    return (
        <header className={styles.header}>
            <nav>
                <ul>
                   <li><a href="https://frontfourcellars.orderport.net/wines/All-Wines">Shop</a></li>
                   <li className="dropdown"><Link href="https://frontfourcellars.orderport.net/wine-club/">Wine Club</Link></li>
                   <li>
                        <Link href="/">
                            <Image src="/frontfourcellars-logo.jpg" alt="image" height="214" width="300" />
                        </Link>
                   </li> 
                   <li className="dropdown"><Link href="/events/packages">Special Events</Link></li>
                   <li className="dropdown"><Link href="#">About Us</Link></li>
                </ul>
            </nav>
            <FontAwesomeIcon icon={faBars} style={{ height: '25px', cursor: 'pointer' }} onClick={handleMobileToggleClicked} />
        </header>
    );
}

export default Header;
