import { Gilda_Display } from 'next/font/google';

import Layout from '@/components/Layout';
import styles from '@/styles/pages/legal/PrivacyPolicy.module.css';

const gilda = Gilda_Display({ weight: '400', subsets: ['latin'] });

const PrivacyPolicy = () => {
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
                    }}>Privacy Policy</h1>
                    
                    <div className={styles.container}>
                        <p>Protecting your privacy is important to us. We hope the following statement will help you understand how we collect, use and safeguard the personal information you provide to us on our site.</p>
                        <p className={styles.title}>I. What kind of information do we collect from you when you visit our site?</p>

                        <p>When you visit frontfourcellars.com, our stats package from Google collects some basic information about your browser. Examples are things like what type of browser and operating system are you using; how long did you stay on our site; what pages did you look at. This helps us understand how visitors browse our site, so that we can make their shopping experience better.</p>

                        <p>We also collect personal information about you when you check out of our store such as your name, address, postal code, phone number, etc. We need this information to process payment and ship merchandise to you.</p>
                        <p className={styles.title}>II. Sharing of personal information - we don&apos;t do it.</p>

                        <p>Under no circumstances will we share any personal information that we collect with any third parties or web sites. All the information you give us is completely private and used solely for order processing and shipping. If you give us permission to send you marketing emails then we use your email for that purpose, but never does that email get sold or distributed to any other web site or list.</p>
                        <p className={styles.title}>III. Newsletter Opt-Out.</p>

                        <p>If you have chosen to opt into our newsletter or marketing emails and decide to opt out, we have a simple unsubscribe form that will let you get off our email list. Also, under the member area, you will find a simple form to unsubscribe.</p>
                        <p className={styles.title}>IV. Consumer inquiries and privacy.</p>

                        <p>If you have any questions about your privacy, or want to make changes to your profile, or get off our marketing list, simply send us an email.</p>
                        <p className={styles.title}>V. Protecting your information.</p>

                        <p>All the payment information we collect is done so under SSL - a standard internet security measure. Any data that we store about you is kept behind a secure firewall in our database and is not accessible to the public in any way.</p>
                    </div>
                </section>
            </Layout>
            </main>
        </>
    );
}

export default PrivacyPolicy;
