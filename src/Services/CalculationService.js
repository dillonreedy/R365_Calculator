

function calculate(payload)
{
  var delims = [',','\n'];

  var nums = payload.input.split(new RegExp(delims.join('|'),'g'));
  
  nums = nums.filter(num => !isNaN(num) && num);

  nums = nums.map(num => parseInt(num));

  return nums.reduce((acc, val) => { return acc+val; }, 0);
}

export default {
    calculate: calculate
};