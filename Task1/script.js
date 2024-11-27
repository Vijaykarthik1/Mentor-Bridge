const books = [
    { id: 1, title: "Book 1", price: 200, stock: 2 },
    { id: 2, title: "Book 2", price: 400, stock: 5 },
    { id: 2, title: "Book 2", price: 400, stock: 5 },
    { id: 3, title: "Book 3", price: 600, stock: 10 }
]
const customers = [{ id: 101, name: "Vijay", isExistingCustomer: true, lastPurchase: null },
{ id: 102, name: "Karthik", isExistingCustomer: true, lastPurchase: null },
{ id: 103, name: "Vaish", isExistingCustomer: true, lastPurchase: null },
];
const choosenBookIds = [1, 2];
const customerId = 101;

function removeDuplicates(){
    const uniqueBooksSet = new Set();
    const uniqBooksList = [];
    for (const book of books) {
        if(!uniqueBooksSet.has(book.id)){
            uniqueBooksSet.add(book.id);
            uniqBooksList.push(book)
        }
    }
    return uniqBooksList;
}

function filterCustomerChosenBooks(uniqueBooksList){
    return uniqueBooksList.filter(book => choosenBookIds.includes(book.id));//for findind more than one book
}

function calculateDiscount(customerChosenBooks){
    const currentCustomer = customers.find(customer => customer.id === customerId);
    console.log(currentCustomer);
    const isExistingCustomer = currentCustomer ? isExisting = true : isExisting = false;
    for (let book of customerChosenBooks) {
        if (isExistingCustomer) {
            if (book.price >= 200) {
                book.discount = book.price * 15 / 100;
            } else {
                book.discount = 0;
            }
        }
        else {
            switch (book.price) {
                case book.price > 100 && book.price < 200:
                    book.discount = book.price * 2 / 100;


                    break;
                case book.price >= 200 && book.price < 500:
                    book.discount = book.price * 5 / 100;


                    break;
                case book.price >= 500 && book.price < 750:
                    book.discount = book.price * 10 / 100;


                    break;
                case book.price >= 750:
                    book.discount = book.price * 15 / 100;

                    break;
                default:
                    book.discount = 0;
                    break;
            }
        }
    }
    console.log(customerChosenBooks);
    calculateFinalSummary(customerChosenBooks);
}

function calculateFinalSummary(customerChosenBooks){
    let totalDiscount=0;
    let totalPrice=0;
    for (let book of customerChosenBooks) {
        book.finalPrice=book.price-book.discount;
        totalDiscount=totalDiscount+book.discount;
        totalPrice+=book.finalPrice;
    }
    console.log(customerChosenBooks);
    console.log("TotalDiscount:",totalDiscount);
    console.log("TotalPrice:",totalPrice);
}

function generateBill(){
    const uniqueBooksList = removeDuplicates();
    console.log(uniqueBooksList);
    const customerChosenBooks = filterCustomerChosenBooks(uniqueBooksList);
    console.log(customerChosenBooks);
    calculateDiscount(customerChosenBooks);
}
generateBill();