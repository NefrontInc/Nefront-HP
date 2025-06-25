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
                        AI図面管理ツール Filefront
                    </Heading>
                    
                    <Paragraph>
                        <span className="exagsentence">
                            複雑なフォルダ構成やファイル名に頼らず、<br />
                            <strong>AIが図面の内容を解析</strong> して目的の情報を瞬時に検索できるシステム
                        </span>
                    </Paragraph>
                    
                </Section>
                
                <Section delay={0.3}>
                    <div className="flex" style={{ gap: '2rem' }}>
                        <div className="flexdiv" style={{ flex: '1', minWidth: '300px' }}>
                            <div>
                                <div style={{ border: '1px solid #eee', borderRadius: '8px', overflow: 'hidden', marginBottom: '1.5rem' }}>
                                    <img ref={feature01Ref} src={url('/images/filefront/filefront_01.png')} alt="必要な図面がすぐ見つかる" className="imgs" style={{ width: '100%' }} />
                                </div>
                                <div style={{ textAlign: 'center' }}>
                                    <h3 style={{ fontSize: '1.4rem', fontWeight: 'bold', color: '#0044cc', margin: '0 0 1rem 0' }}>01 必要な図面がすぐ見つかる</h3>
                                    <p>AIが図面内容を解析して検索。<br></br>複雑なフォルダや命名でも迷わずアクセス。</p>
                                </div>
                            </div>
                        </div>
                        <div className="flexdiv" style={{ flex: '1', minWidth: '300px' }}>
                            <div>
                                <div ref={feature02ContainerRef} style={{ border: '1px solid #eee', borderRadius: '8px', overflow: 'hidden', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#ffffff' }}>
                                    <img src={url('/images/filefront/filefront_02.png')} alt="情報を図面上で共有" className="imgs" style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                                </div>
                                <div style={{ textAlign: 'center' }}>
                                    <h3 style={{ fontSize: '1.4rem', fontWeight: 'bold', color: '#0044cc', margin: '0 0 1rem 0' }}>02 情報を図面上で紐付け管理</h3>
                                    <p>平面図上に他の図面へのリンクやメモを追加可能。<br></br>図面をわかりやすく管理できます。</p>
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
                                    <img src={url('/images/filefront/filefront_03.png')} alt="図面の変更点を自動で追跡" className="imgs" style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                                </div>
                                <div style={{ textAlign: 'center' }}>
                                    <h3 style={{ fontSize: '1.4rem', fontWeight: 'bold', color: '#0044cc', margin: '0 0 1rem 0' }}>03 図面の変更点を自動で追跡</h3>
                                    <p>図面の変更や追加を自動で検出・通知。<br></br>旧版の使用ミスを防ぎ、作業ミスを削減。</p>
                                </div>
                            </div>
                        </div>
                        <div className="flexdiv" style={{ flex: '1', minWidth: '300px' }}>
                            <div>
                                <div ref={feature04ContainerRef} style={{ border: '1px solid #eee', borderRadius: '8px', overflow: 'hidden', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#ffffff' }}>
                                    <img src={url('/images/filefront/filefront_04.png')} alt="図面を資産として有効活用" className="imgs" style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                                </div>
                                <div style={{ textAlign: 'center' }}>
                                    <h3 style={{ fontSize: '1.4rem', fontWeight: 'bold', color: '#0044cc', margin: '0 0 1rem 0' }}>04 図面をデータ資産として有効活用</h3>
                                    <p>図面データを構造化し、BIM等の管理システムと連携。<br></br>PDF化された図面情報の活用を加速します。</p>
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
                            お問い合わせはこちら
                        </a>
                    </Box>
                </Section>

            </Container>
        </Layout>
    );
};

export default Filefront;