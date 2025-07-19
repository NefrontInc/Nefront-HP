import { url } from 'lib/img';
import { getNewPosts } from 'lib/posts';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import Head from 'next/head';
import React, { useEffect, useRef } from 'react';
import ReactGA from 'react-ga4';
import { Post } from 'types/posts';
import { Box, Container, Heading, SimpleGrid } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { GridItem } from '@/grid-item';
import Layout from '@/layouts/article';
import Paragraph from '@/paragraph';
import PostsList from '@/plist';
import Section from '@/section';

const imamuu = '/images/index/imamura.jpg';
const hemmi = '/images/index/hemmi.jpg';

ReactGA.initialize('G-FBQ0WYNGEZ');
ReactGA.send('pageview');

const Particles = dynamic(() => import('../../components/particles'), {
    loading: () => <div id="hoge" />,
    ssr: false,
});

type Props = {
    newPosts: Post;
};

const NewsDiv = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    padding: 50px 0;
`;

const Home = ({ newPosts }: Props) => {
    const novareRef = useRef<HTMLImageElement>(null);
    const adminContainerRef = useRef<HTMLDivElement>(null);
    const filefrontRef = useRef<HTMLImageElement>(null);
    const filefront02ContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleResize = () => {
            if (novareRef.current && adminContainerRef.current) {
                const novareHeight = novareRef.current.offsetHeight;
                adminContainerRef.current.style.height = `${novareHeight}px`;
            }
            if (filefrontRef.current && filefront02ContainerRef.current) {
                const filefrontHeight = filefrontRef.current.offsetHeight;
                filefront02ContainerRef.current.style.height = `${filefrontHeight}px`;
            }
        };

        if (novareRef.current) {
            novareRef.current.onload = handleResize;
            handleResize();
        }
        if (filefrontRef.current) {
            filefrontRef.current.onload = handleResize;
            handleResize();
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <Layout>
            <Head>
                <meta name="description" content="Nefront Inc. develops indoor AR cloud service" />
                <title>Nefront Inc.</title>
            </Head>
            <Container maxW="99999999px">
                <div id="top" />
                <div id="parent">
                    <Particles />
                </div>

                <div
                    style={{
                        width: '100%',
                        height: '60px',
                    }}
                />

                <div id="about" />
                <div
                    style={{
                        width: '100%',
                        height: '60px',
                    }}
                />
                <Section delay={0.1}>
                    <Heading as="h1" variant="section-title">
                        About
                    </Heading>
                    <Paragraph>
                        <span className="exagsentence">
                            We make building information visible and easy to understand through AI and AR technology
                        </span>
                    </Paragraph>
                </Section>

                <div id="product" />
                <div
                    style={{
                        width: '100%',
                        height: '60px',
                    }}
                />

                <Section delay={0.2}>
                    <div style={{ width: '80%', margin: '0 auto' }}>
                        <Heading as="h1" variant="section-title">
                            Products
                        </Heading>

                    <Paragraph>
                        <span className="exagsentence" style={{ margin: '0 0 20px 0' }}>
                            - Indoor Spatial Information Management System IndooAR -
                        </span>
                        <span className="exagsentence">
                            A system that allows spatial management of information by linking information to indoor spaces
                        </span>
                    </Paragraph>
                    
                    <div className="flex" style={{ gap: '2rem', margin: '2rem 0 1rem 0' }}>
                        <div className="flexdiv" style={{ flex: '1', minWidth: '300px' }}>
                            <div style={{ border: '1px solid #eee', borderRadius: '8px', overflow: 'hidden', marginBottom: '1rem' }}>
                                <img ref={novareRef} src={url('/images/indooar/IndooAR_NOVARE_3.png')} alt="IndooAR NOVARE 3" className="imgs" style={{ width: '100%', height: 'auto' }} />
                            </div>
                            <div style={{ textAlign: 'center', marginBottom: '0.5rem' }}>
                                <p style={{ margin: '0', fontSize: '16px', color: '#333', fontWeight: '500' }}>Identify indoor location information through image recognition and position markers.<br></br>Easily record work with location information on-site.</p>
                            </div>
                        </div>
                        <div className="flexdiv" style={{ flex: '1', minWidth: '300px' }}>
                            <div ref={adminContainerRef} style={{ border: '1px solid #eee', borderRadius: '8px', overflow: 'hidden', marginBottom: '1rem' }}>
                                <img src={url('/images/indooar/indooar_admin.png')} alt="IndooAR Admin" className="imgs" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
                            </div>
                            <div style={{ textAlign: 'center', marginBottom: '0.5rem' }}>
                                <p style={{ margin: '0', fontSize: '16px', color: '#333', fontWeight: '500' }}>Work records with location information can be easily checked on a map in the management screen.<br></br>AR manuals can also be easily edited on the management screen.</p>
                            </div>
                        </div>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
                        <Link href="/en/indooar" className="more">
                            <svg width="300" height="62">
                                <linearGradient id="grad1">
                                    <stop offset="0%" stopColor="#3054d6" />
                                    <stop offset="100%" stopColor="#3054d6" />
                                </linearGradient>
                                <rect
                                    x="5"
                                    y="5"
                                    rx="25"
                                    fill="none"
                                    stroke="url(#grad1)"
                                    width="266"
                                    height="50"
                                ></rect>
                            </svg>
                            <span>See IndooAR Details</span>
                        </Link>
                    </div>

                    <div style={{ borderTop: '1px solid #eee', margin: '4rem 0 3rem 0' }} />

                    <Paragraph>
                        <span className="exagsentence" style={{ margin: '0 0 20px 0' }}>
                            - AI Drawing Management Tool Filefront -
                        </span>
                        <span className="exagsentence">
                            A system that allows easy searching of PDF drawing contents
                        </span>
                    </Paragraph>
                    
                    <div className="flex" style={{ gap: '2rem', margin: '2rem 0 1rem 0' }}>
                        <div className="flexdiv" style={{ flex: '1', minWidth: '300px' }}>
                            <div style={{ border: '1px solid #eee', borderRadius: '8px', overflow: 'hidden', marginBottom: '1rem' }}>
                                <img ref={filefrontRef} src={url('/images/filefront/filefront_01.png')} alt="Filefront AI Analysis" className="imgs" style={{ width: '100%', height: 'auto' }} />
                            </div>
                            <div style={{ textAlign: 'center', marginBottom: '0.5rem' }}>
                                <p style={{ margin: '0', fontSize: '16px', color: '#333', fontWeight: '500' }}>Search PDF contents using OCR analysis.<br></br>AI also tags each page for conditional searching.</p>
                            </div>
                        </div>
                        <div className="flexdiv" style={{ flex: '1', minWidth: '300px' }}>
                            <div ref={filefront02ContainerRef} style={{ border: '1px solid #eee', borderRadius: '8px', overflow: 'hidden', marginBottom: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#ffffff' }}>
                                <img src={url('/images/filefront/filefront_02.png')} alt="Filefront Search Function" className="imgs" style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                            </div>
                            <div style={{ textAlign: 'center', marginBottom: '0.5rem' }}>
                                <p style={{ margin: '0', fontSize: '16px', color: '#333', fontWeight: '500' }}>Link and manage other drawings to floor plans. Writing is also possible.</p>
                            </div>
                        </div>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
                        <Link href="/en/filefront" className="more">
                            <svg width="300" height="62">
                                <linearGradient id="grad2">
                                    <stop offset="0%" stopColor="#3054d6" />
                                    <stop offset="100%" stopColor="#3054d6" />
                                </linearGradient>
                                <rect
                                    x="5"
                                    y="5"
                                    rx="25"
                                    fill="none"
                                    stroke="url(#grad2)"
                                    width="266"
                                    height="50"
                                ></rect>
                            </svg>
                            <span>See Filefront Details</span>
                        </Link>
                    </div>
                    </div>
                </Section>

                <div id="news" />
                <div
                    style={{
                        width: '100%',
                        height: '60px',
                    }}
                />
                <Section delay={0.3}>
                    <Heading as="h1" variant="section-title">
                        News
                    </Heading>
                    <NewsDiv>
                        <PostsList isHome post={newPosts}></PostsList>
                    </NewsDiv>
                </Section>

                <div id="members" />
                <div
                    style={{
                        width: '100%',
                        height: '60px',
                    }}
                />
                <Section delay={0.4}>
                    <Heading as="h1" variant="section-title">
                        Members
                    </Heading>
                    <SimpleGrid columns={1} gap={6}>
                        <GridItem title="Shota Imamura" nefposition="Representative Director, CEO" thumbnail={imamuu} personalSiteUrl="https://imamuus.com/">
                            <div style={{ textAlign: 'center', fontSize: '16px', lineHeight: '1.6' }}>
                                <br />
                                After graduating from University of Tsukuba with a bachelor&apos;s degree in
                                Information Science, he entered the Graduate School of the University of
                                Tokyo, the Rekimoto Lab.
                                <br />
                                In addition to the development of the indoor AR cloud, he is also
                                involved in research on applications of AI technology and the gaze
                                interface for AR/VR head-mounted displays.
                                <br />
                                As a long-term intern at Zigexn Group, he was in charge of launching new
                                businesses as a PM. Also, after developing and managing an event-based
                                SNS, he launched Nefront.
                                <br />
                            </div>
                        </GridItem>
                        <GridItem title="Kazuki Hemmi" nefposition="Executive Officer, COO" thumbnail={hemmi} personalSiteUrl="https://itigo11111.com/">
                            <div style={{ textAlign: 'center', fontSize: '16px', lineHeight: '1.6' }}>
                                <br />
                                Graduated from National Institute of Technology, Tokyo College,
                                Department of Computer Science and Information Engineering, and entered
                                the graduate school of University of Tsukuba.
                                <br />
                                Since then, he&apos;s been studying AutoML (Automated Machine Learning)
                                at the Social Intelligence Research Team, Artificial Intelligence
                                Research Center, National Institute of Advanced Industrial Science and
                                Technology (AIST), while studying management engineering at the
                                University of Tsukuba Graduate School.
                                <br />
                                A genuine idea man who just loves to touch new technology.
                                <br />
                            </div>
                        </GridItem>
                    </SimpleGrid>
                </Section>

                <div id="company" />
                <div
                    style={{
                        width: '100%',
                        height: '60px',
                    }}
                />
                <Section delay={0.5}>
                    <Heading as="h1" variant="section-title">
                        Company
                    </Heading>
                    <Box className="table">
                        <br />
                        ・Company Name: Nefront Inc.
                        <br />
                        ・Address: Shibuya Dougenzaka Tokyu Building 2F-C, 1-10-8, Shibuya Dogenzaka,
                        Tokyo, Japan
                        <br />
                        ・CEO: Shota Imamura
                        <br />
                        ・Capital: 810,000 JPY (including capital reserves)
                        <br />
                        ・Founded: June 2021
                        <br />
                    </Box>
                </Section>

                <div id="contact" />
                <div
                    style={{
                        width: '100%',
                        height: '60px',
                    }}
                />
                <Section delay={0.6}>
                    <Heading as="h1" variant="section-title">
                        Contact
                    </Heading>
                    <Box className="table">
                        <a
                            className="contactform"
                            href="https://forms.gle/HJXsrsk5myVrmEqC6"
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            Contact us here
                        </a>
                    </Box>
                </Section>
            </Container>
        </Layout>
    );
};

export default Home;

export const getStaticProps = async () => {
    const newPosts = getNewPosts(['title', 'date', 'slug']);
    return {
        props: { newPosts },
    };
};