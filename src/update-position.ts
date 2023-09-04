import { Position } from "@capacitor/geolocation";
import { DeepClientInstance } from "@deep-foundation/deeplinks/imports/client.js";
import { GeolocationDecorator } from "./create-geolocation-decorator.js";

export async function updatePosition<TDeepClient extends DeepClientInstance>(
  this: GeolocationDecorator<TDeepClient>,
  options: UpdatePositionOptions,
): UpdatePositionResult {
  const operations = await this.makeUpdatePositionOperations(options);
  return await this.serial({
    operations,
  });
}

export type UpdatePositionOptions = { position: Position | null; id: number };
export type UpdatePositionResult = ReturnType<DeepClientInstance["serial"]>;
