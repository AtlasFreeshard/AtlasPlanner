sSTR[999]=0;sCON[999]=0;sDEX[999]=0;sQUI[999]=0;sINT[999]=0;sPIE[999]=0;sEMP[999]=0;sCHA[999]=0; 
sSTR[998]=0;sCON[998]=0;sDEX[998]=0;sQUI[998]=0;sINT[998]=0;sPIE[998]=0;sEMP[998]=0;sCHA[998]=0; 
sSTR[1]=60;sCON[1]=60;sDEX[1]=60;sQUI[1]=60;sINT[1]=60;sPIE[1]=60;sEMP[1]=60;sCHA[1]=60; 
sSTR[2]=40;sCON[2]=40;sDEX[2]=75;sQUI[2]=75;sINT[2]=70;sPIE[2]=60;sEMP[2]=60;sCHA[2]=60; 
sSTR[4]=40;sCON[4]=40;sDEX[4]=80;sQUI[4]=80;sINT[4]=60;sPIE[4]=60;sEMP[4]=60;sCHA[4]=60; 
sSTR[16]=60;sCON[16]=80;sDEX[16]=50;sQUI[16]=50;sINT[16]=60;sPIE[16]=60;sEMP[16]=60;sCHA[16]=60; 

Abilities = new Array(15)		
Abilities[1]=new abilityPT("Staff",0,83,5,0,0,0)
Abilities[2]=new abilityPT("Cloth Armor",0,99,7,0,0,0)
Abilities[3]=new abilityPT("Leather Armor",0,100,7,0,0,0)
Abilities[4]=new abilityPT("Evade I",0,113,4,0,0,0)
Abilities[5]=new abilityPT("Stealth",0,119,4,1,0,0)
Abilities[6]=new abilityPT("Blades",0,123,5,1,0,0)
Abilities[7]=new abilityPT("Piercing",0,125,5,1,0,0)
Abilities[8]=new abilityPT("Shields (Small)",5,102,7,0,0,0)
Abilities[9]=new abilityPT("Bow",5,129,5,1,0,0)
Abilities[10]=new abilityPT("Pathfinding",5,146,2,1,0,0)
Abilities[11]=new abilityPT("Reinforced Armor",10,124,7,0,0,0)
Abilities[12]=new abilityPT("Celtic Dual",10,147,5,1,0,0)
Abilities[13]=new abilityPT("Evade II",12,114,4,0,0,0)
Abilities[14]=new abilityPT("Evade III",25,115,4,0,0,0)
Abilities[15]=new abilityPT("Camouflage",30,182,4,0,0,0)
	
//Styles = new Array(60);
//Styles[1]=new stylePT(123,"Shining Blade",2,"","High","Starter","","","","",0,"")
//Styles[2]=new stylePT(123,"Return Blade",4,"Slowed","Low","Medium","Medium Bonus","","","You parry",0,"Decreases the target\'s combat speed.  Duration 20 seconds")
//Styles[3]=new stylePT(123,"Taunting Blade",6,"Taunt","Medium","Low","Medium Bonus","","Medium&nbsp;Penalty","",0,"")
//Styles[4]=new stylePT(123,"Enervating Blade",8,"Detaunt","Medium","","","Medium&nbsp;Bonus","","",0,"")
//Styles[5]=new stylePT(123,"Glowing Blade",10,"Hindered","Medium","Medium","Medium Bonus","","","To side of target",0,"Reduces the target\'s movement speed.  Value 100% Duration 14 seconds")
//Styles[6]=new stylePT(123,"Lunging Blade",12,"Bleeding","Medium","Medium","Medium Bonus","Low&nbsp;Bonus","","[*] Return Blade",0,"Does damage to a target over a period of time.  Damage per tick (every 4 seconds) 5 Damage type Body Duration 30 seconds")
//Styles[7]=new stylePT(123,"Auroric Blade",15,"Slowed","Low","Medium","Medium Bonus","","","[*] Glowing Blade",0,"Decreases the target\'s combat speed.  Duration 20 seconds")
//Styles[8]=new stylePT(123,"Fire Blade",18,"","High","Medium","Low Bonus","","Low&nbsp;Penalty","",0,"")
//Styles[9]=new stylePT(123,"Horizon Blade",21,"Stunned","Low","High","Medium Bonus","Low&nbsp;Bonus","","You block",0,"Stuns the target for a brief period of time.  Duration 4 seconds")
//Styles[10]=new stylePT(123,"Kinetic Blade",25,"","Medium","High","Medium Bonus","","","[*] Lunging Blade",0,"")
//Styles[11]=new stylePT(123,"Dancing Blade",29,"Bleeding","Low","Medium","High Bonus","","","[*] Horizon Blade",0,"Does damage to a target over a period of time.  Damage per tick (every 4 seconds) 8 Damage type Body Duration 40 seconds")
//Styles[12]=new stylePT(123,"Revenging Blade",34,"","Medium","Medium","Medium Bonus","","Medium&nbsp;Penalty","Behind target",0,"")
//Styles[13]=new stylePT(123,"Spectrum Blade",39,"Slowed","Medium","Medium","Low Bonus","Medium&nbsp;Bonus","","[*] Fire Blade",0,"Decreases the target\'s combat speed.  Duration 20 seconds")
//Styles[14]=new stylePT(123,"Prismatic Blade",44,"","Low","High","Medium Bonus","","","[*] Dancing Blade",0,"")
//Styles[15]=new stylePT(123,"Brilliant Blade",50,"","Medium","High","Very High Bonus","","","[*] Revenging Blade",0,"")
//Styles[16]=new stylePT(129,"Critical Shot I",3,"Increased Damage","","","2x Normal","","","",0,"")
//Styles[17]=new stylePT(129,"Critical Shot II",6,"Increased Damage","","","1.9x Normal","","","",0,"")
//Styles[18]=new stylePT(129,"Critical Shot III",9,"Increased Damage","","","1.8x Normal","","","",0,"")
//Styles[19]=new stylePT(129,"Critical Shot IV",12,"Increased Damage","","","1.7x Normal","","","",0,"")
//Styles[20]=new stylePT(129,"Critical Shot V",15,"Increased Damage","","","1.6x Normal","","","",0,"")
//Styles[21]=new stylePT(129,"Critical Shot VI",18,"Increased Damage","","","1.5x Normal","","","",0,"")
//Styles[22]=new stylePT(129,"Critical Shot VII",21,"Increased Damage","","","1.4x Normal","","","",0,"")
//Styles[23]=new stylePT(129,"Critical Shot VIII",24,"Increased Damage","","","1.3x Normal","","","",0,"")
//Styles[24]=new stylePT(129,"Critical Shot IX",27,"Increased Damage","","","1.2x Normal","","","",0,"")
//Styles[25]=new stylePT(129,"Penetrating Arrow I",30,"Chance to penetrate bladeturn for 50% damage","","","Normal","","","",0,"")
//Styles[26]=new stylePT(129,"Rapid Fire I",35,"Release shot early; Damage % equal to Timer %","","","Timer-based","","","",0,"")
//Styles[27]=new stylePT(129,"Penetrating Arrow II",40,"Chance to penetrate bladeturn for 75% damage","","","Normal","","","",0,"")
//Styles[28]=new stylePT(129,"Rapid Fire II",45,"Release shot early; Damage % equal to Timer %","","","Timer-based","","","",0,"")
//Styles[29]=new stylePT(129,"Penetrating Arrow III",50,"Chance to penetrate bladeturn for 100% damage","","","Normal","","","",0,"")
//Styles[30]=new stylePT(147,"Misty Gloom",2,"","High","Starter","","","","",0,"")
//Styles[31]=new stylePT(147,"Blinding Rain",4,"Bleeding","Low","Medium","Medium Bonus","","","You evade",0,"Does damage to a target over a period of time.  Damage per tick (every 4 seconds) 3 Damage type Body Duration 20 seconds")
//Styles[32]=new stylePT(147,"Squall",6,"Taunt","Medium","Low","Low Bonus","","Medium&nbsp;Penalty","",0,"")
//Styles[33]=new stylePT(147,"Snow Shower",8,"Hindered","Medium","High","Medium Bonus","","","Behind target",0,"Reduces the target\'s movement speed.  Value 100% Duration 12 seconds")
//Styles[34]=new stylePT(147,"Gale",10,"Bleeding","Low","Medium","Medium Bonus","","Low&nbsp;Penalty","[*] Snow Shower",0,"Does damage to a target over a period of time.  Damage per tick (every 4 seconds) 5 Damage type Body Duration 30 seconds")
//Styles[35]=new stylePT(147,"Blizzard",12,"Slowed","Low","High","Medium Bonus","","","[*] Blinding Rain",0,"Decreases the target\'s combat speed.  Duration 20 seconds")
//Styles[36]=new stylePT(147,"Thunderstorm",15,"Detaunt","Low","Medium","Medium Bonus","High&nbsp;Bonus","","[*] Snow Shower",0,"")
//Styles[37]=new stylePT(147,"Ice Storm",18,"Stunned","Medium","High","Medium Bonus","","","To side of target",0,"Stuns the target for a brief period of time.  Duration 4 seconds")
//Styles[38]=new stylePT(147,"Hurricane",21,"","High","Medium","Low Bonus","","Medium&nbsp;Penalty","",0,"")
//Styles[39]=new stylePT(147,"Tornado",25,"Hindered","Low","Medium","High Bonus","Medium&nbsp;Bonus","","You parry",0,"Reduces the target\'s movement speed.  Value 100% Duration 23 seconds")
//Styles[40]=new stylePT(147,"Tempest",29,"Bleeding","Medium","High","Medium Bonus","","","[*] Ice Storm",0,"Does damage to a target over a period of time.  Damage per tick (every 4 seconds) 15 Damage type Body Duration 40 seconds")
//Styles[41]=new stylePT(147,"Meteor Shower",34,"","Low","Medium","Medium Bonus","","","[*] Tornado",0,"")
//Styles[42]=new stylePT(147,"Solar Flare",39,"","Medium","High","Low Bonus","Low&nbsp;Bonus","","[*] Hurricane",0,"")
//Styles[43]=new stylePT(147,"Twin Star",44,"Bleeding","Medium","Medium","Medium Bonus","","","[*] Meteor Shower",0,"Does damage to a target over a period of time.  Damage per tick (every 4 seconds) 25 Damage type Body Duration 40 seconds")
//Styles[44]=new stylePT(147,"Supernova",50,"Slowed","Medium","High","High Bonus","Low&nbsp;Bonus","","[*] Tempest",0,"Decreases the target\'s combat speed.  Duration 20 seconds")
//Styles[45]=new stylePT(125,"Dragonfly",2,"","High","Starter","","","","",0,"")
//Styles[46]=new stylePT(125,"Wasp's Sting",4,"Bleeding","Low","Medium","Medium Bonus","","","Behind target",0,"Does damage to a target over a period of time.  Damage per tick (every 4 seconds) 3 Damage type Body Duration 20 seconds")
//Styles[47]=new stylePT(125,"Bumblebee's Sting",6,"Taunt","Medium","Low","Medium Bonus","","High&nbsp;Penalty","",0,"")
//Styles[48]=new stylePT(125,"Hornet's Sting",8,"Slowed","Medium","Medium","Medium Bonus","","","[*] Wasp's Sting",0,"Decreases the target\'s combat speed.  Duration 20 seconds")
//Styles[49]=new stylePT(125,"Scorpion",10,"Detaunt","Medium","","","Medium&nbsp;Bonus","","",0,"")
//Styles[50]=new stylePT(125,"Black Widow",12,"","High","Medium","Low Bonus","","Low&nbsp;Penalty","",0,"")
//Styles[51]=new stylePT(125,"Tarantula",15,"Bleeding","Low","Medium","Medium Bonus","Low&nbsp;Bonus","","You block",0,"Does damage to a target over a period of time.  Damage per tick (every 4 seconds) 6 Damage type Body Duration 35 seconds")
//Styles[52]=new stylePT(125,"Sidewinder",18,"","Medium","High","Medium Bonus","","","[*] Black Widow",0,"")
//Styles[53]=new stylePT(125,"Copperhead",21,"Hindered","Medium","Medium","Medium Bonus","","Low&nbsp;Penalty","To side of target",0,"Reduces the target\'s movement speed.  Value 100% Duration 15 seconds")
//Styles[54]=new stylePT(125,"Diamondback",25,"Stunned","Low","Medium","Medium Bonus","Medium&nbsp;Bonus","","You evade",0,"Stuns the target for a brief period of time.  Duration 5 seconds")
//Styles[55]=new stylePT(125,"Viper's Bite",29,"","Medium","High","Medium Bonus","Medium&nbsp;Bonus","","[*] Tarantula",0,"")
//Styles[56]=new stylePT(125,"Asp's Bite",34,"Slowed","Low","Medium","Very High Bonus","Medium&nbsp;Bonus","","[*] Sidewinder",0,"Decreases the target\'s combat speed.  Duration 20 seconds")
//Styles[57]=new stylePT(125,"Cobra's Bite",39,"","Low","High","High Bonus","Low&nbsp;Bonus","","[*] Copperhead",0,"")
//Styles[58]=new stylePT(125,"Dragonspider",44,"Bleeding","Medium","Medium","Medium Bonus","","","[*] Diamondback",0,"Does damage to a target over a period of time.  Damage per tick (every 4 seconds) 10 Damage type Body Duration 40 seconds")
//Styles[59]=new stylePT(125,"Wyvern's Bite",50,"Bleeding","Medium","High","High Bonus","Low&nbsp;Bonus","","[*] Dragonspider",0,"Does damage to a target over a period of time.  Damage per tick (every 4 seconds) 11 Damage type Body Duration 40 seconds")

Spells = new Array(34)

Lines = new Array(5);

Lines[146003]=new linePT('Shield (Self)','Adds to the recipient\'s Armor Factor (AF), resulting in better protection against some forms of attack. It acts in addition to any armor the target is wearing.',146,0) 
Spells[1]=new spellPT("Determination",2,146003,146,"12 AF ",146,"6 PP",'','3.0s','','','20m','') 
Spells[2]=new spellPT("Perserverance",4,146003,146,"14 AF ",146,"8 PP",'','3.0s','','','20m','') 
Spells[3]=new spellPT("Self Control",8,146003,146,"18 AF ",146,"14 PP",'','3.0s','','','20m','') 
Spells[4]=new spellPT("Iron Will",11,146003,146,"24 AF ",146,"18 PP",'','3.0s','','','20m','') 
Spells[5]=new spellPT("Resolution",14,146003,146,"31 AF ",146,"22 PP",'','3.0s','','','20m','') 
Spells[6]=new spellPT("Devotion",18,146003,146,"35 AF ",146,"30 PP",'','3.0s','','','20m','') 
Spells[7]=new spellPT("Steel Mind",23,146003,146,"40 AF ",146,"38 PP",'','3.0s','','','20m','') 
Spells[8]=new spellPT("Inner Strength",31,146003,146,"50 AF ",146,"50 PP",'','3.0s','','','20m','') 
Spells[9]=new spellPT("Invincibility",42,146003,146,"64 AF ",146,"70 PP",'','3.0s','','','20m','') 
Lines[146037]=new linePT('Buff (Self, Strength)','Increases the target\'s Strength, which will cause it to be able to carry more weight, do more damage and be more effective in melee combat.',146,0) 
Spells[10]=new spellPT("Vigorous Will",3,146037,146,"+12 STR ",146,"3 PP",'','3.0s','','','20m','') 
Spells[11]=new spellPT("Strength of Will",7,146037,146,"+15 STR ",146,"6 PP",'','3.0s','','','20m','') 
Spells[12]=new spellPT("Fortification of Will",13,146037,146,"+20 STR ",146,"11 PP",'','3.0s','','','20m','') 
Spells[13]=new spellPT("Focus of Will",20,146037,146,"+26 STR ",146,"16 PP",'','3.0s','','','20m','') 
Spells[14]=new spellPT("Power of Will",30,146037,146,"+34 STR ",146,"25 PP",'','3.0s','','','20m','') 
Spells[15]=new spellPT("Force of Will",39,146037,146,"+41 STR ",146,"33 PP",'','3.0s','','','20m','') 
Spells[16]=new spellPT("Sovereign Will",50,146037,146,"+50 STR ",146,"43 PP",'','3.0s','','','20m','') 
Lines[146004]=new linePT('Damage Add (Self)','Target does more damage with every melee weapon hit.',146,0) 
Spells[17]=new spellPT("Piercing Strike",5,146004,146,"1.4 DPS ",146,"5 PP",'','3.0s','','','20m','') 
Spells[18]=new spellPT("Incisive Strike",10,146004,146,"1.8 DPS ",146,"8 PP",'','3.0s','','','20m','') 
Spells[19]=new spellPT("Cutting Strike",15,146004,146,"2.9 DPS ",146,"12 PP",'','3.0s','','','20m','') 
Spells[20]=new spellPT("Sharpened Strike",21,146004,146,"4.2 DPS ",146,"17 PP",'','3.0s','','','20m','') 
Spells[21]=new spellPT("Precision Strike",27,146004,146,"5.4 DPS ",146,"22 PP",'','3.0s','','','20m','') 
Spells[22]=new spellPT("Unerring Strike",36,146004,146,"7.3 DPS ",146,"30 PP",'','3.0s','','','20m','') 
Spells[23]=new spellPT("Perfect Strike",46,146004,146,"9.4 DPS ",146,"39 PP",'','3.0s','','','20m','') 
Lines[146048]=new linePT('Buff (Self, Dexterity/Quickness)','Increases the target\'s Dexterity and Quickness, which will cause it to do more damage and be more effective in melee combat as well as cast spells faster.',146,0) 
Spells[24]=new spellPT("Sharpened Senses",6,146048,146,"+21 DEX/QUI ",146,"10 PP",'','3.0s','','','20m','') 
Spells[25]=new spellPT("Keen Sight",12,146048,146,"+28 DEX/QUI ",146,"20 PP",'','3.0s','','','20m','') 
Spells[26]=new spellPT("Enhanced Senses",19,146048,146,"+37 DEX/QUI ",146,"30 PP",'','3.0s','','','20m','') 
Spells[27]=new spellPT("Honed Reflexes",29,146048,146,"+49 DEX/QUI ",146,"48 PP",'','3.0s','','','20m','') 
Spells[28]=new spellPT("Superior Coordination",40,146048,146,"+63 DEX/QUI ",146,"68 PP",'','3.0s','','','20m','') 
Spells[29]=new spellPT("Perfect Acuity",48,146048,146,"+72 DEX/QUI ",146,"82 PP",'','3.0s','','','20m','') 
Lines[146153]=new linePT('Speed (Self, Burst)','The movement speed of the caster is increased for a short duration. Does not work in combat.',146,0) 
Spells[30]=new spellPT("Forest Shadow",9,146153,146,"+135% SPEED 20 sec ",146,"16 PP",'','','','600s','20s','') 
Spells[31]=new spellPT("Greater Forest Shadow",16,146153,146,"+150% SPEED 25 sec ",146,"26 PP",'','','','600s','25s','') 
Spells[32]=new spellPT("Forest Spirit",25,146153,146,"+165% SPEED 35 sec ",146,"40 PP",'','','','600s','35s','') 
Spells[33]=new spellPT("Greater Forest Spirit",34,146153,146,"+180% SPEED 45 sec ",146,"56 PP",'','','','600s','45s','') 
Spells[34]=new spellPT("Forest Phantom",43,146153,146,"+195% SPEED 50 sec ",146,"72 PP",'','','','600s','50s','') 