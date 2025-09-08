import { url } from 'lib/img';
import React from 'react';
import ReactGA from 'react-ga4';
import { Box, Container, Heading, SimpleGrid } from '@chakra-ui/react';
import Layout from '@/layouts/article';
import Paragraph from '@/paragraph';
import Section from '@/section';
import SubSection from '@/subsection';

ReactGA.initialize('G-FBQ0WYNGEZ');
ReactGA.send('pageview');

const Recruit = () => {
    return (
        <Layout>
            <Container maxW="1200px">
                <div style={{ width: '100%', height: '60px' }} />

                <Section delay={0.1}>
                    <Heading as="h1" variant="section-title" style={{ textAlign: 'center' }}>
                        Recruit
                    </Heading>
                    <Paragraph>
                        「欲しい情報が欲しい時に目の前にある世界の実現」を目指し、AI・AR技術を用いた自社プロダクトの開発・事業推進に携わっていただきます。
                    </Paragraph>
                </Section>

                <Section delay={0.2}>
                    <Heading as="h2" variant="section-title">
                        仕事内容
                    </Heading>
                    <Box style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                        <Paragraph>
                            大手ゼネコンや不動産デベロッパーとも協業し、研究開発と社会実装に精力的に取り組んでいます。
                            <br />
                            業務委託、パートタイム、学生インターンの方の採用を行っています。
                        </Paragraph>
                    </Box>

                    <SubSection style={{ marginTop: '3rem' }}>
                        <Heading as="h3" size="md" mb={4} style={{ borderBottom: '1px solid #e6e6e6', paddingBottom: '10px' }}>
                            エンジニア職
                        </Heading>
                        <Box style={{ fontSize: '16px', lineHeight: '1.8', textAlign: 'left', maxWidth: '800px', margin: '0 auto' }}>
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
                    </SubSection>

                    <SubSection style={{ marginTop: '3rem' }}>
                        <Heading as="h3" size="md" mb={4} style={{ borderBottom: '1px solid #e6e6e6', paddingBottom: '10px' }}>
                            プロジェクトマネージャー職
                        </Heading>
                        <Box style={{ fontSize: '16px', lineHeight: '1.8', textAlign: 'left', maxWidth: '800px', margin: '0 auto' }}>
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
                    </SubSection>
                </Section>

                <Section delay={0.3}>
                    <Heading as="h2" variant="section-title">
                        勤務条件
                    </Heading>
                    <Box style={{ fontSize: '16px', lineHeight: '1.8', maxWidth: '800px', margin: '0 auto' }}>
                        <strong>最低勤務継続期間</strong>：3ヶ月
                        <br />
                        <strong>毎週最低勤務時間</strong>：12時間
                        <br />
                        <strong>毎週最低勤務日数</strong>：2日
                        <br />
                        <strong>勤務形態</strong>：フルリモート（必要に応じて都内で打ち合わせ、顧客訪問等あり）
                    </Box>
                </Section>

                <Section delay={0.4}>
                    <Heading as="h2" variant="section-title">
                        応募必須条件
                    </Heading>
                    <Box style={{ fontSize: '16px', lineHeight: '1.8', maxWidth: '800px', margin: '0 auto' }}>
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
                        <strong>◼ エンジニア職</strong>
                        <br />
                        ・プログラミング言語を用いた開発経験（個人開発、研究、ハッカソンなど含む）
                        <br />
                        <br />
                        <strong>◼ プロジェクトマネージャー職</strong>
                        <br />
                        ・自身で主体的にプロジェクトを企画・遂行した経験
                    </Box>
                </Section>

                <Section delay={0.5}>
                    <Heading as="h2" variant="section-title">
                        応募歓迎条件
                    </Heading>
                    <Box style={{ fontSize: '16px', lineHeight: '1.8', maxWidth: '800px', margin: '0 auto' }}>
                        <strong>【共通】</strong>
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
                        <br />
                        <br />
                        <strong>◼ プロジェクトマネージャー職</strong>
                        <br />
                        ・ITシステムの提案や開発に関する知見や経験
                        <br />
                        ・建設業界もしくは不動産業界に関する知見や経験
                        <br />
                        ・週3日20時間以上稼働できる方
                    </Box>
                </Section>

                <Section delay={0.6}>
                    <Heading as="h2" variant="section-title">
                        選考フロー
                    </Heading>
                    <Box style={{ fontSize: '16px', lineHeight: '1.8', maxWidth: '800px', margin: '0 auto' }}>
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
                </Section>

                <Section delay={0.7}>
                    <Heading as="h2" variant="section-title">
                        応募方法
                    </Heading>
                    <Box style={{ fontSize: '16px', lineHeight: '1.8', maxWidth: '800px', margin: '0 auto' }}>
                        ご応募の際は、履歴書・職務経歴書（エンジニアの方はGitHubアカウントもあれば）をご準備ください。
                        <br />
                        <br />
                        <a
                            className="contactform"
                            href="https://forms.gle/HJXsrsk5myVrmEqC6"
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            応募フォームはこちら
                        </a>
                        <br />
                        <br />
                        または、メールでのご応募：
                        <a href="mailto:info@nefront.com">
                            info@nefront.com
                        </a>
                    </Box>
                </Section>
            </Container>
        </Layout>
    );
};

export default Recruit;