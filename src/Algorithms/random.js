/**
 * This function will get an item from an array using a randomly generated number.
 * The randomly generated number cannot be an already generated number.
 * The randomly obtained item will than be placed in an array.
 * Once the for-loop is finished running it will return the array of now shuffled items
 * @param {Array} array 
 * @returns {Array}
 * @author BackwardsUser
 */
module.exports = (array) => {
    const shuffled_array = [];
    const used = [];
    for (let i = 0; i < array.length; i++) {
        let ran = Math.floor(Math.random() * array.length);
        do {
            ran--
            if (ran < 0) {
                ran = Math.floor(array.length);
            }
        } while (used.includes(ran))
        used.push(ran);
        shuffled_array.push(array[ran]);
    }
    return shuffled_array;
}