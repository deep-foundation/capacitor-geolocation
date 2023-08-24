[![npm](https://img.shields.io/npm/v/@deep-foundation/capacitor-geolocation.svg)](https://www.npmjs.com/package/@deep-foundation/capacitor-geolocation)
[![Gitpod](https://img.shields.io/badge/Gitpod-ready--to--code-blue?logo=gitpod)](https://gitpod.io/#https://github.com/deep-foundation/capacitor-geolocation)
[![Discord](https://badgen.net/badge/icon/discord?icon=discord&label&color=purple)](https://discord.gg/deep-foundation)

Provides links based on [`@capacitor/geolocation`](https://www.npmjs.com/package/@capacitor/geolocation) and typescript library to simplify integration with this deep package

# Table Of Contents
<!-- TABLE_OF_CONTENTS_START -->
- [Table Of Contents](#table-of-contents)
- [Prerequisitions](#prerequisitions)
- [Usage](#usage)
- [Geolocation Object Value](#geolocation-object-value)
- [Update Handling](#update-handling)
- [Library](#library)
  - [Library Usage](#library-usage)
- [Contribution](#contribution)

<!-- TABLE_OF_CONTENTS_END -->

# Prerequisitions

- Install this package in your deep by using npm-packager
- Give permissions to this package

# Usage

1. Insert a link of type [`Position`]
2. Change its object value to the object with properties described in [Geolocation Object Value](#geolocation-object-value) and this update will be handled by the [`UpdateHandler`](https://freephoenix888.github.io/object-to-links-async-converter/classes/Package.html#UpdateHandler) to represent [`Position`] object value as links
   or  
   Insert a link of any type with any property name from [Geolocation Object Value](#geolocation-object-value) from [`Position`] link to the same [`Position`] link and set its value to the value of the corresponding property of the [`Position`] object value. For example insert [`GeolocationAcceleration`] from [`Position`] to [`Position`] and [`GeolocationAccelerationX`] from [`GeolocationAcceleration`] to [`GeolocationAcceleration`]

# Geolocation Object Value

The [`Position`] link can have object value.  
No one field is required. You can add any fields as you want. Only the fields that are supported by this package will be represented as links  
- [**Supported fields can be found in the `Geolocation` interface**](https://deep-foundation.github.io/capacitor-geolocation/types/GeolocationInfo.html)  
- [**Example of Geolocation Object Value**](https://deep-foundation.github.io/capacitor-geolocation/types/GeolocationInfo.html#md:geolocation-info-example)

# Update Handling

[`Position`] updates are handled by the [`UpdateHandler`](https://freephoenix888.github.io/object-to-links-async-converter/classes/Package.html#UpdateHandler) to represent [`Position`] object value as links

# Library
## Library Usage
See [Documentation] for examples and API

# Contribution

Feel free to contribute. Please fork the repository and submit a pull request for any bugs, improvements, or features.


[`Position`]: https://deep-foundation.github.io/capacitor-geolocation/classes/Package.html#Position
[Documentation]: https://deep-foundation.github.io/capacitor-geolocation/