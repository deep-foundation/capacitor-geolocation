import { Position } from "@capacitor/geolocation";
import { SerialOperation } from "@deep-foundation/deeplinks/imports/client";
import { createSerialOperation } from "@deep-foundation/deeplinks/imports/gql";
import debug from "debug";

export async function makePositionUpdateOperations(options: MakePositionUpdateOperationsOptions): MakePositionUpdateOperationsResult {
  const log = debug(`@deep-foundation/capacitor-geolocation:GeolocationDecorator:${makePositionUpdateOperations.name}`);
  log({ options })

  const operation = createSerialOperation({
    type: 'update',
    table: 'objects',
    value: {
      value: options.position
    },
    exp: {
      link_id: options.id
    }
  })
  log({ operation })

  return [operation]
}

export type MakePositionUpdateOperationsOptions = { position: Position | null, id: number }
export type MakePositionUpdateOperationsResult = Promise<Array<SerialOperation>>