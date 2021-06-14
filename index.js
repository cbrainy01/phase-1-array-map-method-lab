const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = (input) => {
  
 const capped = tutorials.map( (sentence) => { const arrayOfSplits = sentence.split(" ");   


  const capLines = arrayOfSplits.map( (word) => word[0].toUpperCase() + word.slice(1) );
 const finalArray = capLines.join(" ");
    
  return finalArray;
   });
 
   return capped;
  
}

