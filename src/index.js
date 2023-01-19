module.exports = function check(str, bracketsConfig) {
  let bracketsMapping = {};
  let bracketsCounter = {};
  let stack = [];

  if (str.length % 2 != 0) {
    return false;
  }

  for (let item of bracketsConfig) {
    bracketsMapping[item[0]] = item[1];
    if (item[0] == item[1]) {
      bracketsCounter[item[0]] = 0;
    }
  }
  for (let bracket of str) {
    if (bracket == bracketsMapping[bracket]) {
      if (bracketsCounter[bracket] % 2 == 0) {
        bracketsCounter[bracket]++;
        stack.push(bracket);
        continue;
      } else {
        if (bracketsMapping[stack[stack.length - 1]] == bracket) {
          bracketsCounter[bracket]--;
          stack.pop();
          continue;
        } else {
          return false;
        }
      }
    }
    if (bracket in bracketsMapping) {
      stack.push(bracket);
    } else if (bracketsMapping[stack[stack.length - 1]] == bracket) {
      stack.pop();
    } else {
      return false;
    }
  }
  return true;
}
