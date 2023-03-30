// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false
 

// Constraints:

// 1 <= s.length, t.length <= 5 * 104
// s and t consist of lowercase English letters.
 

// Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?


function isAnagramV1(s: string, t: string): boolean {
    if (s.length !== t.length) return false
    
    const sSort = Array.from(s).sort()
    const tSort = Array.from(t).sort()
    
    return sSort.every((sEl, index) => sEl == tSort[index])
};
function isAnagramV2(input: string[]): boolean {
    const [s, t] = input;
    if (s.length !== t.length) return false;
    
    const table: Record<string, number> = {};
        
    for (let i = 0; i < s.length; i++) {
        const s_char = s[i];
        const t_char = t[i];
        
        if (table[s_char] === undefined) table[s_char] = 0;
        if (table[t_char] === undefined) table[t_char] = 0;
        
        table[s_char]++;
        table[t_char]--;
                        
    }
    
    const keys: string[] = Object.keys(table);
    
    for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        const count = table[key];
        
        if (count != 0) return false;
    }

    return true;
};



// Runtime 110 ms
// Memory 48.4 MB
function isAnagramV3(input: string[]): boolean {
    const [s, t] = input;
    if (s.length !== t.length) return false

    const sSort = Array.from(s.toLocaleLowerCase().replace(' ', '')).sort()
    const tSort = Array.from(t.toLocaleLowerCase().replace(' ', '')).sort()

    return sSort.every((sEl, index) => sEl == tSort[index])
};


function isAnagramV4(input: string[]): boolean {
    const [s, t] = input;
    return s.split("").sort().join("") === t.split("").sort().join("");
};

// Neetcode solution
function isAnagramV5(s: string, t: string) {
    if (s.length !== t.length) return false;

    let first: Array<string | null> = s.split('');
    const second = t.split('');

    for (let i = 0; i < second.length; i++) {
        const element = second[i];

        let found = first.indexOf(element);

        if (found !== -1) {
            first[found] = null;
        } else {
            return false;
        }
    }

    return true;
}

// Runtime 90 ms
// Memory 44.7 MB
function isAnagram(input: string[]): boolean {
    const [s, t] = input;
    if (s.length !== t.length) return false

    let map = new Map<String, Number>()
    
    for (let i = 0; i < s.length; i++) {
        let currentSValue = map.get(s[i]) || 0
        map.set(s[i], currentSValue.valueOf() + 1)
        let currentTValue = map.get(t[i]) || 0
        map.set(t[i], currentTValue.valueOf() - 1)
    }

    for (let key of map.keys()) {
        if (map.get(key) !== 0) return false
    }

    return true
};

const validAnagramTests = [
    [["anagram", "nagaram"], true],
    [["rat", "cat"], false],
    [["ac", "bb"], false],
    [["aacc", "ccac"], false],
    [["z", "y"], false],
    [["a", "ab"], false],
    [["ab", "a"], false],
    [["aacc", "ccac"], false],
    [["anagram", "nagaram"], true],
    [["rat", "car"], false],
    [["ab", "a"], false],
    [["aacc", "ccac"], false],
    [["anagram", "nagaram"], true],
    [["rat", "car"], false],
    [["ab", "a"], false],
    [["aacc", "ccac"], false],
    [["anagram", "nagaram"], true],
    [["abcd", "dcba"], true],
    // Easy
    [["act","cat"], true],
    [["case","aces"], true],
    [["note","tone"], true],
    [["tar","rat"], true],
    [["aide","idea"], true],
    [["earth","heart"], true],
    [["ours","sour"], true],
    [["tea","eat"], true],
    [["ape","pea"], true],
    [["fast","fats"], true],
    [["pat","tap"], true],
    [["urn","run"], true],
    [["are","ear"], true],
    [["flow","wolf"], true],
    [["pear","reap"], true],
    // [["use","Sue"], true],
    [["arm","ram"], true],
    // [["God","dog"], true],
    [["pins","spins"], false],
    [["war","raw"], true],
    [["bare","bear"], true],
    [["mars","rams"], true],
    [["pots","spots"], false],
    [["was","saw"], true],
    [["beak","bake"], true],
    [["meat","team"], true],
    [["ring","grin"], true],
    [["wed","dew"], true],
    [["best","bets"], true],
    [["meats","steam"], true],
    [["sink","skin"], true],
    [["who","how"], true],
    [["boss","sobs"], true],
    [["nap","pan"], true],
    [["slip","lips"], true],
    [["won","now"], true],
    // [["café","face"], true], // Unicode
    [["night","thing"], true],
    [["tab","bat"], true],
    [["yap","pay"], true],
    [["care","race"], true],
    // Medium
    // [["atom","bomb"], false],
    // [["meals","males"], true],
    // [["saint","satin"], true],
    // [["avenge","Geneva"], true],
    // [["meals","Salem"], true],
    // [["sales","seals"], true],
    // [["balm","lamb"], true],
    // [["mean","mane"], true],
    // [["salts","lasts"], true],
    // [["blot","bolt"], true],
    // [["melon","lemon"], true],
    // [["salvages","Las Vegas"], true],
    // [["blow","bowl"], true],
    // [["moist","omits"], true],
    // [["sharp","harps"], true],
    // [["brag","grab"], true],
    // [["more","Rome"], true],
    // [["shrub","brush"], true],
    // [["chum","much"], true],
    // [["needs","dense"], true],
    // [["siren","rinse"], true],
    // [["coal","cola"], true],
    // [["nerved","Denver"], true],
    // [["skids","disks"], true],
    // [["counts","Tucson"], true],
    // [["none","neon"], true],
    // [["skill","kills"], true],
    // [["diagnose","San Diego"], true],
    // [["nude","dune"], true],
    // [["snail","nails"], true],
    // [["diary","dairy"], true],
    // [["ocean","canoe"], true],
    // [["sober","robes"], true],
    // [["domains","Madison"], true],
    // [["pace","cape"], true],
    // [["soils","oils"], false],
    // [["dottier","Detroit"], true],
    // [["pairs","Paris"], true],
    // [["solo","Oslo"], true],
    // [["fired","fried"], true],
    // [["pale","leap"], true],
    // [["spray","prays"], true],
    // [["fringe","finger"], true],
    // [["panels","Naples"], true],
    // [["stack","tacks"], true],
    // [["hasten","Athens"], true],
    // [["parks","spark"], true],
    // [["stick","ticks"], true],
    // [["iced","dice"], true],
    // [["pools","spool"], true],
    // [["strip","trips"], true],
    // [["inch","chin"], true],
    // [["ports","sport"], true],
    // [["study","dusty"], true],
    // [["keen","knee"], true],
    // [["posts","stops"], true],
    // [["team","meat"], true],
    // [["lamp","palm"], true],
    // [["races","cares"], true],
    // [["tooled","Toledo"], true],
    // [["last","salt"], true],
    // [["reap","pear"], true],
    // [["votes","stove"], true],
    // [["limped","dimple"], true],
    // [["reef","free"], true],
    // [["waits","waist"], true],
    // [["lion","loin"], true],
    // [["robed","bored"], true],
    // [["wasps","swaps"], true],
    // [["looted","Toledo"], true],
    // [["rock","cork"], true],
    // [["wells","swell"], true],
    // [["lump","plum"], true],
    // [["room","moor"], true],
    // [["west","stew"], true],
    // [["march","charm"], true],
    // [["ropes","pores"], true],
    // [["what","thaw"], true],
    // [["mash","hams"], true],
    // Hard
    // [["a decimal point", "I’m a dot in place"], false],
    // [["monasteries", "Amen stories"], true],
    // [["a near miss", "an air miss"], true],
    // [["old England", "golden land"], true],
    // [["an aisle", "is a lane"], true],
    // [["restaurant", "runs a treat"], true],
    // [["considerate", "care is noted"], true],
    // [["saintliness", "least in sins"], true],
    // [["conversation", "voices rant on"], true],
    // [["Semolina", "is no meal"], true],
    // [["dormitory", "dirty room"], true],
    // [["signature", "a true sign"], true],
    // [["dynamite", "may it end"], true],
    // [["Statue of Liberty", "built to stay free"], true],
    // [["eleven plus two", "twelve plus one"], true],
    // [["the earthquakes", "that queer shake"], true],
    // [["Fourth of July", "joyful fourth"], true],
    // [["the Morse Code", "here come dots"], true],
    // [["gold and silver", "grand old evils"], true],
    // [["the nudist colony", "no untidy clothes"], true],
    // [["HMS Pinafore", "name for ship"], true],
    // [["the tennis pro", "he in net sport"], true],
    // [["limericks", "slick rime"], true],
    // [["Valentine poem", "pen mate in love"], true],
    // [["departed this life", "He’s left it, dead; RIP"], true],
    // [["the public art galleries", "large picture halls, I bet"], true],
    // [["year two thousand", "a year to shut down"], true],
];

export {isAnagram, validAnagramTests}

