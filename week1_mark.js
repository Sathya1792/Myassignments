let mark;

function graderange(mark){

switch (true) {
    case (mark > 90):
       return "O Grade";
        break;

    case (mark > 80 && mark < 90):
        return"A Grade";
        break;

    default:
        return "No Grade";
}
}
 console.log(graderange(86))
//graderange(-10)
