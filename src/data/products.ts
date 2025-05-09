
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
