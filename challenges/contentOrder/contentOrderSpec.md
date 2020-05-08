//1 unique content,should notberepeated,willnotshow morethanonce
//2 order cannot break on article level
//3
//get articles, find valid curriculum

input:
  - "A" "B" "C" "D"
  - "A": ["B"], "B": ["C", "D"], "C": [], "D": []

output:
  - "C" "D" "B" "A"
  - "D" "C" "B" "A"
 */
