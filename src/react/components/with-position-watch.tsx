import { GeolocationDecorator } from "../../create-geolocation-decorator.js";
import { UsePositionWatchOptions } from "../hooks/use-position-watch.js";

export function WithPositionWatch(this: GeolocationDecorator, options: WithPositionWatchOptions): WithPositionWatchResult {
  const { children,  } = options;

  this.usePositionWatch(options)

  return children ?? null;
}

export type WithPositionWatchOptions = UsePositionWatchOptions & {
  children?: JSX.Element|null
}
export type WithPositionWatchResult = Exclude<WithPositionWatchOptions['children'],undefined>
