import { Geolocation, GeolocationPlugin } from "@capacitor/geolocation";
import { GeolocationDecorator } from "./create-geolocation-decorator.js";
import { DeepClientInstance } from "@deep-foundation/deeplinks/imports/client.js";
import { packageLog } from "./package-log.js";

export async function watchPosition<TDeepClient extends DeepClientInstance>(
  this: GeolocationDecorator<TDeepClient>,
  options: WatchPositionOptions,
): WatchPositionResult {
  const log = packageLog.extend(watchPosition.name);
  log({ options });
  const { containerLinkId, watchPositionOptions = {} } = options;
  return await Geolocation.watchPosition(
    watchPositionOptions,
    async (position, error) => {
      const callbackLog = log.extend("callback");
      callbackLog({ position, error });
      if (error) {
        throw error;
      }
      const {
        data: [positionLinkFromSelect],
      } = await this.select({
        type_id: this.capacitorGeolocationPackage.Position.idLocal(),
        in: {
          type_id: {
            _id: ["@deep-foundation/core", "Contain"],
          },
          from_id: containerLinkId,
        },
      });
      callbackLog({ positionLinkFromSelect });
      if (positionLinkFromSelect) {
        await this.updatePosition({
          position,
          id: positionLinkFromSelect.id,
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
