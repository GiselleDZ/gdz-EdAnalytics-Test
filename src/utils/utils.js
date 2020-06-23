export function replaceUnderscored (str) {
    if( str.includes('_') ){
        let tempArray = []
        for (let i=0; i < str.length; i++){
            if (str[i] === '_'){
                tempArray.push(' ')
            } else {
                tempArray.push(str[i])
            }
        }
        return tempArray.join('')
    } else {
        return str
    }
}

export function longStringNewLine (str) {
    if ( str.length > 20 ){
        return str.split(' ').map((word, ind) => {
            return ind === 1 ? word + '\n' : word })
            .join(' ')
    } else {
        return str
    }
}

export function capitalize (str) {
    return str.split(' ').map(word => {
        return (word[0].toUpperCase() + word.slice(1))
        }).join(' ')
}

export function cleanUpDataForPie (messyData) {
    const neatData = []
    Object.entries(messyData).forEach((key,index) => {
        let dataPoint = key[0]
        let value = key[1] * 100
        if (value !== 0 && value !== null && dataPoint !== "non_resident_alien"){
            console.log(dataPoint, value)
            neatData[index] = {x: longStringNewLine(capitalize(replaceUnderscored(dataPoint))), y: value < 1 && value > 0.001 ? 1 : parseInt(value)}
        }
    })
    console.log(neatData)
    return neatData
}

