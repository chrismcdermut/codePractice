// nextCourse= course we're checking
// currentCourse is example below
// ["Prereq", "NextLevelCourse"],
// ["Data Structures", "Algorithms"]
function determineIsPrereq(nextCourse, currentCourse) {
  let isPrereq = false;
  if (nextCourse === currentCourse[0]) {
    isPrereq = true;
  }
  return isPrereq;
}

function determineCourseOrder(courseList) {
  const finalCourseList = [courseList[0][0]];

  for (let i = 0; i < courseList.length; i++) {
    // insert forwards or backwards base on prereq
    for (let j = 0; j < finalCourseList.length; j++) {
      if (determineIsPrereq(courseList[i], finalCourseList[j])) {
        finalCourseList.splice(j, 0, courseList[i]);
        break;
      } else {
        finalCourseList.splice(j + 1, 0, courseList[i]);
        break;
      }
    }
  }
  console.log(finalCourseList);
  return finalCourseList;
}

/* works */
function findHalfwayCourse(finalCourseList) {
  const halfway = (finalCourseList.length) / 2;
  const halfwayIndex = Math.floor(halfway);
  const halfwayCourse = finalCourseList[halfwayIndex];
  return halfwayCourse;
}


function finalFunction(courses) {
  const finalCourseList = determineCourseOrder(courses);

  let finalCourse = '';
  finalCourse = findHalfwayCourse(finalCourseList);

  return finalCourse;
}

module.exports = {
  determineIsPrereq, determineCourseOrder, findHalfwayCourse, finalFunction,
};
