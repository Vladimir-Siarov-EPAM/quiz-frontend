import {Injectable} from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Subject } from 'rxjs'

@Injectable()
export class ApiService {

    private selectedQuestion = new Subject<any>();
    questionOnSelect = this.selectedQuestion.asObservable();

    private selectedQuiz = new Subject<any>();
    quizOnSelect = this.selectedQuiz.asObservable();


    constructor(private http: HttpClient){}


    //#region Questions

    postQuestion(question){
        
        this.http
            .post('http://localhost:53655/api/questions', question)
            .subscribe(res => {
                console.log(res)
            })

    }

    getQuestions(quizId){
        
        return this.http
            .get(`http://localhost:53655/api/questions/${quizId}`);

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

    //#endregion Questions


    //#region Quizzes

    getQuizzes(){
        
        return this.http
            .get('http://localhost:53655/api/quizzes');

    }

    selectQuiz(quiz){
        this.selectedQuiz.next(quiz);
    }

    postQuiz(quiz){
        
        this.http
            .post('http://localhost:53655/api/quizzes', quiz)
            .subscribe(res => {
                console.log(res)
            })

    }

    putQuiz(quiz){
        
        this.http
            .put(`http://localhost:53655/api/quizzes/${quiz.id}`, quiz)
            .subscribe(res => {
                console.log(res)
            })

        
    }

    //#endregion Quizzes
}