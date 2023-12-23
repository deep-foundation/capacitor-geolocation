import {
  Package as BasePackage,
  PackageOptions as BasePackageOptions,
} from "@deep-foundation/deeplinks/imports/package.js";

/**
Represents a deep package

@remarks
Contains name of the package and all the links as the objects with id method which returns the id of the link.

@example
#### Use name field to get the name of the package
```ts
const package = new Package({deep});
const {name: packageName} = package;
```
#### Use id method to get the id of the link
```ts
const package = new Package({deep});
const positionTypeLinkId = await package["Position"].id();
const handleUpdatePositionLinkId = await package["handleUpdatePosition"].id();
const positionValueLinkId = await package["positionValue"].id();
```

#### Use idLocal method to get the local id of the link
```ts
const package = new Package({deep});
await package.applyMinilinks();
const positionTypeLinkId = package["Position"].idLocal();
const handleUpdatePositionLinkId = package["handleUpdatePosition"].idLocal();
const positionValueLinkId = package["positionValue"].idLocal();
```
#### Use name field to get the name of the link
```ts
const package = new Package({deep});
const position = package["Position"].name;
const handleUpdatePosition = package["handleUpdatePosition"].name;
const positionValue = package["positionValue"].name;
```
*/
export class Package extends BasePackage {
  constructor(param: PackageOptions) {
    super({
      ...param,
      name: "@deep-foundation/capacitor-geolocation",
    });
  }

  /**
      @example
      #### Use id method to get the id of the Position link
      ```ts
      const package = new Package({deep});
      const positionTypeLinkId = await package["Position"].id();
      ```
      #### Use localId method to get the local id of the Position link
      ```ts
      const package = new Package({deep});
      const positionTypeLinkId = await package["Position"].localId();
      ```
      #### Use name field to get the name of the Position link
      ```ts
      const package = new Package({deep});
      const position = await package["Position"].name;
      ```
      */
  public "Position" = this.createEntity("Position");
  /**
      @example
      #### Use id method to get the id of the handleUpdatePosition link
      ```ts
      const package = new Package({deep});
      const handleUpdatePositionLinkId = await package["handleUpdatePosition"].id();
      ```
      #### Use localId method to get the local id of the handleUpdatePosition link
      ```ts
      const package = new Package({deep});
      const handleUpdatePositionLinkId = await package["handleUpdatePosition"].localId();
      ```
      #### Use name field to get the name of the handleUpdatePosition link
      ```ts
      const package = new Package({deep});
      const handleUpdatePosition = await package["handleUpdatePosition"].name;
      ```
      */
  public "handleUpdatePosition" = this.createEntity("handleUpdatePosition");
  /**
      @example
      #### Use id method to get the id of the positionValue link
      ```ts
      const package = new Package({deep});
      const positionValueLinkId = await package["positionValue"].id();
      ```
      #### Use localId method to get the local id of the positionValue link
      ```ts
      const package = new Package({deep});
      const positionValueLinkId = await package["positionValue"].localId();
      ```
      #### Use name field to get the name of the positionValue link
      ```ts
      const package = new Package({deep});
      const positionValue = await package["positionValue"].name;
      ```
      */
  public "positionValue" = this.createEntity("positionValue");
}

export type PackageOptions = Omit<BasePackageOptions, "name">;
