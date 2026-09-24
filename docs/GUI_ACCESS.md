# Local demonstration and offline review

The [saved case viewer](../publication/medgemma-case-review/index.html) opens
directly in a browser without dependencies, a server or API key. It displays
historical outputs in a branded classroom derivative and makes no model calls.

## Run the live application

From the repository root, use Node 22.18.0 (the `.nvmrc` version), or another
version supported by `package.json`. Then:

```bash
npm ci
npm run review:build
```

Set `ANTHROPIC_API_KEY` in the server environment or repository-root `.env`.
The key stays on the server. The provider account must be authorized for the
configured model and settings; this repository does not provide model access.

```bash
npm run demo:check
npm run demo
```

After the server reports ready, open
[http://localhost:4120/stripped](http://localhost:4120/stripped).
Localhost means the computer running the server. Keep the launcher terminal
open and stop it with **Ctrl+C**.

`demo:check` checks local prerequisites and port availability. It does not
validate the key with the provider or make a model call. Opening the page also
makes no model call. **Get disposition** sends one paid provider request using
the local demo allowance. Use only synthetic messages.

## Read the result

The response is one route and a short rationale. Expand **Request & response
trace** for the request, returned text, usage, timing and run/provider IDs.
Editing clears the old answer; every submission is independent. A routing label
does not create a clinician handoff or deliver treatment.

Requests and responses are retained locally under
`apps/evaluation/.local/stripped-disposition/`. Keep accounting records across
restarts. Do not commit them or use them for real patient information.

## Troubleshooting

- **Missing dependencies or build:** run `npm ci` and `npm run review:build`
  from this repository's root. Rebuild after source changes.
- **Port 4120 occupied:** stop the server you own on that port and retry. The
  launcher does not stop other processes or select another port.
- **Authentication or model access rejected:** preserve the error and use the
  saved case viewer. A replacement model is a different experiment.
- **No provider key available:** use `npm run demo:offline` to print saved-file
  locations, or open the standalone HTML directly.

The local server binds to `127.0.0.1`. Do not expose it publicly. Live message
text travels to Anthropic, so loopback hosting is not offline inference.
See [security](../SECURITY.md) and [disclosures](../DISCLOSURES.md).
