import { Category, Product } from './types';

const DRINK_CAN_ASSET_BASE = '/assets/Drink Cans processed';
const DRINK_BOTTLE_ASSET_BASE = '/assets/Drink Bottles Processed';
const AVIKO_ASSET_BASE = '/assets/Aviko - Processed incomp';
const BREAD_BUNS_ASSET_BASE = '/assets/Bread & buns processed';
const BURGER_ASSET_BASE = '/assets/Burger Processed';
const CANNED_ASSET_BASE = '/assets/Canned food 2';
const CANNED_PROC_ASSET_BASE = '/assets/Canned Food Proc';
const CHEESE_ASSET_BASE = '/assets/Cheese processed';
const CONFECTIONERY_ASSET_BASE = '/assets/Confectionery Processed';
const DESSERT_ASSET_BASE = '/assets/Dessert Processed';
const FLOUR_RICE_ASSET_BASE = '/assets/Flours & Rice';
const FRESH_ASSET_BASE = '/assets/Fresh';
const FROZEN_MEATS_ASSET_BASE = '/assets/Frozen Meats';
const FROZEN_PRODUCTS_ASSET_BASE = '/assets/Frozen Products';
const FROZEN_PRODUCTS_2_ASSET_BASE = '/assets/Frozen Products 2';
const LAMB_WESTON_ASSET_BASE = '/assets/Lamb Weston';
const PACKAGING_ASSET_BASE = '/assets/Fc Boxes - Sos Bags';
const GREASEPROOF_ASSET_BASE = '/assets/Greaseproof & paper bags';
const WRAPPING_ASSET_BASE = '/assets/Wrapping products';
const SACTO_ASSET_BASE = '/assets/Sacto';
const SAUCE_ASSET_BASE = '/assets/Sauces processed';
const LION_SAUCES_ASSET_BASE = '/assets/Lion Sauces';
const MAYO_ASSET_BASE = '/assets/Mayo';
const GENERAL_ITEMS_ASSET_BASE = '/assets/General Items';
const VEGETABLES_ASSET_BASE = '/assets/Vegetables';
const GENERAL_SPICES_ASSET_BASE = '/assets/General spices';
const GENERAL_SPICES_2_ASSET_BASE = '/assets/General Spices 2';
const HEERA_SPICES_ASSET_BASE = '/assets/Heera Spices';
const HERRA_SPICES_2_ASSET_BASE = '/assets/Herra Spices 2';
const NATCO_SPICES_ASSET_BASE = '/assets/Nacto Spices';
const OIL_FATS_ASSET_BASE = '/assets/Oil & Fats';
const PLASTIC_BIN_BAGS_ASSET_BASE = '/assets/Plasctic & Bin Bags';
const TISSUES_ASSET_BASE = '/assets/Tissues';

const DRINK_CAN_FILES = [
  '7UP CANS 24X330ML.webp',
  'BAR CHERRYADE 24X330 ML.webp',
  'BAR COLA 24X330 ML.webp',
  'BAR LEMONADE  24X330 ML.webp',
  'CAPRISUN (40X200ML).webp',
  'CHERRY COKE CANS (GB) 24X330ML.webp',
  'COKE CANS 24X330ML.webp',
  'DIET COKE 330ML 30PK.webp',
  'Dr PEPPER 24 X 330ml GB.webp',
  'FANTA FRT TWIST 24X330ML GB.webp',
  'FANTA G PE & P APPLE 24 X 330ML GB.webp',
  'FANTA LEMON 24 X 330ML GB.webp',
  'FANTA ORANGE 24X330ML GB.webp',
  'ICE COLA 24 X 330ML.webp',
  'ICE LEMONADE 24 X 330ML.webp',
  'ICE MANGO 24 X 330ML.webp',
  'ICE MAX 24 X 330ML.webp',
  'ICE ORANGE 24 X 330ML.webp',
  'ICE STRAWBERRY 24 X 330ML.webp',
  'IRN BRU 24X330 ML GB.webp',
  'LUCOZADE ORANGE 24X380ML.webp',
  'MIRINDA  ORANGE 24X330ML.webp',
  'MIRINDA STRAWBERRY 24X330ML.webp',
  'MONSTER ENERGY DRINK.webp',
  'PEPSI CANS    24 X 330ML.webp',
  'PEPSI LIGHT CANS 24X330ML.webp',
  'PEPSI MAX CANS 24X330ML.webp',
  'RED BULL 24 X 250 ML.webp',
  'RIBENA BLK CURNT 24X250ML.webp',
  'RIO TROPICAL 24X330ML GB.webp',
  'RUBICON MANGO 24X330ML GB.webp',
  'RUBICON PASSION 24X330ML GB .webp',
  'RUBICUN GUAVA 24X330ML GB.webp',
  'SPRITE 24X330ML GB.webp',
  'TANGO APPLE 24X330ML GB.webp',
  'TANGO ORANGE 24X330ML GB.webp',
  'VIMTO 24X330ML GB.webp',
  'ZANTI COLA 330X24ML.webp',
] as const;

const SAUCE_BOTTLE_FILES = [
  'HARRISONS GARLIC MAYO 1LTR.webp',
  'HARRISONS GARLIC MAYO 6 X1LTR.webp',
  'HARRISONS S CHILLI 1LTR.webp',
  'HARRISONS S CHILLI 6x1LTR.webp',
] as const;

const AVIKO_FILES = [
  'AVIKO BATTERED ONION RINGS BOX 6X1KG.webp',
  'AVIKO CHILLI CHEDDAR NUGGETS5X1KG.webp',
  'AVIKO HASH BROWNS TRIANGLE 4X2.5KG.webp',
  'AVIKO HASHBROWN  TRIANGAES 2.5 KG.webp',
  'AVIKO JALAPENO CHEESE SNK1X5 KG.webp',
  'AVIKO MAC && CHEESE 1 X 6 KG BOX.webp',
  'AVIKO MOZZARELLA STICKS 1KG.webp',
  'AVIKO MOZZASTICKS 5X1KG.webp',
  'AVIKO ONION RINGS 1X1KG.webp',
  'AVIKO PREMIUM CR 7MM 10 KG.webp',
  'AVIKO PREMIUM CURNCH 38 9.5MM.webp',
  'AVIKO SUPER CRUNCH  9.5 MM 4X2.5KG.webp',
  'AVIKO SWEET POTATO 1X2.2KG.webp',
  'AVIKO SWEET POTATO FRIES BOX .webp',
  'AVIKO VEGGIE BURGER 1125G.webp',
] as const;

const BREAD_BUNS_FILES = [
  '4 BUNS AMERICANA SEEDED BOX.webp',
  '4.5 BUNS AMERICANA SEEDED BOX.webp',
  '5 BUNS AMERICANA SEEDED BOX.webp',
  '5 BUNS LETSDOUGH 48X86G.webp',
  '6.5 SIDE SLICED HOT DOG ROLLS BOX.webp',
  'AMR BROICHE BUN 4.5.webp',
  'CABICO T WRAP 12.webp',
  'DULCESOL BRIOCHE .webp',
  'DULCESOL HOT DOG.webp',
  'DULCESOL WRAPS 10.webp',
  'LETSDOUGH SEEDED BUN 4.5.webp',
  'SABAT PITTA BREAD LARGE 18X6.webp',
  'SANTA MARIA 10 WRAPS 5X10.webp',
  'SANTA MARIA 12 WRAPS 10X10.webp',
  'ST PIERRE BUN SEEDEDX36.webp',
  'TORTILLA 25CM AYCAN 10.webp',
  'TORTILLA 30CM AYCAN 12.webp',
] as const;

const BURGER_FILES = [
  'PARAGON BASIC BUR 40z.webp',
  'PARAGON BASIC BURGER 2oz.webp',
  'PARAGON GOURMET BURGER.webp',
  'PARAGON HALAL CROWN BURGER 4OZ.webp',
  'PARAGON HALAL SMASH BRG 3OZ.webp',
  'PARGON CLASSIC BURGERS.webp',
] as const;

const CANNED_FILES = [
  'AYTAC CHICK PEAS JAR 12X540g.webp',
  'CARTIER BLACK OLIVES TIN 12X1KG.webp',
  'CARTIER BLACK OLIVES TIN 1X5KG.webp',
  'CARTIER BLACK OLIVES TIN 3X5KG.webp',
  'CARTIER GREEN OLIVES TIN 12X1KG.webp',
  'CARTIER GREEN OLIVES TIN 1X5KG.webp',
  'CARTIER GREEN OLIVES TIN 3X5KG.webp',
  'CRESPO GREEN OLIVE 1X420G.webp',
  'CRESPO GREEN OLIVE 3X420G.webp',
  'DL COCUNUT MILK 24X400ML.webp',
  'DON VALLE LEMON DRESSING 24X400 ML.webp',
  'HEERA MANGO CHUTNEY 40KG.webp',
  'HEERA MANGO CHUTNEY 5KG.webp',
  'NATCO CHOPPED TOMATOES 2.5KG.webp',
  'NATCO CHOPPED TOMATOES 6X2.5KG.webp',
  'NATCO MANGO PULP 450G.webp',
  'NATCO MANGO PULP 450GX12.webp',
  'NATCO MANGO PULP 6X850G.webp',
  'NATCO PEELED TOMATOES 2.5KG.webp',
  'NATCO PEELED TOMATOES 6X2.5KG.webp',
  'NVR  GERHKINS WHOLE  1 X 2.4ML.webp',
  'NVR  GERHKINS WHOLE  2 X 2.4ML.webp',
  'PINEAPPLE CUT PIECES 12X825G.webp',
  'PRIMA CHILLI PEPPERS PICKLED TIN 10 KG.webp',
  'PRIMA MANGO CHUTNEY 5KG.webp',
  'PRIMA PINEAPPLE 12x850G.webp',
  'PRIMA SLICED BLACK OLIVES 3 KG.webp',
  'PRIMA SLICED BLACK OLIVES 6x3 KG.webp',
  'TAHINI AL NAKHLA BUCKET.webp',
  'TAHINI AL NAKIL GREEN BUCKET.webp',
  'TETLEY TEA BAGS 400.webp',
  'TRS LEMON DRESING 24X400 ML.webp',
] as const;

const DRINK_BOTTLE_FILES = [
  '7UP 12X1.5 LTR GB.webp',
  'ASYA  WATER  24X500 ML.webp',
  'ASYA WATER 6X1.5 Ltr.webp',
  'AVANT  WATER 24x500 ML.webp',
  'CALYPSO OCEAN BLUE LEMONADE.webp',
  'COCA COLA 500ML X12.webp',
  'COCA COLA DIET 12x1.25 ltr.webp',
  'COCA COLA DIET GLASS 24X330 ML.webp',
  'COCA COLA GLASS 24X330 ML.webp',
  'COCA COLA PET  9 X 1.5LT.webp',
  'COKE BOTTLE 2LT 8PACK.webp',
  'FANTA BLUE 500ML X12.webp',
  'FANTA LEMON 500ML GB X12.webp',
  'FANTA ORANGE 500ML EU X12.webp',
  'FANTA ORANGE 500ML GB X12.webp',
  'FRUITSHOOT APPLE & BLKCURNT 24X200ML.webp',
  'FRUITSHOOT ORANGE 24X200ML.webp',
  'HAYT WATER 24X500 ML.webp',
  'ICE LEMONADE 1.5L X 6.webp',
  'ICE MANGO 2L X 6.webp',
  'IDEAL  WATER 12X500 ML.webp',
  'IRNBRU 6X2LTR.webp',
  'J2O APPLE && RASPBERRY 30X275 ML.webp',
  'J2O ORANGE 30X275 ML.webp',
  'LUCO ORANGE 6X4X380ML.webp',
  'LUCOZADE ORANGE 3X8X380ML.webp',
  'MARINDA ORANGE   1.5LT X 6.webp',
  'MIRINDA 6X2.25LT.webp',
  'MOUNNTAIN DEW 6X2.25LT.webp',
  'MOUNTAIN DEW 1.5LT 6PACK.webp',
  'OASIS SUMFRUIT 500ML X 12.webp',
  'OASIS SUMMER FRUITS 12X500ML.webp',
  'PEPSI 1.5 LTR 12 PACK.webp',
  'PEPSI 6X2.25LT PET.webp',
  'PEPSI MAX 12X2.5LT G.webp',
  'PEPSI MAX 6X1.5LT.webp',
  'PRINCES GATE WATER 24X500ML.webp',
  'SULTAN  WATER 12X500ML.webp',
  'TANGO 12X1.5 LTR.webp',
  'TANGO ORANGE GB 12X1.5LTR.webp',
  'VOLVIC WATER 12x1.5ltr.webp',
  'VOLVIC WATER 24X500 ML.webp',
  'YAZOO BANANA 10X400 ML.webp',
  'YAZOO CHOCOLATE 1X10.webp',
  'YAZOO STRAWBERRY 10X400ML.webp',
  'ZIONTI COLA GLASS 24X330ML.webp',
  'make_it_a_202604211021.webp',
] as const;

const PACKAGING_FILES = [
  'CHICKEN BOXES FC2 LARGE.webp',
  'CHICKEN BOXES MEDIUM 6.5KG.webp',
  'EAZI-PAK SOS BAGS SMALL 250 PCS.webp',
  'EP SOS WHITE LARGE 125PCS.webp',
  'FC0 MY MED CHIKEN BOX (S) (2).webp',
  'FC0 MY MED CHIKEN BOX (S).webp',
  'FC1 MY MED CHIKEN BOX (M).webp',
  'FC4 family  CHIKEN BOX (EP0.webp',
  'FC4 MY MED CHIKEN BOX (F).webp',
  'GRAB BAG (W) 32X17X44(100).webp',
  'MY R8 WHITE TAKE WAY BAG.webp',
  'MY SOS WHITE (L) (225).webp',
  'MY-PAK CRISPY FRIED CHK BOX FC.webp',
  'R12 TAKEAWAY LARGE BAGS.webp',
  'R12 WHITE TAKEAWAY BAG MY.webp',
  'R-4 TAKEAWAY BAGS 250 PCS.webp',
  'R-4 TAKEAWAY SMALL BAGS.webp',
  'R8 BROWN BAGS 225 MY.webp',
  'R-8 TAKEAWAY MEDIUM BAGS.webp',
  'SOS BAGS MEDIUM.webp',
  'SOS BROWN MEDIUM 250.webp',
  'SOS PLASTIC WHITE (L) BAGS 250.webp',
  'SOS WHITE LARGE BAGS.webp',
] as const;

const CHEESE_FILES = [
  'ELITE PURE MOZZARELLA CHEESE 2 KG.webp',
  'ELITE PURE MOZZARELLA CHEESE 6X2 KG.webp',
  'KERRYMAID 8X1.4KG SLICES FULL BOX.webp',
  'KERRYMAID CHEESE SLICES 1.4KG.webp',
  'KRYMD CHEESE SAUCE 12x1LT.webp',
  'KRYMD CHEESE SAUCE 1LT.webp',
  'PRIMA CHEESE 100% 2KG.webp',
  'PRIMA CHEESE 100% 6x2KG.webp',
  'PRIMA CHEESE 8020 10.80 KG.webp',
  'PRIMA CHEESE 8020 6X2KG.webp',
  'SIMPLY MELT PIZZA STRINGS 1KG-.webp',
  'SIMPLY MELT PIZZA STRINGS 6X1KG.webp',
] as const;

const CANNED_PROC_FILES = [
  '(PAPA) PAPPADUMS 6 60X250G.webp',
  'ACORSA BLACK OLIVE SLICED 6X6A10.webp',
  'BRIGHT_RED_COLOR.webp',
  'DEEP_ORANGE_COLOR.webp',
  'DON VALLE CHICK PEAS 1X3KG.webp',
  'DON VALLE CHICK PEAS 6X3K.webp',
  'DON_VALLE_JALLAPENO.webp',
  'DON_VALLE_PINEAPPLES.webp',
  'DONVALLE_GREEN_OLIVES.webp',
  'EGG_YELLOW_COLOR.webp',
  'FOUL_MEDAMMAS_24X400G.webp',
  'HEERA CHOPPED TOMATOES 1 X 2.5KG.webp',
  'HEINZ BEANS 1 X 2.62KG.webp',
  'HEINZ BEANS 415G.webp',
  'JALAPENOS SLICED 6X3KG PRIMA.webp',
  'MIKADO_PINE_APPLE.webp',
  'MIKADO_PINEAPPLE_PIECES.webp',
  'MIKADO_SWEETCORN_1.webp',
  'PRIMA MUSHROOMS SLICED 6X2.250KG.webp',
  'PRIMA_SLICED_MUSHROOMS.webp',
  'PRIMA_SWEETCORN_CASE.webp',
  'RIVERDENE SWEETCORN VACUUM PACKED  1 X 2.12KG.webp',
  'RIVERDENE_SWEETCORN_VACUUm.webp',
] as const;

const FLOUR_RICE_FILES = [
  'BAKING_POWDER_3.5.webp',
  'BALAH_COCONUT_FLOUR.webp',
  'BALAH_GRAM_FLOUR.webp',
  'BI_CARBONATE_OF.webp',
  'BRAVO_PIZZA_FLOUR.webp',
  'CHAMPION_NO1_LIGHT.webp',
  'CHAMPION_NO2_MEDIUM.webp',
  'CORN_FLOUR_3KG.webp',
  'DOUGHNUT_MIX_123.webp',
  'ELEPHANT_ATTA_FINE.webp',
  'ELEPHANT_ATTA_MEDIUM.webp',
  'FAMOS_CORN_FLOUR.webp',
  'GOLD_STAR_SELF.webp',
  'Golden_Daw_Plain.webp',
  'HEERA_GOLD_FLOUR.webp',
  'HEERA_RICE_XXL.webp',
  'LILY_PIZZA_FLOUR.webp',
  'MAJIESTIC_PLATINIUM.webp',
  'MFC_BREADINGS_ONE.webp',
  'NAYMAT_RICE_1121.webp',
  'NIDO_MILK_POWDER_10KG.webp',
  'NIDO_MILK_POWDER_5KG.webp',
  'PAPA_GRAM_FLOUR.webp',
  'PIZZA_IMPROVER.webp',
  'PLAIN_WHITE_FLOUR.webp',
  'PRIMA_GOLD_RICE.webp',
  'ROLLRIGHT_PLAIN_FLOUR.webp',
  'RZQ_RICE_121.webp',
  'SELECTA_PIZZA_FLOUR.webp',
  'SOS_BAGS_MEDIUM.webp',
  'SURIYA_EXTRA_LONG.webp',
  'VICTORIA_PLAIN_FLOUR.webp',
  'VITAL_RICE_20_20.webp',
  'WAFFLE_MIX_12.5KG.webp',
  'Copy_of_BALAH_202604252048.webp',
] as const;

const FRESH_FILES = [
  'FCHICKEN FILLET 140170 4.5KG.webp',
  'FCHICKEN FILLET 140170 9KG.webp',
  'FCHICKEN STRIPS 10 KG.webp',
  'FCHICKEN STRIPS 5 KG (2).webp',
  'FCHICKEN STRIPS 5 KG.webp',
  'FCHICKEN WINGS 10 KG.webp',
  'FCHICKEN WINGS 5 KG.webp',
  'FRESH CHICKEN 130-140 (10kg).webp',
  'FRESH CHICKEN 9 CUT.webp',
  'FRESH CHICKEN FILLET 10KG 130-150.webp',
  'FRESH CHICKEN FILLET 9KG 130-150.webp',
  'FRESH YEST.webp',
  'HENNA YOGURT 10 KG.webp',
  'HENNA YOGURT 5 KG.webp',
  'KERRYMAID DOUBLE CREAM 1X12LT.webp',
  'LANCASHIRE GREEK STYLE YOGURT.webp',
  'MASHWOOD YOGURT 10KG.webp',
  'MASHWOOD YOGURT 5KG.webp',
  'PAKEEZA PANEER 1X2KG.webp',
  'PRIME WINGS KPS 10KG.webp',
  'Qualiko Frozen Chicken Fillet 10=150g 10 kg.webp',
] as const;

const FROZEN_MEAT_FILES = [
  'ADAMS TURKEY JULENE HAM 1K.webp',
  'BATTERED CHK NUGGETS N06R 1KG.webp',
  'BATTERED CHK NUGGETS N06R BOX.webp',
  'C.VEL CHICKEN COOKED DICEED 4X2.5KG.webp',
  'CHARCOL LAMB KEBAB 900g.webp',
  'CHARCOL TANDOORI KEBAB 900G.webp',
  'COD FISH BUGERS 30X100g.webp',
  'FRONTIER POPCORN 1X3KG.webp',
  'HARGI SPICY BEEF 1kg.webp',
  'HARGIONI MEAT BALL 1kG.webp',
  'HARVET HOT &SPICY STRIPS 3 KG.webp',
  'MAWBEEF HALAL BURGERS 48X4oz.webp',
  'MEATZON DONER 10KG.webp',
  'MEATZON DONER 20KG.webp',
  'MV 24 H&SPICY FILLETS 1KG.webp',
  'MV BATTERED CKH NUGGETS 1KG.webp',
  'MV BBQ WINGS 3X1K.webp',
  'MV CHICHEN STEAKE 1.02 KG.webp',
  'MV CHICKEN STRIP 1KG.webp',
  'MV CKICKEN STEAKS 6X1.02 KG.webp',
  'MV CRISPY BAT FILLETS 4x2.4KG.webp',
  'MV CRISPY HOT WINGS 1KG.webp',
  'MV CRISPY HOT WINGS 3  X 1KG.webp',
  'MV FILLET BITES 1KG.webp',
  'MV FRIED MINI FILLETS 1KG.webp',
  'MV HOT & SPICY FILLET 1.98 KG.webp',
  'MV HOT & SPICY FILLET 5X1.98 KG.webp',
  'MV HOT & SPICY WING 1 X 2KG.webp',
  'MV HOT & SPICY WINGS 5 X 2KG BOX.webp',
  'MV HOT&SPICY WINGS 1KG.webp',
  'MV MINI FILLETS BITES 1X10 KG.webp',
  'MV PICKIN CHICKEN 1KG.webp',
  'MV SOUTHERN FRIED CH3X27 KG.webp',
  'PANGASIUS 120- 170(45KG)20x500g.webp',
  'PANGASIUS 120-170(45KG)1x500g.webp',
  'PANGASIUS 270-340 (45KG).webp',
  'SPICY BEEF 1KG AL AMEEN.webp',
  'TURKEY JULIENNE HAM 1KG.webp',
  'TYSON POPPIN CHICKEN 1KG.webp',
] as const;

const FROZEN_FILES = [
  'ARDO CORN ON THE COB 1 X 400G.webp',
  'ARDO CORN ON THE COB BOX 24X400G.webp',
  'ATLANTIUS KING PRAWN 812 BOX 1X10.webp',
  'CRWN MIXED VEG 800G.webp',
  'DIBS POPCORN 4KG.webp',
  'FROZEN GARLIC 10X800.webp',
  'GOLDEN CRUNCH FRIES BOX 4 X 2.25KG.webp',
  'HABIBI PEPPERONI 1KG.webp',
  'HABIBI SALAMI 1KG.webp',
  'HALAL TURKEY RASHERS 1KG.webp',
  'HALAL TURKEY RASHERS 500G.webp',
  'HARGIONI PEPPERONI 1KG.webp',
  'HARVEST POPCORN 1X3KG.webp',
  'HOME MADE SALAMI 1KG.webp',
  'KERRYMAID BUTTERY 2KG.webp',
  'MARQUISE FRIES BOX 4 X 2500G.webp',
  'MARQUISE STEAK BOX 4 X 2500G.png.webp',
  'McCAIN CHLLI CHEESE NUGGETS 1k.webp',
  'McCAIN MOZZARELLA STICKS 1KG.webp',
  'McCAIN MOZZARELLA STICKS 1X6KG.webp',
  'McCAIN ORIGIONAL HASH BROWNS 8X1KG.webp',
  'McCAIN SWEET POTATO FRIES 2.5KG.webp',
  'McCAIN SWEET POTATO FRIES BOX 4 X 2.5KG.webp',
  'McCAIN VEGI BURGER1.13KG.webp',
  'MIX VEGETABLE 12x907G.webp',
  'MIX VEGETABLE 907G.webp',
  'MR PRAWNS 100150 454G.webp',
  'OKRA ZERO EGP VEG 20X400.webp',
  'PRIMA GARLIC CLOVES 1 X 800G.webp',
  'QUALITOPS PEPPERONI 1KG.webp',
  'PRIMA GARLIC CLOVES BOX 10X 800G.webp',
  'McCAIN VEGI BURGER 30X113G BOX.webp',
  'Use_the_uploaded_202604271622.webp',
  'SPRING ROLLS CHK 1X50.webp',
  'TAXAS PEPPERONI 1KG.webp',
  'TEXAS ONION RINGS 1X450G.webp',
  'TEXAS ONION RINGS 20X450G.webp',
  'TEXAS RANGERS X-CRISPY SKIN-ON BOX.webp',
  'VOLYS TURKEY RASHERS 1K (2).webp',
  'WHITE STRING MOZZARELA  1KG.webp',
] as const;

const FROZEN_FILES_2 = [
  'ALL STAR CHIPS 10 KG.webp',
  'ATLANTA P CRUNCH 10x10.webp',
  'CHICKEN TOPPING.webp',
  'CHRCOAL MALAI KEBAB 900G.webp',
  'CRUSHED GARLIC 400G.webp',
  'CRUSHED GARLIC&GINGER 400G.webp',
  'DIBS POP-IN CH 2X2KG.webp',
  'ECOFROST FRIES 99 4X2.5KG.webp',
  'GARLIC &PARSLEY 1KG.webp',
  'GARLIC BUTTER LARGE (2KG).webp',
  'GARLIC MUSHROOMS 10KG.webp',
  'GARLIC MUSHROOMS 1KG.webp',
  'LEAF SPINACH 2500G.webp',
  'MEAT SAMOSAS 5O PCS(QUAITY).webp',
  'PANJABI SAMOSA (CHICKEN) BOX.webp',
  'PANJABI SAMOSA (MEAT) BOX.webp',
  'PRIMA CS CRUNCH CHIPS 9KG.webp',
  'QUALITY BITES chicken SEEKH KEBABS 2X10.webp',
  'QUALITY BITES SEEKH KEBABS 1X10.webp',
  'QUALITY BITES SEEKH KEBABS 2X10.webp',
  'SFC CRISPY STRIPS 1KG.webp',
  'STERLING CHIPS 4X2.5KG.webp',
  'SULTAN DONER 10KG.webp',
  'SULTAN DONER 15KG.webp',
  'SUTAN COOKED DONER 2.27KG.webp',
  'TYSON POP IN CHICKEN 1KG.webp',
  'VEG SAMOSAS 5O PCS(QUAITY).webp',
  'Add_2_in_202604271404 (1).webp',
] as const;

const DESSERT_FILES = [
  'APPLE_FRYPIES1.56X2KG.webp',
  'APPLE_PIE_BOX..webp',
  'B&B_CHOCOLATE_COOKIE.webp',
  'BISCOFF_CHEESE_CAKE..webp',
  'BUBBLGUM_TOPPING_SAUCE.webp',
  'CADBURY_FLAKE_144.webp',
  'CARROT_CAKE.webp',
  'CHOC_FUDGE_CAKE.webp',
  'CHOCLATE_FUDGE_CAKE.webp',
  'CHOCOLATE_DONUTS_33.webp',
  'CHOCOLATE_TOPPING_5LT.webp',
  'CHOCOLATE_TOPPING_SAUCE.webp',
  'COMELLE_ICE_MIX.webp',
  'COOKIE_120X55g.webp',
  'DBL_CHCO_COOKIE.webp',
  'DISH_APPLE_PIE.webp',
  'FERRERO CHEESE CAKE-1.webp',
  'FERRERO_CHEESE_CAKE.webp',
  'ICE_CREAM_TOPPING_CHOCLATE.webp',
  'ICE_CREAM_TOPPING_STRAWBERRY.webp',
  'KERRYMAID_ANGELITO_12X.webp',
  'KERRYMAID_SINGLE_MILK.webp',
  'LANCASHIRE_SINGALE_CREAM1X12.webp',
  'MARCO_CHOCOLATE_ICE (2).webp',
  'MARCO_CHOCOLATE_ICE.webp',
  'MARCO_STRAWBERRY_ICE.webp',
  'MATILDA_CAKES_4X300G.webp',
  'MILK_CHCO_CHIP.webp',
  'NUTELLA.webp',
  'OREO_CAKE.webp',
  'OREO_CHEESE_CAKE.webp',
  'RED_VELVET_CAKE.webp',
  'ROOH_AFZA_SINGLE.webp',
  'SLUSH_BLUE_RASPBERRY.webp',
  'SLUSH_BUBBLEGUM_5LT.webp',
  'SLUSH_COLA_5LTR.webp',
  'SLUSH_STRAWBERRY_5LT.webp',
  'SQUIRTY_TOPPING_CREAM.webp',
  'STERLING_VANILLA_ICE.webp',
  'STRAWBERRY_CHEESE_CAKE.webp',
  'STRAWBERRY_TOPPING_5LTR.webp',
  'SUGAR_FULL_PACK.webp',
  'SUGAR_PACK_1kg.webp',
  'WHITE_COOKIE_PUCKS.webp',
  'WHITWORTHS_SUGAR_25kg.webp',
] as const;

const CONFECTIONERY_FILES = [
  'AERO PEPPERMINT MULTIPACK BOX.webp',
  'AERO PEPPERMINT SINGLE 1 X 4 PACK.webp',
  'BISCOFF BISCUIT 1X1 SINGLE.webp',
  'BOUNTY 1 X 4 PACK .webp',
  'CRUNCHIE 1 X 4 PACK.webp',
  'FERRERO ROCHER 100G.webp',
  'FERRERO ROCHER 16X50G.webp',
  'FERRERO ROCHER BOX 8 X 100G.webp',
  'KINDER BUENO 20 BARS.webp',
  'KINDER BUENO COCONUT BOX.webp',
  'MALTESERS MULTIPACK BOX.webp',
  'MILK CHOCO COOKIE 4.5KHG.webp',
  'OERO ORGINAL SMALL PACK 20 X 66G.webp',
  'SNICKERS 24 PACK BOX.webp',
  'KINDER BUENO COCONUT BOX.webp',
] as const;

const SAUCE_FILES = [
  'AL TUNSA TOMATO SAUCE.webp',
  'AYTAC POMEGRANATE SAUSE  1LT.png',
  'AYTAC POMEGRANATE SAUSE 12x 1LT.webp',
  'AYTAC POMEGRANTE 500X12.webp',
  'AYTAC POMEGRANTE 700X12.webp',
  "COLMAN'S MINT SAUCE  2 x 2.25 KG.webp",
  "COLMAN'S MINT SAUCE 2.25 KG.webp",
  'DORIS PEPPER PICKLE.webp',
  'FAMOUSLY PIZZA SAUCE 5X3KG.webp',
  'HARRI BBQ SACHETS (200).webp',
  'HARRI BROWN SAUCE 200X10G.webp',
  'HARRI MAYONNAISE SACHETS (200PKTS).webp',
  'HARRI TOMATO KETCHUP SACHETS (200PKTS).webp',
  'HARRI V HOT CHILLI SACHETS 200.webp',
  'HARRISON PERI PERI DIPS .webp',
  "HARRISON'S GARLIC &MAYO DIP.webp",
  'IT&LY PIZZA  SAUCE  3 X 2.95KG.webp',
  'IT&LY PIZZA SAUCE2.95KG.webp',
  'KTC TOMATO KETCHUP 2X4.5KG.webp',
  'KTC TOMATO KETCHUP 4.5KG.webp',
  'KYKNOS TOMATO PASTE 3X4550g.webp',
  'KYKNOS TOMATO PASTE 4550g.webp',
  'MAJESTIC TOMATO KETCHUP 2 X 4Ltr.webp',
  'PERCO PIZZA BAGS 5 X 3KG.webp',
  'PERCO PIZZA SAUCE 3KG.webp',
  'PERCO PIZZA SAUCE 3X3KG.webp',
  'PRIMA KETCHUP BOX 2X4LT.webp',
  'REDHOT WINGS 3.9 kg.webp',
  'SHAWS HAMBURGER RELISH 1 X 2.4KG.webp',
  'SHAWS HAMBURGER RELISH 2 X 2.4KG.webp',
  'SHAWS SWEETCORN RELISH 1 X 2.4KG.webp',
  'SHAWS SWEETCORN RELISH 2 X 2.4KG.webp',
  'SIGNTURE PIZZA SAUCE 5X3KG.webp',
  'STERLING  TOMATO KCHUP 2x4.2kg.webp',
  'STERLING  TOMATO KETCHUP 4.2 kg.webp',
  'SUGAL PIZZA SAUCE 6 X 3KG.webp',
  'TATLI BIBER ONCU 1 X 4.3KG.webp',
  'TATLI BIBER ONCU 4 X 4.3KG.webp',
  'W T TOMATO PASTE 1KG.webp',
  'WHITE TOWER TOMATO PASTE 4.5KG.webp',
] as const;

const LAMB_WESTON_FILES = [
  '2LW ONION RING 6X1 KG.webp',
  'LW 9x9 PRIVET 38 10 KG.webp',
  'LW CHILLI CHEESE JALAPENOS 1KG.webp',
  'LW CHILLI CHEESE NUGGETS 1X1KG.webp',
  'LW CREAM CHEESE JALAPENOS 6 X 1KG  BOX.webp',
  'LW CRISPY ONION RINGS 6X1KG.webp',
  'LW CRISY ONION RINGS 1KG.webp',
  'LW HASHBROWN 10X1KG.webp',
  'LW HASHBROWN 2.5KG (2).webp',
  'LW HASHBROWN TRI 1KG X 10 BOX.webp',
  'LW HASHBROWN TRI 2.5KG.webp',
  'LW MOZZARELLA STICKS 1KG.webp',
  'LW MOZZARELLA STICKS BOX 6X1KG.webp',
  'LW POTATO WEDGES 1 X 2.5KG.webp',
  'LW SWEET POTATO 2.5KG.webp',
  'LW SWEET POTATO 4 x 2.5kg.webp',
  'LW TWISTERS 1 X 2.5KG.webp',
  'LW TWISTERS BOX 4 X 2.5KG.webp',
  'LW ZIGGY CHIPS 9X9 1KG.webp',
  'LW ZIGGY CHIPS 9X9 4X2.5KG.webp',
] as const;

const GENERAL_ITEM_FILES = [
  'APRON.webp',
  'AYTAC CHANA DAL 1.5kg.webp',
  'CHARCOL 12 KG.webp',
  'COOK&CO ANCHOVY FILLETS 6X 365g .webp',
  'EGGS TRAY (30).webp',
  'FACE MASK X10.webp',
  'HENNY PENNY FILTER 50PCS.webp',
  'MJSTC WOODEN STIR 5000.webp',
  'NON-BREWED CONDIMENT  VINIGER 2X5LT.webp',
  'NON-BREWED CONDIMENT WHITE 2X5 LTR.webp',
  'PG TEA BAGS 210.webp',
  'PIZZA TRIPODS 1X500 WHITE.webp',
  'SW BLUE DISPOABLE APRONS X100.webp',
  'THERMAL ROLLS 80 X 80 20PK.webp',
  'THERMAL TIL 57.50.12 (20) .webp',
  'THERMAL TIL ROLL  57x40 (20).webp',
  'TRS CHANA DAL 6x2kg.webp',
  'WOOD CHARCOAL 15kg.webp',
] as const;

const VEGETABLE_FILES = [
  'BULLET CHILLI BOX.webp',
  'CORIANDER FRE.webp',
  'CUCUMBER BOX (16).webp',
  'DUTCH ONION 24KG.webp',
  'GREEN PEPPER BOX (DUTCH).webp',
  'LETTUCE BOX.webp',
  'MINT FRE.webp',
  'MUSHROOM .webp',
  'ONION 17 KG WHITE BAG.webp',
  'RED ONION BAG 9kg.webp',
  'TOMATO BOX.webp',
  'WHITE ONION BAG (DUTCH)].webp',
] as const;

const GENERAL_SPICES_FILES = [
  'AMERICAN RED SALT 2.KG.webp',
  'AYTAC PISTACHIO KERNEL 400g.webp',
  'BALAH BAY LEAVES 2 KG.webp',
  'BALAH CINNAMON STICKS 1KG.webp',
  'BLACK SALT 400 G.webp',
  'BRITISH SALT 12.5KG.webp',
  'CHICKEN TRAIN PIRI PIRI M HOT 2 KG.webp',
  'CHICKEN TRAIN PIRI PIRI MILD 2KG.webp',
  'CHICKEN TRAIN PIRI PIRI X-HOT 2KG.webp',
  'COOKING SALT BAG 12.5 Kg.webp',
  'DINACLASS GRAVY MIX 2.5KG.webp',
  'DINACLASS GRAVY MIX 2x2.5KG.webp',
  'SHAN BIRYNI  MASALA 12x50G.webp',
  'FERMIPAN RED YEAST 20x500G.webp',
  'FERMIPAN RED YEAST 500G.webp',
  'FRIED ONIONS 2.5 KG.webp',
  'HEERA COOKING SALT 3KG.webp',
  'LAZIZA     BIRYANI    100g.webp',
  'LAZIZA SEEKH KEBAB 100g.webp',
  'LAZZIZA BIRYANI 6X100g.webp',
  'LAZZIZA PAYA MASALAI 6X100g.webp',
  'MAGGI ORIGINAL GRAVY 1.8KG.webp',
  'MAGGI ORIGINAL GRAVY 2X1.8KG.webp',
  'MALKA FRIED ONION 2.5KG.webp',
  'MALKA QASURI METHI 1 KG.webp',
  'MFC CHICKEN BREADINGS ORIGINALX2KG.webp',
  'MONOSODIUM GLU (CHINESE SALT)400 G.webp',
  'NATIONAL ACHAR GOSHT 50G.webp',
  'NATIONAL ACHAR GOSHT 6X43G.webp',
  'NATIONAL BIRYANI MASALA 6X39G.webp',
  'NATIONAL CHAAT MASAL 100g.webp',
  'NATIONAL CHAAT MASALA 6 x100g.webp',
  'PARIVAR G CARDAMOM 600G.webp',
  'PATAKS BALTI PASTE 2.3KG.webp',
  'PATAKS BALTI PASTE 2x2.3KG.webp',
  'PATAKS KASHMIRI MASALA 2.2KG.webp',
  'PATAKS KASHMIRI MASALA 2.X2.2KG.webp',
  'PATAKS TANDOORI PASTE 1X2.5KG.webp',
  'PATAKS TANDOORI PASTE 2X2.5KG.webp',
  'PATAKS TIKKA MASALA 2x2.3KG.webp',
  'PIRI PIRI MARINADE 4KG .webp',
  'PIRI PIRI MARINADE 4x4KG .webp',
  'PRIMA PARSLEY.webp',
  'RED SALT BUCKET 15KG.webp',
  'SALT SACHETS  2KG.webp',
  'SHAN ACHAR GOSHT 50G.webp',
  'SHAN BIRYANI MASALA 50G.webp',
  'SHAN CHAAT MASALA 12x100G.webp',
  'SHAN KARAHI 50G.webp',
  'TROPICS HOT & SPICY BREADING 12.5KG.webp',
  'TROPICS ORIGINAL BREADING 12.5KG.webp',
] as const;

const GENERAL_SPICES_2_FILES = [
  'AYTAC SUMAC  500G.webp',
  'ROOSTER HD BREADER 12.5KG.webp',
  'ROOSTER HDIP SAUCE 5KG.webp',
  'ROOSTER REG BREADING 12.5KG.webp',
  'ROOSTER SFRY GRAVY 2KG BOX.webp',
  'ROOSTER SPICY BREADING 12.5KG.webp',
  'ROOSTER TASTY BREADING 12.5KG.webp',
  'TROPICS LEMON&PEPPER 1.5kg.webp',
] as const;

const HEERA_SPICES_FILES = [
  'BALAH CINNAMON STICKS 1KG.webp',
  'BALAH KARI PATTA 1KG.webp',
  'GREEN CARDAMOM 600G.webp',
  'HEERA AJWAIN SEEDS 700G.webp',
  'HEERA BLACK PEPPER COARSE 1KG.webp',
  'HEERA BREAD CRUMBS 1KG.webp',
  'HEERA BROWN LENTILS (MASOOR) 2KG.webp',
  'HEERA CHILI POWDER X HOT 5KG.webp',
  'HEERA CHILLI POWDER 1KG.webp',
  'HEERA CHILLI POWDER 5KG.webp',
  'HEERA CINAMON POWDER 1KG.webp',
  'HEERA CORIANDER WHOLE 700G.webp',
  'HEERA CURRY LEAVES 20 G.webp',
  'HEERA CURRY POWDER MILD 5KG.webp',
  'HEERA G SULTANA 700G.webp',
  'HEERA GARAM MASALA POWDER 1KG.webp',
  'HEERA GARLIC POWDER 1KG.webp',
  'HEERA GARLIC POWDER 5KG.webp',
  'HEERA GINGER POWDER 5KG.webp',
  'HEERA H & S CHICKEN MIX 6 X 700G.webp',
  'HEERA KALONJEE 1KG.webp',
  'HEERA KASOORI METHI 200G.webp',
  'HEERA MADRAS CURRY POWDER HOT 5KG.webp',
  'HEERA MEHTI SEEDS 1KG.webp',
  'HEERA METHI POWDER 400G.webp',
  'HEERA RED KIDENY BE 2KG.webp',
  'HEERA SEMOLINA COARSE 5KG.webp',
  'HEERA SEMONLINA FINE 1.5KG.webp',
  'HEERA SESAME SEED 1KG.webp',
  'HEERA STAR ANISEED 500 G.webp',
  'HEERA TANDOORI MASALA 5KG.webp',
  'HEERA TURMERIC POWDER (HALDI) 1KG (2).webp',
  'HEERA TURMERIC POWDER HALDI 5 KG.webp',
  'HEERA URID DALL WASHED 5 KG.webp',
  'HEERA WHITE PEPPER POWDER 1KG.webp',
  'HEERA WHOLE BLACK PEPPER 700G.webp',
  'HEERA WHOLE CORIANDER 3.5KG.webp',
  'HEERA WHOLE GARAM MASALA 700G.webp',
  'HRA COOKING SALT 1.5KG.webp',
  'HRA GINGER POWDER 800G.webp',
  'HRA TANDOORI MASALA 1KG.webp',
  'POMEGRANATE SEEDS (ANARDANA) 100 g.webp',
] as const;

const HERRA_SPICES_2_FILES = [
  'AMCHOOR POWDER 400g.webp',
  'BALLA SWEET MANGO CHUTNEY 40 kg.webp',
  'HEERA  CHICK PEAS 9MM 25KG.webp',
  'HEERA  GARAM MASALA POWDER 1KG.webp',
  'HEERA ALMOND 700G.webp',
  'HEERA ALMOND FLAKE 700G.webp',
  'HEERA ALMOND POWDER 1 KG.webp',
  'HEERA BLACK CARDAMOM 700g.webp',
  'HEERA BLACK PEPPER POWDER 5KG (2).webp',
  'HEERA BLACK PEPPER POWDER 5KG.webp',
  'HEERA BLACK SESAME SEEDS 1kg.webp',
  'HEERA CHANA DAL 2 KG.webp',
  'HEERA CHICK PEAS 2KG.webp',
  'HEERA CHICK PEAS6X2.60KG.webp',
  'HEERA CHILLI WHOLE 1KG.webp',
  'HEERA CINNAMON STICKS 400G.webp',
  'HEERA CITRIC ACID 1 KG.webp',
  'HEERA CLOVES WHOLE 200G.webp',
  'HEERA CORIANDER POWDER 1KG.webp',
  'HEERA CORN MEAL MEDIUM 5KG.webp',
  'HEERA CRUSHED CHILLIES 700G.webp',
  'HEERA CUMIN POWDER 1KG.webp',
  'HEERA CUMIN WHOLE (JEERA) 1kg.webp',
  'HEERA DESI COCONUT (M).webp',
  'HEERA FENNEL SEEDS 700g.webp',
  'HEERA GARLIC FLAKES 1Kg.webp',
  'HEERA GARLIC POPWDER 1kg.webp',
  'HEERA GARLIC PUREE 1KG.webp',
  'HEERA GARLIC PUREE 6X1 KG.webp',
  'HEERA GIN && GAR PUREE 6X1 KG.webp',
  'HEERA GIN && GAR PUREE1 KG.webp',
  'HEERA GREEN CARDAMOM 700G.webp',
  'HEERA GUNGO PEAS 12X400g.webp',
  'HEERA KALA CHANA 12X400g.webp',
  'HEERA KEWDA WATER 12X190ML.webp',
  'HEERA MEAT TENDERISER 400G.webp',
  'HEERA MIX PICKE JAR.webp',
  'HEERA OREGANO 1KG.webp',
  'HEERA PAPRIKA1 KG.webp',
  'HEERA RED FOOD COLOUR 500g.webp',
  'HEERA RED SPLIT LENTILS 2KG.png.webp',
  'HEERA SPINACH PUREE 12X800G.webp',
  'HEERA SPINACH PUREE 800G.webp',
  'HEERA STAR ANISEED 1kg.webp',
  'HEERA TAMARIND IMLI 10x400G.webp',
  'HEERA TAMARIND IMLI 400G.webp',
  'HEERA WHITE ONION POWDER 1Kg.webp',
  'REERA CHILLI POWDER EXTRA 1kg.webp',
] as const;

const NATCO_SPICES_FILES = [
  'KASOORI METHI 1KG.webp',
  'Kevda Water 6x310ml.webp',
  'NAT GARLIC PASTE 750G.webp',
  'NATCO  GREEN RAISINS 700G.webp',
  'NATCO AJWAN 1kg.webp',
  'NATCO ALMOND FLAKES 300g.webp',
  'NATCO ALMONDS 1kG.webp',
  'NATCO ALMONDS 750 G.webp',
  'NATCO BLACK PEPPER 400g.webp',
  'NATCO CHANA DAL 25KG.webp',
  'NATCO CHANA DAL 2KG.webp',
  'NATCO CHANA DAL 5KG.webp',
  'NATCO CHICK PEAS 25KG.webp',
  'NATCO CHICK PEAS 2KG.webp',
  'NATCO CHILLI PICKLE 4.4KG.webp',
  'NATCO CHILLI POWDER 1kg.webp',
  'NATCO CLOVES 750g.webp',
  'NATCO CLOVES WHOLE 750g.webp',
  'NATCO COCONUT 250g.webp',
  'NATCO CORIANDER POWDER 1KG.webp',
  'NATCO CORIANDER POWDER 5KG.webp',
  'NATCO CORIANDER SEEDS 750G.webp',
  'NATCO CORN MEAL COASE 5KG.webp',
  'NATCO CRUSHED CHILLI 3KG.webp',
  'NATCO CRUSHED CHILLI 700G.webp',
  'NATCO CUMIN SEEDS 1Kg.webp',
  'NATCO CUMIN SEEDS 4KG.webp',
  'NATCO DALCHINI 1.5 KG.webp',
  'NATCO DALCHINI 400G.webp',
  'NATCO EX HOT CHILLI POWDR 5KG.webp',
  'NATCO FENNEL SEEDS 1 KG.webp',
  'NATCO FENNEL SEEDS 400g.webp',
  'NATCO GARLIC POWDER 1KG.webp',
  'NATCO GARLIC&GINGER PASTE 1KG.webp',
  'NATCO GOLDON RAISINS 700g.webp',
  'NATCO GREEN CADAMOMS 700g.webp',
  'NATCO GREENCARDMOMS 400g.webp',
  'NATCO HALDI POWDER 1KG.webp',
  'NATCO KALA CHANA 12X400 g.webp',
  'NATCO MANGO CHUTNEY 5KG.webp',
  'NATCO MILK POWDER750g.webp',
  'NATCO ORANGE FOOD COLOUR.webp',
  'NATCO PAPRIKA 1kg.webp',
  'NATCO PAPRIKA 5KG.webp',
  'NATCO PISTACHIO KERNELS 700g.webp',
  'NATCO PLACK PEPPER COASE 1KG.webp',
  'NATCO RED FOOD COLOUR.webp',
  'NATCO ROSE WATER 6X310 ML.webp',
  'NATCO SEMOLINA COARSE 5KG.webp',
  'NATCO SESAME SEEDE 1.5KG.webp',
  'NATCO SPINACH LEAF 12X765g.webp',
  'NATCO SPINACH PUREE 12 X 795G.webp',
  'NATCO SPINACH PUREE795G.webp',
  'NATCO STAR ANISEED 300g.webp',
  'NATCO TANDOORI MASALA 1kg.webp',
  'NATCO WHITE PEPPER 400g.webp',
  'PAPA GRAM FLOUR 6X2kg.webp',
  'RED LENTIL 2KG.webp',
  'RED LENTIL 5KG.webp',
] as const;

const OIL_FATS_FILES = [
  'AVR60 12.5KG.webp',
  'HEERA GHEE 2KG.webp',
  'HEERA OLIVE OIL  5ltr.webp',
  'HEERA SUNFLOWER OIL 3X5LT.webp',
  'KHYBER GHEE 12.5KG.webp',
  'KTC OIL 20 LITRE DRUM.webp',
  'KTC OLIVE OIL 5 LITRE.webp',
  'KTC PALMAX 12.5KG.webp',
  'KTC RAPESEED EXTENDED OIL 20 LTR.webp',
  'KTC SUNF OIL 1X6LTR.webp',
  'KTC VEGETA OIL 5 LTR.webp',
  'NATCO POM OILVE OIL 5 LTR.webp',
  'NATCO SUNFLOWER OIL 1X5lt.webp',
  'NATCO SUNFLOWER OIL 3X5lt.webp',
  'PLOUGH BUTTER GHEE 1 X 2KG.webp',
  'PLOUGH BUTTER GHEE 6X2KG CASE.webp',
  'PREP MULTI PLUS 2x10litre.webp',
  'PREP ULTRA long life tub 20 LITRE.webp',
  'PRIDE OIL ECONOMY GREEN DRUM 20L.webp',
  'WHIRL BUTTER 4LT .webp',
  'WHITE PEARL OIL 20 LT (TIN).webp',
] as const;

const LION_SAUCES_FILES = [
  'BROWN SAUCE 2X4.3KG.webp',
  'BROWN SAUCE 4.3KG.webp',
  'EAST BULL BURGER SAUCE 1LT.webp',
  'EAST BULL BURGER SAUCE 6X1LT.webp',
  'ENG MUSTARD 1 X 2.27LT.webp',
  'ENG MUSTARD 2 X 2.27LT.webp',
  'KTC CHILLI SAUCE 2X2.34 KG.webp',
  'KTC CHILLI SAUCE2.34 KG.webp',
  'KTC MINT SAUCE 2.34 KG.webp',
  'KTC MINT SAUCE 2X2.34 KG.webp',
  'LEMON && HERB PIRI SAUCE 1 X 2.27LT.webp',
  'LEMON && HERB PIRI SAUCE 2 X 2.27LT.webp',
  'LEMON&HERB PIRI 1X2.27LT.webp',
  'LEMON&HERB PIRI 2X2.27LT.webp',
  'LION GARLIC MAYONNAISE 1 X 2.27LT.webp',
  'LION GARLIC MAYONNAISE 2 X 2.27LT (2).webp',
  'LION GARLIC MAYONNAISE 2 X 2.27LT.webp',
  'LION MEDIUM PIRI PIRI 2.27LIT.webp',
  'LION MEDIUM PIRI PIRI 2X2.27 LIT.webp',
  'LION MINIT SAUCE 1X2.27LTR.webp',
  'LION MINT SAUCE 2X2.27LTR.webp',
  'LION ORGINAL PIRI HOT SAUCE 1 X 2.27LT.webp',
  'LION ORGINAL PIRI HOT SAUCE 2 X 2.27LT.webp',
  'LION SALAD CREAM 1 X 2.27LT.webp',
  'LION SALAD CREAM 2 X 2.27LT.webp',
  'LION STICKY BBQ 1 X 2.27LT.webp',
  'LION STICKY BBQ 2 X 2.27LT.webp',
  'LION V.HOT CHLLI SAUCE 1 X 2.27LT.webp',
  'LION V.HOT CHLLI SAUCE 2 X 2.27LT.webp',
  'MANGO && LIME PIRI SAUCE 1 X 2.27LT.webp',
  'MANGO && LIME PIRI SAUCE 2 X 2.27LT.webp',
] as const;

const MAYO_FILES = [
  'DON VALLE MAYO 10 KG.jpeg',
  'HEINZ MAYONNAISE 9.6 KG.jpeg',
  'PAUWELS CLASSIC MAYO 9.4 KG.jpeg',
  'W SUPER BLUE MAYO  10 KG.jpeg',
  'WERNSING QUALITY MAYO 10 KG.jpeg',
] as const;

const SACTO_FILES = [
  'ROLLS PLASTIC CONTAINER 500 ML(250).webp',
  'ROLLS PLASTIC CONTAINER 650 ML(250).webp',
  'SATCO 2oz CUP 800.webp',
  'SATCO 650 ML CONTAINER .webp',
  'SATCO CLEAR CUPS + LIDS 4oz BOX  (800).webp',
  'SATCO CONTAINERS 750ML + LIDS 250.webp',
  'SATCO CONTAINERS BOX 1000ML .webp',
  'SATCO CONTAINERS BOX 500ML + LIDS.webp',
  'SATCO CONTAINERS BOX 8oz + LIDS.webp',
] as const;

const GREASEPROOF_FILES = [
  'BROWN BAG 10X10 MY .webp',
  'BROWN BAG 12X12  MY .webp',
  'BROWN FRUIT BAG 10 X 10 PACK.webp',
  'BROWN KRAFT BAG 12.5 X 12.5.webp',
  'BROWN KRAFT BAG 8.5 X 8.5 PACK.webp',
  'BROWN KRAFT BAG 8X8 EP .webp',
  'BWN KRAFT BAGE 12X12 EZ .webp',
  'EP FOIL LINED BAGS 7X9X12 ( 440).webp',
  'E-P GREASEPROOF 8.5 X 8.5.webp',
  'E-P GREASEPROOF PAPER BAGS 10 X 10.webp',
  'EP WHITE PAPER BAG 12  x 12.webp',
  'FOIL LINED BAGS 7X9X12.webp',
  'FOIL LINED PLAIN PAPER BAGS (MY).webp',
  'G PROOF PAPER 9 X 14 E-P.webp',
  'GREASE PAPER BAG 8.5 X 8.5 .webp',
  'GREASE PRP BAG  6X6  MY .webp',
  'GREASEPROOF BAGS  7x7.webp',
  'GREASEPROOF PLAIN PBAGS 6 X 6.webp',
  'MAJESTIC FOIL LINED BAG 500.webp',
  'MY GREASEPROOF BAG 5X5.webp',
  'SULPHITE FLAT PAPER BAG  5 X 5 PACK.webp',
  'SULPHITE FLAT PAPER BAG  6 X 6 PACK.webp',
  'SULPHITE FLAT PBAGS 8 X 8 MY.webp',
  'WHITE PAPER BAGS 10X10  EZ .webp',
  'WHITE PAPER BAGS 8X8  EZ .webp',
] as const;

const WRAPPING_FILES = [
  'ALUMINIUM FOIL  1 X 300MM.webp',
  'ALUMINIUM FOIL 1 X 300MM MY .webp',
  'ALUMINIUM FOIL 1 X 450MM MY .webp',
  'ALUMINIUM FOIL 450X60M EAZI .webp',
  'ALUMINIUM FOIL BOX 6 X 300MM.webp',
  'ALUMINIUM FOIL LARGE 450MM 1 X 1.webp',
  'ALUMINIUM FOILEP 300MM.webp',
  'BURGER WRAP 240X320 MM (2000).webp',
  'EAZI- PACK CLING FILM 1X300 MM.webp',
  'EP FOIL WRAP LINER 130 X 30 CM.webp',
  'GREASEPROOF SHEETS 7 X 9 4KG.webp',
  'M GREASEPROOF LINER 14 14X14.webp',
  'MG  CLING FILM 450 MM.webp',
  'MY PVC CLING LILM  45CM.webp',
  'WRAPING PAPER 17X20 8kg EZ .webp',
  'WRAPING PAPER 17X20 9kg EZ.webp',
  'WRAPING PAPER 20X24 8kg EZ .webp',
  'WRAPPING PAPER 18X20 MY .webp',
  'WRAPPING PAPER 18X24 MY .webp',
  'YELLOW GREASEPROOF PAPER 4KG .webp',
] as const;

const PLASTIC_BIN_BAG_FILES = [
  'BLACK BIN BAG COMPACTOR .webp',
  'BLACK BIN BAGS WEELLIE 1X100.webp',
  'HD BLACK BIN BAGS 18 X29  X39 200 PCS.webp',
  'M4 WHITE LARGE CARRIER BAGS.webp',
  'S3 PLASTIC BAGS(my)  APX 1000.webp',
  'S4 PLASTIC CARRIER BAGS.webp',
  'WHITE JUMBO PLASTIC CARRIER BAGS.webp',
  'WHITE M3 MEDIUM CARRIER BAGS.webp',
  'WHITE M5 JAMBO CARRIER BAGS.webp',
  'ZAFCO BLACK BIN B H 22X34X47.webp',
] as const;

const TISSUE_FILES = [
  '1PLY SERVIRETTES NIPKEN 30cm.webp',
  'BLUE ROLL 1X6.webp',
  'BLUE WIPER ROLL 1X2 .webp',
  'BRILLA BLUE ROLL 1X6.webp',
  'ECO BLUE ROLL.webp',
  'EZ WHITE NIPKIN 1PLY.webp',
  'INDUSTRIAL WIPER ROLLS 1X2.webp',
  'JUMBO TOILET ROLL 1X38.webp',
  'KITCHEN TOWEL 1X12.webp',
  'MAJESTIC NIPKEN 30X30 (500).webp',
  'MAJESTIC NIPKEN 30X30 (5000).webp',
  'MEDIUM TISSUE ROLL .webp',
  'MY PACK NIPKIN 1PLY.webp',
  'NAPKINS WHITE 1-PLY 30CM.webp',
  'RELYON 12 FOLD NIPKINS 24X50.webp',
  'SELECT PLY SOFT TISSUE BOX .webp',
  'SKY TISSUE 1X6.webp',
  'SMAL TISSUE ROLL 160150.webp',
  'VORTEX NIPKEN 30X30 (500).webp',
  'VORTEX NIPKEN 30X30 (5000).webp',
  'WHITE JUMBO BIG ROLL X 6PACK.webp',
  'WHITE WIPER ROLL 1X2 .webp',
] as const;

const toProductName = (fileName: string) =>
  fileName
    .replace(/\.[^.]+$/, '')
    .replace(/\s+/g, ' ')
    .trim();

const toProductImage = (assetBase: string, fileName: string) =>
  `${assetBase}/${fileName}`
    .split('/')
    .map(segment => encodeURIComponent(segment))
    .join('/')
    .replace('%2F', '/');

const createAssetProduct = (
  id: string,
  categoryId: string,
  assetBase: string,
  fileName: string,
  description: string
): Product => ({
  id,
  categoryId,
  name: toProductName(fileName),
  description,
  image: toProductImage(assetBase, fileName),
});

const createCategoryProducts = (
  idPrefix: string,
  categoryId: string,
  assetBase: string,
  fileNames: readonly string[],
  description: string
): Product[] =>
  fileNames.map((fileName, index) =>
    createAssetProduct(
      `${idPrefix}-${index + 1}`,
      categoryId,
      assetBase,
      fileName,
      description
    )
  );

const DRINK_CAN_PRODUCTS: Product[] = createCategoryProducts(
  'drink-can',
  '1',
  DRINK_CAN_ASSET_BASE,
  DRINK_CAN_FILES,
  'Wholesale case format for retail shelves, takeaways, and foodservice buyers.'
);

const DRINK_BOTTLE_PRODUCTS: Product[] = createCategoryProducts(
  'drink-bottle',
  '1',
  DRINK_BOTTLE_ASSET_BASE,
  DRINK_BOTTLE_FILES,
  'Bottle and PET wholesale beverage lines for convenience retail and catering.'
);

const PACKAGING_PRODUCTS: Product[] = createCategoryProducts(
  'packaging',
  '2',
  PACKAGING_ASSET_BASE,
  PACKAGING_FILES,
  'Foodservice packaging essentials, takeaway boxes, and bag formats in bulk.'
);

const PACKAGING_ADDITIONAL_PRODUCTS: Product[] = [
  ...createCategoryProducts(
    'packaging-greaseproof',
    '2',
    GREASEPROOF_ASSET_BASE,
    GREASEPROOF_FILES,
    'Greaseproof, kraft, and paper bag formats for takeaway and foodservice packaging.'
  ),
  ...createCategoryProducts(
    'packaging-wrapping',
    '2',
    WRAPPING_ASSET_BASE,
    WRAPPING_FILES,
    'Wrapping papers, foil, and cling products for kitchen prep and service.'
  ),
  ...createCategoryProducts(
    'packaging-satco',
    '2',
    SACTO_ASSET_BASE,
    SACTO_FILES,
    'Disposable containers and lidded cup formats for takeaway and delivery operations.'
  ),
];

const FROZEN_PRODUCTS: Product[] = [
  ...createCategoryProducts(
    'frozen-aviko',
    '3',
    AVIKO_ASSET_BASE,
    AVIKO_FILES,
    'Frozen wholesale products ideal for high-volume kitchens and takeaway operations.'
  ),
  ...createCategoryProducts(
    'frozen-buns',
    '3',
    BREAD_BUNS_ASSET_BASE,
    BREAD_BUNS_FILES,
    'Frozen buns, wraps, and bread lines supplied in bulk for foodservice buyers.'
  ),
  ...createCategoryProducts(
    'frozen-burger',
    '3',
    BURGER_ASSET_BASE,
    BURGER_FILES,
    'Bulk burger patties suitable for fast food stores, restaurants, and distributors.'
  ),
  ...createCategoryProducts(
    'frozen-cheese',
    '3',
    CHEESE_ASSET_BASE,
    CHEESE_FILES,
    'Cheese and dairy-oriented wholesale packs for pizza shops and catering operations.'
  ),
  ...createCategoryProducts(
    'frozen-meat',
    '3',
    FROZEN_MEATS_ASSET_BASE,
    FROZEN_MEAT_FILES,
    'Protein-focused frozen lines for high-volume kitchens and takeaway menus.'
  ),
  ...createCategoryProducts(
    'frozen-product',
    '3',
    FROZEN_PRODUCTS_ASSET_BASE,
    FROZEN_FILES,
    'Mixed frozen food range for commercial prep, sides, and menu add-ons.'
  ),
  ...createCategoryProducts(
    'frozen-product-2',
    '3',
    FROZEN_PRODUCTS_2_ASSET_BASE,
    FROZEN_FILES_2,
    'Additional frozen stock lines for fast-moving foodservice demand.'
  ),
  ...createCategoryProducts(
    'frozen-lamb-weston',
    '3',
    LAMB_WESTON_ASSET_BASE,
    LAMB_WESTON_FILES,
    'Lamb Weston frozen potato and side products for restaurant-grade service.'
  ),
];

const DESSERT_PRODUCTS: Product[] = [
  ...createCategoryProducts(
    'dessert',
    '4',
    DESSERT_ASSET_BASE,
    DESSERT_FILES,
    'Desserts, toppings, and sweet menu add-ons supplied in wholesale formats.'
  ),
  ...createCategoryProducts(
    'confectionery',
    '4',
    CONFECTIONERY_ASSET_BASE,
    CONFECTIONERY_FILES,
    'Confectionery and snack multipacks for retail shelves and resale counters.'
  ),
];

const FLOUR_GRAIN_PRODUCTS: Product[] = createCategoryProducts(
  'flour',
  '5',
  FLOUR_RICE_ASSET_BASE,
  FLOUR_RICE_FILES,
  'Flour, grain, rice, and mix products for bakeries and restaurant kitchens.'
);

const CANNED_PRODUCTS: Product[] = [
  ...createCategoryProducts(
    'canned',
    '6',
    CANNED_ASSET_BASE,
    CANNED_FILES,
    'Canned and preserved product range for wholesale buyers and catering suppliers.'
  ),
  ...createCategoryProducts(
    'canned-proc',
    '6',
    CANNED_PROC_ASSET_BASE,
    CANNED_PROC_FILES,
    'Expanded canned inventory including vegetables, legumes, and pantry staples.'
  ),
];

const FRESH_PRODUCTS: Product[] = createCategoryProducts(
  'fresh',
  '7',
  FRESH_ASSET_BASE,
  FRESH_FILES,
  'Fresh and chilled product lines for restaurants and takeaway suppliers.'
);

const VEGETABLE_PRODUCTS: Product[] = createCategoryProducts(
  'vegetable',
  '7',
  VEGETABLES_ASSET_BASE,
  VEGETABLE_FILES,
  'Fresh vegetable stock for wholesale buyers, food prep kitchens, and caterers.'
);

const SPICE_PRODUCTS: Product[] = [
  ...createCategoryProducts(
    'spice-general',
    '8',
    GENERAL_SPICES_ASSET_BASE,
    GENERAL_SPICES_FILES,
    'Spice blends, seasonings, and pantry flavors for commercial kitchens.'
  ),
  ...createCategoryProducts(
    'spice-general-2',
    '8',
    GENERAL_SPICES_2_ASSET_BASE,
    GENERAL_SPICES_2_FILES,
    'Specialty coatings, spice mixes, and seasoning products in wholesale packs.'
  ),
  ...createCategoryProducts(
    'spice-heera',
    '8',
    HEERA_SPICES_ASSET_BASE,
    HEERA_SPICES_FILES,
    'Heera brand herbs and spice staples for high-volume B2B kitchens.'
  ),
  ...createCategoryProducts(
    'spice-herra-2',
    '8',
    HERRA_SPICES_2_ASSET_BASE,
    HERRA_SPICES_2_FILES,
    'Extended spice and dry ingredient range in foodservice-ready quantities.'
  ),
  ...createCategoryProducts(
    'spice-natco',
    '8',
    NATCO_SPICES_ASSET_BASE,
    NATCO_SPICES_FILES,
    'Natco spice, paste, and dry ingredient range for bulk supply.'
  ),
];

const OIL_FAT_PRODUCTS: Product[] = createCategoryProducts(
  'oil-fat',
  '9',
  OIL_FATS_ASSET_BASE,
  OIL_FATS_FILES,
  'Cooking oils, fats, and ghee formats for commercial frying and prep.'
);

const SAUCE_BOTTLE_PRODUCTS: Product[] = createCategoryProducts(
  'sauce-bottle',
  '10',
  DRINK_CAN_ASSET_BASE,
  SAUCE_BOTTLE_FILES,
  'Popular wholesale bottle line for fast food shops, takeaways, and catering supply.'
);

const SAUCE_PRODUCTS: Product[] = [
  ...SAUCE_BOTTLE_PRODUCTS,
  ...createCategoryProducts(
    'sauce',
    '10',
    SAUCE_ASSET_BASE,
    SAUCE_FILES,
    'Sauce and condiment product range for burgers, pizza shops, and foodservice menus.'
  ),
  ...createCategoryProducts(
    'sauce-lion',
    '10',
    LION_SAUCES_ASSET_BASE,
    LION_SAUCES_FILES,
    'Lion and related branded sauces for takeaway, grill, and prep station use.'
  ),
  ...createCategoryProducts(
    'sauce-mayo',
    '10',
    MAYO_ASSET_BASE,
    MAYO_FILES,
    'Bulk mayonnaise products for foodservice kitchens and sandwich operations.'
  ),
];

const CLEANING_PRODUCTS: Product[] = [
  ...createCategoryProducts(
    'cleaning-bin-bag',
    '11',
    PLASTIC_BIN_BAGS_ASSET_BASE,
    PLASTIC_BIN_BAG_FILES,
    'Bin liners, carrier bags, and waste-management essentials for businesses.'
  ),
  ...createCategoryProducts(
    'cleaning-tissue',
    '11',
    TISSUES_ASSET_BASE,
    TISSUE_FILES,
    'Napkins, rolls, and tissue consumables for daily commercial operations.'
  ),
];

const GENERAL_PRODUCTS: Product[] = createCategoryProducts(
  'general',
  '12',
  GENERAL_ITEMS_ASSET_BASE,
  GENERAL_ITEM_FILES,
  'General-use wholesale items supporting day-to-day retail and kitchen operations.'
);

export const CATEGORIES: Category[] = [
  { id: '1', name: 'Drinks', slug: 'drinks', description: 'Premium beverages including sodas, artisanal juices, and mineral waters.', image: '/assets/Drink%20Cans%20processed/COKE%20CANS%2024X330ML.webp', icon: '🥤', subcategories: ['Canned Drinks', 'Bottled Drinks'] },
  { id: '2', name: 'Packaging', slug: 'packaging', description: 'Sustainable and industrial strength wholesale packaging solutions.', image: '/assets/external/cat-packaging.jpg', icon: '📦', subcategories: ['Paper Bags with Handles', 'Paper Bags without Handles', 'Chicken Boxes', 'Wrapping Sheets'] },
  { id: '3', name: 'Frozen Foods', slug: 'frozen-foods', description: 'IQF vegetables, premium meats, and ready-to-heat professional meals.', image: '/assets/Aviko%20-%20Processed%20incomp/AVIKO%20PREMIUM%20CR%207MM%2010%20KG.webp', icon: '❄️', subcategories: ['Frozen Chips', 'Frozen Buns', 'Frozen Meat', 'Frozen Chicken'] },
  { id: '4', name: 'Desserts', slug: 'desserts', description: 'Wholesale sweets, cakes, ice cream and confectionery items.', image: '/assets/external/cat-desserts.jpg', icon: '🍰', subcategories: ['Cakes', 'Ice Cream', 'Confectionery'] },
  { id: '5', name: 'Flour & Grains', slug: 'flour-grains', description: 'High-protein flours and premium grains for commercial baking.', image: '/assets/external/cat-flour-grains.jpg', icon: '🌾', subcategories: ['Pizza Flour', 'Rice', 'Other Grains'] },
  { id: '6', name: 'Canned Products', slug: 'canned-products', description: 'Bulk preserved goods, legumes, and pantry staples.', image: '/assets/Canned%20food%202/CARTIER%20BLACK%20OLIVES%20TIN%2012X1KG.webp', icon: '🥫', subcategories: ['Olives', 'Pizza Sauces', 'Other Canned Items'] },
  { id: '7', name: 'Fresh Products', slug: 'fresh-products', description: 'Daily-sourced produce from local farms and global suppliers.', image: '/assets/external/cat-fresh-products.jpg', icon: '🍎', subcategories: ['Vegetables', 'Fresh Chicken'] },
  { id: '8', name: 'Spices & Herbs', slug: 'spices-herbs', description: 'Authentic flavors sourced directly from origins worldwide.', image: '/assets/external/cat-spices-herbs.jpg', icon: '🌶️', subcategories: ['Breading', 'Spices', 'Herbs'] },
  { id: '9', name: 'Oils & Fats', slug: 'oils-fats', description: 'Cooking oils, butter, and shortenings in industrial formats.', image: '/assets/external/cat-oils-fats.jpg', icon: '🫗', subcategories: ['Cooking Oil', 'Solid Fats'] },
  { id: '10', name: 'Sauces', slug: 'sauces', description: 'Condiments and base sauces for commercial food service.', image: '/assets/external/cat-sauces.jpg', icon: '🍯', subcategories: ['Marinades', 'Mayonnaise', 'LION'] },
  { id: '11', name: 'Cleaning Supplies', slug: 'cleaning-supplies', description: 'Industrial cleaning supplies and degreasers.', image: '/assets/external/cat-cleaning-general.jpg', icon: '🧹', subcategories: ['Washing Up Liquids', 'Degreasers', 'Other Cleaning Items'] },
  { id: '12', name: 'General Items', slug: 'general-items', description: 'Kitchen essentials and miscellaneous items.', image: '/assets/external/cat-cleaning-general.jpg', icon: '🍴', subcategories: ['Dry Goods & Pantry', 'Kitchen Essentials', 'Till Rolls & Charcoal'] }
];

export const PRODUCTS: Product[] = [
  // Drinks (Category 1)
  ...DRINK_CAN_PRODUCTS,

  // Bottled Drinks (Category 1)
  ...DRINK_BOTTLE_PRODUCTS,

  // Packaging (Category 2)
  ...PACKAGING_PRODUCTS,
  ...PACKAGING_ADDITIONAL_PRODUCTS,

  // Frozen Foods (Category 3)
  ...FROZEN_PRODUCTS,

  // Desserts (Category 4)
  ...DESSERT_PRODUCTS,

  // Flour & Grains (Category 5)
  ...FLOUR_GRAIN_PRODUCTS,

  // Canned Products (Category 6)
  ...CANNED_PRODUCTS,

  // Fresh Products (Category 7)
  ...FRESH_PRODUCTS,
  ...VEGETABLE_PRODUCTS,

  // Spices & Herbs (Category 8)
  ...SPICE_PRODUCTS,

  // Oils & Fats (Category 9)
  ...OIL_FAT_PRODUCTS,

  // Sauces (Category 10)
  ...SAUCE_PRODUCTS,

  // Cleaning Supplies (Category 11)
  ...CLEANING_PRODUCTS,

  // General Items (Category 12)
  ...GENERAL_PRODUCTS,
];

export const INDUSTRIES = [
  { name: 'Supermarkets', icon: '🛒', desc: 'Full-shelf inventory management' },
  { name: 'Restaurants', icon: '🍽️', desc: 'Premium ingredients for chefs' },
  { name: 'Hotels', icon: '🏨', desc: 'Consistent hospitality supply' },
  { name: 'Cafés', icon: '☕', desc: 'Beverage and pastry essentials' },
  { name: 'Distributors', icon: '🚛', desc: 'Regional sub-wholesale customers' },
  { name: 'Bakeries', icon: '🥐', desc: 'Bulk grains and specialty flours' },
];