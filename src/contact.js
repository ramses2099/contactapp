let contacts = [
  {
    id: 1,
    first_name: "Devan",
    last_name: "Starzaker",
    email: "dstarzaker0@bloglovin.com",
    gender: "Male",
    ip_address: "35.126.159.125",
  },
  {
    id: 2,
    first_name: "Gery",
    last_name: "Talboy",
    email: "gtalboy1@weebly.com",
    gender: "Male",
    ip_address: "156.135.62.161",
  },
  {
    id: 3,
    first_name: "Anatollo",
    last_name: "De Bell",
    email: "adebell2@opensource.org",
    gender: "Male",
    ip_address: "49.103.128.70",
  },
  {
    id: 4,
    first_name: "Ludwig",
    last_name: "Lorroway",
    email: "llorroway3@furl.net",
    gender: "Female",
    ip_address: "231.23.4.191",
  },
  {
    id: 5,
    first_name: "Stoddard",
    last_name: "Padden",
    email: "spadden4@symantec.com",
    gender: "Male",
    ip_address: "116.173.63.74",
  },
  {
    id: 6,
    first_name: "Pall",
    last_name: "Witherdon",
    email: "pwitherdon5@123-reg.co.uk",
    gender: "Polygender",
    ip_address: "18.187.122.217",
  },
  {
    id: 7,
    first_name: "Tedie",
    last_name: "Conyard",
    email: "tconyard6@state.gov",
    gender: "Female",
    ip_address: "249.43.80.247",
  },
  {
    id: 8,
    first_name: "Sissie",
    last_name: "Guynemer",
    email: "sguynemer7@uol.com.br",
    gender: "Female",
    ip_address: "125.137.240.44",
  },
  {
    id: 9,
    first_name: "Emory",
    last_name: "Marmion",
    email: "emarmion8@constantcontact.com",
    gender: "Male",
    ip_address: "29.234.52.177",
  },
  {
    id: 10,
    first_name: "Sarajane",
    last_name: "Oppery",
    email: "soppery9@engadget.com",
    gender: "Male",
    ip_address: "48.58.6.43",
  },
  {
    id: 11,
    first_name: "Hale",
    last_name: "Lamball",
    email: "hlamballa@ox.ac.uk",
    gender: "Male",
    ip_address: "188.58.49.106",
  },
  {
    id: 12,
    first_name: "Zorine",
    last_name: "Jado",
    email: "zjadob@php.net",
    gender: "Female",
    ip_address: "212.10.69.49",
  },
  {
    id: 13,
    first_name: "Inesita",
    last_name: "Doust",
    email: "idoustc@phoca.cz",
    gender: "Female",
    ip_address: "223.42.225.6",
  },
  {
    id: 14,
    first_name: "Sonya",
    last_name: "Tirrell",
    email: "stirrelld@networksolutions.com",
    gender: "Female",
    ip_address: "163.204.233.181",
  },
  {
    id: 15,
    first_name: "Drake",
    last_name: "O'Duane",
    email: "doduanee@usa.gov",
    gender: "Male",
    ip_address: "179.191.3.54",
  },
  {
    id: 16,
    first_name: "Remy",
    last_name: "Curragh",
    email: "rcurraghf@nymag.com",
    gender: "Male",
    ip_address: "147.168.221.44",
  },
  {
    id: 17,
    first_name: "Krispin",
    last_name: "Kos",
    email: "kkosg@guardian.co.uk",
    gender: "Female",
    ip_address: "17.59.5.9",
  },
  {
    id: 18,
    first_name: "Ollie",
    last_name: "Ritzman",
    email: "oritzmanh@seesaa.net",
    gender: "Male",
    ip_address: "123.152.37.233",
  },
  {
    id: 19,
    first_name: "Jamil",
    last_name: "Spinella",
    email: "jspinellai@i2i.jp",
    gender: "Male",
    ip_address: "58.143.19.210",
  },
  {
    id: 20,
    first_name: "Sylvan",
    last_name: "Pilgram",
    email: "spilgramj@accuweather.com",
    gender: "Female",
    ip_address: "100.34.104.171",
  },
];
//
export function getAllContacts() {
  return contacts;
}
//
export function getContact(id) {
  return contacts.find((c) => c.id === id);
}
//
export function deleteContact(id) {
  contacts = contacts.filter((c) => c.id !== id);
}
