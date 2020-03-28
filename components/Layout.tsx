import { FC } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faAdjust, faBook } from '@fortawesome/free-solid-svg-icons';

const Layout: FC = (props) => {
    const router = useRouter();
    return (
        <>
            <Nav>
                <ul>
                    <li className="title">
                        <Link href={'/'}>
                            <a>
                                <FontAwesomeIcon icon={faAdjust} />
                                <span className="text">Example App</span>
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
                                <span className="text"> Home</span>
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
                                <span className="text"> Other</span>
                            </a>
                        </Link>
                    </li>
                </ul>
            </Nav>
            <Main>{props.children}</Main>
        </>
    );
};

export default Layout;

const Nav = styled.nav`
    width: 5rem;
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.color};
    height: 100vh;
    float: left;
    //transition: all 2000ms ease;
    &:hover {
        width: 15rem;
        ul {
            li {
                a {
                    justify-content: space-between;
                    .text {
                        display: block;
                    }
                }
            }
        }
    }
    ul {
        list-style-type: none;
        padding: 0.5rem;
        height: 32px;
        li {
            &.title {
                font-size: 1.2rem;
                margin-bottom: 2rem;
                color: ${(props) => props.theme.colors.color_alt};
            }
            &.item {
                padding: 0.5rem 0.3rem 0.5rem 0.2rem;
                cursor: pointer;
                margin-bottom: 0.5rem;
                border-radius: 2px;
                .text {
                    display: none;
                }
                &:hover {
                    background-color: ${(props) =>
                        props.theme.colors.background_alt};
                }
                &.active {
                    background-color: ${(props) =>
                        props.theme.colors.background_alt};
                }
            }
            a {
                display: flex;
                align-items: center;
                justify-content: center;
                svg {
                    width: 2rem;
                }
                .text {
                    display: none;
                }
            }
        }
    }
`;

const Main = styled.main`
    float: right;
`;
