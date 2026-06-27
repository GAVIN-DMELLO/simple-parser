const input = "name=gavin&role=admin&status=active";

const indices = [];

for (let i = 0; i < input.length; i++) {
    if (input[i] === "&") {
        indices.push(i);
    }
}

const substrings = [];

// Before the first &
substrings.push(input.substring(0, indices[0]));

// Between each &
for (let i = 0; i < indices.length - 1; i++) {
    substrings.push(input.substring(indices[i] + 1, indices[i + 1]));
}

// After the last &
substrings.push(input.substring(indices[indices.length - 1] + 1, input.length));

console.log(substrings);

const equalIndices = [];

for (let i = 0; i < substrings.length; i++) {
    for (let j = 0; j < substrings[i].length; j++) {
        if (substrings[i][j] === "=") {
            equalIndices.push(j);
        }
    }
}

console.log(equalIndices);


const objects = [];

for (let i = 0; i < substrings.length; i++) {
    for (let j = 0; j < substrings[i].length; j++) {
        if (j === equalIndices[i]) {
            const key = substrings[i].substring(0, j);
            const value = substrings[i].substring(j + 1, substrings[i].length);

            const obj = {};
            obj[key] = value;

            objects.push(obj);
        }
    }
}

console.log(objects);