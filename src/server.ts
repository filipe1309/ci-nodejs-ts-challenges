import {containsDuplicateTests, containsDuplicate }  from "./arrays_hashing/easy/contains_duplicate";

console.log("Contains Duplicate");

containsDuplicateTests.forEach(([input, expected]) => {
    const result = containsDuplicate(input as number[]);
    if (result !== expected) {
        console.log(result, expected);
        console.error("Test failed");
    }
});

console.log("Done");
