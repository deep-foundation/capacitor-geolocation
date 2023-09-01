import debug from "debug";
import { GeolocationDecorator } from "./create-geolocation-decorator";
import { DeepClientInstance } from "@deep-foundation/deeplinks/imports/client";
import { Position } from "@capacitor/geolocation";

export async function insertPosition(options: InsertPositionOptions): InsertPositionResult {
  const log = debug(`@deep-foundation/capacitor-geolocation:GeolocationDecorator:${insertPosition.name}`);
  log({ options })
  const { position, containerLinkId, id, deep } = options;
  const insertOperations = await deep.makePositionInsertOperations({ position: position, containerLinkId: containerLinkId, id: id });
  log({ insertOperations })
  const serialResult = await deep.serial({ operations: insertOperations })
  log({ serialResult })

  return serialResult;
}

export type InsertPositionOptions = { position: Position | null, containerLinkId?: number, id?: number, deep: GeolocationDecorator }
export type InsertPositionResult = ReturnType<DeepClientInstance['serial']>