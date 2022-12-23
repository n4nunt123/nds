const sortCharacter = (input) => {
  input = input.toLowerCase().split('')
  const vowelsObj = {}
  const consonantsObj = {}
  const vowelsOne = []
  const vowelsTwo = []
  const consonantsOne = []
  const consonantsTwo = []

  let a = 0
  let b = 0

  input.forEach(el => {
    if(el === 'a' || el === 'i' || el === 'u' || el === 'e' || el === 'o') {
      if(vowelsObj[el]) vowelsObj[el]++
      else vowelsObj[el] = 1
    }
    else if (el !== ' ') {
      if(consonantsObj[el]) consonantsObj[el]++
      else consonantsObj[el] = 1
    }
  })

  for (const key in vowelsObj) if(a < vowelsObj[key]) a = vowelsObj[key]
  for (const key in consonantsObj) if(b < consonantsObj[key]) b = consonantsObj[key]
  
  for (const key in vowelsObj) {
    if(vowelsObj[key] < a) vowelsOne.push(key)
    else for (let i = 0; i < vowelsObj[key]; i++) vowelsTwo.push(key)
  }
  for (const key in consonantsObj) {
    if(consonantsObj[key] < a) consonantsOne.push(key)
    else for (let i = 0; i < consonantsObj[key]; i++) consonantsTwo.push(key)
  }

  const vowels = [...vowelsTwo, ...vowelsOne].join('')
  const consonants = [...consonantsTwo, ...consonantsOne].join('')

  const result = `Vowel Characters:\n${vowels}\nConsonant Characters:\n${consonants}`
  return result
}

console.log(sortCharacter('Sample Case'))
console.log(sortCharacter('Next Case'))
console.log(sortCharacter('HELLO world'))