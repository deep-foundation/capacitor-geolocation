import debug from "debug";
import { useEffect, useState } from "react";
import { WatchPositionOptions } from "../../watch-position.js";
import { GeolocationDecorator } from "../../create-geolocation-decorator.js";
import { DeepClientInstance } from "@deep-foundation/deeplinks/imports/client.js";

export function usePositionWatch<
  TDeepClient extends DeepClientInstance = DeepClientInstance,
>(options: UsePositionWatchOptions<TDeepClient>): UsePositionWatchResult {
  const log = debug(
    `@deep-foundation/capacitor-geolocation:${usePositionWatch.name}`,
  );
  log({ options });
  const { deep } = options;
  const [watchId, setWatchId] = useState<string | undefined>(undefined);

  useEffect(() => {
    deep.watchPosition(options).then((watchId) => {
      log({ watchId });
      setWatchId(watchId);
    });

    return () => {
      if (watchId) {
        deep.clearWatch({ id: watchId });
      }
    };
  }, []);
}

export type UsePositionWatchOptions<
  TDeepClient extends DeepClientInstance = DeepClientInstance,
> = WatchPositionOptions & {
  deep: GeolocationDecorator<TDeepClient>;
};
export type UsePositionWatchResult = void;
