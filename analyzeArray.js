function analyzeArray(arr) {
    class Object {
        constructor(average, min, max, length){
            this.average = average
            this.min = min
            this.max = max
            this.length = length
        }
    }

    const calcMin = (arr) => {
        let value = arr[0]

        arr.forEach(element => {
            if(element < value) value = element
        });

        return value
    }

    const calcMax = (arr) => {
        let value = arr[0]

        arr.forEach(element => {
            if(element > value) value = element
        });

        return value
    }

    const calAvr = (arr) => {
        let sum = 0

        arr.forEach(element => {
            sum += element
        })

        return Math.floor(sum / arr.length)
    }

    const objecto = new Object(calAvr(arr),calcMin(arr),calcMax(arr), arr.length)

    console.log(objecto)
    return new Object
}

analyzeArray([1, 8, 3, 4, 2, 6])

module.exports = analyzeArray