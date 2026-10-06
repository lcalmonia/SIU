# SIU Project Monitoring System

Deployment-ready foundation for the Survey and Investigation Unit (SIU) project monitoring application.

## Storage architecture

- **Netlify Database (Postgres):** structured SIU records, users/roles, projects, investigation results, workflow status, and audit data.
- **Netlify Blobs:** uploaded documents, images, and other unstructured project attachments.
- **Netlify Functions:** server-side APIs for database/blob access. Secrets and service credentials are never stored in the frontend.

No demo names, sample projects, placeholder positions, or seeded records are included.

## Local development

```bash
npm install
netlify dev
```

## Build

```bash
npm run build
```

The first production deploy should create/provision the Netlify Database through the Netlify project and then apply the committed migrations.

## Notes

Keep all production credentials in Netlify environment variables / platform-managed integrations. Do not use browser localStorage as the system of record for SIU data.
