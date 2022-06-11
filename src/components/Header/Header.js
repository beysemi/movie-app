import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styled , {keyframes} from 'styled-components';

const HeaderWrapper = styled.header`
    max-width: 1320px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 12px;
`;
const BrandWrapper = styled.div`
    background-color: transparent;
`;
const Navigation = styled.nav`
    display:flex;
`;
const NavigationList = styled.ul`
    display: flex;
    align-items: center;
    list-style-type: none;
`;
const NavigationItem = styled.li`
    padding: 12px 16px;
    & + & {
        margin-left: 16px;
    }
`;

const NavigationLink = styled.a`
    font-size: 16px;
    line-height: 24px;
    cursor: pointer;
    color: ${({theme}) => theme.header.linkColor};
    &:hover {
        color: ${({theme}) => theme.header.linkHoverColor};
    }
`;



const Header = () => {
    return (
        <>
            <HeaderWrapper>
                <BrandWrapper>
                    <Image src="/logo.svg" alt="logo" width={40} height={40}/>
                </BrandWrapper>
                <Navigation>
                    <NavigationList>
                        <NavigationItem>
                            <Link href="/movies">
                                <NavigationLink>Movies</NavigationLink>
                            </Link>
                        </NavigationItem>
                        <NavigationItem>
                            <Link href="/tv-shows">
                                <NavigationLink>TV Shows</NavigationLink>
                            </Link>
                        </NavigationItem>
                        <NavigationItem>
                            <Link href="/report">
                                <NavigationLink>Suggest me</NavigationLink>
                            </Link>
                        </NavigationItem>
                    </NavigationList>
                </Navigation>
            </HeaderWrapper> 
        </>
    );
}

export default Header;
