import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import ProjectsList from './ProjectsList'
import projectsData from '../projectsData'
const ProjectsSection = () => {
    //state for current category
    const [curCategory, setCurCategory] = useState('all');
    //state for initial list of projects, this is needed because we will filter only this list every time
    //eslint-disable-next-line
    const [initialList, setInitialList] = useState(projectsData);
    //state for filtered list
    const [filteredList, setFilteredList] = useState(initialList)
    //get categories
    const categories = projectsData.map(item => item.category);
    //get unique categories and put in array and add 'all'
    const uniqCategories = ['all', ...new Set(categories)];

    //change option handler
    const changeCategory = (e) => {
        const value = e.target.value;
        setCurCategory(value);
    }
    //useEffect to change list as category changes
    useEffect(() => {
        //only filter INITIAL LIST
        const newList = initialList.filter(item => {
            //if category is all just return all items, else return only item with this category
            if (curCategory === 'all') {
                return item;
            } else {
                return item.category === curCategory;
            }
        });
        //set it to FILTERED LIST!!!
        setFilteredList(newList)
        //eslint-disable-next-line
    }, [curCategory])
    return (
        <Wrapper>
            <div className="title">
                <h2>My Projects</h2>
                <div className="underline"></div>
            </div>
            <form className='projects-form'>
                <div className="form-input">
                    <label htmlFor="type" id='type'>filter by technology</label>
                    <select onChange={changeCategory} name="type" id="type" className='form-select'>
                        {uniqCategories.map((item, index) => {
                            return <option key={index} value={item}>{item}</option>
                        })}

                    </select>
                </div>
            </form>
            <ProjectsList filteredList={filteredList} />
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