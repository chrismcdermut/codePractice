minByColumnTieBreaker Notes go here!

In part 1 you may have noticed that it's possible for two rows to be "tied",
meaning that either would be an acceptable return value from minByColumn.
Consider:

table4 = [
  {"a": 1, "b": 2},
  {"a": 1, "b": 3},
  {"a": 1, "b": 4}
]
minByColumn(table4, "a") returns ???

Since all three rows have the same value for a, all three rows are acceptable
candidates to be returned by minByColumn(table, "a").

In these cases it would be nice if users could specify additional columns (e.g. "b")
to use as tie-breakers. A tie-breaker would only apply in cases where multiple rows
share the same minimum value. In `table4` above, the row {"a": 1, "b": 2} is
tied for the smallest "a" value (1) and of all the tied candidates, it has the
smallest "b" value (2). If two records had equal values for "a" and also for "b" then
another tie-breaker (e.g. "c") could be used. When records are tied with respect to
all columns, either record may be considered the minimum.

Write a function minByOrder that takes a database table and a list of columns, and
returns the row with the minimum column values using the tie-breaking logic above.
If only one column is provided, then the behavior of minByOrder is identical to
passing that column to minByColumn:

minByOrder(table, [column]) is equal to minByColumn(table, column)

As in Part 1, you should use tests to demonstrate that it's correct, either via an
existing testing system or one you create.

## Examples

table5 = [
  {"x": 1, "y": 3},
  {"x": 1, "y": 0}
]
minByOrder(table5, ["x", "y"]) returns {"x": 1, "y": 0}

table6 = [
  {"x": 2, "y": 3},
  {"x": 2, "y": 1},
  {"x": 1, "y": 10}
]
minByOrder(table6, ["x", "y"]) returns {"x": 1, "y": 10}

table7 = [
  {"x": 3, "y": -1, "z": 0},
  {"x": 1, "y": 10, "z": 1},
  {"x": 1, "y": 10, "z": 0}
]
minByOrder(table7, ["x", "y", "z"]) returns {"x": 1, "y": 10, "z": 0}

table8 = [
  {"x": 1, "y": 2, "z": 3},
  {"x": 2, "y": 2, "z": 2}
]
minByOrder(table8, ["x", "y", "z"]) returns {"x": 1, "y": 2, "z": 3}
