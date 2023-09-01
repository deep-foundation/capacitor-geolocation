import { GeolocationPlugin, ClearWatchOptions as CapacitorClearWatchOptions, Geolocation } from "@capacitor/geolocation"

export async function clearWatch(options: ClearWatchOptions): ClearWatchResult {
  await Geolocation.clearWatch(options)
}

export type ClearWatchOptions = CapacitorClearWatchOptions;
export type ClearWatchResult = ReturnType<GeolocationPlugin['clearWatch']>
