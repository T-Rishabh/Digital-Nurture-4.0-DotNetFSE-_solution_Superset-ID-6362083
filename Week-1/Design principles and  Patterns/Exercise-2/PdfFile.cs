using System;

public class PdfFile : IDocument
{
    public void Open()
    {
        Console.WriteLine("PDF file is now open.");
    }

    public void Close()
    {
        Console.WriteLine("PDF file has been closed.");
    }
}
