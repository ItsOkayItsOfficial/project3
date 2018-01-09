import React from 'react';
import Skills from '../../../components/Inputs/Skills';

const UserSkills = ({changed, skills, updateUserInputs}) => {

  return (
  <div style={{textAlign:'center'}}>
    <div>
        <Skills
        changed={changed}
        index={0}
        id={'skills0'}
        skills={skills} />
        <Skills
        changed={changed}
        index={1}
        id={'skills1'}
        skills={skills} />
      </div>
    <div>
        <Skills
        changed={changed}
        index={2}
        id={'skills2'}
        skills={skills} />
        <Skills
        changed={changed}
        index={3}
        id={'skills3'}
        skills={skills} />
    </div>
    <div>
        <Skills
        changed={changed}
        index={4}
        id={'skills4'}
        skills={skills} />
        <Skills
        changed={changed}
        index={5}
        id={'skills5'}
        skills={skills} />
    </div>
    <div>
        <Skills
        changed={changed}
        index={6}
        id={'skills6'}
        skills={skills} />
        <Skills
        changed={changed}
        index={7}
        id={'skills7'}
        skills={skills} />
    </div>
      <div>
        <button className="btn btn-success sitebtn" onClick={updateUserInputs}>Update</button>
      </div>
  </div>
  )
}

export default UserSkills;