import React from 'react'

const SchoolInfo = (props) => {
    const { schoolName, schoolAlias, website, city, state, zip } = props.schoolInfo
    return(
        <div>
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

        </div>
    )
}

export default SchoolInfo