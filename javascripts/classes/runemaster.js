sSTR[999]=0;sCON[999]=0;sDEX[999]=0;sQUI[999]=0;sINT[999]=0;sPIE[999]=0;sEMP[999]=0;sCHA[999]=0; 
sSTR[998]=0;sCON[998]=0;sDEX[998]=0;sQUI[998]=0;sINT[998]=0;sPIE[998]=0;sEMP[998]=0;sCHA[998]=0; 
sSTR[9]=60;sCON[9]=80;sDEX[9]=50;sQUI[9]=50;sINT[9]=60;sPIE[9]=60;sEMP[9]=60;sCHA[9]=60; 
sSTR[18]=55;sCON[18]=55;sDEX[18]=55;sQUI[18]=60;sINT[18]=60;sPIE[18]=75;sEMP[18]=60;sCHA[18]=60; 
sSTR[10]=50;sCON[10]=50;sDEX[10]=70;sQUI[10]=70;sINT[10]=60;sPIE[10]=60;sEMP[10]=60;sCHA[10]=60; 
sSTR[11]=70;sCON[11]=70;sDEX[11]=50;sQUI[11]=50;sINT[11]=60;sPIE[11]=60;sEMP[11]=60;sCHA[11]=60; 

Abilities = new Array(9)		
Abilities[1]=new abilityPT("Darkness",0,54,2,1,0,0)
Abilities[2]=new abilityPT("Suppression",0,57,2,1,0,0)
Abilities[3]=new abilityPT("Staff",0,83,5,0,0,0)
Abilities[4]=new abilityPT("Cloth Armor",0,99,7,0,0,0)
Abilities[5]=new abilityPT("Quickcast ",5,1,1,0,0,0)
Abilities[6]=new abilityPT("Runes of Darkness",5,55,3,0,54,0)
Abilities[7]=new abilityPT("Runes of Suppression",5,58,3,0,57,0)
Abilities[8]=new abilityPT("Runecarving",5,60,2,1,0,0)
Abilities[9]=new abilityPT("Runes of Destruction",5,61,3,0,60,0)
	
//Styles = new Array(0);

Spells = new Array()

Lines = new Array();

var idx=1;
Lines[54002]=new linePT('Damage','',54,0) 
Spells[idx++]=new spellPT("Minor Dusk Dart",1,54002,54,"5  D ",54,"2 PP",'1500','2.6s','','','','Cold') 
Spells[idx++]=new spellPT("Dusk Dart",2,54002,54,"9  D ",54,"2 PP",'1500','2.6s','','','','Cold') 
Spells[idx++]=new spellPT("Major Dusk Dart",3,54002,54,"13  D ",54,"3 PP",'1500','2.6s','','','','Cold') 
Spells[idx++]=new spellPT("Greater Dusk Dart",5,54002,54,"21  D ",54,"4 PP",'1500','2.6s','','','','Cold') 
Spells[idx++]=new spellPT("Minor Gloom Blast",8,54002,54,"33  D ",54,"5 PP",'1500','2.6s','','','','Cold') 
Spells[idx++]=new spellPT("Gloom Blast",12,54002,54,"45  D ",54,"8 PP",'1500','2.6s','','','','Cold') 
Spells[idx++]=new spellPT("Greater Gloom Blast",15,54002,54,"57  D ",54,"9 PP",'1500','2.6s','','','','Cold') 
Spells[idx++]=new spellPT("Murk Blast",20,54002,54,"73  D ",54,"12 PP",'1500','2.6s','','','','Cold') 
Spells[idx++]=new spellPT("Greater Murk Blast",26,54002,54,"96  D ",54,"16 PP",'1500','2.6s','','','','Cold') 
Spells[idx++]=new spellPT("Shadow Blast",33,54002,54,"120  D ",54,"21 PP",'1500','2.6s','','','','Cold') 
Spells[idx++]=new spellPT("Greater Shadow Blast",43,54002,54,"155  D ",54,"27 PP",'1500','2.6s','','','','Cold') 
Spells[idx++]=new spellPT("Obsidian Strike",50,54002,54,"179  D ",54,"33 PP",'1500','2.6s','','','','Cold') 
Lines[54022]=new linePT('Debuff (Dexterity)','Reduces the target\'s Dexterity, which will cause it to be less effective in melee combat.',54,0) 
Spells[idx++]=new spellPT("Blanket of Darkness",4,54022,54,"-13 DEX ",54,"3 PP",'1500','','','5s','60s','') 
Spells[idx++]=new spellPT("Screen of Darkness",6,54022,54,"-14 DEX ",54,"4 PP",'1500','','','5s','60s','') 
Spells[idx++]=new spellPT("Envelope of Darkness",9,54022,54,"-17 DEX ",54,"6 PP",'1500','','','5s','60s','') 
Spells[idx++]=new spellPT("Globe of Darkness",13,54022,54,"-20 DEX ",54,"8 PP",'1500','','','5s','60s','') 
Spells[idx++]=new spellPT("Field of Darkness",18,54022,54,"-24 DEX ",54,"11 PP",'1500','','','5s','60s','') 
Spells[idx++]=new spellPT("Wrap of Darkness",25,54022,54,"-30 DEX ",54,"15 PP",'1500','','','5s','60s','') 
Spells[idx++]=new spellPT("Veil of Darkness",36,54022,54,"-38 DEX ",54,"23 PP",'1500','','','5s','60s','') 
Spells[idx++]=new spellPT("Shroud of Darkness",46,54022,54,"-46 DEX ",54,"30 PP",'1500','','','5s','60s','') 
Lines[55002]=new linePT('Damage','',55,0) 
Spells[idx++]=new spellPT("Rune of Dusk",1,55002,55,"5  D ",55,"2 PP",'1500','2.8s','','','','Cold') 
Spells[idx++]=new spellPT("Greater Rune of Dusk",3,55002,55,"16  D ",55,"3 PP",'1500','2.8s','','','','Cold') 
Spells[idx++]=new spellPT("Rune of Pitch",6,55002,55,"31  D ",55,"4 PP",'1500','2.8s','','','','Cold') 
Spells[idx++]=new spellPT("Greater Rune of Pitch",10,55002,55,"46  D ",55,"6 PP",'1500','2.8s','','','','Cold') 
Spells[idx++]=new spellPT("Rune of Murk",13,55002,55,"62  D ",55,"8 PP",'1500','2.8s','','','','Cold') 
Spells[idx++]=new spellPT("Greater Rune of Murk",17,55002,55,"81  D ",55,"10 PP",'1500','2.8s','','','','Cold') 
Spells[idx++]=new spellPT("Rune of Obscurity",23,55002,55,"108  D ",55,"14 PP",'1500','2.8s','','','','Cold') 
Spells[idx++]=new spellPT("Greater Rune of Obscurity",30,55002,55,"137  D ",55,"19 PP",'1500','2.8s','','','','Cold') 
Spells[idx++]=new spellPT("Rune of Shadow",37,55002,55,"173  D ",55,"23 PP",'1500','2.8s','','','','Cold') 
Spells[idx++]=new spellPT("Greater Rune of Shadow",47,55002,55,"219  D ",55,"30 PP",'1500','2.8s','','','','Cold') 
Lines[55015]=new linePT('Damage and Debuff','Target takes damage. Damage done is of the spell\'s given damage type. Target also has its resistance to that spell lowered slightly, which will make subsequent spells do more damage.',55,0) 
Spells[idx++]=new spellPT("Minor Raven Bolt",4,55015,55,"16  D 10% ",55,"3 PP",'1500','3.0s','','20s','60s','Cold') 
Spells[idx++]=new spellPT("Lesser Raven Bolt",8,55015,55,"32  D 10% ",55,"5 PP",'1500','3.0s','','20s','60s','Cold') 
Spells[idx++]=new spellPT("Raven Bolt",12,55015,55,"44  D 10% ",55,"8 PP",'1500','3.0s','','20s','60s','Cold') 
Spells[idx++]=new spellPT("Major Raven Bolt",16,55015,55,"60  D 10% ",55,"10 PP",'1500','3.0s','','20s','60s','Cold') 
Spells[idx++]=new spellPT("Greater Raven Bolt",22,55015,55,"79  D 10% ",55,"13 PP",'1500','3.0s','','20s','60s','Cold') 
Spells[idx++]=new spellPT("Superior Raven Bolt",29,55015,55,"107  D 10% ",55,"18 PP",'1500','3.0s','','20s','60s','Cold') 
Spells[idx++]=new spellPT("Munin's Claw",38,55015,55,"139  D 10% ",55,"24 PP",'1500','3.0s','','20s','60s','Cold') 
Spells[idx++]=new spellPT("Hugin's Claw",48,55015,55,"175  D 10% ",55,"31 PP",'1500','3.0s','','20s','60s','Cold') 
Lines[55016]=new linePT('Damage and Debuff (AOE)','Target takes damage. Damage done is of the spell\'s given damage type. Target also has its resistance to that spell lowered slightly, which will make subsequent spells do more damage. This is an \"Area of Effect\" (AOE) spell which can affect multiple targets in the spell\'s radius and does less damage the further away targets are from the spell\'s center.',55,0) 
Spells[idx++]=new spellPT("Raven Drove",9,55016,55,"28  D 10% ",55,"8 PP",'1500','3.0s','350','20s','60s','Cold') 
Spells[idx++]=new spellPT("Raven Flock",14,55016,55,"40  D 10% ",55,"11 PP",'1500','3.0s','350','20s','60s','Cold') 
Spells[idx++]=new spellPT("Raven Horde",19,55016,55,"56  D 10% ",55,"15 PP",'1500','3.0s','350','20s','60s','Cold') 
Spells[idx++]=new spellPT("Raven Throng",25,55016,55,"72  D 10% ",55,"20 PP",'1500','3.0s','350','20s','60s','Cold') 
Spells[idx++]=new spellPT("Raven Host",32,55016,55,"90  D 10% ",55,"26 PP",'1500','3.0s','350','20s','60s','Cold') 
Spells[idx++]=new spellPT("Raven Cloud",40,55016,55,"112  D 10% ",55,"34 PP",'1500','3.0s','350','20s','60s','Cold') 
Spells[idx++]=new spellPT("Raven Legion",50,55016,55,"140  D 10% ",55,"43 PP",'1500','3.0s','350','20s','60s','Cold') 
Lines[55004]=new linePT('Damage Add','Target does more damage with every melee weapon hit.',55,0) 
Spells[idx++]=new spellPT("Rune of Discomfort",5,55004,55,"1.8 DPS ",55,"4 PP",'1000','4.0s','','','20m','') 
Spells[idx++]=new spellPT("Rune of Injury",11,55004,55,"3.1 DPS ",55,"7 PP",'1000','4.0s','','','20m','') 
Spells[idx++]=new spellPT("Rune of Hurt",18,55004,55,"4.6 DPS ",55,"11 PP",'1000','4.0s','','','20m','') 
Spells[idx++]=new spellPT("Rune of Pain",24,55004,55,"5.8 DPS ",55,"15 PP",'1000','4.0s','','','20m','') 
Spells[idx++]=new spellPT("Rune of Agony",31,55004,55,"7.3 DPS ",55,"19 PP",'1000','4.0s','','','20m','') 
Spells[idx++]=new spellPT("Rune of Misery",39,55004,55,"9 DPS ",55,"25 PP",'1000','4.0s','','','20m','') 
Spells[idx++]=new spellPT("Rune of Torment",49,55004,55,"11.1 DPS ",55,"32 PP",'1000','4.0s','','','20m','') 
Lines[57028]=new linePT('Debuff (Strength)','Reduces the target\'s Strength, which will cause it to do less damage and be less effective in melee combat.',57,0) 
Spells[idx++]=new spellPT("Lessen Strength",1,57028,57,"-10 STR ",57,"1 PP",'1500','','','5s','60s','') 
Spells[idx++]=new spellPT("Diffuse Strength",5,57028,57,"-14 STR ",57,"3 PP",'1500','','','5s','60s','') 
Spells[idx++]=new spellPT("Disperse Strength",8,57028,57,"-16 STR ",57,"4 PP",'1500','','','5s','60s','') 
Spells[idx++]=new spellPT("Suppress Strength",11,57028,57,"-18 STR ",57,"5 PP",'1500','','','5s','60s','') 
Spells[idx++]=new spellPT("Quell Strength",17,57028,57,"-23 STR ",57,"8 PP",'1500','','','5s','60s','') 
Spells[idx++]=new spellPT("Abolish Strength",25,57028,57,"-30 STR ",57,"12 PP",'1500','','','5s','60s','') 
Spells[idx++]=new spellPT("Extinguish Strength",33,57028,57,"-36 STR ",57,"16 PP",'1500','','','5s','60s','') 
Spells[idx++]=new spellPT("Annihilate Strength",45,57028,57,"-46 STR ",57,"23 PP",'1500','','','5s','60s','') 
Lines[57003]=new linePT('Shield (Self)','Adds to the recipient\'s Armor Factor (AF), resulting in better protection against some forms of attack. It acts in addition to any armor the target is wearing.',57,0) 
Spells[idx++]=new spellPT("Minor Magic Shield",2,57003,57,"17 AF ",57,"2 PP",'','3.0s','','','20m','') 
Spells[idx++]=new spellPT("Lesser Magic Shield",4,57003,57,"27 AF ",57,"3 PP",'','3.0s','','','20m','') 
Spells[idx++]=new spellPT("Magic Shield",7,57003,57,"42 AF ",57,"5 PP",'','3.0s','','','20m','') 
Spells[idx++]=new spellPT("Major Magic Shield",10,57003,57,"56 AF ",57,"6 PP",'','3.0s','','','20m','') 
Spells[idx++]=new spellPT("Greater Magic Shield",14,57003,57,"75 AF ",57,"9 PP",'','3.0s','','','20m','') 
Spells[idx++]=new spellPT("Superior Magic Shield",18,57003,57,"95 AF ",57,"11 PP",'','3.0s','','','20m','') 
Spells[idx++]=new spellPT("Suppressive Barrier",24,57003,57,"124 AF ",57,"15 PP",'','3.0s','','','20m','') 
Spells[idx++]=new spellPT("Major Suppressive Barrier",32,57003,57,"162 AF ",57,"20 PP",'','3.0s','','','20m','') 
Spells[idx++]=new spellPT("Greater Suppressive Barrier",42,57003,57,"211 AF ",57,"27 PP",'','3.0s','','','20m','') 
Spells[idx++]=new spellPT("Superior Suppressive Barrier",50,57003,57,"250 AF ",57,"33 PP",'','3.0s','','','20m','') 
Lines[57012]=new linePT('Root','Target is effectively immobilized (loses 99% of possible movement speed) for the duration of the spell. If any damage is done to the target, the spell will break.',57,0) 
Spells[idx++]=new spellPT("Lessen Movement",3,57012,57,"99% 9 sec ",57,"2 PP",'1500','2.5s','','','9s','Body') 
Spells[idx++]=new spellPT("Diffuse Movement",6,57012,57,"99% 13 sec ",57,"3 PP",'1500','2.5s','','','13s','Body') 
Spells[idx++]=new spellPT("Disperse Movement",13,57012,57,"99% 23 sec ",57,"6 PP",'1500','2.5s','','','23s','Body') 
Spells[idx++]=new spellPT("Suppress Movement",19,57012,57,"99% 31 sec ",57,"9 PP",'1500','2.5s','','','31s','Body') 
Spells[idx++]=new spellPT("Quell Movement",26,57012,57,"99% 41 sec ",57,"12 PP",'1500','2.5s','','','41s','Body') 
Spells[idx++]=new spellPT("Abolish Movement",31,57012,57,"99% 48 sec ",57,"15 PP",'1500','2.5s','','','48s','Body') 
Spells[idx++]=new spellPT("Extinguish Movement",40,57012,57,"99% 61 sec ",57,"20 PP",'1500','2.5s','','','61s','Body') 
Spells[idx++]=new spellPT("Annihilate Movement",49,57012,57,"99% 73 sec ",57,"25 PP",'1500','2.5s','','','73s','Body') 
Lines[57005]=new linePT('Absorb (Self)','Adds to the target\'s absorption (ABS) factor, resulting in better protection against melee attacks.',57,0) 
Spells[idx++]=new spellPT("Magical Buffer",30,57005,57,"5% ",57,"19 PP",'','3.0s','','','20m','') 
Spells[idx++]=new spellPT("Suppressive Buffer",41,57005,57,"10% ",57,"26 PP",'','3.0s','','','20m','') 
Lines[58014]=new linePT('Damage and Snare','Target takes damage. Damage done is of the spell\'s given damage type. Target\'s movement speed is also slowed by the given percentage, which gives the caster more time before the target closes to melee range.',58,0) 
Spells[idx++]=new spellPT("Minor Entrapping Rune",1,58014,58,"5  D 35% ",58,"2 PP",'1500','3.0s','','','30s','Energy') 
Spells[idx++]=new spellPT("Lesser Entrapping Rune",5,58014,58,"21  D 35% ",58,"4 PP",'1500','3.0s','','','30s','Energy') 
Spells[idx++]=new spellPT("Entrapping Rune",9,58014,58,"37  D 35% ",58,"6 PP",'1500','3.0s','','','30s','Energy') 
Spells[idx++]=new spellPT("Lesser Tangling Rune",13,58014,58,"49  D 35% ",58,"8 PP",'1500','3.0s','','','30s','Energy') 
Spells[idx++]=new spellPT("Tangling Rune",17,58014,58,"64  D 35% ",58,"10 PP",'1500','3.0s','','','30s','Energy') 
Spells[idx++]=new spellPT("Lesser Snaring Rune",23,58014,58,"85  D 35% ",58,"14 PP",'1500','3.0s','','','30s','Energy') 
Spells[idx++]=new spellPT("Snaring Rune",33,58014,58,"120  D 35% ",58,"21 PP",'1500','3.0s','','','30s','Energy') 
Spells[idx++]=new spellPT("Lesser Rune of Mazing",41,58014,58,"148  D 35% ",58,"26 PP",'1500','3.0s','','','30s','Energy') 
Spells[idx++]=new spellPT("Rune of Mazing",50,58014,58,"179  D 35% ",58,"33 PP",'1500','3.0s','','','30s','Energy') 
Lines[58008]=new linePT('Damage and Snare (AOE)','Target takes damage. Damage done is of the spell\'s given damage type. Target\'s movement speed is also slowed by the given percentage, which gives the caster more time before the target closes to melee range. This is an \"Area of Effect\" (AOE) spell which can affect multiple targets in the spell\'s radius  and does less damage the further away targets are from the spell\'s center.',58,0) 
Spells[idx++]=new spellPT("Field of Suppression",7,58008,58,"22  D 35% ",58,"6 PP",'1500','3.0s','350','','30s','Energy') 
Spells[idx++]=new spellPT("Field of Slackening",14,58008,58,"40  D 35% ",58,"11 PP",'1500','3.0s','350','','30s','Energy') 
Spells[idx++]=new spellPT("Field of Entrapping",20,58008,58,"56  D 35% ",58,"16 PP",'1500','3.0s','350','','30s','Energy') 
Spells[idx++]=new spellPT("Field of Snaring",27,58008,58,"78  D 35% ",58,"22 PP",'1500','3.0s','350','','30s','Energy') 
Spells[idx++]=new spellPT("Field of Tangling",36,58008,58,"102  D 35% ",58,"30 PP",'1500','3.0s','350','','30s','Energy') 
Spells[idx++]=new spellPT("Field of Mazing",46,58008,58,"130  D 35% ",58,"39 PP",'1500','3.0s','350','','30s','Energy') 
Lines[58010]=new linePT('Bladeturn','A \"bubble\" that absorbs the damage of a single melee hit. Assassin critical strikes and attacks by very high level creatures will ignore a bladeturn bubble.',58,0) 
Spells[idx++]=new spellPT("Runic Ward",2,58010,58,"Self ",58,"8% ",'','4.0s','','','Special','') 
Spells[idx++]=new spellPT("Runic Fend",10,58010,58,"Friend ",58,"8% ",'1250','4.0s','','','Special','') 
Spells[idx++]=new spellPT("Runic Shield",16,58010,58,"Group ",58,"12% ",'1250','4.0s','','','Special','') 
Lines[58011]=new linePT('Bladeturn (Group, Chant)','A \"bubble\" that absorbs the damage of a single melee hit. Assassin critical strikes and attacks by very high level creatures will ignore a bladeturn bubble. This chant uses the caster\'s power.',58,0) 
Spells[idx++]=new spellPT("Runic Guard",26,58011,58,"10 sec (pulse) ",58,"16  & 4/P",'1250','4.0s','','','10s (pulse)','') 
Spells[idx++]=new spellPT("Runic Barrier",34,58011,58,"8 sec (pulse) ",58,"21  & 5/P",'1250','4.0s','','','8s (pulse)','') 
Spells[idx++]=new spellPT("Runic Wall",44,58011,58,"6 sec (pulse) ",58,"28  & 7/P",'1250','4.0s','','','6s (pulse)','') 
Lines[58049]=new linePT('Confusion','Target has a chance to switch targets that they are fighting. There is a smaller chance that they will actually attack one of their own allies.',58,0) 
Spells[idx++]=new spellPT("Hugin's Affliction",8,58049,58,"70% &nbsp;0% ",58,"4 PP",'1500','3.5s','','','60s','Energy') 
Spells[idx++]=new spellPT("Hugin's Malison",12,58049,58,"85% &nbsp;0% ",58,"6 PP",'1500','3.5s','','','60s','Energy') 
Spells[idx++]=new spellPT("Hugin's Curse",18,58049,58,"100% &nbsp;0% ",58,"8 PP",'1500','3.5s','','','60s','Energy') 
Spells[idx++]=new spellPT("Hugin's Vex",24,58049,58,"100% 15% ",58,"12 PP",'1500','3.5s','','','60s','Energy') 
Spells[idx++]=new spellPT("Hugin's Damnation",28,58049,58,"100% 30% ",58,"13 PP",'1500','3.5s','','','60s','Energy') 
Spells[idx++]=new spellPT("Hugin's Vilification",35,58049,58,"100% 45% ",58,"17 PP",'1500','3.5s','','','60s','Energy') 
Spells[idx++]=new spellPT("Hugin's Malediction",45,58049,58,"100% 60% ",58,"23 PP",'1500','3.5s','','','60s','Energy') 
Lines[58025]=new linePT('Nearsight','Target\'s effective range of all their ranged attacks (archery and magic) reduced.',58,0) 
Spells[idx++]=new spellPT("Suppress Sight",11,58025,58,"25% ",58,"5 PP",'2300','2.0s','','','120s','') 
Spells[idx++]=new spellPT("Suppress Vision",19,58025,58,"35% ",58,"9 PP",'2300','2.0s','','','120s','') 
Spells[idx++]=new spellPT("Suppress View",25,58025,58,"45% ",58,"12 PP",'2300','2.0s','','','120s','') 
Spells[idx++]=new spellPT("Diminish Sight",32,58025,58,"55% ",58,"16 PP",'2300','2.0s','','','120s','') 
Spells[idx++]=new spellPT("Diminish Vision",40,58025,58,"65% ",58,"20 PP",'2300','2.0s','','','120s','') 
Lines[60007]=new linePT('Damage (Bolt)','Target takes damage. Damage done is of the spell\'s given damage type. The spell is a \"bolt\" that can be blocked and takes a few seconds to travel to its target, but has a longer range and does significantly more damage than other types of spells.',60,0) 
Spells[idx++]=new spellPT("Simple Runebolt",4,60007,60,"24  D ",60,"3 PP",'1875','2.5s','','20s','','Energy') 
Spells[idx++]=new spellPT("Minor Runebolt",7,60007,60,"41  D ",60,"5 PP",'1875','2.5s','','20s','','Energy') 
Spells[idx++]=new spellPT("Lesser Runebolt",10,60007,60,"53  D ",60,"6 PP",'1875','2.5s','','20s','','Energy') 
Spells[idx++]=new spellPT("Runebolt",13,60007,60,"70  D ",60,"8 PP",'1875','2.5s','','20s','','Energy') 
Spells[idx++]=new spellPT("Major Runebolt",17,60007,60,"92  D ",60,"10 PP",'1875','2.5s','','20s','','Energy') 
Spells[idx++]=new spellPT("Greater Runebolt",22,60007,60,"115  D ",60,"13 PP",'1875','2.5s','','20s','','Energy') 
Spells[idx++]=new spellPT("Superior Runebolt",28,60007,60,"149  D ",60,"17 PP",'1875','2.5s','','20s','','Energy') 
Spells[idx++]=new spellPT("Supreme Runebolt",36,60007,60,"188  D ",60,"23 PP",'1875','2.5s','','20s','','Energy') 
Spells[idx++]=new spellPT("Sovereign Runebolt",46,60007,60,"239  D ",60,"30 PP",'1875','2.5s','','20s','','Energy') 
Lines[60053]=new linePT('Speed (Group, Chant)','The movement speed of the caster and his/her group is increased. Does not work in combat.',60,0) 
Spells[idx++]=new spellPT("Token of Movement",5,60053,60,"+123% SPEED ",60,"",'2000','3.0s','','','6s (pulse)','') 
Spells[idx++]=new spellPT("Mark of Movement",15,60053,60,"+131% SPEED ",60,"",'2000','3.0s','','','6s (pulse)','') 
Spells[idx++]=new spellPT("Symbol of Movement",25,60053,60,"+138% SPEED ",60,"",'2000','3.0s','','','6s (pulse)','') 
Spells[idx++]=new spellPT("Seal of Movement",35,60053,60,"+146% SPEED ",60,"",'2000','3.0s','','','6s (pulse)','') 
Spells[idx++]=new spellPT("Rune of Movement",45,60053,60,"+153% SPEED ",60,"",'2000','3.0s','','','6s (pulse)','') 
Lines[60002]=new linePT('Damage','',60,0) 
Spells[idx++]=new spellPT("Token of Destruction",6,60002,60,"25  D ",60,"4 PP",'1500','3.0s','','','','Energy') 
Spells[idx++]=new spellPT("Stamp of Destruction",8,60002,60,"33  D ",60,"5 PP",'1500','3.0s','','','','Energy') 
Spells[idx++]=new spellPT("Note of Destruction",11,60002,60,"40  D ",60,"7 PP",'1500','3.0s','','','','Energy') 
Spells[idx++]=new spellPT("Mark of Destruction",14,60002,60,"52  D ",60,"9 PP",'1500','3.0s','','','','Energy') 
Spells[idx++]=new spellPT("Insignia of Destruction",18,60002,60,"68  D ",60,"11 PP",'1500','3.0s','','','','Energy') 
Spells[idx++]=new spellPT("Symbol of Destruction",23,60002,60,"85  D ",60,"14 PP",'1500','3.0s','','','','Energy') 
Spells[idx++]=new spellPT("Seal of Destruction",30,60002,60,"108  D ",60,"19 PP",'1500','3.0s','','','','Energy') 
Spells[idx++]=new spellPT("Signet of Destruction",38,60002,60,"140  D ",60,"24 PP",'1500','3.0s','','','','Energy') 
Spells[idx++]=new spellPT("Rune of Destruction",48,60002,60,"176  D ",60,"31 PP",'1500','3.0s','','','','Energy') 
Lines[61007]=new linePT('Damage (Bolt)','Target takes damage. Damage done is of the spell\'s given damage type. The spell is a \"bolt\" that can be blocked and takes a few seconds to travel to its target, but has a longer range and does significantly more damage than other types of spells.',61,0) 
Spells[idx++]=new spellPT("Lesser Sigil of Ruin",1,61007,61,"7  D ",61,"2 PP",'1875','2.5s','','20s','','Energy') 
Spells[idx++]=new spellPT("Sigil of Ruin",3,61007,61,"23  D ",61,"3 PP",'1875','2.5s','','20s','','Energy') 
Spells[idx++]=new spellPT("Lesser Sigil of Havoc",6,61007,61,"45  D ",61,"4 PP",'1875','2.5s','','20s','','Energy') 
Spells[idx++]=new spellPT("Sigil of Havoc",10,61007,61,"67  D ",61,"6 PP",'1875','2.5s','','20s','','Energy') 
Spells[idx++]=new spellPT("Lesser Sigil of Destruction",13,61007,61,"89  D ",61,"8 PP",'1875','2.5s','','20s','','Energy') 
Spells[idx++]=new spellPT("Sigil of Destruction",17,61007,61,"118  D ",61,"10 PP",'1875','2.5s','','20s','','Energy') 
Spells[idx++]=new spellPT("Lesser Sigil of Devastation",23,61007,61,"156  D ",61,"14 PP",'1875','2.5s','','20s','','Energy') 
Spells[idx++]=new spellPT("Sigil of Devastation",30,61007,61,"198  D ",61,"19 PP",'1875','2.5s','','20s','','Energy') 
Spells[idx++]=new spellPT("Lesser Sigil of Undoing",37,61007,61,"250  D ",61,"23 PP",'1875','2.5s','','20s','','Energy') 
Spells[idx++]=new spellPT("Sigil of Undoing",47,61007,61,"317  D ",61,"30 PP",'1875','2.5s','','20s','','Energy') 
Lines[61019]=new linePT('Damage (AOE)','Target takes damage. Damage done is of the spell\'s given damage type. This is an \"Area of Effect\" (AOE) spell which can affect multiple targets in the spell\'s radius, and does less damage the further away targets are from the spell\'s center.',61,0) 
Spells[idx++]=new spellPT("Odin's Ire",2,61019,61,"8  D ",61,"2 PP",'1500','3.0s','350','','','Energy') 
Spells[idx++]=new spellPT("Odin's Grudge",5,61019,61,"20  D ",61,"4 PP",'1500','3.0s','350','','','Energy') 
Spells[idx++]=new spellPT("Odin's Anger",7,61019,61,"28  D ",61,"5 PP",'1500','3.0s','350','','','Energy') 
Spells[idx++]=new spellPT("Odin's Rage",12,61019,61,"44  D ",61,"8 PP",'1500','3.0s','350','','','Energy') 
Spells[idx++]=new spellPT("Odin's Frenzy",18,61019,61,"67  D ",61,"11 PP",'1500','3.0s','350','','','Energy') 
Spells[idx++]=new spellPT("Odin's Wrath",24,61019,61,"87  D ",61,"15 PP",'1500','3.0s','350','','','Energy') 
Spells[idx++]=new spellPT("Odin's Vengeance",32,61019,61,"115  D ",61,"20 PP",'1500','3.0s','350','','','Energy') 
Spells[idx++]=new spellPT("Odin's Hatred",44,61019,61,"158  D ",61,"28 PP",'1500','3.0s','350','','','Energy') 
Lines[61120]=new linePT('Damage (GTAOE)','Target takes damage. Damage done is of the spell\'s given damage type. This is an \"Ground Target Area of Effect\" (GTAOE) spell which can affect multiple targets in the spell\'s radius, and does not require a line of sight from the caster to its target. You can set a ground target by pressing the Ground Target key (default F5) and moving the crosshairs as desired. Other players can designate a target for the caster by using the /groundassist command.',61,0) 
Spells[idx++]=new spellPT("Mark of Ruin",19,61120,61,"73  D ",61,"12 PP",'1500','3.0s','350','6s','','Energy') 
Spells[idx++]=new spellPT("Mark of Havoc",26,61120,61,"96  D ",61,"16 PP",'1500','3.0s','350','6s','','Energy') 
Spells[idx++]=new spellPT("Mark of Devastation",35,61120,61,"128  D ",61,"22 PP",'1500','3.0s','350','6s','','Energy') 
Spells[idx++]=new spellPT("Mark of Undoing",43,61120,61,"155  D ",61,"27 PP",'1500','3.0s','350','6s','','Energy') 
Lines[61033]=new linePT('Debuff (Heat Resistance)','Target\'s resistance to Heat damage is lowered.',61,0) 
Spells[idx++]=new spellPT("Vex of Heat",22,61033,61,"-15 HEAT ",61,"10 PP",'1500','2.0s','','','15s','') 
Spells[idx++]=new spellPT("Vex of Fire",33,61033,61,"-30 HEAT ",61,"16 PP",'1500','2.0s','','','15s','') 
Spells[idx++]=new spellPT("Vex of Flames",45,61033,61,"-50 HEAT ",61,"23 PP",'1500','2.0s','','','15s','') 
Lines[61035]=new linePT('Debuff (Matter Resistance)','Target\'s resistance to Matter damage is lowered.',61,0) 
Spells[idx++]=new spellPT("Vex of Soil",25,61035,61,"-15 MATTER ",61,"12 PP",'1500','2.0s','','','15s','') 
Spells[idx++]=new spellPT("Vex of Dirt",34,61035,61,"-30 MATTER ",61,"16 PP",'1500','2.0s','','','15s','') 
Spells[idx++]=new spellPT("Vex of Earth",46,61035,61,"-50 MATTER ",61,"24 PP",'1500','2.0s','','','15s','') 
Lines[61034]=new linePT('Debuff (Cold Resistance)','Target\'s resistance to Cold damage is lowered.',61,0) 
Spells[idx++]=new spellPT("Vex of Cold",27,61034,61,"-15 COLD ",61,"13 PP",'1500','2.0s','','','8s','') 
Spells[idx++]=new spellPT("Vex of Frost",36,61034,61,"-30 COLD ",61,"18 PP",'1500','2.0s','','','8s','') 
Spells[idx++]=new spellPT("Vex of Ice",48,61034,61,"-50 COLD ",61,"24 PP",'1500','2.0s','','','8s','') 
