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
                            <li><Link href="https://frontfourcellars.orderport.net/wines/All-Wines">All</Link></li>
                            <li><Link href="https://frontfourcellars.orderport.net/wines/All-Wines/Red-Wine">Red</Link></li>
                            <li><Link href="https://frontfourcellars.orderport.net/wines/All-Wines/Rose-Wine">Rose</Link></li>
                            <li><Link href="https://frontfourcellars.orderport.net/wines/All-Wines/White-Wine">White</Link></li>
                            <li><Link href="https://frontfourcellars.orderport.net/wines/All-Wines/Sparkling">Sparkling</Link></li>
                            <li><Link href="https://frontfourcellars.orderport.net/wines/wines/Gift-Cards">Gift&nbsp;Cards</Link></li>
                            <li><Link href="https://frontfourcellars.orderport.net/wines/wines/Merchandise">Merch</Link></li>
                        </ul>
                    </li>
                   <li>
                        <Link href="https://frontfourcellars.orderport.net/wines/Events">Events</Link>
                        <ul>
                            <li><Link href="https://frontfourcellars.orderport.net/wines/Events">Calendar</Link></li>
                            <li><Link href="https://frontfourcellars.orderport.net/wines/Events">Tickets</Link></li>
                        </ul>
                    </li>
                   <li>
                        <Link href="/">
                            <Image src="/logo-no-tagline.png" alt="image" height="122" width="225" />
                        </Link>
                   </li> 
                   <li className="dropdown">
                        <Link href="/events/packages">Reservations</Link>
                        <ul className="dropdown-menu">
                            <li><Link href="https://frontfourcellars.orderport.net/reservations">NH&nbsp;Tasting&nbsp;Room</Link></li>
                            <li><Link href="https://frontfourcellars.orderport.net/wines/Book-a-Group-Event">Book&nbsp;a&nbsp;Group&nbsp;Event</Link></li>
                            <li><Link href="https://frontfourcellars.com/events/packages">Packages</Link></li>
                            <li><Link href="https://frontfourcellars.com/events/packages">Weddings</Link></li>
                            <li><Link href="https://frontfourcellars.com/events/packages">Special&nbsp;Occasions</Link></li>
                            <li><Link href="https://frontfourcellars.com/events/packages">Realtor/Mortgage</Link></li>
                            <li><Link href="https://frontfourcellars.com/events/packages">Private&nbsp;Label&nbsp;Program</Link></li>
                        </ul>
                    </li>
                   <li className="dropdown">
                        <Link href="#">About Us</Link>
                        <ul className="dropdown-menu">
                            <li><Link href="/about/story">Our&nbsp;Story</Link></li>
                            <li><Link href="/about/team">Our&nbsp;Team</Link></li>
                            <li><Link href="/about/philosophy">Our&nbsp;Philosophy</Link></li>
                            <li><Link href="/about/contactus">Contact&nbsp;Us</Link></li>
                        </ul>
                    </li>
                </ul>
            </nav>

            <Link href="/">
                <Image src="/logo-no-tagline.png" alt="image" height="122" width="225" />
            </Link>

            <nav>
                <ul>
                   <li>
                        <Link href="https://frontfourcellars.orderport.net/wines/All-Wines">Shop</Link>
                        <ul>
                            <li><Link href="https://frontfourcellars.orderport.net/wines/All-Wines">All</Link></li>
                            <li><Link href="https://frontfourcellars.orderport.net/wines/All-Wines/Red-Wine">Red</Link></li>
                            <li><Link href="https://frontfourcellars.orderport.net/wines/All-Wines/Rose-Wine">Rose</Link></li>
                            <li><Link href="https://frontfourcellars.orderport.net/wines/All-Wines/White-Wine">White</Link></li>
                            <li><Link href="https://frontfourcellars.orderport.net/wines/All-Wines/Sparkling">Sparkling</Link></li>
                            <li><Link href="https://frontfourcellars.orderport.net/wines/wines/Gift-Cards">Gift&nbsp;Cards</Link></li>
                            <li><Link href="https://frontfourcellars.orderport.net/wines/wines/Merchandise">Merch</Link></li>
                            <li><Link href="https://frontfourcellars.orderport.net/wines/wines/Merchandise">Merch</Link></li>
                        </ul>
                    </li>
                   <li>
                        <Link href="https://frontfourcellars.orderport.net/wines/Events">Events</Link>
                        <ul>
                            <li><Link href="https://frontfourcellars.orderport.net/wines/Events">Calendar</Link></li>
                            <li><Link href="https://frontfourcellars.orderport.net/wines/Events">Tickets</Link></li>
                        </ul>
                    </li>
                   <li>
                        <Link href="/events/packages">Reservations</Link>
                        <ul className="dropdown-menu">
                            <li><Link href="https://frontfourcellars.orderport.net/reservations">NH&nbsp;Tasting&nbsp;Room</Link></li>
                            <li><Link href="https://frontfourcellars.orderport.net/wines/Book-a-Group-Event">Book&nbsp;a&nbsp;Group&nbsp;Event</Link></li>
                            <li><Link href="https://frontfourcellars.com/events/packages">Packages</Link></li>
                            <li><Link href="https://frontfourcellars.com/events/packages">Weddings</Link></li>
                            <li><Link href="https://frontfourcellars.com/events/packages">Special&nbsp;Occasions</Link></li>
                            <li><Link href="https://frontfourcellars.com/events/packages">Realtor/Mortgage</Link></li>
                            <li><Link href="https://frontfourcellars.com/events/packages">Private&nbsp;Label&nbsp;Program</Link></li>
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
