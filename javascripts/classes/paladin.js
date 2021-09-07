sSTR[999]=0;sCON[999]=0;sDEX[999]=0;sQUI[999]=0;sINT[999]=0;sPIE[999]=0;sEMP[999]=0;sCHA[999]=0; 
sSTR[998]=0;sCON[998]=0;sDEX[998]=0;sQUI[998]=0;sINT[998]=0;sPIE[998]=0;sEMP[998]=0;sCHA[998]=0; 
sSTR[5]=45;sCON[5]=45;sDEX[5]=60;sQUI[5]=70;sINT[5]=80;sPIE[5]=60;sEMP[5]=60;sCHA[5]=60; 
sSTR[6]=60;sCON[6]=60;sDEX[6]=60;sQUI[6]=60;sINT[6]=60;sPIE[6]=60;sEMP[6]=60;sCHA[6]=60; 
sSTR[7]=70;sCON[7]=70;sDEX[7]=50;sQUI[7]=50;sINT[7]=60;sPIE[7]=60;sEMP[7]=60;sCHA[7]=60; 
sSTR[8]=50;sCON[8]=50;sDEX[8]=80;sQUI[8]=60;sINT[8]=60;sPIE[8]=60;sEMP[8]=60;sCHA[8]=60; 

Abilities = new Array(20)		
Abilities[1]=new abilityPT("Staff",0,83,5,0,0,0)
Abilities[2]=new abilityPT("Slash",0,85,5,1,0,0)
Abilities[3]=new abilityPT("Crush",0,87,5,1,0,0)
Abilities[4]=new abilityPT("Thrust",0,89,5,1,0,0)
Abilities[5]=new abilityPT("Cloth Armor",0,99,7,0,0,0)
Abilities[6]=new abilityPT("Leather Armor",0,100,7,0,0,0)
Abilities[7]=new abilityPT("Studded Armor",0,101,7,0,0,0)
Abilities[8]=new abilityPT("Shields (Small)",0,102,7,0,0,0)
Abilities[9]=new abilityPT("Chants",5,6,2,1,0,0)
Abilities[10]=new abilityPT("Two Handed",5,93,5,1,0,0)
Abilities[11]=new abilityPT("Shields",5,97,5,1,0,0)
Abilities[12]=new abilityPT("Shields (Medium)",5,103,7,0,0,0)
Abilities[13]=new abilityPT("Protect I",9,109,4,0,0,0)
Abilities[14]=new abilityPT("Chain Armor",10,104,7,0,0,0)
Abilities[15]=new abilityPT("Shields (Large)",10,105,7,0,0,0)
Abilities[16]=new abilityPT("Intercept",10,110,4,0,0,0)
Abilities[17]=new abilityPT("Protect II",14,111,4,0,0,0)
Abilities[18]=new abilityPT("Parry",15,107,4,1,0,0)
Abilities[19]=new abilityPT("Protect III",19,112,4,0,0,0)
Abilities[20]=new abilityPT("Plate Armor",20,106,7,0,0,0)
	

Spells = new Array(58)

Lines = new Array(9);

Lines[6003]=new linePT('Shield (Self)','Adds to the recipient\'s Armor Factor (AF), resulting in better protection against some forms of attack. It acts in addition to any armor the target is wearing.',6,0) 
Spells[1]=new spellPT("Aura of Protection",1,6003,6,"14 AF ",6,"3 PP",'','4.0s','','','20m','') 
Spells[2]=new spellPT("Aura of Deflection",6,6003,6,"19 AF ",6,"6 PP",'','4.0s','','','20m','') 
Spells[3]=new spellPT("Aura of Safety",11,6003,6,"24 AF ",6,"9 PP",'','4.0s','','','20m','') 
Spells[4]=new spellPT("Aura of Defense",17,6003,6,"30 AF ",6,"12 PP",'','4.0s','','','20m','') 
Spells[5]=new spellPT("Aura of Indestructability",24,6003,6,"37 AF ",6,"17 PP",'','4.0s','','','20m','') 
Spells[6]=new spellPT("Aura of Invincibility",33,6003,6,"46 AF ",6,"23 PP",'','4.0s','','','20m','') 
Spells[7]=new spellPT("Aura of Salvation",43,6003,6,"56 AF ",6,"30 PP",'','4.0s','','','20m','') 
Lines[6060]=new linePT('Heal (Group, Chant)','Everyone in the caster\'s group is healed a small amount of damage every second. Only one chant can be active at a time; multiple chants can be \"twisted\", or activated and deactivated repeatedly overlapping in effect, but at the cost of draining the caster\'s endurance.',6,0) 
Spells[8]=new spellPT("Minor Refreshment",2,6060,6,"3 HP ",6,"",'1500','','','8s','','') 
Spells[9]=new spellPT("Lesser Refreshment",5,6060,6,"5 HP ",6,"",'1500','','','8s','','') 
Spells[10]=new spellPT("Refreshment",8,6060,6,"8 HP ",6,"",'1500','','','8s','','') 
Spells[11]=new spellPT("Major Refreshment",12,6060,6,"11 HP ",6,"",'1500','','','8s','','') 
Spells[12]=new spellPT("Greater Refreshment",16,6060,6,"14 HP ",6,"",'1500','','','8s','','') 
Spells[13]=new spellPT("Crusader's Refreshment",20,6060,6,"17 HP ",6,"",'1500','','','8s','','') 
Spells[14]=new spellPT("Saint's Refreshment",26,6060,6,"22 HP ",6,"",'1500','','','8s','','') 
Spells[15]=new spellPT("Angel's Refreshment",35,6060,6,"29 HP ",6,"",'1500','','','8s','','') 
Spells[16]=new spellPT("Archangel's Refreshment",45,6060,6,"37 HP ",6,"",'1500','','','8s','','') 
Lines[6073]=new linePT('Fatigue Regeneration (Group, Chant)','Spell that increases the caster\'s rate of fatigue regeneration, allowing them to use more styles during combat or sprint for longer distances. Spell is a chant and drains power while being used, and ends when the caster either ends the chant or runs out of power.',6,0) 
// Spells[17]=new spellPT("Chant of Endurance",2,6073,6,"1 FAT Regen ",6," 2/P",'1000','','','','5s (pulse)','') 
// Spells[18]=new spellPT("Chant of Stamina",12,6073,6,"2 FAT Regen ",6," 5/P",'1000','','','','5s (pulse)','') 
// Spells[19]=new spellPT("Chant of Persistence",22,6073,6,"3 FAT Regen ",6," 7/P",'1000','','','','5s (pulse)','') 
// Spells[20]=new spellPT("Chant of Resilience",32,6073,6,"4 FAT Regen ",6," 11/P",'1000','','','','5s (pulse)','') 
// Spells[21]=new spellPT("Chant of Perseverance",42,6073,6,"5 FAT Regen ",6," 14/P",'1000','','','','5s (pulse)','') 
Spells[17]=new spellPT("Chant of Endurance",2,6073,6,"1 FAT Regen ",6,"",'1000','','','','5s (pulse)','') 
Spells[18]=new spellPT("Chant of Stamina",12,6073,6,"2 FAT Regen ",6,"",'1000','','','','5s (pulse)','') 
Spells[19]=new spellPT("Chant of Persistence",22,6073,6,"3 FAT Regen ",6,"",'1000','','','','5s (pulse)','') 
Spells[20]=new spellPT("Chant of Resilience",32,6073,6,"4 FAT Regen ",6,"",'1000','','','','5s (pulse)','') 
Spells[21]=new spellPT("Chant of Perseverance",42,6073,6,"5 FAT Regen ",6,"",'1000','','','','5s (pulse)','') 
Lines[6061]=new linePT('Damage Add (Group, Chant)','Everyone in the caster\'s group has the given amount of damage added to each melee swing.',6,0) 
Spells[22]=new spellPT("Battle Fervor",3,6061,6,"1 DPS ",6,"",'1500','','','8s','6s (pulse)','') 
Spells[23]=new spellPT("Greater Battle Fervor",7,6061,6,"1 DPS ",6,"",'1500','','','8s','6s (pulse)','') 
Spells[24]=new spellPT("Battle Vigor",10,6061,6,"2 DPS ",6,"",'1500','','','8s','6s (pulse)','') 
Spells[25]=new spellPT("Greater Battle Vigor",15,6061,6,"2 DPS ",6,"",'1500','','','8s','6s (pulse)','') 
Spells[26]=new spellPT("Battle Fury",21,6061,6,"3 DPS ",6,"",'1500','','','8s','6s (pulse)','') 
Spells[27]=new spellPT("Greater Battle Fury",28,6061,6,"4 DPS ",6,"",'1500','','','8s','6s (pulse)','') 
Spells[28]=new spellPT("Battle Zeal",36,6061,6,"6 DPS ",6,"",'1500','','','8s','6s (pulse)','') 
Spells[29]=new spellPT("Greater Battle Zeal",46,6061,6,"7 DPS ",6,"",'1500','','','8s','6s (pulse)','') 
Lines[6062]=new linePT('Shield (Group, Chant)','Everyone in the caster\'s group gains an addition to their armor factor (AF). It acts in addition to any armor your group is wearing. Only one chant can be active at a time; multiple chants can be \"twisted\", or activated and deactivated repeatedly overlapping in effect, but at the cost of draining the caster\'s endurance.',6,0) 
Spells[30]=new spellPT("Crusader's Ward",4,6062,6,"24 AF ",6,"",'1500','','','8s','6s (pulse)','') 
Spells[31]=new spellPT("Crusader's Shield",9,6062,6,"33 AF ",6,"",'1500','','','8s','6s (pulse)','') 
Spells[32]=new spellPT("Crusader's Guard",13,6062,6,"40 AF ",6,"",'1500','','','8s','6s (pulse)','') 
Spells[33]=new spellPT("Crusader's Barrier",18,6062,6,"51 AF ",6,"",'1500','','','8s','6s (pulse)','') 
Spells[34]=new spellPT("Crusader's Defense",23,6062,6,"61 AF ",6,"",'1500','','','8s','6s (pulse)','') 
Spells[35]=new spellPT("Crusader's Shelter",29,6062,6,"75 AF ",6,"",'1500','','','8s','6s (pulse)','') 
Spells[36]=new spellPT("Crusader's Protection",38,6062,6,"99 AF ",6,"",'1500','','','8s','6s (pulse)','') 
Spells[37]=new spellPT("Crusader's Mantle",48,6062,6,"127 AF ",6,"",'1500','','','8s','6s (pulse)','') 
Lines[6065]=new linePT('Taunt','Attracts the attention of a creature. Can be used for \"pulling\" targets from a distance, \"peeling off\" a target that is attacking a friend, or interrupting enemy casters.',6,0) 
Spells[38]=new spellPT("Provoke",5,6065,6,"5.2 ",6,"",'1350','','','30s','','') 
Spells[39]=new spellPT("Aggravate",15,6065,6,"17.1 ",6,"",'1350','','','30s','','') 
Spells[40]=new spellPT("Enrage",30,6065,6,"38.7 ",6,"",'1350','','','30s','','') 
Spells[41]=new spellPT("Infuriate",40,6065,6,"55.6 ",6,"",'1350','','','30s','','') 
Lines[6064]=new linePT('Resistance (Group, Chant)','Everyone in the caster\'s group gains an addition to the given damage type. Only one chant can be active at a time; multiple chants can be \"twisted\", or activated and deactivated repeatedly overlapping in effect, but at the cost of draining the caster\'s endurance.',6,0) 
Spells[42]=new spellPT("Body Ward",25,6064,6,"+10 BODY ",6,"",'1500','','','8s','5s (pulse)','') 
Spells[43]=new spellPT("Mind Ward",26,6064,6,"+10 SPIRIT ",6,"",'1500','','','8s','5s (pulse)','') 
Spells[44]=new spellPT("Energy Ward",27,6064,6,"+10 ENERGY ",6,"",'1500','','','8s','5s (pulse)','') 
Spells[45]=new spellPT("Heat Ward",28,6064,6,"+10 HEAT ",6,"",'1500','','','8s','5s (pulse)','') 
Spells[46]=new spellPT("Cold Ward",29,6064,6,"+10 COLD ",6,"",'1500','','','8s','5s (pulse)','') 
Spells[47]=new spellPT("Earth Ward",30,6064,6,"+10 MATTER ",6,"",'1500','','','8s','5s (pulse)','') 
Spells[48]=new spellPT("Body Shield",44,6064,6,"+20 BODY ",6,"",'1500','','','8s','5s (pulse)','') 
Spells[49]=new spellPT("Mind Shield",45,6064,6,"+20 SPIRIT ",6,"",'1500','','','8s','5s (pulse)','') 
Spells[50]=new spellPT("Energy Shield",46,6064,6,"+20 ENERGY ",6,"",'1500','','','8s','5s (pulse)','') 
Spells[51]=new spellPT("Heat Shield",47,6064,6,"+20 HEAT ",6,"",'1500','','','8s','5s (pulse)','') 
Spells[52]=new spellPT("Cold Shield",48,6064,6,"+20 COLD ",6,"",'1500','','','8s','5s (pulse)','') 
Spells[53]=new spellPT("Earth Shield",49,6064,6,"+20 MATTER ",6,"",'1500','','','8s','5s (pulse)','') 
Lines[6113]=new linePT('Advanced Resistance (Group, Chant)','Everyone in the caster\'s group gains an addition to the given THREE damage types. Only one chant can be active at a time; multiple chants can be \"twisted\", or activated and deactivated repeatedly overlapping in effect, but at the cost of draining the caster\'s endurance.  This chant also uses the caster\'s power and will end when the caster is drained of power.',6,0) 
Spells[54]=new spellPT("Soul Ward",25,6113,6,"+5 PHYSICAL ",6," 8/P",'1500','','','8s','5s (pulse)','') 
Spells[55]=new spellPT("Elemental Ward",27,6113,6,"+5 ELEMENTAL ",6," 9/P",'1500','','','8s','5s (pulse)','') 
Spells[56]=new spellPT("Soul Shield",44,6113,6,"+10 PHYSICAL ",6," 15/P",'1500','','','8s','5s (pulse)','') 
Spells[57]=new spellPT("Elemental Shield",46,6113,6,"+10 ELEMENTAL ",6," 16/P",'1500','','','8s','5s (pulse)','') 
Lines[6063]=new linePT('Resurrection','Brings target back to life, and restores a portion of their health and power, and eliminates the experience penalty and con loss they would have suffered were they to have /released. (Note that con loss still applies when resurrected on a PvP server.)',6,0) 
Spells[58]=new spellPT("Revive",30,6063,6,"10%H 0%P ",6,"25%+ ",'1500','4.0s','','','','') 
