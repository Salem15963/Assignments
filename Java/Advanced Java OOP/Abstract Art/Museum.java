public class Museum {
    public static void main(String[] args) {

        Painting painting1 = new Painting("oil");
        Painting painting2 = new Painting("Watercolor");
        Painting painting3 = new Painting("Acrylic");

        Sculpture sculpture1 = new Sculpture("Marble");
        Sculpture sculpture2 = new Sculpture("Bronze");
        System.out.println(painting1.getPaintType());
        System.out.println(painting2.getPaintType());
        System.out.println(painting3.getPaintType());
        System.out.println(sculpture1.getMaterial());
        System.out.println(sculpture2.getMaterial());
    }

}