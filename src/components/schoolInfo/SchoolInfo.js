import React, { Component } from 'react'
import { connect } from 'react-redux'
import Programs from '../programs/Programs'
import Race from '../race/Race'
import TestScores from '../testScores/TestScores'
import Pdf from "react-to-pdf";
import {Button, Container} from '@material-ui/core/'
import './schoolInfo.css'

class SchoolInfo extends Component {
    render(){
        const { schoolName, schoolAlias, website, city, schoolState, zip, nOfStudents, latestYear } = this.props
        const ref = React.createRef();
        return(
            <div className="main">
                <div className="button">
                    <Pdf targetRef={ref} filename={`${schoolName}_${latestYear}_Data_Analysis`}>
                        {({ toPdf }) => <Button color="primary" variant="contained" size="small" onClick={toPdf}>Generate PDF</Button>}
                    </Pdf>
                </div>
                <div ref={ref} className="schoolInfo">
                        <Container maxWidth="sm">
                            <section>
                                <h1 className="schoolName">{schoolName}</h1>
                                {
                                    schoolAlias === null ? '' : <h2 className="schoolAlias">{schoolAlias}</h2>
                                }
                                <a href={website}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="schoolLink"
                                    >
                                        <Button color="secondary" variant="outlined" size="small">
                                            Visit the {schoolName} website
                                        </Button>
                                </a>
                                <p className="location">{city} , {schoolState} {zip}</p>
                            </section>
                            <section className="aboutSchool">
                                    <p> The {schoolName} had a total of {nOfStudents} students in the latest reported academic year, {latestYear}. </p>
                            </section>
                        </Container>
                        <Container maxWidth="sm">
                            <section className="charts">
                                <Programs />
                                <Race />
                                <TestScores />
                            </section>
                        </Container>
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