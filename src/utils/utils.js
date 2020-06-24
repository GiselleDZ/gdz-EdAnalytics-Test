/* eslint-disable array-callback-return */
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
        if ( dataPoint === "nhpi" ){
            dataPoint = "Native Hawaiian and Pacific Islander"
        }
        if ( dataPoint === "aian" ){
            dataPoint = "Native American and Alaska Native"
        }
        if (value !== 0 && value !== null && dataPoint !== "non_resident_alien"){
            neatData[index] = {
                x: longStringNewLine(capitalize(replaceUnderscored(dataPoint))),
                y: value < 1 && value > 0.001 ? 1 : parseInt(value)
            }
        }
    })
    return neatData
}

export function cleanUpTestData (messyData) {
    let cleanData = []
    const array= Object.entries(messyData)
    array.shift()
    array.map((rating, ind) => {
        let title= rating[0]
        let workingTitle= ""
        let preX = ""
        title.split("_").map((word, inx )=> {
            if (inx === 0){
                workingTitle = word
            }
            else if (inx === 1 && word.includes("percentile")){
                workingTitle += (" " + word)
            }
            else if(preX === ""){
                preX = word
            }
            else {
                preX += (" " + word)
            }
        })
        if ( ! cleanData.includes(capitalize(workingTitle)) ){
            cleanData[ind/2] = capitalize(workingTitle)
        }
        cleanData[ind + 3] = { x: capitalize(preX), y: rating[1] }
        workingTitle= ""
    })
    cleanData = [cleanData[0], cleanData[1], cleanData[2], [[cleanData[3], cleanData[4]], [cleanData[5], cleanData[6]], [cleanData[7], cleanData[8]]]]
    return cleanData
}