const items = [
    {
        _id: "001",
        name: "iphone SE (2020) 64GB",
        title: ["mp", "Mobile Phones"],
        price: '121,500',
        numberInStock: 7,
    },
    {
        _id: "002",
        name: "iphone 12 Pro Max 128GB",
        title: ["mp", "Mobile Phones"],
        price: '338,000',
        numberInStock: 5,
    },
    {
        _id: "003",
        name: "ASUS vivobook 15",
        title: ["lp", "Laptops"],
        price: '155,000',
        numberInStock: 10,
    },
    {
        _id: "004",
        name: "iphone 12 Mini 128GB",
        title: ["mp", "Mobile Phones"],
        price: '229,000',
        numberInStock: 6,
    },
    {
        _id: "005",
        name: "iphone 11 Pro 256GB",
        title: ["mp", "Mobile Phones"],
        price: '302,990',
        numberInStock: 6,
    },
    {
        _id: "006",
        name: "ASUS ROG Zephyrus G14",
        title: ["lp", "Laptops"],
        price: '322,000',
        numberInStock: 8,
    },
    {
        _id: "007",
        name: "Xiaomi Redmi note 9s 128GB",
        title: ["mp", "Mobile Phones"],
        price: '49,990',
        numberInStock: 15,
    },
    {
        _id: "008",
        name: "Samsung Galaxy A72 256GB",
        title: ["mp", "Mobile Phones"],
        price: '88,950',
        numberInStock: 7,
    },
    {
        _id: "009",
        name: " iPad 2020 10.2-inch 8th Gen",
        title: ["tb", "Tablets"],
        price: '99,900',
        numberInStock: 5,
    },
    {
        _id: "010",
        name: "Samsung Galaxy A52 8GB RAM",
        title: ["mp", "Mobile Phones"],
        price: '68,950',
        numberInStock: 6,
    },
    {
        _id: "011",
        name: "Intel Core i3 4GB RAM 256GB SSD",
        title: ["pc", "PC computers"],
        price: '59,900',
        numberInStock: 13,
    },
    {
        _id: "012",
        name: "HUAWEI MediaPad T3 8'16GB ROM",
        title: ["tb", "Tablets"],
        price: '30,630',
        numberInStock: 11,
    },
    {
        _id: "013",
        name: "Samsung Galaxy A12 128GB",
        title: ["mp", "Mobile Phones"],
        price: '34,900',
        numberInStock: 6,
    },
    {
        _id: "014",
        name: "HP 200 Pro CORE i3",
        title: ["pc", "PC computers"],
        price: '126,500',
        numberInStock: 13,
    },
    {
        _id: "015",
        name: "Greentel A8 Tab",
        title: ["tb", "Tablets"],
        price: '21,690',
        numberInStock: 11,
    },
    {
        _id: "016",
        name: "Samsung Galaxy A32 128GB",
        title: ["mp", "Mobile Phones"],
        price: '51,500',
        numberInStock: 6,
    },
    {
        _id: "017",
        name: "Macbook Air late 2020",
        title: ["lp", "Laptops"],
        price: '274,800',
        numberInStock: 10,
    },
    {
        _id: "018",
        name: "Dell 7505 i7",
        title: ["lp", "Laptops"],
        price: '227,000',
        numberInStock: 10,
    },
    {
        _id: "019",
        name: "Intel Core i3 3rd Gen 4GB DDR3 500GB",
        title: ["pc", "PC computers"],
        price: '29,300',
        numberInStock: 13,
    },
    {
        _id: "020",
        name: "Samsung Galaxy Tab S6 Lite",
        title: ["tb", "Tablets"],
        price: '84,600',
        numberInStock: 6,
    },
];

const titles = [
    { _id: "lp", name: "Laptops" },
    { _id: "mp", name: "Mobile Phones" },
    { _id: "tb", name: "Tablets" },
    { _id: "pc", name: "PC computers" }
];

export function getItems() {
    return items;
}

export function getTitles() {
    return titles;
}

