
// Input: 
// Time intervals

// 0 20
// 5 10
// 10 15

// Output 1
// 2
// Explanation:
// One room can host the 1st meeting (0-20) and the other room can host both the 2nd meeting (5-10) and 3rd meeting (10-15), one after the other.
// So, only 2 rooms are required if total for the 3 meetings.


function minimunMeetings(meetings) {

    meetings.sort((a, b) => a[0] - b[0])
    console.log(meetings);

    let cnt = 0;
    let prev_st = meetings[0][0], prev_end = meetings[0][1];
    for(let i = 1;i < meetings.length;i++) {
        let curr_st = meetings[i][0], curr_end = meetings[i][1];
        
        if(curr_st >= prev_end) {
            cnt++;
        }
        prev_st = curr_st;
        prev_end = curr_end;
    }

    return cnt;
}

let meetings = [[0, 20], [5, 10], [10, 15]];
console.log(minimunMeetings(meetings));