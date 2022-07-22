const consonents = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];

const vowels = ['a', 'e', 'i', 'o', 'u'];

str = "glove";
for (let i = 0; i < str.length; i++) {
    let search = 0;
    if(str.search(vowels[i]) != -1) {
        search = str.search(vowels[i]);
        console.log(str[search]);  
    }
}