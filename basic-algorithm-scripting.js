//	Revers a String
function reverseString(str) {
  return str.split('').reverse('').join('');
}
reverseString("hello");

//	Factorialize a Number
function factorialize(num) {
  var factor = 1;
  for(var i = 1; i <= num; i++) {
    factor *= i;
  }
  return factor;
}
factorialize(5);

// 	Check for Palindromes
function palindrome(str) {
  var str1 = str.toLowerCase().replace(/[^A-Z0-9]/ig, '').split('').reverse().join('');
  var str2 = str.toLowerCase().replace(/[^A-Z0-9]/ig, '');
  return str1 === str2 ? true : false;
}
palindrome("eye");

//	Find the Longest Word in a String
function findLongestWord(str) {
  return str.split(' ').reduce( (max, item) => max < item.length ? item.length : max, 0);
}
findLongestWord("The quick brown fox jumped over the lazy dog");

// Title Case a Sentence 
function titleCase(str) {
  return str
        .toLowerCase()
        .split(' ')
        .map(item => item.replace(item[0], item[0].toUpperCase()))
        .join(' ');
}
titleCase("I'm a little tea pot");

//	Return Largest Numbers in Arrays
function largestOfFour(arr) {
  arr = arr.map( item => Math.max(...item));
  return arr;
}
largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

// Confirm the Ending
function confirmEnding(str, target) {
  var endOfStr = str.substr( str.length - target.length, target.length);
  return endOfStr === target ? true : false;
}
confirmEnding("Bastian", "n");

//	Repeat a string repeat a string
function repeatStringNumTimes(str, num) {
  var answer = "";
  for(var i = 0; i< num; i++) {
    answer += str;
  }
  return answer;
}
repeatStringNumTimes("abc", 3);

//	Truncate a string
function truncateString(str, num) {
  if(num <= 3) {
    return str.slice(0, num).concat('...');
  }
  if(str.length <= num) {
    return str;
  }
  return str.slice(0, num-3).concat('...');
}
truncateString("A-tisket a-tasket A green and yellow basket", 11);

//	Chunky Monkey
function chunkArrayInGroups(arr, size) {
  var newArr = [];
  for(var i = 0; i < arr.length; i += size) {
    newArr.push(arr.slice(i, size + i));
  }
  return newArr;
}
chunkArrayInGroups(["a", "b", "c", "d", "e"], 2);

//	Slasher Flick
function slasher(arr, howMany) {
  return arr.slice(howMany, arr.length);
}
slasher([1, 2, 3], 2);

//	Mutations
function mutation(arr) {
  var firstWord = arr[0].toLowerCase().split('');
  var secWord = arr[1].toLowerCase().split('');
  for( var i = 0; i < secWord.length; i++) {
    if (firstWord.indexOf(secWord[i]) === -1) {
      return false;
    }
  }
  return true;
}
mutation(["hello", "hey"]);

//	Falsy Bouncer
function bouncer(arr) {
  return arr.filter(item => Boolean(item));
}
bouncer([7, "ate", "", false, 9]);

//	Seek and Destroy
function destroyer(arr) {
  var args = Array.from(arguments).slice(1, arguments.length);
  return arr.filter(item => args.indexOf(item) === -1);
}  
destroyer([1, 2, 3, 1, 2, 3], 2, 3);

//	Where do I belong
function getIndexToIns(arr, num) {
  arr.push(num);
  return arr.sort((a, b) => a - b).indexOf(num);
}
getIndexToIns([40, 60], 50);

//	Caesars Cipher
function rot13(str) {
  function encode(character) {
    var charCode = character.charCodeAt();
    if(charCode >= 65 && charCode <= 90) {
      return charCode + 13 > 90 ? (charCode % 26) + 65 : charCode + 13;
      }
    return character;
  }
  return str
            .split('')
            .map(encode)
            .map(item => typeof item !== 'number' ? item : String.fromCharCode(item))
            .join('');
}
rot13("SERR PBQR PNZC");