---
'solar-control-fe': minor
---

SC-112: Integrate protection rules with new BE endpoints

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
