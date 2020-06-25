import React, { Component } from 'react'
import { connect } from 'react-redux'
import Programs from '../programs/Programs'
import Race from '../race/Race'
import TestScores from '../testScores/TestScores'
import Pdf from "react-to-pdf";
import {Button} from '@material-ui/core/'
import './schoolInfo.css'

class SchoolInfo extends Component {
    render(){
        const { schoolName, schoolAlias, website, city, schoolState, zip, nOfStudents, latestYear } = this.props
        const ref = React.createRef();
        return(
            <div>
                <div ref={ref}>
                    <div className="schoolInfo">
                        <section >
                            <p className="schoolName">{schoolName}</p>
                                {
                                    schoolAlias === null ? '' :
                                    <p className="schoolAlias">
                                        Also {schoolAlias}
                                    </p>
                                }
                            <p className="location">{city} , {schoolState} {zip}</p>
                            <p className="aboutSchool">
                                The {schoolName} had a total of {nOfStudents} students in the latest reported academic year, {latestYear}.
                            </p>
                            <a href={website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="schoolLink"
                                >
                                <Button color="primary" variant="contained" size="small">
                                    Visit the {schoolName} website
                                </Button>
                            </a>
                        </section>
                    </div>
                    <section className="charts">
                        <Programs />
                        <Race />
                        <TestScores />
                    </section>
                </div>
                <div className="button">
                    <Pdf targetRef={ref} filename={`${schoolName}_${latestYear}_Data_Analysis`}>
                        {({ toPdf }) => <Button color="primary" variant="contained" size="small" onClick={toPdf}>Generate PDF</Button>}
                    </Pdf>
                </div>
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