import React, { Component } from 'react'
import SchoolInfo from '../schoolInfo/SchoolInfo'
import {connect} from 'react-redux'
import { fetchSchoolData } from '../../store/schools'
import ReactToPrint, { PrintContextConsumer } from 'react-to-print'
import CsvDownload from 'react-json-to-csv'
import Button from '@material-ui/core/Button'
import './home.css'

class Home extends Component{
    componentDidMount(props){
        this.props.getSchoolData()
    }
    render(){
        const { programPercentages, csvData, schoolName, latestYear } = this.props
        return(
            programPercentages.education ?
            <div >
                <div className="button">
                    <ReactToPrint content={() => this.componentRef} className="print">
                        <PrintContextConsumer>
                            {({ handlePrint }) => (<Button onClick={handlePrint} variant="contained" color="primary" size="small"> Print this out!</Button>)}
                        </PrintContextConsumer>
                    </ReactToPrint>
                </div>

                <SchoolInfo ref={el => (this.componentRef = el)} />
                <div className="CSV-button">
                    <CsvDownload data={csvData} className="CSV-button" filename={`${schoolName}_${latestYear}_data`} />
                </div>
            </div>
            : ('')
        )
    }
}

const mapState = state => {
    const { csvData, latestInfo, raceEthnicity, programPercentages, testScores, latestYear, schoolName, schoolAlias, website, city, schoolState, zip, nOfStudents } = state.school
    return {
        csvData: csvData,
        latestInfo: latestInfo,
        raceEthnicity: raceEthnicity,
        programPercentages: programPercentages,
        testScores: testScores,
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

const mapDispatch = dispatch => ({
    getSchoolData : () => dispatch(fetchSchoolData())
})

export default connect( mapState, mapDispatch)(Home)