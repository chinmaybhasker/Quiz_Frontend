import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { QuizComponent } from './quiz/quiz.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ScoreBoardComponent } from './score-board/score-board.component';


const routes: Routes = [
  {path: '', component : HomepageComponent},
  { path: 'login', component: LoginComponent },
  { path: 'SignUp', component: SignUpComponent },
  { path: 'quiz', component: QuizComponent},
  { path: 'scoreBoard', component:ScoreBoardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
