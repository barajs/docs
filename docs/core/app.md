---
id: app
title: App
---

Bara Application is the central register for Portion and Trigger.

For example, this is the basic Bara Express application.

```typescript
import { app, act } from "@barajs/core";
import { ExpressServer, whenExpressReady } from "@barajs/express";

const MyApp = app({
  portions: [ExpressServer()],
  trigger: [
    whenExpressReady(
      act(() => {
        console.log("Express is started!");
      })
    )
  ]
});
```
