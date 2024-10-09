// Task-4
let client ={
    fullName: "Murad Orucov",
    creditLimit: 2000,
    balans: -100,
    precentOfMinPayment: 2,
    getBalance(){
        if(this.balans <= 0){
            return `Borcunuz ${this.balans} AZN dir`
        }else{
            return `Balansinizda ${this.balans} AZN var`
        }
    },
    getMinPaymant(){
        
    }
}
// getMinPaymant
// creditLimit * precentOfMinPayment*100,
