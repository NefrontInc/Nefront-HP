import { url } from 'lib/img';
import React from 'react';
import Head from 'next/head';
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
            <Head>
                <title>IndooAR - 屋内空間情報管理システム | Nefront Inc.</title>
                <meta name="description" content="屋内空間に情報を紐付けて、空間的に情報を管理できるシステム。画像認識や位置マーカーにより建物内の位置情報を特定し、現場で簡単に位置情報付きで作業を記録。" />
                <meta property="og:title" content="IndooAR - 屋内空間情報管理システム | Nefront Inc." />
                <meta property="og:description" content="屋内空間に情報を紐付けて、空間的に情報を管理できるシステム。画像認識や位置マーカーにより建物内の位置情報を特定し、現場で簡単に位置情報付きで作業を記録。" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.nefront.com/indooar" />
                <meta property="og:locale" content="ja_JP" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="IndooAR - 屋内空間情報管理システム | Nefront Inc." />
                <meta name="twitter:description" content="屋内空間に情報を紐付けて、空間的に情報を管理できるシステム。画像認識や位置マーカーにより建物内の位置情報を特定し、現場で簡単に位置情報付きで作業を記録。" />
            </Head>
            <Container maxW="1200px">
                <div
                    style={{
                        width: '100%',
                        height: '60px',
                    }}
                />
                
                <Section delay={0.1}>
                    <Heading as="h1" variant="section-title">
                        空間情報管理システム IndooAR
                    </Heading>
                    
                    <Paragraph>
                        <span className="exagsentence">
                            屋内空間に情報を紐付けて整理し<br />
                            <strong>簡単</strong> かつ <strong>空間的に</strong> 情報を管理できるシステム
                        </span>
                    </Paragraph>
                    <div style={{ margin: '2rem 0' }}>
                        <img
                            src={url('/images/indooar/indooar_about.png')}
                            style={{ width: '100%', maxWidth: '800px', display: 'block', margin: 'auto' }}
                            alt="IndooAR システム構成図"
                            className="imgs"
                        />
                    </div>
                    
                </Section>

                <div style={{ borderTop: '1px solid #eee', margin: '3rem 0' }} />

                <Section delay={0.2}>
                    <Heading as="h1" variant="section-title">
                        IndooARが提供する6つのソリューション
                    </Heading>
                    <Paragraph>
                        <span className="exagsentence">
                            場所に紐付くARマニュアルとしての利用や、<br></br>空間情報付きでの点検報告やコミュニケーションが可能
                        </span>
                    </Paragraph>
                </Section>

                <Section delay={0.3}>
                    <Subsection style={{ fontSize: '1.5rem', textAlign: 'center', marginBottom: '2rem' }}>
                        点検
                    </Subsection>
                    <div className="flex" style={{ gap: '2rem' }}>
                        <div className="flexdiv" style={{ flex: '1', minWidth: '300px' }}>
                            <div>
                                <div style={{ border: '1px solid #eee', borderRadius: '8px', overflow: 'hidden', marginBottom: '1.5rem' }}>
                                    <img src={url('/images/indooar/indooar_01.png')} alt="点検箇所の確認" className="imgs" style={{ width: '100%' }} />
                                </div>
                                <div style={{ textAlign: 'center' }}>
                                    <h3 style={{ fontSize: '1.4rem', fontWeight: 'bold', color: '#0044cc', margin: '0 0 1rem 0' }}>01 点検箇所の確認</h3>
                                    <p>点検箇所をフロアマップ上や現実空間への重ね合わせで確認</p>
                                </div>
                            </div>
                        </div>
                        <div className="flexdiv" style={{ flex: '1', minWidth: '300px' }}>
                            <div>
                                <div style={{ border: '1px solid #eee', borderRadius: '8px', overflow: 'hidden', marginBottom: '1.5rem' }}>
                                    <img src={url('/images/indooar/indooar_02.png')} alt="点検方法の確認" className="imgs" style={{ width: '100%' }} />
                                </div>
                                <div style={{ textAlign: 'center' }}>
                                    <h3 style={{ fontSize: '1.4rem', fontWeight: 'bold', color: '#0044cc', margin: '0 0 1rem 0' }}>02 点検方法の確認</h3>
                                    <p>点検箇所に紐付けられた文書や動画ファイルを表示</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Section>

                <div style={{ borderTop: '1px solid #eee', margin: '3rem 0' }} />

                <Section delay={0.35}>
                    <Subsection style={{ fontSize: '1.5rem', textAlign: 'center', marginBottom: '2rem' }}>
                        報告
                    </Subsection>
                    <div className="flex" style={{ gap: '2rem' }}>
                        <div className="flexdiv" style={{ flex: '1', minWidth: '300px' }}>
                            <div>
                                <div style={{ border: '1px solid #eee', borderRadius: '8px', overflow: 'hidden', marginBottom: '1.5rem' }}>
                                    <img src={url('/images/indooar/indooar_03.png')} alt="点検報告" className="imgs" style={{ width: '100%' }} />
                                </div>
                                <div style={{ textAlign: 'center' }}>
                                    <h3 style={{ fontSize: '1.4rem', fontWeight: 'bold', color: '#0044cc', margin: '0 0 1rem 0' }}>03 点検報告</h3>
                                    <p>アプリ上から直感的に点検の報告を実施</p>
                                </div>
                            </div>
                        </div>
                        <div className="flexdiv" style={{ flex: '1', minWidth: '300px' }}>
                            <div>
                                <div style={{ border: '1px solid #eee', borderRadius: '8px', overflow: 'hidden', marginBottom: '1.5rem' }}>
                                    <img src={url('/images/indooar/indooar_04.png')} alt="報告内容の確認" className="imgs" style={{ width: '100%' }} />
                                </div>
                                <div style={{ textAlign: 'center' }}>
                                    <h3 style={{ fontSize: '1.4rem', fontWeight: 'bold', color: '#0044cc', margin: '0 0 1rem 0' }}>04 報告内容の確認</h3>
                                    <p>担当者がフロアマップ上で点検内容を確認</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Section>

                <div style={{ borderTop: '1px solid #eee', margin: '3rem 0' }} />

                <Section delay={0.4}>
                    <Subsection style={{ fontSize: '1.5rem', textAlign: 'center', marginBottom: '2rem' }}>
                        修繕
                    </Subsection>
                    <div className="flex" style={{ gap: '2rem' }}>
                        <div className="flexdiv" style={{ flex: '1', minWidth: '300px' }}>
                            <div>
                                <div style={{ border: '1px solid #eee', borderRadius: '8px', overflow: 'hidden', marginBottom: '1.5rem' }}>
                                    <img src={url('/images/indooar/indooar_05.png')} alt="修繕内容の検討" className="imgs" style={{ width: '100%' }} />
                                </div>
                                <div style={{ textAlign: 'center' }}>
                                    <h3 style={{ fontSize: '1.4rem', fontWeight: 'bold', color: '#0044cc', margin: '0 0 1rem 0' }}>05 修繕内容の検討</h3>
                                    <p>報告箇所ごとのチャットルームで修繕内容を検討</p>
                                </div>
                            </div>
                        </div>
                        <div className="flexdiv" style={{ flex: '1', minWidth: '300px' }}>
                            <div>
                                <div style={{ border: '1px solid #eee', borderRadius: '8px', overflow: 'hidden', marginBottom: '1.5rem' }}>
                                    <img src={url('/images/indooar/indooar_06.png')} alt="修繕箇所の確認" className="imgs" style={{ width: '100%' }} />
                                </div>
                                <div style={{ textAlign: 'center' }}>
                                    <h3 style={{ fontSize: '1.4rem', fontWeight: 'bold', color: '#0044cc', margin: '0 0 1rem 0' }}>06 修繕箇所の確認</h3>
                                    <p>修繕箇所をフロアマップ上や現実空間への重ね合わせで確認</p>
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

export default IndooAR;