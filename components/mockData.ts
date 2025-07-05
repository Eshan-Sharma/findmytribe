export const mockMembers = [
  {
    id: 1,
    name: "Alex Chen",
    username: "alexc",
    organization: "TechCorp",
    city: "San Francisco",
    country: "United States",
    timezone: "PST",
    discordId: "alex#1234",
    twitterHandle: "@alexchen",
    visibility: "public",
  },
  {
    id: 2,
    name: "Maria Rodriguez",
    username: "maria_r",
    organization: "StartupXYZ",
    city: "Barcelona",
    country: "Spain",
    timezone: "CET",
    discordId: "maria#5678",
    twitterHandle: "@mariarodriguez",
    visibility: "public",
  },
  {
    id: 3,
    name: "Yuki Tanaka",
    username: "yuki_t",
    organization: "Innovation Labs",
    city: "Tokyo",
    country: "Japan",
    timezone: "JST",
    discordId: "yuki#9012",
    twitterHandle: "@yukitanaka",
    visibility: "public",
  },
  {
    id: 4,
    name: "James Wilson",
    username: "jwilson",
    organization: "DevStudio",
    city: "London",
    country: "United Kingdom",
    timezone: "GMT",
    discordId: "james#3456",
    twitterHandle: "@jameswilson",
    visibility: "public",
  },
  {
    id: 5,
    name: "Sarah Kim",
    username: "sarahk",
    organization: "Design Co",
    city: "Seoul",
    country: "South Korea",
    timezone: "KST",
    discordId: "sarah#7890",
    twitterHandle: "@sarahkim",
    visibility: "public",
  },
  {
    id: 6,
    name: "Ravi Patel",
    username: "ravip",
    organization: "CodeNation",
    city: "Mumbai",
    country: "India",
    timezone: "IST",
    discordId: "ravi#3210",
    twitterHandle: "@ravipatel",
    visibility: "public",
  },
  {
    id: 7,
    name: "Emily Nguyen",
    username: "emilyn",
    organization: "ProductHive",
    city: "Sydney",
    country: "Australia",
    timezone: "AEST",
    discordId: "emily#6543",
    twitterHandle: "@emilynguyen",
    visibility: "public",
  },
  {
    id: 8,
    name: "Omar Farouk",
    username: "omar_f",
    organization: "OpenSourceMENA",
    city: "Cairo",
    country: "Egypt",
    timezone: "EET",
    discordId: "omar#9988",
    twitterHandle: "@omarfarouk",
    visibility: "public",
  },
  {
    id: 9,
    name: "Sophia Müller",
    username: "sophiam",
    organization: "EU-Tech",
    city: "Berlin",
    country: "Germany",
    timezone: "CET",
    discordId: "sophia#4455",
    twitterHandle: "@sophiamuller",
    visibility: "public",
  },
  {
    id: 10,
    name: "Carlos Silva",
    username: "carloss",
    organization: "LatAm Devs",
    city: "São Paulo",
    country: "Brazil",
    timezone: "BRT",
    discordId: "carlos#1122",
    twitterHandle: "@carlossilva",
    visibility: "public",
  },
];

export const timezones = [
  { name: "PST", time: "10:30 AM", members: 1 },
  { name: "GMT", time: "6:30 PM", members: 1 },
  { name: "CET", time: "7:30 PM", members: 2 },
  { name: "JST", time: "3:30 AM", members: 1 },
  { name: "KST", time: "3:30 AM", members: 1 },
  { name: "IST", time: "11:00 PM", members: 1 },
  { name: "AEST", time: "5:00 AM", members: 1 },
  { name: "EET", time: "8:00 PM", members: 1 },
  { name: "BRT", time: "3:30 PM", members: 1 },
];

export const countries = [
  {
    name: "United States",
    cities: [
      {
        name: "San Francisco",
        members: mockMembers.filter((m) => m.city === "San Francisco"),
      },
    ],
  },
  {
    name: "Spain",
    cities: [
      {
        name: "Barcelona",
        members: mockMembers.filter((m) => m.city === "Barcelona"),
      },
    ],
  },
  {
    name: "Japan",
    cities: [
      {
        name: "Tokyo",
        members: mockMembers.filter((m) => m.city === "Tokyo"),
      },
    ],
  },
  {
    name: "United Kingdom",
    cities: [
      {
        name: "London",
        members: mockMembers.filter((m) => m.city === "London"),
      },
    ],
  },
  {
    name: "South Korea",
    cities: [
      {
        name: "Seoul",
        members: mockMembers.filter((m) => m.city === "Seoul"),
      },
    ],
  },
  {
    name: "India",
    cities: [
      {
        name: "Mumbai",
        members: mockMembers.filter((m) => m.city === "Mumbai"),
      },
    ],
  },
  {
    name: "Australia",
    cities: [
      {
        name: "Sydney",
        members: mockMembers.filter((m) => m.city === "Sydney"),
      },
    ],
  },
  {
    name: "Egypt",
    cities: [
      {
        name: "Cairo",
        members: mockMembers.filter((m) => m.city === "Cairo"),
      },
    ],
  },
  {
    name: "Germany",
    cities: [
      {
        name: "Berlin",
        members: mockMembers.filter((m) => m.city === "Berlin"),
      },
    ],
  },
  {
    name: "Brazil",
    cities: [
      {
        name: "São Paulo",
        members: mockMembers.filter((m) => m.city === "São Paulo"),
      },
    ],
  },
];
