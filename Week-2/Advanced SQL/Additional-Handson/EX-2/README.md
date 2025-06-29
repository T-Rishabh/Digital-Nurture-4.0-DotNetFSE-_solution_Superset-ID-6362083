# ✅ Exercise: Scalar Function – Calculate Annual Salary

## 📘 Objective  
Create a user-defined scalar function in **SQL Server**  
	that calculates the annual salary from the monthly salary of an employee.

---

## 📁 Files Included

- `Exercise_Function_AnnualSalary.sql` — SQL script that:
		▪ Creates `Departments` and `Employees` tables  
		▪ Inserts sample data  
		▪ Defines the scalar function `fn_CalculateAnnualSalary`  
		▪ Demonstrates usage of the function inside a `SELECT` query  

---

## 🧾 Table Schema (Flowchart Style)

### 🔹 Departments

	+---------------+----------------+----------------------+
	| Column        | Data Type      | Description          |
	+---------------+----------------+----------------------+
	| DepartmentID  | INT            | Primary Key          |
	| DepartmentName| VARCHAR(100)   | Department Name      |
	+---------------+----------------+----------------------+

### 🔹 Employees

	+------------+----------------+----------------------------------+
	| Column     | Data Type      | Description                      |
	+------------+----------------+----------------------------------+
	| EmployeeID | INT            | Primary Key                      |
	| FirstName  | VARCHAR(50)    | Employee's first name            |
	| LastName   | VARCHAR(50)    | Employee's last name             |
	| DepartmentID| INT           | FK referencing Departments       |
	| Salary     | DECIMAL(10,2)  | Monthly salary                   |
	| JoinDate   | DATE           | Joining date of employee         |
	+------------+----------------+----------------------------------+

---

## 🧱 Function Logic

### 🔹 Function Name: `fn_CalculateAnnualSalary`

```sql
CREATE FUNCTION dbo.fn_CalculateAnnualSalary ( 
    @Salary DECIMAL(10, 2)
)
RETURNS DECIMAL(10, 2)
AS
BEGIN
    RETURN @Salary * 12;
END;
```
---
## 🖼️ Code Screenshot
📌 *CODE VIEW*
   ![alt text](<WhatsApp Image 2025-06-29 at 18.14.03_a77022b5.jpg>)
---
## 📤 Output Screenshot
📌 *SSMS output screenshot:* 
![alt text](<WhatsApp Image 2025-06-29 at 18.13.26_793053b8.jpg>)
---
