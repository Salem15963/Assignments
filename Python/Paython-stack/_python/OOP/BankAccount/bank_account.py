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

omarsaccount = BankAccount(0.3,3000)
rahasfaccount = BankAccount(0.2,2000)

omarsaccount.deposit(600).deposit(300).deposit(250).yield_interest().display_account_info()
rahasfaccount.deposit(10).deposit(100).withdraw(1000).withdraw(1100).yield_interest().display_account_info()