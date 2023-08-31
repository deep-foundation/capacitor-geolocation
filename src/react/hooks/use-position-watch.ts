import { DeepClient, useDeepSubscription } from "@deep-foundation/deeplinks/imports/client";
import debug from 'debug'
import { Package } from "../../package";
import { WatchPositionOptions, createGeolocationDecorator } from "../../create-geolocation-decorator";
import { useEffect, useState } from "react";

export function usePositionWatch(options: UseGeolocationGetOptions) {
  const log = debug(`@deep-foundation/capacitor-geolocation:${usePositionWatch.name}`);
  const { deep, watchPositionOptions} = options;
  const decoratedDeep = createGeolocationDecorator(deep);
  const [watchId, setWatchId] = useState<string|undefined>(undefined)
  
  useEffect(() => {
    decoratedDeep.watchPosition(watchPositionOptions).then((watchId) => {
      log({watchId})
      setWatchId(watchId)
    })

    return () => {
      if (watchId) {
        decoratedDeep.clearWatch({id: watchId})
      }
    }
  }, [])
}

export interface UseGeolocationGetOptions {
  deep: DeepClient;
  deviceLinkId: number;
  watchPositionOptions: WatchPositionOptions;
}