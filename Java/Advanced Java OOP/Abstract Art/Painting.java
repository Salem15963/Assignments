
public class Painting extends Art{
    private String paintType;

    public Painting(String paintType) {
        super("zungol", "Omar", "It looks like a Poteto but its not");
        this.paintType = paintType;
    }

    @Override
    public void viewArt() {

    }

    public String getPaintType() {
        return paintType;
    }

    public void setPaintType(String paintType) {
        this.paintType = paintType;
    }
}