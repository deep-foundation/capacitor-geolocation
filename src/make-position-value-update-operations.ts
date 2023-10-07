import { Position } from "@capacitor/geolocation";
import {
  DeepClientInstance,
  SerialOperation,
} from "@deep-foundation/deeplinks/imports/client.js";
import { createSerialOperation } from "@deep-foundation/deeplinks/imports/gql/index.js";
import debug from "debug";
import { GeolocationDecorator } from "./create-geolocation-decorator.js";
import { packageLog } from "./package-log.js";

export async function makePositionValueUpdateOperations<
  TDeepClient extends DeepClientInstance,
>(
  this: GeolocationDecorator<TDeepClient>,
  options: MakePositionUpdateOperationsOptions,
): MakePositionUpdateOperationsResult {
  const log = packageLog.extend(makePositionValueUpdateOperations.name);
  log({ options });

  const operation = createSerialOperation({
    type: "update",
    table: "objects",
    value: {
      value: options.position,
    },
    exp: {
      link_id: options.id,
    },
  });
  log({ operation });

  return [operation];
}

export type MakePositionUpdateOperationsOptions = {
  position: Position | null;
  id: number;
};
export type MakePositionUpdateOperationsResult = Promise<
  Array<SerialOperation>
>;
