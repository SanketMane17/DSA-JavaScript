function matchingStrings(strings, queries) {
    let ans = [];

    let cnt = 0;
    for (let i = 0; i < queries.length; i++) {
        for (let j = 0; j < strings.length; j++) {
            cnt++
            if (queries[i] !== strings[j]) {
                ans.push(cnt);
                cnt = 0;
            }
        }
    }

    return ans;
}

let queries = ['ab', 'abc', 'bc'];
let strings = ['ab', 'ab', 'abc'];

console.log(matchingStrings(strings, queries));


