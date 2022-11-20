# from array import array
# from audioop import add

#Biggie Size

# Large = [2,4,-6,8,-10]
# def big (Large):
#     for i in range(len(Large)):
#         if Large[i]<0 :
#             Large [i] = 'big'
#     return Large
# print (big(Large))

#Count Positives

# positive = [1,3,5,-7,-9,1,2,2,12,12]
# def counter(positive):
#     temp = 0
#     for i in range(len(positive)):
#         if positive[i]>0:
#             temp = temp + 1 
#     positive.append(temp)
#     print(temp)
#     return positive
# print(counter(positive))


#Sum Total 

# def sum(arr):

#     sum = 0

#     for i in arr:
#         sum = sum + i
#     return(sum)

# arr = []
# arr = [5, 3, 1, 7]

# n = len(arr)

# ans = sum(arr)

# print('Sum of the array is ', ans)

# #Average

# def Average(lst):
#     sum_of_list = 0
#     for i in range(len(lst)):
#         sum_of_list += lst[i]
#     average = sum_of_list/len(lst)
#     return average

# lst = [2, 4, 6, 8, 10]
# average = Average(lst)
# print("Average of the list =", round(average, 2))

# #Length

# Length = [ 1, 3, 5, 7, 9 ]

# print ("The list is : " + str(Length))

# counter = 0
# for i in Length:

#     counter = counter + 1

# print ("Length of array is : " + str(counter))

#Minimum


# def Minimum(arr, n):

#     min = arr[0]

#     for i in range(1, n):
#         if arr[i] < min:
#             min = arr[i]
#     return min

# arr = [10, 159, 77, 23, 101]
# n = len(arr)
# Ans = Minimum(arr, n)
# print("lowest array value ", Ans)


#Maximum

# def largest(arr, n):

#     max = arr[0]

#     for i in range(1, n):
#         if arr[i] > max:
#             max = arr[i]
#     return max

# arr = [10, 159, 77, 23, 101]
# n = len(arr)
# Ans = largest(arr, n)
# print("Highest array value ", Ans)


#Ultimate Analysis

ultimate_analysis = [37,2,1,-9,232,80,-20]


def ultimate_analysis (arr):

    sum = 0

    for i in arr:
        sum = sum + i

    return(sum)

arr = []

arr = [37,2,1,-9,232,80,-20]

n = len(arr)

ans = ultimate_analysis(arr)

print('Sum of the array is ', ans)



def Average(lst):
    sum_of_list = 0
    for i in range(len(lst)):
        sum_of_list += lst[i]
    average = sum_of_list/len(lst)
    return average

lst = [37,2,1,-9,232,80,-20]
average = Average(lst)
print("Average of the list =", round(average, 2))



def Minimum(arr, n):

    min = arr[0]

    for i in range(1, n):
        if arr[i] < min:
            min = arr[i]
    return min

arr = [37,2,1,-9,232,80,-20]
n = len(arr)
Ans = Minimum(arr, n)
print("lowest array value ", Ans)



Length = [37,2,1,-9,232,80,-20]

print ("The list is : " + str(Length))

counter = 0
for i in Length:

    counter = counter + 1

print ("Length of array is : " + str(counter))

def largest(arr, n):

    max = arr[0]

    for i in range(1, n):
        if arr[i] > max:
            max = arr[i]
    return max

arr = [37,2,1,-9,232,80,-20]
n = len(arr)
Ans = largest(arr, n)
print("Highest array value ", Ans)


#Reverse List

digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

for i in range(len(digits)):
    last_item = digits.pop()
    digits.insert(i, last_item)

print(digits)