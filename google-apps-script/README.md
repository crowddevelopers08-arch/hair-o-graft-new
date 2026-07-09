# Google Sheet sync setup

1. Open (or create) the Google Sheet you want submissions saved to.
2. Extensions -> Apps Script.
3. Delete the placeholder code and paste in `Code.gs` from this folder.
4. Deploy -> New deployment -> type "Web app".
   - Execute as: **Me**
   - Who has access: **Anyone**
5. Click Deploy, authorize the permissions prompt, then copy the **Web app URL**.
6. Set that URL as an environment variable for the Next.js app (`.env.local` locally, and in your host's env settings):
   ```
   GOOGLE_APPS_SCRIPT_URL=https://script.google.com/macros/s/XXXXXXXX/exec
   ```
7. Redeploy the site. New form submissions will now append a row to the "Submissions" sheet tab automatically.

Whenever you edit `Code.gs`, you must create a **new deployment** (or "Manage deployments" -> edit -> new version) for the changes to take effect on the existing URL.
