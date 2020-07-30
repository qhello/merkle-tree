import { createHash } from 'crypto'
import { chunk as chunkArray } from 'lodash'

export const getHash = (string = ''): string =>
	createHash('sha256').update(string).digest().toString('hex')

const growTree = (tree: string[][]): string[][] => {
	const firstRow = tree[0]

	if (firstRow.length === 1) return tree

	// If more than one element on first row, we need to compute a new row above that
	const newRow = chunkArray(firstRow, 2).map((chunk: string[]) =>
		chunk.length > 1 ? getHash(chunk.join('')) : chunk[0]
	)

	return growTree([newRow, ...tree])
}

export class MerkleTree {
	private levels: string[][]

	constructor(strings?: string[]) {
		this.levels = []

		// Check if we are facing empty tree
		if (!strings?.length) return

		const bottomRow = strings.map(string => getHash(string))

		// compute tree using bottom row
		this.levels = growTree([bottomRow])
	}

	public height = (): number => this.levels.length

	public root = (): string => this.levels[0]?.[0]

	public level = (index: number): string[] | undefined => this.levels[index]

	public toJSON = (): {
		root: string
		height: number
		levels: string[][]
	} => ({
		root: this.root(),
		height: this.height(),
		levels: this.levels,
	})
}

export const createMerkleTree = (strings?: string[]): MerkleTree => {
	return new MerkleTree(strings)
}
