// https://youtu.be/cRHQNNcYf6s?list=PLsJwdvoRsfuSRpq7UNFQvIC3FCjmMAqHg

import User, {printName, printAge} from './user.js'

// doesnt recognise this at first - we need to tell our HTML we are using modules

const user = new User("bob", 20)
console.log(user)

// this is not working - why not?
// ES6 doesnt like it
// changed it back to other way of importing but still not working
// need to use a local server to run it
// can import diff scripts based on if browser supports it or not - nomodule for older browsers
// use babble for modules - will write the conversions for you
// https://www.pmichaels.net/tag/access-to-script-at-from-origin-null-has-been-blocked-by-cors-policy-cross-origin-requests-are-only-supported-for-protocol-schemes-http/