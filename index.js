function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
    
}

const mondayWork = function(work = "go to the office") {
    return `This Monday, I will ${work}.`
}

const wrapAdjective = function (visualFlair="*") {
    return function (adj = "special") {
        return `You are ${visualFlair}${adj}${visualFlair}!`;
    }
} 
