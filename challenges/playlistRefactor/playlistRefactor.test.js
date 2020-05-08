const playlistRefactor = require('./playlistRefactor')

const testOne = {
  input: '',
  output: ''
}

describe('playlistRefactor Test', () => {

  test('testOne', ()=>{
    let result = playlistRefactor(testOne.input)
    expect(result).toEqual(testOne.output);
  })

})


commands:
["add",
 "play",
 "get",
 "add",
 "play",
 "play",
 "get",
 "play",
 "get"]
names:
["I Still Miss Someone",
 "I Still Miss Someone",
 "",
 "Toxicity",
 "I Still Miss Someone",
 "I Still Miss Someone",
 "",
 "I Still Miss Someone",
 ""]
parameters: [1, 751, 0, 584, 1, 824, 0, 220, 0]
Output:
["[Track(name = I Still Miss Someone, duration = 1, pausedOn = 750)]",
 "[Track(name = I Still Miss Someone, duration = 1, pausedOn = 1573), Track(name = Toxicity, duration = 584, pausedOn = 0)]",
 "[Track(name = I Still Miss Someone, duration = 1, pausedOn = 1792), Track(name = Toxicity, duration = 584, pausedOn = 0)]"]
Expected Output:
["[Track(name = I Still Miss Someone, duration = 1, pausedOn = 0)]",
 "[Track(name = I Still Miss Someone, duration = 1, pausedOn = 0), Track(name = Toxicity, duration = 584, pausedOn = 0)]",
 "[Track(name = I Still Miss Someone, duration = 1, pausedOn = 0), Track(name = Toxicity, duration = 584, pausedOn = 0)]"]
Console Output:
PLAY CALLED FOR TIME
751
PLAY CALLED FOR TIME
1
PLAY CALLED FOR TIME
824
PLAY CALLED FOR TIME
220

nput:
commands:
["add",
 "add",
 "add",
 "add",
 "get",
 "move",
 "get",
 "move",
 "get",
 "add",
 "add",
 "get",
 "move",
 "get",
 "move",
 "get"]
names:
["\"Long Gone(From the Bowlin Green)\"",
 "Symphony #9 in D minor(\"Choral\"),Op. 125",
 "I Walk the Line",
 "Jackie Cane",
 "",
 "Symphony #9 in D minor(\"Choral\"),Op. 125",
 "",
 "I Walk the Line",
 "",
 "OoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOo",
 "Toxicity",
 "",
 "Toxicity",
 "",
 "Toxicity",
 ""]
parameters: [1, 509, 1, 568, 0, 0, 0, 2, 0, 1, 1000, 0, 3, 0, 2, 0]
Output:
["[Track(name = \"Long Gone(From the Bowlin Green)\", duration = 1, pausedOn = 0), Track(name = Symphony #9 in D minor(\"Choral\"),Op. 125, duration = 509, pausedOn = 0), Track(name = I Walk the Line, duration = 1, pausedOn = 0), Track(name = Jackie Cane, duration = 568, pausedOn = 0)]",
 "[Track(name = Symphony #9 in D minor(\"Choral\"),Op. 125, duration = 509, pausedOn = 0), Track(name = \"Long Gone(From the Bowlin Green)\", duration = 1, pausedOn = 0), Track(name = Symphony #9 in D minor(\"Choral\"),Op. 125, duration = 509, pausedOn = 0), Track(name = I Walk the Line, duration = 1, pausedOn = 0), Track(name = Jackie Cane, duration = 568, pausedOn = 0)]",
 "[Track(name = Symphony #9 in D minor(\"Choral\"),Op. 125, duration = 509, pausedOn = 0), Track(name = \"Long Gone(From the Bowlin Green)\", duration = 1, pausedOn = 0), Track(name = I Walk the Line, duration = 1, pausedOn = 0), Track(name = Symphony #9 in D minor(\"Choral\"),Op. 125, duration = 509, pausedOn = 0), Track(name = I Walk the Line, duration = 1, pausedOn = 0), Track(name = Jackie Cane, duration = 568, pausedOn = 0)]",
 "[Track(name = Symphony #9 in D minor(\"Choral\"),Op. 125, duration = 509, pausedOn = 0), Track(name = \"Long Gone(From the Bowlin Green)\", duration = 1, pausedOn = 0), Track(name = I Walk the Line, duration = 1, pausedOn = 0), Track(name = Symphony #9 in D minor(\"Choral\"),Op. 125, duration = 509, pausedOn = 0), Track(name = I Walk the Line, duration = 1, pausedOn = 0), Track(name = Jackie Cane, duration = 568, pausedOn = 0), Track(name = OoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOo, duration = 1, pausedOn = 0), Track(name = Toxicity, duration = 1000, pausedOn = 0)]",
 "[Track(name = Symphony #9 in D minor(\"Choral\"),Op. 125, duration = 509, pausedOn = 0), Track(name = \"Long Gone(From the Bowlin Green)\", duration = 1, pausedOn = 0), Track(name = I Walk the Line, duration = 1, pausedOn = 0), Track(name = Toxicity, duration = 1000, pausedOn = 0), Track(name = Symphony #9 in D minor(\"Choral\"),Op. 125, duration = 509, pausedOn = 0), Track(name = I Walk the Line, duration = 1, pausedOn = 0), Track(name = Jackie Cane, duration = 568, pausedOn = 0), Track(name = OoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOo, duration = 1, pausedOn = 0), Track(name = Toxicity, duration = 1000, pausedOn = 0)]",
 "[Track(name = Symphony #9 in D minor(\"Choral\"),Op. 125, duration = 509, pausedOn = 0), Track(name = \"Long Gone(From the Bowlin Green)\", duration = 1, pausedOn = 0), Track(name = Toxicity, duration = 1000, pausedOn = 0), Track(name = I Walk the Line, duration = 1, pausedOn = 0), Track(name = Toxicity, duration = 1000, pausedOn = 0), Track(name = Symphony #9 in D minor(\"Choral\"),Op. 125, duration = 509, pausedOn = 0), Track(name = I Walk the Line, duration = 1, pausedOn = 0), Track(name = Jackie Cane, duration = 568, pausedOn = 0), Track(name = OoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOo, duration = 1, pausedOn = 0), Track(name = Toxicity, duration = 1000, pausedOn = 0)]"]
Expected Output:
["[Track(name = \"Long Gone(From the Bowlin Green)\", duration = 1, pausedOn = 0), Track(name = Symphony #9 in D minor(\"Choral\"),Op. 125, duration = 509, pausedOn = 0), Track(name = I Walk the Line, duration = 1, pausedOn = 0), Track(name = Jackie Cane, duration = 568, pausedOn = 0)]",
 "[Track(name = Symphony #9 in D minor(\"Choral\"),Op. 125, duration = 509, pausedOn = 0), Track(name = \"Long Gone(From the Bowlin Green)\", duration = 1, pausedOn = 0), Track(name = I Walk the Line, duration = 1, pausedOn = 0), Track(name = Jackie Cane, duration = 568, pausedOn = 0)]",
 "[Track(name = Symphony #9 in D minor(\"Choral\"),Op. 125, duration = 509, pausedOn = 0), Track(name = \"Long Gone(From the Bowlin Green)\", duration = 1, pausedOn = 0), Track(name = I Walk the Line, duration = 1, pausedOn = 0), Track(name = Jackie Cane, duration = 568, pausedOn = 0)]",
 "[Track(name = Symphony #9 in D minor(\"Choral\"),Op. 125, duration = 509, pausedOn = 0), Track(name = \"Long Gone(From the Bowlin Green)\", duration = 1, pausedOn = 0), Track(name = I Walk the Line, duration = 1, pausedOn = 0), Track(name = Jackie Cane, duration = 568, pausedOn = 0), Track(name = OoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOo, duration = 1, pausedOn = 0), Track(name = Toxicity, duration = 1000, pausedOn = 0)]",
 "[Track(name = Symphony #9 in D minor(\"Choral\"),Op. 125, duration = 509, pausedOn = 0), Track(name = \"Long Gone(From the Bowlin Green)\", duration = 1, pausedOn = 0), Track(name = I Walk the Line, duration = 1, pausedOn = 0), Track(name = Toxicity, duration = 1000, pausedOn = 0), Track(name = Jackie Cane, duration = 568, pausedOn = 0), Track(name = OoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOo, duration = 1, pausedOn = 0)]",
 "[Track(name = Symphony #9 in D minor(\"Choral\"),Op. 125, duration = 509, pausedOn = 0), Track(name = \"Long Gone(From the Bowlin Green)\", duration = 1, pausedOn = 0), Track(name = Toxicity, duration = 1000, pausedOn = 0), Track(name = I Walk the Line, duration = 1, pausedOn = 0), Track(name = Jackie Cane, duration = 568, pausedOn = 0), Track(name = OoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOo, duration = 1, pausedOn = 0)]"]
Console Output:
Empty


////////

Time's Up!
The test is now over, and you may not make further changes.
You have one minute to submit your work if you have not done so already.
dataMeans
(
0:00:53
)
Codewriting

You are given the files data.json and data.csv in the /root/devops/ directory.

data.json contains a JSON array of objects with the following format:

{
    "id": string,
    "id2": string,
    "key": string,
    "created": number, // UNIX timestamp (UTC) in milliseconds
    "district": string
}
while data.csv has the following columns

id,sla,overdue,x,y,type
string,number,number,number,number,number
where id corresponds to id in data.json.

Find out which day of the week has the lowest mean overdue value, and output it to the console.

Next, determine which district's mean location (x and y coordinates) is closest to the mean location of all data, ignoring data from district Unknown. Print this district's name on the next line.

Example

For the following data.json

[
    {"id": "1", "id2": "01", "key": "A", "created": 1518066000000, "district": "A"},
    {"id": "2", "id2": "02", "key": "B", "created": 1518066010000, "district": "Z"},
    {"id": "3", "id2": "03", "key": "C", "created": 1358517124000, "district": "C"},
    {"id": "4", "id2": "15", "key": "D", "created": 1358517113000, "district": "A"},
    {"id": "0", "id2": "10", "key": "D", "created": 1358517114000, "district": "Z"},
    {"id": "7", "id2": "20", "key": "Z", "created": 1517793152000, "district": "F"}
]
and data.csv

id,sla,overdue,x,y,type
4,10.0,-8.98,3105443.57,13832598.28,3.0
1,14.0,-7.79,3047695.62,13826869.96,3.0
3,10.0,-8.59,3078170.34,13820368.28,3.0
2,10.0,-8.98,3105443.57,13832598.28,3.0
7,14.0,-7.79,3047695.62,13826869.96,3.0
0,10.0,-8.59,3078170.34,13820368.28,3.0
the output for this should be:

Friday
C
[execution time limit] 25 seconds (js)
JavaScript (ES6)
12
console.log('Hello world');

TESTS
Test 1
Input:
View the setup script
Expected Output:
Friday
C
Click the "Run Tests" button to see output and console logs.
Test 2
Test 3
Test 4
Test 5
Test 6
Formatting
Editor Mode
VS Code
Theme
Dark
Tab Size
Auto
Font Size
14px
Auto-brackets
Minimap
Code Completion
Error Highlighting
Hotkeys
CTRL/CMD + Enter
Submit
CTRL/CMD + R
Run
CTRL/CMD + S
Save
0/300

resetTrack

You are given the files data.json and data.csv in the /root/devops/ directory.

data.json contains a JSON array of objects with the following format:

{
    "id": string,
    "id2": string,
    "key": string,
    "created": number, // UNIX timestamp (UTC) in milliseconds
    "district": string
}
while data.csv has the following columns

id,sla,overdue,x,y,type
string,number,number,number,number,number
where id corresponds to id in data.json.

Find out which day of the week has the lowest mean overdue value, and output it to the console.

Next, determine which district's mean location (x and y coordinates) is closest to the mean location of all data, ignoring data from district Unknown. Print this district's name on the next line.

Example

For the following data.json

[
    {"id": "1", "id2": "01", "key": "A", "created": 1518066000000, "district": "A"},
    {"id": "2", "id2": "02", "key": "B", "created": 1518066010000, "district": "Z"},
    {"id": "3", "id2": "03", "key": "C", "created": 1358517124000, "district": "C"},
    {"id": "4", "id2": "15", "key": "D", "created": 1358517113000, "district": "A"},
    {"id": "0", "id2": "10", "key": "D", "created": 1358517114000, "district": "Z"},
    {"id": "7", "id2": "20", "key": "Z", "created": 1517793152000, "district": "F"}
]
and data.csv

id,sla,overdue,x,y,type
4,10.0,-8.98,3105443.57,13832598.28,3.0
1,14.0,-7.79,3047695.62,13826869.96,3.0
3,10.0,-8.59,3078170.34,13820368.28,3.0
2,10.0,-8.98,3105443.57,13832598.28,3.0
7,14.0,-7.79,3047695.62,13826869.96,3.0
0,10.0,-8.59,3078170.34,13820368.28,3.0
the output for this should be:

Friday
C
[execution time limit] 25 seconds (js)
