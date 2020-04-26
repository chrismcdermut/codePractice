const list = [23, 4, 42, 8, 16, 15];

    const selectionSort = (list) => {
    for (let i = 0; i < list.length; i++) {
    
    let currentMinIndex = i;
    for(let j = currentMinIndex + 1; j < list.length; j++){
        if(list[j] < list[currentMinIndex]){
            currentMinIndex = j;
        }
    }
    if(currentMinIndex != i){
        let oldMinValue = list[i];
        list[i] = list[currentMinIndex];
        list[currentMinIndex] = oldMinValue;
    }
    }
    return list;
}

console.log(selectionSort(list));
