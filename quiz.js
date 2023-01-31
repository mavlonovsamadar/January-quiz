// 1.Azimjonning bir poda qo‘ylari bor. U sizga qo‘ylarining jami oyoqlari sonini aytadi. Siz esa podadagi qo‘ylarda jami bo‘lib nechta
// quloq borligini topishingiz kerak

// function sum(num) {
//     return num / 2
// }

//2.Natural son berilgan,uning oxirgi raqamini toping.

// function myFunction(a){
//     let b =  String(a).split("")
//  return b[b.length-1]
//   }
//       console.log(myFunction(7536575485));

//3.Kadrlar bo'limida ish haqqini so’mda oladigan 3 nafar xodim ishlaydi. Ulardan eng yuqori maosh oluvchining maoshi eng kam maosh
//oluvchidan qancha farq qilishini aniqlash talab etiladi.

// function sum(a,b,c) {
//     return Math.max(a,b,c) - Math.min(a,b,c)
// }

// console.log(sum(963,487,847));

// 4.Given an array of ints, swap the first and last elements in the array. Return the modified array. The array length will be at least 1.

// function swapEnds(arr) {
//    return arr.reverse() 
// }
// console.log(swapEnds([1,2,3,4]));
// console.log(swapEnds([1,2,3]));
// console.log(swapEnds([8,6,7,9,5]));

// 5.n raqami berilgan bo'lsa, 0, 1, 2, ... n-1 raqamlarini o'z ichiga olgan n uzunlikdagi yangi massivni yarating va qaytaring. Berilgan n 0 bo'lishi mumkin, bu holda faqat 0 uzunlikdagi massivni qaytaring. Uzunlik-0 holati uchun alohida if-iborasi kerak emas; for-loop bu holda tabiiy ravishda 0 marta bajarilishi kerak, shuning uchun u faqat ishlaydi. Yangi massiv yaratish sintaksisi myArray = [].

// function fizzArray(a) {
//     let myArray = [];
//     for(let i=0; i<a; i++){
//      myArray[i]=i
//     }
//    return myArray
// }

// console.log(fizzArray(10));

//6.Boshlanish va tugatish raqamlarini hisobga olgan holda, boshidan oxirigacha, lekin oxirigacha bo'lmagan butun sonlar ketma-ketligini o'z ichiga olgan yangi massivni qaytaring, shuning uchun start=5 va end=10 {5, 6, 7, 8, 9} hosil qiladi. Yakuniy raqam boshlang'ich raqamdan kattaroq yoki teng bo'ladi. E'tibor bering, uzunlik-0 massivi haqiqiydir.

// function fizzArray(a,b) {
//     let myArray = [];
//     for(let i=a; i<b; i++){
//      myArray[i]=i
//     }
//    return myArray
// }

// console.log(fizzArray(5,10));

//7.Return the number of times that the string "hi" appears anywhere in the given string.

// function countHi( b){
//     let a = 'hi'
//     return b.split(a).length - 1 } 
//     console.log(countHi('abc hi ho'));


//8.Return true if the string "cat" and "dog" appear the same number of times in the given string.

// function catDog(str) {
//     let dog = 0;
//     let cat = 0;

//     for (let i = 0; i < str.length - 2; i++) {
//         if (str.charAt(i) == 'c' && str.charAt(i + 1) == 'a' && str.charAt(i + 2) == 't') { cat++; }

//         else if (str.charAt(i) == 'd' && str.charAt(i + 1) == 'o' && str.charAt(i + 2) == 'g') { dog++; }
//     }

//     if (dog == cat)
//         return true;

//     else return false;
// }
// console.log(catDog('catdog'));
// console.log(catDog('1cat1cadodog'));
// console.log(catDog(('catcat')));

//9.Given a string, compute recursively a new string where all the adjacent chars are now separated by a "*".

// function allStar(str) {
//     return str.split('').join('*')
// }
// console.log(allStar("abc"));
// console.log(allStar("hello"));

//10.Given a string and a non-empty substring sub, compute recursively the number of times that sub appears in the string, without the sub strings overlapping.

// function strCount(a, b) {
//     return a.split(b).length - 1
// }
// console.log(strCount('catcowcat', 'cat'));
// console.log(strCount('catcowcat', 'cow'));
// console.log(strCount('catcowcat', 'dog')); 


//11.Given an array of strings, return a new array containing the first N strings. N will be in the range 1..length.

// function wordsFront(a, n) {
//     return a.slice(0,n)
// }
// console.log(wordsFront(['a', 'b', 'c', 'd'], 1));
// console.log(wordsFront(['a', 'b', 'c', 'd'], 2));
// console.log(wordsFront(['a', 'b', 'c', 'd'], 3));


//12.Create a function that takes two arrays and insert the second array in the middle of the first array.

// function tuckIn(arr1, arr2) {
//    arr1.splice(1,0, ...arr2) 
//    return arr1
// }
// console.log(tuckIn([1, 10], [2, 3, 4, 5, 6, 7, 8, 9]));
// console.log(tuckIn([15,150], [45, 75, 35]))
// console.log(tuckIn([[1, 2], [5, 6]], [[3, 4]]));


//13.Take an array of integers (positive or negative or both) and return the sum of the absolute value of each element.

// function getAbsSum(arr) {
//     return arr.map((item)=>Math.abs(item)).reduce((a,b)=> a+b)
// }

// console.log(getAbsSum([2, -1, 4, 8, 10]));
// console.log(getAbsSum([-3, -4, -10, -2, -3]));
// console.log(getAbsSum([2, 4, 6, 8, 10]));
// console.log(getAbsSum([-1]));


//14. 2 ta parametrni o'z ichiga olgan funksiya yarating ("Start", "Stop") va shu oraliqda bo'lgan juft sonlarni yig'indisini qaytaring

// function sum(a,b) {
//     let count = 0;
//     for(let i=a; i<=b; i++){
//         if(i%2==0){ count +=i }
//     }
// return count
// }
// console.log(sum(10,20));
// console.log(sum(51,150));
// console.log(sum(63,97));