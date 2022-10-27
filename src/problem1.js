/*
  구현할 기능 목록
  [O] 왼쪽 페이지 번호와 오른쪽 페이지 번호가 연속된 숫자인지 확인하는 기능 | return 값 : true/false | 함수명 : isConsecutiveNumbers    
  [O] 페이지 번호의 각 자리 숫자를 모두 더하는 기능 | return 값 : 각 자리 숫자의 합 
  [O] 페이지 번호의 각 자리 숫자를 모두 곱하는 기능 | return 값 : 각 자리 숫자의 곱 | 함수명 : getProductOfDigits
  [O] 계산된 값(인자로 주어진 값) 중 가장 큰 값을 구하는 기능 | return 값 : 가장 큰 수 | 함수명 : getMaxScore 
  [ ] 점수를 비교해 게임의 결과를 return 하는 기능 | return 값 : 0(무승부)/1(포비 승)/2(크롱 승) 
*/

function problem1(pobi, crong) {
  if (!(isConsecutiveNumbers(pobi) && isConsecutiveNumbers(crong))) return -1;
  let maxScoreOfPobi = getMaxScore(getSumOfDigits(pobi), getProductOfDigits(pobi));
  let maxScoreOfCrong = getMaxScore(getSumOfDigits(crong), getProductOfDigits(crong));
}

function isConsecutiveNumbers(numbers) {
  return numbers[0] + 1 == numbers[1];
}

function getSumOfDigits(number) {
  return number
    .toString()
    .split('')
    .reduce((accSum, curDigit) => accSum + parseInt(curDigit), 0);
}

function getProductOfDigits(number) {
  return number
    .toString()
    .tosplit('')
    .reduce((accProduct, curDigit) => accProduct * curDigit, 1);
}

function getMaxScore(scores) {
  return Math.max(scores);
}

module.exports = problem1;
