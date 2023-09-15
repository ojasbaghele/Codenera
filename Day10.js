document.write(' Hello World <br>' );
        const num1= 2;
        const num2= 5;
        const sum= num1 + num2;
        const sub= num1 - num2;
        const multi=num1*num2;
        const avg=(num1+num2) /2; 
        const age = 18;
        if (age >=13){ 
            document.write("You Are Allowed to Swim <br>");
        }
        else if(age <=13){ 
            document.write("You Are Not Allowed to Swim <br>");
        }
        if(age ==18){
            document.write(" You are Allowed to Dive from 25m <br>");
        }
        else if(num1 < num2){
            document.write(" Num 2 is Grater Than Num 1 <br>");   
        }
        if (num1 > num2){
            document.write(" Num 2 is Lessthan Than Num 1 <br>");   
        }
        if (num1 >= 0){
            document.write(" Num1 is Positive <br>");
        }
        else{
            document.write(" Num1 is Negative <br>");
        }
        document.write(' Sum of ', num1 ,' and ', num2 ,' is  ',sum ,'<br>');
        document.write(' Subtraction of ', num1 ,' and ', num2 ,' is  ',sub ,'<br>');
        document.write(' Multiple of ', num1 ,' and ', num2 ,' is  ',multi ,'<br>'); 
        document.write(' Average of ', num1 ,' and ', num2 ,' is  ',avg ,'<br>');

        const salary = 10000;
        if(salary>=10000){
            document.write("Your Salary is ",salary + " +200  <br>");
        }
        else if(salary>=10000 && salary<=20000){
            document.write("Your Salary is ",salary + "+ 300  <br>");
        }
        else if(salary>=20000 && salary<=30000){
            document.write("Your Salary is ",salary + "+ 400  <br>");
        }
        else if(salary>=30000 && salary<=40000){
            document.write("Your Salary is ",salary + "+ 500  <br>");
        }
        else if(salary>=40000 && salary<=50000){
            document.write("Your Salary is ",salary + "+ 600  <br>");
        }
        else if(salary>=50000){
            document.write("Your Salary is ",salary + "+ 800  <br>");
        }
        else{
            document.write("Your Salary is ",salary + " <br>");
        }
