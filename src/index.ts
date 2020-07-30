import { createMerkleTree } from './createMerkleTree'

console.log(createMerkleTree('Hello world, I am working!'.split(' ')).toJSON())
