const items = [
    {
        _id: "001",
        name: "name",
        title: "Laptops",
        price: 128000,
        numberInStock: 10,
        publishedDate: "2018-01-03T19:04:28.809Z"
    },
    {
        _id: "002",
        name: "name",
        title: "Laptops",
        price: 208000,
        numberInStock: 5,
        publishedDate: "2018-01-03T19:04:28.809Z"
    },
    {
        _id: "003",
        name: "name",
        title: "Laptops",
        price: 120000,
        numberInStock: 11,
        publishedDate: "2018-01-03T19:04:28.809Z"
    },
    {
        _id: "004",
        name: "name",
        title: "Tablets",
        price: 68000,
        numberInStock: 10,
        publishedDate: "2018-01-03T19:04:28.809Z"
    },
    {
        _id: "005",
        name: "name",
        title: "Tablets",
        price: 88000,
        numberInStock: 6,
        publishedDate: "2018-01-03T19:04:28.809Z"
    },
    {
        _id: "006",
        name: "name",
        title: "Tablets",
        price: 78000,
        numberInStock: 8,
        publishedDate: "2018-01-03T19:04:28.809Z"
    },

    {
        _id: "007",
        name: "name",
        title: "Mobile Phones",
        price: 128000,
        numberInStock: 10,
        publishedDate: "2018-01-03T19:04:28.809Z"
    },

];

const titles = [
    { _id: 'lp', name: 'Laptops' },
    { _id: 'pc', name: 'PC computers' },
    { _id: 'tb', name: 'Tablets' },
    { _id: 'mp', name: 'Mobile Phones' }
];

export function getItems() {
    return items;
}

export function getTitles() {
    return titles;
}

