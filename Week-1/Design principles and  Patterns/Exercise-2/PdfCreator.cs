public class PdfCreator : DocumentCreator
{
    public override IDocument Create()
    {
        return new PdfFile();
    }
}
