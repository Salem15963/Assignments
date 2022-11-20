from flask import Flask  
app = Flask(__name__)   
@app.route('/')          
def hello_world():
    return 'Hello World!'

@app.route('/Dojo')          
def Dojo():
    return 'Dojo!' 

@app.route('/say/<name>') 
def say(name):
    return "hi " + name

@app.route('/repeat/<int:times>/<name>')
def repeat(name,times=0):
    mylist = " " 
    for x in range(times):
        mylist += name+ "<br><br>"
    return mylist


if __name__=="__main__":      
    app.run(debug=True)   



