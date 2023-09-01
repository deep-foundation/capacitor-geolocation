import debug from "debug";
import { useEffect, useState } from "react";
import { WatchPositionOptions } from "../../watch-position";

export function usePositionWatch(options: UsePositionWatchOptions): UsePositionWatchResult {
  const log = debug(`@deep-foundation/capacitor-geolocation:${usePositionWatch.name}`);
  log({options})
  const { deep } = options;
  const [watchId, setWatchId] = useState<string|undefined>(undefined)
  
  useEffect(() => {
    deep.watchPosition(options).then((watchId) => {
      log({watchId})
      setWatchId(watchId)
    })

    return () => {
      if (watchId) {
        deep.clearWatch({id: watchId})
      }
    }
  }, [])
}

export type UsePositionWatchOptions = WatchPositionOptions;
export type UsePositionWatchResult = void;