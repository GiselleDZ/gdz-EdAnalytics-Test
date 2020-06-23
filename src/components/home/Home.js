import React, { Component } from 'react'
import SchoolInfo from '../schoolInfo/SchoolInfo'
// import Programs from '../programs/Programs'
import {connect} from 'react-redux'
import { fetchSchoolData } from '../../store/schools'
import ReactToPrint, { PrintContextConsumer } from 'react-to-print'

class Home extends Component{

    componentDidMount(props){
        this.props.getSchoolData()
    }
    render(){
        const { latestYear, schoolName, schoolAlias, website, city, zip, schoolState, nOfStudents, programPercentages } = this.props
        console.log(this.props)
        const schoolInfo = {latestYear, schoolName, schoolAlias, website, city, zip, schoolState, nOfStudents}
        return(
            programPercentages.education ?
            <div>
                <SchoolInfo schoolInfo={schoolInfo} ref={el => (this.componentRef = el)}/>
                <ReactToPrint content={() => this.componentRef}>
                    <PrintContextConsumer>
                        {({ handlePrint }) => (<button onClick={handlePrint}>Print this out!</button>)}
                    </PrintContextConsumer>
                </ReactToPrint>
            </div>
            : ('')
        )
    }
}

const mapState = state => {
    const { latestInfo, raceEthnicity, programPercentages, latestYear, schoolName, schoolAlias, website, city, schoolState, zip, nOfStudents } = state.school
    return {
        latestInfo: latestInfo,
        raceEthnicity: raceEthnicity,
        programPercentages: programPercentages,
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