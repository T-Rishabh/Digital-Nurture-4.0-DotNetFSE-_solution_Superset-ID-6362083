
IF OBJECT_ID('sp_UpdateEmployeeSalary', 'P') IS NOT NULL
    DROP PROCEDURE sp_UpdateEmployeeSalary;
GO


CREATE PROCEDURE sp_UpdateEmployeeSalary
    @EmployeeID INT,
    @NewSalary DECIMAL(10,2)
AS
BEGIN
    UPDATE Employees
    SET Salary = @NewSalary
    WHERE EmployeeID = @EmployeeID;
END;
GO


EXEC sp_UpdateEmployeeSalary 
    @EmployeeID = 1, 
    @NewSalary = 6500.00;


SELECT * FROM Employees WHERE EmployeeID = 1;
