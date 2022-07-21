function countVowels(word) {
    let cnt = 0;
    let vowels = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U'];
    for (let i = 0; i < word.length; i++) {
        if (vowels.includes(word[i])) {
            cnt++;
        }
    }

    return cnt;
}

console.log("Total vowels = " + countVowels('language'));