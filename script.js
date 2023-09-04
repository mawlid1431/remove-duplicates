// Good Luck 💪🏾



function removeDuplicates(arr) {
  const uniqueArray = [];

  for (let item of arr) {
    if (!uniqueArray.includes(item)) {
      uniqueArray.push(item);
    }
  }

  return uniqueArray;
}

// Example usages:
console.log(removeDuplicates([1, 0, 1, 0])); // Output: [1, 0]
console.log(removeDuplicates(["New", "York", "City"])); // Output: ["New", "York", "City"]
console.log(removeDuplicates(["Hassan", "Aisha", "Aisha"])); // Output: ["Hassan", "Aisha"]

