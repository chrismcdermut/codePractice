playlistRefactor Notes go here!

////////////
class Track {
  constructor(name, duration) {
    this.name = name;
    this.duration = duration;
    this.pausedOn = 0;
  }

  play(time) {
    // TODO: implement this method
  }

  reset() {
    // TODO: implement this method
  }

  toString() {
    return `Track(name = ${this.name}, duration = ${this.duration}, pausedOn = ${this.pausedOn})`;
  }
}

class Playlist {
  constructor() {
    this.trackList = [];
  }

  addTrack(name, duration) {
    // TODO: implement this method
  }

  deleteTrack(name) {
    // TODO: implement this method
  }

  playTrack(name, time) {
    // TODO: implement this method
  }

  resetTrack(name) {
    // TODO: implement this method
  }

  trackIndexByName(name) {
    // TODO: implement this method
    return -1;
  }

  moveTrack(name, toIndex) {
    const index = this.trackIndexByName(name);
    if (index === toIndex) {
      return;
    }
    // TODO: complete the implementation of this method
  }

  toString() {
    return '[' + this.trackList.map(track => track.toString()).join(', ') + ']';
  }
}

function playlistRefactoring(commands, names, parameters) {
  const playlist = new Playlist();
  const result = [];

  for (let i = 0; i < commands.length; i++) {
    if (commands[i] === 'add') {
      playlist.addTrack(names[i], parameters[i]);
    } else if (commands[i] === 'delete') {
      playlist.deleteTrack(names[i]);
    } else if (commands[i] === 'play') {
      playlist.playTrack(names[i], parameters[i]);
    } else if (commands[i] === 'reset') {
      if (names[i] === '') {
        playlist.resetTrack();
      } else {
        playlist.resetTrack(names[i]);
      }
    } else if (commands[i] === 'move') {
      playlist.moveTrack(names[i], parameters[i]);
    } else { // commands[i] === 'get'
      result.push(playlist.toString());
    }
  }

  return result;
}


////////////////////////////
class Track {
  constructor(name, duration) {
    this.name = name;
    this.duration = duration;
    this.pausedOn = 0;
  }

  play(time) {
      console.log('PLAY CALLED FOR TIME')
      console.log(time)
    // TODO: implement this method
    // console.log('this.pausedOn')
    // console.log(this.pausedOn)
    // console.log('time')
    // console.log(time)
    if((this.pausedOn+time)<=this.duration){
        this.pausedOn+=time
    } else {
        this.pausedOn = ((this.pausedOn+time)-this.duration)
    }
    // console.log('AFTER this.pausedOn')
    // console.log(this.pausedOn)
  }

  reset() {
    this.pausedOn = 0
  }

  toString() {
    return `Track(name = ${this.name}, duration = ${this.duration}, pausedOn = ${this.pausedOn})`;
  }
}

class Playlist {
  constructor() {
    this.trackList = [];
  }

  addTrack(name, duration) {
    let newTrack = new Track(name,duration);
    this.trackList.push(newTrack)
  }

  deleteTrack(name) {
    this.trackList = this.trackList.filter((track)=>{
        return track.name !== name
    })
  }

  playTrack(name, time) {
    // TODO: implement this method
    this.trackList.forEach((track,i)=>{
        if(track.name === name){
            this.trackList[i].play(time)
        }
    })
  }

  resetTrack(name) {
    // TODO: implement this method
    if(name){
        this.trackList.forEach((track,i)=>{
        if(track.name === name){
            this.trackList[i].reset()
        }
        })
    } else {this.trackList.forEach((track,i)=>{
        track.reset()
        })
    }
  }

  trackIndexByName(name) {
    // TODO: implement this method
    return -1;
  }

  moveTrack(name, toIndex) {
    const index = this.trackIndexByName(name);
    if (index === toIndex) {
      return;
    }
    // TODO: complete the implementation of this method
  }

  toString() {
    return '[' + this.trackList.map(track => track.toString()).join(', ') + ']';
  }
}

function playlistRefactoring(commands, names, parameters) {
  const playlist = new Playlist();
  const result = [];

  for (let i = 0; i < commands.length; i++) {
    if (commands[i] === 'add') {
      playlist.addTrack(names[i], parameters[i]);
    } else if (commands[i] === 'delete') {
      playlist.deleteTrack(names[i]);
    } else if (commands[i] === 'play') {
      playlist.playTrack(names[i], parameters[i]);
    } else if (commands[i] === 'reset') {
      if (names[i] === '') {
        playlist.resetTrack();
      } else {
        playlist.resetTrack(names[i]);
      }
    } else if (commands[i] === 'move') {
      playlist.moveTrack(names[i], parameters[i]);
    } else { // commands[i] === 'get'
      result.push(playlist.toString());
    }
  }

  return result;
}


////////////////////////
class Track {
  constructor(name, duration) {
    this.name = name;
    this.duration = duration;
    this.pausedOn = 0;
  }

  play(time) {
      console.log('PLAY CALLED FOR TIME')
      console.log(time)
    // TODO: implement this method
    // console.log('this.pausedOn')
    // console.log(this.pausedOn)
    // console.log('time')
    // console.log(time)
    if((this.pausedOn+time)<this.duration){
        this.pausedOn+=time
    } else {
        this.pausedOn = ((this.pausedOn+time)-this.duration)
    }
    // console.log('AFTER this.pausedOn')
    // console.log(this.pausedOn)
  }

  reset() {
    this.pausedOn = 0
  }

  toString() {
    return `Track(name = ${this.name}, duration = ${this.duration}, pausedOn = ${this.pausedOn})`;
  }
}

class Playlist {
  constructor() {
    this.trackList = [];
  }

  addTrack(name, duration) {
    let newTrack = new Track(name,duration);
    this.trackList.push(newTrack)
  }

  deleteTrack(name) {
    this.trackList = this.trackList.filter((track)=>{
        return track.name !== name
    })
  }

  playTrack(name, time) {
    this.trackList.forEach((track,i)=>{
        if(track.name === name){
            track.play(time)
        }
    })
  }

  resetTrack(name) {
    // TODO: implement this method
    if(name){
        this.trackList.forEach((track,i)=>{
        if(track.name === name){
            this.trackList[i].reset()
        }
        })
    } else {this.trackList.forEach((track,i)=>{
        track.reset()
        })
    }
  }

  trackIndexByName(name) {
    // TODO: implement this method
    return findWithAttr(this.trackList,'name',name)
  }

  moveTrack(name, toIndex) {
    const index = this.trackIndexByName(name);
    if (index === toIndex) {
      return;
    }
    this.trackList.splice(toIndex, 0, this.trackList[index])
  }

  toString() {
    return '[' + this.trackList.map(track => track.toString()).join(', ') + ']';
  }
}

function findWithAttr(array, attr, value) {
    for(var i = 0; i < array.length; i += 1) {
        if(array[i][attr] === value) {
            return i;
        }
    }
    return -1;
}

function playlistRefactoring(commands, names, parameters) {
  const playlist = new Playlist();
  const result = [];

  for (let i = 0; i < commands.length; i++) {
    if (commands[i] === 'add') {
      playlist.addTrack(names[i], parameters[i]);
    } else if (commands[i] === 'delete') {
      playlist.deleteTrack(names[i]);
    } else if (commands[i] === 'play') {
      playlist.playTrack(names[i], parameters[i]);
    } else if (commands[i] === 'reset') {
      if (names[i] === '') {
        playlist.resetTrack();
      } else {
        playlist.resetTrack(names[i]);
      }
    } else if (commands[i] === 'move') {
      playlist.moveTrack(names[i], parameters[i]);
    } else { // commands[i] === 'get'
      result.push(playlist.toString());
    }
  }

  return result;
}




////////
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
