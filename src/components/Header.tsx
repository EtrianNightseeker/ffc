import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import styles from '@/styles/components/Header.module.css';

const Header = () => {

    useEffect(() => {
        document.querySelector("header nav ~ nav ~ svg")?.addEventListener("click",() => {
            document.querySelector("header nav:nth-of-type(2)")?.classList.add("active");
        })
        document.querySelector("header nav ~ nav svg")?.addEventListener("click",() => {
            document.querySelector("header nav:nth-of-type(2)")?.classList.remove("active");
        })


        const mobileNavItems = document.querySelectorAll('header nav:nth-of-type(2) > ul > li:has(ul)');
        for (const item of mobileNavItems) {
          item.addEventListener('click', function (event) {
            try {
                const selected = document.querySelector('header nav:nth-of-type(2) ul > li > ul[class="selected-nav-item"]');

                if (selected) {
                    selected.classList.remove("selected-nav-item")
                }

                // @ts-ignore
                if (event.target.nextSibling !== null) {
                    // @ts-ignore
                    event.target.nextSibling.classList.add("selected-nav-item");
                }
            }
            catch(e) {
                console.log(e);
            }
          });
        }
        
        /*
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
        */

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
                            <li><a href="https://frontfourcellars.orderport.net/wines/Book-a-Group-Event">Book&nbsp;a&nbsp;Group&nbsp;Event&nbsp;&nbsp;&nbsp;&nbsp;</a></li>
                            <li data-package-title="true"><Link href="/events/packages">Packages</Link></li>
                            <li data-package="true"><Link href="/events/packages">Weddings</Link></li>
                            <li data-package="true"><Link href="/events/packages">Special&nbsp;Occasions</Link></li>
                            <li data-package="true"><Link href="/events/packages">Realtor/Mortgage</Link></li>
                            <li data-package="true"><Link href="/events/packages">Private&nbsp;Label&nbsp;Program</Link></li>
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
                        <Link href="/newhampshire">Locations</Link>
                        <ul>
                            <li><Link href="/newhampshire">New&nbsp;Hampshire</Link></li>
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
                        <a href="javascript:void(0)">Shop</a>
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
                        <a href="javascript:void(0)">Events</a>
                        <ul>
                            <li><a href="https://frontfourcellars.orderport.net/wines/Events">Calendar</a></li>
                            <li><a href="https://frontfourcellars.orderport.net/wines/Events">Tickets</a></li>
                        </ul>
                    </li>
                   <li>
                        <a href="javascript:void(0)">Reservations</a>
                        <ul>
                            <li><a href="https://frontfourcellars.orderport.net/reservations">NH&nbsp;Tasting&nbsp;Room</a></li>
                            <li><a href="https://frontfourcellars.orderport.net/wines/Book-a-Group-Event">Book&nbsp;a&nbsp;Group&nbsp;Event</a></li>
                            <li data-package-title="true"><Link href="/events/packages">Packages</Link></li>
                            <li data-package="true"><Link href="/events/packages">Weddings</Link></li>
                            <li data-package="true"><Link href="/events/packages">Special&nbsp;Occasions</Link></li>
                            <li data-package="true"><Link href="/events/packages">Realtor/Mortgage</Link></li>
                            <li data-package="true"><Link href="/events/packages">Private&nbsp;Label&nbsp;Program</Link></li>
                        </ul>
                    </li>
                   <li>
                        <a href="https://frontfourcellars.orderport.net/wine-club/">Wine Club</a>
                    </li>
                   <li>
                        <a href="javascript:void(0)">About Us</a>
                        <ul>
                            <li><Link href="/about/story">Our Story</Link></li>
                            <li><Link href="/about/team">Our Team</Link></li>
                            <li><Link href="/about/philosophy">Our Philosophy</Link></li>
                            <li><Link href="/about/contactus">Contact Us</Link></li>
                        </ul>
                    </li>
                   <li>
                        <Link href="javascript:void(0)">Locations</Link>
                        <ul>
                            <li><Link href="/newhampshire">New&nbsp;Hampshire</Link></li>
                        </ul>
                    </li>
                </ul>
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="x" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"></path></svg>
            </nav>
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"></path></svg>
        </header>
    );
}

export default Header;
