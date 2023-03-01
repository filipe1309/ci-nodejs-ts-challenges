import {containsDuplicateTests, containsDuplicate }  from "./arrays_hashing/easy/contains_duplicate";
import {validAnagramTests, isAnagram }  from "./arrays_hashing/easy/valid_anagram";
let startTime, endTime;

//executeTests(containsDuplicateTests, containsDuplicate);
executeTests(validAnagramTests, isAnagram);

console.log("\nDone\n");

function executeTests(tests: any[], func: Function) {
    let isSuccessful = true;
    console.log(`\n${func.name}\n`);
    startTime = performance.now()
    tests.forEach(([input, expected]) => {
        const result = func(input);
        if (result !== expected) {
            console.log(`🔴 Test failed: "[${input}]" should be ${expected} but was ${result}\n`);
            isSuccessful = false;
        }
    });
    endTime = performance.now()
    console.log(`Time: ${(endTime - startTime).toFixed(2)} milliseconds\n`)
    // for (const [key,value] of Object.entries(process.memoryUsage())){
    //     console.log(`Memory usage by ${key}, ${value/1000000} MB`)
    // }
    if (isSuccessful) {
        console.log("🟢 All tests passed\n");
    }
    console.log("--------------------------------------------------")
}
