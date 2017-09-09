var inp="hello"
function frequency(){
var freq={}
for (char in inp){
if(inp[char] in freq){
freq[inp[char]] +=1
}
else{
freq[inp[char]] = 1}
}
return freq
}

inp_freq=frequency()


function sort(obj){
var inp_list= []
for (char in obj){
inp_list.push([obj[char],char])}
inp_list.sort()
return inp_list}

lis_arr=sort(inp_freq)


function least_add(lis){
while (lis.length>1){
var least_two=[]
least_two=lis.slice(0,2)
var add=[]
add.push(lis[0][0]+lis[1][0])
var bal=[]
bal=lis.slice(2)
var res=[]
res=add.concat([least_two])
lis=bal.concat([res])
lis.sort()
}
return lis[0]
}

res_leaf=least_add(lis_arr)

function resultant_leaves(leaf){
var ch = leaf[1]
if (typeof(ch)==typeof("")){
return ch
}
else{
var a=[resultant_leaves(ch[0]),resultant_leaves(ch[1])]
return a
}
}

result_leaves=resultant_leaves(res_leaf)
console.log(result_leaves)

var codes={}
function assign_codes(node,s=''){
if (typeof(node)==typeof("")){
codes[node]=s
}
else{
assign_codes(node[0],s+="0")
assign_codes(node[1],s+="1")
}
return codes
}

assigned_codes=assign_codes(result_leaves)
console.log(assigned_codes)


function encode(code){
var enc_string=""
for (char in inp){
enc_string += code[inp[char]]
}
return enc_string
}

res_string=encode(assigned_codes)
console.log(res_string)
