/**
 * Returns whether a and b contain the same string.  
 * Could compare arrays, string or a combination of both.  
 * i.e. a = ["michael", "chad", "eric"]; b = "michael"; // this would return true. 
 * @param {Array | string} a 
 * @param {Array | string} b 
 * @returns {boolean}
 */
function findOverlap(a, b) {
    let retval = false;

    if (Array.isArray(a) && Array.isArray(b)) {
        retval = a.some(item => b.includes(item))
    } else if (!Array.isArray(a) && Array.isArray(b)) {
        retval = b.includes(a);;
    } else if (Array.isArray(a) && !Array.isArray(b)) {
        retval = a.includes(b);;
    } else {
        retval = (a === b);
    }

    return retval;
}

/**
 * Shuffles the array using a Random Number Generator
 * as well as saving the previous artist as to not play the same artists back to back.
 * @param {Array} array 
 * @returns {Array}
 * @author BackwardsUser
 */
module.exports = (array) => {
    const shuffled_array = [];
    const used = [];
    let last_author = null;
    for (let i = 0; i < array.length; i++) {
        let ran = 0;
        do {
            ran = Math.floor(Math.random() * array.length);
        } while (used.includes(ran) || findOverlap(array[ran].author, last_author));
        last_author = array[ran].author;
        used.push(ran);
        shuffled_array.push(array[ran]);
    }
    return shuffled_array;
}