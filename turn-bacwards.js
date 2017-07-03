function turnBackwards(word) {
  const newWord = String(word);

  
  return newWord.split('').reverse('').join('');
}

console.log(turnBackwards(123456789));