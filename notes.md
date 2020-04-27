//dont care until we hit 0 or 1
// if we hit one
//if the number is greater than 1 it is 1
// if 1 exists, and numbers are greater than 1 check
//go through sorted array
    //if the number is negative has negatives
    //if the number is positive
    //if the number is integer // all are integers
    //if the number is not in list of positive integers,

    <!-- for(let i=0;i<sortedArray.length;i++){
        //could cut off negatives by smartly checking for them and cutting off
        if(sortedArray[i]<0){break;}
        // if(sortedArray[i]!==1){
        //   return 1
        // }
        if (
            ((i+1)<=sortedArray.length) &&
            ((sortedArray[i+1]-sortedArray[i]) === (0||1))
            )
        {
          break;
        }
        // console.log('(sortedArray[i+1]-sortedArray[i])')
        // console.log((sortedArray[i+1]-sortedArray[i]))

        if((sortedArray[i+1]-sortedArray[i]>1)) {
            // console.log('sortedArray[i]+1')
            // console.log(sortedArray[i]+1)
            return (sortedArray[i]+1)
        }

        return sortedArray[i] + 1
    } -->

const testFive ={
    input:[0,1,1,2,3,4,600],
    output:5
}

const testEight ={
    input:[600,0,1,1,2,3,4],
    output:5
}
