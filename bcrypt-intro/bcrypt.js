// const bcrypt = require('bcrypt')
import bcrypt from 'bcryptjs'

const password1 = 'banana123'
const password2 = 'Helloironhack'

// for (let saltRounds = 10; saltRounds < 19; saltRounds++) {
//   console.time(`bcrypt | cost: ${saltRounds}, time to hash`)
//   bcrypt.hashSync(password1, saltRounds)
//   console.timeEnd(`bcrypt | cost: ${saltRounds}, time to hash`)
// }

const salt1 = bcrypt.genSaltSync(10)
const salt2 = bcrypt.genSaltSync(10)

const hash1 = bcrypt.hashSync(password1, salt1)
const hash2 = bcrypt.hashSync(password2, salt2)

console.log(salt1)
console.log(salt2)

console.log('password1', password1, '------->', hash1)
console.log('password2', password2, '------->', hash2)

const verifyPass1 = bcrypt.compareSync(password2, hash1)

console.log(verifyPass1)
