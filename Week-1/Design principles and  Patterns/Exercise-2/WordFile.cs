using System;

public class WordFile : IDocument
{
    public void Open()
    {
        Console.WriteLine("Word file is now open.");
    }

    public void Close()
    {
        Console.WriteLine("Word file has been closed.");
    }
}
