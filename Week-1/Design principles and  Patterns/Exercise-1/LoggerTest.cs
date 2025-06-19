using System;

public class LoggerTest
{
    public static void Main(string[] args)
    {
        Logger logA = Logger.GetLogger();
        Logger logB = Logger.GetLogger();

        if (logA == logB)
        {
            Console.WriteLine("Logger instances are identical.");
        }
        else
        {
            Console.WriteLine("Logger instances are different!");
        }

        Console.WriteLine();

        RunCredentialCheck(logA, logB);
    }

    private static void RunCredentialCheck(Logger a, Logger b)
    {
        a.SetCredentials("adminUser", "pass123");
        b.SetCredentials("guestUser", "pass456");

        Console.WriteLine("Logger A credentials:");
        a.PrintCredentials();

        Console.WriteLine();

        Console.WriteLine("Logger B credentials:");
        b.PrintCredentials();

        Console.WriteLine("\nNote: Both loggers reflect the same state due to Singleton behavior.");
    }
}
