import Stack from "./stack";

// 十进制转换为任意进制
// Number.prototype.toString(base) 将十进制数字转换为任意进制
// parseInt(number, base) 将任意进制转换为十进制
export function baseConverter(decNumber, base) {
  const remStack = new Stack();
  let digits = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let number = decNumber;
  let result = "";
  let rem;

  if (!(base >= 2 && base <= 36)) return undefined;

  while (number > 0) {
    rem = number % base;
    remStack.push(rem);
    number = Math.floor(number / base);
  }

  while (!remStack.isEmpty()) {
    result += digits[remStack.pop()];
  }

  return result;
}
