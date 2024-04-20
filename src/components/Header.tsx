import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faX} from '@fortawesome/free-solid-svg-icons';

import { Roboto, Karla } from 'next/font/google';
import styles from '@/styles/components/Header.module.css';

const roboto = Roboto({ weight: '400', subsets: ['latin'] });
const karla = Karla({ weight: 'variable', subsets: ['latin'] });

const Header = () => {

    useEffect(() => {
        document.querySelector("header nav ~ nav ~ svg")?.addEventListener("click",() => {
            document.querySelector("header nav:nth-of-type(2)")?.classList.add("active");
        })
        document.querySelector("header nav ~ nav svg")?.addEventListener("click",() => {
            document.querySelector("header nav:nth-of-type(2)")?.classList.remove("active");
        })
    },[]);

    return (
        <header className={styles.header}>
            <nav>
                <ul>
                   <li>
                        <Link href="https://frontfourcellars.orderport.net/wines/All-Wines">Shop</Link>
                        <ul>
                            <li><Link href="https://frontfourcellars.orderport.net/wines/All-Wines">All Wines</Link></li>
                            <li><Link href="https://frontfourcellars.orderport.net/wines/All-Wines/Red-Wine">Reds</Link></li>
                            <li><Link href="https://frontfourcellars.orderport.net/wines/All-Wines/Rose-Wine">Roses</Link></li>
                            <li><Link href="https://frontfourcellars.orderport.net/wines/All-Wines/White-Wine">Whites</Link></li>
                            <li><Link href="https://frontfourcellars.orderport.net/wines/wines/Merchandise">Merchandise</Link></li>
                        </ul>
                    </li>
                   <li>
                        <Link href="https://frontfourcellars.orderport.net/wine-club/">Wine Club</Link>
                    </li>
                   <li>
                        <Link href="/">
                            <Image src="/frontfourcellars-logo.jpg" alt="image" height="214" width="300" />
                        </Link>
                   </li> 
                   <li className="dropdown">
                        <Link href="/events/packages">Special Events</Link>
                        <ul className="dropdown-menu">
                            <li><Link href="/events/packages">Packages</Link></li>
                        </ul>
                    </li>
                   <li className="dropdown">
                        <Link href="#">About Us</Link>
                        <ul className="dropdown-menu">
                            <li><Link href="/about/story">Our Story</Link></li>
                            <li><Link href="/about/team">Our Team</Link></li>
                            <li><Link href="/about/philosophy">Our Philosophy</Link></li>
                            <li><Link href="/about/contactus">Contact Us</Link></li>
                        </ul>
                    </li>
                </ul>
            </nav>

            <Link href="/">
                <Image src="/frontfourcellars-logo.jpg" alt="image" height="214" width="300" />
            </Link>

            <nav>
                <ul>
                   <li>
                        <Link href="https://frontfourcellars.orderport.net/wines/All-Wines">Shop</Link>
                        <ul>
                            <li><Link href="https://frontfourcellars.orderport.net/wines/All-Wines">All Wines</Link></li>
                            <li><Link href="https://frontfourcellars.orderport.net/wines/All-Wines/Red-Wine">Reds</Link></li>
                            <li><Link href="https://frontfourcellars.orderport.net/wines/All-Wines/Rose-Wine">Roses</Link></li>
                            <li><Link href="https://frontfourcellars.orderport.net/wines/All-Wines/White-Wine">Whites</Link></li>
                            <li><Link href="https://frontfourcellars.orderport.net/wines/wines/Merchandise">Merchandise</Link></li>
                        </ul>
                    </li>
                   <li>
                        <Link href="https://frontfourcellars.orderport.net/wine-club/">Wine Club</Link>
                    </li>
                   <li>
                        <Link href="/events/packages">Special Events</Link>
                        <ul className="dropdown-menu">
                            <li><Link href="/events/packages">Packages</Link></li>
                        </ul>
                    </li>
                   <li>
                        <Link href="#">About Us</Link>
                        <ul>
                            <li><Link href="/about/story">Our Story</Link></li>
                            <li><Link href="/about/team">Our Team</Link></li>
                            <li><Link href="/about/philosophy">Our Philosophy</Link></li>
                            <li><Link href="/about/contactus">Contact Us</Link></li>
                        </ul>
                    </li>
                </ul>
                <FontAwesomeIcon icon={faX} style={{ height: '25px', cursor: 'pointer', color:'white'  }} />
            </nav>
            <FontAwesomeIcon icon={faBars} style={{ height: '25px', cursor: 'pointer'}} />
        </header>
    );
}

export default Header;
