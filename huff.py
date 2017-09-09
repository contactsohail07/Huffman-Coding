inp_string=raw_input("enter the string ")
def frequency():
    global inp_string
    freq={}
    for char in inp_string:
        freq[char]=freq.get(char,0)+1
    return freq
    
inp_freq=frequency()

def sort(dict):
    inp_list=[]
    for char in dict:
        inp_list.append((dict[char],char))
    inp_list.sort()    
    return inp_list
    
lis_tup=sort(inp_freq)

def least_add(lis):
    while len(lis)>1:
        least_two=(lis[0:2])
        add=lis[0][0]+lis[1][0]
        bal=lis[2:]
        lis=bal + [(add,least_two)]
        lis.sort()
    return lis[0]
        
res_leaf=least_add(lis_tup)

def resultant_leaves(tup):
    ch=tup[1]
    if type(ch)==type(""):
        return ch
    else:
        return (resultant_leaves(ch[0]),resultant_leaves(ch[1]))
        
result_leaves=resultant_leaves(res_leaf)

codes={}
def assign_codes(tupl,s=''):
    global codes
    if type(tupl)==type(""):
        codes[tupl]=s
    else:
        assign_codes(tupl[0],s+"0")
        assign_codes(tupl[1],s+"1")
    return codes
assigned_codes=assign_codes(result_leaves)
print(assigned_codes)

def encode(dic):
    enc_string=""
    global inp_string
    for char in inp_string:
        enc_string+=dic[char]
    return enc_string

res_string=encode(assigned_codes)
print(res_string)
