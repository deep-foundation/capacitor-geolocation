import { createSerialOperation } from "@deep-foundation/deeplinks/imports/gql";
import debug from "debug";
import { GeolocationDecorator } from "./create-geolocation-decorator";
import { Position } from "@capacitor/geolocation";
import { SerialOperation } from "@deep-foundation/deeplinks/imports/client";

export async function makePositionInsertOperations(options: MakePositionInsertOperationsOptions): MakePositionInsertOperationsResult {
  const log = debug(`@deep-foundation/capacitor-geolocation:GeolocationDecorator:${makePositionInsertOperations.name}`);
  log({ options })
  const { id, deep } = options;

  const operation = createSerialOperation({
    ...(id ? { id } : {}),
    type: 'insert',
    table: 'links',
    objects: {
      type_id: deep.capacitorGeolocationPackage.Position.idLocal(),
      object: {
        data: {
          value: options.position
        }
      },
      in: {
        data: {
          type_id: deep.idLocal("@deep-foundation/core", "Contain"),
          from_id: options.containerLinkId ?? deep.linkId,
        }
      }
    },
  })
  log({ operation })

  return [operation]
}

export type MakePositionInsertOperationsOptions = { position: Position | null, containerLinkId?: number, id?: number, deep: GeolocationDecorator }
export type MakePositionInsertOperationsResult = Promise<Array<SerialOperation>>