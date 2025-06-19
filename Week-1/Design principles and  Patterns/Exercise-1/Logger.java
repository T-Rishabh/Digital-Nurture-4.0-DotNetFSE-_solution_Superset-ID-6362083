public class Logger {
    
    private static Logger instance;

    private String user;
    private String pass;
 
    private Logger() {}
  
    public static Logger getLogger() {
        if (instance == null) {
            instance = new Logger();
        }
        return instance;
    }

    public void setCredentials(String username, String password) {
        this.user = username;
        this.pass = password;
    }
   
    public void printCredentials() {
        System.out.println("User: " + user);
        System.out.println("Pass: " + pass);
    }
}
