const tutorials = [
  'what does the this keyword mean?',
  'What is the Contutorialuctor OO pattern?',
  'implementing Blockchain Web API',s
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  let modifiedArray=tutorials.map(function(tutorial){
     let separatedArray=tutorial.split(" ");
//Array of words like ["What , "is" , "JSONP"]
       let result=separatedArray.map(function(word){
            return word.charAt(0).toUpperCase()+word.substring(1);
            
})
   //result.join(" ");
console.log(result)



return result.join(" ");
                    });