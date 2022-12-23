const psbb = (inputNumberFamily, inputMemberInFamily) => {
  inputMemberInFamily = inputMemberInFamily.split(' ')
  if(+inputNumberFamily !== inputMemberInFamily.length) return `Input must be equal with count of family`
  let totalBuss = 0
  inputMemberInFamily.forEach(member => totalBuss = totalBuss + +member)
  totalBuss = Math.ceil(totalBuss/4)
  return `Minimum bus required is: ${totalBuss}`
}

console.log(psbb('5', '1 2 4 3 3'))
console.log(psbb('8', '2 3 4 4 2 1 3 1'))
console.log(psbb('5', '1 5'))