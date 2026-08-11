const openSourceProducts = {
  "file-sharing": {
    title: "File Sharing",
    platform: "EspoCRM",
    category: "Productivity",
    maintainer: "Kharg",
    repository: "https://github.com/Kharg/file-sharing",
    lead: "An EspoCRM extension for creating controlled public links to files stored in the CRM.",
    description: "File Sharing adds a dedicated File Sharing entity to EspoCRM. A user can attach a file, publish a public link and decide how long or how many times that link remains available. It can serve the file as a direct download or show a browser preview when the attachment type supports it.",
    features: [
      "Create a public file-sharing record inside EspoCRM.",
      "Set an expiry date for access to the shared file.",
      "Limit the number of permitted downloads.",
      "Choose direct download or in-browser preview behaviour.",
      "Use the included scheduled job to mark expired shares accordingly."
    ],
    requirements: [
      "EspoCRM 8.1 or newer.",
      "Administrator access to install an EspoCRM extension.",
      "Access to the Administration menu so the File Sharing entity can be added to the navigation."
    ],
    installIntro: "The project publishes a packaged EspoCRM extension on its GitHub Releases page.",
    installSteps: [
      "Open the GitHub repository and go to Releases.",
      "Download the latest packaged extension file.",
      "In EspoCRM, open Administration → Extensions and upload the downloaded file.",
      "After installation, open Administration → User Interface and add File Sharing to the application menu."
    ],
    command: "",
    usage: [
      "Open File Sharing from the EspoCRM navigation and create a new record.",
      "Attach the file that should be made available.",
      "Set an expiry date or a download limit when access must be restricted.",
      "Choose whether the link should download the file directly or allow a browser preview.",
      "Save the record and send the generated public link to the intended recipient."
    ],
    note: "Public links expose the selected attachment without an EspoCRM login. Confirm the expiry and download-limit settings before sharing a link outside your organisation."
  },
  "mass-lead-conversion": {
    title: "Mass Lead Conversion",
    platform: "EspoCRM",
    category: "Productivity",
    maintainer: "hidden-hint",
    repository: "https://github.com/hidden-hint/ext-mass-convert",
    lead: "A bulk lead-list action for converting several EspoCRM leads into configured entity types in one operation.",
    description: "Mass Lead Conversion extends the EspoCRM lead list with a conversion action that works on multiple selected records. Administrators define which destination entities are available and can map lead fields or relationships into contacts, accounts, opportunities and custom entities.",
    features: [
      "Convert multiple selected leads from the lead list view.",
      "Allow standard or custom EspoCRM entity types as conversion targets.",
      "Define field mappings separately for each target entity.",
      "Carry configured many-to-one relationships into converted records."
    ],
    requirements: [
      "An EspoCRM installation with filesystem access.",
      "Permission to copy server and client module files into the EspoCRM installation.",
      "Administrator or deployment access to clear cache and rebuild EspoCRM.",
      "A Lead entity metadata override for the permitted targets and optional mappings."
    ],
    installIntro: "The repository documents a manual installation from its source tree.",
    installSteps: [
      "Download the repository from GitHub or download a published release.",
      "Copy the contents of src/files/custom/Espo/Modules/ into custom/Espo/Modules/ in your EspoCRM installation.",
      "Copy the contents of src/files/client/custom/modules/ into client/custom/modules/.",
      "Clear the EspoCRM cache and rebuild the application.",
      "Add a massConvert array to custom/Espo/Custom/Resources/metadata/entityDefs/Lead.json listing the entity types users may create."
    ],
    command: "{\n  \"massConvert\": [\n    \"Contact\",\n    \"Account\",\n    \"Opportunity\"\n  ]\n}",
    usage: [
      "Open the Leads list in EspoCRM.",
      "Select the lead records that should be converted.",
      "Run the mass-conversion action from the list actions.",
      "Choose one of the entity types allowed by the massConvert configuration.",
      "Review the converted records and confirm that any configured field or relationship mappings were applied as expected."
    ],
    note: "Test field and relationship mappings on a staging copy before running a large conversion. The destination fields must exist and use compatible data types."
  },
  "frappe-appointment": {
    title: "Frappe Appointment",
    platform: "Frappe",
    category: "Scheduling",
    maintainer: "rtCamp",
    repository: "https://github.com/rtCamp/frappe-appointment",
    lead: "Appointment scheduling for Frappe with calendar conflict checking, leave awareness and online meeting links.",
    description: "Frappe Appointment provides personal and group meeting scheduling. It checks Google Calendar availability, blocks slots that overlap ERPNext leave, can create Zoom or Google Meet links and lets participants reschedule an existing booking.",
    features: [
      "Create personal or group meeting types and make bookable time slots available.",
      "Check Google Calendar before presenting available times.",
      "Exclude time covered by ERPNext leave records.",
      "Generate Zoom or Google Meet links for scheduled appointments.",
      "Allow participants to reschedule a meeting."
    ],
    requirements: [
      "A working Frappe site and bench command-line access.",
      "A branch of the app compatible with the Frappe version used by your site.",
      "Google OAuth credentials when Google Calendar integration is required.",
      "HTTPS and the relevant provider credentials for optional meeting integrations."
    ],
    installIntro: "Install the application with bench on the server that hosts the target Frappe site.",
    installSteps: [
      "Open a terminal in the frappe-bench directory.",
      "Fetch the application from GitHub using the branch appropriate for your Frappe version.",
      "Install frappe_appointment on the required site, migrate it and restart bench.",
      "Log in as Administrator and complete the provider setup described in the project wiki."
    ],
    command: "bench get-app https://github.com/rtCamp/frappe-appointment.git --branch version-16\nbench --site <site-name> install-app frappe_appointment\nbench --site <site-name> migrate\nbench restart",
    usage: [
      "Configure Google Settings in Frappe if availability should be checked against Google Calendar.",
      "Create a personal or group meeting type and define the available schedule.",
      "Connect Zoom or Google Meet when automatic online-meeting links are needed.",
      "Share the generated booking page with participants.",
      "Manage booked appointments and rescheduling from the Frappe Appointment interface."
    ],
    note: "The repository’s System Setup wiki lists the current Google scopes, callback URL and provider configuration. Follow that guide because OAuth requirements can change."
  },
  "pibical": {
    title: "PibiCal",
    platform: "Frappe",
    category: "Integration",
    maintainer: "PibiCo",
    repository: "https://github.com/pibico/pibical",
    lead: "Bidirectional calendar synchronization between Frappe or ERPNext and a CalDAV-compatible server.",
    description: "PibiCal keeps events in Frappe or ERPNext aligned with calendars hosted by Nextcloud, ownCloud or another CalDAV server. It supports multiple calendars per user, recurring and all-day events, time-zone conversion, status changes and calendar invitations.",
    features: [
      "Send Frappe event creation and changes to CalDAV immediately.",
      "Import CalDAV changes into Frappe on a scheduled cycle.",
      "Synchronize recurring events, all-day events and event status.",
      "Convert event times between the user time zone and UTC.",
      "Select from multiple CalDAV calendars and send ICS invitations."
    ],
    requirements: [
      "Frappe or ERPNext v15 for the develop branch, or v13 for the version-13 branch.",
      "A Nextcloud, ownCloud or RFC 4791-compatible CalDAV server.",
      "SSL/TLS on the CalDAV endpoint; the project states that wildcard certificates are not supported.",
      "Per-user CalDAV credentials with read and write access.",
      "An active Frappe scheduler for inbound synchronization."
    ],
    installIntro: "Use the repository branch matching the Frappe version installed on your site.",
    installSteps: [
      "Open a terminal in the frappe-bench directory.",
      "Fetch the app from the appropriate GitHub branch and install it on the site.",
      "Restart bench after installation.",
      "For each user, enter the CalDAV URL, username and password or app-specific token in the user record."
    ],
    command: "bench get-app pibical https://github.com/pibico/pibical.git --branch develop\nbench --site <site-name> install-app pibical\nbench restart",
    usage: [
      "Open the Frappe user record and complete the CalDAV Credentials section.",
      "Create or edit an Event and set Event Type to Public.",
      "Enable Sync with CalDAV and select the target CalDAV calendar.",
      "Save the event; outbound synchronization runs immediately.",
      "Check the Frappe scheduler with bench doctor if inbound CalDAV changes are not appearing."
    ],
    note: "The current project documentation says CalDAV-to-Frappe updates run every three minutes, while Frappe-to-CalDAV changes are sent immediately."
  },
  "clefincode-chat": {
    title: "ClefinCode Chat",
    platform: "Frappe",
    category: "Communication",
    maintainer: "ClefinCode",
    repository: "https://github.com/clefincode/clefincode_chat",
    lead: "A self-hosted communication application for internal teams and customer conversations in Frappe and ERPNext.",
    description: "ClefinCode Chat adds direct messages, groups, multimedia and document-linked discussions to Frappe. It can also connect supported customer channels such as WhatsApp, Telegram, Instagram and Messenger, while access continues to follow the Frappe site and its configuration.",
    features: [
      "Start direct or group conversations with Frappe contacts.",
      "Send images, videos, documents, links, files and voice clips.",
      "Link discussions to ERPNext documents and business topics.",
      "Search conversations and keep several chat windows open in the web interface.",
      "Configure supported external customer-messaging channels."
    ],
    requirements: [
      "A running Frappe or ERPNext site with bench access.",
      "Permission to install the application, migrate the site and rebuild assets.",
      "Frappe users and permissions for everyone who needs web access.",
      "Separate provider credentials and configuration for optional external channels."
    ],
    installIntro: "Install the app from its public GitHub repository using frappe-bench.",
    installSteps: [
      "Open a terminal in the frappe-bench directory.",
      "Fetch ClefinCode Chat from GitHub and install it on the required site.",
      "Migrate the site and rebuild the front-end assets.",
      "Log in with a Frappe account and confirm the correct site domain."
    ],
    command: "bench get-app https://github.com/clefincode/clefincode_chat.git\nbench --site <site-name> install-app clefincode_chat\nbench --site <site-name> migrate\nbench build",
    usage: [
      "Open the chat panel in the Frappe or ERPNext interface.",
      "Choose the new-chat action, search for a contact and send a message to start a direct conversation.",
      "Select several contacts when a group conversation is required.",
      "Use topics or document links to keep a discussion attached to the relevant business record.",
      "Configure each external messaging provider separately by following the repository’s linked documentation."
    ],
    note: "External messaging features require their own provider accounts, credentials and configuration. Installing the core app alone does not activate those channels."
  },
  "crm-lead-to-task": {
    title: "CRM Lead to Task",
    platform: "Odoo Community 18",
    category: "Productivity",
    maintainer: "Odoo Community Association",
    repository: "https://github.com/OCA/crm/tree/18.0/crm_lead_to_task",
    lead: "An Odoo Community module for turning a CRM lead or opportunity into a project task without losing its working context.",
    description: "CRM Lead to Task adds a Create Task or Convert to Task action to CRM records. It creates the project task, copies the lead’s attachments and messages, and can archive the original lead. Administrators can force every converted lead into one project or let the user choose a project at conversion time.",
    features: [
      "Create a project task directly from a lead or opportunity.",
      "Preserve messages and attachments on the new task.",
      "Optionally archive the source lead after conversion.",
      "Assign every generated task to a configured project or prompt users to choose one."
    ],
    requirements: [
      "Odoo Community 18.0.",
      "The OCA crm repository available in the server’s add-ons path.",
      "Project User and CRM Salesperson access for users who convert leads.",
      "Administrator access to install and configure the module."
    ],
    installIntro: "The module lives inside the 18.0 branch of the OCA crm repository.",
    installSteps: [
      "Clone or download the OCA crm repository at branch 18.0.",
      "Make the repository available through Odoo’s addons_path, or copy crm_lead_to_task into an existing custom add-ons directory.",
      "Restart Odoo, update the Apps list and install CRM Lead to Task.",
      "In CRM settings, choose whether to force a project and whether converted leads should be archived."
    ],
    command: "git clone --depth 1 --branch 18.0 https://github.com/OCA/crm.git\n./odoo-bin -d <database> -i crm_lead_to_task --stop-after-init",
    usage: [
      "Open CRM settings and configure Force Project and Archive Lead as required.",
      "Go to CRM → Sales → My Pipeline and open a lead or opportunity.",
      "Select Create Task or Convert to Task.",
      "If no project is forced, choose the destination project in the popup.",
      "Odoo opens the new task with the relevant lead information, messages and attachments copied across."
    ],
    note: "The command shown assumes the cloned OCA repository has been added to addons_path. Odoo deployments differ, so confirm the add-ons directory used by your server before installing."
  },
  "partner-contact-role": {
    title: "Partner Contact Role",
    platform: "Odoo Community 18",
    category: "Data management",
    maintainer: "Odoo Community Association",
    repository: "https://github.com/OCA/partner-contact/tree/18.0/partner_contact_role",
    lead: "An Odoo Community module for assigning several defined business roles or responsibilities to the same contact.",
    description: "Partner Contact Role extends Odoo contacts beyond the single job-position field. Administrators maintain a reusable list of roles, and users can assign one or several of those roles to a partner record to describe that person’s responsibilities more accurately.",
    features: [
      "Create a reusable catalogue of partner roles.",
      "Assign several roles to one contact.",
      "Keep role information on the standard partner form.",
      "Represent responsibilities separately from the contact’s job-position text."
    ],
    requirements: [
      "Odoo Community 18.0.",
      "The OCA partner-contact repository available in the server’s add-ons path.",
      "Administrator access to install the module and define partner roles."
    ],
    installIntro: "The module is distributed in the 18.0 branch of OCA’s partner-contact repository.",
    installSteps: [
      "Clone or download the OCA partner-contact repository at branch 18.0.",
      "Add the repository to Odoo’s addons_path, or copy partner_contact_role to the server’s custom add-ons directory.",
      "Restart Odoo, update the Apps list and install Partner Contact Role.",
      "Open Sales → Configuration → Address Book → Partner Roles and create the roles your organisation uses."
    ],
    command: "git clone --depth 1 --branch 18.0 https://github.com/OCA/partner-contact.git\n./odoo-bin -d <database> -i partner_contact_role --stop-after-init",
    usage: [
      "Create or review the available roles under Sales → Configuration → Address Book → Partner Roles.",
      "Open the required contact or company record.",
      "Use the Roles field to select each responsibility that applies to that partner.",
      "Save the record and update the roles whenever the contact’s responsibilities change."
    ],
    note: "The menu location can vary slightly with the Odoo applications installed, but the module’s documented configuration menu is under Sales → Configuration → Address Book."
  },
  "crm-lead-code": {
    title: "CRM Lead Code",
    platform: "Odoo Community 18",
    category: "Data management",
    maintainer: "Odoo Community Association",
    repository: "https://github.com/OCA/crm/tree/18.0/crm_lead_code",
    lead: "An Odoo Community module that adds a sequential reference code to leads and opportunities.",
    description: "CRM Lead Code gives every lead or opportunity a sequence-based identifier. The code provides a short, stable reference that teams can use when discussing a CRM record, searching for it or referring to it outside Odoo.",
    features: [
      "Generate a sequential code for leads and opportunities.",
      "Provide a consistent reference alongside the record name.",
      "Make individual CRM records easier to identify in operational communication."
    ],
    requirements: [
      "Odoo Community 18.0.",
      "The OCA crm repository available in the server’s add-ons path.",
      "Administrator access to install the module."
    ],
    installIntro: "The module is part of the 18.0 branch of the OCA crm repository.",
    installSteps: [
      "Clone or download the OCA crm repository at branch 18.0.",
      "Add the repository to addons_path, or copy crm_lead_code into a custom add-ons directory.",
      "Restart Odoo, update the Apps list and install CRM Lead Code.",
      "Create a test lead and confirm that the sequential code is present before enabling the module in production."
    ],
    command: "git clone --depth 1 --branch 18.0 https://github.com/OCA/crm.git\n./odoo-bin -d <database> -i crm_lead_code --stop-after-init",
    usage: [
      "Create or open a lead or opportunity in CRM.",
      "Use the generated sequential code as the stable reference for that record.",
      "Include the code in internal communication when several records have similar names.",
      "Search or filter by the code when you need to return to a specific lead."
    ],
    note: "This is a focused module with no separate user workflow documented by the project. Its purpose is to add the sequential reference to CRM records after installation."
  },
  "partner-deduplicate-filter": {
    title: "Partner Deduplicate Filter",
    platform: "Odoo Community 18",
    category: "Data management",
    maintainer: "Odoo Community Association",
    repository: "https://github.com/OCA/partner-contact/tree/18.0/partner_deduplicate_filter",
    lead: "Additional record-type filters for Odoo’s contact-deduplication process.",
    description: "Partner Deduplicate Filter extends the contact deduplication tool so administrators can exclude particular kinds of records from a cleanup. The current module can distinguish companies, standalone contacts and contacts assigned to a parent company.",
    features: [
      "Restrict a deduplication run to the relevant kind of contact record.",
      "Exclude companies from a contact-focused cleanup.",
      "Separate contacts with or without a parent company.",
      "Use the filters inside the existing Deduplicate Contacts workflow."
    ],
    requirements: [
      "Odoo Community 18.0.",
      "The OCA partner-contact repository available in the server’s add-ons path.",
      "The partner_deduplicate_acl add-on and the required user permissions described by that module.",
      "Administrator access to install the module and perform deduplication."
    ],
    installIntro: "The module is distributed in the 18.0 branch of OCA’s partner-contact repository.",
    installSteps: [
      "Clone or download the OCA partner-contact repository at branch 18.0.",
      "Add the repository to Odoo’s addons_path, or copy partner_deduplicate_filter into the custom add-ons directory.",
      "Install the required partner_deduplicate_acl dependency and configure its user permissions.",
      "Restart Odoo, update the Apps list and install Partner Deduplicate Filter."
    ],
    command: "git clone --depth 1 --branch 18.0 https://github.com/OCA/partner-contact.git\n./odoo-bin -d <database> -i partner_deduplicate_filter --stop-after-init",
    usage: [
      "Go to Contacts → Tools → Deduplicate Contacts.",
      "In Exclude contacts having, select the criteria that should not be included in this run.",
      "Choose Is a company? field selected, Parent company not set or Parent company set (Contacts) as appropriate.",
      "Review the candidate records carefully, then proceed with the normal Odoo deduplication process."
    ],
    note: "Deduplication can merge or alter contact data. Test the criteria on a staging database and make a current backup before applying it to production records."
  }
};

const productId = document.body.dataset.productId;
const product = openSourceProducts[productId];

if (product) {
  document.title = `${product.title} | TapioBridge`;
  const descriptionMeta = document.querySelector('meta[name="description"]');
  if (descriptionMeta) descriptionMeta.content = product.lead;

  const setText = (selector, value) => {
    const element = document.querySelector(selector);
    if (element) element.textContent = value;
  };

  const setLink = (selector, url) => {
    const element = document.querySelector(selector);
    if (element) element.href = url;
  };

  const populateList = (selector, values) => {
    const list = document.querySelector(selector);
    if (!list) return;
    values.forEach((value) => {
      const item = document.createElement("li");
      item.textContent = value;
      list.appendChild(item);
    });
  };

  setText("[data-product-platform]", product.platform);
  setText("[data-product-category]", product.category);
  setText("[data-product-title]", product.title);
  setText("[data-product-lead]", product.lead);
  setText("[data-product-description]", product.description);
  setText("[data-product-install-intro]", product.installIntro);
  setText("[data-product-note]", product.note);

  setLink("[data-product-source-bottom]", product.repository);

  populateList("[data-product-features]", product.features);
  populateList("[data-product-requirements]", product.requirements);
  populateList("[data-product-install-steps]", product.installSteps);
  populateList("[data-product-usage]", product.usage);

  const command = document.querySelector("[data-product-command]");
  if (command) {
    if (product.command) command.textContent = product.command;
    else command.remove();
  }
}
