export const homeItems = () => [
  {
    title: "Home",
    icon: "tabler:smart-home",

    // badgeContent: 'new',
    badgeColor: "error",
    children: [
      {
        title: "User",
        path: "/users",
        icon: "tabler:circle-filled",
      },
      {
        title: "Expense",
        path: "/accounts/expense",
        icon: "tabler:circle-filled",
      },
      {
        title: "Orders",
        path: "/orders",
        icon: "tabler:circle-filled",
      },
      {
        title: "Settings",
        path: "/settings",
        icon: "tabler:circle-filled",
      },
    ],
  },
  {
    title: "Roles & Permissions",
    icon: "tabler:settings",
    children: [
      {
        title: "Roles",
        path: "/apps/roles",
        icon: "tabler:circle-filled",
      },
      {
        title: "Permissions",
        path: "/apps/permissions",
        icon: "tabler:circle-filled",
      },
    ],
  },
];

export const accountItems = () => [
  {
    title: "Dashboards",
    icon: "tabler:smart-home",

    // badgeContent: 'new',
    badgeColor: "error",
    children: [
      {
        title: "Main",
        path: "/dashboards/analytics",
        icon: "tabler:circle-filled",
      },
    ],
  },

  // ==========================
  {
    title: "Members",
    icon: "tabler:user",
    children: [
      {
        title: "Agents",
        path: "/member/agent",
        icon: "tabler:circle-filled",
      },
      {
        title: "Clients",
        path: "/member/client",
        icon: "tabler:circle-filled",
      },
      {
        title: "Company",
        path: "/member/company",
        icon: "tabler:circle-filled",
      },
    ],
  },
  {
    title: "Booking",
    icon: "tabler:plane-departure",
    children: [
      {
        title: "Visa Booking",
        path: "/booking/visa",
        icon: "tabler:circle-filled",
      },
    ],
  },

  {
    title: "Services",
    icon: "tabler:packages",
    children: [
      {
        title: "Visa Service",
        children: [
          {
            title: "Visa Destination",
            path: "/services/visaId/destination",
            icon: "tabler:circle-filled",
          },
          {
            title: "Visa Type",
            path: "/services/visaId/type",
            icon: "tabler:circle-filled",
          },
          {
            title: "Visa Category",
            path: "/services/visaId/category",
            icon: "tabler:circle-filled",
          },

          {
            title: "Visa Duration",
            path: "/services/visaId/duration",
            icon: "tabler:circle-filled",
          },
          {
            title: "Visa Rate Detail",
            path: "/services/visa",
            icon: "tabler:circle-filled",
          },
        ],
      },
    ],
  },
  {
    title: "Account",
    path: "/account",
    icon: "tabler:file-dollar",
  },
  {
    title: "Supplier",
    icon: "tabler:truck-delivery",
    children: [
      {
        title: "Supplier Category",
        path: "/supplier/supplier-category",
        icon: "tabler:circle-filled",
      },
      {
        title: "Visa Service",
        path: "/supplier/supplier-visa-service",
        icon: "tabler:circle-filled",
      },
      {
        title: "Supplier List",
        path: "/supplier/supplier-list",
        icon: "tabler:circle-filled",
      },
    ],
  },

  {
    title: "Expense",
    path: "/expense",
    icon: "tabler:wallet",
  },
  {
    title: "Invoice",
    icon: "tabler:file-text",
    children: [
      {
        title: "List",
        path: "/invoice/list",
        icon: "tabler:circle-filled",
      },
      {
        title: "Preview",
        path: "/invoice/preview",
        icon: "tabler:circle-filled",
      },
      {
        title: "Edit",
        path: "/invoice/edit",
        icon: "tabler:circle-filled",
      },
      {
        title: "Add",
        path: "/invoice/add",
        icon: "tabler:circle-filled",
      },
    ],
  },
  {
    title: "Roles & Permissions",
    icon: "tabler:settings",
    children: [
      {
        title: "Roles",
        path: "/apps/roles",
        icon: "tabler:circle-filled",
      },
      {
        title: "Permissions",
        path: "/apps/permissions",
        icon: "tabler:circle-filled",
      },
    ],
  },
];

export const ticketingItems = () => [
  {
    title: "Flight",
    icon: "tabler:smart-home",
    badgeContent: "new",
    badgeColor: "error",
    path:"/",
    children: [
      {
        title: "Day",
        path: "/dashboards/analytics",
        icon: "tabler:circle-filled",
      },
      {
        title: "Afternoon",
        path: "/dashboards/crm",
        icon: "tabler:circle-filled",
      },
      {
        title: "Morning",
        path: "/dashboards/ecommerce",
        icon: "tabler:circle-filled",
      },
    ],
  },
  {
    title: "Email",
    icon: "tabler:mail",
    path: "/apps/email",
  },
];

export const tourItems = () => [
  {
    title: "Tour Places",
    icon: "tabler:smart-home",
    badgeContent: "new",
    badgeColor: "error",
    children: [
      {
        title: "Summer",
        path: "/accounts/expense",
        icon: "tabler:circle-filled",
      },
      {
        title: "Winter",
        path: "/dashboards/crm",
        icon: "tabler:circle-filled",
      },
      {
        title: "Autumn",
        path: "/dashboards/ecommerce",
        icon: "tabler:circle-filled",
      },
    ],
  },
  {
    title: "Mountains",
    icon: "tabler:mail",
    path: "/apps/email",
  },
];

export const automationItems = () => [
  {
    title: "Tools ",
    icon: "fluent:chat-12-regular",
    children: [
      {
        title: "libraries",
        path: "/chatmodule/chat",
        icon: "tabler:circle-filled",
      },
      {
        title: "packages",
        path: "/emailmodule/emailmanager/list",
        icon: "tabler:circle-filled",
      },
      {
        title: "help",
        path: "/chatmodule/chatmanager/list",
        icon: "tabler:circle-filled",
      },
    ],
  },
  {
    title: "Email ",
    icon: "clarity:email-line",
    children: [
      {
        title: "Start Email",
        path: "/emailmodule/email",
        icon: "tabler:circle-filled",
      },
      {
        title: "Email Automate",
        path: "/emailmodule/emailmanager/list",
        icon: "tabler:circle-filled",
      },
      {
        title: "Email Manager",
        path: "/emailmodule/emailmanager/list",
        icon: "tabler:circle-filled",
      },
    ],
  },
  {
    title: "WhatsApp",
    icon: "fa6-brands:whatsapp",
    children: [
      {
        title: "WhatsApp Web ",
        path: "/emailmodule/email",
        icon: "tabler:circle-filled",
      },
      {
        title: "WhatsApp Automate",
        path: "/emailmodule/emailmanager/list",
        icon: "tabler:circle-filled",
      },
      {
        title: "WhatsApp Manager",
        path: "/emailmodule/emailmanager/list",
        icon: "tabler:circle-filled",
      },
    ],
  },
  {
    title: "Mobile SMS",
    icon: "fa-solid:sms",
    children: [
      {
        title: "WhatsApp Web ",
        path: "/emailmodule/email",
        icon: "tabler:circle-filled",
      },
      {
        title: "WhatsApp Automate",
        path: "/emailmodule/emailmanager/list",
        icon: "tabler:circle-filled",
      },
      {
        title: "WhatsApp Manager",
        path: "/emailmodule/emailmanager/list",
        icon: "tabler:circle-filled",
      },
    ],
  },
];

export const hotelItems = () => [
  {
    title: "Hotel List",
    icon: "tabler:smart-home",
    badgeContent: "new",
    badgeColor: "error",
    children: [
      {
        title: "class-1",
        path: "/dashboards/analytics",
        icon: "tabler:circle-filled",
      },
      {
        title: "class-2",
        path: "/dashboards/crm",
        icon: "tabler:circle-filled",
      },
      {
        title: "class-3",
        path: "/dashboards/ecommerce",
        icon: "tabler:circle-filled",
      },
    ],
  },
];

export const databaseItems = () => [
  {
    title: "Dashboards",
    icon: "tabler:smart-home",
    badgeContent: "new",
    badgeColor: "error",
    children: [
      {
        title: "Used Databases",
        path: "/dashboards/analytics",
        icon: "tabler:circle-filled",
      },
      {
        title: "Active",
        path: "/dashboards/crm",
        icon: "tabler:circle-filled",
      },
      {
        title: "Backup",
        path: "/dashboards/ecommerce",
        icon: "tabler:circle-filled",
      },
    ],
  },
];

export const settingsItems = () => [
  {
    title: "Roles & Permissions",
    icon: "tabler:settings",
    children: [
      {
        title: "Roles",
        path: "/roles",
        icon: "tabler:circle-filled",
      },
      {
        title: "Permissions",
        path: "/permissions",
        icon: "tabler:circle-filled",
      },
    ],
  },
  {
    title: "Business Setting",
    icon: "fluent:chat-12-regular",
    children: [
      {
        title: "Company Setting",
        path: "/emailmodule/emailmanager/list",
        icon: "tabler:circle-filled",
      },
    ],
  },
  {
    title: "Localization",
    icon: "fluent:chat-12-regular",
    children: [
      {
        title: "Currency",
        path: "/chatmodule/chat",
        icon: "tabler:circle-filled",
      },
      {
        title: "Languages",
        path: "/emailmodule/emailmanager/list",
        icon: "tabler:circle-filled",
      },
      {
        title: "Zone & Area",
        path: "/emailmodule/emailmanager/list",
        icon: "tabler:circle-filled",
      },
      {
        title: "Theme",
        path: "/emailmodule/emailmanager/list",
        icon: "tabler:circle-filled",
      },
    ],
  },
  {
    title: "Billing & Tax",
    icon: "fluent:chat-12-regular",
    children: [
      {
        title: "Currency",
        path: "/chatmodule/chat",
        icon: "tabler:circle-filled",
      },
      {
        title: "Languages",
        path: "/emailmodule/emailmanager/list",
        icon: "tabler:circle-filled",
      },
      {
        title: "Zone & Area",
        path: "/emailmodule/emailmanager/list",
        icon: "tabler:circle-filled",
      },
      {
        title: "Theme",
        path: "/emailmodule/emailmanager/list",
        icon: "tabler:circle-filled",
      },
    ],
  },
  {
    title: "Modules Add-On",
    icon: "fluent:chat-12-regular",
    children: [
      {
        title: "Currency",
        path: "/chatmodule/chat",
        icon: "tabler:circle-filled",
      },
      {
        title: "Languages",
        path: "/emailmodule/emailmanager/list",
        icon: "tabler:circle-filled",
      },
      {
        title: "Zone & Area",
        path: "/emailmodule/emailmanager/list",
        icon: "tabler:circle-filled",
      },
      {
        title: "Theme",
        path: "/emailmodule/emailmanager/list",
        icon: "tabler:circle-filled",
      },
    ],
  },
];
