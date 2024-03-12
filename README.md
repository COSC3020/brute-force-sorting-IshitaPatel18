[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/7eEMzrNd)
# Brute-Force Sorting

We talked about the complexity of the sorting problem, and used an argument over
all permutations of a list to be sorted to determine its complexity. Implement
a function to sort a list by systematically trying all permutations of the input
list, using the template in `code.js`. Test your new function; I've provided
some basic testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

The return value should be the number of permutations that were tried until the
sorted list was "discovered". The unsorted list passed as an argument should be
sorted, i.e. do not copy the list and sort the copy.

## Runtime Analysis

What is the runtime complexity of the algorithm that you implemented? What does
a best case input for your implementation look like, what does a worst case
input look like? How would this complexity change if you generated permutations
randomly without memory instead of systematically trying them?

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file.

My answer: 

The best case input is the first permutation that was checked which would
result in a complexity of $\Theta(n)$ because the sortCheck function would
be called on the first permutation to check if it is sorted, and because
that function contains a for loop that iterates over the whole array, the
complexity is $\Theta(n)$. The worst case input would be the last permutation
that is checked and it would result in a complexity of $\Theta(n * n!)$. My reasoning
for the n! comes from the recurssive call that basically starts by checking n then n-1
then n-2 and so on which represents n!. Now, the for loop in sortCheck that is called in 
permutationCheck represents n because it is iterating over the whole array, but because 
the recursive call to permutationCheck happens within the original for loop in permutationCheck, 
it acts like a nested loop which results in $\Theta(n * n!)$. If we were to create permutations
based on pure randomness, then the best case complexity would stay the same as it would be the first
permutation we see, and the sortCheck for loop would do n iterations, but the
worst case complexity would become $\Theta(/infty)$ because there is no
guarantee that the sorted permutation ever occurs, only because there is no memory associated
with the permutations we have already tried. Since, there is no backtracking of what we have done
we can't guarantee any certain complexity besides infinity, because the random
checking could make it so the sorted permutation never occurs or occurs at
different times each time it is tested.
