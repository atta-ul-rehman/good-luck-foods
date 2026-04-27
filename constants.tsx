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
const PACKAGING_ASSET_BASE = '/assets/Fc Boxes - Sos Bags';
const SAUCE_ASSET_BASE = '/assets/Sauces processed';

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
];

export const CATEGORIES: Category[] = [
  { id: '1', name: 'Drinks', slug: 'drinks', description: 'Premium beverages including sodas, artisanal juices, and mineral waters.', image: '/assets/Drink%20Cans%20processed/COKE%20CANS%2024X330ML.webp', icon: '🥤', subcategories: ['Canned Drinks', 'Bottled Drinks'] },
  { id: '2', name: 'Packaging', slug: 'packaging', description: 'Sustainable and industrial strength wholesale packaging solutions.', image: 'https://images.unsplash.com/photo-1607166452427-7e4477079cb9?auto=format&fit=crop&q=80&w=800', icon: '📦', subcategories: ['Paper Bags with Handles', 'Paper Bags without Handles', 'Chicken Boxes', 'Wrapping Sheets'] },
  { id: '3', name: 'Frozen Foods', slug: 'frozen-foods', description: 'IQF vegetables, premium meats, and ready-to-heat professional meals.', image: '/assets/Aviko%20-%20Processed%20incomp/AVIKO%20PREMIUM%20CR%207MM%2010%20KG.webp', icon: '❄️', subcategories: ['Frozen Chips', 'Frozen Buns', 'Frozen Meat', 'Frozen Chicken'] },
  { id: '4', name: 'Desserts', slug: 'desserts', description: 'Wholesale sweets, cakes, ice cream and confectionery items.', image: 'https://images.unsplash.com/photo-1581798459219-318e76aecc7b?auto=format&fit=crop&q=80&w=800', icon: '🍰', subcategories: ['Cakes', 'Ice Cream', 'Confectionery'] },
  { id: '5', name: 'Flour & Grains', slug: 'flour-grains', description: 'High-protein flours and premium grains for commercial baking.', image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=800', icon: '🌾', subcategories: ['Pizza Flour', 'Rice', 'Other Grains'] },
  { id: '6', name: 'Canned Products', slug: 'canned-products', description: 'Bulk preserved goods, legumes, and pantry staples.', image: '/assets/Canned%20food%202/CARTIER%20BLACK%20OLIVES%20TIN%2012X1KG.webp', icon: '🥫', subcategories: ['Olives', 'Pizza Sauces', 'Other Canned Items'] },
  { id: '7', name: 'Fresh Products', slug: 'fresh-products', description: 'Daily-sourced produce from local farms and global suppliers.', image: 'https://images.unsplash.com/photo-1610348725531-843dff563e2c?auto=format&fit=crop&q=80&w=800', icon: '🍎', subcategories: ['Vegetables', 'Fresh Chicken'] },
  { id: '8', name: 'Spices & Herbs', slug: 'spices-herbs', description: 'Authentic flavors sourced directly from origins worldwide.', image: 'https://images.unsplash.com/photo-1532336414038-cf19250c5757?auto=format&fit=crop&q=80&w=800', icon: '🌶️', subcategories: ['Breading', 'Spices', 'Herbs'] },
  { id: '9', name: 'Oils & Fats', slug: 'oils-fats', description: 'Cooking oils, butter, and shortenings in industrial formats.', image: 'https://images.unsplash.com/photo-1620706857370-e1b9770e8bb1?auto=format&fit=crop&q=80&w=800', icon: '🫗', subcategories: ['Cooking Oil', 'Solid Fats'] },
  { id: '10', name: 'Sauces', slug: 'sauces', description: 'Condiments and base sauces for commercial food service.', image: 'https://images.unsplash.com/photo-1472476443507-c7a5948772fc?auto=format&fit=crop&q=80&w=800', icon: '🍯', subcategories: ['Marinades', 'Mayonnaise', 'LION'] },
  { id: '11', name: 'Cleaning Supplies', slug: 'cleaning-supplies', description: 'Industrial cleaning supplies and degreasers.', image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800', icon: '🧹', subcategories: ['Washing Up Liquids', 'Degreasers', 'Other Cleaning Items'] },
  { id: '12', name: 'General Items', slug: 'general-items', description: 'Kitchen essentials and miscellaneous items.', image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800', icon: '🍴' }
];

export const PRODUCTS: Product[] = [
  // Drinks (Category 1)
  ...DRINK_CAN_PRODUCTS,

  // Bottled Drinks (Category 1)
  ...DRINK_BOTTLE_PRODUCTS,

  // Packaging (Category 2)
  ...PACKAGING_PRODUCTS,

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

  // Sauces (Category 10)
  ...SAUCE_PRODUCTS,
];

export const INDUSTRIES = [
  { name: 'Supermarkets', icon: '🛒', desc: 'Full-shelf inventory management' },
  { name: 'Restaurants', icon: '🍽️', desc: 'Premium ingredients for chefs' },
  { name: 'Hotels', icon: '🏨', desc: 'Consistent hospitality supply' },
  { name: 'Cafés', icon: '☕', desc: 'Beverage and pastry essentials' },
  { name: 'Distributors', icon: '🚛', desc: 'Regional sub-wholesale customers' },
  { name: 'Bakeries', icon: '🥐', desc: 'Bulk grains and specialty flours' },
];