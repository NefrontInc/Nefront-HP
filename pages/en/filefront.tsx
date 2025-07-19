import { url } from 'lib/img';
import React, { useEffect, useRef } from 'react';
import ReactGA from 'react-ga4';
import { Box, Container, Heading } from '@chakra-ui/react';
import Layout from '@/layouts/article';
import Paragraph from '@/paragraph';
import Section from '@/section';

ReactGA.initialize('G-FBQ0WYNGEZ');
ReactGA.send('pageview');

const Filefront = () => {
    const feature01Ref = useRef<HTMLImageElement>(null);
    const feature02ContainerRef = useRef<HTMLDivElement>(null);
    const feature03ContainerRef = useRef<HTMLDivElement>(null);
    const feature04ContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleResize = () => {
            if (feature01Ref.current) {
                const baseHeight = feature01Ref.current.offsetHeight;
                
                if (feature02ContainerRef.current) {
                    feature02ContainerRef.current.style.height = `${baseHeight}px`;
                }
                if (feature03ContainerRef.current) {
                    feature03ContainerRef.current.style.height = `${baseHeight}px`;
                }
                if (feature04ContainerRef.current) {
                    feature04ContainerRef.current.style.height = `${baseHeight}px`;
                }
            }
        };

        if (feature01Ref.current) {
            feature01Ref.current.onload = handleResize;
            handleResize();
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <Layout>
            <Container maxW="1200px">
                <div
                    style={{
                        width: '100%',
                        height: '60px',
                    }}
                />
                
                <Section delay={0.1}>
                    <Heading as="h1" variant="section-title">
                        AI Drawing Management Tool Filefront
                    </Heading>
                    
                    <Paragraph>
                        <span className="exagsentence">
                            Without relying on complex folder structures or file names,<br />
                            A system that <strong>analyzes drawing contents with AI</strong> to instantly find the information you need
                        </span>
                    </Paragraph>
                    
                </Section>
                
                <Section delay={0.3}>
                    <div className="flex" style={{ gap: '2rem' }}>
                        <div className="flexdiv" style={{ flex: '1', minWidth: '300px' }}>
                            <div>
                                <div style={{ border: '1px solid #eee', borderRadius: '8px', overflow: 'hidden', marginBottom: '1.5rem' }}>
                                    <img ref={feature01Ref} src={url('/images/filefront/filefront_01.png')} alt="Find drawings instantly" className="imgs" style={{ width: '100%' }} />
                                </div>
                                <div style={{ textAlign: 'center' }}>
                                    <h3 style={{ fontSize: '1.4rem', fontWeight: 'bold', color: '#0044cc', margin: '0 0 1rem 0' }}>01 Find Drawings Instantly</h3>
                                    <p>AI analyzes drawing contents for search.<br></br>Access without confusion even with complex folders or naming.</p>
                                </div>
                            </div>
                        </div>
                        <div className="flexdiv" style={{ flex: '1', minWidth: '300px' }}>
                            <div>
                                <div ref={feature02ContainerRef} style={{ border: '1px solid #eee', borderRadius: '8px', overflow: 'hidden', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#ffffff' }}>
                                    <img src={url('/images/filefront/filefront_02.png')} alt="Link and manage information on drawings" className="imgs" style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                                </div>
                                <div style={{ textAlign: 'center' }}>
                                    <h3 style={{ fontSize: '1.4rem', fontWeight: 'bold', color: '#0044cc', margin: '0 0 1rem 0' }}>02 Link and Manage Information on Drawings</h3>
                                    <p>Add links to other drawings and notes on floor plans.<br></br>Manage drawings clearly and efficiently.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Section>

                <Section delay={0.35}>
                    <div className="flex" style={{ gap: '2rem' }}>
                        <div className="flexdiv" style={{ flex: '1', minWidth: '300px' }}>
                            <div>
                                <div ref={feature03ContainerRef} style={{ border: '1px solid #eee', borderRadius: '8px', overflow: 'hidden', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#ffffff' }}>
                                    <img src={url('/images/filefront/filefront_03.png')} alt="Automatically track drawing changes" className="imgs" style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                                </div>
                                <div style={{ textAlign: 'center' }}>
                                    <h3 style={{ fontSize: '1.4rem', fontWeight: 'bold', color: '#0044cc', margin: '0 0 1rem 0' }}>03 Automatically Track Drawing Changes</h3>
                                    <p>Automatically detect and notify drawing changes or additions.<br></br>Prevent mistakes from using outdated versions.</p>
                                </div>
                            </div>
                        </div>
                        <div className="flexdiv" style={{ flex: '1', minWidth: '300px' }}>
                            <div>
                                <div ref={feature04ContainerRef} style={{ border: '1px solid #eee', borderRadius: '8px', overflow: 'hidden', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#ffffff' }}>
                                    <img src={url('/images/filefront/filefront_04.png')} alt="Effectively utilize drawings as data assets" className="imgs" style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                                </div>
                                <div style={{ textAlign: 'center' }}>
                                    <h3 style={{ fontSize: '1.4rem', fontWeight: 'bold', color: '#0044cc', margin: '0 0 1rem 0' }}>04 Effectively Utilize Drawings as Data Assets</h3>
                                    <p>Structure drawing data and integrate with BIM and other management systems.<br></br>Accelerate the utilization of PDF drawing information.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Section>

                <div style={{ borderTop: '1px solid #eee', margin: '3rem 0' }} />

                <div id="contact" />
                <div
                    style={{
                        width: '100%',
                        height: '60px',
                    }}
                />
                <Section delay={0.5}>
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

export default Filefront;