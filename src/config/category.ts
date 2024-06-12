import medicine from "@/assets/Medicine.webp";
import Functionalfood from "@/assets/Functional food.webp";
import personalcare from "@/assets/Personal care.webp";
import beauty from "@/assets/Beauty care.webp";
import equipment from "@/assets/Medical equipment.webp";
import thuockedon from "@/assets/thuockedon.png";
import thuoctheotoa from "@/assets/thuoctheotoa.png";
import chevronRight from "@/assets/chevron-right.svg";
import { CategoryItemType } from "@/types";

import medicine1_1 from "@/assets/medicine/1-1.jpg";
import medicine1_2 from "@/assets/medicine/1-2.webp";
import medicine1_3 from "@/assets/medicine/1-3.webp";
import medicine1_4 from "@/assets/medicine/1-4.webp";
import medicine1_5 from "@/assets/medicine/1-5.webp";

import medicine2_1 from "@/assets/medicine/2-1.webp";
import medicine2_2 from "@/assets/medicine/2-2.jpg";
import medicine2_3 from "@/assets/medicine/2-3.webp";

import ff1 from "@/assets/food-functional/1.png";
import ff2 from "@/assets/food-functional/2.png";
import ff3 from "@/assets/food-functional/3.webp";
import ff4 from "@/assets/food-functional/4.png";
import ff5 from "@/assets/food-functional/5.png";

import ff1_1 from "@/assets/food-functional/1-1.jpg";
import ff1_2 from "@/assets/food-functional/1-2.jpg";
import ff1_3 from "@/assets/food-functional/1-3.jpg";

import ff2_1 from "@/assets/food-functional/2-1.jpg";
import ff2_2 from "@/assets/food-functional/2-2.jpg";
import ff2_3 from "@/assets/food-functional/2-3.webp";

import ff3_1 from "@/assets/food-functional/3-1.jpg";
import ff3_2 from "@/assets/food-functional/3-2.jpg";
import ff3_3 from "@/assets/food-functional/3-3.jpg";

import ff4_1 from "@/assets/food-functional/4-1.webp";

import ff5_1 from "@/assets/food-functional/5-1.jpg";
import ff5_2 from "@/assets/food-functional/5-2.jpg";
import ff5_3 from "@/assets/food-functional/5-3.webp";

import pc1 from "@/assets/personal-care/1.webp";
import pc2 from "@/assets/personal-care/2.webp";
import pc3 from "@/assets/personal-care/3.webp";

import pc1_1 from "@/assets/personal-care/1-1.jpg";
import pc1_2 from "@/assets/personal-care/1-2.webp";
import pc1_3 from "@/assets/personal-care/1-3.jpg";

import pc2_1 from "@/assets/personal-care/2-1.webp";

import pc3_1 from "@/assets/personal-care/3-1.webp";

import bc1 from "@/assets/beauty-care/1.webp";
import bc2 from "@/assets/beauty-care/2.png";
import bc1_1 from "@/assets/beauty-care/1-1.webp";
import bc1_2 from "@/assets/beauty-care/1-2.jpg";
import bc2_1 from "@/assets/beauty-care/2-1.jpg";
import bc2_2 from "@/assets/beauty-care/2-2.webp";

import me1 from "@/assets/meq/1.png";
import me2 from "@/assets/meq/2.png";
import me1_1 from "@/assets/meq/1-1.jpg";
import me1_2 from "@/assets/meq/1-2.webp";
import me2_1 from "@/assets/meq/2-1.webp";
import me2_2 from "@/assets/meq/2-2.jpg";

const Category: CategoryItemType[] = [
    {
        label: "Medicine",
        img: medicine,
        path: "medicine",
        group: [
            {
                label: "Over-the-counter medicine",
                img: thuockedon,
                products: [
                    {
                        name: "Acehasan oral powder 200mg reduces mucus in mucus diseases (30 packs x 3g)",
                        price: "147.990 ₫",
                        img: medicine1_1,
                    },
                    {
                        name: "Exomuc oral powder 200mg reduces mucus in mucus diseases (30 packets x 1g)",
                        price: "147.990 ₫",
                        img: medicine1_2,
                    },
                    {
                        name: "Flexsa 1500 oral powder reduces symptoms of mild and moderate knee arthritis (30 packs x 3.7g)",
                        price: "147.990 ₫",
                        img: medicine1_3,
                    },
                    {
                        name: "Fortrans oral powder for colon cleansing before endoscopy and surgery (73.69g pack)",
                        price: "37.000 ₫",
                        img: medicine1_4,
                    },
                    {
                        name: "Livosil 140mg capsules to treat hepatitis and cirrhosis (8 blister packs x 15 tablets)",
                        price: "828.000 ₫",
                        img: medicine1_5,
                    },
                ],
            },
            {
                label: "Prescription medicine",
                img: thuoctheotoa,
                products: [
                    {
                        name: "Seretide Accuhaler 50/250mcg inhalation powder for treating asthma and chronic obstructive pulmonary disease (box of 60 doses)",
                        price: "Need to consult a pharmacist",
                        img: medicine2_1,
                    },
                    {
                        name: "Biocemet SC 500mg/62.5mg oral powder to treat bacterial infections (box of 12 packs)",
                        price: "Need to consult a pharmacist",
                        img: medicine2_2,
                    },
                    {
                        name: "Cefaclor 125mg Domesco antibiotic powder to treat bacterial infections (10 packs x 2g)",
                        price: "Need to consult a pharmacist",
                        img: medicine2_3,
                    },
                ],
            },
            {
                label: "See all",
                img: chevronRight,
            },
        ],
    },
    {
        label: "Functional food",
        img: Functionalfood,
        path: "functional-food",
        group: [
            {
                label: "Beauty care",
                img: ff1,
                products: [
                    {
                        name: "Kolmar Beyou Collagen Drink 10,000mg Collagen Supplement (Box of 10 Bottles)",
                        price: "652.500 ₫",
                        img: ff1_1,
                    },
                    {
                        name: "BLISSBERRY Pureskin Whitening Collagen 2 in 1 pills support skin beauty (Box of 60 pills)",
                        price: "483.000 ₫",
                        img: ff1_2,
                    },
                    {
                        name: "Kudos Glow pills to support skin, hair, and nails (Box of 30 pills)",
                        price: "250.400 ₫",
                        img: ff1_3,
                    },
                ],
            },
            {
                label: "Cardiovascular group",
                img: ff2,
                products: [
                    {
                        name: "BLISSBERRY Purehealth Cholesterol Care K22 pills help limit oxidation and help reduce cholesterol.",
                        price: "483.000 ₫",
                        img: ff2_1,
                    },
                    {
                        name: "DHG NattoEnzym 1000 DHG pills help reduce the risk of blood vessel blockage (Bottle of 60 pills)",
                        price: "365.000 ₫",
                        img: ff2_2,
                    },
                    {
                        name: "DHG NattoEnzym pills support the prevention of accidents and strokes (Box of 1 bottle x 90 pills)",
                        price: "367.000 ₫",
                        img: ff2_3,
                    },
                ],
            },
            {
                label: "respiratory group",
                img: ff3,
                products: [
                    {
                        name: "Eugica Candy Cool Extra herbal candy helps soothe coughs and relieve sore throat pain (Package of 15 tablets)",
                        price: "17.000 ₫",
                        img: ff3_1,
                    },
                    {
                        name: "Eugica Ivy Syrup helps support expectoration and relieve cough (100ml)",
                        price: "67.800 ₫",
                        img: ff3_2,
                    },
                    {
                        name: "Eugica Ivy Syrup supports expectoration and reduces cough (Box of 20 packs x 5ml)",
                        price: "87.400 ₫",
                        img: ff3_3,
                    },
                ],
            },
            {
                label: "Hair care",
                img: ff4,
                products: [
                    {
                        name: "Vitabiotics Perfectil pills support skin, hair and nail care (Box of 30 pills)",
                        price: "544.000 ₫",
                        img: ff4_1,
                    },
                ],
            },
            {
                label: "Multivitamins and minerals",
                img: ff5,
                products: [
                    {
                        name: "Eugica Candy Cool Extra herbal candy helps soothe coughs and relieve sore throat pain (Package of 15 tablets)",
                        price: "17.000 ₫",
                        img: ff5_1,
                    },
                    {
                        name: "Eugica Ivy Syrup helps support expectoration and relieve cough (100ml)",
                        price: "67.800 ₫",
                        img: ff5_2,
                    },
                    {
                        name: "Eugica Ivy Syrup supports expectoration and reduces cough (Box of 20 packs x 5ml)",
                        price: "87.400 ₫",
                        img: ff5_3,
                    },
                ],
            },
            {
                label: "See all",
                img: chevronRight,
            },
        ],
    },
    {
        label: "Personal care",
        img: personalcare,
        path: "personal-care",
        group: [
            {
                label: "deodorant products",
                img: pc1,
                products: [
                    {
                        name: "Nivea Anti-Perspirant Pearl & Beauty deodorant (50ml)",
                        price: "90.000 ₫",
                        img: pc1_1,
                    },
                    {
                        name: "Enchantuer Charming Deodorant Wax Enchantuer Deluxe Stick Deodorant Anti-Perspirant Charming (Bottle 40g)",
                        price: "89.800 ₫",
                        img: pc1_2,
                    },
                    {
                        name: "Nivea Anti-Perspirant Pearl & Beauty deodorant spray (150ml)",
                        price: "117.400 ₫",
                        img: pc1_3,
                    },
                ],
            },
            {
                label: "bathroom products",
                img: pc2,
                products: [
                    {
                        name: "Pharmacity optimal protection hand sanitizer (200ml bottle) - New",
                        price: "31.000 ₫",
                        img: pc2_1,
                    },
                ],
            },
            {
                label: "hair care",
                img: pc3,
                products: [
                    {
                        name: "Cocayhoala 2 in 1 polygonum shampoo 450g",
                        price: "290.000 ₫",
                        img: pc3_1,
                    },
                ],
            },
            {
                label: "See all",
                img: chevronRight,
            },
        ],
    },
    {
        label: "Beauty care",
        img: beauty,
        path: "beauty-care",
        group: [
            {
                label: "face care",
                img: bc1,
                products: [
                    {
                        name: "Acnes Foaming Wash Foaming Facial Cleanser Supports Acne Reduction, Limits Dark Scars (150ml Bottle)",
                        price: "65.450 ₫",
                        img: bc1_1,
                    },
                    {
                        name: "Garnier Bright Complete Pure Vitamin C Brightening Enhancer (30ml Bottle)",
                        price: "349.800 ₫",
                        img: bc1_2,
                    },
                ],
            },
            {
                label: "anti-aging products",
                img: bc2,
                products: [
                    {
                        name: "SUNPLAY Skin Aqua Clear White Sunscreen Lotion SPF50+ PA++++ (55g Tube)",
                        price: "175.200 ₫",
                        img: bc2_1,
                    },
                    {
                        name: "BIORÉ UV Aqua Rich Watery Sunscreen Gel Prevents and Reduces Tanning SPF50+/PA++++ (90ml Bottle)",
                        price: "149.400 ₫",
                        img: bc2_2,
                    },
                ],
            },
            {
                label: "See all",
                img: chevronRight,
            },
        ],
    },
    {
        label: "Medical equipment",
        img: equipment,
        path: "medical-equipment",
        group: [
            {
                label: "blood glucose meter",
                img: me1,
                products: [
                    {
                        name: "Box of CONTOUR PLUS blood sugar test strips for easy blood collection, giving results in 5 seconds (box of 2x25 strips)",
                        price: "377.000 ₫",
                        img: me1_1,
                    },
                    {
                        name: "OGCARE personal blood glucose meter takes blood extremely fast in 0.1 seconds (box of 1)",
                        price: "1.150.000 ₫",
                        img: me1_2,
                    },
                ],
            },
            {
                label: "sphygmomanometer",
                img: me2,
                products: [
                    {
                        name: "Kachi MK167 blood pressure monitor",
                        price: "790.000 ₫",
                        img: me2_1,
                    },
                    {
                        name: "MICROLIFE BP A6 Basic automatic upper arm blood pressure monitor, supports heart rate screening, stroke warning (box of 1)",
                        price: "1.980.000 ₫",
                        img: me2_2,
                    },
                ],
            },
            {
                label: "See all",
                img: chevronRight,
            },
        ],
    },
];

export default Category;
