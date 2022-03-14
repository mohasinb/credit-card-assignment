// Carrying values in Addition
// Implement solution which will count number of carried ones.
// #1 example:
//   1 1
//
//   4 5 6
// + 2 4 6
// -------
//   7 0 2
// Correct answer is 2
// solution(456, 246)
//
// #2 example:
//   0 0
//
//   4 5 6
// + 2 3 3
// -------
//   6 8 9
// Correct answer is 0
// solution(456, 233)
function solution(a, b) {
  var str_1 = a.toString();
  var length_str_1 = str_1.length;
  var str_2 = b.toString();
  var length_str_2 = str_2.length;
  var counter = 0,
    carry = 0;
  while (length_str_1 != 0 || length_str_2 != 0) {
    var i = 0,
      j = 0;
    if (length_str_1 > 0) {
      i = str_1[length_str_1 - 1] - "0";
      console.log(i);
      length_str_1--;
    }
    if (length_str_2 > 0) {
      j = str_2[length_str_2 - 1] - "0";
      console.log(j);
      length_str_2--;
    }
    var add = i + j + carry;
    if (add >= 10) {
      carry = 1;
      counter++;
    } else {
      carry = 0;
    }
  }
  console.log("number of carried ones : " + counter);
}
solution();
