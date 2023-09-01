import debug from "debug";
import { GeolocationDecorator } from "./create-geolocation-decorator";
import { DeepClientInstance } from "@deep-foundation/deeplinks/imports/client";

export async function applyRequiredPackagesInMinilinks(options: ApplyRequiredPackagesInMinilnksOptions): ApplyRequiredPackagesInMinilnksResult {
  const log = debug(`@deep-foundation/capacitor-geolocation:GeolocationDecorator:${applyRequiredPackagesInMinilinks.name}`);
  const { deep } = options;
  const { data: links } = await deep.select({
    up: {
      tree_id: {
        _id: ["@deep-foundation/core", "containTree"]
      },
      parent: {
        _or: deep.requiredPackagesInMinilinksToApply.map((packageName) => ({
          id: {
            _id: [packageName]
          }
        }))
      }
    }
  })
  log({ links })

  const minilinksApplyResult = deep.minilinks.apply(links)
  log({ minilinksApplyResult })

  deep.requiredPackagesInMinilinksToApply = [];

  return minilinksApplyResult
}

export type ApplyRequiredPackagesInMinilnksOptions = {
  deep: GeolocationDecorator
}
export type ApplyRequiredPackagesInMinilnksResult = Promise<ReturnType<DeepClientInstance['minilinks']['apply']>>
