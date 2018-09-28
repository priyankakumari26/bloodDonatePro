import { Component, OnInit } from '@angular/core';
import { IBloodRepo, IStockUpdateData } from '../dataModels/bloodReository';
import { receiversList } from '../constans/boodReceiver.const';
import { ReceiverComponent } from './receiver/receiver.component';
interface IEachBloodCount {
  name: string
  count: number
}

@Component({
  selector: 'app-blood-data',
  templateUrl: './blood-data.component.html',
  styleUrls: ['./blood-data.component.scss']
})
export class BloodDataComponent implements OnInit {
  private currentSockInBank: IBloodRepo = {
    aPos: {
      currentStock: 0,
      canReceiveFrom: receiversList.aPosCanReceiveFrom,
      displayName: 'a +'
    },
    aNeg: {
      currentStock: 0,
      canReceiveFrom: receiversList.aNegCanReceiveFrom,
      displayName: 'a -'
    },
    bPos: {
      currentStock: 0,
      canReceiveFrom: receiversList.bPosCanReceiveFrom,
      displayName: 'b +'
    },
    bNeg: {
      currentStock: 0,
      canReceiveFrom: receiversList.bNegCanReceiveFrom,
      displayName: 'b -'
    },
    abPos: {
      currentStock: 0,
      canReceiveFrom: receiversList.abPosCanReceiveFrom,
      displayName: 'ab +'
    },
    abNeg: {
      currentStock: 0,
      canReceiveFrom: receiversList.abNegCanReceiveFrom,
      displayName: 'ab -'
    },
    oPos: {
      currentStock: 0,
      canReceiveFrom: receiversList.oPosCanReceiveFrom,
      displayName: 'o +'
    },
    oNeg: {
      currentStock: 0,
      canReceiveFrom: receiversList.oNegCanReceiveFrom,
      displayName: 'o-'
    }
  }
  private allGroups: string[] = Object.keys(this.currentSockInBank);
  private shouldUpdateStockorCalculateUnit: boolean = true;
  private stockUpdateGroup: string = '';
  private stockUpdateCount: string = '0';
  private requredBloodGroup: string = '';
  private requiredBlood: number|null; ;
  private bloodDonar = {};
  constructor() { }
  ngOnInit() {
  }
  private updateStockorCalculate(isCalcualtionReq: boolean): void {
    if (this.stockUpdateGroup) {
      if (isCalcualtionReq) {
        this.getCount()
      } else {
        this.currentSockInBank[this.stockUpdateGroup]['currentStock'] = this.stockUpdateCount;
        // this.stockUpdateGroup = '';
        // this.stockUpdateCount = '0';
      }
    }
  }
  private getCount(): IEachBloodCount[] {
    return [];
  }
  private closeForm(): void {
    this.shouldUpdateStockorCalculateUnit = false;
  }
  private showUpdateStockForm(): void {
    this.shouldUpdateStockorCalculateUnit = true;
  }
  checkAvailability(bloodGroup): void {
    this.bloodDonar = {};
    if (this.requiredBlood == 0 || this.requiredBlood == null) {
      return;
    }
    else {
      let requiredGroups = [];
      for (let key in this.currentSockInBank) {
        if (key === bloodGroup) {
          requiredGroups = this.currentSockInBank[bloodGroup]["canReceiveFrom"];
          break;
        }
      }
      for (let key in this.currentSockInBank) {
        for (let i = 0; i < requiredGroups.length; i++) {
          if (key === requiredGroups[i] && this.currentSockInBank[key]["currentStock"] >= this.requiredBlood) {
            this.bloodDonar[key] = this.currentSockInBank[key];
          }
        }
      }
    }
  }



  private allowdrag(event: DragEvent, grpname: any): void {
    event.dataTransfer.setData("donar", JSON.stringify(grpname));
    //debugger;
    //event.preventDefault();
  }

  updateBloodRepo(event){
    this.currentSockInBank[this.requredBloodGroup]['currentStock'] = event['currentStock'] - this.requiredBlood;
  }




}
