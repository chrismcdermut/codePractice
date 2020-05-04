// function mergeMeetingTimes(allMeetings) {
//     let mergedMeetingTimes = []
//     // const removedElement = allMeetingTimes.shift()
//     mergedMeetingTimes.push(allMeetingTimes.shift())
//
//   for(let i=0;i<allMeetings.length;i++){
//
//   }
//
//   console.log(mergedMeetingTimes)
//   return mergedMeetingTimes
// }

function mergeMeetingTimes(allMeetingTimes) {
  let mergedMeetingTimes = []
  const removedElement = allMeetingTimes.shift()
  mergedMeetingTimes.push(removedElement)

  for(let i=0;i<allMeetingTimes.length;i++){
    let currentMeetingStartTime = allMeetingTimes[i]['startTime']
    let currentMeetingEndTime = allMeetingTimes[i]['endTime']

    for(let j=0;j<mergedMeetingTimes.length;j++){
      let condensedMeetingStartTime = mergedMeetingTimes[j]['startTime']
      let condensedMeetingEndTime = mergedMeetingTimes[j]['endTime']
      //if currentMeetingStartTime is less than condensedMeetingStartTime
      //and currentMeetingEndTime is less than start Time, push current meeting to front of condensed meeting
      if(currentMeetingStartTime<condensedMeetingStartTime && currentMeetingEndTime<condensedMeetingStartTime){
        mergedMeetingTimes.unShift(allMeetingTimes[j])
        continue
      }
      //if currentMeetingStartTime is less than condensedMeetingStartTime and end time is within, push the front time back
      if(currentMeetingStartTime<condensedMeetingStartTime && currentMeetingEndTime<=condensedMeetingEndTime && currentMeetingEndTime>=condensedMeetingStartTime){
        mergedMeetingTimes[i]['startTime'] = currentMeetingStartTime
        continue
      }
      //if current meeting startTime is greater than start time and less than end time and end time is greater than start time and less then start time, continue
      if(currentMeetingStartTime>=condensedMeetingStartTime && currentMeetingStartTime<=condensedMeetingEndTime && currentMeetingEndTime>condensedMeetingStartTime && currentMeetingEndTime<condensedMeetingEndTime){
        continue
      }
      //if current meeting startTime is greater than condensed meeting starttime and less then condensed meeting endTime and end time is greater than condensed meeting end time, push end time back
      if(currentMeetingStartTime>=condensedMeetingStartTime && currentMeetingStartTime<=condensedMeetingEndTime && currentMeetingEndTime>condensedMeetingEndTime){
        mergedMeetingTimes[i]['endTime'] = currentMeetingEndTime
        continue
      }
      // else push current meeting into condensed meeting list after meetings
      mergedMeetingTimes.push(allMeetingTimes[i])
    }

  }
  console.log(mergedMeetingTimes)
  return mergedMeetingTimes
}

module.exports = mergeMeetingTimes

// for(let i=0;i<allMeetingTimes.length;i++){
//   let currentMeetingStartTime = allMeetingTimes[i]['startTime']
//   let currentMeetingEndTime = allMeetingTimes[i]['endTime']
//   if(i===0){
//     mergedMeetingTimes.push(allMeetingTimes[i])
//     continue
//   }
