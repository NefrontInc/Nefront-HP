import { url } from 'lib/img';
import { getNewPosts } from 'lib/posts';
import dynamic from 'next/dynamic';
import Link from 'next/link';
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

const Particles = dynamic(() => import('components/particles'), {
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
                            AIやAR技術により、建物の情報をわかりやすく見える化します
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
                            - 屋内空間情報管理システム IndooAR -
                        </span>
                        <span className="exagsentence">
                            屋内空間に情報を紐付けて、空間的に情報を管理できるシステム
                        </span>
                    </Paragraph>
                    
                    <div className="flex" style={{ gap: '2rem', margin: '2rem 0 1rem 0' }}>
                        <div className="flexdiv" style={{ flex: '1', minWidth: '300px' }}>
                            <div style={{ border: '1px solid #eee', borderRadius: '8px', overflow: 'hidden', marginBottom: '1rem' }}>
                                <img ref={novareRef} src={url('/images/indooar/IndooAR_NOVARE_3.png')} alt="IndooAR NOVARE 3" className="imgs" style={{ width: '100%', height: 'auto' }} />
                            </div>
                            <div style={{ textAlign: 'center', marginBottom: '0.5rem' }}>
                                <p style={{ margin: '0', fontSize: '16px', color: '#333', fontWeight: '500' }}>画像認識や位置マーカーにより建物内の位置情報を特定。<br></br>現場で簡単に位置情報付きで作業を記録。</p>
                            </div>
                        </div>
                        <div className="flexdiv" style={{ flex: '1', minWidth: '300px' }}>
                            <div ref={adminContainerRef} style={{ border: '1px solid #eee', borderRadius: '8px', overflow: 'hidden', marginBottom: '1rem' }}>
                                <img src={url('/images/indooar/indooar_admin.png')} alt="IndooAR Admin" className="imgs" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
                            </div>
                            <div style={{ textAlign: 'center', marginBottom: '0.5rem' }}>
                                <p style={{ margin: '0', fontSize: '16px', color: '#333', fontWeight: '500' }}>位置情報付きの作業記録は管理画面で地図上で簡単に確認。<br></br>ARマニュアルも管理画面上で簡単に編集可能。</p>
                            </div>
                        </div>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
                        <Link href="/indooar" className="more">
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
                            <span>IndooARの詳細を見る</span>
                        </Link>
                    </div>

                    <div style={{ borderTop: '1px solid #eee', margin: '4rem 0 3rem 0' }} />

                    <Paragraph>
                        <span className="exagsentence" style={{ margin: '0 0 20px 0' }}>
                            - AI図面管理ツール Filefront -
                        </span>
                        <span className="exagsentence">
                            PDFの図面の中身まで簡単に検索できるシステム
                        </span>
                    </Paragraph>
                    
                    <div className="flex" style={{ gap: '2rem', margin: '2rem 0 1rem 0' }}>
                        <div className="flexdiv" style={{ flex: '1', minWidth: '300px' }}>
                            <div style={{ border: '1px solid #eee', borderRadius: '8px', overflow: 'hidden', marginBottom: '1rem' }}>
                                <img ref={filefrontRef} src={url('/images/filefront/filefront_01.png')} alt="Filefront AI解析" className="imgs" style={{ width: '100%', height: 'auto' }} />
                            </div>
                            <div style={{ textAlign: 'center', marginBottom: '0.5rem' }}>
                                <p style={{ margin: '0', fontSize: '16px', color: '#333', fontWeight: '500' }}>PDFの中身までOCRで解析して検索。<br></br>さらにページ毎にAIがタグ付けして条件検索も。</p>
                            </div>
                        </div>
                        <div className="flexdiv" style={{ flex: '1', minWidth: '300px' }}>
                            <div ref={filefront02ContainerRef} style={{ border: '1px solid #eee', borderRadius: '8px', overflow: 'hidden', marginBottom: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#ffffff' }}>
                                <img src={url('/images/filefront/filefront_02.png')} alt="Filefront 検索機能" className="imgs" style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                            </div>
                            <div style={{ textAlign: 'center', marginBottom: '0.5rem' }}>
                                <p style={{ margin: '0', fontSize: '16px', color: '#333', fontWeight: '500' }}>平面図に他の図面を紐付けて管理。書き込みも可能。</p>
                            </div>
                        </div>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
                        <Link href="/filefront" className="more">
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
                            <span>Filefrontの詳細を見る</span>
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
                        <GridItem title="今村翔太" nefposition="代表取締役 CEO" thumbnail={imamuu} personalSiteUrl="https://imamuus.com/">
                            <div style={{ textAlign: 'center', fontSize: '16px', lineHeight: '1.6' }}>
                                <br />
                                筑波大学情報科学類卒業後、東京大学大学院 暦本研究室へ進学。
                                <br />
                                屋内ARクラウドの開発・事業化の他、AIの活用やAR/VRヘッドマウントディスプレイ向け視線インタフェースの研究も行っている。
                                <br />
                                じげんグループの長期インターンにて、PMとして新規事業の立ち上げ等を担った後、イベント募集を起点としたSNSの開発・運営を経て、Nefrontの立ち上げへ。
                                <br />
                            </div>
                        </GridItem>
                        <GridItem title="逸見一喜" nefposition="執行役員 COO" thumbnail={hemmi} personalSiteUrl="https://itigo11111.com/">
                            <div style={{ textAlign: 'center', fontSize: '16px', lineHeight: '1.6' }}>
                                <br />
                                国立東京高専情報工学科＆同専攻科卒業後、筑波大学大学院に進学。
                                <br />
                                現在は筑波大学大学院
                                博士後期課程で経営工学を専攻しつつ、産業技術総合研究所
                                人工知能研究センター
                                社会知能研究チームにてAutoML（機械学習の自動化）の研究を行っている。
                                <br />
                                新しい技術を触るのがとにかく大好きな生粋のアイデアマン。
                                <br />
                            </div>
                        </GridItem>
                    </SimpleGrid>
                </Section>

                <div id="recruit" />
                <div
                    style={{
                        width: '100%',
                        height: '60px',
                    }}
                />
                <Section delay={0.5}>
                    <Heading as="h1" variant="section-title">
                        Recruit
                    </Heading>
                    <p style={{ textAlign: 'center', margin: '10px' }}>
                        Nefrontと一緒に、より良い未来を創造する仲間を募集しています
                    </p>
                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
                        <Link href="/recruit" className="more">
                            <svg width="300" height="62">
                                <linearGradient id="grad3">
                                    <stop offset="0%" stopColor="#3054d6" />
                                    <stop offset="100%" stopColor="#3054d6" />
                                </linearGradient>
                                <rect
                                    x="5"
                                    y="5"
                                    rx="25"
                                    fill="none"
                                    stroke="url(#grad3)"
                                    width="266"
                                    height="50"
                                ></rect>
                            </svg>
                            <span>採用情報はこちら</span>
                        </Link>
                    </div>
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
                        ・会社名：株式会社Nefront
                        <br />
                        ・住所： 東京都渋谷区道玄坂1丁目10番8号渋谷道玄坂東急ビル2F−C
                        <br />
                        ・代表者氏名：今村翔太
                        <br />
                        ・資本金：81万円（資本準備金を含む）
                        <br />
                        ・設立年月：2021年6月
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
                            お問い合わせはこちら
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
