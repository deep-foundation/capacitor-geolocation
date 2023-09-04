import {
  GeolocationPlugin,
  ClearWatchOptions as CapacitorClearWatchOptions,
  Geolocation,
} from "@capacitor/geolocation";
import { GeolocationDecorator } from "./create-geolocation-decorator.js";
import { DeepClientInstance } from "@deep-foundation/deeplinks/imports/client.js";

export async function clearWatch<TDeepClient extends DeepClientInstance>(
  this: GeolocationDecorator<TDeepClient>,
  options: ClearWatchOptions,
): ClearWatchResult {
  await Geolocation.clearWatch(options);
}

export type ClearWatchOptions = CapacitorClearWatchOptions;
export type ClearWatchResult = ReturnType<GeolocationPlugin["clearWatch"]>;
