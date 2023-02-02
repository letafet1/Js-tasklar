//Input ile daxil olunan ədədlerin cemi.
//let a = +prompt("eded daxil edin", );
//let b = +prompt("eded daxil edin", );
//result=a+b
//console.log(result)

//Input ile daxil olunan musbet ədədlerin cemi. 
//let a = +prompt("eded daxil edin", );
//let b = +prompt("eded daxil edin", );
//result=a+b
//if (a>0 && b>0){
//    console.log(result)
//}else{
//    console.log("eded duzgun daxil edilmeyib")
//}


//Input ile daxil olunan ədədin sıfır,müsbət yoxsa mənfi olduğunu tapın.
//let a = +prompt("eded daxil edin", );

//if (a==0){
    //console.log("eded 0-ra beraberdir")
//} else if (a>0){
    //console.log("eded musbetdir")
//}
//else{
    //console.log("eded menfidir")
//}


//Input ile daxil olunan 2 eded arasinda olan en boyuk ededi tapin
//let a = +prompt("eded daxil edin", );
//let b = +prompt("eded daxil edin", );

//if (a>b){
    //console.log("a boyukdur")
//} 
//else{
    //console.log("b boyukdur")
//}


//1-100 arasındaki cut ededlerin toplamını tapin
//var cem=0
//for (var i=1; i<100; i++){
    //if (i%2==0){
        //cem=cem+i
    //}
//}
//console.log(cem)


//1-100 arasındaki cut ededlerin toplamının mükemmel eded olub-olmadığını tapin
//var cem=0
//for (var i=1; i<100; i++){
    //if (i%2==0){
        //cem=cem+i
    //}
//}

//var result=0
//for(var i=1; i<cem; i++){
    //if(cem%i==0){
        //result=result+i
    //}
    
//}
//if(result==cem){
    //console.log("eded mukemmeldir")
//}else{
    //console.log("eded mukemmel deyil")
//}


//10 ile 200 arasında ededlerin 3 qatinin 2 eded artiginin 5-e bölünen ededleri gösterin

//for (var i=10; i<200; i++){
    //i=i*3+2
    //if(i%5==0){
        //console.log(i)
    //}
    //else{
       // break
    //}
//}


//ededin factoriali

//let a = +prompt("eded daxil edin", );
//var factorial=1

//for (var i=1; i<=a; i++){
   // factorial=factorial*i
//}
//console.log(factorial)


//fibonacci
//let n1=0,n2=1,son;

//for (let i=1; i<=100; i++){
    //console.log(n1); 
    //son=n1+n2; 
    //n1=n2; 
    //n2=son;
//}



//Input ile daxil olunan ədədin neçə rəqəmli olduğunu tapın.

//let b = prompt("eded daxil edin", );
//console.log(b.length)



//Input ile daxil olunan ədədin rəqəmlərinin cəmini tapın

//let eded = prompt("eded daxil edin", );
//let cem=0

//while (eded>0){
    //digit=eded%10
    //cem=cem+digit
    //eded=Math.trunc(eded/10)
//}
//console.log(cem)


//Input ile daxil olunan ədədin rəqəmlərinin hasilini tapın.

//let eded = prompt("eded daxil edin", );
//let hasil=1

//while (eded>0){
    //digit=eded%10
    //hasil=hasil*digit
    //eded=Math.trunc(eded/10)
//}
//console.log(hasil)


//Input ile daxil olunan ədədin bölənlərini tapın.
//let eded = prompt("eded daxil edin", );

//for (let i=1; i<=eded; i++){
    //if (eded%i==0){
        //console.log(i)
    //}else{
    //}
//}



//Input ile daxil olunan ədədin bölənlərinin sayını tapın.
//let eded = prompt("eded daxil edin", );
//let say=0

//for (let i=1; i<=eded; i++){
    //if (eded%i==0){
        //say=say+1
    //}else{
    //}
//}

//console.log(say)



//Input ile daxil olunan ədədin bölənlərinin cəmini tapın.
//let eded = prompt("eded daxil edin", );
//let cem=0

//for (let i=1; i<=eded; i++){
    //if (eded%i==0){
        //cem=cem+i
    //}else{
    //}
//}

//console.log(cem)


//Input ile daxil olunan ədədin bölənlərinin cəmini tapın.
//let eded = prompt("eded daxil edin", );
//let hasil=1

//for (let i=1; i<=eded; i++){
    //if (eded%i==0){
        //hasil=hasil*i
    //}else{
    //}
//}

//console.log(hasil)


//Istifadeci 0 daxil edenedek edelerin cemini tapin.


//let cem=0

//for (let i=1; i<=100; i++){
    //let eded = +prompt("eded daxil edin", );
    //if (eded!==0){
        //cem=cem+eded
    //}else{
        //break
    //}

//}
//console.log(cem)



//Input ile 5 eded daxil edin. 7'ye beraber olanların sayini tapib ekrana yazdırin

//let say=0

//for (let i=1; i<=5; i++){
    //let eded = +prompt("eded daxil edin", );
    //if (eded==7){
        //say=say+1
    //}

//}
//console.log(say)



//Input ile daxil olunan ədədin sadə yoxsa mürəkkəb olduğunu tapın.


let eded = +prompt("eded daxil edin", );
let say=0

for (let i=2; i<eded; i++){

    if (eded%i==0){
        say=say+1
    }

}

if (say==0){
    console.log("eded sadedir")
}else{
    console.log("eded murekkebdir")
}

