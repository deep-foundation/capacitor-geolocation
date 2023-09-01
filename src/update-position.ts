import { Position } from "@capacitor/geolocation";
import { DeepClientInstance } from "@deep-foundation/deeplinks/imports/client";
import { GeolocationDecorator } from "./create-geolocation-decorator";

export async function updatePosition(options: UpdatePositionOptions): UpdatePositionResult {
  const { deep } = options;
  const operations = await deep.makeUpdatePositionOperations(options);
  return await deep.serial({
    operations
  })
}

export type UpdatePositionOptions = { position: Position | null, id: number, deep: GeolocationDecorator }
export type UpdatePositionResult = ReturnType<DeepClientInstance['serial']>