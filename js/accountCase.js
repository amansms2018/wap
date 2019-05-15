
var accountCase= (function AccountModule() {
    'use strict';
    var accountName = null;
    var deposit = 0;
    var timer = null;
    let info=null;
    let getinfo= function AssignAccount(acctName, depo) {
        this.accountName = acctName;
        this.deposit = depo;
        info= "account Name-->" + this.accountName + " , " + "deposit--> " + this.deposit;
        return info;
    };
    return{
        createAccount: getinfo
         };
}
());
function message(){
    var newaccount= accountCase.createAccount(document.getElementById("accountName").value ,
        document.getElementById("deposit").value);
    document.getElementById("ta").innerHTML+= "\n" + newaccount;
}


