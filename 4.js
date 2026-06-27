const input = "name=gavin&role=admin&status=active";

const indices = [];
const equalIndices = [];

for (let i = 0; i < input.length; i++) {
    if (input[i] === "&") {
        indices.push(i);
    }

    if (input[i] === "=") {
        equalIndices.push(i);
    }
}

const result = [];

// Before the first &
{
    const key = input.substring(0, equalIndices[0]);
    const value = input.substring(equalIndices[0] + 1, indices[0]);

    const obj = {};
    obj[key] = value;
    result.push(obj);
}

// Between each &
for (let i = 0; i < indices.length - 1; i++) {
    const key = input.substring(indices[i] + 1, equalIndices[i + 1]);
    const value = input.substring(equalIndices[i + 1] + 1, indices[i + 1]);

    const obj = {};
    obj[key] = value;
    result.push(obj);
}

// After the last &
{
    const last = indices.length - 1;

    const key = input.substring(indices[last] + 1, equalIndices[last + 1]);
    const value = input.substring(equalIndices[last + 1] + 1, input.length);

    const obj = {};
    obj[key] = value;
    result.push(obj);
}

console.log(result);