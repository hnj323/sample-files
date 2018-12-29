import pandas as pd 
import matplotlib.pyplot as plt 
hh = pd.read_csv('iplre.csv')

#print(ipl_data)
hh.plot(x='Year', y=['Raina' ,'Kohli','Rohit'])
plt.ylabel("Runs Scored")
plt.show()
