using System;

public class Logger
{
    private static Logger instance;

    private string user;
    private string pass;

    private Logger() { }
 
    public static Logger GetLogger()
    {
        if (instance == null)
        {
            instance = new Logger();
        }
        return instance;
    }

    public void SetCredentials(string username, string password)
    {
        user = username;
        pass = password;
    }

    public void PrintCredentials()
    {
        Console.WriteLine("User: " + user);
        Console.WriteLine("Pass: " + pass);
    }
}
