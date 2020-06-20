import React from 'react'
import axios from 'axios'
// import SchoolInfo from '../schoolInfo/SchoolInfo'

export default class Home extends React.Component{
    constructor(){
        super()
        this.state = {
            latestYear: {}
        }
    }
    async componentDidMount(){
        const response = await axios.get("https://api.data.gov/ed/collegescorecard/v1/schools/?school.operating=1&2015.academics.program_available.assoc_or_bachelors=true&2015.student.size__range=1..&school.degrees_awarded.predominant__range=1..3&school.degrees_awarded.highest__range=2..4&id=240444&api_key=wD8BIFPBCNXc0SYRLFGzgwlxGyqxgca2hSZnRKdK")
        const years = response.data.results[0]

        let max = 0
        for ( let key in years ){
            max = (max < parseFloat(key) ? parseFloat(key) : max )
        }
        this.setState({ latestYear: years[max] })
    }
    render(){
        const { latestYear } = this.state
        console.log(latestYear.cost)
        return(
            <div>
                <h1>it works</h1>
                {/* <SchoolInfo academicYear={years[max]} /> */}
            </div>
        )
    }
}