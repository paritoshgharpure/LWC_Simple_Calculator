import { LightningElement, track } from 'lwc';

export default class LWC_Simple_Calculator extends LightningElement {
    @track number1=0;
    @track number2=0;
    @track result;
    @track currentOperator='+';

    handleNumber1 = (event) => {
        this.number1 = event.target.value;
        this.calcExpr();        
    }

    handleNumber2 = (event) => {
        this.number2 = event.target.value;
        this.calcExpr();       
    }

    get operatorList(){
        return [
            { label: '+', value: '+'},
            { label: '-', value: '-'},
            { label: '*', value: '*'},
            { label: '/', value: '/'},
        ];
    }

    calcExpr = () => {   
        switch(this.currentOperator){
            case '+':
                this.result = Number(this.number1) + Number(this.number2);
                break;
            case '-':
                this.result = Number(this.number1) - Number(this.number2);
                break;
            case '*':
                this.result = Number(this.number1) * Number(this.number2);
                break;
            case '/':
                this.result = Number(this.number1) / Number(this.number2);
                break;
            default:
                this.result = '';
        }
    }

    handleOperators = (event) => {
        this.currentOperator = event.target.value;
        this.calcExpr();
    }
}