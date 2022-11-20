class User:		
    def __init__(self, name,email,account):
        self.name = name
        self.email = email
        self.account = account

    def make_deposit(self, amount):	
        self.account += amount

    def make_withdrawal(self, amount):	
        self.account -= amount
    
    def display_user_balance(self):	
        print(self.name,self.email,self.account)

    def transfer_money(self,user,amount):
        self.make_withdrawal(amount)
        user.make_deposit(amount)

guido= User("guido","guido@gmail.com",1500)
omar=User("omar","omar@gmail.com",2500)
ali= User("ali","ali@gmail.com",5000)

guido.make_deposit(100)
guido.make_deposit(200)
guido.make_deposit(1000)
guido.make_withdrawal(10)
guido.display_user_balance()

omar.make_deposit(2000)
omar.make_deposit(2000)
omar.make_withdrawal(50)
omar.make_withdrawal(50)
omar.display_user_balance()

ali.make_deposit(1000)
ali.make_withdrawal(50)
ali.make_withdrawal(50)
ali.make_withdrawal(50)
ali.display_user_balance
guido.transfer_money(ali,50)
ali.display_user_balance()

