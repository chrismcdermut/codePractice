selectionSort Notes go here!

```
const selectionSort = (list) => {
  for(let i=0;i<list.length;i+=1){
    let currentMinIndex = i
      for(let j=currentMinIndex+1;j<list.length;j+=1){
        if(list[j]<list[currentMinIndex]){
          currentMinIndex = j
        }
      }
      if(currentMinIndex != i){
        let oldMinValue = list[i];
        list[i] = list[currentMinIndex];
        list[currentMinIndex] = oldMinValue
      }
  }
  return list
}
```
