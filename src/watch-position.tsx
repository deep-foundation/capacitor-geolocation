import { Geolocation, GeolocationPlugin } from "@capacitor/geolocation";
import { GeolocationDecorator } from "./create-geolocation-decorator.js";
import { DeepClientInstance } from "@deep-foundation/deeplinks/imports/client.js";

export async function watchPosition<TDeepClient extends DeepClientInstance>(
  this: GeolocationDecorator<TDeepClient>,
  options: WatchPositionOptions,
): WatchPositionResult {
  const { containerLinkId, watchPositionOptions = {} } = options;
  return await Geolocation.watchPosition(
    watchPositionOptions,
    async (position, error) => {
      if (error) {
        throw error;
      }
      await this.insertPosition({ position, containerLinkId });
    },
  );
}

export type WatchPositionOptions = {
  watchPositionOptions?: PositionOptions;
  containerLinkId?: number;
};
export type WatchPositionResult = ReturnType<
  GeolocationPlugin["watchPosition"]
>;
