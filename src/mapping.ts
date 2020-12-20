import { InterfaceImplementerSet } from '../generated/TokenRegistry/TokenRegistry';

import { log } from '@graphprotocol/graph-ts'

export function handleInterfaceImplementerSet(event: InterfaceImplementerSet): void {
	log.error("Implementer set {}", [event.params.addr.toHexString()])
}