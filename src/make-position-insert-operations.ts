import { createSerialOperation } from "@deep-foundation/deeplinks/imports/gql/index.js";
import debug from "debug";
import { GeolocationDecorator } from "./create-geolocation-decorator.js";
import { Position } from "@capacitor/geolocation";
import { SerialOperation } from "@deep-foundation/deeplinks/imports/client.js";

export async function makePositionInsertOperations(this: GeolocationDecorator, options: MakePositionInsertOperationsOptions): MakePositionInsertOperationsResult {
  const log = debug(`@deep-foundation/capacitor-geolocation:${makePositionInsertOperations.name}`);
  log({ options })
  const { id } = options;

  const operation = createSerialOperation({
    ...(id ? { id } : {}),
    type: 'insert',
    table: 'links',
    objects: {
      type_id: this.capacitorGeolocationPackage.Position.idLocal(),
      object: {
        data: {
          value: options.position
        }
      },
      in: {
        data: {
          type_id: this.idLocal("@deep-foundation/core", "Contain"),
          from_id: options.containerLinkId ?? this.linkId,
        }
      }
    },
  })
  log({ operation })

  return [operation]
}

export type MakePositionInsertOperationsOptions = { position: Position | null, containerLinkId?: number, id?: number }
export type MakePositionInsertOperationsResult = Promise<Array<SerialOperation>>