import { Position } from "@capacitor/geolocation";
import { SerialOperation } from "@deep-foundation/deeplinks/imports/client.js";
import { createSerialOperation } from "@deep-foundation/deeplinks/imports/gql/index.js";
import debug from "debug";
import { GeolocationDecorator } from "./create-geolocation-decorator.js";

export async function makePositionValueUpdateOperations(this: GeolocationDecorator, options: MakePositionUpdateOperationsOptions): MakePositionUpdateOperationsResult {
  const log = debug(`@deep-foundation/capacitor-geolocation:${makePositionValueUpdateOperations.name}`);
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