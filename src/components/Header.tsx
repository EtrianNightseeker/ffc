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
        
        const mobileNavItems = document.querySelectorAll('header nav:nth-of-type(2) ul li');
        for (const item of mobileNavItems) {
          item.addEventListener('click', function (event) {
            // @ts-ignore
            try {
                const selected = document.querySelector('header nav:nth-of-type(2) ul li ul[class="selected"]');
                if (selected) {
                    selected.classList.remove("selected")
                }
                // @ts-ignore
                event.target.nextSibling.classList.add("selected");
            }
            catch(e) {}
          });
        }

    },[]);

    return (
        <header className={styles.header}>
            <nav>
                <ul>
                   <li>
                        <a href="https://frontfourcellars.orderport.net/wines/All-Wines">Shop</a>
                        <ul>
                            <li><a href="https://frontfourcellars.orderport.net/wines/All-Wines">All</a></li>
                            <li><a href="https://frontfourcellars.orderport.net/wines/All-Wines/Red-Wine">Red</a></li>
                            <li><a href="https://frontfourcellars.orderport.net/wines/All-Wines/Rose-Wine">Rose</a></li>
                            <li><a href="https://frontfourcellars.orderport.net/wines/All-Wines/White-Wine">White</a></li>
                            <li><a href="https://frontfourcellars.orderport.net/wines/All-Wines/Sparkling">Sparkling</a></li>
                            <li><a href="https://frontfourcellars.orderport.net/wines/wines/Gift-Cards">Gift&nbsp;Cards</a></li>
                            <li><a href="https://frontfourcellars.orderport.net/wines/wines/Merchandise">Merch</a></li>
                        </ul>
                    </li>
                   <li>
                        <a href="https://frontfourcellars.orderport.net/wines/Events">Events</a>
                        <ul>
                            <li><a href="https://frontfourcellars.orderport.net/wines/Events">Calendar</a></li>
                            <li><a href="https://frontfourcellars.orderport.net/wines/Events">Tickets</a></li>
                        </ul>
                    </li>
                   <li>
                        <a href="https://frontfourcellars.orderport.net/reservations">Reservations</a>
                        <ul>
                            <li><a href="https://frontfourcellars.orderport.net/reservations">NH&nbsp;Tasting&nbsp;Room</a></li>
                            <li><a href="https://frontfourcellars.orderport.net/wines/Book-a-Group-Event">Book&nbsp;a&nbsp;Group&nbsp;Event</a></li>
                            <li><a href="https://frontfourcellars.com/events/packages">Packages</a></li>
                            <li><a href="https://frontfourcellars.com/events/packages">Weddings</a></li>
                            <li><a href="https://frontfourcellars.com/events/packages">Special&nbsp;Occasions</a></li>
                            <li><a href="https://frontfourcellars.com/events/packages">Realtor/Mortgage</a></li>
                            <li><a href="https://frontfourcellars.com/events/packages">Private&nbsp;Label&nbsp;Program</a></li>
                        </ul>
                    </li>
                   <li>
                        <Link href="/">
                            <Image src="/logo-no-tagline.png" alt="image" height="156" width="282" />
                        </Link>
                   </li> 
                   <li>
                        <a href="https://frontfourcellars.orderport.net/wine-club/">Wine Club</a>
                    </li>
                   <li>
                        <Link href="/about/story">About Us</Link>
                        <ul>
                            <li><Link href="/about/story">Our&nbsp;Story</Link></li>
                            <li><Link href="/about/team">Our&nbsp;Team</Link></li>
                            <li><Link href="/about/philosophy">Our&nbsp;Philosophy</Link></li>
                            <li><Link href="/about/contactus">Contact&nbsp;Us</Link></li>
                        </ul>
                    </li>
                   <li>
                        <Link href="https://frontfourcellars.com/newhampshire">Locations</Link>
                        <ul>
                            <li><Link href="https://frontfourcellars.com/newhampshire">New&nbsp;Hampshire</Link></li>
                        </ul>
                    </li>
                </ul>
            </nav>

            <Link href="/">
                <Image src="/logo-no-tagline.png" alt="image" height="156" width="282" />
            </Link>

            <nav>
                <ul>
                   <li>
                        <a href="#">Shop</a>
                        <ul>
                            <li><a href="https://frontfourcellars.orderport.net/wines/All-Wines">All</a></li>
                            <li><a href="https://frontfourcellars.orderport.net/wines/All-Wines/Red-Wine">Red</a></li>
                            <li><a href="https://frontfourcellars.orderport.net/wines/All-Wines/Rose-Wine">Rose</a></li>
                            <li><a href="https://frontfourcellars.orderport.net/wines/All-Wines/White-Wine">White</a></li>
                            <li><a href="https://frontfourcellars.orderport.net/wines/All-Wines/Sparkling">Sparkling</a></li>
                            <li><a href="https://frontfourcellars.orderport.net/wines/wines/Gift-Cards">Gift&nbsp;Cards</a></li>
                            <li><a href="https://frontfourcellars.orderport.net/wines/wines/Merchandise">Merch</a></li>
                        </ul>
                    </li>
                   <li>
                        <a href="#">Events</a>
                        <ul>
                            <li><a href="https://frontfourcellars.orderport.net/wines/Events">Calendar</a></li>
                            <li><a href="https://frontfourcellars.orderport.net/wines/Events">Tickets</a></li>
                        </ul>
                    </li>
                   <li>
                        <a href="#">Reservations</a>
                        <ul>
                            <li><a href="https://frontfourcellars.orderport.net/reservations">NH&nbsp;Tasting&nbsp;Room</a></li>
                            <li><a href="https://frontfourcellars.orderport.net/wines/Book-a-Group-Event">Book&nbsp;a&nbsp;Group&nbsp;Event</a></li>
                            <li><a href="https://frontfourcellars.com/events/packages">Packages</a></li>
                            <li><a href="https://frontfourcellars.com/events/packages">Weddings</a></li>
                            <li><a href="https://frontfourcellars.com/events/packages">Special&nbsp;Occasions</a></li>
                            <li><a href="https://frontfourcellars.com/events/packages">Realtor/Mortgage</a></li>
                            <li><a href="https://frontfourcellars.com/events/packages">Private&nbsp;Label&nbsp;Program</a></li>
                        </ul>
                    </li>
                   <li>
                        <a href="https://frontfourcellars.orderport.net/wine-club/">Wine Club</a>
                    </li>
                   <li>
                        <a href="#">About Us</a>
                        <ul>
                            <li><Link href="/about/story">Our Story</Link></li>
                            <li><Link href="/about/team">Our Team</Link></li>
                            <li><Link href="/about/philosophy">Our Philosophy</Link></li>
                            <li><Link href="/about/contactus">Contact Us</Link></li>
                        </ul>
                    </li>
                   <li>
                        <Link href="https://frontfourcellars.com/newhampshire">Locations</Link>
                        <ul>
                            <li><Link href="https://frontfourcellars.com/newhampshire">New&nbsp;Hampshire</Link></li>
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
