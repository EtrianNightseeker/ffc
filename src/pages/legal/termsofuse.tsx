import { FC } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import { Gilda_Display } from 'next/font/google';

import Layout from '@/components/Layout';
import styles from '@/styles/pages/legal/TermsOfUse.module.css';
import Link from 'next/link';

const gilda = Gilda_Display({ weight: '400', subsets: ['latin'] });

const TermsOfUse = () => {
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
                    }}>Terms of Use</h1>
                    
                    <div className={styles.container}>
                        <p>Welcome to our website. If you continue to browse and use this website, you are agreeing to comply with and be bound by the following terms and conditions of use, which together with our privacy policy govern Anaba Wines relationship with you in the context of this website.</p>

                        <p>The term “Front Four Cellars” or “us” or “we” refers to the owner of the website. The term “you” refers to the user or viewer of our website.</p>

                        <p>The use of this website is subject to the following terms of use:</p>

                        <p>The content of the pages of this website is for your general information and use only. It is subject to change without notice.</p>

                        <p>Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness or suitability of the information and materials found or offered on this website for any particular purpose. You acknowledge that such information and materials may contain inaccuracies or errors and we expressly exclude liability for any such inaccuracies or errors to the fullest extent permitted by law.</p>

                        <p>Your use of any information or materials on this website is entirely at your own risk, for which we shall not be liable. It shall be your own responsibility to ensure that any products, services or information available through this website meet your specific requirements.</p>

                        <p>This website contains material which is owned by or licensed to us. This material includes, but is not limited to, the design, layout, look, appearance and graphics. Reproduction is prohibited other than in accordance with the copyright notice, which forms part of these terms and conditions.</p>

                        <p>All trademarks reproduced in this website which are not the property of, or licensed to, the operator are acknowledged on the website.</p>

                        <p>Unauthorized use of this website may give rise to a claim for damages and/or be a criminal offence. From time to time, this website may also include links to other websites. These links are provided for your convenience to provide further information. They do not signify that we endorse the website(s). We have no responsibility for the content of the linked website(s).</p>

                        <p>Your use of this website and any dispute arising out of such use of the website is subject to the laws of the United States.</p>
                        <p className={styles.title}>Visiting the Winery</p>

                        <p>If you are partaking in physical activities at the winery, such as Paddle Tennis, you must acknowledge and sign our Release of Liability prior to engaging in the activities. </p>
                        
                        <p className={styles.title} style={{fontSize: '36px'}}>Wine-Specific Conditions</p>
                        <p className={styles.title}>Legal Requirements</p>

                        <p>You must be 21 years of age or older, to order or receive alcoholic beverages from Front Four Cellars. Receipt of shipments containing alcoholic beverages requires the signature of a sober adult (a person 21 years of age or older who is not intoxicated). Wines purchased from Front Four Cellars are not for resale, and are for personal consumption only.</p>
                        <p className={styles.title}>Credit Card Charges</p>

                        <p>Orders are by credit card only. We accept Visa, MasterCard, and American Express.</p>
                        <p className={styles.title}>Minimum Purchase</p>

                        <p>No minimum purchase is required. </p>
                        <p className={styles.title}>States Authorized for Direct Shipment</p>

                        <p>Due to the ever-changing nature of wine shipping laws, we may be able to ship wines, directly or indirectly, to all states except AL, AR, CT, DE, DC, IN, KS, ME, MS, MT, NE, OK, PA, RI, SD, UT, VT, WV. If Front Four Cellars is unable to ship directly to your state, we can arrange for the sale and shipment of our products through a third party. Please note, when dealing through a third party, wine prices, discounts, and shipping costs may differ from those quoted by Front Four Cellars.</p>
                        <p className={styles.title}>Shipping Costs</p>

                        <p>UPS Ground is Front Four Cellars&apos; carrier of choice. Ground shipping is provided by UPS at current market rates. *Note - If the customer selects UPS Air as his or her carrier, the customer pays all shipping charges, regardless of his or her wine club membership or purchase amount.</p>
                        <p className={styles.title}>Wine is a Delicate Commodity</p>

                        <p>Wine is a perishable commodity. Wine does not like extremes of temperature: hot humid summer and cold winter weather may adversely affect the condition of your wine during shipment. Front Four Cellars is not responsible for, and will not replace wine that is damaged by extreme weather conditions during shipment. When your wine order is picked up by the common carrier for delivery, responsibility for the wine becomes the responsibility of the purchaser.</p>
                    </div>
                </section>
            </Layout>
            </main>
        </>
    );
}

export default TermsOfUse;