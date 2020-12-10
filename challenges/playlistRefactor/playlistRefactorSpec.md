playlistRefactor Spec go here!

You are given the structure of a class that handles basic music playlist operations. Each playlist consists of several tracks. Your task is to complete the implementation of the missing methods.

The class Track has 3 properties:

name - the name of the track represented as a non-empty string consisting of no more then 100 ASCII-characters.
duration - an integer representing the duration of the track, in seconds.
pausedOn - the second on which the track was paused the last time it was played.
You must complete the implementation of the following methods:

play(time) - plays the track starting from moment pausedOn for time seconds. If the track ends before time seconds are left, it starts over.
reset() - resets the track (sets pausedOn to 0).
The main class Playlist contains only the property trackList - the list of tracks in the playlist. Note that the order of the tracks in the playlist is important.

You must complete the implementation of the following methods:

addTrack(name, duration) - adds a track with the given name and duration to the end of the playlist. It is guaranteed that there is no track with the given name when this method is called.
deleteTrack(name) - deletes the track with the given name. It is guaranteed that there is exactly 1 track with the given name in the playlist when this method is called.
playTrack(name, time) - plays the track with the given name for the given number of seconds. It is guaranteed that there is exactly 1 track with the given name in the playlist when this method is called.
resetTrack(name) - resets the track with the given name. If no name is given, this method resets all the tracks in the playlist. It is guaranteed that there is exactly 1 track with the given name (if a name is given) in the playlist when this method is called.
moveTrack(name, toIndex) - moves the track with the given name to the given index. Does not change the order of the other tracks in the playlist. It is guaranteed that there is exactly 1 track with the given name in the playlist when this method is called.
Please do not edit the rest of the existing methods. However, feel free to add any other new methods to the classes if they will help you to solve the problem

Example

For commands = ["add", "play", "get", "add", "get"], names = ["Clair de Lune", "Clair de Lune", "", "Toxicity", ""], and parameters = [303, 603, 0, 283, 0], the output should be

playlistRefactoring(commands, names, parameters) = [
  "[Track(name = Clair de Lune, duration = 303, pausedOn = 300)]",
  "[Track(name = Clair de Lune, duration = 303, pausedOn = 300), Track(name = Toxicity, duration = 283, pausedOn = 0)]"
]
Input/Output

[execution time limit] 4 seconds (js)

[input] array.string commands

commands[i] is one of the following strings:

add;
delete;
play;
reset;
move;
get.
Guaranteed constraints:
4 ≤ commands.length ≤ 100.

[input] array.string names

names[i] can have length 0 only for reset and get commands, in all other cases the name of the track is guaranteed to be a non-empty string.

Guaranteed constraints:
names.length = commands.length,
0 ≤ names[i].length ≤ 100.

[input] array.integer parameters

Guaranteed constraints:
parameters.length = commands.length,
0 ≤ parameters[i] ≤ 1000.

[output] array.string

[JavaScript (ES6)] Syntax Tips

// Prints help message to the console
// Returns a string
function helloWorld(name) {
    console.log("This prints to the console when you Run Tests");
    return "Hello, " + name;
}
