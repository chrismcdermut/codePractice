determineCourseOrder Spec goes here!

/*
You're developing a system for scheduling advising meetings with students in a Computer Science program. Each meeting should be scheduled when a student has completed 50% of their academic program.

Each course at our university has at most one prerequisite that must be taken first. No two courses share a prerequisite. There is only one path through the program.

Write a function that takes a list of (prerequisite, course) pairs, and returns the name of the course that the student will be taking when they are halfway through their program. (If a track has an even number of courses, and therefore has two "middle" courses, you should return the first one.)

Sample input 1: (arbitrarily ordered)
prereqs_courses1 = [
    ["Data Structures", "Algorithms"],
    ["Foundations of Computer Science", "Operating Systems"],
    ["Computer Networks", "Computer Architecture"],
    ["Algorithms", "Foundations of Computer Science"],
    ["Computer Architecture", "Data Structures"],
    ["Software Design", "Computer Networks"]
]

//my notes ["PREREQ","NEXTREQ"]

In this case, the order of the courses in the program is:
    Software Design
    Computer Networks
    Computer Architecture
    Data Structures
    Algorithms
    Foundations of Computer Science
    Operating Systems

Sample output 1:
    "Data Structures"


Sample input 2:
prereqs_courses2 = [
    ["Data Structures", "Algorithms"],
    ["Algorithms", "Foundations of Computer Science"],
    ["Foundations of Computer Science", "Logic"]
]


Sample output 2:
    "Algorithms"
Sample input 3:
prereqs_courses3 = [
    ["Data Structures", "Algorithms"],
]


Sample output 3:
    "Data Structures"
*/
