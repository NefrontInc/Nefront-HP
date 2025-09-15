import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { forwardRef } from 'react';
import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { HamburgerIcon } from '@chakra-ui/icons';
import {
    Box,
    Container,
    Flex,
    Heading,
    IconButton,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Stack,
} from '@chakra-ui/react';
import Logo from '@/logo';

export const isRootPage = () => {
    const router = useRouter();
    const [isRoot, setIsRoot] = useState(false);

    useEffect(() => {
        if (router.isReady) {
            const currentPath = router.asPath;
            if (currentPath === '/' || currentPath.includes('/#') || currentPath.includes('/en')) {
                setIsRoot(true);
            } else {
                setIsRoot(false);
            }
        }
    }, [router.isReady, router.asPath]);
    return isRoot;
};

type Props = {
    href: string;
    path: string;
    style?: any;
    children: any;
};

const PageLinkItem = ({ href, children }: Props) => {
    return (
        <NextLink href={href}>
            <p className="textWrapper">
                <span className="pseudoElement pseudoElement__scale">{children}</span>
            </p>
        </NextLink>
    );
};

const LinkItem = ({ href, children }: Props) => {
    if (isRootPage() === true) {
        return (
            <Link activeClass="active" to={href} spy={true} smooth={true} duration={500}>
                <p className="textWrapper">
                    <span className="pseudoElement pseudoElement__scale">{children}</span>
                </p>
            </Link>
        );
    } else {
        return (
            <a href={`https://www.nefront.com#${href}`}>
                <p className="textWrapper">
                    <span className="pseudoElement pseudoElement__scale">{children}</span>
                </p>
            </a>
        );
    }
};

const ContactLinkItem = ({ href, children }: Props) => {
    return (
        <a className="hovernefro" href={href} target="_blank" rel="noreferrer noopener">
            {children}
        </a>
    );
};

const MenuLink = forwardRef<HTMLAnchorElement, React.AnchorHTMLAttributes<HTMLAnchorElement>>(
    (props, ref) => (
        <a href={props.href} target="_blank" rel="noreferrer noopener" {...props} ref={ref} />
    )
);

const HambItem = ({ href, path, children, ...props }: Props) => {
    if (isRootPage() === true) {
        return (
            <Link activeClass="active" to={href} spy={true} smooth={true} duration={500} {...props}>
                {children}
            </Link>
        );
    } else {
        return (
            <NextLink href={`https://nefront.com#${href}`} {...props}>
                {children}
            </NextLink>
        );
    }
};

const Navbar = (props: any) => {
    const { path } = props;

    return (
        <Box
            position="fixed"
            as="nav"
            w="100%"
            h="50px"
            bg="#ffffff40"
            css={{ backdropFilter: 'blur(10px)' }}
            zIndex={2}
            {...props}
        >
            <Container display="flex" p={2} maxW="9999px">
                <Flex align="center" mr={5}>
                    <Heading as="h1" size="lg" letterSpacing={'tighter'}>
                        <Logo />
                    </Heading>
                </Flex>
                <Stack
                    direction={{ base: 'column', lg: 'row' }}
                    display={{ base: 'none', lg: 'flex' }}
                    width={{ base: 'full', lg: 'auto' }}
                    alignItems="center"
                    flexGrow={1}
                    mt={{ base: 4, lg: 0 }}
                    className="navi"
                    spacing={10}
                >
                    <LinkItem href="about" path={path}>
                        About
                    </LinkItem>
                    <LinkItem href="product" path={path}>
                        Product
                    </LinkItem>
                    <LinkItem href="news" path={path}>
                        News
                    </LinkItem>
                    <LinkItem href="members" path={path}>
                        Members
                    </LinkItem>
                    <LinkItem href="company" path={path}>
                        Company
                    </LinkItem>
                    <PageLinkItem href="/recruit" path={path}>
                        Recruit
                    </PageLinkItem>
                    <ContactLinkItem
                        href="https://forms.gle/HJXsrsk5myVrmEqC6"
                        path={path}
                        style={{ borderRadius: '10px' }}
                    >
                        Contact
                    </ContactLinkItem>
                </Stack>
                {/*@ts-ignore*/}
                <Box flex={1} align="right">
                    <Box ml={2} display={{ base: 'inline-block', lg: 'none' }}>
                        <Menu isLazy id="navbar-menu">
                            <MenuButton
                                as={IconButton}
                                icon={<HamburgerIcon />}
                                variant="outline"
                                aria-label="Options"
                                colorScheme="black"
                            />
                            <MenuList>
                                <MenuItem as={HambItem} href="about">
                                    About
                                </MenuItem>
                                <MenuItem as={HambItem} href="product">
                                    Product
                                </MenuItem>
                                <MenuItem as={HambItem} href="news">
                                    News
                                </MenuItem>
                                <MenuItem as={HambItem} href="members">
                                    Members
                                </MenuItem>
                                <MenuItem as={HambItem} href="company">
                                    Company
                                </MenuItem>
                                <MenuItem as={NextLink} href="/recruit">
                                    Recruit
                                </MenuItem>
                                <MenuItem as={MenuLink} href="https://forms.gle/HJXsrsk5myVrmEqC6">
                                    Contact
                                </MenuItem>
                            </MenuList>
                        </Menu>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default Navbar;
