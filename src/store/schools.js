import axios from 'axios'

const GET_SCHOOL_DATA = "GET_SCHOOL_DATA"
const CATCH_ERROR = "CATCH_ERROR"

const gotSchoolData = school => ({
    type: GET_SCHOOL_DATA,
    school
})

export const fetchSchoolData = () => async dispatch => {
    try {
        const {data} = await axios.get("https://api.data.gov/ed/collegescorecard/v1/schools/?school.operating=1&2015.academics.program_available.assoc_or_bachelors=true&2015.student.size__range=1..&school.degrees_awarded.predominant__range=1..3&school.degrees_awarded.highest__range=2..4&id=240444&api_key=wD8BIFPBCNXc0SYRLFGzgwlxGyqxgca2hSZnRKdK")
        dispatch(gotSchoolData(data.results[0]))
    } catch (error) {
        console.error("didn't receive data")
    }
}

const initialState = {
    latestInfo: {},
    programPercentages: {},
    raceEthnicity: {},
    satScores: {},
    latestYear: 0,
    schoolName: '',
    schoolAlias: '',
    website: '',
    city: '',
    schoolState: '',
    zip: 0,
    nOfStudents: 0
}

export default function schoolReducer (state = initialState, action ){
    switch (action.type){
        case GET_SCHOOL_DATA:
            const info = action.school
            let max = 0
            for ( let key in info ){
                max = (max < parseFloat(key) ? parseFloat(key) : max )
            }
            const { undergrad_12_month, grad_12_month } = info[max].student.enrollment
            let { search, alias, school_url, city, zip } = info.school
            const schoolState = info.school.state
            const programs = info[max].academics.program_percentage
            let programPercentages = {}
            for ( let key in programs ){
                programPercentages[key] = programs[key]
            }
            const testScores = info[max].admissions.sat_scores
            const satScores = {}
            for ( let key in testScores ){
                for (let score in testScores[key]){
                    if ( testScores[key][score] !== null && score !== 'by_ope_id' ){
                        satScores[`${key}_${score}`] = testScores[key][score]
                    }
                }
            }
            const raceEthnicity = info[max].student.demographics.race_ethnicity
            const jsData = [
                {schoolData: {
                    dataYear: max,
                    schoolName: search,
                    schoolAlias: alias,
                    website: school_url,
                    city: city,
                    state: schoolState,
                    zip: zip,
                    nOfStudents: grad_12_month + undergrad_12_month
                }},
                {satScores: satScores},
                {raceEthnicity: raceEthnicity},
                {programPercentages: programPercentages}
            ]
            return {
                ...state,
                csvData: jsData,
                latestInfo: info[max],
                raceEthnicity: raceEthnicity,
                programPercentages: programPercentages,
                satScores: satScores,
                latestYear: max,
                schoolName: search,
                schoolAlias: alias,
                website: school_url,
                city: city,
                schoolState: schoolState,
                zip: zip,
                nOfStudents: grad_12_month + undergrad_12_month
            }
        case CATCH_ERROR:
            return {...state, error: action.error}
        default:
            return {...state}
    }
}