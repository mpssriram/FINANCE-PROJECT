import mysql.connector
import pandas as pd
from typing import List, Any, Tuple
from config import Config
from xlreader import XlsReader

class FinanceService:
    def __init__(
        self,
        config: Config | None = None,
    ):
        self.config = config or Config()
        self.host = self.config._get("database.host", "localhost")
        self.user = self.config._get("database.user", "root")
        self.password = self.config._get("database.password", "1234")  
        self.database = self.config._get("database.database", "finance_project")
        self.table = self.config._get("database.table", "finances")

    # -------------------------
    # Internal: connection helper
    # -------------------------
    def _connect(self):
        return mysql.connector.connect(
            host=self.host,
            user=self.user,
            password=self.password,
            database=self.database,
        )
    # -------------------------
    # INSERT: DataFrame -> MySQL
    # -------------------------
    def insert_dataframe(self, df: pd.DataFrame) -> int:
        """
        Insert rows from DataFrame into MySQL.

        Expected DataFrame columns:
            stock_name,
            ISIN,
            sector_name,
            quantity,
            Average_cost_price,
            value_at_cost,
            current_market,
            crt_mkt_price_change,
            valuation,
            unrealised_profit_loss,
            realised_profit_loss,
            nearing_long_term_quantity,
            owner_name

        Returns:
          number of rows inserted
        """
        print("sucess1")
        conn = self._connect()
        try:
            cursor = conn.cursor()
            sql = f"""
            INSERT INTO finances (stock_name,ISIN,sector_name,quantity,Average_cost_price,value_at_cost,current_market,crt_mkt_price_change,valuation,
                unrealised_profit_loss,
                realised_profit_loss,
                nearing_long_term_quantity,
                owner_name,unique_code)
                VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
            """
            print("sucess3")
            df = df.where(pd.notnull(df), None)
            print('sucess5')
            data: List[Tuple[Any, ...]] = []
            for _, row in df.iterrows():
                data.append((row.get("stock_name"),row.get("ISIN"),row.get("sector_name"),row.get("quantity"),row.get("Average_cost_price"),row.get("value_at_cost"),
                             row.get('current_market'),row.get('crt_mkt_price_change'),row.get('valuation'),row.get('unrealised_profit_loss'),row.get('realised_profit_loss'),row.get('nearing_long_term_quantity'),row.get('owner_name'),row.get("unique_key")))
            print("sucess6")
            print("VALID ROWS TO INSERT:", len(data))

            if not data:
                return 0
            print(data)
            cursor.executemany(sql, data)
            conn.commit()
            return cursor.rowcount
        finally:
            conn.close()


#---------- NEEDED FUNCTIONS ---------
    def search(self,data):
        conn = self._connect()
        try:
            cursor = conn.cursor(dictionary=True)
            columns = ["stock_name","ISIN",'sector_name','quantity','Average_cost_price','value_at_cost','current_market','crt_mkt_price_change','valuation',
                'unrealised_profit_loss',
                'realised_profit_loss',
                'nearing_long_term_quantity',
                "owner_name"]
            insert_columns = ",".join(columns)
            sql = f"""select {insert_columns} from {self.table} where stock_name like %s 
            """
            cursor.execute(sql,(f"%{data}%",))
            return cursor.fetchall()
        finally:
            conn.close()
# -------------- GET ALL DATA ----------
    def get_all_data(self):
        conn = self._connect()
        try:
            cursor = conn.cursor(dictionary=True)
            cursor.execute("SELECT DATABASE() AS db")
            print("APP DB:", cursor.fetchone())

            cursor.execute("SELECT @@hostname AS host, @@port AS port, USER() AS user")
            print("APP CONN:", cursor.fetchone())

            cursor.execute(f"SELECT COUNT(*) AS cnt FROM {self.table}")
            print("APP TABLE COUNT:", cursor.fetchone())

            columns = ["stock_name","ISIN",'sector_name','quantity','Average_cost_price','value_at_cost','current_market','crt_mkt_price_change','valuation',
                'unrealised_profit_loss',
                'realised_profit_loss',
                'nearing_long_term_quantity',
                "owner_name","unique_code"]
            insert_columns = ",".join(columns)
            sql = f"""select {insert_columns} from {self.table} 
            """
            cursor.execute(sql)
            rows = cursor.fetchall()
            return rows
        finally:
            conn.close()
# ------------ FET VALUES BASED ON OWNER ------
    def get_owner_based_values(self,datas):
        conn = self._connect()
        try:
            cursor = conn.cursor()
            sql = f"""SELECT sector_name FROM FINANCES WHERE OWNER_NAME = %s"""
            cursor.execute(sql,(datas,))
            rows = cursor.fetchall()
            return rows
        finally:
            conn.close()
# ----------  SEARCH BASED ON OWNER -------------
    def get_owners(self,datas):
        conn = self._connect()
        try:
            cursor = conn.cursor(dictionary = True)
            columns = ["stock_name","ISIN",'sector_name','quantity','Average_cost_price','value_at_cost','current_market','crt_mkt_price_change','valuation',
                'unrealised_profit_loss',
                'realised_profit_loss',
                'nearing_long_term_quantity',
                "owner_name","unique_code"]
            insert_columns = ",".join(columns)
            sql = f"""select {insert_columns} from {self.table} where owner_name = %s
            """
            cursor.execute(sql,(datas,))
            rows = cursor.fetchall()
            return rows
        finally:
            conn.close()
#--------- SEARCH BASED ON SECTOR -------
    def get_based_on_sector(self,owner,sector):
        conn = self._connect()
        try:
            cursor = conn.cursor(dictionary = True)
            columns = ["stock_name","ISIN",'sector_name','quantity','Average_cost_price','value_at_cost','current_market','crt_mkt_price_change','valuation',
                'unrealised_profit_loss',
                'realised_profit_loss',
                'nearing_long_term_quantity',
                "owner_name","unique_code"]
            insert_columns = ",".join(columns)
            sql = f"""select {insert_columns} from {self.table} where owner_name = %s and sector_name like %s
            """
            cursor.execute(sql,(owner,f"%{sector}%"))
            rows = cursor.fetchall()
            return rows
        finally:
            conn.close()
    def get_sector_data(self,owner,sector):
        conn = self._connect()
        try:
            cursor = conn.cursor(dictionary = True)
            columns = ["stock_name","ISIN",'sector_name','quantity','Average_cost_price','value_at_cost','current_market','crt_mkt_price_change','valuation',
                'unrealised_profit_loss',
                'realised_profit_loss',
                'nearing_long_term_quantity',
                "owner_name","unique_code"]
            insert_columns = ",".join(columns)
            placeholders = ",".join(["%s"] * len(sector))
            sql = f"""select {insert_columns} from {self.table} where owner_name = %s and sector_name NOT IN ({placeholders})
            """
            params = (owner, *sector)
            cursor.execute(sql,params)
            rows = cursor.fetchall()
            return rows
        finally:
            conn.close()

if __name__ == "__main__":
    cfg = Config("config.yaml")
    a = FinanceService(cfg)
    builder = XlsReader(cfg)
    b = builder.read_file("Phani_Equity_Summary_Details.xls")
    data = a.insert_dataframe(b)
    a.get_all_data()