 module.exports = function toReadable (number) {
  let simpNumb = ['zero','one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven',
                   'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  let compNumb = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  let simpNum = Math.floor(number / 10) - 2;
  let remainder = number % 10;
  let compNum = Math.floor(number / 100);
  let rem = number % 100;
  let strRem = String(rem);
  let arrRem = strRem.split('');
  if (number < 20) {
      return simpNumb[number];
  } else if (number % 10 == 0 && number < 100) {
      return compNumb[simpNum];
  } else if(number == 100) {
      return 'one hundred';
  } else if (number > 20 && number < 100) {
    return compNumb[simpNum] + " " + simpNumb[remainder];
  } else if (number % 100 == 0 && number >= 100) {
      return simpNumb[compNum] + ' hundred';
  } else if (rem < 20) {
      return simpNumb[compNum] + ' hundred ' + simpNumb[rem];
  } else if (rem % 10 == 0) {
    return simpNumb[compNum] + ' hundred ' + compNumb[rem / 10 - 2]
  } else if (rem > 20) {
      return simpNumb[compNum] + ' hundred ' + compNumb[arrRem[0] - 2] + ' ' + simpNumb[rem % 10];
}
 }
