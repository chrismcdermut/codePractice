const list = [34,1,67,15,4,93,47]

const newBubbleSort = (list) => {
    //flag to say whether or not to do it again
    let doItAgain = false;
    const limit = list.length;
    const defaultNextValue = Number.POSITIVE_INFINITY;
    //loop over entries
    for ( let i = 0; i < limit; i++ ) {
        let thisValue = list[i];
        let nextValue = i + 1 < limit ? list[i+1] : defaultNextValue;
        if(nextValue < thisValue) {
            list[i] = nextValue;
            list[i+1] = thisValue;
            doItAgain = true;
        }
    }
    if(doItAgain) newBubbleSort(list);
}

newBubbleSort(list);
console.log(list);
