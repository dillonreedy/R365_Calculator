
function detectNegativeNums(nums)
{
  var negativeNums = nums.filter(num => num < 0);

  if (negativeNums.length > 0)
    throw new Error(`The following negative numbers were in your input: ${negativeNums.toString()}`);
}

function calculate(payload)
{
  var delims = [',','\n'];

  var nums = payload.input.split(new RegExp(delims.join('|'),'g'));
  
  nums = nums.filter(num => !isNaN(num) && num);

  nums = nums.map(num => parseInt(num));

  detectNegativeNums(nums);

  nums = nums.filter(num => num < 1001);

  return nums.reduce((acc, val) => { return acc+val; }, 0);
}

export default {
    calculate: calculate
};