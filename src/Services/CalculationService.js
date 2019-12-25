

function calculate(payload)
{
  var nums = payload.input.split(',');
  
  if (nums.length > 2) throw new Error('More than two numbers input.');

  nums = nums.filter(num => !isNaN(num) && num);

  nums = nums.map(num => parseInt(num));

  return nums.reduce((acc, val) => { return acc+val; }, 0);
}

export default {
    calculate: calculate
};