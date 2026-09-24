# Safety and security boundary

GOATnote Disposition is an educational demonstration using synthetic messages.
Do not enter protected health information, credentials or real patient traces.
Do not connect it to patient care, prescribing or emergency dispatch.

The live Next.js server binds to loopback and checks the request Host, Origin
and local request marker. These checks are not production authentication and
do not authenticate other software running under the same operating-system user.
Do not expose the development server through a public tunnel or reverse proxy.

A live submission sends the synthetic message to the configured Anthropic
endpoint. Local request/response and accounting records retain synthetic inputs
and outputs. Loopback hosting does not make inference offline or establish
privacy compliance. Keep `.env`, runtime records and credentials untracked;
retain accounting records across restarts.

The static classroom viewer displays saved results, makes no model calls and
accepts no patient text. If hosted, its hosting provider may receive ordinary
web-request metadata. It remains a research demonstration.

The current workflow has no tool that places orders, sends patient messages,
books care or confirms a clinician handoff. Any future clinical integration
requires a separate authorization, privacy and safety design.

Report software vulnerabilities privately to the repository owner. Do not post
patient information, credentials or sensitive reproduction details in public
issues. See [disclosures](DISCLOSURES.md).
