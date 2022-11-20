import java.util.*;
public class TestOrder {
    public static void main(String[] args) {
        Items Item1 = new Items();
        Items Item2 = new Items();
        Items Item3 = new Items();
        Items Item4 = new Items();

        Orders order1 = new Orders();
        Orders order2 = new Orders();
        Orders order3 = new Orders();
        Orders order4 = new Orders();
        ArrayList<Items> items = new ArrayList<Items>();

        Item1.setName("Mocha");
        Item2.setName("Latte");
        Item3.setName("Drip Coffee");
        Item4.setName("Cappuccino");
        Item1.setPrice(3.0);
        Item2.setPrice(4.5);
        Item3.setPrice(5.5);
        Item4.setPrice(2.5);

        order1.setName("Cindhuri");
        order1.setReady(true);
        order2.setName("Zaki");
        order2.setReady(false);
        order3.setName("Khaled");
        order4.setName("Yousef");
        order4.setReady(true);
        order2.getItems().add(Item1);
        order3.getItems().add(Item3);

        order4.getItems().add(Item4);
        order4.getItems().add(Item4);
        order4.getItems().add(Item4);
        order4.addItem(Item4);
        
//        order4.display();
//        order4.getStatusMessage();

        CoffeeKiosk cafe = new CoffeeKiosk();
        cafe.addMenuItem("Mocha", 3.0);
        cafe.addMenuItem("Latte", 4.0);
        cafe.addMenuItem("Cappuccino", 3.5);
        cafe.addMenuItem("Coffee", 2.0);
        cafe.newOrder();
    }
}