import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-exercice1",
  templateUrl: "./exercice1.component.html",
  styleUrls: ["./exercice1.component.css"],
})
export class Exercice1Component {
  title = "Mon exemple";
  number = "42";
  bool = "true";
  Objt = {
    cle: "valeur",
  };
}
