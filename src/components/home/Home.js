import React, { Component } from 'react'
import SchoolInfo from '../schoolInfo/SchoolInfo'
// import Programs from '../programs/Programs'
import {connect} from 'react-redux'
import { fetchSchoolData } from '../../store/schools'
import ReactToPrint, { PrintContextConsumer } from 'react-to-print'
import CsvDownload from 'react-json-to-csv'

class Home extends Component{
    componentDidMount(props){
        this.props.getSchoolData()
    }
    render(){
        const { programPercentages, csvData, schoolName, latestYear } = this.props
        return(
            programPercentages.education ?
            <div>
                <SchoolInfo ref={el => (this.componentRef = el)} />
                <ReactToPrint content={() => this.componentRef}>
                    <PrintContextConsumer>
                        {({ handlePrint }) => (<button onClick={handlePrint}>Print this out!</button>)}
                    </PrintContextConsumer>
                </ReactToPrint>
                <CsvDownload data={csvData} filename={`${schoolName}_${latestYear}_data`}/>
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