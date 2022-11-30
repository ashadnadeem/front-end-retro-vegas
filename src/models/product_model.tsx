export type Product = {
    _id: string;
    name: string;
    price: number;
    picture: string;
    storeID: string;
    categoryID: string;
    description: string;
    bids: Object[];
    status: string;
}

// {
//     "_id": "63867b5deb967f31c521dfb6",
//     "name": "Five Rupee Note",
//     "price": 9.99,
//     "picture": "khaulah",
//     "storeID": "63771b7d7ecb04b50bc00a1c",
//     "categoryID": "6386765f10f592d74dc56ca1",
//     "description": "Loren ipsum",
//     "bids": [],
//     "status": "ACTIVE",
//     "__v": 0
// }