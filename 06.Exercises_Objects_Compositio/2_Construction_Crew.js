function workingFunc(params) {
    const object = params
    if (object['dizziness'] == true) {
        object['levelOfHydrated'] += object['weight'] * object['experience'] * 0.1;
        object['dizziness'] = false
    }
    return object
}

console.log(workingFunc({ weight: 120,

    experience: 20,
    
    levelOfHydrated: 200,
    
    dizziness: true }))

