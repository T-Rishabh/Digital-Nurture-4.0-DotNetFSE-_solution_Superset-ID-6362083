# ✅ Exercise 2: Stored Procedure – Insert Employee 

## 📘 Objective  
   Create a reusable stored procedure in **SQL Server** to insert employee records  
   into the `Employees` table using parameterized inputs — ensuring clean, safe, and consistent data entry.

---

## 📁 Files Included

	- `Exercise2_InsertEmployee.sql` — SQL script that:
		▪ Drops and recreates the `Departments` and `Employees` tables
		▪ Inserts sample data into both tables
		▪ Defines the stored procedure `sp_InsertEmployee`
		▪ Executes the procedure with a sample employee entry

---

## 🧾 Table Schema 

### 🔸 Departments

	+---------------+----------------+----------------------+
	| Column        | Data Type      | Description          |
	+---------------+----------------+----------------------+
	| DepartmentID  | INT            | Primary Key          |
	| DepartmentName| VARCHAR(100)   | Department Name      |
	+---------------+----------------+----------------------+

### 🔸 Employees

	+------------+----------------+-------------------------------------+
	| Column     | Data Type      | Description                         |
	+------------+----------------+-------------------------------------+
	| EmployeeID | INT (IDENTITY) | Primary Key (Auto-generated)        |
	| FirstName  | VARCHAR(50)    | First name of the employee          |
	| LastName   | VARCHAR(50)    | Last name of the employee           |
	| DepartmentID| INT           | Foreign Key referencing Departments |
	| Salary     | DECIMAL(10,2)  | Employee salary                     |
	| JoinDate   | DATE           | Date employee joined                |
	+------------+----------------+-------------------------------------+

---

## 🧱 How It Works

### 🔹 Table Setup  
   The `Departments` and `Employees` tables are created using standard `CREATE TABLE` syntax.  
   Each employee is linked to a department via a foreign key (`DepartmentID`).

### 🔹 Stored Procedure Logic

	1. Procedure: `sp_InsertEmployee`
		▪ Accepts input parameters:
			- `@FirstName`
			- `@LastName`
			- `@DepartmentID`
			- `@Salary`
			- `@JoinDate`
		▪ Inserts the new employee into the `Employees` table.

	2. Batch Management:
		- Uses `GO` to separate batches and avoid "must be only statement" errors.

	3. Sample Execution:

	```sql
	EXEC sp_InsertEmployee 
	    @FirstName = 'Alice', 
	    @LastName = 'Walker', 
	    @DepartmentID = 3, 
	    @Salary = 7200.00, 
	    @JoinDate = '2022-08-01';
	```

---

## 🖼️ Code Screenshot
📌 *CODE VIEW* 
![alt text](<WhatsApp Image 2025-06-27 at 22.38.59_fb867ab9.jpg>)


---

## 📤 Output Screenshot
📌 *SSMS output screenshot*  
![alt text](<WhatsApp Image 2025-06-27 at 22.38.26_1b84f215.jpg>)

