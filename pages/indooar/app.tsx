import React, { useEffect } from 'react';
import ReactGA from 'react-ga4';
import { Container, Heading, Box, Button, Text, VStack } from '@chakra-ui/react';
import Layout from '@/layouts/article';
import Section from '@/section';
import { FaApple, FaAndroid } from 'react-icons/fa';

ReactGA.initialize('G-FBQ0WYNGEZ');
ReactGA.send('pageview');

const IndooARApp = () => {
    useEffect(() => {
        const userAgent = navigator.userAgent.toLowerCase();
        const isIOS = /iphone|ipad|ipod/.test(userAgent) || 
                      (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
        const isAndroid = /android/.test(userAgent);

        if (isIOS) {
            window.location.href = 'https://testflight.apple.com/join/vf2gr3cN';
        } else if (isAndroid) {
            window.location.href = 'https://play.google.com/store/apps/details?id=com.Nefront.IndooAR';
        }
    }, []);

    return (
        <Layout>
            <Container maxW="1200px">
                <div style={{ width: '100%', height: '60px' }} />
                
                <Section delay={0.1}>
                    <VStack spacing={8} align="center">
                        <Heading 
                            as="h1" 
                            variant="section-title"
                            color="#0044cc"
                            textAlign="center"
                        >
                            IndooAR アプリをダウンロード
                        </Heading>
                        
                        <Text textAlign="center" fontSize="lg" mb={4}>
                            お使いのデバイスに合わせてダウンロードしてください
                        </Text>

                        <VStack spacing={4} width="100%" maxW="400px">
                            <Button
                                as="a"
                                href="https://testflight.apple.com/join/vf2gr3cN"
                                target="_blank"
                                rel="noopener noreferrer"
                                width="100%"
                                height="60px"
                                bg="#000"
                                color="white"
                                _hover={{ bg: '#333' }}
                                leftIcon={<FaApple size={24} />}
                                fontSize="lg"
                                borderRadius="12px"
                            >
                                iOSの方はこちら
                            </Button>

                            <Button
                                as="a"
                                href="https://play.google.com/store/apps/details?id=com.Nefront.IndooAR"
                                target="_blank"
                                rel="noopener noreferrer"
                                width="100%"
                                height="60px"
                                bg="#3ddc84"
                                color="white"
                                _hover={{ bg: '#2fb66a' }}
                                leftIcon={<FaAndroid size={24} />}
                                fontSize="lg"
                                borderRadius="12px"
                            >
                                Androidの方はこちら
                            </Button>

                            <Box width="100%" pt={4} borderTop="1px solid #e0e0e0">
                                <Button
                                    as="a"
                                    href="/indooar"
                                    width="100%"
                                    height="50px"
                                    variant="outline"
                                    borderColor="#0044cc"
                                    color="#0044cc"
                                    _hover={{ bg: '#0044cc', color: 'white' }}
                                    fontSize="md"
                                    borderRadius="8px"
                                >
                                    製品紹介はこちら
                                </Button>
                            </Box>
                        </VStack>

                        <Text fontSize="sm" color="gray.600" textAlign="center" mt={8}>
                            ※ iOSアプリは現在TestFlight版での提供となります
                        </Text>
                    </VStack>
                </Section>
            </Container>
        </Layout>
    );
};

export default IndooARApp;