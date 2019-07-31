import { Component } from '@angular/core'
import { ApiService } from '../../services/api.service'
import { ActivatedRoute } from '@angular/router'

@Component({
    selector: 'question',
    templateUrl: './question.component.html'
})
export class QuestionComponent {

    question = {}
    quizId

    constructor (private api: ApiService, private route: ActivatedRoute){ 
    }

    ngOnInit(){
        this.quizId = this.route.snapshot.paramMap.get('quizId');
        console.log('quizId', this.quizId);
        this.api.questionOnSelect.subscribe(q => this.question = q)
    }

    post(question){
        question.quizId = this.quizId;
        this.api.postQuestion(question)
    }

}