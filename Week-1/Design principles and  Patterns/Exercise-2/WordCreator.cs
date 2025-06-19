public class WordCreator : DocumentCreator
{
    public override IDocument Create()
    {
        return new WordFile();
    }
}
