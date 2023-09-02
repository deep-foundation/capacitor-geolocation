import debug from "debug";
import { useEffect, useState } from "react";
import { WatchPositionOptions } from "../../watch-position.js";
import { GeolocationDecorator } from "../../create-geolocation-decorator.js";

export function usePositionWatch(this: GeolocationDecorator, options: UsePositionWatchOptions): UsePositionWatchResult {
  const log = debug(`@deep-foundation/capacitor-geolocation:${usePositionWatch.name}`);
  log({options})
  const [watchId, setWatchId] = useState<string|undefined>(undefined)
  
  useEffect(() => {
    this.watchPosition(options).then((watchId) => {
      log({watchId})
      setWatchId(watchId)
    })

    return () => {
      if (watchId) {
        this.clearWatch({id: watchId})
      }
    }
  }, [])
}

export type UsePositionWatchOptions = WatchPositionOptions;
export type UsePositionWatchResult = void;