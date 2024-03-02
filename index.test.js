const caesar = require("./caesarCipher")
const analyzeArray = require("./analyzeArray");


it("first test", () => {
    expect(caesar('marcus crassus', 5)).toBe('RFWHZX HWFXXZX')
})

it("test2", () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toBe({ average: 4, min: 1, max: 8, length: 6 })
})