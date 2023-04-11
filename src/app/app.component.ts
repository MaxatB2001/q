import { Component, ViewChild, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { GanttEditorComponent, GanttEditorOptions } from 'ng-gantt';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild(GanttEditorComponent, { static: true }) editor!: GanttEditorComponent;
  public editorOptions!: GanttEditorOptions;
  public data: any;

  constructor(public fb: FormBuilder) {}

  ngOnInit(): void {
    this.data = this.initialData();
    this.editorOptions = {
      vFormat: "day",
      vEditable: true,
      vEventsChange: {
        taskname: () => {
          console.log("taskname");
        }
      },
      vLang:"ru",
    };
  }

  initialData() {
    return [
      {
        pID: 1,
        pName: "Define Chart API",
        pStart: "",
        pEnd: "",
        pClass: "ggroupblack",
        pLink: "",
        pMile: 0,
        pRes: "Brian",
        pComp: 0,
        pGroup: 1,
        pParent: 0,
        pOpen: 1,
        pDepend: "",
        pCaption: "",
        pNotes: "Some Notes text"
      },
      {
        pID: 11,
        pName: "Первый",
        pStart: "2017-02-20",
        pEnd: "2017-02-20",
        pClass: "gtaskblue",
        pLink: "",
        pMile: 1,
        pRes: "Shlomy",
        pComp: 100,
        pGroup: 0,
        pParent: 1,
        pOpen: 1,
        pDepend: "",
        pCaption: "",
        pNotes: ""
      },
      {
        pID: 12,
        pName: "Task Objects",
        pStart: "",
        pEnd: "",
        pClass: "ggroupblack",
        pLink: "",
        pMile: 0,
        pRes: "Shlomy",
        pComp: 40,
        pGroup: 1,
        pParent: 1,
        pOpen: 1,
        pDepend: "",
        pCaption: "",
        pNotes: ""
      },
      {
        pID: 121,
        pName: "Constructor Proc #1234 of February 2017",
        pStart: "2017-02-21",
        pEnd: "2017-03-09",
        pClass: "gtaskblue",
        pLink: "",
        pMile: 0,
        pRes: "Brian T.",
        pComp: 60,
        pGroup: 0,
        pParent: 12,
        pOpen: 1,
        pDepend: "",
        pCaption: "",
        pNotes: ""
      },
      {
        pID: 122,
        pName: "Task Variables",
        pStart: "2017-03-06",
        pEnd: "2017-03-11",
        pClass: "gtaskred",
        pLink: "",
        pMile: 0,
        pRes: "Brian",
        pComp: 60,
        pGroup: 0,
        pParent: 12,
        pOpen: 1,
        pDepend: 121,
        pCaption: "",
        pNotes: ""
      },
      {
        pID: 123,
        pName: "Task by Minute/Hour",
        pStart: "2017-03-09",
        pEnd: "2017-03-14 12: 00",
        pClass: "gtaskyellow",
        pLink: "",
        pMile: 0,
        pRes: "Ilan",
        pComp: 60,
        pGroup: 0,
        pParent: 12,
        pOpen: 1,
        pDepend: "",
        pCaption: "",
        pNotes: ""
      },
      {
        pID: 124,
        pName: "Task Functions",
        pStart: "2017-03-09",
        pEnd: "2017-03-29",
        pClass: "gtaskred",
        pLink: "",
        pMile: 0,
        pRes: "Anyone",
        pComp: 60,
        pGroup: 0,
        pParent: 12,
        pOpen: 1,
        pDepend: "123SS",
        pCaption: "This is a caption",
        pNotes: null
      },
      {
        pID: 3,
        pName: "Code Javascript",
        pStart: "",
        pEnd: "",
        pClass: "ggroupblack",
        pLink: "",
        pMile: 0,
        pRes: "Brian",
        pComp: 0,
        pGroup: 1,
        pParent: 0,
        pOpen: 1,
        pDepend: "",
        pCaption: "",
        pNotes: ""
      },
      {
        pID: 31,
        pName: "Define Variables",
        pStart: "2017-02-25",
        pEnd: "2017-03-17",
        pClass: "gtaskpurple",
        pLink: "",
        pMile: 0,
        pRes: "Brian",
        pComp: 30,
        pGroup: 0,
        pParent: 3,
        pOpen: 1,
        pDepend: "",
        pCaption: "",
        pNotes: ""
      },
      {
        pID: 32,
        pName: "Calculate Chart Size",
        pStart: "2017-03-15",
        pEnd: "2017-03-24",
        pClass: "gtaskgreen",
        pLink: "",
        pMile: 0,
        pRes: "Shlomy",
        pComp: 40,
        pGroup: 0,
        pParent: 3,
        pOpen: 1,
        pDepend: "",
        pCaption: "",
        pNotes: ""
      },
      {
        pID: 33,
        pName: "Draw Task Items",
        pStart: "",
        pEnd: "",
        pClass: "ggroupblack",
        pLink: "",
        pMile: 0,
        pRes: "Someone",
        pComp: 40,
        pGroup: 2,
        pParent: 3,
        pOpen: 1,
        pDepend: "",
        pCaption: "",
        pNotes: ""
      },
      {
        pID: 332,
        pName: "Task Label Table",
        pStart: "2017-03-06",
        pEnd: "2017-03-09",
        pClass: "gtaskblue",
        pLink: "",
        pMile: 0,
        pRes: "Brian",
        pComp: 60,
        pGroup: 0,
        pParent: 33,
        pOpen: 1,
        pDepend: "",
        pCaption: "",
        pNotes: ""
      }
    ];
  }
}
