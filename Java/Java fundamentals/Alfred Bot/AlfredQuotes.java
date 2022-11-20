import java.util.Date;
public class AlfredQuotes {
    
    public String basicGreeting(String botName) {
        // You do not need to code here, this is an example method
        return botName + "Hello, Beth Would you like me to elemenate the Joker for you ?";
    }
    
    public String guestGreeting(String name) {
        // YOUR CODE HERE
        return name + "thank you Alfred but i dont think batman would like that.";
    }

    public String kaka(String botName){
        return botName + "yeah your right am sorry dont mention that to Mr.wayn.";
    }

    public String bata(String name){
        return name + "i was joking elemenate that mother suckerrrrrr.";
    }
    
    public String weatherq(String name){
        return name + "yeah by the way hows the weather and date today ? .";
    }

    public String dateAnnouncement() {
        // YOUR CODE HERE
        return String.format("It is currently %s", new Date());
    }

    public String respondBeforeAlexis(String conversation) {
        if(conversation.indexOf("Alexis")>= 0){
            String snarkyString = "Right away, sir. She certainly isn't sophisticated enough for that.";
            return snarkyString;
        }
        else if(conversation.indexOf("Alfred")>= 0){
            String proudString = "At your service. As you wish, naturally.";
            return proudString;
        }
        else{
            String retire = "Right. And with that I shall retire." ;
            return retire;
        }
    }
    public String weatherAnnouncement(){
        return "Expecting some showers today to you better be prepared";
    }

}



    

