import React from 'react';
import Main from '../Main/Main';
import Section from '../Section/Section';
import Tranding from '../Tranding/Tranding';
import { useLoaderData } from 'react-router';

const Hone = () => {
    const trandingApp = useLoaderData()
    
    return (
        <div className=''>
            <Main></Main>
            <Section></Section>
            <Tranding trandingApp={trandingApp}></Tranding>
        </div>
    );
};

export default Hone;