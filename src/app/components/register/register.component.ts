import { Component } from '@angular/core'
import { ApiService } from '../../services/api.service'

@Component({
    templateUrl: './register.component.html'
})
export class RegisterComponent {

    quiz = {}
    
    constructor(private api: ApiService){
        this.api.quizOnSelect.subscribe(q => this.quiz = q)
    }

    ngOnInit(){
    }

}