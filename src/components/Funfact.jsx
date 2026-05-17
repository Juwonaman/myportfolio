import React from 'react';
import { hobbyInfo, funFacts } from '../data/funFact_Hobbies';

function FunFact(){
    return (
        <section>
            <div>
                <h3> You can find me doing these things outside of coding</h3>
                {hobbyInfo.map((hob, idx) => (<div key = {idx}> 
                    <h4>{hob.title}</h4>
                    <p> {hob.description}</p></div>
                    ))}
                <h3 className='reciple-section-xsmall'>Fun Facts</h3>
                {funFacts.map((fact, idx) => (<p key = {idx}>{fact}</p>))}

            </div>
        </section>
    );
    
}export default FunFact;