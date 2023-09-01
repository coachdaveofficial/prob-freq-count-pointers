// add whatever parameters you deem necessary

// Write a function called constructNote, which accepts two strings, a message and some letters. 
// The function should return true if the message can be built with the letters that you are given; otherwise, it should return false.

// Assume that there are only lowercase letters and no space or special characters in both the message and the letters.

// Constraints:

// Time Complexity: O(M + N) - If M is the length of message and N is the length of letters:

// Examples:

// constructNote('aa', 'abc') // false
// constructNote('abc', 'dcba') // true
// constructNote('aabbcc', 'bcabcaddff') // true

function constructNote(msg, letters) {
    if (!msg) return true;
    if (!letters) return false;
    let maxLength = Math.max(msg.length, letters.length);
    let count = {};

    for (let i =0; i < maxLength; i++) {
        if (msg[i] !== undefined) {
            count[msg[i]] = (count[msg[i]] || 0) - 1;
        }
        if (letters[i] !== undefined) {
            count[letters[i]] = (count[letters[i]] || 0) + 1;
        }
    }
    return Object.values(count).every((num) => num > -1)
}
