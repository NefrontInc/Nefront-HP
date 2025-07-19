import { url } from 'lib/img';
import React from 'react';
import ReactGA from 'react-ga4';
import { Box, Container, Heading } from '@chakra-ui/react';
import Layout from '@/layouts/article';
import Paragraph from '@/paragraph';
import Section from '@/section';
import Subsection from '@/subsection';

ReactGA.initialize('G-FBQ0WYNGEZ');
ReactGA.send('pageview');

const IndooAR = () => {
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
                        Spatial Information Management System IndooAR
                    </Heading>
                    
                    <Paragraph>
                        <span className="exagsentence">
                            Link information to indoor spaces for organization<br />
                            A system that enables <strong>easy</strong> and <strong>spatial</strong> information management
                        </span>
                    </Paragraph>
                    <div style={{ margin: '2rem 0' }}>
                        <img
                            src={url('/images/indooar/indooar_about.png')}
                            style={{ width: '100%', maxWidth: '800px', display: 'block', margin: 'auto' }}
                            alt="IndooAR System Architecture"
                            className="imgs"
                        />
                    </div>
                    
                </Section>

                <div style={{ borderTop: '1px solid #eee', margin: '3rem 0' }} />

                <Section delay={0.2}>
                    <Heading as="h1" variant="section-title">
                        Six Solutions Provided by IndooAR
                    </Heading>
                    <Paragraph>
                        <span className="exagsentence">
                            Use as location-based AR manuals,<br></br>inspection reports and communication with spatial information
                        </span>
                    </Paragraph>
                </Section>

                <Section delay={0.3}>
                    <Subsection style={{ fontSize: '1.5rem', textAlign: 'center', marginBottom: '2rem' }}>
                        Inspection
                    </Subsection>
                    <div className="flex" style={{ gap: '2rem' }}>
                        <div className="flexdiv" style={{ flex: '1', minWidth: '300px' }}>
                            <div>
                                <div style={{ border: '1px solid #eee', borderRadius: '8px', overflow: 'hidden', marginBottom: '1.5rem' }}>
                                    <img src={url('/images/indooar/indooar_01.png')} alt="Confirm inspection points" className="imgs" style={{ width: '100%' }} />
                                </div>
                                <div style={{ textAlign: 'center' }}>
                                    <h3 style={{ fontSize: '1.4rem', fontWeight: 'bold', color: '#0044cc', margin: '0 0 1rem 0' }}>01 Confirm Inspection Points</h3>
                                    <p>Check inspection points on floor maps and overlay them on real space</p>
                                </div>
                            </div>
                        </div>
                        <div className="flexdiv" style={{ flex: '1', minWidth: '300px' }}>
                            <div>
                                <div style={{ border: '1px solid #eee', borderRadius: '8px', overflow: 'hidden', marginBottom: '1.5rem' }}>
                                    <img src={url('/images/indooar/indooar_02.png')} alt="Check inspection methods" className="imgs" style={{ width: '100%' }} />
                                </div>
                                <div style={{ textAlign: 'center' }}>
                                    <h3 style={{ fontSize: '1.4rem', fontWeight: 'bold', color: '#0044cc', margin: '0 0 1rem 0' }}>02 Check Inspection Methods</h3>
                                    <p>Display documents and video files linked to inspection points</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Section>

                <div style={{ borderTop: '1px solid #eee', margin: '3rem 0' }} />

                <Section delay={0.35}>
                    <Subsection style={{ fontSize: '1.5rem', textAlign: 'center', marginBottom: '2rem' }}>
                        Reporting
                    </Subsection>
                    <div className="flex" style={{ gap: '2rem' }}>
                        <div className="flexdiv" style={{ flex: '1', minWidth: '300px' }}>
                            <div>
                                <div style={{ border: '1px solid #eee', borderRadius: '8px', overflow: 'hidden', marginBottom: '1.5rem' }}>
                                    <img src={url('/images/indooar/indooar_03.png')} alt="Inspection report" className="imgs" style={{ width: '100%' }} />
                                </div>
                                <div style={{ textAlign: 'center' }}>
                                    <h3 style={{ fontSize: '1.4rem', fontWeight: 'bold', color: '#0044cc', margin: '0 0 1rem 0' }}>03 Inspection Report</h3>
                                    <p>Submit inspection reports intuitively from the app</p>
                                </div>
                            </div>
                        </div>
                        <div className="flexdiv" style={{ flex: '1', minWidth: '300px' }}>
                            <div>
                                <div style={{ border: '1px solid #eee', borderRadius: '8px', overflow: 'hidden', marginBottom: '1.5rem' }}>
                                    <img src={url('/images/indooar/indooar_04.png')} alt="Check report contents" className="imgs" style={{ width: '100%' }} />
                                </div>
                                <div style={{ textAlign: 'center' }}>
                                    <h3 style={{ fontSize: '1.4rem', fontWeight: 'bold', color: '#0044cc', margin: '0 0 1rem 0' }}>04 Check Report Contents</h3>
                                    <p>Managers can check inspection contents on floor maps</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Section>

                <div style={{ borderTop: '1px solid #eee', margin: '3rem 0' }} />

                <Section delay={0.4}>
                    <Subsection style={{ fontSize: '1.5rem', textAlign: 'center', marginBottom: '2rem' }}>
                        Repair
                    </Subsection>
                    <div className="flex" style={{ gap: '2rem' }}>
                        <div className="flexdiv" style={{ flex: '1', minWidth: '300px' }}>
                            <div>
                                <div style={{ border: '1px solid #eee', borderRadius: '8px', overflow: 'hidden', marginBottom: '1.5rem' }}>
                                    <img src={url('/images/indooar/indooar_05.png')} alt="Discuss repair details" className="imgs" style={{ width: '100%' }} />
                                </div>
                                <div style={{ textAlign: 'center' }}>
                                    <h3 style={{ fontSize: '1.4rem', fontWeight: 'bold', color: '#0044cc', margin: '0 0 1rem 0' }}>05 Discuss Repair Details</h3>
                                    <p>Discuss repair details in chat rooms for each reported location</p>
                                </div>
                            </div>
                        </div>
                        <div className="flexdiv" style={{ flex: '1', minWidth: '300px' }}>
                            <div>
                                <div style={{ border: '1px solid #eee', borderRadius: '8px', overflow: 'hidden', marginBottom: '1.5rem' }}>
                                    <img src={url('/images/indooar/indooar_06.png')} alt="Confirm repair locations" className="imgs" style={{ width: '100%' }} />
                                </div>
                                <div style={{ textAlign: 'center' }}>
                                    <h3 style={{ fontSize: '1.4rem', fontWeight: 'bold', color: '#0044cc', margin: '0 0 1rem 0' }}>06 Confirm Repair Locations</h3>
                                    <p>Check repair locations on floor maps and overlay them on real space</p>
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

export default IndooAR;