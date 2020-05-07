// what if the meeting time spans multiple times?
//less than or equal to?

// if(allMeetingTimes[i]['startTime']>=mergedMeetingTimes[j]['startTime'] && allMeetingTimes[i]['startTime']<=mergedMeetingTimes[j]['endTime']){
//   if(allMeetingTimes[i]['endTime']<mergedMeetingTimes[j]['endTime']){
//     continue
//   }
//   mergedMeetingTimes[j]['endTime']=allMeetingTimes[i]['endTime']
// }

// for(let i=0;i<allMeetingTimes.length;i++){
//   if(i===0){
//     mergeMeetingTimes.push(allMeetingTimes[i]['startTime'])
//     mergeMeetingTimes.push(allMeetingTimes[i]['endTime'])
//     continue
//   }
//   if(allMeetingTimes[i]['startTime']>=mergedMeetingTimes[])
// }

// for(let i=0;i<allMeetingTimes.length;i++){
//   let currentMeetingStartTime = allMeetingTimes[i]['startTime']
//   let currentMeetingEndTime = allMeetingTimes[i]['endTime']
//   if(i===0){
//     mergedMeetingTimes.push(allMeetingTimes[i])
//     continue
//   }

/////////////////////////

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
