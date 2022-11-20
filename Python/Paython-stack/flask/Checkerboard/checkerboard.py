from flask import Flask,render_template, request
app = Flask(__name__)

print(__name__)

@app.route('/')
def index():
    return render_template("index.html")

    
@app.route('/<int:i>/<int:j>')
def index2(i,j):
    return render_template("index2.html", x=i, y=j)

if __name__=="__main__":
    app.run(debug=True)