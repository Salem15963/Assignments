import java.util.ArrayList;

public class Order{
    private String name;
    // private double total;
    private boolean ready;
    private ArrayList<Item> items = new ArrayList<Item>();


public String getName() {
    return name;
}

public void setName(String name) {
    this.name = name;
}

public Boolean getReady() {
    return ready;
}
public void setReady(Boolean ready) {
    this.ready = ready;        
}

public ArrayList<Item> getItems() {
    return items;
}

public void getItems(ArrayList<Item> items) {
    this.items = items;
}

public void addItem(Item item) {
    this.items.add(item);
}

public Order () {
    this.name = "guest";
    this.ready = true;
}
public Order (String name) {
    this.name = name;
    this.ready = false;
}

public String getStatusMessage() {
    if (this.ready == true) {
        return ("Your Order is Ready.");
    } else {
        return ("Thank you for waiting, Your order will be ready soon.");
    }
}

public double getOrderTotal() {
    double total = 0;
    for (Item i : this.items) {
        total += i.getPrice();
    }
    return total;
}

public void display() {
    System.out.println("Customer's Name: " + this.name);
for (Item i : this.items) {
    System.out.println(i.getName() + "-$" + i.getPrice());
}
System.out.println("Total: $" + this.getOrderTotal());
}

}