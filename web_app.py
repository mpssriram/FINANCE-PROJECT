from flask import Flask, render_template,request
from pathlib import Path
from config import Config
from database import FinanceService
from xlreader import XlsReader
import mysql.connector

# --------------------
# Setup
# --------------------
cfg = Config("config.yaml")
app = Flask(__name__)

finance = FinanceService(cfg)
Xls_Reader = XlsReader(cfg)

@app.route("/", methods=["GET"])
def index():
    return render_template("index.html")

@app.route("/holdings", methods=["GET"])
def holdings():
    rows = finance.get_all_data()
    return render_template("table.html",rows = rows)
#-------- APIs FOR THE PROGRAM --------------
# 1. --------- FOR SEARCH BAR ----------
def search_bar(tags):
    if not tags:
        rows = finance.get_all_data()
        print("ALL ROWS COUNT:", len(rows))
    else:
        rows = finance.search(data = tags)
    
    return render_template("table.html",rows = rows)
# 2. ------------USER URL LINK FOR UPLOADING --------------
def URL_Link(data):
    
    if not data:
        return "file not found not provided",400
    p = Path(data)


    if not p.exists() or not p.is_file():
        return "File not found on system", 400
    
    try:
        input_user = Xls_Reader.read_file(str(p))
        print("sucess")
        finance.insert_dataframe(input_user)
        print("sucess2")  # UNIQUE key may trigger IntegrityError
    except mysql.connector.IntegrityError:
        # ✅ data already exists because UNIQUE key hit
        pass

    rows = finance.get_all_data()
    return render_template("table.html", rows=rows)
    
@app.route("/search", methods=["GET"])
def search():
    tags = (request.args.get("tags") or "").strip()
    return search_bar(tags)

@app.route("/urllink", methods=["POST"])
def Url_link():
    datas = (request.form.get("datas") or "").strip()
    return URL_Link(datas)

if __name__ == "__main__":
    # app.run(debug=True)
    app.run(host="0.0.0.0", port=5000, debug=True)

    

    

