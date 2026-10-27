let total = 0;
let notes = [0,0,0,0];
const noteVal = [2000 , 500 , 200 , 100];
const history = [];
document.getElementById("addBtn").addEventListener("click" , function(){
    notes[0] = Number(document.getElementById("twoK").value);
    notes[1] = Number(document.getElementById("fiveH").value);
    notes[2] = Number(document.getElementById("twoH").value);
    notes[3] = Number(document.getElementById("oneH").value);

    total = notes.reduce((sum ,note , index) => {
        return sum + note *noteVal[index] ;
    } , 0);

    document.getElementById("showBal").textContent = "Current Bal : "+total;
    document.getElementById("avail2k").textContent = "2000 Rs Notes : "+ notes[0];
    document.getElementById("avail5h").textContent = "500 Rs Notes : "+ notes[1];
    document.getElementById("avail2h").textContent = "200 Rs Notes : "+ notes[2];
    document.getElementById("avail1h").textContent = "100 Rs Notes : "+ notes[3];

})


document.getElementById("withdrawBtn").addEventListener("click" , function()
{
    
    let amount = Number(document.getElementById("withdraw").value);

    if(amount <= 0 || amount % 100 != 0)
    {
        document.getElementById("message").textContent = "INVALID AMOUNT";
        document.getElementById("historyList").innerHTML = "₹" + amount + " - " + "INVALID AMOUNT" + "<br>" + document.getElementById("historyList").innerHTML;
    }
    else if(total >= amount)
    {
        let remain = amount;
        let max2k = Math.min(Math.floor(remain / 2000) , notes[0]);

        //checking 2000 rs notes:
        for(let i = max2k ; i >= 0 ; i--)
        {
            remain = amount - 2000* i ;

            if(remain == 0)
            {
                document.getElementById("message").textContent = "WITHDRAW 2000 x " + i + "WITHDRAW 500 x 0 WITHDRAW 200 x 0 WITHDRAW 100 x 0  ";
                notes[0] -= i;
                total = total - amount;
                document.getElementById("showBal").textContent = "Current Bal : "+total;
                document.getElementById("showBal").textContent = "Current Bal : "+total;
                document.getElementById("avail2k").textContent = "2000 Rs Notes : "+ notes[0];
                document.getElementById("avail5h").textContent = "500 Rs Notes : "+ notes[1];
                document.getElementById("avail2h").textContent = "200 Rs Notes : "+ notes[2];
                document.getElementById("avail1h").textContent = "100 Rs Notes : "+ notes[3];
                
                document.getElementById("historyList").innerHTML = "₹" + amount + " - " + "WITHDRAW 2000 x " + i + "WITHDRAW 500 x 0 WITHDRAW 200 x 0 WITHDRAW 100 x 0  " + "<br>" + document.getElementById("historyList").innerHTML;
                return;
            }

            let max5h = Math.min(Math.floor(remain / 500) , notes[1]);

            //check 500 rs notes:
            for(let j = max5h ; j >= 0 ; j--)
            {
                remain = amount - 2000* i - 500 * j ;

                if(remain == 0)
                {
                    document.getElementById("message").textContent = "WITHDRAW 2000 x " + i + "WITHDRAW 500 x "+ j + " WITHDRAW 200 x 0 WITHDRAW 100 x 0  ";

                    notes[0] -= i;
                    notes[1] -= j;
                    total = total - amount;
                    document.getElementById("showBal").textContent = "Current Bal : "+total;
                    document.getElementById("showBal").textContent = "Current Bal : "+total;
                    document.getElementById("avail2k").textContent = "2000 Rs Notes : "+ notes[0];
                    document.getElementById("avail5h").textContent = "500 Rs Notes : "+ notes[1];
                    document.getElementById("avail2h").textContent = "200 Rs Notes : "+ notes[2];
                    document.getElementById("avail1h").textContent = "100 Rs Notes : "+ notes[3];

                    document.getElementById("historyList").innerHTML = "₹" + amount + " - " + "WITHDRAW 2000 x " + i + "WITHDRAW 500 x "+ j + " WITHDRAW 200 x 0 WITHDRAW 100 x 0  " + "<br>" + document.getElementById("historyList").innerHTML;
                    
                    return;
                }

                let max2h = Math.min(Math.floor(remain / 200) , notes[2]);

                //checking for 200 rs notes:
                for(let k = max2h ; k >= 0 ; k--)
                {
                    remain = amount - 2000* i - 500 * j - 200 * k;


                    if(remain == 0)
                    {
                        document.getElementById("message").textContent = "WITHDRAW 2000 x " + i + "WITHDRAW 500 x "+ j + " WITHDRAW 200 x " + k +" WITHDRAW 100 x 0  ";

                        notes[0] -= i;
                        notes[1] -= j;
                        notes[2] -= k;
                        total = total - amount;
                        document.getElementById("showBal").textContent = "Current Bal : "+total;
                        document.getElementById("showBal").textContent = "Current Bal : "+total;
                        document.getElementById("avail2k").textContent = "2000 Rs Notes : "+ notes[0];
                        document.getElementById("avail5h").textContent = "500 Rs Notes : "+ notes[1];
                        document.getElementById("avail2h").textContent = "200 Rs Notes : "+ notes[2];
                        document.getElementById("avail1h").textContent = "100 Rs Notes : "+ notes[3];

                        document.getElementById("historyList").innerHTML = "₹" + amount + " - " + "WITHDRAW 2000 x " + i + "WITHDRAW 500 x "+ j + " WITHDRAW 200 x " + k +" WITHDRAW 100 x 0  " + "<br>" + document.getElementById("historyList").innerHTML;
                        return;
                    }
                    let max1h = Math.min(Math.floor(remain / 100) , notes[3]);

                    //checking for 100 rs notes:
                    for(let l = max1h ; l >= 0 ; l--)
                    {
                        remain = amount - 2000* i - 500 * j - 200 * k - 100 * l;
                        if(remain == 0)
                        {
                            document.getElementById("message").textContent = "WITHDRAW 2000 x " + i + "WITHDRAW 500 x "+ j + " WITHDRAW 200 x " + k +" WITHDRAW 100 x " + l;

                            notes[0] -= i;
                            notes[1] -= j;
                            notes[2] -= k;
                            notes[3] -= l;
                            total = total - amount;
                            document.getElementById("showBal").textContent = "Current Bal : "+total;
                            document.getElementById("showBal").textContent = "Current Bal : "+total;
                            document.getElementById("avail2k").textContent = "2000 Rs Notes : "+ notes[0];
                            document.getElementById("avail5h").textContent = "500 Rs Notes : "+ notes[1];
                            document.getElementById("avail2h").textContent = "200 Rs Notes : "+ notes[2];
                            document.getElementById("avail1h").textContent = "100 Rs Notes : "+ notes[3];

                            document.getElementById("historyList").innerHTML = "₹" + amount + " - " + "WITHDRAW 2000 x " + i + "WITHDRAW 500 x "+ j + " WITHDRAW 200 x " + k +" WITHDRAW 100 x " + l + "<br>" + document.getElementById("historyList").innerHTML;
                            return;
                        }    
                        
                    }
                    
                }
                
            }
        }
        document.getElementById("message").textContent = "CANNOT DISPENSED";
        document.getElementById("historyList").innerHTML = "₹" + amount + " - " + "CANNOT DISPENSED"+ "<br>" + document.getElementById("historyList").innerHTML;
        return;

    }
    else{
        document.getElementById("message").textContent = "INSUFFICIENT CASH";
        document.getElementById("historyList").innerHTML = "₹" + amount + " - " + "INSUFFICIENT CASH"+ "<br>" + document.getElementById("historyList").innerHTML;
    }
})