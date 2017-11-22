// Merge two already sorted binary arrays. Bonus, solve in O(n) time

// Following solution works for both at O(n) time complexity

var arr1 = [1,3,5,7,9],
    arr2 = [2,4,6,8,10];

function myFunction(arr1, arr2) {
    var arr1Head,
        arr2Head,
        i = 0,
        pos1 = 0,
        pos2 = 0,
        mergedArr = [],
        mergedLen = (arr1.length + arr2.length);
    while ( mergedArr.length < mergedLen ) {
        arr1Head = arr1[pos1];
        arr2Head = arr2[pos2];
        
        if ( arr1Head && arr1Head < arr2Head ) {
            mergedArr[i] = arr1Head;
            pos1++;
            i++;
        } else {
            mergedArr[i] = arr2Head;
            pos2++;
            i++;
        }
    }
    return mergedArr;
}

console.log(myFunction(arr1,arr2));
