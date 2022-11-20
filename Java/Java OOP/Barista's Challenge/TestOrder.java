import java.util.ArrayList;

public class TestOrder {

    public static void main(String[] args) {

        Item item1 = new Item("mocha",3.25);
        Item item2 = new Item("latte",4.50);
        Item item3 = new Item("drip coffee",2.25);
        Item item4 = new Item("capuccino",3.50);

        Order Order1= new Order();
        Order Order2= new Order();

        Order Order3 = new Order("Cindhuri");
        Order Order4 = new Order("Jimmy");
        Order Order5 = new Order("Noah");
        Order Order6 = new Order("Sam");

            Order1.addItem(item1);
            Order3.addItem(item1);
            Order4.addItem(item2);
            Order5.addItem(item3);
            Order6.addItem(item4);

        System.out.println(Order3.getStatusMessage());  
        System.out.println(Order4.getStatusMessage());   
        System.out.println(Order5.getStatusMessage());  
        System.out.println(Order6.getStatusMessage());  

        Order1.setReady(true);
        System.out.println(Order1.getStatusMessage());
        Order3.setReady(true);
        System.out.println(Order3.getStatusMessage());

        Order4.setReady(false);
        System.out.println(Order4.getStatusMessage());

        Order5.setReady(true);
        System.out.println(Order5.getStatusMessage());

        // Test the total by printing the return value like so:
        System.out.println(Order1.getOrderTotal());
        System.out.println(Order3.getOrderTotal());
        System.out.println(Order4.getOrderTotal());
        System.out.println(Order5.getOrderTotal());

        // Call the display method on all of your orders, like so: order3.display();

        Order3.addItem(item2);
        Order3.addItem(item1);
        Order3.addItem(item4);
        Order3.display();

        Order1.addItem(item2);
        Order1.addItem(item3);
        Order1.addItem(item1);
        Order1.display();

        Order4.addItem(item3);
        Order4.addItem(item2);
        Order4.display();

        Order5.addItem(item3);
        Order5.addItem(item4);
        Order5.addItem(item2);
        Order5.display();

    }

}

