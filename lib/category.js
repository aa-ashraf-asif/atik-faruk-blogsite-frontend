export function CategoryModifier(category) {
  const categoryBangla = [
    "আলোকচিত্র",
    "বইপত্র",
    "চূর্ণভাবনা",
    "সিনেমা ",
    "ধর্ম",
    "দিনলিপি",
    "গদ্য",
    "গল্প",
    "কবিতা",
    "লেখক",
    "লিটলম্যাগ",
    "মুক্তগদ্য",
    "অণুগল্প",
    "পত্রালাপ",
    "প্রবন্ধ",
    "সাক্ষাৎকার",
    "ভাষান্তর",
    "ভ্রমণকাহিনি",
  ];
  
  const categoryEnglish = [
    "alokchitro",
    "boipotro",
    "churnovabona",
    "cinema",
    "dhormo",
    "dinlipi",
    "goddo",
    "golpo",
    "kobita",
    "lekhok",
    "littlemag",
    "muktogoddo",
    "onugolpo",
    "potralap",
    "probondho",
    "shakkhatkar",
    "vashantor",
    "vromonkahini",
  ];

  

  let blogCategoryIndex = categoryEnglish.indexOf(category);
  category = categoryBangla[blogCategoryIndex];

  return category;
}

export const Categories = [
  "alokchitro",
  "boipotro",
  "churnovabona",
  "cinema",
  "dhormo",
  "dinlipi",
  "goddo",
  "golpo",
  "kobita",
  "lekhok",
  "littlemag",
  "muktogoddo",
  "onugolpo",
  "potralap",
  "probondho",
  "shakkhatkar",
  "vashantor",
  "vromonkahini",
];