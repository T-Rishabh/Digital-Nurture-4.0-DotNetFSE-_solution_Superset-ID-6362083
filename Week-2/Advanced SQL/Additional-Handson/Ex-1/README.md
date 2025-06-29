# ✅ Index Optimization Exercises in SQL Server

## 📘 Objective  
Implement index optimization in SQL Server by using:
	▪ Non-clustered index  
	▪ Clustered (replaced with non-clustered due to PK)  
	▪ Composite index  
	To improve query performance on real-world e-commerce style data.

---

## 📁 Files Included

- `Exercise_Indexing.sql` — SQL script that:
		▪ Creates and populates tables: Customers, Products, Orders, OrderDetails  
		▪ Implements 3 index optimization exercises:
			1. Non-clustered index on `ProductName`
			2. Non-clustered index on `OrderDate`
			3. Composite index on `CustomerID`, `OrderDate`
		▪ Includes test queries before and after index creation

---

## 🧾 Table Schema Overview

### 🔹 Products

	+-------------+--------------+---------------------+
	| Column      | Data Type    | Notes               |
	+-------------+--------------+---------------------+
	| ProductID   | INT          | Primary Key         |
	| ProductName | VARCHAR(100) | Indexed (E1)        |
	| Category    | VARCHAR(50)  |                     |
	| Price       | DECIMAL      |                     |
	+-------------+--------------+---------------------+

### 🔹 Orders

	+------------+--------+-------------------------+
	| Column     | Type   | Notes                   |
	+------------+--------+-------------------------+
	| OrderID    | INT    | Primary Key (Clustered) |
	| CustomerID | INT    | FK to Customers         |
	| OrderDate  | DATE   | Indexed (E2 & E3)       |
	+------------+--------+-------------------------+

---


## 🖼️ Code Screenshot
📌 *CODE VIEW*
![alt text](<WhatsApp Image 2025-06-29 at 17.22.35_df16aebe.jpg>)

---

## 📤 Output Screenshot
📌 *SSMS output screenshot:* 
    
*OUTPUT-1*
    *Before*
    <br>
 ![alt text](<WhatsApp Image 2025-06-29 at 17.19.03_02522603.jpg>)
    <br>*After*<br>
    ![alt text](<WhatsApp Image 2025-06-29 at 17.19.42_c2d47d5a.jpg>)
    *OUTPUT-2*
    *Before*
    ![alt text](<WhatsApp Image 2025-06-29 at 17.20.15_e741c773.jpg>)
    *After*
    ![alt text](<WhatsApp Image 2025-06-29 at 17.20.42_c196e7d7.jpg>)
    *OUTPUT-3*
    *Before*
    ![alt text](<WhatsApp Image 2025-06-29 at 17.21.06_acc74122.jpg>)
    *After*
    ![alt text](<WhatsApp Image 2025-06-29 at 17.21.31_152ab377.jpg>)
