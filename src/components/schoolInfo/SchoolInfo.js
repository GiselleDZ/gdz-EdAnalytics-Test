import React from 'react'

const SchoolInfo = (props) => {
    const { schoolName, schoolAlias, website, city, state, zip, nOfStudents, latestYear } = props.schoolInfo
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
        </div>
    )
}

export default SchoolInfo