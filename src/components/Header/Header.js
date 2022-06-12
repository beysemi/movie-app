import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styled, { keyframes } from 'styled-components';
import { up } from 'styled-breakpoints';


const HeaderWrapper = styled.header`
    position: relative;
    max-width: 1320px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 12px;
`;
const BrandWrapper = styled.div`
    background-color: transparent;
    position: relative;
    z-index: 4;
`;
const Navigation = styled.nav`
        position:fixed;
        inset: 0;
        z-index: 3;
        background: rgba(0,0,0,0.65);
        backdrop-filter: blur(8px);
        opacity: 0;
        display: flex;
        justify-content: center;
        transition: all 0.5s;
        ul{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: 100%;
        }
    ${up('md')} {
        display: flex;
        background: none;
        backdrop-filter: none;
        opacity: 1;
        position: static;
        ul{
            flex-direction: row;
        }
    }
    ${({ active }) => active && `
        opacity: 1;
        
    `}
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
    color: ${({ theme }) => theme.header.linkColor};
    &:hover {
        color: ${({ theme }) => theme.header.linkHoverColor};
    }
`;
const NavigationToggle = styled.button`
    position: relative;
    z-index: 4;
    background: transparent;
    outline: none;
    border: 0;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    width: 40px;
    height: 40px;
    ${up('md')} {
        display: none;
    }

    span{
        width:40px;
        display: block;
        height: 5px;
        background: white;
        border-radius: 5px;
        margin: 3px 0;
        transform-origin: left;
        transition: all 0.5s;
    }

    ${({ active }) => active && `
        span:nth-child(1){
            transform: rotate(45deg)
        }
        span:nth-child(2){
            opacity: 0;
        }
        span:nth-child(3){
            transform: rotate(-45deg);
        }
    `}


`;



const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleToggle = () => {
        setIsOpen(!isOpen);
        document.querySelector('body').classList.toggle('no-scroll');

    }
    return (
        <>
            <HeaderWrapper>
                <BrandWrapper>
                    <Image src="/logo.svg" alt="logo" width={40} height={40} />
                </BrandWrapper>
                <Navigation active={isOpen}>
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
                <NavigationToggle onClick={() => handleToggle()} active={isOpen}>
                    <span></span>
                    <span></span>
                    <span></span>
                </NavigationToggle>
            </HeaderWrapper>
        </>
    );
}

export default Header;
