public class ExcelCreator : DocumentCreator
{
    public override IDocument Create()
    {
        return new ExcelFile();
    }
}
