function strReplace(s) {
    let res = "";
    for (let i = 0; i < s.length; i++) {
        res += s[i];
        if (s[i] === " ")
            res += "%20";
    }
    console.log(res);
}

strReplace("Hello World");