function palindrome (word) {
    let reverseWord = ''
    for (let i = 0; i < word.length; i++) {
        const currentCharacter = word(i)
        reverseWord = currentCharacter + reverseWord
    }

    return reverseWord === word

}



console.log('Expect true')
console.log(palindrome('noon'))

console.log('Expect false')
console.log(palindrome('horse'))

console.log('Expect true')
console.log(palindrome('racecar'))
