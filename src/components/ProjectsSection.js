import React from 'react'
import styled from 'styled-components'
import ProjectsList from './ProjectsList'
const ProjectsSection = () => {
    return (
        <Wrapper>
            <div className="title">
                <h2>My Projects</h2>
                <div className="underline"></div>
            </div>
            <form className='projects-form'>
                <div className="form-input">
                    <label htmlFor="type" id='type'>filter by technology</label>
                    <select name="type" id="type" className='form-select'>
                        <option value="all">all</option>
                        <option value="javascript">javascript</option>
                        <option value="react">react</option>
                        <option value="html/css">html/css</option>
                    </select>
                </div>
            </form>
            <ProjectsList />
        </Wrapper>
    )
}

const Wrapper = styled.section`
    padding: 6rem 0;
    .title {
        text-align: center;
        margin-bottom: 3rem;
    }
    .underline {
        height: 0.25rem;
        width: 5rem;
        background: var(--clr-primary);
        margin: 0 auto;
    }
    .projects-form {
        margin-bottom: 4rem;
        color: var(--clr-grey-5);
        text-align: center;
        label {
                display: block;
                text-transform: capitalize;
                font-size: 1.3rem;
                margin-bottom: 0.5rem;
        }
        .form-select {
            text-transform: uppercase;
            font-size: 1rem;
            background: var(--clr-grey-9);
            width: 10rem;
            height: 2rem;
            border: transparent;
            letter-spacing: var(--spacing);
            color: var(--lightGrey);
            box-shadow: 0 1px 3px rgb(0 0 0 / 10%);
            outline: none;
            border-radius: var(--radius);
            padding-left: 10px ;
        }
    }
    
    
    
    


    
    
`
export default ProjectsSection