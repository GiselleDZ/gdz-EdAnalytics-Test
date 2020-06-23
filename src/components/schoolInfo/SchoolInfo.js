import React, { Component } from 'react'
import Programs from '../programs/Programs'
import Race from '../race/Race'

class SchoolInfo extends Component {
    render(){
        const { schoolName, schoolAlias, website, city, state, zip, nOfStudents, latestYear } = this.props.schoolInfo
        return(
            <div>
                <section>
                <h1>{schoolName}</h1>
                {
                    schoolAlias === null ? '' : <h2>{schoolAlias}</h2>
                }
                <a href={website}
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                        Visit the {schoolName} website
                </a>
                <p>{city} , {state} {zip}</p>
                </section>
                <section>
                    <p> The {schoolName} had a total of {nOfStudents} students in the latest reported academic year, {latestYear}. </p>
                </section>
                <Programs />
                <Race />
            </div>
        )
    }
}

export default SchoolInfo