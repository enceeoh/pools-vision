export const feeFactor = (swapFee) => {
	return Math.exp(-Math.pow(swapFee * 50, 2));
};

export const ratioFactor = (pool) => {
	const w = [];
	for (let token of pool.tokens) {
		w.push(token.denormWeight / pool.totalWeight);
	}
	if (w.length === 2) return 4 * (w[0] * w[1]) * w[0] * w[1] / (w[0] * w[1]);
	if (w.length === 3)
		return (
			(Math.pow(2 * (w[2] * w[1]) / (w[2] + w[1]), 2) +
				Math.pow(2 * (w[2] * w[0]) / (w[2] + w[0]), 2) +
				Math.pow(2 * (w[1] * w[0]) / (w[1] + w[0]), 2)) /
			(w[2] * w[1] + w[2] * w[0] + w[1] * w[0])
		);
	if (w.length === 4)
		return (
			(Math.pow(2 * (w[2] * w[1]) / (w[2] + w[1]), 2) +
				Math.pow(2 * (w[2] * w[0]) / (w[2] + w[0]), 2) +
				Math.pow(2 * (w[1] * w[0]) / (w[1] + w[0]), 2) +
				Math.pow(2 * (w[3] * w[0]) / (w[3] + w[0]), 2) +
				Math.pow(2 * (w[3] * w[1]) / (w[3] + w[1]), 2) +
				Math.pow(2 * (w[3] * w[2]) / (w[3] + w[2]), 2)) /
			(w[2] * w[1] + w[2] * w[0] + w[1] * w[0] + w[3] * w[0] + w[3] * w[1] + w[3] * w[2])
		);
	if (w.length === 5)
		return (
			(Math.pow(2 * (w[2] * w[1]) / (w[2] + w[1]), 2) +
				Math.pow(2 * (w[2] * w[0]) / (w[2] + w[0]), 2) +
				Math.pow(2 * (w[1] * w[0]) / (w[1] + w[0]), 2) +
				Math.pow(2 * (w[3] * w[0]) / (w[3] + w[0]), 2) +
				Math.pow(2 * (w[3] * w[1]) / (w[3] + w[1]), 2) +
				Math.pow(2 * (w[3] * w[2]) / (w[3] + w[2]), 2) +
				Math.pow(2 * (w[4] * w[3]) / (w[4] + w[3]), 2) +
				Math.pow(2 * (w[4] * w[2]) / (w[4] + w[2]), 2) +
				Math.pow(2 * (w[4] * w[1]) / (w[4] + w[1]), 2) +
				Math.pow(2 * (w[4] * w[0]) / (w[4] + w[0]), 2)) /
			(w[2] * w[1] +
				w[2] * w[0] +
				w[1] * w[0] +
				w[3] * w[0] +
				w[3] * w[1] +
				w[3] * w[2] +
				w[4] * w[3] +
				w[4] * w[2] +
				w[4] * w[1] +
				w[4] * w[0])
		);
	if (w.length === 6)
		return (
			(Math.pow(2 * (w[2] * w[1]) / (w[2] + w[1]), 2) +
				Math.pow(2 * (w[2] * w[0]) / (w[2] + w[0]), 2) +
				Math.pow(2 * (w[1] * w[0]) / (w[1] + w[0]), 2) +
				Math.pow(2 * (w[3] * w[0]) / (w[3] + w[0]), 2) +
				Math.pow(2 * (w[3] * w[1]) / (w[3] + w[1]), 2) +
				Math.pow(2 * (w[3] * w[2]) / (w[3] + w[2]), 2) +
				Math.pow(2 * (w[4] * w[3]) / (w[4] + w[3]), 2) +
				Math.pow(2 * (w[4] * w[2]) / (w[4] + w[2]), 2) +
				Math.pow(2 * (w[4] * w[1]) / (w[4] + w[1]), 2) +
				Math.pow(2 * (w[4] * w[0]) / (w[4] + w[0]), 2) +
				Math.pow(2 * (w[5] * w[4]) / (w[5] + w[4]), 2) +
				Math.pow(2 * (w[5] * w[3]) / (w[5] + w[3]), 2) +
				Math.pow(2 * (w[5] * w[2]) / (w[5] + w[2]), 2) +
				Math.pow(2 * (w[5] * w[1]) / (w[5] + w[1]), 2) +
				Math.pow(2 * (w[5] * w[0]) / (w[5] + w[0]), 2)) /
			(w[2] * w[1] +
				w[2] * w[0] +
				w[1] * w[0] +
				w[3] * w[0] +
				w[3] * w[1] +
				w[3] * w[2] +
				w[4] * w[3] +
				w[4] * w[2] +
				w[4] * w[1] +
				w[4] * w[0] +
				w[5] * w[4] +
				w[5] * w[3] +
				w[5] * w[2] +
				w[5] * w[1] +
				w[5] * w[0])
		);
	if (w.length === 7)
		return (
			(Math.pow(2 * (w[2] * w[1]) / (w[2] + w[1]), 2) +
				Math.pow(2 * (w[2] * w[0]) / (w[2] + w[0]), 2) +
				Math.pow(2 * (w[1] * w[0]) / (w[1] + w[0]), 2) +
				Math.pow(2 * (w[3] * w[0]) / (w[3] + w[0]), 2) +
				Math.pow(2 * (w[3] * w[1]) / (w[3] + w[1]), 2) +
				Math.pow(2 * (w[3] * w[2]) / (w[3] + w[2]), 2) +
				Math.pow(2 * (w[4] * w[3]) / (w[4] + w[3]), 2) +
				Math.pow(2 * (w[4] * w[2]) / (w[4] + w[2]), 2) +
				Math.pow(2 * (w[4] * w[1]) / (w[4] + w[1]), 2) +
				Math.pow(2 * (w[4] * w[0]) / (w[4] + w[0]), 2) +
				Math.pow(2 * (w[5] * w[4]) / (w[5] + w[4]), 2) +
				Math.pow(2 * (w[5] * w[3]) / (w[5] + w[3]), 2) +
				Math.pow(2 * (w[5] * w[2]) / (w[5] + w[2]), 2) +
				Math.pow(2 * (w[5] * w[1]) / (w[5] + w[1]), 2) +
				Math.pow(2 * (w[5] * w[0]) / (w[5] + w[0]), 2) +
				Math.pow(2 * (w[6] * w[5]) / (w[6] + w[5]), 2) +
				Math.pow(2 * (w[6] * w[4]) / (w[6] + w[4]), 2) +
				Math.pow(2 * (w[6] * w[3]) / (w[6] + w[3]), 2) +
				Math.pow(2 * (w[6] * w[2]) / (w[6] + w[2]), 2) +
				Math.pow(2 * (w[6] * w[1]) / (w[6] + w[1]), 2) +
				Math.pow(2 * (w[6] * w[0]) / (w[6] + w[0]), 2)) /
			(w[2] * w[1] +
				w[2] * w[0] +
				w[1] * w[0] +
				w[3] * w[0] +
				w[3] * w[1] +
				w[3] * w[2] +
				w[4] * w[3] +
				w[4] * w[2] +
				w[4] * w[1] +
				w[4] * w[0] +
				w[5] * w[4] +
				w[5] * w[3] +
				w[5] * w[2] +
				w[5] * w[1] +
				w[5] * w[0] +
				w[6] * w[5] +
				w[6] * w[4] +
				w[6] * w[3] +
				w[6] * w[2] +
				w[6] * w[1] +
				w[6] * w[0])
		);
	if (w.length === 8)
		return (
			(Math.pow(2 * (w[2] * w[1]) / (w[2] + w[1]), 2) +
				Math.pow(2 * (w[2] * w[0]) / (w[2] + w[0]), 2) +
				Math.pow(2 * (w[1] * w[0]) / (w[1] + w[0]), 2) +
				Math.pow(2 * (w[3] * w[0]) / (w[3] + w[0]), 2) +
				Math.pow(2 * (w[3] * w[1]) / (w[3] + w[1]), 2) +
				Math.pow(2 * (w[3] * w[2]) / (w[3] + w[2]), 2) +
				Math.pow(2 * (w[4] * w[3]) / (w[4] + w[3]), 2) +
				Math.pow(2 * (w[4] * w[2]) / (w[4] + w[2]), 2) +
				Math.pow(2 * (w[4] * w[1]) / (w[4] + w[1]), 2) +
				Math.pow(2 * (w[4] * w[0]) / (w[4] + w[0]), 2) +
				Math.pow(2 * (w[5] * w[4]) / (w[5] + w[4]), 2) +
				Math.pow(2 * (w[5] * w[3]) / (w[5] + w[3]), 2) +
				Math.pow(2 * (w[5] * w[2]) / (w[5] + w[2]), 2) +
				Math.pow(2 * (w[5] * w[1]) / (w[5] + w[1]), 2) +
				Math.pow(2 * (w[5] * w[0]) / (w[5] + w[0]), 2) +
				Math.pow(2 * (w[6] * w[5]) / (w[6] + w[5]), 2) +
				Math.pow(2 * (w[6] * w[4]) / (w[6] + w[4]), 2) +
				Math.pow(2 * (w[6] * w[3]) / (w[6] + w[3]), 2) +
				Math.pow(2 * (w[6] * w[2]) / (w[6] + w[2]), 2) +
				Math.pow(2 * (w[6] * w[1]) / (w[6] + w[1]), 2) +
				Math.pow(2 * (w[6] * w[0]) / (w[6] + w[0]), 2) +
				Math.pow(2 * (w[7] * w[6]) / (w[7] + w[6]), 2) +
				Math.pow(2 * (w[7] * w[5]) / (w[7] + w[5]), 2) +
				Math.pow(2 * (w[7] * w[4]) / (w[7] + w[4]), 2) +
				Math.pow(2 * (w[7] * w[3]) / (w[7] + w[3]), 2) +
				Math.pow(2 * (w[7] * w[2]) / (w[7] + w[2]), 2) +
				Math.pow(2 * (w[7] * w[1]) / (w[7] + w[1]), 2) +
				Math.pow(2 * (w[7] * w[0]) / (w[7] + w[0]), 2)) /
			(w[2] * w[1] +
				w[2] * w[0] +
				w[1] * w[0] +
				w[3] * w[0] +
				w[3] * w[1] +
				w[3] * w[2] +
				w[4] * w[3] +
				w[4] * w[2] +
				w[4] * w[1] +
				w[4] * w[0] +
				w[5] * w[4] +
				w[5] * w[3] +
				w[5] * w[2] +
				w[5] * w[1] +
				w[5] * w[0] +
				w[6] * w[5] +
				w[6] * w[4] +
				w[6] * w[3] +
				w[6] * w[2] +
				w[6] * w[1] +
				w[6] * w[0] +
				w[7] * w[6] +
				w[7] * w[5] +
				w[7] * w[4] +
				w[7] * w[3] +
				w[7] * w[2] +
				w[7] * w[1] +
				w[7] * w[0])
		);
};
