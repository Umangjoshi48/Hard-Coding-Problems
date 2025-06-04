const calculateTotalSpentByCategory = require('../easy/expenditure-analysis');

describe('calculateTotalSpentByCategory', () => {
	test('returns the correct total spent for a single transaction', () => {
		const transactions = [
			{
				id: 1,
				timestamp: 1656076800000,
				price: 10,
				category: 'Food',
				itemName: 'Pizza',
			},
		];

		const result =
			calculateTotalSpentByCategory(transactions);

		expect(result).toEqual([
			{ category: 'Food', totalSpent: 10 },
		]);
	});

	test('returns the correct total spent for each category', () => {
		const transactions = [
			{
				id: 1,
				timestamp: 1656076800000,
				price: 10,
				category: 'Food',
				itemName: 'Pizza',
			},
			{
				id: 2,
				timestamp: 1656259600000,
				price: 20,
				category: 'Food',
				itemName: 'Burger',
			},
			{
				id: 3,
				timestamp: 1656019200000,
				price: 15,
				category: 'Clothing',
				itemName: 'T-Shirt',
			},
			{
				id: 4,
				timestamp: 1656364800000,
				price: 30,
				category: 'Electronics',
				itemName: 'Headphones',
			},
			{
				id: 5,
				timestamp: 1656105600000,
				price: 25,
				category: 'Clothing',
				itemName: 'Jeans',
			},
		];

		const result =
			calculateTotalSpentByCategory(transactions);

		expect(result).toEqual([
			{ category: 'Food', totalSpent: 30 },
			{ category: 'Clothing', totalSpent: 40 },
			{ category: 'Electronics', totalSpent: 30 },
		]);
	});

	test('returns an empty array when given an empty input', () => {
		const transactions = [];
		const result =
			calculateTotalSpentByCategory(transactions);
		expect(result).toEqual([]);
	});

	test('returns the correct total spent when multiple transactions have the same category', () => {
		const transactions = [
			{
				id: 1,
				timestamp: 1656076800000,
				price: 10,
				category: 'Food',
				itemName: 'Pizza',
			},
			{
				id: 2,
				timestamp: 1656105600000,
				price: 20,
				category: 'Food',
				itemName: 'Burger',
			},
			{
				id: 3,
				timestamp: 1656134400000,
				price: 30,
				category: 'Food',
				itemName: 'Sushi',
			},
		];

		const result =
			calculateTotalSpentByCategory(transactions);

		expect(result).toEqual([
			{ category: 'Food', totalSpent: 60 },
		]);
	});
});
/*This is a test for the expenditure-analysis.js problem which is in the repository. This code is not written by me. 
This is  from the public repository 100xdevs-cohort-2 by Harkirat Singh—a well-known software developer, teacher, and YouTuber. 
I’m solving these assignments as part of the 100xDevs Cohort 0→1, which I’ve enrolled in.*/
