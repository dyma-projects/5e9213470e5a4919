import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-exercice1",
  templateUrl: "./exercice1.component.html",
  styleUrls: ["./exercice1.component.css"],
})
export class Exercice1Component {
  public type_attribut = "date";

  constructor() {
    setTimeout(() => {
      this.type_attribut = "text";
    }, 3000);
  }
}
