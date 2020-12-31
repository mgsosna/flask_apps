import logging
import pandas as pd

class InputHandler:
    """
    | Methods for checking inputs to endpoints
    """

    def cols_valid(self,
                   df: pd.DataFrame,
                   req_cols: set) -> bool:
       """
       | Determine whether columns required for model are present
       |
       | --------------------------------------------------------
       | Parameters
       | ----------
       |  df : pd.DataFrame
       |    Dataframe input
       |
       |  req_cols: set
       |    Required columns for model
       |
       |
       | Returns
       | -------
       |  bool
       |    Whether columns are valid
       """
       missing_cols = req_cols.difference(df.columns)

       if len(missing_cols) > 0:
           logging.error(f"{missing_cols} columns required but missing")
           return False

       return True

def handle_input(data: dict):
    """
    | Handle JSON input from
    """
