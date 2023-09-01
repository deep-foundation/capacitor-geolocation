import { Position } from "@capacitor/geolocation";
import debug from "debug";
import { GeolocationDecorator } from "./create-geolocation-decorator";

export async function getPosition(options: GetPositionOptions): GetPositionResult {
  const log = debug(`@deep-foundation/capacitor-geolocation:GeolocationDecorator:${getPosition.name}`);
  log({options})
  const {deep} = options;
  const { data: [positionLink] } = await deep.select(options.linkId);
  log({positionLink})
  if (!positionLink) {
    throw new Error(`Failed to find link with id ##${options.linkId}`)
  }

  return positionLink.value?.value;
}

export type GetPositionOptions = { linkId: number, deep: GeolocationDecorator}
export type GetPositionResult = Promise<Partial<Position> | undefined>