findDuffelBagCapacity Spec goes here!

-the unbounded knapsack problem
-bottom up->For each capacity, we want to know the max monetary value we can carry. To figure that out, we go through each cake, checking to see if we should take that cake.

-We know the max value we can carry, but which cakes should we take, and how many? Try adjusting your answer to return this information as well.
-What if we check to see if all the cake weights have a common denominator? Can we improve our algorithm?
-A cake that's both heavier and worth less than another cake would never be in the optimal solution. This idea is called dominance relations. Can you apply this idea to save some time? Hint: dominance relations can apply to sets of cakes, not just individual cakes.
-What if we had an object for every individual cake instead of types of cakes? So now there's not an unlimited supply of a type of cake—there's exactly one of each. This is a similar but harder problem, known as the 0/1 Knapsack problem.
