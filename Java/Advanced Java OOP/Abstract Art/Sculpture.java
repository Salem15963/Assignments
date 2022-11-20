public class Sculpture extends Art{
    private String material;

    public Sculpture(String material) {
        super("Casper", "Omar", "A Sculpture of a Happy Ghost");
        this.material = material;
    }

    @Override
    public void viewArt() {

    }

    public String getMaterial() {
        return material;
    }

    public void setMaterial(String material) {
        this.material = material;
    }

}