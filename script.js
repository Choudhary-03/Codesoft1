// Display element jahan result ya input dikh rha hai
const display = document.getElementById('display');

// sabhi buttons select kar liye
const buttons = document.querySelectorAll('button');

// ye variable input store karega
let input='';

// har button par click hone par kaam karwana hai
buttons.forEach(function(button) {
    // jab button click ho

    button.addEventListener("click", function() {
        // button ka text nikalo(e.g. 1,2, +,=)
        let value= button.textContent;

        // step5: agar button "c" hai, toh sab clear karo

        if(value === "C") 
        {
            input = ""; // input khaali kar diya 
            display.textContent = "0"; //Screen par 0 dikhao  
        }

        // step 6: agar button "=" hai, toh calculation karo

        else if (value === "=") {

            try{
                // eval function input ko calculate karta hai
                let result = eval(input);// example: "2+2" => 4 
                display.textContent=result; //result screen par dikhao
                input = result.toString();
                // result ko input banado aage ke liye 

            }
            catch{
                display.textContent= "error"; 
                // agar galtu ho jaye
                input="";// input clear kar do 
            }
        }
      else{
        input= input + value;// button ka value input ke end mein jod do;
        display.textContent = input;// screen par naya input dikhado
      }
    });
});