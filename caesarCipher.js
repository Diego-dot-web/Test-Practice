function caesarCipher(text, key) {
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    const CAlPHA = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

    if (key >= 27) {
        return
    }

    const textArr = text.split('')
    const result = []
    
    for (let i = 0; i < textArr.length; i++) {
        if(textArr[i] !== ' '){
            const index = (item) => item === textArr[i]
            const indexre = alphabet.findIndex(index)
            result.push(CAlPHA[indexre + key])
        } else {
            result.push(' ')
        }
    }

    return result.join('')
}

module.exports = caesarCipher