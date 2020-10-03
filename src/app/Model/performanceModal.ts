export class performanceModal{

    private emailaddress: String;
   
   
    public getemailaddress(): String {
        return this.emailaddress;
    }
    public setemailaddress(value: String) {
        this.emailaddress = value;
    }

    private percentage: String;
    public getpercentage(): String {
        return this.percentage;
    }
    public setpercentage(value: String) {
        this.percentage = value;
    }
}