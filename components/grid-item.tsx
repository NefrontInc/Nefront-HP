import { url } from 'lib/img';
import { Box, LinkBox, Text } from '@chakra-ui/react';
import { Global } from '@emotion/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';

type Props = {
    children: any;
    title: string;
    nefposition: string;
    thumbnail: string;
    personalSiteUrl?: string;
};

export const GridItem = ({ children, title, nefposition, thumbnail, personalSiteUrl }: Props) => (
    <Box w="100%">
        <LinkBox>
            <img src={url(thumbnail)} alt={title} className="grid-item-thumbnail" />
            <Box position="relative" textAlign="center">
                <Text fontSize={25}>
                    {title}
                </Text>
                {personalSiteUrl && (
                    <Box 
                        position="absolute" 
                        top="50%" 
                        left="50%" 
                        transform="translateY(calc(-50% + 0.2em))"
                        marginLeft={`calc(${title.length * 0.3}em + 1em + 20px)`}
                    >
                        <a 
                            href={personalSiteUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            style={{ 
                                display: 'inline-flex', 
                                alignItems: 'center'
                            }}
                        >
                            <ExternalLinkIcon color="blue.500" boxSize={5} />
                        </a>
                    </Box>
                )}
            </Box>
            <Text fontSize={18} textAlign="center" color="gray">
                {nefposition}
            </Text>
            <Text fontSize={14}>{children}</Text>
        </LinkBox>
    </Box>
);

export const GridItemStyle = () => (
    <Global
        styles={`
      .grid-item-thumbnail {
        border-radius: 50%;
        width:  180px;
        height: 180px;
        margin:auto;
        display:flex;
      }
    `}
    />
);
