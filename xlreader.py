from config import Config 

import pandas as pd
import pyttsx3

from pathlib import Path

engine= pyttsx3.init()

class XlsReader:
    def __init__(self, cfg : Config = None):
        self.cfg = cfg 
        print(cfg.UPLOAD_FOLDER)

    def read_file(self, filename : str):

        path=Path(self.cfg.UPLOAD_FOLDER)
        full_filename=Path.joinpath(path, filename)
 #------------ dataframe --------------------
        xls_df= pd.read_excel(full_filename)
        owner_name = filename[0:filename.index("Equity")-1]
        owner_name_key = xls_df["ISIN"] + owner_name
        xls_df["Owner_name"] = owner_name
        xls_df["owner_key"] = owner_name_key
        xls_df.columns = xls_df.columns.str.strip()
# Rename columns explicitly
        xls_df.columns = [
        "stock_name",
        "ISIN",
        "sector_name",
        "quantity",
        "Average_cost_price",
        "value_at_cost",
        "current_market",
        "crt_mkt_price_change",
        "valuation",
        "unrealised_profit_loss",
        "unrealised_profit_loss_change",
        "realised_profit_loss",
        "nearing_long_term_quantity",
        "owner_name",
        "unique_key"]
        return xls_df
        
if __name__ == "__main__":
    cfg = Config()
    xls = XlsReader(cfg)
    a = xls.read_file("Phani_Equity_Summary_Details.xls")
    print(a)


