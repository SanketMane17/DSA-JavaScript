function reverseSentence(str) {

    // Another approch

    let ans = [];
    let temp = "";
    for (let i = 0; i < str.length; i++) {
        if(str[i] == " " && temp.length > 0) {
            ans.unshift(temp);
            temp = "";
        } else if(str[i] != " ") {
            temp += str[i];
        }
    }
    if(temp.length > 0)
        ans.unshift(temp);

    let res = "";
    for(let i = 0;i < ans.length;i++) {
        res += ans[i] + " ";
    }
    return res;
    // return ans.join(" ");

    // Approch - 1
    // return str.split(" ").reverse().join(" ");
}

let str = "hello   world";
console.log(reverseSentence(str));