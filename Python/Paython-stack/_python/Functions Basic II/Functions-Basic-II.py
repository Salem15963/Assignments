for i in range (10, 0, -1):
    print (i)

def print_and_return(list):
    print(list[0])
    return list[1]
print (print_and_return([3,77]))

def first_plus_length(list):
    print(list[0])
    return len(list)
print(first_plus_length([55,46,2]))

def values_greater_than_second(list):
    if len(list)<2:
        return False
    newList = []
    # greaterThan = list[1]
    for val in list:
        if val>list[1]:
            newList.append(val)
    print(len(newList))    
    return newList
print(values_greater_than_second([55,6,2,3,99,78,20,1]))
print(values_greater_than_second([55,0,2,3,99,78,20,1]))
print(values_greater_than_second([1]))
print(values_greater_than_second([]))

def length_and_value(size,value):
    newList = []
    for i in range(size):
        newList.append(value)
    return newList
print(length_and_value(3,8))