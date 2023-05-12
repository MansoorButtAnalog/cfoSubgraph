import { newMockEvent } from "matchstick-as"
import { ethereum, Address } from "@graphprotocol/graph-ts"
import { cfoPayCreated } from "../generated/cfoFactory/cfoFactory"

export function createcfoPayCreatedEvent(
  token: Address,
  cfoPay: Address
): cfoPayCreated {
  let cfoPayCreatedEvent = changetype<cfoPayCreated>(newMockEvent())

  cfoPayCreatedEvent.parameters = new Array()

  cfoPayCreatedEvent.parameters.push(
    new ethereum.EventParam("token", ethereum.Value.fromAddress(token))
  )
  cfoPayCreatedEvent.parameters.push(
    new ethereum.EventParam("cfoPay", ethereum.Value.fromAddress(cfoPay))
  )

  return cfoPayCreatedEvent
}
