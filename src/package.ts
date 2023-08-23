
import {
  Package as BasePackage,
  PackageOptions as BasePackageOptions,
} from '@deep-foundation/deeplinks/imports/package.js';

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
const timestampTypeLinkId = await package["Timestamp"].id();
const timestampValueLinkId = await package["timestampValue"].id();
const positionTreeTypeLinkId = await package["PositionTree"].id();
const speedValueTypeLinkId = await package["SpeedValue"].id();
const speedTypeLinkId = await package["Speed"].id();
const treeIncludeFromCurrentSpeedTypeLinkId = await package["TreeIncludeFromCurrentSpeed"].id();
const headingValueTypeLinkId = await package["HeadingValue"].id();
const headingTypeLinkId = await package["Heading"].id();
const treeIncludeFromCurrentHeadingTypeLinkId = await package["TreeIncludeFromCurrentHeading"].id();
const accuracyValueTypeLinkId = await package["AccuracyValue"].id();
const accuracyTypeLinkId = await package["Accuracy"].id();
const treeIncludeFromCurrentAccuracyTypeLinkId = await package["TreeIncludeFromCurrentAccuracy"].id();
const altitudeValueTypeLinkId = await package["AltitudeValue"].id();
const altitudeTypeLinkId = await package["Altitude"].id();
const treeIncludeFromCurrentAltitudeTypeLinkId = await package["TreeIncludeFromCurrentAltitude"].id();
const latitudeValueTypeLinkId = await package["LatitudeValue"].id();
const latitudeTypeLinkId = await package["Latitude"].id();
const treeIncludeFromCurrentLatitudeTypeLinkId = await package["TreeIncludeFromCurrentLatitude"].id();
const longitudeValueTypeLinkId = await package["LongitudeValue"].id();
const longitudeTypeLinkId = await package["Longitude"].id();
const treeIncludeFromCurrentLongitudeTypeLinkId = await package["TreeIncludeFromCurrentLongitude"].id();
const altitudeAccuracyValueTypeLinkId = await package["AltitudeAccuracyValue"].id();
const altitudeAccuracyTypeLinkId = await package["AltitudeAccuracy"].id();
const treeIncludeFromCurrentAltitudeAccuracyTypeLinkId = await package["TreeIncludeFromCurrentAltitudeAccuracy"].id();
const coordsTypeLinkId = await package["Coords"].id();
const handleUpdateCoordsLinkId = await package["handleUpdateCoords"].id();
const coordsValueLinkId = await package["coordsValue"].id();
```

#### Use idLocal method to get the local id of the link
```ts
const package = new Package({deep});
await package.applyMinilinks();
const positionTypeLinkId = package["Position"].idLocal();
const handleUpdatePositionLinkId = package["handleUpdatePosition"].idLocal();
const positionValueLinkId = package["positionValue"].idLocal();
const timestampTypeLinkId = package["Timestamp"].idLocal();
const timestampValueLinkId = package["timestampValue"].idLocal();
const positionTreeTypeLinkId = package["PositionTree"].idLocal();
const speedValueTypeLinkId = package["SpeedValue"].idLocal();
const speedTypeLinkId = package["Speed"].idLocal();
const treeIncludeFromCurrentSpeedTypeLinkId = package["TreeIncludeFromCurrentSpeed"].idLocal();
const headingValueTypeLinkId = package["HeadingValue"].idLocal();
const headingTypeLinkId = package["Heading"].idLocal();
const treeIncludeFromCurrentHeadingTypeLinkId = package["TreeIncludeFromCurrentHeading"].idLocal();
const accuracyValueTypeLinkId = package["AccuracyValue"].idLocal();
const accuracyTypeLinkId = package["Accuracy"].idLocal();
const treeIncludeFromCurrentAccuracyTypeLinkId = package["TreeIncludeFromCurrentAccuracy"].idLocal();
const altitudeValueTypeLinkId = package["AltitudeValue"].idLocal();
const altitudeTypeLinkId = package["Altitude"].idLocal();
const treeIncludeFromCurrentAltitudeTypeLinkId = package["TreeIncludeFromCurrentAltitude"].idLocal();
const latitudeValueTypeLinkId = package["LatitudeValue"].idLocal();
const latitudeTypeLinkId = package["Latitude"].idLocal();
const treeIncludeFromCurrentLatitudeTypeLinkId = package["TreeIncludeFromCurrentLatitude"].idLocal();
const longitudeValueTypeLinkId = package["LongitudeValue"].idLocal();
const longitudeTypeLinkId = package["Longitude"].idLocal();
const treeIncludeFromCurrentLongitudeTypeLinkId = package["TreeIncludeFromCurrentLongitude"].idLocal();
const altitudeAccuracyValueTypeLinkId = package["AltitudeAccuracyValue"].idLocal();
const altitudeAccuracyTypeLinkId = package["AltitudeAccuracy"].idLocal();
const treeIncludeFromCurrentAltitudeAccuracyTypeLinkId = package["TreeIncludeFromCurrentAltitudeAccuracy"].idLocal();
const coordsTypeLinkId = package["Coords"].idLocal();
const handleUpdateCoordsLinkId = package["handleUpdateCoords"].idLocal();
const coordsValueLinkId = package["coordsValue"].idLocal();
```
#### Use name field to get the name of the link
```ts
const package = new Package({deep});
const position = package["Position"].name;
const handleUpdatePosition = package["handleUpdatePosition"].name;
const positionValue = package["positionValue"].name;
const timestamp = package["Timestamp"].name;
const timestampValue = package["timestampValue"].name;
const positionTree = package["PositionTree"].name;
const speedValue = package["SpeedValue"].name;
const speed = package["Speed"].name;
const treeIncludeFromCurrentSpeed = package["TreeIncludeFromCurrentSpeed"].name;
const headingValue = package["HeadingValue"].name;
const heading = package["Heading"].name;
const treeIncludeFromCurrentHeading = package["TreeIncludeFromCurrentHeading"].name;
const accuracyValue = package["AccuracyValue"].name;
const accuracy = package["Accuracy"].name;
const treeIncludeFromCurrentAccuracy = package["TreeIncludeFromCurrentAccuracy"].name;
const altitudeValue = package["AltitudeValue"].name;
const altitude = package["Altitude"].name;
const treeIncludeFromCurrentAltitude = package["TreeIncludeFromCurrentAltitude"].name;
const latitudeValue = package["LatitudeValue"].name;
const latitude = package["Latitude"].name;
const treeIncludeFromCurrentLatitude = package["TreeIncludeFromCurrentLatitude"].name;
const longitudeValue = package["LongitudeValue"].name;
const longitude = package["Longitude"].name;
const treeIncludeFromCurrentLongitude = package["TreeIncludeFromCurrentLongitude"].name;
const altitudeAccuracyValue = package["AltitudeAccuracyValue"].name;
const altitudeAccuracy = package["AltitudeAccuracy"].name;
const treeIncludeFromCurrentAltitudeAccuracy = package["TreeIncludeFromCurrentAltitudeAccuracy"].name;
const coords = package["Coords"].name;
const handleUpdateCoords = package["handleUpdateCoords"].name;
const coordsValue = package["coordsValue"].name;
```
*/
export class Package extends BasePackage {

  constructor(param: PackageOptions) {
    super({
      ...param,
      name: '@deep-foundation/capacitor-geolocation',
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
      /**
      @example
      #### Use id method to get the id of the Timestamp link
      ```ts
      const package = new Package({deep});
      const timestampTypeLinkId = await package["Timestamp"].id();
      ```
      #### Use localId method to get the local id of the Timestamp link
      ```ts
      const package = new Package({deep});
      const timestampTypeLinkId = await package["Timestamp"].localId();
      ```
      #### Use name field to get the name of the Timestamp link
      ```ts
      const package = new Package({deep});
      const timestamp = await package["Timestamp"].name;
      ```
      */
      public "Timestamp" = this.createEntity("Timestamp");
      /**
      @example
      #### Use id method to get the id of the timestampValue link
      ```ts
      const package = new Package({deep});
      const timestampValueLinkId = await package["timestampValue"].id();
      ```
      #### Use localId method to get the local id of the timestampValue link
      ```ts
      const package = new Package({deep});
      const timestampValueLinkId = await package["timestampValue"].localId();
      ```
      #### Use name field to get the name of the timestampValue link
      ```ts
      const package = new Package({deep});
      const timestampValue = await package["timestampValue"].name;
      ```
      */
      public "timestampValue" = this.createEntity("timestampValue");
      /**
      @example
      #### Use id method to get the id of the PositionTree link
      ```ts
      const package = new Package({deep});
      const positionTreeTypeLinkId = await package["PositionTree"].id();
      ```
      #### Use localId method to get the local id of the PositionTree link
      ```ts
      const package = new Package({deep});
      const positionTreeTypeLinkId = await package["PositionTree"].localId();
      ```
      #### Use name field to get the name of the PositionTree link
      ```ts
      const package = new Package({deep});
      const positionTree = await package["PositionTree"].name;
      ```
      */
      public "PositionTree" = this.createEntity("PositionTree");
      /**
      @example
      #### Use id method to get the id of the SpeedValue link
      ```ts
      const package = new Package({deep});
      const speedValueTypeLinkId = await package["SpeedValue"].id();
      ```
      #### Use localId method to get the local id of the SpeedValue link
      ```ts
      const package = new Package({deep});
      const speedValueTypeLinkId = await package["SpeedValue"].localId();
      ```
      #### Use name field to get the name of the SpeedValue link
      ```ts
      const package = new Package({deep});
      const speedValue = await package["SpeedValue"].name;
      ```
      */
      public "SpeedValue" = this.createEntity("SpeedValue");
      /**
      @example
      #### Use id method to get the id of the Speed link
      ```ts
      const package = new Package({deep});
      const speedTypeLinkId = await package["Speed"].id();
      ```
      #### Use localId method to get the local id of the Speed link
      ```ts
      const package = new Package({deep});
      const speedTypeLinkId = await package["Speed"].localId();
      ```
      #### Use name field to get the name of the Speed link
      ```ts
      const package = new Package({deep});
      const speed = await package["Speed"].name;
      ```
      */
      public "Speed" = this.createEntity("Speed");
      /**
      @example
      #### Use id method to get the id of the TreeIncludeFromCurrentSpeed link
      ```ts
      const package = new Package({deep});
      const treeIncludeFromCurrentSpeedTypeLinkId = await package["TreeIncludeFromCurrentSpeed"].id();
      ```
      #### Use localId method to get the local id of the TreeIncludeFromCurrentSpeed link
      ```ts
      const package = new Package({deep});
      const treeIncludeFromCurrentSpeedTypeLinkId = await package["TreeIncludeFromCurrentSpeed"].localId();
      ```
      #### Use name field to get the name of the TreeIncludeFromCurrentSpeed link
      ```ts
      const package = new Package({deep});
      const treeIncludeFromCurrentSpeed = await package["TreeIncludeFromCurrentSpeed"].name;
      ```
      */
      public "TreeIncludeFromCurrentSpeed" = this.createEntity("TreeIncludeFromCurrentSpeed");
      /**
      @example
      #### Use id method to get the id of the HeadingValue link
      ```ts
      const package = new Package({deep});
      const headingValueTypeLinkId = await package["HeadingValue"].id();
      ```
      #### Use localId method to get the local id of the HeadingValue link
      ```ts
      const package = new Package({deep});
      const headingValueTypeLinkId = await package["HeadingValue"].localId();
      ```
      #### Use name field to get the name of the HeadingValue link
      ```ts
      const package = new Package({deep});
      const headingValue = await package["HeadingValue"].name;
      ```
      */
      public "HeadingValue" = this.createEntity("HeadingValue");
      /**
      @example
      #### Use id method to get the id of the Heading link
      ```ts
      const package = new Package({deep});
      const headingTypeLinkId = await package["Heading"].id();
      ```
      #### Use localId method to get the local id of the Heading link
      ```ts
      const package = new Package({deep});
      const headingTypeLinkId = await package["Heading"].localId();
      ```
      #### Use name field to get the name of the Heading link
      ```ts
      const package = new Package({deep});
      const heading = await package["Heading"].name;
      ```
      */
      public "Heading" = this.createEntity("Heading");
      /**
      @example
      #### Use id method to get the id of the TreeIncludeFromCurrentHeading link
      ```ts
      const package = new Package({deep});
      const treeIncludeFromCurrentHeadingTypeLinkId = await package["TreeIncludeFromCurrentHeading"].id();
      ```
      #### Use localId method to get the local id of the TreeIncludeFromCurrentHeading link
      ```ts
      const package = new Package({deep});
      const treeIncludeFromCurrentHeadingTypeLinkId = await package["TreeIncludeFromCurrentHeading"].localId();
      ```
      #### Use name field to get the name of the TreeIncludeFromCurrentHeading link
      ```ts
      const package = new Package({deep});
      const treeIncludeFromCurrentHeading = await package["TreeIncludeFromCurrentHeading"].name;
      ```
      */
      public "TreeIncludeFromCurrentHeading" = this.createEntity("TreeIncludeFromCurrentHeading");
      /**
      @example
      #### Use id method to get the id of the AccuracyValue link
      ```ts
      const package = new Package({deep});
      const accuracyValueTypeLinkId = await package["AccuracyValue"].id();
      ```
      #### Use localId method to get the local id of the AccuracyValue link
      ```ts
      const package = new Package({deep});
      const accuracyValueTypeLinkId = await package["AccuracyValue"].localId();
      ```
      #### Use name field to get the name of the AccuracyValue link
      ```ts
      const package = new Package({deep});
      const accuracyValue = await package["AccuracyValue"].name;
      ```
      */
      public "AccuracyValue" = this.createEntity("AccuracyValue");
      /**
      @example
      #### Use id method to get the id of the Accuracy link
      ```ts
      const package = new Package({deep});
      const accuracyTypeLinkId = await package["Accuracy"].id();
      ```
      #### Use localId method to get the local id of the Accuracy link
      ```ts
      const package = new Package({deep});
      const accuracyTypeLinkId = await package["Accuracy"].localId();
      ```
      #### Use name field to get the name of the Accuracy link
      ```ts
      const package = new Package({deep});
      const accuracy = await package["Accuracy"].name;
      ```
      */
      public "Accuracy" = this.createEntity("Accuracy");
      /**
      @example
      #### Use id method to get the id of the TreeIncludeFromCurrentAccuracy link
      ```ts
      const package = new Package({deep});
      const treeIncludeFromCurrentAccuracyTypeLinkId = await package["TreeIncludeFromCurrentAccuracy"].id();
      ```
      #### Use localId method to get the local id of the TreeIncludeFromCurrentAccuracy link
      ```ts
      const package = new Package({deep});
      const treeIncludeFromCurrentAccuracyTypeLinkId = await package["TreeIncludeFromCurrentAccuracy"].localId();
      ```
      #### Use name field to get the name of the TreeIncludeFromCurrentAccuracy link
      ```ts
      const package = new Package({deep});
      const treeIncludeFromCurrentAccuracy = await package["TreeIncludeFromCurrentAccuracy"].name;
      ```
      */
      public "TreeIncludeFromCurrentAccuracy" = this.createEntity("TreeIncludeFromCurrentAccuracy");
      /**
      @example
      #### Use id method to get the id of the AltitudeValue link
      ```ts
      const package = new Package({deep});
      const altitudeValueTypeLinkId = await package["AltitudeValue"].id();
      ```
      #### Use localId method to get the local id of the AltitudeValue link
      ```ts
      const package = new Package({deep});
      const altitudeValueTypeLinkId = await package["AltitudeValue"].localId();
      ```
      #### Use name field to get the name of the AltitudeValue link
      ```ts
      const package = new Package({deep});
      const altitudeValue = await package["AltitudeValue"].name;
      ```
      */
      public "AltitudeValue" = this.createEntity("AltitudeValue");
      /**
      @example
      #### Use id method to get the id of the Altitude link
      ```ts
      const package = new Package({deep});
      const altitudeTypeLinkId = await package["Altitude"].id();
      ```
      #### Use localId method to get the local id of the Altitude link
      ```ts
      const package = new Package({deep});
      const altitudeTypeLinkId = await package["Altitude"].localId();
      ```
      #### Use name field to get the name of the Altitude link
      ```ts
      const package = new Package({deep});
      const altitude = await package["Altitude"].name;
      ```
      */
      public "Altitude" = this.createEntity("Altitude");
      /**
      @example
      #### Use id method to get the id of the TreeIncludeFromCurrentAltitude link
      ```ts
      const package = new Package({deep});
      const treeIncludeFromCurrentAltitudeTypeLinkId = await package["TreeIncludeFromCurrentAltitude"].id();
      ```
      #### Use localId method to get the local id of the TreeIncludeFromCurrentAltitude link
      ```ts
      const package = new Package({deep});
      const treeIncludeFromCurrentAltitudeTypeLinkId = await package["TreeIncludeFromCurrentAltitude"].localId();
      ```
      #### Use name field to get the name of the TreeIncludeFromCurrentAltitude link
      ```ts
      const package = new Package({deep});
      const treeIncludeFromCurrentAltitude = await package["TreeIncludeFromCurrentAltitude"].name;
      ```
      */
      public "TreeIncludeFromCurrentAltitude" = this.createEntity("TreeIncludeFromCurrentAltitude");
      /**
      @example
      #### Use id method to get the id of the LatitudeValue link
      ```ts
      const package = new Package({deep});
      const latitudeValueTypeLinkId = await package["LatitudeValue"].id();
      ```
      #### Use localId method to get the local id of the LatitudeValue link
      ```ts
      const package = new Package({deep});
      const latitudeValueTypeLinkId = await package["LatitudeValue"].localId();
      ```
      #### Use name field to get the name of the LatitudeValue link
      ```ts
      const package = new Package({deep});
      const latitudeValue = await package["LatitudeValue"].name;
      ```
      */
      public "LatitudeValue" = this.createEntity("LatitudeValue");
      /**
      @example
      #### Use id method to get the id of the Latitude link
      ```ts
      const package = new Package({deep});
      const latitudeTypeLinkId = await package["Latitude"].id();
      ```
      #### Use localId method to get the local id of the Latitude link
      ```ts
      const package = new Package({deep});
      const latitudeTypeLinkId = await package["Latitude"].localId();
      ```
      #### Use name field to get the name of the Latitude link
      ```ts
      const package = new Package({deep});
      const latitude = await package["Latitude"].name;
      ```
      */
      public "Latitude" = this.createEntity("Latitude");
      /**
      @example
      #### Use id method to get the id of the TreeIncludeFromCurrentLatitude link
      ```ts
      const package = new Package({deep});
      const treeIncludeFromCurrentLatitudeTypeLinkId = await package["TreeIncludeFromCurrentLatitude"].id();
      ```
      #### Use localId method to get the local id of the TreeIncludeFromCurrentLatitude link
      ```ts
      const package = new Package({deep});
      const treeIncludeFromCurrentLatitudeTypeLinkId = await package["TreeIncludeFromCurrentLatitude"].localId();
      ```
      #### Use name field to get the name of the TreeIncludeFromCurrentLatitude link
      ```ts
      const package = new Package({deep});
      const treeIncludeFromCurrentLatitude = await package["TreeIncludeFromCurrentLatitude"].name;
      ```
      */
      public "TreeIncludeFromCurrentLatitude" = this.createEntity("TreeIncludeFromCurrentLatitude");
      /**
      @example
      #### Use id method to get the id of the LongitudeValue link
      ```ts
      const package = new Package({deep});
      const longitudeValueTypeLinkId = await package["LongitudeValue"].id();
      ```
      #### Use localId method to get the local id of the LongitudeValue link
      ```ts
      const package = new Package({deep});
      const longitudeValueTypeLinkId = await package["LongitudeValue"].localId();
      ```
      #### Use name field to get the name of the LongitudeValue link
      ```ts
      const package = new Package({deep});
      const longitudeValue = await package["LongitudeValue"].name;
      ```
      */
      public "LongitudeValue" = this.createEntity("LongitudeValue");
      /**
      @example
      #### Use id method to get the id of the Longitude link
      ```ts
      const package = new Package({deep});
      const longitudeTypeLinkId = await package["Longitude"].id();
      ```
      #### Use localId method to get the local id of the Longitude link
      ```ts
      const package = new Package({deep});
      const longitudeTypeLinkId = await package["Longitude"].localId();
      ```
      #### Use name field to get the name of the Longitude link
      ```ts
      const package = new Package({deep});
      const longitude = await package["Longitude"].name;
      ```
      */
      public "Longitude" = this.createEntity("Longitude");
      /**
      @example
      #### Use id method to get the id of the TreeIncludeFromCurrentLongitude link
      ```ts
      const package = new Package({deep});
      const treeIncludeFromCurrentLongitudeTypeLinkId = await package["TreeIncludeFromCurrentLongitude"].id();
      ```
      #### Use localId method to get the local id of the TreeIncludeFromCurrentLongitude link
      ```ts
      const package = new Package({deep});
      const treeIncludeFromCurrentLongitudeTypeLinkId = await package["TreeIncludeFromCurrentLongitude"].localId();
      ```
      #### Use name field to get the name of the TreeIncludeFromCurrentLongitude link
      ```ts
      const package = new Package({deep});
      const treeIncludeFromCurrentLongitude = await package["TreeIncludeFromCurrentLongitude"].name;
      ```
      */
      public "TreeIncludeFromCurrentLongitude" = this.createEntity("TreeIncludeFromCurrentLongitude");
      /**
      @example
      #### Use id method to get the id of the AltitudeAccuracyValue link
      ```ts
      const package = new Package({deep});
      const altitudeAccuracyValueTypeLinkId = await package["AltitudeAccuracyValue"].id();
      ```
      #### Use localId method to get the local id of the AltitudeAccuracyValue link
      ```ts
      const package = new Package({deep});
      const altitudeAccuracyValueTypeLinkId = await package["AltitudeAccuracyValue"].localId();
      ```
      #### Use name field to get the name of the AltitudeAccuracyValue link
      ```ts
      const package = new Package({deep});
      const altitudeAccuracyValue = await package["AltitudeAccuracyValue"].name;
      ```
      */
      public "AltitudeAccuracyValue" = this.createEntity("AltitudeAccuracyValue");
      /**
      @example
      #### Use id method to get the id of the AltitudeAccuracy link
      ```ts
      const package = new Package({deep});
      const altitudeAccuracyTypeLinkId = await package["AltitudeAccuracy"].id();
      ```
      #### Use localId method to get the local id of the AltitudeAccuracy link
      ```ts
      const package = new Package({deep});
      const altitudeAccuracyTypeLinkId = await package["AltitudeAccuracy"].localId();
      ```
      #### Use name field to get the name of the AltitudeAccuracy link
      ```ts
      const package = new Package({deep});
      const altitudeAccuracy = await package["AltitudeAccuracy"].name;
      ```
      */
      public "AltitudeAccuracy" = this.createEntity("AltitudeAccuracy");
      /**
      @example
      #### Use id method to get the id of the TreeIncludeFromCurrentAltitudeAccuracy link
      ```ts
      const package = new Package({deep});
      const treeIncludeFromCurrentAltitudeAccuracyTypeLinkId = await package["TreeIncludeFromCurrentAltitudeAccuracy"].id();
      ```
      #### Use localId method to get the local id of the TreeIncludeFromCurrentAltitudeAccuracy link
      ```ts
      const package = new Package({deep});
      const treeIncludeFromCurrentAltitudeAccuracyTypeLinkId = await package["TreeIncludeFromCurrentAltitudeAccuracy"].localId();
      ```
      #### Use name field to get the name of the TreeIncludeFromCurrentAltitudeAccuracy link
      ```ts
      const package = new Package({deep});
      const treeIncludeFromCurrentAltitudeAccuracy = await package["TreeIncludeFromCurrentAltitudeAccuracy"].name;
      ```
      */
      public "TreeIncludeFromCurrentAltitudeAccuracy" = this.createEntity("TreeIncludeFromCurrentAltitudeAccuracy");
      /**
      @example
      #### Use id method to get the id of the Coords link
      ```ts
      const package = new Package({deep});
      const coordsTypeLinkId = await package["Coords"].id();
      ```
      #### Use localId method to get the local id of the Coords link
      ```ts
      const package = new Package({deep});
      const coordsTypeLinkId = await package["Coords"].localId();
      ```
      #### Use name field to get the name of the Coords link
      ```ts
      const package = new Package({deep});
      const coords = await package["Coords"].name;
      ```
      */
      public "Coords" = this.createEntity("Coords");
      /**
      @example
      #### Use id method to get the id of the handleUpdateCoords link
      ```ts
      const package = new Package({deep});
      const handleUpdateCoordsLinkId = await package["handleUpdateCoords"].id();
      ```
      #### Use localId method to get the local id of the handleUpdateCoords link
      ```ts
      const package = new Package({deep});
      const handleUpdateCoordsLinkId = await package["handleUpdateCoords"].localId();
      ```
      #### Use name field to get the name of the handleUpdateCoords link
      ```ts
      const package = new Package({deep});
      const handleUpdateCoords = await package["handleUpdateCoords"].name;
      ```
      */
      public "handleUpdateCoords" = this.createEntity("handleUpdateCoords");
      /**
      @example
      #### Use id method to get the id of the coordsValue link
      ```ts
      const package = new Package({deep});
      const coordsValueLinkId = await package["coordsValue"].id();
      ```
      #### Use localId method to get the local id of the coordsValue link
      ```ts
      const package = new Package({deep});
      const coordsValueLinkId = await package["coordsValue"].localId();
      ```
      #### Use name field to get the name of the coordsValue link
      ```ts
      const package = new Package({deep});
      const coordsValue = await package["coordsValue"].name;
      ```
      */
      public "coordsValue" = this.createEntity("coordsValue");

}

export type PackageOptions = Omit<BasePackageOptions, 'name'>;
