import { url } from 'lib/img';
import React, { useState } from 'react';
import ReactGA from 'react-ga4';
import { Box, Container, Heading, SimpleGrid } from '@chakra-ui/react';
import Layout from '@/layouts/article';
import Paragraph from '@/paragraph';
import Section from '@/section';
import SubSection from '@/subsection';

ReactGA.initialize('G-FBQ0WYNGEZ');
ReactGA.send('pageview');

const Recruit = () => {
    const [activeTab, setActiveTab] = useState('engineer');
    
    return (
        <Layout>
            <Container maxW="1200px">
                <div style={{ width: '100%', height: '80px' }} />

                <Section delay={0.1}>
                    <Box style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <Heading as="h1" variant="section-title" style={{ textAlign: 'center', fontSize: '36px', marginBottom: '20px', color: '#0044cc' }}>
                            Recruit
                        </Heading>
                        <Paragraph>
                            「欲しい情報が欲しい時に目の前にある世界の実現」を目指し、AI・AR技術を用いた自社プロダクトの開発・事業推進に携わっていただきます。
                        </Paragraph>
                    </Box>
                </Section>

                <Section delay={0.2}>
                    <Box style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <Heading as="h2" variant="section-title" style={{ fontSize: '28px', marginBottom: '24px', color: '#0044cc' }}>
                            募集職種
                        </Heading>
                        <Box style={{ textAlign: 'center' }}>
                            <Paragraph>
                                大手ゼネコンや不動産デベロッパーとも協業し、研究開発と社会実装に精力的に取り組んでいます。
                                <br />
                                業務委託、パートタイム、学生インターンの方の採用を行っています。
                            </Paragraph>
                        </Box>

                        <Box style={{ marginTop: '2rem' }}>
                            <Box style={{ display: 'flex', marginBottom: '30px', borderBottom: '1px solid #e6e6e6', justifyContent: 'center' }}>
                                <button
                                    onClick={() => setActiveTab('engineer')}
                                    style={{
                                        flex: '1',
                                        maxWidth: '400px',
                                        padding: '15px 20px',
                                        border: 'none',
                                        background: 'none',
                                        fontSize: '18px',
                                        fontWeight: activeTab === 'engineer' ? 'bold' : 'normal',
                                        color: activeTab === 'engineer' ? '#0044cc' : '#666',
                                        borderBottom: activeTab === 'engineer' ? '3px solid #0044cc' : '3px solid transparent',
                                        cursor: 'pointer',
                                        transition: 'all 0.3s ease'
                                    }}
                                >
                                    エンジニア職
                                </button>
                                <button
                                    onClick={() => setActiveTab('pm')}
                                    style={{
                                        flex: '1',
                                        maxWidth: '400px',
                                        padding: '15px 20px',
                                        border: 'none',
                                        background: 'none',
                                        fontSize: '18px',
                                        fontWeight: activeTab === 'pm' ? 'bold' : 'normal',
                                        color: activeTab === 'pm' ? '#0044cc' : '#666',
                                        borderBottom: activeTab === 'pm' ? '3px solid #0044cc' : '3px solid transparent',
                                        cursor: 'pointer',
                                        transition: 'all 0.3s ease'
                                    }}
                                >
                                    プロジェクトマネージャー/事業開発職
                                </button>
                            </Box>
                            
                            {activeTab === 'engineer' && (
                                <Box style={{ fontSize: '16px', lineHeight: '1.8', textAlign: 'left' }}>
                                    <strong>▼具体的な業務内容</strong>
                                    <br />
                                    ・Webサービスのバックエンド・フロントエンド開発（Python、Flutter、GOなど）
                                    <br />
                                    ・画像認識・空間認識アルゴリズムの研究開発・実装
                                    <br />
                                    ・Flutterを用いたアプリケーション開発
                                    <br />
                                    ・Unityを用いたARアプリケーション開発
                                    <br />
                                    ・Azureを用いたクラウドインフラの設訨・構築
                                    <br />
                                    ・OpenSearchやElasticsearchを活用した検索基盤構築、パフォーマンス向上
                                    <br />
                                </Box>
                            )}
                            
                            {activeTab === 'pm' && (
                                <Box style={{ fontSize: '16px', lineHeight: '1.8', textAlign: 'left' }}>
                                    <strong>▼具体的な業務内容</strong>
                                    <br />
                                    ・自社プロダクトの新規機能の企画・要件定義
                                    <br />
                                    ・大手ゼネコン、デベロッパー等への課題ヒアリングとソリューション提案
                                    <br />
                                    ・市場調査、営業戦略の立案・実行
                                    <br />
                                    ・クライアントとの仕様調整、開発チームのタスク管理、進捗管理
                                    <br />
                                </Box>
                            )}
                        </Box>
                    </Box>
                </Section>

                <Section delay={0.3}>
                    <Box style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <Heading as="h2" variant="section-title" style={{ fontSize: '28px', marginBottom: '24px', color: '#0044cc' }}>
                            勤務条件
                        </Heading>
                        <Box style={{ fontSize: '16px', lineHeight: '1.8' }}>
                            <table style={{ width: '100%', borderCollapse: 'collapse', backgroundColor: '#f9f9f9' }}>
                                <tbody>
                                    <tr style={{ borderBottom: '1px solid #e6e6e6' }}>
                                        <td style={{ padding: '20px', fontWeight: 'bold', width: '40%', verticalAlign: 'top' }}>最低勤務継続期間</td>
                                        <td style={{ padding: '20px' }}>3ヶ月</td>
                                    </tr>
                                    <tr style={{ borderBottom: '1px solid #e6e6e6' }}>
                                        <td style={{ padding: '20px', fontWeight: 'bold', verticalAlign: 'top' }}>毎週最低勤務時間</td>
                                        <td style={{ padding: '20px' }}>12時間</td>
                                    </tr>
                                    <tr style={{ borderBottom: '1px solid #e6e6e6' }}>
                                        <td style={{ padding: '20px', fontWeight: 'bold', verticalAlign: 'top' }}>毎週最低勤務日数</td>
                                        <td style={{ padding: '20px' }}>2日</td>
                                    </tr>
                                    <tr style={{ borderBottom: '1px solid #e6e6e6' }}>
                                        <td style={{ padding: '20px', fontWeight: 'bold', verticalAlign: 'top' }}>勤務形態</td>
                                        <td style={{ padding: '20px' }}>フルリモート（必要に応じて都内で打ち合わせ、顧客訪問等あり）</td>
                                    </tr>
                                    <tr>
                                        <td style={{ padding: '20px', fontWeight: 'bold', verticalAlign: 'top' }}>時給</td>
                                        <td style={{ padding: '20px' }}>1500円〜5000円</td>
                                    </tr>
                                </tbody>
                            </table>
                        </Box>
                    </Box>
                </Section>

                <Section delay={0.4}>
                    <Box style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <Heading as="h2" variant="section-title" style={{ fontSize: '28px', marginBottom: '24px', color: '#0044cc' }}>
                            応募必須条件
                        </Heading>
                        <Box style={{ fontSize: '16px', lineHeight: '1.8' }}>
                            <strong>【共通】</strong>
                            <br />
                            ・株式会社Nefrontのビジョン「欲しい情報が欲しい時に目の前にある世界の実現」への共感
                            <br />
                            ・ITや最先端技術、建築・不動産業界の課題解決への強い興味・関心
                            <br />
                            ・新しい知識や技術を自律的に学び、実践できる学習意欲のある方
                            <br />
                            ・チームメンバーと円滑にコミュニケーションを取り、協力して業務を進める姿勢
                            <br />
                            ・週2日12時間以上稼働できる方
                            <br />
                            <br />
                            {activeTab === 'engineer' ? (
                                <>
                                    <strong>◼ エンジニア職</strong>
                                    <br />
                                    ・プログラミング言語を用いた開発経験（個人開発、研究、ハッカソンなど含む）
                                </>
                            ) : (
                                <>
                                    <strong>◼ プロジェクトマネージャー/事業開発職</strong>
                                    <br />
                                    ・自身で主体的にプロジェクトを企画・遂行した経験
                                </>
                            )}
                        </Box>
                    </Box>
                </Section>

                <Section delay={0.5}>
                    <Box style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <Heading as="h2" variant="section-title" style={{ fontSize: '28px', marginBottom: '24px', color: '#0044cc' }}>
                            応募歓迎条件
                        </Heading>
                        <Box style={{ fontSize: '16px', lineHeight: '1.8' }}>
                            {activeTab === 'engineer' ? (
                                <>
                                    <strong>【エンジニア職】</strong>
                                    <br />
                                    ・Git/GitHubを用いたチーム開発経験がある方
                                    <br />
                                    ・企業での開発実務経験のある方
                                    <br />
                                    ・週3日20時間以上稼働できる方
                                    <br />
                                    <br />
                                    <strong>◼ フロントエンド・ARアプリケーション系エンジニア職</strong>
                                    <br />
                                    ・スマホアプリやWebアプリの開発経験
                                    <br />
                                    ・Flutter, Unityでの開発経験
                                    <br />
                                    ・AR/MR/VRなどのXRアプリケーション開発経験
                                    <br />
                                    ・ROS（ロボット制御系）での開発経験
                                    <br />
                                    <br />
                                    <strong>◼ バックエンド系エンジニア職</strong>
                                    <br />
                                    ・Webアプリケーションのバックエンド開発経験（特にPython、GO）
                                    <br />
                                    ・Azure, AWS, GCPなどのクラウドインフラを活用した開発経験
                                    <br />
                                    ・RAGや検索システムの開発経験
                                    <br />
                                    ・OpenSearchやElasticsearchを活用した検索基盤の構築や運用の経験
                                    <br />
                                    ・AIシステムの開発経験
                                    <br />
                                    <br />
                                    <strong>◼ 機械学習（画像認識）系エンジニア職</strong>
                                    <br />
                                    ・AIモデル（特に画像認識関連）の研究や開発の経験
                                    <br />
                                    ・AIモデルを応用したアプリケーションの開発経験
                                    <br />
                                    ・自然言語処理系に関連した研究開発経験
                                    <br />
                                    ・ROS（ロボット制御系）、SLAM等に関連した研究・開発経験
                                    <br />
                                    <br />
                                    <strong>◼ 建築情報系エンジニア職</strong>
                                    <br />
                                    ・BIMやCADなどの利用経験
                                    <br />
                                    ・建築分野に関する専門知識
                                </>
                            ) : (
                                <>
                                    <strong>◼ プロジェクトマネージャー/事業開発職</strong>
                                    <br />
                                    ・プロダクトマネジメントやプロジェクトマネジメントの経験
                                    <br />
                                    ・事業企画・事業開発・新規事業立ち上げの経験
                                    <br />
                                    ・ITシステムの提案や開発に関する知見
                                    <br />
                                    ・建設業界もしくは不動産業界に関する知見や経験
                                    <br />
                                    ・営業・マーケティング・カスタマーサクセスの経験
                                </>
                            )}
                        </Box>
                    </Box>
                </Section>

                <Section delay={0.6}>
                    <Box style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <Heading as="h2" variant="section-title" style={{ fontSize: '28px', marginBottom: '24px', color: '#0044cc' }}>
                            選考フロー
                        </Heading>
                        <Box style={{ fontSize: '16px', lineHeight: '1.8' }}>
                        1. 書類フォーム提出
                        <br />
                        2. 面接（1〜2回）
                        <br />
                        <br />
                        ※エンジニア職は、必要に応じて模擬開発課題をお願いする場合があります
                        <br />
                        ※プロジェクトマネージャー職は、必要に応じて模擬提案課題をお願いする場合があります
                        <br />
                        ※カジュアル面談も大歓迎です
                        </Box>
                    </Box>
                </Section>

                <Section delay={0.7}>
                    <Box style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <Heading as="h2" variant="section-title" style={{ fontSize: '28px', marginBottom: '24px', color: '#0044cc' }}>
                            応募方法
                        </Heading>
                        <Box style={{ fontSize: '16px', lineHeight: '1.8', textAlign: 'center' }}>
                        選考やカジュアル面談へはこちらからご応募下さい。
                        <br />
                        <br />
                        <Box style={{ display: 'flex', flexDirection: 'column', gap: '40px', alignItems: 'center' }}>
                            <Box style={{ display: 'flex', gap: '60px', flexWrap: 'wrap', justifyContent: 'center' }}>
                                <Box style={{ textAlign: 'center' }}>
                                    <strong style={{ display: 'block', marginBottom: '20px', fontSize: '18px' }}>学生の方</strong>
                                    <Box className="table">
                                        <a
                                            href="https://forms.gle/AZvPqpVLH9YL9x1r7"
                                            target="_blank"
                                            rel="noreferrer noopener"
                                            className="contactform"
                                        >
                                            ご応募はこちら
                                        </a>
                                    </Box>
                                </Box>
                                
                                <Box style={{ textAlign: 'center' }}>
                                    <strong style={{ display: 'block', marginBottom: '20px', fontSize: '18px' }}>社会人・業務委託の方</strong>
                                    <Box className="table">
                                        <a
                                            href="https://forms.gle/SMZV7WaMnstK5Cvh9"
                                            target="_blank"
                                            rel="noreferrer noopener"
                                            className="contactform"
                                        >
                                            ご応募はこちら
                                        </a>
                                    </Box>
                                </Box>
                            </Box>
                            
                            <Box style={{ textAlign: 'center', marginTop: '40px' }}>
                                <Box style={{ borderTop: '1px solid #e6e6e6', paddingTop: '30px' }}>
                                    <strong style={{ display: 'block', marginBottom: '20px', fontSize: '18px' }}>採用に関するご質問（共通）</strong>
                                    <Box className="table">
                                        <a
                                            href="https://forms.gle/HJXsrsk5myVrmEqC6"
                                            target="_blank"
                                            rel="noreferrer noopener"
                                            className="contactform"
                                        >
                                            ご質問はこちら
                                        </a>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                        </Box>
                    </Box>
                </Section>
            </Container>
        </Layout>
    );
};

export default Recruit;