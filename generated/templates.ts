// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  Address,
  DataSourceTemplate,
  DataSourceContext
} from "@graphprotocol/graph-ts";

export class cfoPay extends DataSourceTemplate {
  static create(address: Address): void {
    DataSourceTemplate.create("cfoPay", [address.toHex()]);
  }

  static createWithContext(address: Address, context: DataSourceContext): void {
    DataSourceTemplate.createWithContext(
      "cfoPay",
      [address.toHex()],
      context
    );
  }
}