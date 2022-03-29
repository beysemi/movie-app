import React from 'react';
import {Image} from 'next/image';
import styled from 'styled-components';
// import {ArrowRight} from '../Icons';

const HeaderWrapper = styled.header`
    padding:16px 120px;
`;
const Brand = styled.div`
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
    font-size: 16px;
    line-height: 24px;
    color: ${props => props.theme.colors.gray200};
    & + & {
        margin-left: 16px;
    }
`;


const Header = () => {
    return (
        <>
            <HeaderWrapper>
                <Brand>
                    <Image src="/logo.svg" alt="logo"/>
                </Brand>
                <Navigation>
                    <NavigationList>
                        <NavigationItem>Movies</NavigationItem>
                        <NavigationItem>TV Shows</NavigationItem>
                        <NavigationItem>Suggest me  </NavigationItem>
                    </NavigationList>
                </Navigation>
            </HeaderWrapper> 
        </>
    );
}

export default Header;
