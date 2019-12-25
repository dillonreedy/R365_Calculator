function escapeRegExp(text) {
  return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
}

function getRegexp(inputStr)
{
  var customDelim = '';
  var delims = [',', '\n'];
   
  if (inputStr.startsWith('//'))
    customDelim = inputStr[2];

  if (customDelim) delims.push(escapeRegExp(customDelim));

  return new RegExp(delims.join('|'),'g');
}

function detectNegativeNums(nums)
{
  var negativeNums = nums.filter(num => num < 0);

  if (negativeNums.length > 0)
    throw new Error(`The following negative numbers were in your input: ${negativeNums.toString()}`);
}

function calculate(payload)
{
  var regex = getRegexp(payload.input);

  if (payload.input.startsWith('//')) payload.input = payload.input.substring(4);

  var nums = payload.input.split(regex);
  
  nums = nums.filter(num => !isNaN(num) && num);

  nums = nums.map(num => parseInt(num));

  detectNegativeNums(nums);

  nums = nums.filter(num => num < 1001);

  return nums.reduce((acc, val) => { return acc+val; }, 0);
}

export default {
    calculate: calculate
};