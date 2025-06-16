// forEach() = method used to iterate over the elements
//             of an array and apply a specified function (callback)
//             to each element
//
//             array.forEach(callback)

let numbers = [1, 2, 3, 4, 5];

numbers.forEach(triple);
numbers.forEach(display);

function double(element, index, array){
    array[index] = element * 2;
}

function triple(element, index, array){
    array[index] = element * 3;
}

function display(element){
    console.log(element);
}