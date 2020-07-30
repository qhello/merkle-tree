# Merkle Tree in Node.js

See `REQUIREMENTS.pdf` for test specs.

## Part 1: Code implementation

Implemented in Node.js, using TypeScript & TDD methodology, enclosed in this repo you'll have a working function `createMerkleTree` as requested in the specs.

To use it with demo params:

```
# Clone repository first
git clone https://github.com/qhello/merkle-tree.git
cd merkle-tree/

npm start
```

To test

```
npm test
```

## Part 2: Questions

- _Question 1:_

Assuming that I know all values in the Merkle Tree; I would validate L2 data values by computing **Hash 0-1** & comparing it with the corresponding one in my Merkle Tree.

- _Question 2:_

Assuming that I only know the Merkle root value and L3 data value; I would need to know at least the value of **Hash 1-1** && **Hash 0** to verify that my L3 data value is part of the Merkle tree associated with the root value in my possession.

- _Question 3:_

A Merkle tree usage example would be peer-to-peer file transfer: it allows users to receive many "data block" from multiple sources simultaneously, whilst verifying on-the-fly the integrity of each block.
