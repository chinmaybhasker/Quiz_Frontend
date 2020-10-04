import { Component, DoCheck, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { performanceModal } from '../Model/performanceModal';
import { Question } from '../Model/Question';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit,DoCheck {

  questionNumber : any = 0;
  obj : Question;
  correctFlag : boolean = true;
  radioData : any;
  msg : any;
  TotalQuestion : any = 0;
  correctQuestion : any = 0;
  answerFlag : boolean = true;

  constructor(private service : ServiceService,public router: Router) { }
  ngDoCheck(): void {
    if (this.radioData == undefined){
      this.answerFlag = true;
    }
    else{
      this.answerFlag = false;
    }
  }
  
  ngOnInit(): void {
    this.questionNumber = 1;
    this.fetchQuestion();
    if (localStorage.getItem('loginFlag') == undefined){
      this.router.navigate(['login']);
  }
  }
  correctId : any = 0;
  incorrectId : any = 0;
  checkAnswer(){
   
    this.correctId = 0;
    this.incorrectId = 0;
      this.TotalQuestion += 1;
      if(this.radioData === this.obj.getanswer().trim()){
        
        this.correctQuestion += 1;
        this.correctFlag = false;
        this.msg = "Your Answer is correct!!!!!";
        if ( this.radioData === this.obj.getoptionA()){
          this.correctId = '1';
        }
        if ( this.radioData === this.obj.getoptionB()){
          this.correctId = '2';
        }
        if ( this.radioData === this.obj.getoptionC()){
          this.correctId = '3';
        }
        if ( this.radioData === this.obj.getoptionD()){
          this.correctId =  '4';
        }
        if (this.correctId != 0){
        document.getElementById(this.correctId).setAttribute("class", "colorclass");
        }

      }
      else{
        if ( this.obj.getanswer().trim() === this.obj.getoptionA().trim()){
          this.correctId = '1';
        }
        if ( this.obj.getanswer().trim() === this.obj.getoptionB().trim()){
          this.correctId = '2';
        }
        if ( this.obj.getanswer().trim() === this.obj.getoptionC().trim()){
          this.correctId = '3';
        }
        if ( this.obj.getanswer().trim() === this.obj.getoptionD().trim()){
          this.correctId = '4';
        }
        if (this.correctId != 0){
        document.getElementById(this.correctId).setAttribute("class", "colorclass");
        }

        if ( this.radioData === this.obj.getoptionA().trim()){
          this.incorrectId = '1';
        }
        if ( this.radioData === this.obj.getoptionB().trim()){
          this.incorrectId = '2';
        }
        if ( this.radioData === this.obj.getoptionC().trim()){
          this.incorrectId = '3';
        }
        if ( this.radioData === this.obj.getoptionD().trim()){
          this.incorrectId = '4';
        }
        if (this.incorrectId != 0){
        document.getElementById(this.incorrectId).setAttribute("class", "colorclass2");
        }
        

        this.correctFlag = false;
        this.msg ="Your Answer is Incorrect!!!!!"
      }
      
  }
  finalMsg : any ;
  finalflag : boolean= false;
  nextQuestion(){
    
    this.radioData = undefined;
    this.correctFlag = true;
    this.msg = "";
    this.correctId = 0;
    this.incorrectId = 0;
    if (this.questionNumber < 5){
      this.questionNumber += 1;
      this.fetchQuestion();
     }
     else{
       this.finalflag = true;
          this.finalMsg = "You have complete the quiz";
          let per = ((this.correctQuestion*100)/this.TotalQuestion);
          let obj = new performanceModal();
          obj.setemailaddress(localStorage.getItem('userName'));
          obj.setpercentage(per.toString());

          this.service.postaddResponse(obj).subscribe();
     }
  }

  fetchQuestion(){
    this.service.getQuestionDetail(this.questionNumber).subscribe(data =>{
      this.obj = new Question();
        this.obj.setquestionNumber(data['response']['questionNumber']);
        this.obj.setquestion(data['response']['question']);
        this.obj.setoptionA(data['response']['optionA']);
        this.obj.setoptionB(data['response']['optionB']);
        this.obj.setoptionC(data['response']['optionC']);
        this.obj.setoptionD(data['response']['optionD']);
        this.obj.setanswer(data['response']['answer']);
        this.obj.setendFlag(data['response']['endFlag']);
    } );
  }

  navigation(){
    this.router.navigate(['scoreBoard']);
  }
}
