import { UsePositionWatchOptions, usePositionWatch } from "../hooks/use-position-watch";

export function WithComponentWatch(options: WithComponentWatchOptions) {
  const { children } = options;

  usePositionWatch(options)

  return children ?? null;
}

export type WithComponentWatchOptions = UsePositionWatchOptions & {
  children?: JSX.Element|null
}