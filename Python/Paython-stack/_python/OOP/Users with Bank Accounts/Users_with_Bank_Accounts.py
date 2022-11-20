class User:		
    def __init__(self, name,email):
        self.name = name
        self.email = email
        self.account = BankAccount(int_rate=0.02, balance=0)	# added this line

    def make_deposit(self, amount):	
        self.account.deposit(amount)
        return self

    def make_withdrawal(self, amount):	
        self.account.withdraw(amount)
        return self
    
    def display_user_balance(self):	
        print(self.name,self.email,self.account.display_account_info())
      

    def transfer_money(self,user,amount):
        self.make_withdrawal(amount)
        user.make_deposit(amount)
        return self
###########################################
class BankAccount:
    def __init__(self, int_rate, balance=100):
        self.int_rate = int_rate
        self.balance = balance

    def deposit(self, amount):
        self.balance += amount
        return self

    def withdraw(self, amount):
        self.balance -= amount
        return self

    def display_account_info(self):
        print("Your Balance Total: ",self.balance)
        return self

    def yield_interest(self):
        # interest = balance * int_rate 
        # total balance = balance + (interest)
        self.balance = (self.balance*self.int_rate) + self.balance
        return self

Omar = User("Omar","omar@x.com")

Omar.make_deposit(200).display_user_balance()
