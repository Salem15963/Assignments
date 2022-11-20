
# Intermediate Functions II
# 1 Update the values in the dictonaries and lists

# 1a Change the value 10 in x to 15. Once you're done, x should now be [ [5,2,3], [15,8,9] ].
x = [ [5,2,3], [10,8,9] ]
x[1][0]=15
print(x)


# 1b Change the last_name of the first student from 'Jordan' to 'Bryant'
students = [
    {'first_name':  'Michael', 'last_name' : 'Jordan'},
    {'first_name' : 'John', 'last_name' : 'Rosales'}
]
students[0]['last_name'] = 'Bryant'
print(students)


# 1c In the sports_directory, change 'Messi' to 'Andres'
sports_directory = {
    'basketball' : ['Kobe', 'Jordan', 'James', 'Curry'],
    'soccer' : ['Messi', 'Ronaldo', 'Rooney']
}
sports_directory['soccer'][0] = 'Andres'
print(sports_directory)


# 1d Change the value 20 in z to 30
z = [{'x': 10, 'y': 20}]
z[0]['y'] = 30
print(z)



    # 2 Iterate Through a List of Dictionaries
# Create a function iterateDictionary(some_list) that, given a list of dictionaries, the function loops 
# through each dictionary in the list and prints each key and the associated value. 
# For example, given the following list:
students2 = [
    {'first_name':  'Michael', 'last_name' : 'Jordan'},
    {'first_name' : 'John', 'last_name' : 'Rosales'},
    {'first_name' : 'Mark', 'last_name' : 'Guillen'},
    {'first_name' : 'KB', 'last_name' : 'Tonel'}
]

def iterateDictionary3(myList):
    stringReturn = ''
    for val in myList:
        stringReturn += (f"first_name - {val['first_name']}, last_name - {val['last_name']}\n")
    return stringReturn
print(iterateDictionary3(students2))


# 3 Get Values From a List of Dictionaries
# Create a function iterateDictionary2(key_name, some_list) that, given a list of dictionaries and a key name, 
# the function prints the value stored in that key for each dictionary. 
# For example, iterateDictionary2('first_name', students) should output:
# Michael
# John
# Mark
# KB
def iterateDictionary2(key_name, some_list):
    stringReturn = ''
    for val in some_list:
        stringReturn += f"{val[key_name]} \n"
    return stringReturn
print(iterateDictionary2('last_name',students2))


# 4 Iterate Through a Dictionary with List Values
# Create a function printInfo(some_dict) that given a dictionary whose values are all lists, prints the name of each key 
# along with the size of its list, and then prints the associated values within each key's list. For example:

dojo = {
    'locations': ['San Jose', 'Seattle', 'Dallas', 'Chicago', 'Tulsa', 'DC', 'Burbank'],
    'instructors': ['Michael', 'Amy', 'Eduardo', 'Josh', 'Graham', 'Patrick', 'Minh', 'Devon']
}

def printDictonaryInfo(my_dictonary):

    for key in my_dictonary:
        print(f"{len(my_dictonary[key])} {key.upper()}")
        for val in my_dictonary[key]:
            print(val)
        print("")
printDictonaryInfo(dojo)

