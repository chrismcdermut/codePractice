function mergeMeetingTimesCheck(allMeetingsArg) {
  const allMeetings = allMeetingsArg;
  allMeetings.sort((a, b) => a.startTime - b.startTime);
  // console.log('allMeetings');
  // console.log(allMeetings);
  const condensedMeetings = [allMeetings[0]];

  for (let i = 1; i < allMeetings.length; i++) {
    const currentMeeting = allMeetings[i];
    const lastMergedMeeting = condensedMeetings[condensedMeetings.length - 1];
    if (currentMeeting.startTime <= lastMergedMeeting.endTime) {
      lastMergedMeeting.endTime = Math.max(currentMeeting.endTime, lastMergedMeeting.endTime);
    } else {
      condensedMeetings.push(currentMeeting);
    }
  }

  return condensedMeetings;
}

module.exports = mergeMeetingTimesCheck;


// // pulled from interviewCake with small tweaks and comments
// function mergeMeetingTimes(allMeetings) {
//   // Create a deep copy of the meetings array
//   // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign#Deep_Clone
//   const meetingsCopy = JSON.parse(JSON.stringify(allMeetings));
//
//   // Sort by start time
//   // https://www.w3schools.com/jsref/jsref_sort.asp
//   const sortedMeetings = meetingsCopy.sort((a, b) => a.startTime - b.startTime);
//
//   // Initialize mergedMeetings with the earliest meeting
//   const mergedMeetings = [sortedMeetings[0]];
//
//   // can use shift and start at 0 but makes sortedMeetings a let
//   for (let i = 1; i < sortedMeetings.length; i += 1) {
//     const currentMeeting = sortedMeetings[i];
//     const lastMergedMeeting = mergedMeetings[mergedMeetings.length - 1];
//
//     // If the current meeting overlaps with the last merged meeting, use the
//     // later end time of the two
//     if (currentMeeting.startTime <= lastMergedMeeting.endTime) {
//       // Math.max is a good move to make
//       lastMergedMeeting.endTime = Math.max(
//         lastMergedMeeting.endTime,
//         currentMeeting.endTime,
//       );
//     } else {
//       // Add the current meeting since it doesn't overlap
//       mergedMeetings.push(currentMeeting);
//     }
//   }
//
//   return mergedMeetings;
// }
