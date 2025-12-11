const cars = [
  // ---------------- SUVs ----------------
  {
    id: 1,
    name: "BMW X5",
    category: "SUV",
    image: "https://wallpapercat.com/w/full/1/7/7/1682692-2249x1500-desktop-hd-bmw-x5-background-photo.jpg",
    price: 8200000,
    description: "Luxury performance SUV with superior comfort and a powerful engine.",
    details: {
      brand: "BMW",
      model: "X5 xDrive40i",
      fuel: "Petrol",
      transmission: "Automatic",
      mileage: "11 km/l",
      year: 2023
    },
    extraDetails: {
      engine: "3.0L TwinPower Turbo inline-6",
      horsepower: "335 HP",
      torque: "450 Nm",
      topSpeed: "250 km/h",
      acceleration: "0–100 km/h in 5.5 sec",
      seating: "5 Seater",
      driveType: "All-Wheel Drive",
      safety: "5-Star Global NCAP",
      features: [
        "Panoramic Sunroof",
        "360° Camera",
        "Adaptive Air Suspension",
        "Wireless CarPlay/Android Auto",
        "Harman Kardon Audio",
        "Ventilated Seats",
        "Heads-Up Display"
      ]
    }
  },

  {
    id: 2,
    name: "Audi Q7",
    category: "SUV",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBg4qUIOvkGpItdnYGk7Q-NxmvQjVwQ8umlQ&s",
    price: 8500000,
    description: "Premium luxury 7-seater SUV with advanced features and quattro AWD.",
    details: {
      brand: "Audi",
      model: "Q7 55 TFSI",
      fuel: "Petrol",
      transmission: "Automatic",
      mileage: "11.2 km/l",
      year: 2023
    },
    extraDetails: {
      engine: "3.0L V6 Turbo",
      horsepower: "340 HP",
      torque: "500 Nm",
      topSpeed: "250 km/h",
      acceleration: "0–100 km/h in 5.9 sec",
      seating: "7 Seater",
      driveType: "quattro AWD",
      safety: "5-Star Euro NCAP",
      features: [
        "Matrix LED Headlamps",
        "Virtual Cockpit",
        "Adaptive Cruise Control",
        "Panoramic Sunroof",
        "Bang & Olufsen 3D Audio",
        "4-Zone Climate Control"
      ]
    }
  },

  {
    id: 3,
    name: "Mercedes-Benz GLE",
    category: "SUV",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQPbh-yuvTIlyu06LFkeFZ-lTG26NrIb8j0g&s",
    price: 9000000,
    description: "Spacious luxury SUV with advanced technology and premium comfort.",
    details: {
      brand: "Mercedes-Benz",
      model: "GLE 450 4Matic",
      fuel: "Petrol",
      transmission: "Automatic",
      mileage: "10 km/l",
      year: 2023
    },
    extraDetails: {
      engine: "3.0L inline-6 Turbo + EQ Boost",
      horsepower: "362 HP",
      torque: "500 Nm",
      topSpeed: "250 km/h",
      acceleration: "0–100 km/h in 5.7 sec",
      seating: "5 Seater",
      driveType: "4Matic AWD",
      safety: "5-Star",
      features: [
        "MBUX Dual Screens",
        "AIRMATIC Suspension",
        "360° Camera",
        "Burmester Audio",
        "Panoramic Sunroof"
      ]
    }
  },

  {
    id: 4,
    name: "Range Rover Vogue",
    category: "SUV",
    image: "https://i.cdn.newsbytesapp.com/images/l207_10001639717566.jpg",
    price: 23000000,
    description: "The ultimate luxury SUV with unmatched comfort and road presence.",
    details: {
      brand: "Land Rover",
      model: "Range Rover Vogue",
      fuel: "Diesel",
      transmission: "Automatic",
      mileage: "8 km/l",
      year: 2023
    },
    extraDetails: {
      engine: "3.0L Turbocharged",
      horsepower: "346 HP",
      torque: "700 Nm",
      topSpeed: "218 km/h",
      acceleration: "0–100 km/h in 6.9 sec",
      seating: "5 Seater",
      driveType: "AWD",
      safety: "5-Star",
      features: [
        "Executive Rear Seats",
        "Terrain Response 2",
        "Meridian Surround Sound",
        "Panoramic Roof",
        "Air Suspension"
      ]
    }
  },

  {
    id: 5,
    name: "Range Rover Sport",
    category: "SUV",
    image: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Land-Rover/Range-Rover-Sport/12528/1745923553937/front-left-side-47.jpg",
    price: 17000000,
    description: "A powerful and sporty version of the legendary Range Rover.",
    details: {
      brand: "Land Rover",
      model: "Range Rover Sport",
      fuel: "Diesel",
      transmission: "Automatic",
      mileage: "9 km/l",
      year: 2023
    },
    extraDetails: {
      engine: "3.0L Turbo Diesel",
      horsepower: "300 HP",
      torque: "650 Nm",
      topSpeed: "225 km/h",
      acceleration: "0–100 km/h in 7.2 sec",
      seating: "5 Seater",
      driveType: "AWD",
      safety: "5-Star",
      features: [
        "Adaptive Dynamics",
        "Air Suspension",
        "Meridian Audio",
        "Panoramic Roof",
        "Terrain Control"
      ]
    }
  },

  {
    id: 6,
    name: "Porsche Cayenne",
    category: "SUV",
    image: "https://www.williamscrawford.co.uk/wp-content/uploads/2023/08/porsche-cayenne-turbo-modified-for-sale-williams-crawford-9566.jpg",
    price: 14000000,
    description: "High-performance luxury SUV with Porsche DNA.",
    details: {
      brand: "Porsche",
      model: "Cayenne",
      fuel: "Petrol",
      transmission: "Automatic",
      mileage: "8.4 km/l",
      year: 2023
    },
    extraDetails: {
      engine: "3.0L Turbo V6",
      horsepower: "335 HP",
      torque: "450 Nm",
      topSpeed: "245 km/h",
      acceleration: "0–100 km/h in 6.2 sec",
      seating: "5 Seater",
      driveType: "AWD",
      safety: "5-Star",
      features: [
        "Sport Chrono Package",
        "Adaptive Air Suspension",
        "BOSE Audio",
        "Panoramic Roof",
        "360° Sensors"
      ]
    }
  },

  {
    id: 7,
    name: "Lexus LX 570",
    category: "SUV",
    image: "https://i.ytimg.com/vi/T0mRzV1Xi6E/sddefault.jpg",
    price: 26000000,
    description: "Full-size luxury SUV known for reliability and power.",
    details: {
      brand: "Lexus",
      model: "LX 570",
      fuel: "Petrol",
      transmission: "Automatic",
      mileage: "6 km/l",
      year: 2021
    },
    extraDetails: {
      engine: "5.7L V8",
      horsepower: "383 HP",
      torque: "546 Nm",
      topSpeed: "210 km/h",
      acceleration: "0–100 km/h in 7.3 sec",
      seating: "7 Seater",
      driveType: "4WD",
      safety: "5-Star",
      features: [
        "Mark Levinson Audio",
        "Adaptive Cruise",
        "Multi-Terrain Select",
        "Ventilated Seats",
        "Rear Entertainment"
      ]
    }
  },

  {
    id: 8,
    name: "Volvo XC90",
    category: "SUV",
    image: "https://www.cnet.com/a/img/resize/c9e77e8dbc5dea1677f48cc27b262d6a2f3221f2/hub/2014/08/26/22fb6fac-e12c-4332-9fbb-42b5a0dc0cf7/2016volvoxc90prev-000.jpg?auto=webp&fit=crop&height=675&width=1200",
    price: 9500000,
    description: "Premium 7-seater SUV with top-tier safety and Scandinavian design.",
    details: {
      brand: "Volvo",
      model: "XC90 B6",
      fuel: "Petrol",
      transmission: "Automatic",
      mileage: "11 km/l",
      year: 2023
    },
    extraDetails: {
      engine: "2.0L Turbo + Supercharged",
      horsepower: "300 HP",
      torque: "420 Nm",
      topSpeed: "180 km/h (Limited)",
      acceleration: "0–100 km/h in 7 sec",
      seating: "7 Seater",
      driveType: "AWD",
      safety: "5-Star (Top Safety Pick)",
      features: [
        "Pilot Assist",
        "360° Camera",
        "Bowers & Wilkins Audio",
        "Panoramic Roof",
        "Massage Seats"
      ]
    }
  },

  // ---------------- Sedans ----------------
  {
    id: 9,
    name: "BMW 3 Series",
    category: "Sedan",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/91/BMW_G20_%282022%29_IMG_7316_%282%29.jpg",
    price: 6000000,
    description: "Sporty and premium luxury sedan with dynamic driving performance.",
    details: {
      brand: "BMW",
      model: "330Li M Sport",
      fuel: "Petrol",
      transmission: "Automatic",
      mileage: "15 km/l",
      year: 2023
    },
    extraDetails: {
      engine: "2.0L TwinPower Turbo",
      horsepower: "258 HP",
      torque: "400 Nm",
      topSpeed: "250 km/h",
      acceleration: "0–100 km/h in 6.2 sec",
      seating: "5 Seater",
      driveType: "RWD",
      safety: "5-Star",
      features: [
        "Gesture Control",
        "Digital Cockpit",
        "Harman Kardon Audio",
        "Sunroof",
        "Ambient Lighting"
      ]
    }
  },

  {
    id: 10,
    name: "Audi A6",
    category: "Sedan",
    image: "https://images.alphacoders.com/101/thumb-1920-1018966.jpg",
    price: 6700000,
    description: "Premium executive sedan with refined luxury and tech.",
    details: {
      brand: "Audi",
      model: "A6 45 TFSI",
      fuel: "Petrol",
      transmission: "Automatic",
      mileage: "14 km/l",
      year: 2023
    },
    extraDetails: {
      engine: "2.0L Turbo",
      horsepower: "245 HP",
      torque: "370 Nm",
      topSpeed: "250 km/h",
      acceleration: "0–100 km/h in 6.8 sec",
      seating: "5",
      features: [
        "Matrix LED Headlamps",
        "Virtual Cockpit",
        "B&O Sound",
        "4-Zone Climate",
        "Sunroof"
      ]
    }
  },

  {
    id: 11,
    name: "Mercedes-Benz S-Class",
    category: "Luxury Sedan",
    image: "https://img.freepik.com/premium-photo/new-mercedesbenz-sclass-car-showcased-front-building_1123896-150850.jpg?semt=ais_hybrid&w=740&q=80",
    price: 17000000,
    description: "The benchmark in luxury sedans with unmatched comfort.",
    details: {
      brand: "Mercedes-Benz",
      model: "S450 4Matic",
      fuel: "Petrol",
      transmission: "Automatic",
      mileage: "9 km/l",
      year: 2023
    },
    extraDetails: {
      engine: "3.0L Turbo + Hybrid",
      horsepower: "362 HP",
      torque: "500 Nm",
      topSpeed: "250 km/h",
      acceleration: "0–100 km/h in 5.1 sec",
      seating: "5",
      features: [
        "MBUX 2.0",
        "Rear Executive Seats",
        "Burmester 4D Audio",
        "Panoramic Roof",
        "Massage Seats"
      ]
    }
  },

  {
    id: 12,
    name: "BMW 7 Series",
    category: "Luxury Sedan",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/BMW_730d_%28G11%2C_Facelift%29_%E2%80%93_f_16012021.jpg/1200px-BMW_730d_%28G11%2C_Facelift%29_%E2%80%93_f_16012021.jpg",
    price: 16000000,
    description: "A flagship luxury sedan offering first-class comfort.",
    details: {
      brand: "BMW",
      model: "740Li",
      fuel: "Petrol",
      transmission: "Automatic",
      mileage: "10 km/l",
      year: 2023
    },
    extraDetails: {
      engine: "3.0L Turbo",
      horsepower: "340 HP",
      torque: "450 Nm",
      topSpeed: "250 km/h",
      acceleration: "0–100 km/h in 5.6 sec",
      seating: "5",
      features: [
        "Theatre Screen",
        "Bowers & Wilkins Audio",
        "Massaging Seats",
        "Panoramic Roof",
        "Executive Lounge"
      ]
    }
  },

  {
    id: 13,
    name: "Audi A8 L",
    category: "Luxury Sedan",
    image: "https://wallpaper.forfun.com/fetch/7e/7eede341f9dd3a8dda3c4b897914cd22.jpeg",
    price: 15000000,
    description: "High-tech luxury sedan with exceptional comfort.",
    details: {
      brand: "Audi",
      model: "A8 L 55 TFSI",
      fuel: "Petrol",
      transmission: "Automatic",
      mileage: "8 km/l",
      year: 2023
    },
    extraDetails: {
      engine: "3.0L V6 Turbo",
      horsepower: "340 HP",
      torque: "500 Nm",
      topSpeed: "250 km/h",
      acceleration: "0–100 km/h in 5.7 sec",
      seating: "5",
      features: [
        "Rear Relaxation Seats",
        "Matrix LED Headlamps",
        "Bang & Olufsen 3D Sound",
        "Soft Close Doors",
        "4-Zone Climate"
      ]
    }
  },

  {
    id: 14,
    name: "Porsche Panamera",
    category: "Luxury Sedan",
    image: "https://www.thedrive.com/wp-content/uploads/2025/06/Porsche-Panamera-E-Hybrid-50.jpg?quality=85",
    price: 16000000,
    description: "Luxury + sports performance in a 4-door coupe body.",
    details: {
      brand: "Porsche",
      model: "Panamera",
      fuel: "Petrol",
      transmission: "Automatic",
      mileage: "10 km/l",
      year: 2023
    },
    extraDetails: {
      engine: "2.9L Twin-Turbo V6",
      horsepower: "325 HP",
      torque: "450 Nm",
      topSpeed: "270 km/h",
      acceleration: "0–100 km/h in 5.6 sec",
      seating: "4",
      features: [
        "Sport Chrono Package",
        "BOSE Audio",
        "Adaptive Air Suspension",
        "4-Zone AC",
        "Soft Close Doors"
      ]
    }
  },

  {
    id: 15,
    name: "Volvo S90",
    category: "Sedan",
    image: "https://w0.peakpx.com/wallpaper/23/255/HD-wallpaper-volvo-s90-t8-awd-recharge-inscription.jpg",
    price: 6200000,
    description: "Elegant luxury sedan with best-in-class safety.",
    details: {
      brand: "Volvo",
      model: "S90 B5",
      fuel: "Petrol",
      transmission: "Automatic",
      mileage: "14 km/l",
      year: 2023
    },
    extraDetails: {
      engine: "2.0L Turbo + Mild Hybrid",
      horsepower: "250 HP",
      torque: "350 Nm",
      topSpeed: "180 km/h",
      acceleration: "0–100 km/h in 7.2 sec",
      seating: "5",
      features: [
        "Bowers & Wilkins Sound",
        "Pilot Assist",
        "360° Camera",
        "Massage Seats",
        "Panoramic Roof"
      ]
    }
  }
];
