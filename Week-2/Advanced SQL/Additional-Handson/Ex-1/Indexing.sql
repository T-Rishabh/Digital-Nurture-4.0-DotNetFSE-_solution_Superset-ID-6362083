
-- ✅ Database Schema 


-- Drop tables safely for re-runs
IF OBJECT_ID('OrderDetails', 'U') IS NOT NULL DROP TABLE OrderDetails;
IF OBJECT_ID('Orders', 'U') IS NOT NULL DROP TABLE Orders;
IF OBJECT_ID('Products', 'U') IS NOT NULL DROP TABLE Products;
IF OBJECT_ID('Customers', 'U') IS NOT NULL DROP TABLE Customers;
GO


CREATE TABLE Customers (
    CustomerID INT PRIMARY KEY,
    Name VARCHAR(100),
    Region VARCHAR(50)
);


CREATE TABLE Products (
    ProductID INT PRIMARY KEY,
    ProductName VARCHAR(100),
    Category VARCHAR(50),
    Price DECIMAL(10, 2)
);


CREATE TABLE Orders (
    OrderID INT PRIMARY KEY,
    CustomerID INT,
    OrderDate DATE,
    FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID)
);


CREATE TABLE OrderDetails (
    OrderDetailID INT PRIMARY KEY,
    OrderID INT,
    ProductID INT,
    Quantity INT,
    FOREIGN KEY (OrderID) REFERENCES Orders(OrderID),
    FOREIGN KEY (ProductID) REFERENCES Products(ProductID)
);
GO


--  Sample Data


INSERT INTO Customers (CustomerID, Name, Region) VALUES
(1, 'Alice', 'North'),
(2, 'Bob', 'South'),
(3, 'Charlie', 'East'),
(4, 'David', 'West');

INSERT INTO Products (ProductID, ProductName, Category, Price) VALUES
(1, 'Laptop', 'Electronics', 1200.00),
(2, 'Smartphone', 'Electronics', 800.00),
(3, 'Tablet', 'Electronics', 600.00),
(4, 'Headphones', 'Accessories', 150.00);

INSERT INTO Orders (OrderID, CustomerID, OrderDate) VALUES
(1, 1, '2023-01-15'),
(2, 2, '2023-02-20'),
(3, 3, '2023-03-25'),
(4, 4, '2023-04-30');

INSERT INTO OrderDetails (OrderDetailID, OrderID, ProductID, Quantity) VALUES
(1, 1, 1, 1),
(2, 2, 2, 2),
(3, 3, 3, 1),
(4, 4, 4, 3);
GO





-- ================================================
-- 🧪 Exercise 1: Creating a Non-Clustered Index on ProductName
-- ================================================



-- Step 1: Query before index
SELECT * FROM Products WHERE ProductName = 'Laptop';



-- Step 2: Drop index if exists
IF EXISTS (SELECT name FROM sys.indexes WHERE name = 'IX_Products_ProductName')
    DROP INDEX IX_Products_ProductName ON Products;
GO



-- Step 2: Create Non-Clustered Index
CREATE NONCLUSTERED INDEX IX_Products_ProductName
ON Products (ProductName);
GO



-- Step 3: Query after index
SELECT * FROM Products WHERE ProductName = 'Laptop';





-- ================================================
-- 🧪 Exercise 2: Creating a Non-Clustered Index on OrderDate
-- ================================================



-- Step 1: Query before index
SELECT * FROM Orders WHERE OrderDate = '2023-01-15';



-- Step 2: Drop index if exists
IF EXISTS (SELECT name FROM sys.indexes WHERE name = 'IX_Orders_OrderDate')
    DROP INDEX IX_Orders_OrderDate ON Orders;
GO



-- Step 2: Create Non-Clustered Index (since PK already uses clustered)
CREATE NONCLUSTERED INDEX IX_Orders_OrderDate
ON Orders (OrderDate);
GO



-- Step 3: Query after index
SELECT * FROM Orders WHERE OrderDate = '2023-01-15';






-- ================================================
-- 🧪 Exercise 3: Creating a Composite Index on CustomerID and OrderDate
-- ================================================



-- Step 1: Query before index
SELECT * FROM Orders WHERE CustomerID = 1 AND OrderDate = '2023-01-15';



-- Step 2: Drop index if exists
IF EXISTS (SELECT name FROM sys.indexes WHERE name = 'IX_Orders_CustomerID_OrderDate')
    DROP INDEX IX_Orders_CustomerID_OrderDate ON Orders;
GO



-- Step 2: Create Composite Non-Clustered Index
CREATE NONCLUSTERED INDEX IX_Orders_CustomerID_OrderDate
ON Orders (CustomerID, OrderDate);
GO



-- Step 3: Query after index
SELECT * FROM Orders WHERE CustomerID = 1 AND OrderDate = '2023-01-15';
