import { Component } from '@angular/core'
import { ApiService } from '../../services/api.service'

@Component({
    selector: 'quiz',
    templateUrl: './quiz.component.html'
})
export class QuizComponent {

    quiz = {}
    
    constructor(private api: ApiService){
        this.api.quizOnSelect.subscribe(q => this.quiz = q)
    }

    ngOnInit(){

    }

}