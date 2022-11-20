import java.util.ArrayList;
import java.util.Random;

public class Exceptions {

static ArrayList myList = new ArrayList<>();
    public static void main(String[] args) {

        myList.add("13");
        myList.add("hello world");
        myList.add(48);
        myList.add("Goodbye World");


        for(int i = 0; i < myList.size(); i++) {
            try {
                Integer castedValue = (Integer) myList.get(i);
            } catch(Exception e ) {
        System.out.println("Caught exception: " + myList.get(i));}
        }
    }


}