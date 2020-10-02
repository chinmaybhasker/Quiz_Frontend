export class Question{

    private questionNumber: number;
   
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
        return this.optionA;
    }
    public setoptionB(value: String) {
        this.optionA = value;
    }

    public getoptionC(): String {
        return this.optionA;
    }
    public setoptionC(value: String) {
        this.optionA = value;
    }
  
    public getoptionD(): String {
        return this.optionA;
    }
    public setoptionD(value: String) {
        this.optionA = value;
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

    public getquestionNumber(): number {
        return this.questionNumber;
    }
    public setquestionNumber(value: number) {
        this.questionNumber = value;
    }

    public getendFlag(): String {
        return this.endFlag;
    }
    public setendFlag(value: String) {
        this.endFlag = value;
    }


}