import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-receiver',
  templateUrl: './receiver.component.html',
  styleUrls: ['./receiver.component.scss']
})
export class ReceiverComponent implements OnInit {
  private donar:any = {};
  @Input() requiredBottle;
  @Output() change = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

  private onDrop(dropData: any): void {
    //dropData.preventDefault();
    //this.dropOverActive = false;
    let droppedData = dropData;
    //debugger;
    this.donar = JSON.parse(dropData.dataTransfer.getData("donar"));
    this.change.emit( this.donar);
    this.donar["currentStock"] = this.requiredBottle;

  }
  private allowDrop(event: Event): void {
    event.preventDefault();
  }

}
