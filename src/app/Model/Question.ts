export class Question{

    private questionNumber: String;
   
    private question: String;

    private optionA: String;

    private optionB: String;

    private optionC: String;

    private optionD: String;

    private endFlag: String;

    private answer: string;
    
    public getanswer(): string {
        return this.answer;
    }
    public setanswer(value: string) {
        this.answer = value;
    }
   
    public getoptionB(): String {
        return this.optionB;
    }
    public setoptionB(value: String) {
        this.optionB = value;
    }

    public getoptionC(): String {
        return this.optionC;
    }
    public setoptionC(value: String) {
        this.optionC = value;
    }
  
    public getoptionD(): String {
        return this.optionD;
    }
    public setoptionD(value: String) {
        this.optionD = value;
    }

    public getoptionA(): String {
        return this.optionA;
    }
    public setoptionA(value: String) {
        this.optionA = value;
    }
    public getquestion(): String {
        return this.question;
    }
    public setquestion(value: String) {
        this.question = value;
    }

    public getquestionNumber(): String {
        return this.questionNumber;
    }
    public setquestionNumber(value: String) {
        this.questionNumber = value;
    }

    public getendFlag(): String {
        return this.endFlag;
    }
    public setendFlag(value: String) {
        this.endFlag = value;
    }


}