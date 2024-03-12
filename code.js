// Help was once again taken from the repo of ClaytonBrown4741 to 
// understand the structure of each permutation, and the way to
// count the permutations was a great idea!

function permutationCheck(arr, currPos, perm) 
{
  let check = false;
  for (let i = currPos; i < arr.length; i++) 
  {
    swap(arr, i, currPos);
    check = permutationCheck(arr, currPos + 1, perm);
    if (check == true) 
    {
      return true;
    }
    swap(arr, currPos, i);
  }
  if (currPos >= arr.length) 
  {
    perm[0]++;
    return sortCheck(arr);
  }
}

function sortCheck(arr) 
{
  for (let i = 0; i < arr.length - 1; i++) 
  {
    if (arr[i] > arr[i + 1] || arr[i] < arr[i - 1]) 
    {
      return false;
    }
  }
  return true;
}

function swap(arr, first, second) 
{
  let tmp = arr[first];
  arr[first] = arr[second];
  arr[second] = tmp;
}


function permutationSort(a) 
{
  var perm = [0];
  perm[0] = 0;
  if (permutationCheck(a, 0, perm) == true) 
  {
    console.log(a);
    return perm[0];
  }
}
