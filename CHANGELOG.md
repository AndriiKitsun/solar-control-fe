# solar-control-fe

## 1.6.0

### Minor Changes

- [#53](https://github.com/AndriiKitsun/solar-control-fe/pull/53) [`7adfb00`](https://github.com/AndriiKitsun/solar-control-fe/commit/7adfb0095ac0b11b83a938751660f4d38bbe1d28) Thanks [@AndriiKitsun](https://github.com/AndriiKitsun)! - SC-141: Add automation flag to Asic settings component

- [#56](https://github.com/AndriiKitsun/solar-control-fe/pull/56) [`937d146`](https://github.com/AndriiKitsun/solar-control-fe/commit/937d146d44bc550545b5c56409dc358ba9f82c6a) Thanks [@AndriiKitsun](https://github.com/AndriiKitsun)! - SC-129: Asic scaling UAT testing

  - Adjust the spacing between the Asic Settings and Asic Details panels
  - Fix the bug where the Asci Details panel does not disappear when the Summary API call finishes with an error
  - Reduce the vertical padding between log items in the Log component

- [#55](https://github.com/AndriiKitsun/solar-control-fe/pull/55) [`65f3f08`](https://github.com/AndriiKitsun/solar-control-fe/commit/65f3f08fb87a1c4a6e0e0d031b400fbad7264774) Thanks [@AndriiKitsun](https://github.com/AndriiKitsun)! - SC-138: Add separate tab for control logs

- [#54](https://github.com/AndriiKitsun/solar-control-fe/pull/54) [`b268279`](https://github.com/AndriiKitsun/solar-control-fe/commit/b268279c494b04315388bc8836d9e1ba04fe90cc) Thanks [@AndriiKitsun](https://github.com/AndriiKitsun)! - SC-110: Implement Control tab

## 1.5.0

### Minor Changes

- [#51](https://github.com/AndriiKitsun/solar-control-fe/pull/51) [`0dc9918`](https://github.com/AndriiKitsun/solar-control-fe/commit/0dc99184a72041a1e78b39cfc8bf815ed9f09952) Thanks [@AndriiKitsun](https://github.com/AndriiKitsun)! - SC-137: Add checkbox for turning off Asics after T2 zone end

## 1.4.0

### Minor Changes

- [#49](https://github.com/AndriiKitsun/solar-control-fe/pull/49) [`60aece9`](https://github.com/AndriiKitsun/solar-control-fe/commit/60aece920a8c0a1d568c5dfd1a30b895d2142ab8) Thanks [@AndriiKitsun](https://github.com/AndriiKitsun)! - SC-125: Add checkbox to enable Asics during T2 zone

- [#48](https://github.com/AndriiKitsun/solar-control-fe/pull/48) [`5208c48`](https://github.com/AndriiKitsun/solar-control-fe/commit/5208c48f911a981ee4368ab32fc56416f1ba8a52) Thanks [@AndriiKitsun](https://github.com/AndriiKitsun)! - SC-130: Migrate DC Battery Voltage protection rule to the DC Battery Avg Votlage

### Patch Changes

- [#48](https://github.com/AndriiKitsun/solar-control-fe/pull/48) [`5208c48`](https://github.com/AndriiKitsun/solar-control-fe/commit/5208c48f911a981ee4368ab32fc56416f1ba8a52) Thanks [@AndriiKitsun](https://github.com/AndriiKitsun)! - SC-128: Power button does not reflect current power state

## 1.3.0

### Minor Changes

- [#37](https://github.com/AndriiKitsun/solar-control-fe/pull/37) [`3c0d011`](https://github.com/AndriiKitsun/solar-control-fe/commit/3c0d0111873690bf8fb95ced9dcaeee048d1f61c) Thanks [@AndriiKitsun](https://github.com/AndriiKitsun)! - SC-101: Implement protection settings page

- [#46](https://github.com/AndriiKitsun/solar-control-fe/pull/46) [`dd76794`](https://github.com/AndriiKitsun/solar-control-fe/commit/dd76794c8e15111f7db3d4194d580e8c88496aed) Thanks [@AndriiKitsun](https://github.com/AndriiKitsun)! - SC-118: Implement protection alarms

- [#41](https://github.com/AndriiKitsun/solar-control-fe/pull/41) [`7e99568`](https://github.com/AndriiKitsun/solar-control-fe/commit/7e99568e6047826092d99f93f237d8aa61660e0c) Thanks [@AndriiKitsun](https://github.com/AndriiKitsun)! - SC-93: Block UI on idle

- [#39](https://github.com/AndriiKitsun/solar-control-fe/pull/39) [`b341d16`](https://github.com/AndriiKitsun/solar-control-fe/commit/b341d16397328828b18ff1e32a1fc2eeca695430) Thanks [@AndriiKitsun](https://github.com/AndriiKitsun)! - SC-91: Add currency calculation

- [#45](https://github.com/AndriiKitsun/solar-control-fe/pull/45) [`ebd6858`](https://github.com/AndriiKitsun/solar-control-fe/commit/ebd6858543d30eddd20febf54c2cafe9f5925c5f) Thanks [@AndriiKitsun](https://github.com/AndriiKitsun)! - SC-117: Add log component

- [#43](https://github.com/AndriiKitsun/solar-control-fe/pull/43) [`40190a5`](https://github.com/AndriiKitsun/solar-control-fe/commit/40190a597786751a731ab604956052ce5a490fb6) Thanks [@AndriiKitsun](https://github.com/AndriiKitsun)! - SC-105: Integrate Protection page with BE

- [#40](https://github.com/AndriiKitsun/solar-control-fe/pull/40) [`956a659`](https://github.com/AndriiKitsun/solar-control-fe/commit/956a6598bfa8ef07a90b69979a5efcf8caba9507) Thanks [@AndriiKitsun](https://github.com/AndriiKitsun)! - SC-86: Add currency input to the Sensors table

- [#44](https://github.com/AndriiKitsun/solar-control-fe/pull/44) [`d0d7c8d`](https://github.com/AndriiKitsun/solar-control-fe/commit/d0d7c8dafdd8b5d5d4fa51395ef949e941464472) Thanks [@AndriiKitsun](https://github.com/AndriiKitsun)! - SC-112: Integrate protection rules with new BE endpoints

  Protection Rules:

  - Update BE Integration for the protection page
  - Delete protection actions. Add a checkbox for enable/disable rule instead of actions
  - Add error toast for protection rules fetch

  Sensors:

  - Migrate web socket to SSE

  Misc:

  - Update packages

  Fixes:

  - Disable form on Settings page when BE error occurs
  - Prevent completing observable for fetching Asics summary when BE error occurs

### Patch Changes

- [#42](https://github.com/AndriiKitsun/solar-control-fe/pull/42) [`173a0d1`](https://github.com/AndriiKitsun/solar-control-fe/commit/173a0d192eca63b355131571ee25acf0b3a400ab) Thanks [@AndriiKitsun](https://github.com/AndriiKitsun)! - SC-97: Power button enabled when error recieved

## 1.2.0

### Minor Changes

- [#35](https://github.com/AndriiKitsun/solar-control-fe/pull/35) [`3cbcc9e`](https://github.com/AndriiKitsun/solar-control-fe/commit/3cbcc9e7c5a8176f0e6d741ef1094e54211e1a96) Thanks [@AndriiKitsun](https://github.com/AndriiKitsun)! - SC-100: Update ESP schema

## 1.1.0

### Minor Changes

- [#24](https://github.com/AndriiKitsun/solar-control-fe/pull/24) [`268438d`](https://github.com/AndriiKitsun/solar-control-fe/commit/268438da54362363020c9ec23235d556c0df82d1) Thanks [@AndriiKitsun](https://github.com/AndriiKitsun)! - SC-65: Implement Add/Edit form on Asic page

- [#20](https://github.com/AndriiKitsun/solar-control-fe/pull/20) [`b62172f`](https://github.com/AndriiKitsun/solar-control-fe/commit/b62172f1f6773f9b6455cae989e71a43d5fe74e0) Thanks [@AndriiKitsun](https://github.com/AndriiKitsun)! - SC-66: Add confirmation dialog for reset energy button

- [#29](https://github.com/AndriiKitsun/solar-control-fe/pull/29) [`15e29c5`](https://github.com/AndriiKitsun/solar-control-fe/commit/15e29c57f6d87f513f190697f780d62746f09403) Thanks [@AndriiKitsun](https://github.com/AndriiKitsun)! - SC-69: [Asics] Render firmware data on specified interval

- [#21](https://github.com/AndriiKitsun/solar-control-fe/pull/21) [`0640e24`](https://github.com/AndriiKitsun/solar-control-fe/commit/0640e24d2fa5ea732a099e9b6af389d5d9dec1ee) Thanks [@AndriiKitsun](https://github.com/AndriiKitsun)! - Delete Barrel exports to reduce bundle size

- [#27](https://github.com/AndriiKitsun/solar-control-fe/pull/27) [`bf676a3`](https://github.com/AndriiKitsun/solar-control-fe/commit/bf676a3ce6266df7a1ca05ac6e64848ff09df1a5) Thanks [@AndriiKitsun](https://github.com/AndriiKitsun)! - SC-82: Migrate to OnPush change detection strategy

- [#26](https://github.com/AndriiKitsun/solar-control-fe/pull/26) [`363428e`](https://github.com/AndriiKitsun/solar-control-fe/commit/363428e8f114e8fb8612a1b14394960cd3940520) Thanks [@AndriiKitsun](https://github.com/AndriiKitsun)! - SC-85: Adjust values formatting on Sensors table

- [#28](https://github.com/AndriiKitsun/solar-control-fe/pull/28) [`f245116`](https://github.com/AndriiKitsun/solar-control-fe/commit/f24511610d582d171c7088ca6c4c98f2c5355438) Thanks [@AndriiKitsun](https://github.com/AndriiKitsun)! - SC-71: [Asics] Integrate sidebar with BE endpoint

- [#22](https://github.com/AndriiKitsun/solar-control-fe/pull/22) [`11adc26`](https://github.com/AndriiKitsun/solar-control-fe/commit/11adc26b8f0cada88b89f4e197de09f720746794) Thanks [@AndriiKitsun](https://github.com/AndriiKitsun)! - SC-67: Disable Sensors content when WebSocket connection changed

- [#32](https://github.com/AndriiKitsun/solar-control-fe/pull/32) [`49dd93b`](https://github.com/AndriiKitsun/solar-control-fe/commit/49dd93bd53b7ebc734270b4ceab3b399568b84d6) Thanks [@AndriiKitsun](https://github.com/AndriiKitsun)! - SC-83: [Asics] Add duration time and current perf preset

- [#31](https://github.com/AndriiKitsun/solar-control-fe/pull/31) [`0767f1b`](https://github.com/AndriiKitsun/solar-control-fe/commit/0767f1b7edeed352b0d7fd077cb6e9d9d3f7eef3) Thanks [@AndriiKitsun](https://github.com/AndriiKitsun)! - SC-70: [Asics] Integrate forms with BE

### Patch Changes

- [#25](https://github.com/AndriiKitsun/solar-control-fe/pull/25) [`e6e6a6e`](https://github.com/AndriiKitsun/solar-control-fe/commit/e6e6a6e29e99746595e9e8502e70f02428c972e2) Thanks [@AndriiKitsun](https://github.com/AndriiKitsun)! - SC-81: Selected menu loses focus on menu blur

## 1.0.0

### Major Changes

- [#18](https://github.com/AndriiKitsun/solar-control-fe/pull/18) [`d1bb232`](https://github.com/AndriiKitsun/solar-control-fe/commit/d1bb2320e3b5fa38ff891e68194b9b16cb943818) Thanks [@AndriiKitsun](https://github.com/AndriiKitsun)! - Init release

  ## What's Changed

  - SC-20: Add ESLint & Prettier & Husky & CI by @AndriiKitsun in https://github.com/AndriiKitsun/solar-control-fe/pull/1
  - SC-21: Implement basic layout by @AndriiKitsun in https://github.com/AndriiKitsun/solar-control-fe/pull/2
  - SC-34: Add theme switcher by @AndriiKitsun in https://github.com/AndriiKitsun/solar-control-fe/pull/3
  - SC-39: Prevent merge if CI fails by @AndriiKitsun in https://github.com/AndriiKitsun/solar-control-fe/pull/4
  - SC-38: Implement main menu component by @AndriiKitsun in https://github.com/AndriiKitsun/solar-control-fe/pull/5
  - SC-40: Create CD pipeline to deploy web app to GitHub pages by @AndriiKitsun in https://github.com/AndriiKitsun/solar-control-fe/pull/6
  - SC-46: Add main TabBar navigation component by @AndriiKitsun in https://github.com/AndriiKitsun/solar-control-fe/pull/7
  - SC-50: Wrong commit message after deploy job by @AndriiKitsun in https://github.com/AndriiKitsun/solar-control-fe/pull/8
  - SC-42: Config project linters and formatters by @AndriiKitsun in https://github.com/AndriiKitsun/solar-control-fe/pull/9
  - SC-41: [Miners] Add menu navigation by @AndriiKitsun in https://github.com/AndriiKitsun/solar-control-fe/pull/10
  - SC-51: Implement PZEM sensors table by @AndriiKitsun in https://github.com/AndriiKitsun/solar-control-fe/pull/11
  - SC-47: Integrate i18n package by @AndriiKitsun in https://github.com/AndriiKitsun/solar-control-fe/pull/12
  - SC-47: Make lang path relative by @AndriiKitsun in https://github.com/AndriiKitsun/solar-control-fe/pull/13
  - SC-53: Add time formatting based on 24h time by @AndriiKitsun in https://github.com/AndriiKitsun/solar-control-fe/pull/14
  - SC-52: Integrate sensor table with BE websocket by @AndriiKitsun in https://github.com/AndriiKitsun/solar-control-fe/pull/15
  - SC-54: Add reset counter button to the Sensors page by @AndriiKitsun in https://github.com/AndriiKitsun/solar-control-fe/pull/16
  - SC-57: Integrate SonarQube ESLint config by @AndriiKitsun in https://github.com/AndriiKitsun/solar-control-fe/pull/17

  ## New Contributors

  - @AndriiKitsun made their first contribution in https://github.com/AndriiKitsun/solar-control-fe/pull/1

  **Full Changelog**: https://github.com/AndriiKitsun/solar-control-fe/commits/v1.0.0
