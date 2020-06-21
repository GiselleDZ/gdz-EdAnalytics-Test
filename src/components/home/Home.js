import React, { Component } from 'react'
import SchoolInfo from '../schoolInfo/SchoolInfo'
import Programs from '../programs/Programs'
import {connect} from 'react-redux'
import { fetchSchoolData } from '../../store/schools'

class Home extends Component{

    componentDidMount(props){
        this.props.getSchoolData()
    }
    render(){
        const { latestYear, schoolName, schoolAlias, website, city, zip, schoolState, nOfStudents, programPercentages } = this.props
        const schoolInfo = {latestYear, schoolName, schoolAlias, website, city, zip, schoolState, nOfStudents}
        return(
            programPercentages.education ?
            <div>
                <SchoolInfo schoolInfo={schoolInfo} />
                <Programs programPercentages={programPercentages} />
            </div>
            : ('')
        )
    }
}

const mapState = state => {
    const { latestInfo, programPercentages, latestYear, schoolName, schoolAlias, website, city, schoolState, zip, nOfStudents } = state.school
    return {
    latestInfo: latestInfo,
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