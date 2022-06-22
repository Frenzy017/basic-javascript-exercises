function projectsCreation(input) {
    let architectName = String(input[0]);
    let completedProjects = Number(input[1]);
    let hoursNeeded = completedProjects * 3; 
    console.log(`The architect ${architectName} will need ${hoursNeeded} hours to complete ${completedProjects} project/s.`)



}

projectsCreation(["George",
"4"])


