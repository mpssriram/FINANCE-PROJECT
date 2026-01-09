import plotly.graph_objects as go

x = ["mon","tue","wed"]
y = [10,12,3]
fig = go.Figure(data= go.Bar(x = x,y = y))

fig.show()