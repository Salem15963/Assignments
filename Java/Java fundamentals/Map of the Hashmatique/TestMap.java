import java.util.Set;
import java.util.HashMap;
public class TestMap {
    public static void main(String[] args) {

        HashMap<String, String> TrackList = new HashMap<String, String>();

        TrackList.put("Cold Play", "Hymn For The Weekend");
        TrackList.put("eminem", "Stan");
        TrackList.put("Balti", "Allo ");
        TrackList.put("Machine Gun Kelly", "Rap Devil");

        String singer1 = TrackList.get("Cold Play");
        String singer2 = TrackList.get("eminem");
        String singer3 = TrackList.get("Balti");
        String singer4 = TrackList.get("Machine Gun Kelly");


        Set<String> keys = TrackList.keySet();
        for(String key : keys) {
            System.out.println("Singer: " + key + " /Song Name: " +TrackList.get(key));
            // System.out.println(TrackList.get(key));    
        }

    }
}

