export type User = {
    _id: string;
    email: string;
    password: string;
    name: string;
    phoneNo: string;
    role: string;
    status: string;
    storeID: string;
    customerID: string;
};

export type Store = {
    _id: string;
    userID: string;
    products: string[];
    name: string;
    rating: number;
    trustedSeller: boolean;
    orders: string[];
};

export type Customer = {
    _id: string;
    userID: string;
    cart: String[];
    favs: String[];
    orders: String[];
};