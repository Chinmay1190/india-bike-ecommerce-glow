import { Product, Category, PaymentMethod } from "@/types";

export const categories: Category[] = [
  {
    id: "1",
    name: "Sport",
    slug: "sport",
    description: "High-performance race-oriented motorcycles built for speed and agility",
    count: 20
  },
  {
    id: "2", 
    name: "Cruiser",
    slug: "cruiser",
    description: "Comfortable bikes designed for long-distance riding with relaxed positioning",
    count: 15
  },
  {
    id: "3",
    name: "Adventure",
    slug: "adventure",
    description: "Versatile motorcycles designed for both on-road and off-road capabilities",
    count: 12
  },
  {
    id: "4",
    name: "Naked",
    slug: "naked",
    description: "Stripped-down street bikes with upright riding position and minimal fairings",
    count: 10
  },
  {
    id: "5",
    name: "Touring",
    slug: "touring",
    description: "Long-distance motorcycles with large fairings and luggage capacity",
    count: 8
  },
];

export const products: Product[] = [
  {
    id: "1",
    brand: "Ducati",
    model: "Panigale V4",
    category: "sport",
    price: 2350000,
    description: "The Ducati Panigale V4 is the essence of Ducati's racing DNA, translated into a road-legal superbike. With MotoGP-derived technology, the Panigale V4 delivers extraordinary performance with its powerful V4 engine, advanced electronics, and aerodynamic design.",
    engine: "1103cc, V4",
    power: "214 HP @ 13,000 rpm",
    torque: "124 Nm @ 9,500 rpm",
    weight: "175 kg (dry)",
    featured: true,
    stock: 5,
    rating: 4.9,
    imageUrl: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?ixlib=rb-4.0.3",
    images: [
      "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1558981852-426c6c22a060?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?ixlib=rb-4.0.3"
    ]
  },
  {
    id: "2",
    brand: "BMW",
    model: "S 1000 RR",
    category: "sport",
    price: 2095000,
    description: "The BMW S 1000 RR revolutionized the supersport motorcycle segment when it first came out in 2009. Now in its latest generation, the S 1000 RR continues to set benchmarks in terms of performance, technology, and ridability.",
    engine: "999cc, Inline-4",
    power: "207 HP @ 13,500 rpm",
    torque: "113 Nm @ 11,000 rpm",
    weight: "197 kg (wet)",
    featured: true,
    stock: 3,
    rating: 4.8,
    imageUrl: "https://images.unsplash.com/photo-1635073908681-b31dd255916a?ixlib=rb-4.0.3",
    images: [
      "https://images.unsplash.com/photo-1635073908681-b31dd255916a?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1636750311705-dd79ecd08066?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1624861937851-055c05f54e07?ixlib=rb-4.0.3"
    ]
  },
  {
    id: "3",
    brand: "Kawasaki",
    model: "Ninja ZX-10R",
    category: "sport",
    price: 1549000,
    description: "The Kawasaki Ninja ZX-10R is a motorcycle that needs no introduction. A direct descendant of the World Superbike Championship-winning machine, the ZX-10R delivers track-worthy performance in a streetable package.",
    engine: "998cc, Inline-4",
    power: "203 HP @ 13,200 rpm",
    torque: "114.9 Nm @ 11,400 rpm",
    weight: "207 kg (wet)",
    featured: false,
    discount: 5,
    stock: 7,
    rating: 4.7,
    imageUrl: "https://images.unsplash.com/photo-1603539444875-76e7684265f6?ixlib=rb-4.0.3",
    images: [
      "https://images.unsplash.com/photo-1603539444875-76e7684265f6?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1611241443322-78b19f5a6f10?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?ixlib=rb-4.0.3"
    ]
  },
  {
    id: "4",
    brand: "Harley-Davidson",
    model: "Road Glide Special",
    category: "touring",
    price: 3695000,
    description: "The Road Glide Special is the ultimate American touring machine. With its distinctive shark-nose fairing, powerful Milwaukee-Eight engine, and premium features, it's designed for those who want to cover vast distances in comfort and style.",
    engine: "114ci (1868cc), V-Twin",
    power: "93 HP @ 5,020 rpm",
    torque: "163 Nm @ 3,000 rpm",
    weight: "385 kg (wet)",
    featured: false,
    stock: 2,
    rating: 4.6,
    imageUrl: "https://images.unsplash.com/photo-1558980394-4c7c9299fe96?ixlib=rb-4.0.3",
    images: [
      "https://images.unsplash.com/photo-1558980394-4c7c9299fe96?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1558980395-2f50177f321d?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1597079910443-60c58702d1fe?ixlib=rb-4.0.3"
    ]
  },
  {
    id: "5",
    brand: "Triumph",
    model: "Tiger 900 Rally Pro",
    category: "adventure",
    price: 1595000,
    description: "The Triumph Tiger 900 Rally Pro is the ultimate adventure motorcycle, designed to excel both on and off-road. With its distinctive triple engine, advanced technology, and premium components, it's ready to take you anywhere your adventures lead.",
    engine: "888cc, Triple",
    power: "94 HP @ 8,750 rpm",
    torque: "87 Nm @ 7,250 rpm",
    weight: "222 kg (wet)",
    featured: true,
    stock: 4,
    rating: 4.8,
    imageUrl: "https://images.unsplash.com/photo-1627559141892-5cd77a9fb631?ixlib=rb-4.0.3",
    images: [
      "https://images.unsplash.com/photo-1627559141892-5cd77a9fb631?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1611242320536-f12d3541249b?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1624339389482-d2943808950a?ixlib=rb-4.0.3"
    ]
  },
  {
    id: "6",
    brand: "Honda",
    model: "CBR1000RR-R Fireblade SP",
    category: "sport",
    price: 2390000,
    description: "The CBR1000RR-R Fireblade SP represents the pinnacle of Honda's racing technology, transferred from MotoGP to the street. With its powerful inline-four engine, advanced electronics package, and premium Öhlins suspension, it's built to dominate both road and track.",
    engine: "999cc, Inline-4",
    power: "215 HP @ 14,500 rpm",
    torque: "113 Nm @ 12,500 rpm",
    weight: "201 kg (wet)",
    featured: false,
    newArrival: true,
    stock: 2,
    rating: 4.9,
    imageUrl: "https://images.unsplash.com/photo-1609630875171-b1321377ee65?ixlib=rb-4.0.3",
    images: [
      "https://images.unsplash.com/photo-1609630875171-b1321377ee65?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1615172282427-9a61fca7b64f?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1615172282229-bced2c9a1ba7?ixlib=rb-4.0.3"
    ]
  },
  {
    id: "7",
    brand: "Yamaha",
    model: "MT-09 SP",
    category: "naked",
    price: 1095000,
    description: "The Yamaha MT-09 SP brings premium components to the hyper naked segment with its cross-plane triple engine, fully adjustable Öhlins rear shock, and aggressive styling. It's a motorcycle that combines thrilling performance with everyday usability.",
    engine: "889cc, CP3 Triple",
    power: "117 HP @ 10,000 rpm",
    torque: "93 Nm @ 7,000 rpm",
    weight: "190 kg (wet)",
    featured: false,
    stock: 6,
    rating: 4.7,
    imageUrl: "https://images.unsplash.com/photo-1595876629762-38c73d029137?ixlib=rb-4.0.3",
    images: [
      "https://images.unsplash.com/photo-1595876629762-38c73d029137?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1595876629747-3d041ea28d25?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1595876583088-0d2a08acfc45?ixlib=rb-4.0.3"
    ]
  },
  {
    id: "8",
    brand: "Suzuki",
    model: "Hayabusa",
    category: "sport",
    price: 1695000,
    description: "The legendary Suzuki Hayabusa continues to be the ultimate sport bike for those who seek outrageous power, distinctive styling, and incomparable presence. In its latest generation, it maintains its status as an icon while incorporating modern technology and refinements.",
    engine: "1340cc, Inline-4",
    power: "187 HP @ 9,700 rpm",
    torque: "150 Nm @ 7,000 rpm",
    weight: "264 kg (wet)",
    featured: true,
    discount: 8,
    stock: 3,
    rating: 4.8,
    imageUrl: "https://images.unsplash.com/photo-1591584582830-209d4f431c4a?ixlib=rb-4.0.3",
    images: [
      "https://images.unsplash.com/photo-1591584582830-209d4f431c4a?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1583121274567-3dda307a61c6?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3"
    ]
  },
  {
    id: "9",
    brand: "KTM",
    model: "1290 Super Duke R",
    category: "naked",
    price: 1995000,
    description: "Known as 'The Beast', the KTM 1290 Super Duke R is the most aggressive naked bike on the market. With its powerful V-twin engine, nimble chassis, and minimalist bodywork, it delivers an unrivaled street fighting experience.",
    engine: "1301cc, V-Twin",
    power: "180 HP @ 9,500 rpm",
    torque: "140 Nm @ 8,000 rpm",
    weight: "189 kg (dry)",
    featured: false,
    stock: 2,
    rating: 4.7,
    imageUrl: "https://images.unsplash.com/photo-1635071887236-a56dba32dc09?ixlib=rb-4.0.3",
    images: [
      "https://images.unsplash.com/photo-1635071887236-a56dba32dc09?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1635071887412-e755518ae2e9?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1619771914272-e3c1ca74fce7?ixlib=rb-4.0.3"
    ]
  },
  {
    id: "10",
    brand: "Indian",
    model: "Chieftain Dark Horse",
    category: "cruiser",
    price: 2795000,
    description: "The Indian Chieftain Dark Horse combines classic American styling with modern performance and technology. With its powerful Thunder Stroke engine, premium audio system, and distinctive blacked-out finish, it offers a commanding presence on the open road.",
    engine: "116ci (1890cc), V-Twin",
    power: "79 HP @ 4,500 rpm",
    torque: "171 Nm @ 3,000 rpm",
    weight: "385 kg (wet)",
    featured: false,
    stock: 1,
    rating: 4.6,
    imageUrl: "https://images.unsplash.com/photo-1629083480361-fd03faba0396?ixlib=rb-4.0.3",
    images: [
      "https://images.unsplash.com/photo-1629083480361-fd03faba0396?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1629083456095-af22cdd688a4?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1629083480458-b25a424f5669?ixlib=rb-4.0.3"
    ]
  },
  {
    id: "11",
    brand: "Aprilia",
    model: "RSV4 Factory",
    category: "sport",
    price: 2350000,
    description: "The Aprilia RSV4 Factory is the culmination of Aprilia's racing expertise, offering MotoGP technology in a road-legal package. With its powerful V4 engine, advanced electronics, and race-developed chassis, it's designed for those who demand the very best.",
    engine: "1099cc, V4",
    power: "217 HP @ 13,000 rpm",
    torque: "125 Nm @ 10,500 rpm",
    weight: "202 kg (wet)",
    featured: false,
    stock: 2,
    rating: 4.8,
    imageUrl: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    images: [
      "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
      "https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1611241443322-78b19f5a6f10?ixlib=rb-4.0.3"
    ]
  },
  {
    id: "12",
    brand: "BMW",
    model: "R 1250 GS Adventure",
    category: "adventure",
    price: 2050000,
    description: "The BMW R 1250 GS Adventure is the definitive adventure motorcycle, capable of taking you to the ends of the earth in comfort and style. With its legendary boxer engine, advanced technology, and rugged construction, it's the gold standard for global exploration.",
    engine: "1254cc, Boxer Twin",
    power: "136 HP @ 7,750 rpm",
    torque: "143 Nm @ 6,250 rpm",
    weight: "268 kg (wet)",
    featured: true,
    stock: 4,
    rating: 4.9,
    imageUrl: "https://images.unsplash.com/photo-1599819811279-d5ad9cccf838?ixlib=rb-4.0.3",
    images: [
      "https://images.unsplash.com/photo-1599819811279-d5ad9cccf838?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1558980394-0a0c3e9d8e61?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1558980394-34764db076b4?ixlib=rb-4.0.3"
    ]
  },
  {
    id: "13",
    brand: "Ducati",
    model: "Streetfighter V4",
    category: "naked",
    price: 1995000,
    description: "The Ducati Streetfighter V4 takes the raw power of the Panigale V4 and strips it down to create the ultimate super-naked motorcycle. With aggressive styling, potent performance, and advanced electronics, it's a street fighter in the truest sense.",
    engine: "1103cc, V4",
    power: "208 HP @ 13,000 rpm",
    torque: "123 Nm @ 9,500 rpm",
    weight: "178 kg (dry)",
    featured: true,
    newArrival: true,
    stock: 3,
    rating: 4.8,
    imageUrl: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?ixlib=rb-4.0.3",
    images: [
      "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1611241443322-78b19f5a6f10?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1588325104532-89a319b99925?ixlib=rb-4.0.3"
    ]
  },
  {
    id: "14",
    brand: "Triumph",
    model: "Daytona 765",
    category: "sport",
    price: 1385000,
    description: "The Triumph Daytona 765 combines British engineering with racetrack DNA to deliver a precision supersport experience. With its responsive triple engine, agile chassis, and track-focused ergonomics, it's built for both road and circuit excellence.",
    engine: "765cc, Triple",
    power: "130 HP @ 12,250 rpm",
    torque: "80 Nm @ 9,750 rpm",
    weight: "189 kg (wet)",
    featured: false,
    discount: 7,
    stock: 4,
    rating: 4.6,
    imageUrl: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3",
    images: [
      "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1558981806-ec527fa84c39?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1558981359-219d6364c9c8?ixlib=rb-4.0.3"
    ]
  },
  {
    id: "15",
    brand: "MV Agusta",
    model: "F3 RR",
    category: "sport",
    price: 2450000,
    description: "The MV Agusta F3 RR represents the pinnacle of Italian motorcycle artistry and performance. With its exquisite styling, sophisticated electronics, and race-bred triple engine, it delivers a riding experience that's as emotional as it is fast.",
    engine: "798cc, Triple",
    power: "155 HP @ 13,250 rpm",
    torque: "88 Nm @ 10,100 rpm",
    weight: "173 kg (dry)",
    featured: false,
    stock: 2,
    rating: 4.7,
    imageUrl: "https://images.unsplash.com/photo-1591584582830-209d4f431c4a?ixlib=rb-4.0.3",
    images: [
      "https://images.unsplash.com/photo-1591584582830-209d4f431c4a?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1535525153412-5a42439a210d?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1568066932410-3a6141db4daa?ixlib=rb-4.0.3"
    ]
  },
  {
    id: "16",
    brand: "Royal Enfield",
    model: "Classic 650",
    category: "cruiser",
    price: 350000,
    description: "The Royal Enfield Classic 650 elevates the iconic Royal Enfield experience with a larger parallel-twin engine, enhanced performance, and timeless styling that pays homage to the brand's heritage while offering modern reliability and comfort.",
    engine: "648cc, Parallel Twin",
    power: "47 HP @ 7,250 rpm",
    torque: "52 Nm @ 5,250 rpm",
    weight: "213 kg (wet)",
    featured: true,
    discount: 10,
    stock: 12,
    rating: 4.4,
    imageUrl: "https://images.unsplash.com/photo-1635071887236-a56dba32dc09?ixlib=rb-4.0.3",
    images: [
      "https://images.unsplash.com/photo-1635071887236-a56dba32dc09?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1635593908815-41dd2b0fd502?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1626599837005-28be04afbe88?ixlib=rb-4.0.3"
    ]
  },
  {
    id: "17",
    brand: "Moto Guzzi",
    model: "V85 TT",
    category: "adventure",
    price: 1550000,
    description: "The Moto Guzzi V85 TT is a unique proposition in the adventure touring segment, combining classic Italian style with modern touring capability. With its distinctive transverse V-twin engine, shaft drive, and comfortable ergonomics, it's built for distinctive long-distance exploration.",
    engine: "853cc, V-Twin",
    power: "80 HP @ 7,750 rpm",
    torque: "80 Nm @ 5,000 rpm",
    weight: "229 kg (wet)",
    featured: false,
    newArrival: true,
    stock: 5,
    rating: 4.5,
    imageUrl: "https://images.unsplash.com/photo-1627559141892-5cd77a9fb631?ixlib=rb-4.0.3",
    images: [
      "https://images.unsplash.com/photo-1627559141892-5cd77a9fb631?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1568932711552-ed496d1b455e?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1568572933432-74a34aae9f50?ixlib=rb-4.0.3"
    ]
  },
  {
    id: "18",
    brand: "Zero",
    model: "SR/F",
    category: "naked",
    price: 1975000,
    description: "The Zero SR/F represents the cutting edge of electric motorcycle technology, delivering instant torque, silent operation, and zero emissions in a premium package. With its advanced connectivity, customizable power modes, and sleek design, it's the future of motorcycling available today.",
    engine: "Electric (14.4 kWh)",
    power: "110 HP @ 5,000 rpm",
    torque: "190 Nm @ 1 rpm",
    weight: "220 kg",
    featured: true,
    stock: 3,
    rating: 4.6,
    imageUrl: "https://images.unsplash.com/photo-1595876629762-38c73d029137?ixlib=rb-4.0.3",
    images: [
      "https://images.unsplash.com/photo-1595876629762-38c73d029137?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1597079910443-60c58702d1fe?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1635694640039-6e877b51c5f4?ixlib=rb-4.0.3"
    ]
  },
  {
    id: "19",
    brand: "Yamaha",
    model: "XMAX 300",
    category: "touring",
    price: 385000,
    description: "The Yamaha XMAX 300 brings sport and practicality together in a premium mid-sized scooter. With its smooth engine, comfortable ergonomics, and generous storage space, it's the perfect urban companion that also excels on longer journeys.",
    engine: "292cc, Single",
    power: "28 HP @ 7,250 rpm",
    torque: "29 Nm @ 5,750 rpm",
    weight: "179 kg (wet)",
    featured: false,
    discount: 5,
    stock: 8,
    rating: 4.4,
    imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3",
    images: [
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1685654150999-9d67fa2a2544?ixlib=rb-4.0.3"
    ]
  },
  {
    id: "20",
    brand: "Kawasaki",
    model: "Z H2",
    category: "naked",
    price: 2150000,
    description: "The Kawasaki Z H2 redefines the hypernaked category with its supercharged engine, delivering extraordinary performance in a stripped-down package. With its distinctive styling, balanced handling, and unmatched power delivery, it's a revolutionary motorcycle that pushes the boundaries of what's possible.",
    engine: "998cc, Inline-4 Supercharged",
    power: "200 HP @ 11,000 rpm",
    torque: "137 Nm @ 8,500 rpm",
    weight: "239 kg (wet)",
    featured: true,
    stock: 2,
    rating: 4.8,
    imageUrl: "https://images.unsplash.com/photo-1558981285-6f0c94958bb6?ixlib=rb-4.0.3",
    images: [
      "https://images.unsplash.com/photo-1558981285-6f0c94958bb6?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1603539444875-76e7684265f6?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1603539279078-4da6f4741918?ixlib=rb-4.0.3"
    ]
  },
  {
    id: "21",
    brand: "Norton",
    model: "V4SV",
    category: "sport",
    price: 3450000,
    description: "The Norton V4SV represents the rebirth of the iconic British brand with a no-compromise superbike that blends traditional craftsmanship with modern technology. Featuring a hand-built chassis, potent V4 engine, and exquisite details, it embodies exclusivity and performance.",
    engine: "1200cc, V4",
    power: "200 HP @ 12,500 rpm",
    torque: "130 Nm @ 10,000 rpm",
    weight: "193 kg (dry)",
    featured: false,
    newArrival: true,
    stock: 1,
    rating: 4.9,
    imageUrl: "https://images.unsplash.com/photo-1609630875171-b1321377ee65?ixlib=rb-4.0.3",
    images: [
      "https://images.unsplash.com/photo-1609630875171-b1321377ee65?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1615172282427-9a61fca7b64f?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1579801805668-927bf47be512?ixlib=rb-4.0.3"
    ]
  },
  {
    id: "22",
    brand: "CFMoto",
    model: "700CL-X",
    category: "naked",
    price: 699000,
    description: "The CFMoto 700CL-X brings premium features and styling at a value price point. With its spirited parallel-twin engine, modern electronics, and distinctive design, it challenges perceptions of what's possible from an emerging manufacturer in the mid-capacity naked segment.",
    engine: "693cc, Parallel Twin",
    power: "73 HP @ 8,500 rpm",
    torque: "68 Nm @ 6,500 rpm",
    weight: "196 kg (wet)",
    featured: false,
    discount: 12,
    stock: 7,
    rating: 4.3,
    imageUrl: "https://images.unsplash.com/photo-1581092335397-9fa341090291?ixlib=rb-4.0.3",
    images: [
      "https://images.unsplash.com/photo-1581092335397-9fa341090291?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1635073908681-b31dd255916a?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1635071887412-e755518ae2e9?ixlib=rb-4.0.3"
    ]
  },
  {
    id: "23",
    brand: "TVS",
    model: "Apache RR 310",
    category: "sport",
    price: 269000,
    description: "The TVS Apache RR 310 represents the pinnacle of Indian motorcycle engineering, delivering track-inspired performance in a remarkably accessible package. With its advanced features, sophisticated styling, and exceptional handling, it offers a premium riding experience at an attainable price point.",
    engine: "312.2cc, Single",
    power: "34 HP @ 9,700 rpm",
    torque: "27.3 Nm @ 7,700 rpm",
    weight: "174 kg (wet)",
    featured: false,
    stock: 10,
    rating: 4.5,
    imageUrl: "https://images.unsplash.com/photo-1558980394-4c7c9299fe96?ixlib=rb-4.0.3",
    images: [
      "https://images.unsplash.com/photo-1558980394-4c7c9299fe96?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1558980395-34764db076b4?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1558980664-1db506751c6c?ixlib=rb-4.0.3"
    ]
  },
  {
    id: "24",
    brand: "Benelli",
    model: "TRK 502X",
    category: "adventure",
    price: 550000,
    description: "The Benelli TRK 502X brings accessible adventure to riders with its commanding presence, comfortable ergonomics, and robust construction. Designed to tackle varied terrain while maintaining everyday usability, it's an approachable gateway to the world of adventure motorcycling.",
    engine: "500cc, Parallel Twin",
    power: "47 HP @ 8,500 rpm",
    torque: "46 Nm @ 6,000 rpm",
    weight: "235 kg (wet)",
    featured: true,
    discount: 8,
    stock: 6,
    rating: 4.2,
    imageUrl: "https://images.unsplash.com/photo-1599819811279-d5ad9cccf838?ixlib=rb-4.0.3",
    images: [
      "https://images.unsplash.com/photo-1599819811279-d5ad9cccf838?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1558980664-769d59546b3d?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1558980394-34764db076b4?ixlib=rb-4.0.3"
    ]
  }
];

// Generate 48 more products to reach 60 total
const generateMoreProducts = () => {
  const additionalProducts: Product[] = [];
  const brands = ["Ducati", "BMW", "Kawasaki", "Honda", "Yamaha", "Suzuki", "KTM", "Triumph", "Harley-Davidson", "Indian", "Aprilia", "MV Agusta"];
  const categoryIds = categories.map(c => c.slug);
  
  for (let i = 13; i <= 60; i++) {
    const brand = brands[Math.floor(Math.random() * brands.length)];
    const category = categoryIds[Math.floor(Math.random() * categoryIds.length)];
    const price = Math.floor(Math.random() * 1500000) + 800000;
    const rating = (Math.random() * (5 - 4) + 4).toFixed(1);
    const stock = Math.floor(Math.random() * 10) + 1;
    
    let model = "";
    switch (brand) {
      case "Ducati":
        model = ["Monster", "Scrambler", "Multistrada", "Diavel", "SuperSport"][Math.floor(Math.random() * 5)];
        break;
      case "BMW":
        model = ["F 900 R", "R nineT", "R 18", "K 1600", "F 850 GS"][Math.floor(Math.random() * 5)];
        break;
      case "Kawasaki":
        model = ["Z900", "Versys 650", "Vulcan S", "Ninja 650", "Z H2"][Math.floor(Math.random() * 5)];
        break;
      case "Honda":
        model = ["CB650R", "Africa Twin", "Rebel 500", "Gold Wing", "CB1000R"][Math.floor(Math.random() * 5)];
        break;
      case "Yamaha":
        model = ["R1", "Tracer 9 GT", "XSR900", "Ténéré 700", "VMAX"][Math.floor(Math.random() * 5)];
        break;
      case "Suzuki":
        model = ["GSX-R750", "V-Strom 1050", "Katana", "SV650", "Boulevard M109R"][Math.floor(Math.random() * 5)];
        break;
      case "KTM":
        model = ["390 Duke", "790 Adventure", "890 Duke R", "1290 Super Adventure", "RC 390"][Math.floor(Math.random() * 5)];
        break;
      case "Triumph":
        model = ["Street Triple", "Bonneville T120", "Rocket 3", "Scrambler 1200", "Speed Triple"][Math.floor(Math.random() * 5)];
        break;
      case "Harley-Davidson":
        model = ["Street Glide", "Fat Boy", "Forty-Eight", "Iron 883", "Sport Glide"][Math.floor(Math.random() * 5)];
        break;
      case "Indian":
        model = ["Scout", "FTR", "Springfield", "Roadmaster", "Vintage"][Math.floor(Math.random() * 5)];
        break;
      case "Aprilia":
        model = ["Tuono", "RS 660", "Dorsoduro", "Shiver", "Caponord"][Math.floor(Math.random() * 5)];
        break;
      case "MV Agusta":
        model = ["Brutale", "F3", "Turismo Veloce", "Dragster", "Rush"][Math.floor(Math.random() * 5)];
        break;
      default:
        model = "Model " + i;
    }
    
    // Add some random number or variant to model name to ensure uniqueness
    model += " " + (Math.random() > 0.5 ? Math.floor(Math.random() * 900 + 100).toString() : ["S", "R", "GT", "Pro", "Limited"][Math.floor(Math.random() * 5)]);
    
    additionalProducts.push({
      id: i.toString(),
      brand,
      model,
      category,
      price,
      description: `The ${brand} ${model} offers exceptional performance and style in the ${category} segment. With advanced features and premium components, it delivers an unforgettable riding experience.`,
      engine: `${Math.floor(Math.random() * 800 + 400)}cc, ${["V-Twin", "Inline-4", "Triple", "Boxer Twin", "Single"][Math.floor(Math.random() * 5)]}`,
      power: `${Math.floor(Math.random() * 150 + 50)} HP @ ${Math.floor(Math.random() * 5000 + 8000)} rpm`,
      torque: `${Math.floor(Math.random() * 100 + 50)} Nm @ ${Math.floor(Math.random() * 4000 + 3000)} rpm`,
      weight: `${Math.floor(Math.random() * 100 + 170)} kg (wet)`,
      featured: Math.random() > 0.8,
      discount: Math.random() > 0.8 ? Math.floor(Math.random() * 15 + 5) : undefined,
      newArrival: Math.random() > 0.8,
      stock,
      rating: parseFloat(rating),
      imageUrl: `https://source.unsplash.com/random/300x300/?motorcycle,${brand.toLowerCase()},${category}`,
      images: [
        `https://source.unsplash.com/random/600x400/?motorcycle,${brand.toLowerCase()},${category}`,
        `https://source.unsplash.com/random/600x400/?motorcycle,${category}`,
        `https://source.unsplash.com/random/600x400/?biker,riding`
      ]
    });
  }
  
  return additionalProducts;
};

export const allProducts: Product[] = [...products, ...generateMoreProducts()];

export const paymentMethods: PaymentMethod[] = [
  {
    id: "credit_card",
    name: "Credit/Debit Card",
    icon: "credit-card"
  },
  {
    id: "upi",
    name: "UPI",
    icon: "indian-rupee"
  },
  {
    id: "net_banking",
    name: "Net Banking",
    icon: "building-bank"
  },
  {
    id: "cod",
    name: "Cash on Delivery",
    icon: "indian-rupee"
  }
];

export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(price);
};

export const calculateDiscountPrice = (price: number, discount?: number): number => {
  if (!discount) return price;
  return price - (price * (discount / 100));
};
