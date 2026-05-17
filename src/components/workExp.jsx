import React, { useEffect, useRef, useState } from 'react';
import workEx from '../data/workExp';

export function CompAndRole() {
    const [index, setIndex] = useState(0);
    const [blurred, setBlurred] = useState(false);
    const skipBlurOnMount = useRef(true);

    useEffect(() => { 
        if (workEx.length === 0) return;

        const id = setInterval(() => {
            setIndex((i) => (i +1) % workEx.length);
        }, 3500);
        return () => clearInterval(id);
    }, [workEx.length]);

    useEffect(() => {
        if (skipBlurOnMount.current) {
            skipBlurOnMount.current = false;
            return;
        }
        setBlurred(true);
        const id = window.setTimeout(() => setBlurred(false), 260);
        return () => window.clearTimeout(id);
    }, [index]);

    if (workEx.length === 0) return null;
    const current = workEx[index];

  return (
    <div
      className={` transition-[filter] duration-200 ease-out ${blurred ? 'blur-xs' : ''}`}
    >
      {"Previous "}{current.role} @ {current.company} 
    </div>
  );
}


export function WorkExp() {
    return(
        <section>            
            {workEx.map((comp, idx) => <div key = {idx}>
                 <h2 className = "reciple-section-xsmall min-w-0 flex-1">{comp.company}</h2>
                 <p>{comp.role}</p>
                    <p>{comp.date}</p>
                    <p>{comp.location}</p>
                    <ul>
                        {comp.duties.map((duty, idx) => <li key = {idx}>{duty}</li>)}
                    </ul>
                 </div>)}
        </section>
    )
}