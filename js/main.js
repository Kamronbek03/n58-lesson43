// Uyga vazifa //////////////////
// Array //

// N1 //
// function getLevel2(n) {
//   var arr2 = [];
//   for (let i = 1; i <= n; i++) {
//     arr2[i - 1] = 2 ** i;
//   }
//   console.log(arr2);
// }
// getLevel2(5);

// N2 //
// let n = +prompt("n=");
// let A = +prompt("A=");
// let B = +prompt("B=");
// let arr = [];
// arr[0] = A;
// arr[1] = B;
// for (let i = 3; i <= n; i++) {
//   let a = 0;
//   for (let j of arr) {
//     a += j;
//   }
//   arr[i - 1] = a;
// }
// console.log(arr);

// N3 //
// let arr = prompt("Ixtiyoriy stringlar kiriting!").split(" ");
// console.log(arr.reverse());

// N4 //
// let arr = [4, 9, 7, 8, 6, 5];
// let b = 0;
// let a = "";
// for (let i of arr) {
//   if (i % 2 !== 0) {
//     a += i + " ";
//     b += 1;
//   }
// }
// console.log(a + " toq sonlar soni=" + b);

// N5 //
// let arr = [4, 5, 7, 8, 6, 9];
// let juftArr = [];
// let toqArr = [];
// for (let i of arr) {
//   if (i % 2 === 0) {
//     juftArr.push(i);
//   } else {
//     toqArr.push(i);
//   }
// }
// console.log(...juftArr, ...toqArr.reverse());

// N6 //
// let n = 10;
// let arr = [1, 12, 20, "olma", "behi", 98, "Shahboz", "Olim", "Qaymoq", "Pepsi"];
// for (let i = 0; i < n; i += 2) {
//   console.log(arr[i]);
// }

// N7 //
// let n = 11;
// let arr = [
//   1,
//   12,
//   20,
//   "olma",
//   "behi",
//   98,
//   "Shahboz",
//   "Olim",
//   "Qaymoq",
//   "Pepsi",
//   "Coca-cola",
// ];
// for (n = n - 1; n >= 0; n -= 2) {
//   console.log(arr[n]);
// }

// N8 //
// let n = 14;
// let arr = [
//   1,
//   12,
//   20,
//   "olma",
//   "behi",
//   98,
//   "Shahboz",
//   "Olim",
//   "Qaymoq",
//   "Pepsi",
//   "Coca-cola",
//   8764,
//   "2714Akro",
//   "QodirAli",
// ];
// for (let i = 0; i < n; i += 2) {
//   console.log(arr[i]);
// }
// for (let i = 1; i < n; i += 2) {
//   console.log(arr[i]);
// }

// N9 //
// let n = 12;
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
// let juftArr = [];
// let toqArr = [];
// for (let i = 0; i < n; i += 2) {
//   juftArr.push(arr[i]);
// }
// for (let i = 1; i < n; i += 2) {
//   toqArr.push(arr[i]);
// }
// console.log(...toqArr, ...juftArr.reverse());

// N10 //
// function customOrderArray(array) {
//   let result = [];
//   let left = 0;
//   let right = array.length - 1;
//   let toggle = true;

//   while (left <= right) {
//     if (toggle) {
//       result.push(array[left++]);
//     } else {
//       result.push(array[right--]);
//     }
//     toggle = !toggle;
//   }
//   console.log(result);
// }
// customOrderArray([0, 1, 2, 3, 4, 5, 6, 7]);

// N11 //
// function RangeOutSum(arr) {
//   var K = 2;
//   var L = 7;
//   var sum = 0;
//   for (let i in arr) {
//     if (i < K) {
//       sum += arr[i];
//     } else if (i > L) {
//       sum += arr[i];
//     }
//   }
//   console.log(sum);
// }
// RangeOutSum((arr = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]));

// N12 //
// let arr = [10, false, "", "Abdulaziz", null];
// let truthyArr = arr.filter((element) => element);
// let falsyArr = arr.filter((element) => !element);

// console.log("Truthy:", truthyArr);
// console.log("Falsy:", falsyArr);

// N13 //
// function getOddMin(arr) {
//   var juftArr = [];
//   for (let i in arr) {
//     if (i % 2 === 0) {
//       juftArr.push(arr[i]);
//     }
//   }
//   var min = Math.min(...juftArr);
//   console.log(min);
// }
// getOddMin((arr = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]));

// N14 //
// function getEvenMax(arr) {
//   var toqArr = [];
//   for (let i in arr) {
//     if (i % 2 !== 0) {
//       toqArr.push(arr[i]);
//     }
//   }
//   var max = Math.max(...toqArr);
//   console.log(max);
// }
// getEvenMax((arr = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]));

// N15 //
// function findLocalMaximumIndex(array) {
//   for (let i = 1; i < array.length - 1; i++) {
//     if (array[i] > array[i - 1] && array[i] > array[i + 1]) {
//       console.log(i);
//       return;
//     }
//   }
//   console.log("No local maximum found.");
// }

// findLocalMaximumIndex([1, 3, 2, 5, 4]);
