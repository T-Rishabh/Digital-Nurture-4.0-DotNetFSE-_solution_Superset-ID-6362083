# ✅ Exercise 1: Ranking and Window Functions in SQL

## 📘 Objective  
Develop a query-based financial report system using **SQL Server** that applies **window functions**  
	like `ROW_NUMBER()`, `RANK()`, and `DENSE_RANK()` to rank products based on price  
	within their categories — without modifying core data logic.

---

## 📁 Files Included

`Exercise1_RankingFunctions.sql` — SQL script that:
		▪ Creates and populates the `Products` table.
		▪ Applies 3 different ranking window functions.
		▪ Filters and displays the top 3 products per category based on price.

---

## 🧾 Table Schema 

	+------------+----------------+-------------------------------+
	| Column     | Data Type      | Description                   |
	+------------+----------------+-------------------------------+
	| ProductID  | INT            | Unique product identifier     |
	| ProductName| VARCHAR(100)   | Name of the product           |
	| Category   | VARCHAR(50)    | Product category              |
	| Price      | DECIMAL(10,2)  | Product price                 |
	+------------+----------------+-------------------------------+

---

## 🧱 How It Works

### 🔹 Table Setup  
The `Products` table is populated with 15 products from 3 categories:
		▪ Electronics  
		▪ Appliances  
		▪ Groceries

### 🔹 SQL Logic Flow

1. Window Functions Used:

		| Function      | Description                                         |
		|---------------|-----------------------------------------------------|
		| ROW_NUMBER()  | Assigns unique rank — no ties allowed               |
		| RANK()        | Allows ties, but skips numbers after duplicates     |
		| DENSE_RANK()  | Allows ties without skipping any rank               |

	2. Partitioning:
		- Ranking is performed per category using `PARTITION BY Category`.
		- Prices are sorted using `ORDER BY Price DESC`.

	3. Filtering:
		- Only top 3 products per category are selected using:

		```sql
		WHERE RankFunction <= 3
		```

		Replace `RankFunction` with `RowNum`, `RankNum`, or `DenseRankNum`.

---

## 🖼️ Code Screenshot
📌 *CODE VIEW* 
![alt text](<WhatsApp Image 2025-06-27 at 19.18.04_dcea20e5.jpg>)
---

## 📤 Output Screenshot
📌 *SSMS output screenshot showing top 3 items per category using each rank method:*  
    *OUTPUT-1*
![alt text](<WhatsApp Image 2025-06-27 at 19.15.55_1696db26.jpg>)
    *OUTPUT-2*
![alt text](<WhatsApp Image 2025-06-27 at 19.16.14_497a80f9.jpg>)
    *OUTPUT-3*
![alt text](<WhatsApp Image 2025-06-27 at 19.17.12_a4cb0f37.jpg>)

---



