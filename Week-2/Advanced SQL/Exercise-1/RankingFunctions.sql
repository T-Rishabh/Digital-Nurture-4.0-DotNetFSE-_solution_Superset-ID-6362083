IF OBJECT_ID('Products', 'U') IS NOT NULL
    DROP TABLE Products;



CREATE TABLE Products (
    ProductID INT PRIMARY KEY,
    ProductName VARCHAR(100),
    Category VARCHAR(50),
    Price DECIMAL(10,2)
);



INSERT INTO Products VALUES
(1, 'Laptop',         'Electronics', 850.00),
(2, 'Smartphone',     'Electronics', 7999.00),
(3, 'Headphones',     'Electronics', 1998.99),
(4, 'Tablet',         'Electronics', 45000.00),
(5, 'TV',             'Electronics', 9999.00),
(6, 'Refrigerator',   'Appliances', 22000.00),
(7, 'Microwave',      'Appliances', 5999.00),
(8, 'Blender',        'Appliances', 1500.00),
(9, 'Oven',           'Appliances', 8000.00),
(10,'Washing Machine','Appliances', 9500.00),
(11,'Shampoo',        'Groceries', 6.99),
(12,'Rice 5kg',       'Groceries', 150.00),
(13,'Olive Oil',      'Groceries', 120.50),
(14,'Almonds 500g',   'Groceries', 180.75),
(15,'Coffee 1kg',     'Groceries', 2002.00);


SELECT *
FROM (
    SELECT *,
           ROW_NUMBER() OVER (PARTITION BY Category ORDER BY Price DESC) AS RowNum
    FROM Products
) AS Ranked
WHERE RowNum <= 3;


SELECT *
FROM (
    SELECT *,
           RANK() OVER (PARTITION BY Category ORDER BY Price DESC) AS RankNum
    FROM Products
) AS Ranked
WHERE RankNum <= 3;


SELECT *
FROM (
    SELECT *,
           DENSE_RANK() OVER (PARTITION BY Category ORDER BY Price DESC) AS DenseRankNum
    FROM Products
) AS Ranked
WHERE DenseRankNum <= 3;
