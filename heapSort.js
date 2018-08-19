// Heap Sort //

//left child: i* 2
//right child: i*2+1
//parent: i/2 floor

let MinHeap = function() {
    let heap = [ null, 1, 3, 3, 6, 67, 5, 5, 23, 14, 90 ];

    this.insert = function(num) {
        console.log('is this running?');
        heap.push(num);
        if(heap.length > 2) {
            let idx = heap.length - 1;
            while (heap[idx] < heap[Math.floor(idx/2)]) {
                if(idx >= 1) {
                    [heap[Math.floor(idx/2)], heap[idx]] = [heap[idx], heap[Math.floor(idx/2)]]
               if(Math.floor(idx/2) > 1) {
                    idx = Math.floor(idx/2);
               } else {
                    break;
               }
               }
            }
        }
        console.log(heap);
    }

    // this.insert(5)
    //
    // console.log(heap);

    this.remove = function() {
        console.log('remove is running');
        let smallest = heap[1];
        if(heap.length > 2) {
            heap[1] = heap[heap.length - 1];
            heap.splice(heap.length-1);
            if(heap.length == 3) {
                if(heap[1] > heap[2]) {
                    [heap[1], heap[2]] = [heap[2], heap[1]];
                };
                console.log('logging heap');
                console.log(heap);
                return smallest;
            }
            let i = 1;
            let left = 2 * i;
            let right = 2* i +1;
            while(heap[i] >= heap[left] || heap[i] >= heap[right]) {
                    if(heap[left] < heap[right]) {
                        [heap[i], heap[left]] = [heap[left], heap[i]];
                        i=2*i
                    } else {
                            [heap[i], heap[right]] = [heap[left], heap[i]];
                            i =2*i +1;
                    };
                    left = 2 * i +1;
                    right = 2*i +1;
                    if  (heap[left] == undefined || heap [right] == undefined) {
                        break;
                    };
                };

                console.log('logging heap');
                console.log(heap);
            } else if (heap.length ==2) {
                heap.splice(1,1);
                console.log('logging heap');
                console.log(heap);
            } else {
                console.log('logging heap');
                console.log(heap);
                return null;
            }
                console.log()
                console.log('logging heap');
                console.log(heap);
                console.log('smallest');
                console.log(smallest);
                return smallest;
        };
};

// console.log(MinHeap.insert);

// MinHeap.insert(5);
const newMinHeap = new MinHeap();

const testArray = [5,6,3,14,67,3,5,23,1,90];
testArray.forEach((element)=>{
    newMinHeap.insert(element)
})


newMinHeap.remove();
