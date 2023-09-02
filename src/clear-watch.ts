import { GeolocationPlugin, ClearWatchOptions as CapacitorClearWatchOptions, Geolocation } from "@capacitor/geolocation"
import { GeolocationDecorator } from "./create-geolocation-decorator.js";

export async function clearWatch(this: GeolocationDecorator, options: ClearWatchOptions): ClearWatchResult {
  await Geolocation.clearWatch(options)
}

export type ClearWatchOptions = CapacitorClearWatchOptions;
export type ClearWatchResult = ReturnType<GeolocationPlugin['clearWatch']>
