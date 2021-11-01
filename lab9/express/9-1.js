const bcrypt = require("bcryptjs")

const makeHash = async (myText) => {
    const resultPromise = await bcrypt.hash(myText, 10)
    return resultPromise
}

const compareHash = async (textText, myHash) => {
    const resultCompare = await bcrypt.compare(textText, myHash)
    return resultCompare
}

const textText = '523419'

makeHash(textText).then( hash => {
    console.log(hash)

    const myText = '123'

    compareHash(myText, hash).then(status => {
        console.log(status);
    }).catch(err => {
        console.log(err);
    })

}).catch(err => {
    console.log(err);
})