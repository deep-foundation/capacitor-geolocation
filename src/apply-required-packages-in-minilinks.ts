import debug from "debug";
import {
  GeolocationDecorator,
  createGeolocationDecorator,
} from "./create-geolocation-decorator.js";
import { DeepClientInstance } from "@deep-foundation/deeplinks/imports/client.js";

export async function applyRequiredPackagesInMinilinks<
  TDeepClient extends DeepClientInstance,
>(
  this: GeolocationDecorator<TDeepClient>,
): ApplyRequiredPackagesInMinilnksResult {
  const log = debug(
    `@deep-foundation/capacitor-geolocation:${applyRequiredPackagesInMinilinks.name}`,
  );
  const { data: links } = await this.select({
    up: {
      tree_id: {
        _id: ["@deep-foundation/core", "containTree"],
      },
      parent: {
        _or: this.requiredPackagesInMinilinksToApply.map((packageName) => ({
          id: {
            _id: [packageName],
          },
        })),
      },
    },
  });
  log({ links });

  const minilinksApplyResult = this.minilinks.apply(links);
  log({ minilinksApplyResult });

  this.requiredPackagesInMinilinksToApply = [];

  return minilinksApplyResult;
}

export type ApplyRequiredPackagesInMinilnksResult = Promise<
  ReturnType<DeepClientInstance["minilinks"]["apply"]>
>;
