import { DeepClientInstance } from "@deep-foundation/deeplinks/imports/client.js";
import { GeolocationDecorator } from "../../create-geolocation-decorator.js";
import { UsePositionWatchOptions } from "../hooks/use-position-watch.js";

export function WithPositionWatch<TDeepClient extends DeepClientInstance>(this: GeolocationDecorator<TDeepClient>, options: WithPositionWatchOptions): WithPositionWatchResult {
  const { children,  } = options;

  this.usePositionWatch(options)

  return children ?? null;
}

export type WithPositionWatchOptions = UsePositionWatchOptions & {
  children?: JSX.Element|null
}
export type WithPositionWatchResult = Exclude<WithPositionWatchOptions['children'],undefined>
