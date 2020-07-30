import { createMerkleTree, getHash } from './createMerkleTree'

describe('Create Merkle Tree', () => {
	it('should return an empty tree', () => {
		const res = createMerkleTree()

		expect(res.toJSON()).toStrictEqual({
			root: undefined,
			levels: [],
			height: 0,
		})
	})

	it('should return a 1-line tree', () => {
		const strings = ['foobar']

		// Manually compute the tree
		const lvls = []

		lvls[0] = [getHash(strings[0])]

		// Get Merkle tree as JSON to easily compare
		const res = createMerkleTree(strings).toJSON()

		expect(res).toStrictEqual({
			root: lvls[0][0],
			levels: lvls,
			height: 1,
		})
	})

	it('should return a 2-lines tree', () => {
		const strings = ['foo', 'bar']

		// Manually compute the tree
		const lvls = []

		lvls[1] = strings.map(string => getHash(string))
		lvls[0] = [getHash(lvls[1][0] + lvls[1][1])]

		// Get Merkle tree as JSON to easily compare
		const res = createMerkleTree(strings).toJSON()

		expect(res).toStrictEqual({
			root: lvls[0][0],
			levels: lvls,
			height: 2,
		})
	})

	it('should return a 3-lines tree', () => {
		const strings = ['fo', 'ob', 'ar']

		// Manually compute the tree
		const lvls = []

		lvls[2] = strings.map(string => getHash(string))
		lvls[1] = [getHash(lvls[2][0] + lvls[2][1]), lvls[2][2]]
		lvls[0] = [getHash(lvls[1][0] + lvls[1][1])]

		// Get Merkle tree as JSON to easily compare
		const res = createMerkleTree(strings).toJSON()

		expect(res).toStrictEqual({
			root: lvls[0][0],
			levels: lvls,
			height: 3,
		})
	})
})
