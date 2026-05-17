import React from 'react';
import skills from '../data/skills';

function Skills(){
    return(
        <section className='flex flex-wrap gap-2 '>
            {skills.map((skill, idx) => <div key = {idx}>
                <div className="cursor-pointer hover:animate-pulse relative border-2 border-black  bg-[#f7f4ed] px-1 pt-1 w-fit shadow-[3px_3px_0px_grey]">
                {skill}
                </div>
                
            </div>)}
        </section>
    );
}
export default Skills;