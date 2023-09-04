import debug from "debug";
import { GeolocationDecorator } from "./create-geolocation-decorator.js";
import { DeepClientInstance } from "@deep-foundation/deeplinks/imports/client.js";
import { Position } from "@capacitor/geolocation";

export async function insertPosition<TDeepClient extends DeepClientInstance>(
  this: GeolocationDecorator<TDeepClient>,
  options: InsertPositionOptions,
): InsertPositionResult {
  const log = debug(
    `@deep-foundation/capacitor-geolocation:${insertPosition.name}`,
  );
  log({ options });
  const { position, containerLinkId, id } = options;
  const insertOperations = await this.makePositionInsertOperations({
    position: position,
    containerLinkId: containerLinkId,
    id: id,
  });
  log({ insertOperations });
  const serialResult = await this.serial({ operations: insertOperations });
  log({ serialResult });

  return serialResult;
}

export type InsertPositionOptions = {
  position: Position | null;
  containerLinkId?: number;
  id?: number;
};
export type InsertPositionResult = ReturnType<DeepClientInstance["serial"]>;
