import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice4',
  templateUrl: './exercice4.component.html',
  styleUrls: ['./exercice4.component.css']
})
export class Exercice4Component  {

  public users: Array<{ nom: string }> = [
    {
      nom: 'Eric'
    },
     {
      nom: 'Toto'
    },
      {
      nom: 'Titi'
    }

  ]

  
}
