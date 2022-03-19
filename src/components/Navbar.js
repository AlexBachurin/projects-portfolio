import React from 'react'
import styled from 'styled-components';
const Navbar = () => {
    return (
        <Wrapper>
            <nav className='navbar'>
                <div className="nav-center">
                    <div className="nav-header">
                        <img className='nav-logo' src="https://res.cloudinary.com/dljezd6qv/image/upload/v1619820552/main-logo.png" alt="bacha-coding-logo" />
                    </div>
                    <ul className="nav-links"></ul>
                    <ul className="nav-icons"></ul>
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
    .nav-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .nav-logo {
        height: 70px;
    }


    @media screen and (min-width: 800px) {
        .navbar {
            background: transparent;
        }
        .nav-center {
            display: grid;
            align-items: center;
            grid-template-columns: auto 1fr auto;
            -webkit-column-gap: 4rem;
            column-gap: 4rem;
        }

    }
`

export default Navbar