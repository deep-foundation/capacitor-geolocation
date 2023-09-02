import { Position } from "@capacitor/geolocation";
import debug from "debug";
import { GeolocationDecorator } from "./create-geolocation-decorator.js";

export async function getPosition(this: GeolocationDecorator, options: GetPositionOptions): GetPositionResult {
  const log = debug(`@deep-foundation/capacitor-geolocation:${getPosition.name}`);
  log({options})
  const { data: [positionLink] } = await this.select(options.linkId);
  log({positionLink})
  if (!positionLink) {
    throw new Error(`Failed to find link with id ##${options.linkId}`)
  }

  return positionLink.value?.value;
}

export type GetPositionOptions = { linkId: number}
export type GetPositionResult = Promise<Partial<Position> | undefined>