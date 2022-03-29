import React from 'react'
import styled from 'styled-components'
import { FaGithubSquare } from 'react-icons/fa'
const Footer = () => {
    return (
        <Wrapper>
            <div className='upper-wrapper'>
                <ul className='icons'>
                    <li>
                        {/* eslint-disable-next-line */}
                        <a className='social-link' href="https://github.com/AlexBachurin" target='_blank'>
                            <FaGithubSquare />
                        </a>
                    </li>
                </ul>
            </div>
            <div className="info">
                © 2022 Bacha Coding. All rights reserved. Built with
                {/* eslint-disable-next-line */}
                <a className='link' href="https://ru.reactjs.org/" target='_blank'>React</a>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.footer`
    height: 7rem;
    text-align: center;
    color: var(--clr-white);
    background: var(--clr-black);
    display: grid;
    place-items: center;
    .upper-wrapper {
        margin-top: 10px;
    }
    .info {
        margin: 0.25rem 0;
    }
    .link {
            display: inline-block;
            color: var(--clr-primary);
            margin-left: 0.2rem;
            transition: var(--transition);
            text-decoration: underline;
    }
    ul {
        display: flex;
        justify-content: center;
        line-height: 1;
        margin-bottom: 0.5rem;
    }
    li {
        list-style: none;
        transition: var(--transition);
        :hover {
            transform: translateY(-10%);
        }
    }
    .social-link {
        font-size: 2rem;
        margin: 0 0.4rem;
        transition: var(--transition);
        color: var(--clr-primary);
    }
    
`

export default Footer