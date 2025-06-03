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

