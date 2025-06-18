
public class LoggerTest {
    public static void main(String[] args) {
      
        Logger logA = Logger.getLogger();
        Logger logB = Logger.getLogger();

      
        if (logA == logB) {
            System.out.println("Logger instances are identical.");
        } else {
            System.out.println("Logger instances are different!");
        }

        System.out.println();

        runCredentialCheck(logA, logB);
    }
    
    private static void runCredentialCheck(Logger a, Logger b) {
        a.setCredentials("adminUser", "pass123");
        b.setCredentials("guestUser", "pass456");

        System.out.println("Logger A credentials:");
        a.printCredentials();

        System.out.println();

        System.out.println("Logger B credentials:");
        b.printCredentials();

        System.out.println("\nNote: Both loggers reflect the same state due to Singleton behavior.");
    }
}
