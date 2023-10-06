import { DeepClientInstance } from "@deep-foundation/deeplinks/imports/client.js";
import { GeolocationDecorator } from "../../create-geolocation-decorator.js";
import {
  UsePositionWatchOptions,
  usePositionWatch,
} from "../hooks/use-position-watch.js";

export function WithPositionSync<
  TDeepClient extends DeepClientInstance = DeepClientInstance,
>(options: WithPositionWatchOptions<TDeepClient>): WithPositionWatchResult {
  const { children, deep } = options;

  usePositionWatch(options);

  return children ?? null;
}

export type WithPositionWatchOptions<
  TDeepClient extends DeepClientInstance = DeepClientInstance,
> = UsePositionWatchOptions & {
  children?: JSX.Element | null;
  deep: GeolocationDecorator<TDeepClient>;
};
export type WithPositionWatchResult = Exclude<
  WithPositionWatchOptions["children"],
  undefined
>;
