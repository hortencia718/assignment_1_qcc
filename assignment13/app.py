# assignment 13 create a list myList with 4 values
#resign values from position 1 to the end of mylist to a new mylist2 
#remove the 3rd item 
# resign  new list3
# 
#  
myList=[12,14,17,18,45]
print(myList)

myList2=[14,17,24,36,'happy']
print(myList2)

myList2= myList2[1:4]
print(myList2)


myList2.append('blues')
print(myList2)

del myList2[2]
print(myList2)

myList3=myList2
print(myList3)



