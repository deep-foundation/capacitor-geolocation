import { Geolocation, GeolocationPlugin } from "@capacitor/geolocation";
import { GeolocationDecorator } from "./create-geolocation-decorator.js";

export async function watchPosition(this: GeolocationDecorator, options: WatchPositionOptions): WatchPositionResult {
  const { containerLinkId, watchPositionOptions = {}} = options;
  return await Geolocation.watchPosition(watchPositionOptions, async (position, error) => {
    if (error) {
      throw error;
    }
    await this.insertPosition({ position, containerLinkId })
  })
}

export type WatchPositionOptions = { watchPositionOptions?: PositionOptions, containerLinkId?: number }
export type WatchPositionResult = ReturnType<GeolocationPlugin['watchPosition']>