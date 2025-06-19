using System;

public class Program
{
    public static void Main(string[] args)
    {
        RunDocumentTest("Word");
        RunDocumentTest("PDF");
        RunDocumentTest("Excel");
    }

    public static void RunDocumentTest(string type)
    {
        DocumentCreator creator = null;

        switch (type.ToLower())
        {
            case "word":
                creator = new WordCreator();
                break;
            case "pdf":
                creator = new PdfCreator();
                break;
            case "excel":
                creator = new ExcelCreator();
                break;
            default:
                Console.WriteLine("Unsupported document type.");
                return;
        }

        IDocument document = creator.Create();
        Console.WriteLine($"\n[TEST] Creating and working with a {type} document:");
        document.Open();
        document.Close();
    }
}
