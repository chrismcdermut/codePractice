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
