import React from 'react'
import styled from 'styled-components'
import projectsData from '../projectsData'
import { FaGithubSquare } from 'react-icons/fa'
import { BsBoxArrowUp } from 'react-icons/bs'
const ProjectsList = () => {
    return (
        <Wrapper className="projects-center">
            {projectsData.map(item => {
                const { id, name, category, tags, imgUrl, projectUrl, gitUrl } = item;
                return <article className="single-project">
                    <div className="img-wrapper">
                        <div className="overlay"></div>
                        <img className='project-img' src={imgUrl} alt={name} />
                    </div>
                    <div className="footer">
                        <a className='visit-link' href={projectUrl} target='_blank'>
                            <BsBoxArrowUp />
                        </a>
                        <div className="info">
                            <h4>{name}</h4>
                            <div className="stack">
                                {/* place for tags */}
                                {tags.map(tag => {
                                    return <p className='tag'>
                                        {tag}
                                    </p>
                                })}
                            </div>
                        </div>
                        <div className="links">
                            <FaGithubSquare className="github-icon" />
                            <a href={projectUrl} target='_blank'>View Project</a>
                            <a href={gitUrl} target='_blank'>Source Code</a>
                        </div>
                    </div>

                </article>
            })}
            {/* <article className="single-project">
                <div className="img-wrapper">
                    <div className="overlay"></div>
                    <img className='project-img' src="https://res.cloudinary.com/dljezd6qv/image/upload/v1618539852/panda_firju8.jpg" alt="" />
                </div>
                <div className="footer">
                    <a className='visit-link' href="#">
                        <BsBoxArrowUp />
                    </a>
                    <div className="info">
                        <h4>name</h4>
                        <div className="stack">
                            <p className='tag'>html</p>
                            <p className='tag'>css</p>
                        </div>
                    </div>
                    <div className="links">
                        <FaGithubSquare className="github-icon" />
                        <a href="#">View Project</a>
                        <a href="#">Source Code</a>
                    </div>
                </div>

            </article> */}

        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 90vw;
    max-width: 1170px;
    margin: 0 auto 2rem;
    display: grid;
    grid-gap: 3rem 1.5rem;
    gap: 3rem 1.5rem;
    grid-template-columns: repeat(auto-fill,minmax(330px,1fr));
    .single-project {
            transition: var(--transition);
            background: var(--clr-white);
            border-radius: var(--radius);
            display: grid;
            grid-template-rows: auto 1fr;
            box-shadow: 0 5px 15px rgb(0 0 0 / 10%);
            .overlay {
                width: 100%;
                padding-bottom: 56.1719%;
            }
            .project-img {
                border-top-left-radius: var(--radius);
                border-top-right-radius: var(--radius);
                position: absolute;
                top: 0px;
                left: 0px;
                width: 100%;
                height: 100%;
                object-fit: cover;
                object-position: center center;
                opacity: 1;
                transition: none 0s ease 0s;
                /* z-index: 2; */
            }
            .footer {
                display: grid;
                grid-template-rows: auto auto 1fr auto;
                .visit-link {
                    font-size: 1.75rem;
                    padding: 0 0.63rem;
                    border-radius: 50%;
                    display: block;
                    margin: 0 auto;
                    border: 0.5rem solid var(--clr-white);
                    transition: var(--transition);
                    transform: translateY(-50%);
                    background: var(--clr-primary-9);
                    color: var(--clr-primary-5);
                    :hover {
                        background: var(--clr-primary-5);
                        color: var(--clr-primary-9);
                    }
                }
                .info {
                    margin-top: -1.25rem;
                    padding: 0 1rem;
                    margin-bottom: 2rem;
                    text-align: center;
                    h4 {
                        font-size: 1.25rem;
                        letter-spacing: 2px;
                        font-weight: 500;
                        margin-bottom: 1.25rem;
                    }
                    .stack {
                        margin-top: 1rem;
                        display: flex;
                        justify-content: center;
                        flex-wrap: wrap;
                        row-gap: 5px;
                        p {
                            background: var(--clr-grey-9);
                            padding: 0.15rem 0.35rem;
                            border-radius: var(--radius);
                            text-transform: uppercase;
                            font-size: .75rem;
                            letter-spacing: 2px;
                            display: block;
                            margin: 0.25rem 0.25rem 0;
                        }
                    }
                }
                .links {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    background: var(--clr-primary-10);
                    padding: 0.75rem 1rem;
                    border-bottom-left-radius: var(--radius);
                    border-bottom-right-radius: var(--radius);
                    .github-icon {
                            color: var(--clr-primary);
                    }
                    a {
                        text-decoration: none;
                        text-transform: capitalize;
                        color: var(--clr-primary);
                        transition: var(--transition);
                        display: inline-block;
                        padding: 0.25rem 0;
                        :hover {
                            color: var(--clr-primary-1);
                        }
                    }
                }
            }
    }
    .single-project:hover {
        box-shadow: 0 5px 15px rgb(0 0 0 / 30%);
        transform: scale(1.02);
    }
    .img-wrapper {
        position: relative;
        overflow: hidden;
        height: 12.93rem;
    }

    @media screen and (min-width: 576px) {
        .projects-center{
            grid-template-columns: repeat(auto-fill,minmax(358px,1fr));
        }
        .img-wrapper {
            height: 15rem;
        }
    }
    @media screen and (min-width: 690px) {
        .img-wrapper {
            height: 17rem;
        }
    }
    @media screen and (min-width: 823px) {
        .img-wrapper {
            height: 12.93rem;
        }
    }
    @media screen and (min-width: 992px) {
        .projects-center {
            width: 95vw;
        }
    }
`

export default ProjectsList