findExplodedMineRadius Spec goes here!

// A minefield is made up of mines placed on a continuous 2D plane. A mine is
// represented as a tuple with the values (x, y, blast_radius). When a mine blows up,
// all other mines whose coordinates are within the blast radius also blow up. When
// those mines blow up, any mines within their blast radius also blow up, and so on
// and so on, triggering a chain reaction.

// Given a list of mines, determine which mine would blow the most total number of
// mines if it were to blow up. The output should be a pair of the mine and the
// total number of mines that it blows up, including itself.

// mines = [
//    (1.01, 1, 2),
//    (6, 6, 1),
//    (1, 2, 3),
//    (-1, -1, 3),
// ]
// print(most_blown_up(mines)) == ((-1, -1, 3), 3)
