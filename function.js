function week(deen) {

    if (deen == 0) {
        return `Sunday`
    } else if (deen == 1) {
        return `Monday`
    } else if (deen == 2) {
        return `Tuesday`
    } else if (deen == 3) {
        return `Wednesday`
    } else if (deen == 4) {
        return `Thursday`
    } else if (deen == 5) {
        return `Friday`
    } else if (deen == 6) {
        return `Saturday`
    }
}


// counter-section

function loader(start_val, current_val) {
    return (current_val * 100) / start_val;
}



//result

/**
 * 
 * @param {*} marks 
 * @returns 
 */
function gpa(marks) {


    if (marks === '' || marks < 0 || marks > 100) {
        return {
            grade: 'invalid',
            points: 'invalid',

        }
    } else if (marks >= 0 && marks <= 32) {
        return {
            grade: 'F',
            points: 0,
            class: 'danger',
            status: 'Sorry You have Failed'
        }
    } else if (marks >= 33 && marks <= 39) {
        return {
            grade: 'D',
            points: 1.00,
            class: 'warning',
            status: 'Congratulation! You have passed.'
        }
    } else if (marks >= 40 && marks <= 49) {
        return {
            grade: 'C',
            points: 2.00,
            class: 'info',
            status: 'Congratulation! You have passed.'
        }
    } else if (marks >= 50 && marks <= 59) {
        return {
            grade: 'B',
            points: 3.00,
            class: 'info',
            status: 'Congratulation! You have passed.'
        }
    } else if (marks >= 60 && marks <= 69) {
        return {
            grade: 'A-',
            points: 3.50,
            class: 'primary,',
            status: 'Congratulation! You have passed.'
        }
    } else if (marks >= 70 && marks <= 79) {
        return {
            grade: 'A',
            points: 4.00,
            class: 'success',
            status: 'Congratulation! You have passed.'
        }
    } else if (marks >= 80 && marks <= 100) {
        return {
            grade: 'A+',
            points: 5.00,
            class: 'success',
            status: 'Congratulation! You have passed.'
        }
    }
}