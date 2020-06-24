import React, { Component } from 'react'
import { connect } from 'react-redux'
import Programs from '../programs/Programs'
import Race from '../race/Race'
import TestScores from '../testScores/TestScores'

class SchoolInfo extends Component {
    render(){
        const { schoolName, schoolAlias, website, city, state, zip, nOfStudents, latestYear } = this.props
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
                <TestScores />
            </div>
        )
    }
}

const mapState = state => {
    const { latestYear, schoolName, schoolAlias, website, city, schoolState, zip, nOfStudents } = state.school
    return {
        latestYear: latestYear,
        schoolName: schoolName,
        schoolAlias: schoolAlias,
        website: website,
        city: city,
        schoolState: schoolState,
        zip: zip,
        nOfStudents: nOfStudents
    }
}

export default connect( mapState, null)(SchoolInfo)