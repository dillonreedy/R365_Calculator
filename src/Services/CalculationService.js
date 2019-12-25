function escapeRegExp(text) {
  return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
}

function getRegexAndNumbers(inputStr)
{
    var singleCharRegex = /\/\/([^])\n([^]*)/;
    var multiCharRegex = /\/\/(\[[^]*\])\n([^]*)/;
    var delims = [',', '\n'];

    if (multiCharRegex.test(inputStr))
    {
      delims.push(inputStr.match(multiCharRegex)[1]);
      inputStr = inputStr.match(multiCharRegex)[2];
    }
    else if (singleCharRegex.test(inputStr))
    {
      delims.push(inputStr.match(singleCharRegex)[1]);
      inputStr = inputStr.match(singleCharRegex)[2];
    }

    delims = delims.map(delim => {
      return (delim.length === 1) ?  escapeRegExp(delim) : delim;
    });
    
    return [
        new RegExp(delims.join('|'),'g'),
        inputStr,
    ];
}

function detectNegativeNums(nums)
{
  var negativeNums = nums.filter(num => num < 0);

  if (negativeNums.length > 0)
    throw new Error(`The following negative numbers were in your input: ${negativeNums.toString()}`);
}

function calculate(payload)
{
  var [regex, extractedInputStr] = getRegexAndNumbers(payload.input);

  var nums = extractedInputStr.split(regex);
  
  nums = nums.filter(num => !isNaN(num) && num);

  nums = nums.map(num => parseInt(num));

  detectNegativeNums(nums);

  nums = nums.filter(num => num < 1001);

  return nums.reduce((acc, val) => { return acc+val; }, 0);
}

export default {
    calculate: calculate
};