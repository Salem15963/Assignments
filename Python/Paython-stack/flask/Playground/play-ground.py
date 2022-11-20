from flask import Flask, render_template
app = Flask(__name__)
@app.route('/')
def index():
    return render_template("index.html",times=1)	

@app.route('/play')
def groung1():
    return render_template("index.html", times=3, happycolor="blue")

@app.route('/play/<int:x>')
def groung2(x):
    return render_template("index.html", times=x, happycolor="blue")

@app.route('/play/<int:x>/<color>')
def groung3(x, color):
    return render_template("index.html", times=x, happycolor=color)

if __name__=="__main__":
    app.run(debug=True)

