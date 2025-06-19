using System;

public class ExcelFile : IDocument
{
    public void Open()
    {
        Console.WriteLine("Excel file is now open.");
    }

    public void Close()
    {
        Console.WriteLine("Excel file has been closed.");
    }
}
