import { url } from 'lib/img';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import React from 'react';
import ReactGA from 'react-ga4';
import { Box, Container, Heading, SimpleGrid } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { GridItem } from '@/grid-item';
import Layout from '@/layouts/article';
import NewsHeading from '@/newsheading';
import Paragraph from '@/paragraph';
import Section from '@/section';
import Subsection from '@/subsection';

const imamuu = '/images/imamura.jpg';
const hemmi = '/images/hemmi.jpg';

const Particles = dynamic(() => import('../../components/particles'), {
    loading: () => <div id="hoge" />,
    ssr: false,
});

const NewsDiv = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    padding: 50px 0;
`;

const Home = () => {
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
                            Our solutions make it easy to provide Augmented Reality (AR)
                            applications that superimpose information on real space in places and
                            ways that have never been seen before.
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
                    <Heading as="h1" variant="section-title">
                        Product
                    </Heading>
                    <Paragraph>
                        <span className="exagsentence" style={{ margin: '0 0 20px 0' }}>
                            - Indoor AR Cloud Service (IndooAR) -
                        </span>
                        <span className="exagsentence">
                            IndooAR provides guidance applications and AR content by linking
                            information to indoor space.
                        </span>
                    </Paragraph>
                    <div className="flex">
                        <div className="flexdiv">
                            <Paragraph>
                                <img
                                    src={url('/images/vps.svg')}
                                    style={{ display: 'block', margin: 'auto' }}
                                    alt="VPS"
                                    className="svgs"
                                />
                                <Subsection>Indoor locating</Subsection>
                                <br />
                                Provides a VPS (Visual Positioning System) to locate in indoor
                                spaces where GPS cannot be used, using only a smartphone.
                            </Paragraph>
                        </div>
                        <div className="flexdiv">
                            <Paragraph>
                                <img
                                    src={url('/images/reg.svg')}
                                    style={{ display: 'block', margin: 'auto' }}
                                    alt="Register items"
                                    className="svgs"
                                />
                                <Subsection>
                                    Integrating item location info with real space
                                </Subsection>
                                <br />
                                Allows the product’s location and AR contents to be set in indoor
                                spaces, with real-time updates through API.
                            </Paragraph>
                        </div>
                        <div className="flexdiv">
                            <Paragraph>
                                <img
                                    src={url('/images/navigate.svg')}
                                    style={{ display: 'block', margin: 'auto' }}
                                    alt="Navigation"
                                    className="svgs"
                                />
                                <Subsection>Guidance and display of AR content</Subsection>
                                <br />
                                Guidances are provided based on the identified location and the
                                registered location of the item. AR contents can be displayed only
                                with a setting on the console.
                            </Paragraph>
                        </div>
                    </div>
                </Section>

                <div id="usecase" />
                <div
                    style={{
                        width: '100%',
                        height: '60px',
                    }}
                />

                <Section delay={0.3}>
                    <Heading as="h1" variant="section-title">
                        Usecases
                    </Heading>

                    <div className="flex">
                        <div className="flexdiv">
                            <Paragraph>
                                <img
                                    src={url('/images/super.jpg')}
                                    alt="Retail stores"
                                    className="imgs"
                                />
                                <Subsection>Retail stores</Subsection>
                                <br />
                                Guides users to the products they want and displays AR promotions
                                tailored to the sales floor. Even shopping with characters!
                                <br />
                            </Paragraph>
                        </div>

                        <div className="flexdiv">
                            <Paragraph>
                                <img
                                    src={url('/images/underground.jpg')}
                                    alt="City Facilities"
                                    className="imgs"
                                />
                                <Subsection>City Facilities</Subsection>
                                <br />
                                Guides through the facility and presents recommended information.
                                Coupons and hands-on Exhibits in AR for shops and restaurants!
                                <br />
                            </Paragraph>
                        </div>

                        <div className="flexdiv">
                            <Paragraph>
                                <img
                                    src={url('/images/repos.jpg')}
                                    alt="Warehouses"
                                    className="imgs"
                                />
                                <Subsection>Warehouses</Subsection>
                                <br />
                                Picking products and parts can be made more efficient using IndooAR.
                                Even beginners can reduce time and errors!
                                <br />
                            </Paragraph>
                        </div>

                        <div className="flexdiv">
                            <Paragraph>
                                <img
                                    src={url('/images/exhibi.jpg')}
                                    alt="Exhibitions"
                                    className="imgs"
                                />
                                <Subsection>Exhibitions</Subsection>
                                <br />
                                It&apos;s easy to get lost in many booths at an exhibition. Identify
                                where you are and get smooth guidance to your destination!
                                <br />
                            </Paragraph>
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
                <Section delay={0.4}>
                    <Heading as="h1" variant="section-title">
                        News
                    </Heading>
                    <NewsDiv>
                        <NewsHeading
                            title="Nominated for TechBiz2023"
                            date="2023/8/8"
                            link="https://dcaj-techbiz.com/news/selected-technologies-for-techbiz2023"
                        ></NewsHeading>

                        <NewsHeading
                            title="Idea Prize in the 2022 Student Business Plan Contest (Japan)"
                            date="2022/12/20"
                            link="http://www.gakusei-sc.or.jp/pdf/r3bis_4_1.pdf?221223"
                        ></NewsHeading>

                        <NewsHeading
                            title="Nikkan Kogyo Shimbun Award at the 19th Campus Venture Grand Prix in Tokyo"
                            date="2022/12/1"
                            link="https://cvg.nikkan.co.jp/tokyo_backnumber/2022/"
                        ></NewsHeading>

                        <NewsHeading
                            title="Nominated for the 2022 Ino-Vation Generation Award category by the Japanese Ministry of Internal Affairs and Communications."
                            date="2022/11/30"
                            link="https://www.inno.go.jp/result/2022/generation/nominate/"
                        ></NewsHeading>

                        <NewsHeading
                            title="Saza Coffee Award and Joyo Bank Award at the Ibaraki Prefecture Student Business Plan Contest 2022"
                            date="2022/11/27"
                            link="https://www.scc.ibaraki.ac.jp/contest2022final/"
                        ></NewsHeading>

                        <NewsHeading
                            title="Speaker at the Technology and Education Exhibition 2022"
                            date="2022/9/10"
                            link="https://talent.supporterz.jp/geekten/2022/exhibition.html#theme4"
                        ></NewsHeading>
                    </NewsDiv>
                </Section>

                <div id="members" />
                <div
                    style={{
                        width: '100%',
                        height: '60px',
                    }}
                />
                <Section delay={0.5}>
                    <Heading as="h1" variant="section-title">
                        Members
                    </Heading>
                    <SimpleGrid columns={1} gap={6}>
                        <GridItem
                            title="Shota Imamura"
                            nefposition="Representative Director, CEO"
                            thumbnail={imamuu}
                        >
                            <br />
                            After graduating from University of Tsukuba with a bachelor’s degree in
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
                            <a
                                href="https://imamuus.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="sim"
                            >
                                Imamura&#39;s Homepage
                            </a>
                        </GridItem>
                        <GridItem
                            title="Kazuki Hemmi"
                            nefposition="Executive Officer, COO"
                            thumbnail={hemmi}
                        >
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
                            <a
                                href="https://itigo11111.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="sim"
                            >
                                Hemmi&#39;s Homepage
                            </a>
                            <br />
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
                <Section delay={0.6}>
                    <Heading as="h1" variant="section-title">
                        Company
                    </Heading>
                    <Box className="table">
                        <br />
                        Company Name: Nefront Inc.
                        <br />
                        Address: Shibuya Dougenzaka Tokyu Building 2F-C, 1-10-8, Shibuya Dogenzaka,
                        Tokyo, Japan
                        <br />
                        CEO: Shota Imamura
                        <br />
                        Founded: June 2021
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
                <Section delay={0.7}>
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
