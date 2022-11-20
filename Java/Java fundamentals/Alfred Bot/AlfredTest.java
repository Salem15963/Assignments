public class AlfredTest {

    public static void main(String[] args) {

        AlfredQuotes alfredBot = new AlfredQuotes();
        
        String testGreeting = alfredBot.basicGreeting("Alfred The Bot: ");
        String testGuestGreeting = alfredBot.guestGreeting("Beth wayn: ");
        String rocketLauncher = alfredBot.kaka("alfred the bot: ");
        String batabet = alfredBot.bata("Beth wayn: ");
        String weatherq = alfredBot.weatherq("Beth wayn: ");
        String testDateAnnouncement = alfredBot.dateAnnouncement();
        String weatherAnnouncement = alfredBot.weatherAnnouncement();      
        String alexisTest = alfredBot.respondBeforeAlexis("Alexis! Play some low-fi beats.");
        String alfredTest = alfredBot.respondBeforeAlexis("I can't find my yo-yo. Maybe Alfred will know where it is.");
        String notRelevantTest = alfredBot.respondBeforeAlexis("Maybe that's what Batman is about. Not winning. But failing..");
        

        System.out.println(testGreeting);      
        System.out.println(testGuestGreeting);
        System.out.println(rocketLauncher);
        System.out.println(batabet);
        System.out.println(weatherq);
        System.out.println(weatherAnnouncement);
        System.out.println(testDateAnnouncement);
        
        System.out.println(alexisTest);
        System.out.println(alfredTest);
        System.out.println(notRelevantTest);
    }
}
