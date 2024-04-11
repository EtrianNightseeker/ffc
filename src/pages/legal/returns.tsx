import { FC } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import { Gilda_Display } from 'next/font/google';

import Layout from '@/components/Layout';
import styles from '@/styles/pages/legal/ReturnsAndCancellations.module.css';
import Link from 'next/link';

const gilda = Gilda_Display({ weight: '400', subsets: ['latin'] });

const ReturnsAndCancellations = () => {
    return (
        <>
            <main className={gilda.className}>
            <Layout>
                <section className={gilda.className} style={{ margin: '0 auto', position: 'relative' }}>
                    <h1 style={{ 
                        textAlign: 'center', 
                        fontSize: '48px', 
                        margin: '1rem 0 1.5rem 0', 
                        overflowWrap: 'break-word', 
                        lineHeight: '1.2',
                        fontWeight: '300'
                    }}>Returns & Cancellations</h1>
                    
                    <div className={styles.container}>
                        <p className={styles.title}>Online Orders</p>

                        <p><strong>Please note: DOB required for sender and recipient.</strong></p>

                        <p><strong>Warm Weather Shipping Advisory: We take immense pride in making sure our wine is delivered to you in condition and quality our winemaker intended. Hot temperatures will adversely affect your wine in transit, therefore we strongly recommend selecting Overnight or 2-Day Air shipping options with coldpacks if the temperature in your delivery area is above 85 degrees or selecting a future ship date. We cannot replace orders shipped via Ground that were damaged due to heat.</strong><br/>
                        Please allow up to three business days for order processing.<br/>
                        UPS/GSO orders ship Monday through Thursday, and deliver Monday through Friday.<br/>
                        FedEx orders ship Monday through Thursday, and delivery Tuesday through Saturday.<br/>
                        Orders via cold chain temperature-controlled truck must be placed by Thursdays at 1pm PT for shipping that week, and ship on Fridays only.<br/>
                        Signature of someone 21 or older is required for delivery. We suggest shipping to a commercial/office address where someone is present to sign during regular business hours.<br/>
                        We can also ship to a UPS/FedEx hub, UPS Store (fees may apply) or FedEx location.<br/>
                        For order assistance, please contact us at club@frontfourcellars.com.</p>
                        <p className={styles.title}>Club Orders</p>

                        <p>Wine club order processing dates and wine details will be emailed within 14 days of charging.<br/>
                        FedEx is our default carrier, but other shipping modes can be arranged prior to processing.<br/>
                        Tracking number will be emailed once your order is picked up by the carrier.<br/>
                        Will-call orders not picked up within 45 days will be shipped to the member&apos;s default address, and shipping fee billed to their credit card on file.<br/>
                        For order assistance, please contact us at club@frontfourcellars.com.</p>

                        <p>The laws governing direct-to-consumer shipments are different in every state and these regulations limit where we can ship wine and how much residents may receive. To ensure that you can order wine from our website and join our wine club, please review the information below. If your state is not listed, we are not allowed to ship directly to consumers. We are always making efforts to expand our shipping capabilities and you can help fight direct-to-consumer regulations by visiting freethegrapes.org</p>
                        <p className={styles.title}>We are able to ship wine to all states listed below:</p>

                        <p>
                        AK - Alaska UPS only, certain areas prohibited<br/>
                        AZ - Arizona 12 cases/individual/calendar year<br/>
                        CA - California No limit<br/>
                        CO - Colorado No limit<br/>
                        DC - District of Columbia 1 case/individual/calendar month<br/>
                        FL - Florida No bottles over 3 liters in size<br/>
                        GA - Georgia 12 cases/household/calendar year*<br/>
                        HI - Hawaii Resedential delivery only, 6 cases/household/calendar year<br/>
                        IA - Iowa No limit<br/>
                        ID - Idaho 24 cases/individual/calendar year<br/>
                        IL - Illinois 12 cases/individual/calendar year<br/>
                        IN - Indiana 24 cases/individual/calendar year<br/>
                        KS - Kansas 12 cases/household/calendar year<br/>
                        LA - Louisiana 12 cases/household/calendar year<br/>
                        MA - Massachusetts 12 cases/individual/calendar year<br/>
                        MD - Maryland 18 cases/household/calendar year<br/>
                        MI - Michigan No limit<br/>
                        MO - Missouri 2 cases/individual/month<br/>
                        MN - Minnesota 2 cases/individual/calendar year<br/>
                        NC - North Carolina 2 cases/individual/calendar month<br/>
                        ND - North Dakota 3 cases/individual/calendar month<br/>
                        NE - Nebraska 1 case/individual/month<br/>
                        NH - New Hampshire 12 cases/individual/calendar year<br/>
                        NJ - New Jersey 12 cases/individual/calendar year<br/>
                        NM - New Mexico 2 cases/individual/calendar month<br/>
                        NV - Nevada 12 cases/individual/fiscal year<br/>
                        NY - New York 36 cases/individual/calendar year<br/>
                        OH - Ohio 24 cases/household/calendar year<br/>
                        OK - Oklahoma 6 cases/individual/calendar year<br/>
                        OR - Oregon 2 cases/individual/calendar month<br/>
                        PA - Pennsylvania 36 cases/individual/calendar year<br/>
                        SC - South Carolina 2 cases/individual/calendar month<br/>
                        TN - Tennessee 1 case/individual/month, max 3 cases/year<br/>
                        TX - Texas 3.75 cases/individual/month, max 15 cases/calendar year<br/>
                        VA - Virgina 2 cases/individual/calendar month<br/>
                        WA - Washington No limit (License #40086)<br/>
                        WI - Wisconsin 12 cases/individual/calendar year<br/>
                        WY - Wyoming 2 cases/household/fiscal year
                        </p>
                        <p className={styles.title}>Returns & Cancellations</p>

                        <p>We will replace or refund you for any bottle of wine that is damaged, flawed or that the customer finds unsatisfactory. By law, we cannot accept returns of alcoholic beverages unless the product is corked, or flawed. We are also unable to accept return of wine that was damaged due to adverse weather conditions during shipment, or wine that is ordered in error. Please send an email to club@frontfourcellars.com to arrange for the return of corked or flawed product.</p>

                        <p>Once the wine is received we will refund your credit card account for the cost of the wine less shipping and handling. If the original shipment was damaged or flawed you will receive a full refund, including shipping and handling charges. Please contact the wineclub@frontfourcellars for return instructions.</p>

                        <p>If a shipment is returned to us because no one was available to sign for it, the customer will be responsible for the cost of reshipping the wine. Please ensure that someone of legal age is available to sign for the package to avoid any additional charges. We understand that unexpected events can arise, so please don&apos;t hesitate to contact us if you need to make alternative arrangements.</p>

                        <p>A 15% restocking fee will be applied to all canceled orders.</p>
                    </div>
                </section>
            </Layout>
            </main>
        </>
    );
}

export default ReturnsAndCancellations;