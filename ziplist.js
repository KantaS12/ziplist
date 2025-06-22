"use strict";
function zipList(list1, list2) {
    const result = [];
    for (let i = 0; i < list1.length; i++) {
        result.push(list1[i], list2[i]);
    }
    return result;
}
console.log(zipList([1, 2, 3], ['a', 'b', 'c'])); // [1, 'a', 2, 'b', 3, 'c']
function zipListTheFunctionalWay(list1, list2) {
    const result = [];
    list1.forEach((item, index) => {
        result.push(item, list2[index]);
    });
    return result;
}
console.log(zipListTheFunctionalWay([1, 2, 3], ['a', 'b', 'c'])); // [1, 'a', 2, 'b', 3, 'c']
