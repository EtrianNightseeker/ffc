import { FC, useState } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import { Gilda_Display } from 'next/font/google';
import DatePicker from 'react-datepicker';
import axios from 'axios';

import "react-datepicker/dist/react-datepicker.css";

import Layout from '@/components/Layout';
import styles from '@/styles/pages/events/PackageForm.module.css';

const gilda = Gilda_Display({ weight: '400', subsets: ['latin'] });

const PackageForm = () => {
    const [date, setDate] = useState<Date | null>();
    const [type, setType] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [street, setStreet] = useState<string>('');
    const [city, setCity] = useState<string>('');
    const [state, setState] = useState<string>('');
    const [zip, setZip] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [description, setDescription] = useState<string>('');

    const submitForm = async () => {
        const data = {
            'date': date?.toLocaleDateString(),
            type,
            name,
            street,
            city,
            state,
            zip,
            phone,
            email,
            description,
        };

        const headers: HeadersInit = new Headers();
        headers.set('Content-Type', 'application/json');

        axios.post(
            '/api/email',
            data
        ).then((res) => {
            setDate(null);
            setType('');
            setName('');
            setStreet('');
            setCity('');
            setState('');
            setZip('');
            setPhone('');
            setEmail('');
            setDescription('');

            alert('Your request has been received.  We will reach out to you shortly!');
        });
    };

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
                    }}>Specialty Package Form</h1>

                    <section className={styles.container}>
                        <section style={{ margin: '40px 0' }}>
                            Thank you for your interest in our specialty programs. Please fill out this form to include a short detail of what exactly you are 
                            hoping for and one of our consultants will reach out to you within 24 hours.  
                        </section>

                        <section style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <section style={{ display: 'flex', gap: '40px', width: '40%' }}>
                                <div style={{ width: '350px' }}>Type of Program:</div>
                                <select value={type} onChange={(e) => setType(e.target.value)} style={{ width: '100%' }}>
                                    <option></option>
                                    <option>Wedding Package</option>
                                    <option>Special Occasion</option>
                                    <option>Realtor - Thank You</option>
                                    <option>Tasting Room Reservation</option>
                                    <option>Other - Inquire about something of interest</option>
                                </select>
                            </section>

                            <section style={{ display: 'flex', gap: '40px', width: '40%' }}>
                                <div style={{ width: '250px' }}>Date of Event:</div>
                                <div style={{ position: 'relative', width: '100%' }}>
                                    <DatePicker value={date?.toLocaleDateString()} onChange={(date) => setDate(date)} />
                                </div>
                            </section>
                        </section>

                        <section style={{ margin: '40px 0', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <div style={{ display: 'flex', gap: '40px', width: '40%' }}>
                                    <div style={{ width: '350px' }}>Name:</div> 
                                    <input value={name} onChange={(e) => setName(e.target.value)} type='text' style={{ width: '100%', height: '22px' }} />
                                </div>

                                <div style={{ textAlign: 'right', width: '40%', position: 'relative', display: 'flex', gap: '40px' }}>
                                    <div style={{ width: '260px', textAlign: 'left' }}>Address:</div>
                                    <div style={{ width: '100%' }}>
                                        <div style={{ width: '100%', display: 'flex' }}>
                                            <input value={street} onChange={(e) => setStreet(e.target.value)} type='text' placeholder='Street Address' style={{ width: '100%' }} />
                                        </div>
                                        <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
                                            <input value={city} onChange={(e) => setCity(e.target.value)} type='text' placeholder='City' style={{ width: '33%' }} />
                                            <input value={state} onChange={(e) => setState(e.target.value)} type='text' placeholder='State' style={{ width: '33%' }} />
                                            <input value={zip} onChange={(e) => setZip(e.target.value)} type='text' placeholder='Zip' style={{ width: '33%' }} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
                                <div style={{ display: 'flex', gap: '40px', position: 'relative', width: '40%' }}>
                                    <div style={{ width: '350px' }}>Contact Phone:</div> 
                                    <input value={phone} onChange={(e) => setPhone(e.target.value)} type='text' style={{ width: '50%' }} />
                                </div>
                                <div style={{ display: 'flex', gap: '40px', width: '40%' }}>
                                    <div style={{ width: '270px' }}>Email Address:</div> 
                                    <input value={email} onChange={(e) => setEmail(e.target.value)} type='text' style={{ width: '100%' }} />
                                </div>
                            </div>
                        </section>

                        <section style={{ margin: '40px 0' }}>
                            Tell us what you are looking for: 
                            <br/>
                            <br/>
                            <textarea value={description} onChange={(e) => setDescription(e.target.value)} style={{ width: '400px', height: '100px' }}></textarea>
                        </section>
                        
                        <section style={{ textAlign: 'center', margin: '40px 0' }}>
                            <button onClick={submitForm} style={{ 
                                        backgroundColor: 'transparent', 
                                        border: '2px solid black', 
                                        padding: '0.667em 1.333em',
                                        fontWeight: '400',
                                        lineHeight: '1.1',
                                        fontSize: '16px',
                                        color: 'black',
                                        cursor: 'pointer',
                                    }}>Submit</button>
                        </section>
                    </section>
                </section>
            </Layout>
            </main>
        </>
    );
}

export default PackageForm;