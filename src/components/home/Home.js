import React from 'react'
import axios from 'axios'
import SchoolInfo from '../schoolInfo/SchoolInfo'

export default class Home extends React.Component{
    constructor(){
        super()
        this.state = {
            latestYear: {},
            schoolName: '',
            schoolAlias: '',
            website: '',
            city: '',
            state: '',
            zip: 0,
            nOfStudents: 0,
        }
    }
    async componentDidMount(){
        const response = await axios.get("https://api.data.gov/ed/collegescorecard/v1/schools/?school.operating=1&2015.academics.program_available.assoc_or_bachelors=true&2015.student.size__range=1..&school.degrees_awarded.predominant__range=1..3&school.degrees_awarded.highest__range=2..4&id=240444&api_key=wD8BIFPBCNXc0SYRLFGzgwlxGyqxgca2hSZnRKdK")
        const info = response.data.results[0]
        let max = 0
        for ( let key in info ){
            max = (max < parseFloat(key) ? parseFloat(key) : max )
        }
        const { undergrad_12_month, grad_12_month } = info[max].student.enrollment
        let { search, alias, school_url, city, state, zip } = info.school

        this.setState({
            latestYear: info[max],
            schoolName: search,
            schoolAlias: alias,
            website: school_url,
            city: city,
            state: state,
            zip: parseInt(zip),
            nOfStudents: grad_12_month + undergrad_12_month
        })
    }
    render(){
        return(
            <div>
                <SchoolInfo schoolInfo={this.state} />
            </div>
        )
    }
}