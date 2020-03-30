import { FC } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faAdjust, faBook } from '@fortawesome/free-solid-svg-icons';

const Layout: FC = (props) => {
    const router = useRouter();
    return (
        <Container>
            <Nav>
                <ul>
                    <li className="title">
                        <Link href={'/'}>
                            <a>
                                <h1>Matthew Badcock</h1>
                            </a>
                        </Link>
                    </li>
                    <li
                        className={`item ${
                            router.pathname === '/' ? 'active' : ''
                        }`}
                    >
                        <Link href={'/'}>
                            <a>
                                <FontAwesomeIcon icon={faHome} />
                                <h1 className="text"> Home</h1>
                            </a>
                        </Link>
                    </li>
                    <li
                        className={`item ${
                            router.pathname === '/about' ? 'active' : ''
                        }`}
                    >
                        <Link href={'/'}>
                            <a>
                                <FontAwesomeIcon icon={faBook} />
                                <h1 className="text"> About this project</h1>
                            </a>
                        </Link>
                    </li>
                </ul>
            </Nav>
            <Main>{props.children}</Main>
        </Container>
    );
};

export default Layout;

const Nav = styled.nav`
    width: 100%;
    background-color: ${(props) => props.theme.colors.color_one};
    color: ${(props) => props.theme.colors.background};
    box-shadow: ${(props) => props.theme.shadows[0]};
    ul {
        list-style-type: none;
        margin: auto;
        li {
            margin-left: 0.3rem;
        }
        .title {
            margin: auto;
            font-size: ${(props) => props.theme.fontSizes.heading[0]}pt;
            text-align: center;
        }
        .item {
            margin-bottom: 0.1rem;
            padding: 0.5rem 0.2rem;
            border-top-left-radius: 2px;
            border-bottom-left-radius: 2px;
            a {
                display: grid;
                grid-template-columns: 10% 90%;
                .text,
                svg {
                    margin: auto;
                }
                .text {
                    font-weight: ${(props) => props.theme.fontWeights.normal};
                    font-size: ${(props) =>
                        props.theme.fontSizes.subHeading[0]}pt;
                }
            }
            &:hover {
                background-color: ${(props) => props.theme.colors.highlight};
                .text {
                    color: ${(props) => props.theme.colors.background};
                }
            }
            &.active {
                svg {
                    color: ${(props) => props.theme.colors.color_three};
                }
            }
        }
    }
`;

const Main = styled.main`
    overflow-y: scroll;
    &::-webkit-scrollbar {
        width: 10px;
    }
    &::-webkit-scrollbar-thumb {
        background-color: ${(props) => props.theme.colors.highlight};
        border-radius: 2px;
    }
    > * {
        margin: 0.5rem 0 0.5rem 2rem;
    }
`;

const Container = styled.section`
    display: grid;
    grid-template-columns: 30% 70%;
    grid-template-rows: 100vh;
    @media (min-width: 1024px) {
        grid-template-columns: 204px calc(100% - 204px);
    }
`;
