'use strict';

function trackDosage(medName, initialDosage) {
    let mName = medName;
    let dose = initialDosage;
    let pin = 1234;
    return {
        getInstructions() {
            console.log(`Take ${dose}mg of ${mName}`);
        },
        adjustDosage(doctorPin, newDosage) {
            if (doctorPin === pin && newDosage > 0) {
                dose = newDosage;
                console.log(`Dosage successfully adjusted to ${dose}mg of ${mName}`);
            } else {
                throw new Error('Pin does not match or dose not valid')
            }
        }
    };
}
const abc = trackDosage('minox', 5);
abc.getInstructions();
abc.adjustDosage(1234, 10);
abc.getInstructions();