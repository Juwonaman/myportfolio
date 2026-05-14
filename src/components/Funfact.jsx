import react from 'react';
import { hobbyInfo, funFacts } from '../data/funFact_Hobbies';

function FunFact(){
    return (
        <section>
            <div>
                <h2>Outside Of Coding</h2>
                <h3> You can find me doing these things</h3>
                {hobbyInfo.map((hob, idx) => (<div key = {idx}> 
                    <h4>{hob.title}</h4>
                    <p> {hob.description}</p></div>
                    ))}
                <h3>Fun Facts</h3>
                {funFacts.map((fact, idx) => (<p key = {idx}>{fact}</p>))}

            </div>
        </section>
    );
    
}export default FunFact;