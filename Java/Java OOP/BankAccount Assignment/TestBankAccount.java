
    public class TestBankAccount { 
        public static void main(String[] args) {
            BankAccount user=new BankAccount();
            user.depositMoney("checking", 1000);
            user.getSavingsBalance();
            user.withdrawMoney("savings", 200);
            user.total();
    
        }
    }
    
