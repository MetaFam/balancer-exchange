//@ts-ignore
import React from 'react';
import { appConfig } from 'configs';
import styled from 'styled-components';
import Wallet from '../Wallet';
const MetaGameLogo = require('../../assets/pngs/metagame.png');

const HeaderFrame = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    background-color: rgb(27, 13, 42);
`;

const HeaderElement = styled.div`
    margin: 1.25rem;
    display: flex;
    min-width: 0;
    display: flex;
    align-items: center;
`;

const Title = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    a {
        display: inline;
        font-size: 1rem;
        font-weight: 500;
        text-decoration: none;
        img {
            height: 32px;
            width: 32px;
        }
    }
`;

const AppName = styled.div`
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
    letter-spacing: 1px;
    color: var(--header-text);
    margin-left: 12px;
`;

const Link = styled.a`
    font-family: Roboto;
    margin-right: 24px;
    font-size: 15px;
    display: flex;
    align-items: center;
    color: var(--header-text);
    text-decoration: none;
    @media screen and (max-width: 767px) {
        display: none;
    }
`;

const CrossOver = styled.span`
    font-family: 'Trade Winds', cursive;
    font-size: 30px;
    line-height: 15px;
    margin-left: 13px;
    margin-right: 15px;
    color: white;
`;

const Header = () => {
    return (
        <HeaderFrame>
            <HeaderElement>
                <Title>
                    <img
                        width={100}
                        alt="MetaGame Logo"
                        src={MetaGameLogo}
                    ></img>
                    <CrossOver>x</CrossOver>
                    <a href="/">
                        <img src="pebbles-pad.svg" alt="pebbles" />
                    </a>
                    <AppName>{appConfig.name}</AppName>
                </Title>
            </HeaderElement>
            <HeaderElement>
                <Link
                    href="https://beta.pools.balancer.exchange/#/pool/0xea05a15dbce2eb543ffda16950e95b2bd2e40d0e/swaps"
                    target="_blank"
                >
                    Add Liquidity
                </Link>
                <Wallet />
            </HeaderElement>
        </HeaderFrame>
    );
};

export default Header;
