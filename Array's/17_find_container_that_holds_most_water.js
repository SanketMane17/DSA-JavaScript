

function maxArea(height) {
    let ans = 0;

    // Two pointer approach 
    // TC - O(n)

    let left = 0, right = height.length - 1;

    while (left < right) {
        let minItem = Math.min(height[left], height[right]);
        let distance = right - left;

        let area = minItem * distance;
        if (area > ans) {
            ans = area;
        }

        if (height[left] < height[right])
            left++;
        else
            right--;
    }

    // Time complexity - O(n^2)
    // for (let i = 0; i < height.length; i++) {
    //     for (let j = i + 1; j < height.length; j++) {
    //         let minItem = Math.min(height[i], height[j]);
    //         let distance = j - i;

    //         let area = minItem * distance;
    //         if (area > ans)
    //             ans = area;
    //     }
    // }
    return ans;
}


let height = [6, 4, 2, 5, 4, 6, 1, 3, 5];

let ans = maxArea(height);

console.log("Max area = " + ans);