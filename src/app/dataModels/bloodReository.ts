export interface IBloodInfo {
    displayName: string,
    canReceiveFrom: string[],
    currentStock: number;
}

export interface IBloodRepo {
    aPos: IBloodInfo,
    aNeg: IBloodInfo,
    bPos: IBloodInfo,
    bNeg: IBloodInfo,
    abPos: IBloodInfo,
    abNeg: IBloodInfo
    oPos: IBloodInfo,
    oNeg: IBloodInfo
}

export interface IStockUpdateData {
    selectedBloodGroup: string,
    count: string
}