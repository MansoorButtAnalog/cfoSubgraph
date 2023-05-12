// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class PayerDeposit extends ethereum.Event {
  get params(): PayerDeposit__Params {
    return new PayerDeposit__Params(this);
  }
}

export class PayerDeposit__Params {
  _event: PayerDeposit;

  constructor(event: PayerDeposit) {
    this._event = event;
  }

  get from(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class PayerWithdraw extends ethereum.Event {
  get params(): PayerWithdraw__Params {
    return new PayerWithdraw__Params(this);
  }
}

export class PayerWithdraw__Params {
  _event: PayerWithdraw;

  constructor(event: PayerWithdraw) {
    this._event = event;
  }

  get from(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class StreamCancelled extends ethereum.Event {
  get params(): StreamCancelled__Params {
    return new StreamCancelled__Params(this);
  }
}

export class StreamCancelled__Params {
  _event: StreamCancelled;

  constructor(event: StreamCancelled) {
    this._event = event;
  }

  get from(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get to(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get amountPerSec(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get streamId(): Bytes {
    return this._event.parameters[3].value.toBytes();
  }
}

export class StreamCreated extends ethereum.Event {
  get params(): StreamCreated__Params {
    return new StreamCreated__Params(this);
  }
}

export class StreamCreated__Params {
  _event: StreamCreated;

  constructor(event: StreamCreated) {
    this._event = event;
  }

  get from(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get to(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get amountPerSec(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get streamId(): Bytes {
    return this._event.parameters[3].value.toBytes();
  }
}

export class StreamCreatedWithReason extends ethereum.Event {
  get params(): StreamCreatedWithReason__Params {
    return new StreamCreatedWithReason__Params(this);
  }
}

export class StreamCreatedWithReason__Params {
  _event: StreamCreatedWithReason;

  constructor(event: StreamCreatedWithReason) {
    this._event = event;
  }

  get from(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get to(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get amountPerSec(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get streamId(): Bytes {
    return this._event.parameters[3].value.toBytes();
  }

  get reason(): string {
    return this._event.parameters[4].value.toString();
  }
}

export class StreamModified extends ethereum.Event {
  get params(): StreamModified__Params {
    return new StreamModified__Params(this);
  }
}

export class StreamModified__Params {
  _event: StreamModified;

  constructor(event: StreamModified) {
    this._event = event;
  }

  get from(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get oldTo(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get oldAmountPerSec(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get oldStreamId(): Bytes {
    return this._event.parameters[3].value.toBytes();
  }

  get to(): Address {
    return this._event.parameters[4].value.toAddress();
  }

  get amountPerSec(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }

  get newStreamId(): Bytes {
    return this._event.parameters[6].value.toBytes();
  }
}

export class StreamPaused extends ethereum.Event {
  get params(): StreamPaused__Params {
    return new StreamPaused__Params(this);
  }
}

export class StreamPaused__Params {
  _event: StreamPaused;

  constructor(event: StreamPaused) {
    this._event = event;
  }

  get from(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get to(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get amountPerSec(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get streamId(): Bytes {
    return this._event.parameters[3].value.toBytes();
  }
}

export class Withdraw extends ethereum.Event {
  get params(): Withdraw__Params {
    return new Withdraw__Params(this);
  }
}

export class Withdraw__Params {
  _event: Withdraw;

  constructor(event: Withdraw) {
    this._event = event;
  }

  get from(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get to(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get amountPerSec(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get streamId(): Bytes {
    return this._event.parameters[3].value.toBytes();
  }

  get amount(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }
}

export class cfoPay__payersResult {
  value0: BigInt;
  value1: BigInt;

  constructor(value0: BigInt, value1: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    return map;
  }

  getLastPayerUpdate(): BigInt {
    return this.value0;
  }

  getTotalPaidPerSec(): BigInt {
    return this.value1;
  }
}

export class cfoPay__withdrawableResult {
  value0: BigInt;
  value1: BigInt;
  value2: BigInt;

  constructor(value0: BigInt, value1: BigInt, value2: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    return map;
  }

  getWithdrawableAmount(): BigInt {
    return this.value0;
  }

  getLastUpdate(): BigInt {
    return this.value1;
  }

  getOwed(): BigInt {
    return this.value2;
  }
}

export class cfoPay extends ethereum.SmartContract {
  static bind(address: Address): cfoPay {
    return new cfoPay("cfoPay", address);
  }

  DECIMALS_DIVISOR(): BigInt {
    let result = super.call(
      "DECIMALS_DIVISOR",
      "DECIMALS_DIVISOR():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_DECIMALS_DIVISOR(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "DECIMALS_DIVISOR",
      "DECIMALS_DIVISOR():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  balances(param0: Address): BigInt {
    let result = super.call("balances", "balances(address):(uint256)", [
      ethereum.Value.fromAddress(param0)
    ]);

    return result[0].toBigInt();
  }

  try_balances(param0: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall("balances", "balances(address):(uint256)", [
      ethereum.Value.fromAddress(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getPayerBalance(payerAddress: Address): BigInt {
    let result = super.call(
      "getPayerBalance",
      "getPayerBalance(address):(int256)",
      [ethereum.Value.fromAddress(payerAddress)]
    );

    return result[0].toBigInt();
  }

  try_getPayerBalance(payerAddress: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getPayerBalance",
      "getPayerBalance(address):(int256)",
      [ethereum.Value.fromAddress(payerAddress)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getStreamId(from: Address, to: Address, amountPerSec: BigInt): Bytes {
    let result = super.call(
      "getStreamId",
      "getStreamId(address,address,uint216):(bytes32)",
      [
        ethereum.Value.fromAddress(from),
        ethereum.Value.fromAddress(to),
        ethereum.Value.fromUnsignedBigInt(amountPerSec)
      ]
    );

    return result[0].toBytes();
  }

  try_getStreamId(
    from: Address,
    to: Address,
    amountPerSec: BigInt
  ): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "getStreamId",
      "getStreamId(address,address,uint216):(bytes32)",
      [
        ethereum.Value.fromAddress(from),
        ethereum.Value.fromAddress(to),
        ethereum.Value.fromUnsignedBigInt(amountPerSec)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  payers(param0: Address): cfoPay__payersResult {
    let result = super.call("payers", "payers(address):(uint40,uint216)", [
      ethereum.Value.fromAddress(param0)
    ]);

    return new cfoPay__payersResult(
      result[0].toBigInt(),
      result[1].toBigInt()
    );
  }

  try_payers(param0: Address): ethereum.CallResult<cfoPay__payersResult> {
    let result = super.tryCall("payers", "payers(address):(uint40,uint216)", [
      ethereum.Value.fromAddress(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new cfoPay__payersResult(value[0].toBigInt(), value[1].toBigInt())
    );
  }

  streamToStart(param0: Bytes): BigInt {
    let result = super.call(
      "streamToStart",
      "streamToStart(bytes32):(uint256)",
      [ethereum.Value.fromFixedBytes(param0)]
    );

    return result[0].toBigInt();
  }

  try_streamToStart(param0: Bytes): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "streamToStart",
      "streamToStart(bytes32):(uint256)",
      [ethereum.Value.fromFixedBytes(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  token(): Address {
    let result = super.call("token", "token():(address)", []);

    return result[0].toAddress();
  }

  try_token(): ethereum.CallResult<Address> {
    let result = super.tryCall("token", "token():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  withdrawable(
    from: Address,
    to: Address,
    amountPerSec: BigInt
  ): cfoPay__withdrawableResult {
    let result = super.call(
      "withdrawable",
      "withdrawable(address,address,uint216):(uint256,uint256,uint256)",
      [
        ethereum.Value.fromAddress(from),
        ethereum.Value.fromAddress(to),
        ethereum.Value.fromUnsignedBigInt(amountPerSec)
      ]
    );

    return new cfoPay__withdrawableResult(
      result[0].toBigInt(),
      result[1].toBigInt(),
      result[2].toBigInt()
    );
  }

  try_withdrawable(
    from: Address,
    to: Address,
    amountPerSec: BigInt
  ): ethereum.CallResult<cfoPay__withdrawableResult> {
    let result = super.tryCall(
      "withdrawable",
      "withdrawable(address,address,uint216):(uint256,uint256,uint256)",
      [
        ethereum.Value.fromAddress(from),
        ethereum.Value.fromAddress(to),
        ethereum.Value.fromUnsignedBigInt(amountPerSec)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new cfoPay__withdrawableResult(
        value[0].toBigInt(),
        value[1].toBigInt(),
        value[2].toBigInt()
      )
    );
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class BatchCall extends ethereum.Call {
  get inputs(): BatchCall__Inputs {
    return new BatchCall__Inputs(this);
  }

  get outputs(): BatchCall__Outputs {
    return new BatchCall__Outputs(this);
  }
}

export class BatchCall__Inputs {
  _call: BatchCall;

  constructor(call: BatchCall) {
    this._call = call;
  }

  get calls(): Array<Bytes> {
    return this._call.inputValues[0].value.toBytesArray();
  }

  get revertOnFail(): boolean {
    return this._call.inputValues[1].value.toBoolean();
  }
}

export class BatchCall__Outputs {
  _call: BatchCall;

  constructor(call: BatchCall) {
    this._call = call;
  }
}

export class CancelStreamCall extends ethereum.Call {
  get inputs(): CancelStreamCall__Inputs {
    return new CancelStreamCall__Inputs(this);
  }

  get outputs(): CancelStreamCall__Outputs {
    return new CancelStreamCall__Outputs(this);
  }
}

export class CancelStreamCall__Inputs {
  _call: CancelStreamCall;

  constructor(call: CancelStreamCall) {
    this._call = call;
  }

  get to(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get amountPerSec(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class CancelStreamCall__Outputs {
  _call: CancelStreamCall;

  constructor(call: CancelStreamCall) {
    this._call = call;
  }
}

export class CreateStreamCall extends ethereum.Call {
  get inputs(): CreateStreamCall__Inputs {
    return new CreateStreamCall__Inputs(this);
  }

  get outputs(): CreateStreamCall__Outputs {
    return new CreateStreamCall__Outputs(this);
  }
}

export class CreateStreamCall__Inputs {
  _call: CreateStreamCall;

  constructor(call: CreateStreamCall) {
    this._call = call;
  }

  get to(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get amountPerSec(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class CreateStreamCall__Outputs {
  _call: CreateStreamCall;

  constructor(call: CreateStreamCall) {
    this._call = call;
  }
}

export class CreateStreamWithReasonCall extends ethereum.Call {
  get inputs(): CreateStreamWithReasonCall__Inputs {
    return new CreateStreamWithReasonCall__Inputs(this);
  }

  get outputs(): CreateStreamWithReasonCall__Outputs {
    return new CreateStreamWithReasonCall__Outputs(this);
  }
}

export class CreateStreamWithReasonCall__Inputs {
  _call: CreateStreamWithReasonCall;

  constructor(call: CreateStreamWithReasonCall) {
    this._call = call;
  }

  get to(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get amountPerSec(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get reason(): string {
    return this._call.inputValues[2].value.toString();
  }
}

export class CreateStreamWithReasonCall__Outputs {
  _call: CreateStreamWithReasonCall;

  constructor(call: CreateStreamWithReasonCall) {
    this._call = call;
  }
}

export class DepositCall extends ethereum.Call {
  get inputs(): DepositCall__Inputs {
    return new DepositCall__Inputs(this);
  }

  get outputs(): DepositCall__Outputs {
    return new DepositCall__Outputs(this);
  }
}

export class DepositCall__Inputs {
  _call: DepositCall;

  constructor(call: DepositCall) {
    this._call = call;
  }

  get amount(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class DepositCall__Outputs {
  _call: DepositCall;

  constructor(call: DepositCall) {
    this._call = call;
  }
}

export class DepositAndCreateCall extends ethereum.Call {
  get inputs(): DepositAndCreateCall__Inputs {
    return new DepositAndCreateCall__Inputs(this);
  }

  get outputs(): DepositAndCreateCall__Outputs {
    return new DepositAndCreateCall__Outputs(this);
  }
}

export class DepositAndCreateCall__Inputs {
  _call: DepositAndCreateCall;

  constructor(call: DepositAndCreateCall) {
    this._call = call;
  }

  get amountToDeposit(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get amountPerSec(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class DepositAndCreateCall__Outputs {
  _call: DepositAndCreateCall;

  constructor(call: DepositAndCreateCall) {
    this._call = call;
  }
}

export class DepositAndCreateWithReasonCall extends ethereum.Call {
  get inputs(): DepositAndCreateWithReasonCall__Inputs {
    return new DepositAndCreateWithReasonCall__Inputs(this);
  }

  get outputs(): DepositAndCreateWithReasonCall__Outputs {
    return new DepositAndCreateWithReasonCall__Outputs(this);
  }
}

export class DepositAndCreateWithReasonCall__Inputs {
  _call: DepositAndCreateWithReasonCall;

  constructor(call: DepositAndCreateWithReasonCall) {
    this._call = call;
  }

  get amountToDeposit(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get amountPerSec(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get reason(): string {
    return this._call.inputValues[3].value.toString();
  }
}

export class DepositAndCreateWithReasonCall__Outputs {
  _call: DepositAndCreateWithReasonCall;

  constructor(call: DepositAndCreateWithReasonCall) {
    this._call = call;
  }
}

export class ModifyStreamCall extends ethereum.Call {
  get inputs(): ModifyStreamCall__Inputs {
    return new ModifyStreamCall__Inputs(this);
  }

  get outputs(): ModifyStreamCall__Outputs {
    return new ModifyStreamCall__Outputs(this);
  }
}

export class ModifyStreamCall__Inputs {
  _call: ModifyStreamCall;

  constructor(call: ModifyStreamCall) {
    this._call = call;
  }

  get oldTo(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get oldAmountPerSec(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get to(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get amountPerSec(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }
}

export class ModifyStreamCall__Outputs {
  _call: ModifyStreamCall;

  constructor(call: ModifyStreamCall) {
    this._call = call;
  }
}

export class PauseStreamCall extends ethereum.Call {
  get inputs(): PauseStreamCall__Inputs {
    return new PauseStreamCall__Inputs(this);
  }

  get outputs(): PauseStreamCall__Outputs {
    return new PauseStreamCall__Outputs(this);
  }
}

export class PauseStreamCall__Inputs {
  _call: PauseStreamCall;

  constructor(call: PauseStreamCall) {
    this._call = call;
  }

  get to(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get amountPerSec(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class PauseStreamCall__Outputs {
  _call: PauseStreamCall;

  constructor(call: PauseStreamCall) {
    this._call = call;
  }
}

export class PermitTokenCall extends ethereum.Call {
  get inputs(): PermitTokenCall__Inputs {
    return new PermitTokenCall__Inputs(this);
  }

  get outputs(): PermitTokenCall__Outputs {
    return new PermitTokenCall__Outputs(this);
  }
}

export class PermitTokenCall__Inputs {
  _call: PermitTokenCall;

  constructor(call: PermitTokenCall) {
    this._call = call;
  }

  get token(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get from(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get amount(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get deadline(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }

  get v(): i32 {
    return this._call.inputValues[5].value.toI32();
  }

  get r(): Bytes {
    return this._call.inputValues[6].value.toBytes();
  }

  get s(): Bytes {
    return this._call.inputValues[7].value.toBytes();
  }
}

export class PermitTokenCall__Outputs {
  _call: PermitTokenCall;

  constructor(call: PermitTokenCall) {
    this._call = call;
  }
}

export class WithdrawCall extends ethereum.Call {
  get inputs(): WithdrawCall__Inputs {
    return new WithdrawCall__Inputs(this);
  }

  get outputs(): WithdrawCall__Outputs {
    return new WithdrawCall__Outputs(this);
  }
}

export class WithdrawCall__Inputs {
  _call: WithdrawCall;

  constructor(call: WithdrawCall) {
    this._call = call;
  }

  get from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get amountPerSec(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class WithdrawCall__Outputs {
  _call: WithdrawCall;

  constructor(call: WithdrawCall) {
    this._call = call;
  }
}

export class WithdrawPayerCall extends ethereum.Call {
  get inputs(): WithdrawPayerCall__Inputs {
    return new WithdrawPayerCall__Inputs(this);
  }

  get outputs(): WithdrawPayerCall__Outputs {
    return new WithdrawPayerCall__Outputs(this);
  }
}

export class WithdrawPayerCall__Inputs {
  _call: WithdrawPayerCall;

  constructor(call: WithdrawPayerCall) {
    this._call = call;
  }

  get amount(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class WithdrawPayerCall__Outputs {
  _call: WithdrawPayerCall;

  constructor(call: WithdrawPayerCall) {
    this._call = call;
  }
}

export class WithdrawPayerAllCall extends ethereum.Call {
  get inputs(): WithdrawPayerAllCall__Inputs {
    return new WithdrawPayerAllCall__Inputs(this);
  }

  get outputs(): WithdrawPayerAllCall__Outputs {
    return new WithdrawPayerAllCall__Outputs(this);
  }
}

export class WithdrawPayerAllCall__Inputs {
  _call: WithdrawPayerAllCall;

  constructor(call: WithdrawPayerAllCall) {
    this._call = call;
  }
}

export class WithdrawPayerAllCall__Outputs {
  _call: WithdrawPayerAllCall;

  constructor(call: WithdrawPayerAllCall) {
    this._call = call;
  }
}
