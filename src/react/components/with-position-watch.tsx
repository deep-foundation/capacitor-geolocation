import { UsePositionWatchOptions } from "../hooks/use-position-watch";

export function WithPositionWatch(options: WithPositionWatchOptions): WithPositionWatchResult {
  const { children, deep } = options;

  deep.usePositionWatch(options)

  return children ?? null;
}

export type WithPositionWatchOptions = UsePositionWatchOptions & {
  children?: JSX.Element|null
}
export type WithPositionWatchResult = Exclude<WithPositionWatchOptions['children'],undefined>
