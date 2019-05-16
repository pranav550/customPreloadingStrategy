import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-company-list",
  templateUrl: "./company-list.component.html",
  styleUrls: ["./company-list.component.css"]
})
export class CompanyListComponent implements OnInit {
  companys: any;
  constructor() {}

  ngOnInit() {
    this.companys = [
      { id: 1, name: "HCL" },
      { id: 2, name: "TCS" },
      { id: 3, name: "Wipro" }
    ];
  }
}
