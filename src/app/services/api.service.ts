import {Injectable} from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Subject } from 'rxjs'

@Injectable()
export class ApiService {

    private selectedQuestion = new Subject<any>();
    questionOnSelect = this.selectedQuestion.asObservable();

    constructor(private http: HttpClient){}

    postQuestion(question){
        
        this.http
            .post('http://localhost:53655/api/questions', question)
            .subscribe(res => {
                console.log(res)
            })

    }

    getQuestions(){
        
        return this.http
            .get('http://localhost:53655/api/questions');

    }

    selectQuestion(question){
        this.selectedQuestion.next(question);
    }

    putQuestion(question){
        
        this.http
            .put(`http://localhost:53655/api/questions/${question.id}`, question)
            .subscribe(res => {
                console.log(res)
            })

        
    }
}