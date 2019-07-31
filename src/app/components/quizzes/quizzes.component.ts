import { Component } from '@angular/core'
import {ApiService} from '../../services/api.service'

@Component({
    selector: 'quizzes',
    templateUrl: './quizzes.component.html'
})
export class QuizzesComponent {

    quiz = {}
    quizzes

    constructor (private api: ApiService){ 
    }

    ngOnInit(){
        this.api.getQuizzes().subscribe(res => {
            this.quizzes = res

            console.log('quizzes was loaded from server', this.quizzes)
        });
    }

    post(quiz){
        this.api.postQuiz(quiz)
    }

}