# StoreAPI

I worked on basic user friendly API setup on this repo

<h2>Usage </h5>

<h5>Getting All Products </h5>

```http
GET /api/products
```

<h6>Response</h6>

```Javascipt
{
    "products": [
        {
            "_id": "61b3cea6709bb350a52bde24",
            "name": "entertainment center",
            "price": 59,
            "featured": true,
            "rating": 4.5,
            "createdAt": "2021-12-10T22:03:17.369Z",
            "company": "caressa",
            "__v": 0
        },
        .
        .
        .
    ]
}
```
<h5>Searching Query </h5>
You can search products by their <strong>name</strong> - <strong>company</strong> and <strong>featured</strong>

<h6>Example Searcing by product name</h6>

```http
GET /api/products?name=simple
```

<h6>Response</h6>

```Javascript
{
    "products": [
        {
            "_id": "61b3cea6709bb350a52bde2a",
            "name": "simple chair",
            "price": 109,
            "featured": false,
            "rating": 4.5,
            "createdAt": "2021-12-10T22:03:17.369Z",
            "company": "liddy",
            "__v": 0
        }
    ],
    "numberOfProducts": 1
}
```

<h5>Sorting Products</h5>
You can <strong>sort</strong> products by their <strong>name</strong> and <strong>price</strong> 

<h6>Example sorting product by their prices</h6>

```http
GET /api/products?sort=price
```

<h5>Getting Certain Fields of Product List</h5>

<h6>Example getting certain <strong>fields</strong> of product</h6>

```http
GET /api/products?fields=name,price,company
```

<h6>Response</h6>

```Javascript
{
    "products": [
        {
            "_id": "61b3cea6709bb350a52bde24",
            "name": "entertainment center",
            "price": 59,
            "company": "caressa"
        },
        .
        .
        .
    ]
}
```
<h5>Using numericFilters</h5>
Filter on a specific numerical condition (<, <=, =, > or >=).Available numerical fields:

<h6>Example of using <strong>numericFilters</strong> of product</h6>

```http
GET /api/products?numericFilters=price>40,rating>4
```

<h5>Page and Limit setting </h5>
You can define page number and limit for your own purpose

<h6>Example of using <strong>page</strong> and <strong>limit</strong></h6>

```http
GET /api/products?page=2&limit=4
```
