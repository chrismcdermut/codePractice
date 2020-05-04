// pulled from interviewCake with small tweaks and comments
function mergeMeetingTimes(allMeetings) {
    // Create a deep copy of the meetings array
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign#Deep_Clone
    let meetingsCopy = JSON.parse(JSON.stringify(allMeetings));

    // Sort by start time
    // https://www.w3schools.com/jsref/jsref_sort.asp
    const sortedMeetings = meetingsCopy.sort((a, b) => {
      return a.startTime - b.startTime;
    });

    // Initialize mergedMeetings with the earliest meeting
    let mergedMeetings = [sortedMeetings[0]];

    //can use shift and start at 0 but makes sortedMeetings a let
    for (let i = 1; i < sortedMeetings.length; i++) {
      const currentMeeting    = sortedMeetings[i];
      const lastMergedMeeting = mergedMeetings[mergedMeetings.length - 1];

      // If the current meeting overlaps with the last merged meeting, use the
      // later end time of the two
      if (currentMeeting.startTime <= lastMergedMeeting.endTime) {
        //Math.max is a good move to make
        lastMergedMeeting.endTime = Math.max(lastMergedMeeting.endTime, currentMeeting.endTime);
      } else {
        // Add the current meeting since it doesn't overlap
        mergedMeetings.push(currentMeeting);
      }
    }

    return mergedMeetings
}

module.exports = mergeMeetingTimes

// function mergeMeetingTimes(allMeetingTimes) {
//   let mergedMeetingTimes = []
//   const removedElement = allMeetingTimes.shift()
//   mergedMeetingTimes.push(removedElement)
//
//   for(let i=0;i<allMeetingTimes.length;i++){
//     let currentMeetingStartTime = allMeetingTimes[i]['startTime']
//     let currentMeetingEndTime = allMeetingTimes[i]['endTime']
//
//     for(let j=0;j<mergedMeetingTimes.length;j++){
//       let condensedMeetingStartTime = mergedMeetingTimes[j]['startTime']
//       let condensedMeetingEndTime = mergedMeetingTimes[j]['endTime']
//
//       // //skip if meeting time is same
//       // if(currentMeetingStartTime===condensedMeetingStartTime && currentMeetingEndTime===condensedMeetingEndTime){
//       //   continue
//       // }
//       if(allMeetingTimes[i]===mergedMeetingTimes[j]){
//         continue
//       }
//
//       //if currentMeetingStartTime is less than condensedMeetingStartTime
//       //and currentMeetingEndTime is less than start Time, push current meeting to front of condensed meeting
//       if(currentMeetingStartTime<condensedMeetingStartTime && currentMeetingEndTime<condensedMeetingStartTime){
//         mergedMeetingTimes.unShift(allMeetingTimes[j])
//         continue
//       }
//
//       //if currentMeetingStartTime is less than condensedMeetingStartTime and end time is within, push the front time back
//       if(currentMeetingStartTime<condensedMeetingStartTime && currentMeetingEndTime<=condensedMeetingEndTime && currentMeetingEndTime>=condensedMeetingStartTime){
//         mergedMeetingTimes[i]['startTime'] = currentMeetingStartTime
//         continue
//       }
//
//       //if current meeting startTime is greater than start time and less than end time and end time is greater than start time and less then start time, continue
//       if(currentMeetingStartTime>=condensedMeetingStartTime && currentMeetingStartTime<=condensedMeetingEndTime && currentMeetingEndTime>condensedMeetingStartTime && currentMeetingEndTime<condensedMeetingEndTime){
//         continue
//       }
//
//       //if current meeting startTime is greater than condensed meeting starttime and less then condensed meeting endTime and end time is greater than condensed meeting end time, push end time back
//       if(currentMeetingStartTime>=condensedMeetingStartTime && currentMeetingStartTime<=condensedMeetingEndTime && currentMeetingEndTime>condensedMeetingEndTime){
//         mergedMeetingTimes[i]['endTime'] = currentMeetingEndTime
//         continue
//       }
//
//       // else push current meeting into condensed meeting list after meetings
//       mergedMeetingTimes.push(allMeetingTimes[i])
//     }
//
//   }
//   console.log(mergedMeetingTimes)
//   return mergedMeetingTimes
// }
