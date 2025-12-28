import matplotlib.pyplot as plt
import numpy as np
class Graph:
    def __init__(self):
        pass

    def build_graph(self,data):
        x = np.array(data)
        y = np.array([35, 25, 25, 15,x])
        a = plt.pie(y)
        plt.show()
        
if __name__ == "__main__":
    a = Graph()
    a.build_graph(12)