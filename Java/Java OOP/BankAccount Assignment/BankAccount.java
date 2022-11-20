public class BankAccount{
    private double checkingBalance=0.0;
    private double savingsBalance=0.0;
    private static int numberOfAccounts=0;
    private static double amountOfMoney=0;
    public BankAccount(){

        double savingsBalance;
        double checkingBalance;
        double amountOfMoney;
        numberOfAccounts++;
    
    }
    public double getBalance(){
        return checkingBalance;
    }
    public double getSavingsBalance(){
    return savingsBalance;
    }

    public double setSavingsBalance(double savingsBalance){
        this.savingsBalance=savingsBalance;
        return savingsBalance;

    }
    public void setCheckingBalance(double checkingBalance){
        this.checkingBalance=checkingBalance;
    }
    public void depositMoney(String type, double depositMoney){
        if(type=="checkingBalance"){
            setCheckingBalance(getBalance()+depositMoney);
        amountOfMoney=amountOfMoney+depositMoney;
        }
        if(type=="savingBalance"){
            setSavingsBalance(getSavingsBalance()+depositMoney);
            amountOfMoney=amountOfMoney+depositMoney;
        }
        else{
            System.out.println("please enter account type");
        }
        

        }
        public void withdrawMoney(String type, double withdrawMoney){
            if(type=="checking"){
                if(getBalance()<withdrawMoney){
                    System.out.println("insufficient fund");
                }
                else{
                setCheckingBalance(getBalance()-withdrawMoney);
                }
            }
            if(type=="saving"){
                if(getSavingsBalance()<withdrawMoney){
                    System.out.println("insufficient fund");
                }
                else{
                    setSavingsBalance(getSavingsBalance()-withdrawMoney);
                    amountOfMoney=amountOfMoney-withdrawMoney;
                }
            }
        }
        public double total(){
            double totalMoney=checkingBalance+savingsBalance;
            System.out.println(totalMoney);
            return totalMoney;
        }
        }
    

