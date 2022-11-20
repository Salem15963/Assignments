public class Item{

private String name;
private double price;

public String getName() {
    return name;
}

public String setName() {
    return this.name;
}

public Item (String name,double price) {
    this.price = price;
    this.name = name;
}

public double getPrice() {
    return price;
}
    public void setPrice(Double price) {
        this.price = price;        
    }
}