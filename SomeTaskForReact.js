function sayLouder(text) {
   return text.toUpperCase();
}
console.log(sayLouder("It works"));
console.log(sayLouder("how are you?"));



function getPositiveNumber(num) {

    return num.filter((num) => num > 0);

}
console.log(getPositiveNumber([10,-5,2,-4]));








function getPassingTests(result){

    return result.filter((result) => result.grade >= 10);

}

const data = [{id:1,grade:10},{id:2,grade:4},{id:3,grade:18}];
console.log(getPassingTests(data));