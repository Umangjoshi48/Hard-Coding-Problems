/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/
function calculateTotalSpentByCategory(transactions) {
    let finalReturnArray = [];
    for (let i = 0; i < transactions.length; i++) {
        let checker = 0;
        for (let j of finalReturnArray) {
            if (transactions[i]['category'] == j['category']) {

                j['totalSpent'] = j['totalSpent'] + transactions[i]['price'];
                checker = 1;

            }
            else {
                continue;
            }
        }
        if (checker == 0) {
            finalReturnArray.push({ 'category': transactions[i]['category'], 'totalSpent': transactions[i]['price'] });
        }
    }
    return finalReturnArray;
}
module.exports = calculateTotalSpentByCategory;
/* The problem expenditure-analysis.js, along with its test case, are from the public repository 100xdevs-cohort-2 by Harkirat Singh — a well-known 
software developer, teacher, and YouTuber. I’m solving these assignments as part of the 100xDevs Cohort 0→1, which I’ve enrolled in.
*/
