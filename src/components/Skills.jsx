import React from 'react';
import { skills } from '../data';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Skills = () => {
  return (
    <div className="skills__container">
      {skills.map((group, index) => (
        <div className="skills__category-row" key={index}>
          <h2 className="skills__category-title">{group.category}</h2>
          <div className="skills__items-grid">
            {group.items.map(({ title, percentage }, i) => (
              <div className='progress__box' key={i}>
                <div className='progress__circle'>
                  <CircularProgressbar 
                    strokeWidth={7.5}
                    text={`${percentage}%`}
                    value={percentage}
                  />
                </div>
                <h3 className='skills__title'>{title}</h3>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;