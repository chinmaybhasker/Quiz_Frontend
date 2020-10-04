import { Component, OnInit } from '@angular/core';
import { performanceModal } from '../Model/performanceModal';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-score-board',
  templateUrl: './score-board.component.html',
  styleUrls: ['./score-board.component.css']
})
export class ScoreBoardComponent implements OnInit {
  bestperformer : performanceModal[] = [];
  obj : performanceModal;
  constructor(private service : ServiceService) { }

  ngOnInit(): void {
    this.bestperformer = [];
    let  i=0;
    this.service.getBestPerformer().subscribe(data=>{
      let i = 0
      while (data[i]['id'] != undefined) {
        console.log("I AM HERE!!!!!!!!!!!!!");
        this.obj= new performanceModal();
        this.obj.setemailaddress(data[i]['emailaddress']);
        this.obj.setpercentage(data[i]['percentage']);
        this.bestperformer.push(this.obj);
        i++;
      }
    })
  }

}
