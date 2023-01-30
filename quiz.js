// 1.Azimjonning bir poda qo‘ylari bor. U sizga qo‘ylarining jami oyoqlari sonini aytadi. Siz esa podadagi qo‘ylarda jami bo‘lib nechta
// quloq borligini topishingiz kerak

// function sum(num) {
//     return num / 2
// }

//2.Natural son berilgan,uning oxirgi raqamini toping.

// function myFunction(a){
//     let b=String(a).split("").map(num => Number(num))
//   return b[b.length-1]
//   }
//       console.log(myFunction(753));

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

function countHi( b){
    let a='hi'
    return b.split(a).length - 1 } 
    console.log(countHi('abc hi ho'));
    console.log(countHi('ABChi hi'));
    //