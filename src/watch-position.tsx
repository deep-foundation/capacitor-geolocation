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
      const {
        data: [positionLink],
      } = await this.select({
        type_id: this.capacitorGeolocationPackage.Position.idLocal(),
        in: {
          type_id: {
            _id: ["@deep-foundation/core", "Contain"],
          },
          from_id: containerLinkId,
        },
      });
      if (positionLink) {
        await this.updatePosition({
          position,
          id: positionLink.id,
        });
        return;
      } else {
        await this.insertPosition({ position, containerLinkId });
      }
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
