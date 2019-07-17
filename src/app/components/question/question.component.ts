import { Component } from '@angular/core'
import {ApiService} from '../../services/api.service'

@Component({
    selector: 'question',
    templateUrl: './question.component.html'
})
export class QuestionComponent {

    question = {}

    constructor (private api: ApiService){ 
    }

    ngOnInit(){
        this.api.questionOnSelect.subscribe(q => this.question = q)
    }

    post(question){
        this.api.postQuestion(question)
    }

}