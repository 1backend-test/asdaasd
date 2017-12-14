import { Injectable } from '@angular/core';
import { NgClient } from '@1backend/ng-client';




@Injectable()
export class Service {
  constructor(private ngClient: NgClient) {}

  getHi(): Promise<string> {
    return this.ngClient.call<string>("asdaasd", "woot", "GET", "/hi", {  });
  }

  getImportedHi(): Promise<string> {
    return this.ngClient.call<string>("asdaasd", "woot", "GET", "/imported-hi", {  });
  }

  postInputExample(rect: Rectangle, unit: string): Promise<Output> {
    return this.ngClient.call<Output>("asdaasd", "woot", "POST", "/input-example", { "rect": rect, "unit": unit });
  }

  getSqlExample(): Promise<void> {
    return this.ngClient.call<void>("asdaasd", "woot", "GET", "/sql-example", {  });
  }

}
