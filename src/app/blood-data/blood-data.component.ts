import { Component, OnInit } from '@angular/core';
import { IBloodRepo, IStockUpdateData } from '../dataModels/bloodReository';
import { receiversList } from '../constans/boodReceiver.const';
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

  constructor() { }
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
      displayName: '0 -'
    }
  }
  private allGroups: string[] = Object.keys(this.currentSockInBank);
  private shouldUpdateStockorCalculateUnit: boolean = true;
  private stockUpdateGroup: string = '';
  private stockUpdateCount: string = '0';
  ngOnInit() {
  }
  private updateStockorCalculate(isCalcualtionReq: boolean): void {
    if (this.stockUpdateGroup) {
      if (isCalcualtionReq) {
        this.getCount()
      } else {
        this.currentSockInBank[this.stockUpdateGroup]['currentStock'] = this.stockUpdateCount;
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


}
