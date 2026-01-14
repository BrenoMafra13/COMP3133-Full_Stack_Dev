const buf1 = Buffer.from('Hello World');
console.log(buf1); // Prints: <Buffer 48 65 6c 6c 6f 20 57 6f 72 6c 64> As hexadecimal values
console.log(buf1.toString()); // Prints: Hello World
console.log(buf1.length); // Prints: 11
console.log(buf1[0]); // Prints: 72 (ASCII value of 'H')

const buf2 = Buffer.alloc(10);
console.log(buf2); // Prints: <Buffer 00 00 00 00 00 00 00 00 00 00> (10 bytes initialized to zero)
console.log(buf2)

const buf3 = Buffer.alloc(10).fill("A");
console.log(buf3); // Prints: <Buffer A A A A A A A A A A> (10 bytes initialized to 0xAA)

// You can see that to crerate buffers, we use Buffer.from() and Buffer.alloc() methods.

buf2[0] = 66
buf2[1] = 'C'.charCodeAt(0)
console.log(buf2.toString())

// Buffer for emojis
// 😀 = "Happy"
const a = "😁😁"
const buf4 = Buffer.from(a)
console.log(buf4); // Prints: <Buffer f0 9f 98 81 f0 9f 98 81>
console.log(buf4.length); // Prints: 8 (each emoji takes 4 bytes)
console.log(buf4.toString()); // Prints: 😁😁


// const aBuffer = Buffer.from([65, 66, 67])
const aBuffer = Buffer.from([0x41, 0x42, 0x43]) // Hexadecimal representation
console.log(aBuffer) // Prints: <Buffer 41 42 43>
console.log(aBuffer.length) // Prints: 3
console.log(aBuffer.toString('utf-8')) // Prints: ABC
console.log(aBuffer.toString('hex')) // Prints: 414243

const bBuffer = Buffer.from('ABC', 'utf-8') // Specify encoding

console.log(aBuffer.compare(bBuffer)) // Prints: 0 (Buffers are equal)

// Iterating over buffer:

const data = Buffer.from("George Brown College")

data.forEach((byte, index) => {
    console.log(`Byte at index ${index} : ${byte} : ${String.fromCharCode(byte)}`)
}) 
// Prints each byte's index, value, and corresponding character:
// Byte at index 0 : 71 : G
// Byte at index 1 : 101 : e
// Byte at index 2 : 111 : o
// Byte at index 3 : 114 : r
// Byte at index 4 : 103 : g
// Byte at index 5 : 101 : e
// ... and so on for each byte in the buffer


const nameBuffer = Buffer.alloc(20) // Allocate a buffer of 20 bytes
nameBuffer.write('Hello') // Write 'Hello' at the start
console.log(nameBuffer.toString()) // Prints: Hello
console.log(nameBuffer.byteLength) // Prints: 20
nameBuffer.write('World', 7, 'utf-8') // Write 'World' starting at byte index 7
console.log(nameBuffer.toString()) // Prints: Hello  World
nameBuffer.write('NodeJS', 0) // Overwrite starting at byte index 0
console.log(nameBuffer.toString()) // Prints: NodeJS World

