// To parse this data:
//
//   import { Convert, LSData } from "./file";
//
//   const lSData = Convert.toLSData(json);

export interface LSData {
  lsDashboard: LSDashboard[];
  insurances: Insurances;
}

export interface Insurances {
  active: Active[];
  candidates: Active[];
  pending: Pending;
  liquidUnstakeRequests: Request[];
}

export interface Active {
  id: string;
  provider: string;
  validator: string;
  feeRates: number;
  accumulatedCommission: number;
  insuranceAmount: number;
}

export interface Request {
  requester: string;
  insuranceID: string;
}

export interface Pending {
  withdrawRequests: Request[];
}

export interface LSDashboard {
  name: string;
  value: string;
  symbol?: string;
  additional?: string;
}

// Converts JSON strings to/from your types
export class Convert {
  public static toLSData(json: string): LSData {
    return JSON.parse(json);
  }

  public static lSDataToJson(value: LSData): string {
    return JSON.stringify(value);
  }
}
