import { Geolocation, GeolocationPlugin } from "@capacitor/geolocation";
import { GeolocationDecorator } from "./create-geolocation-decorator";

export async function watchPosition(this: GeolocationDecorator, options: WatchPositionOptions): WatchPositionResult {
  const { deep, containerLinkId, watchPositionOptions = {}} = options;
  return await Geolocation.watchPosition(watchPositionOptions, async (position, error) => {
    if (error) {
      throw error;
    }
    await deep.insertPosition({ position, containerLinkId })
  })
}

export type WatchPositionOptions = { watchPositionOptions?: PositionOptions, containerLinkId?: number }
export type WatchPositionResult = ReturnType<GeolocationPlugin['watchPosition']>