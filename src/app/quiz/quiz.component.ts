import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { performanceModal } from '../Model/performanceModal';
import { Question } from '../Model/Question';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  questionNumber : any;
  obj : Question;
  correctFlag : boolean = true;
  radioData : any;
  msg : any;
  TotalQuestion : any = 0;
  correctQuestion : any = 0;


  constructor(private service : ServiceService,public router: Router) { }
  
  ngOnInit(): void {
    this.questionNumber = 1;
    this.fetchQuestion();
  }

  checkAnswer(){
      this.TotalQuestion += 1;
      if(this.radioData === this.obj.getanswer()){
        this.correctQuestion += 1;
        this.correctFlag = false;
        this.msg = "Your Answer is correct!!!!!";
      }
      else{
        this.correctFlag = false;
        this.msg ="Your Answer is Incorrect!!!!!"
      }
      
  }
  finalMsg : any ;
  finalflag : boolean= false;
  nextQuestion(){
    this.correctFlag = true;
    this.msg = "";
    if (this.obj.getendFlag() === "false"){
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
