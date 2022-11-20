from flask import Flask, render_template, request, redirect, session

app = Flask(__name__)
app.secret_key = 'codingdojo'
@app.route('/', methods=['GET', 'POST'])
def lets_count():
    if "clicks_counter" in session:
        print("key is exists")
    else:
        print("key does not exists")
        session["clicks_counter"]= 0

    
    count = session['clicks_counter']
    count+=1
    session['clicks_counter'] = count

    return render_template("index.html", clicks= session['clicks_counter'])


@app.route('/add_two', methods=['GET', 'POST'])
def add_two():
    count = session['clicks_counter']
    count+=1
    session['clicks_counter'] = count + 1

    return redirect('/')
    

@app.route('/destroy_session')
def destroy():
    if "clicks_counter" in session:
        session['clicks_counter'] = 0

    else:
        session['clicks_counter'] = 0

    return redirect('/')



if __name__ == "__main__":
    app.run(debug=True)