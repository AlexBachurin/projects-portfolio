import React from 'react'
import { FaGithubSquare } from 'react-icons/fa';
import styled from 'styled-components';
const Navbar = () => {
    return (
        <Wrapper>
            <nav className='navbar'>
                <div className="nav-center">
                    <div className="nav-header">
                        <img className='nav-logo' src="https://res.cloudinary.com/dljezd6qv/image/upload/v1619820552/main-logo.png" alt="bacha-coding-logo" />
                    </div>
                    <ul className="nav-icons">
                        <li>
                            {/* eslint-disable-next-line */}
                            <a href="https://github.com/AlexBachurin" target='_blank'>
                                <FaGithubSquare />
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    .navbar {
        height: 5rem;
        display: grid;
        place-items: center;
        background: transparent;
    }
    .nav-center {
        width: 90vw;
        max-width: 1170px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .nav-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .nav-logo {
        height: 70px;
    }
    .nav-icons a {
        font-size: 1.5rem;
        margin: 0 0.25rem;
        color: var(--clr-primary);
    }


    @media screen and (min-width: 800px) {
        .navbar {
            background: transparent;
        }
        .nav-center {
            
            /* align-items: center;
            grid-template-columns: auto 1fr auto;
            -webkit-column-gap: 4rem;
            column-gap: 4rem; */
        }

    }
`

export default Navbar