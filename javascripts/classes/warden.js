sSTR[999]=0;sCON[999]=0;sDEX[999]=0;sQUI[999]=0;sINT[999]=0;sPIE[999]=0;sEMP[999]=0;sCHA[999]=0; 
sSTR[998]=0;sCON[998]=0;sDEX[998]=0;sQUI[998]=0;sINT[998]=0;sPIE[998]=0;sEMP[998]=0;sCHA[998]=0; 
sSTR[1]=60;sCON[1]=60;sDEX[1]=60;sQUI[1]=60;sINT[1]=60;sPIE[1]=60;sEMP[1]=60;sCHA[1]=60; 
sSTR[3]=90;sCON[3]=60;sDEX[3]=40;sQUI[3]=40;sINT[3]=60;sPIE[3]=60;sEMP[3]=70;sCHA[3]=60; 
sSTR[14]=70;sCON[14]=60;sDEX[14]=55;sQUI[14]=45;sINT[14]=70;sPIE[14]=60;sEMP[14]=60;sCHA[14]=60; 

Abilities = new Array(17)		
Abilities[1]=new abilityPT("Regrowth",0,42,2,1,0,0)
Abilities[2]=new abilityPT("Nurture",0,46,2,1,0,0)
Abilities[3]=new abilityPT("Staff",0,83,5,0,0,0)
Abilities[4]=new abilityPT("Cloth Armor",0,99,7,0,0,0)
Abilities[5]=new abilityPT("Leather Armor",0,100,7,0,0,0)
Abilities[6]=new abilityPT("Shields (Small)",0,102,7,0,0,0)
Abilities[7]=new abilityPT("Blunt",0,122,5,0,0,0)
Abilities[8]=new abilityPT("Blades",0,123,5,0,0,0)
Abilities[9]=new abilityPT("Regrowth Spec.",5,45,3,0,42,0)
Abilities[10]=new abilityPT("Nurture Spec.",5,49,3,0,46,0)
Abilities[11]=new abilityPT("Shields (Medium)",5,103,7,0,0,0)
Abilities[12]=new abilityPT("Blunt",5,122,5,1,0,0)
Abilities[13]=new abilityPT("Blades",5,123,5,1,0,0)
Abilities[14]=new abilityPT("Short Bows",7,117,5,0,0,0)
Abilities[15]=new abilityPT("Reinforced Armor",10,124,7,0,0,0)
Abilities[16]=new abilityPT("Parry",15,107,4,1,0,0)
Abilities[17]=new abilityPT("Scale Armor",20,126,7,0,0,0)
	
//Styles = new Array(31);
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
//Styles[16]=new stylePT(122,"Contusions",2,"","High","Starter","","","","",0,"")
//Styles[17]=new stylePT(122,"Bruiser",4,"Stunned","Low","Medium","Medium Bonus","","","You block",0,"Stuns the target for a brief period of time.  Duration 2 seconds")
//Styles[18]=new stylePT(122,"Blunt Trauma",6,"Detaunt","Medium","","","Medium&nbsp;Bonus","","",0,"")
//Styles[19]=new stylePT(122,"Slam",8,"Taunt","Medium","Low","Medium Bonus","","Medium&nbsp;Penalty","",0,"")
//Styles[20]=new stylePT(122,"Side Bash",10,"Slowed","Medium","Medium","Low Bonus","","","To side of target",0,"Decreases the target\'s combat speed.  Duration 20 seconds")
//Styles[21]=new stylePT(122,"Impact",12,"Bleeding","Low","Medium","Medium Bonus","","Low&nbsp;Penalty","[*] Bruiser",0,"Does damage to a target over a period of time.  Damage per tick (every 4 seconds) 4 Damage type Body Duration 25 seconds")
//Styles[22]=new stylePT(122,"Windfall",15,"Slowed","Low","Medium","High Bonus","Low&nbsp;Bonus","","[*] Impact",0,"Decreases the target\'s combat speed.  Duration 20 seconds")
//Styles[23]=new stylePT(122,"Force of Might",18,"","High","Medium","Low Bonus","","","",0,"")
//Styles[24]=new stylePT(122,"Unstoppable Force",21,"Hindered","Medium","Medium","Medium Bonus","Low&nbsp;Bonus","","[*] Side Bash",0,"Reduces the target\'s movement speed.  Value 100% Duration 19 seconds")
//Styles[25]=new stylePT(122,"Back Crush",25,"","Medium","High","Medium Bonus","Medium&nbsp;Bonus","","Behind target",0,"")
//Styles[26]=new stylePT(122,"Bone Crusher",29,"Bleeding","Low","Medium","Medium Bonus","Low&nbsp;Bonus","","[*] Windfall",0,"Does damage to a target over a period of time.  Damage per tick (every 4 seconds) 7 Damage type Body Duration 40 seconds")
//Styles[27]=new stylePT(122,"Mauler",34,"No","Medium","High","Medium Bonus","Medium&nbsp;Bonus","","[*] Unstoppable Force",0,"")
//Styles[28]=new stylePT(122,"Stunning Blow",39,"Slowed","Low","Medium","Medium Bonus","Low&nbsp;Bonus","","You parry",0,"Decreases the target\'s combat speed.  Duration 20 seconds")
//Styles[29]=new stylePT(122,"Crushing Blow",44,"","Medium","Medium","Very High Bonus","Low&nbsp;Bonus","","[*] Back Crush",0,"")
//Styles[30]=new stylePT(122,"Devastating Blow",50,"Stunned","Medium","Medium","Medium Bonus","","","[*] Stunning Blow",0,"Stuns the target for a brief period of time.  Duration 10 seconds")

Spells = new Array()

Lines = new Array();

var idx=1;
Lines[42079]=new linePT('Minor Heal','Heals target for a very small amount of health. Casts quickly and uses little power.',42,0) 
Spells[idx++]=new spellPT("Minor Revigoration",1,42079,42,"6 HP ",42,"1 PP",'2000','2.2s','','','','') 
Spells[idx++]=new spellPT("Minor Renewal",3,42079,42,"11 HP ",42,"2 PP",'2000','2.2s','','','','') 
Spells[idx++]=new spellPT("Minor Revivification",5,42079,42,"16 HP ",42,"3 PP",'2000','2.2s','','','','') 
Spells[idx++]=new spellPT("Minor Resurgance",8,42079,42,"23 HP ",42,"4 PP",'2000','2.2s','','','','') 
Spells[idx++]=new spellPT("Minor Revival",11,42079,42,"31 HP ",42,"5 PP",'2000','2.2s','','','','') 
Spells[idx++]=new spellPT("Minor Regeneration",14,42079,42,"38 HP ",42,"6 PP",'2000','2.2s','','','','') 
Spells[idx++]=new spellPT("Minor Regrowth",18,42079,42,"48 HP ",42,"8 PP",'2000','2.2s','','','','') 
Spells[idx++]=new spellPT("Minor Restoration",23,42079,42,"60 HP ",42,"10 PP",'2000','2.2s','','','','') 
Spells[idx++]=new spellPT("Minor Resuscitation",29,42079,42,"75 HP ",42,"12 PP",'2000','2.2s','','','','') 
Spells[idx++]=new spellPT("Minor Renascence",37,42079,42,"95 HP ",42,"14 PP",'2000','2.2s','','','','') 
Spells[idx++]=new spellPT("Minor Apotheosis",47,42079,42,"119 HP ",42,"17 PP",'2000','2.2s','','','','') 
Lines[42081]=new linePT('Heal','Heals target for a small amount of health. Uses little power.',42,0) 
Spells[idx++]=new spellPT("Renewal",4,42081,42,"26 HP ",42,"4 PP",'2000','2.8s','','','','') 
Spells[idx++]=new spellPT("Revivification",6,42081,42,"36 HP ",42,"6 PP",'2000','2.8s','','','','') 
Spells[idx++]=new spellPT("Resurgance",9,42081,42,"50 HP ",42,"9 PP",'2000','2.8s','','','','') 
Spells[idx++]=new spellPT("Revival",12,42081,42,"65 HP ",42,"11 PP",'2000','2.8s','','','','') 
Spells[idx++]=new spellPT("Regeneration",16,42081,42,"85 HP ",42,"15 PP",'2000','2.8s','','','','') 
Spells[idx++]=new spellPT("Regrowth",21,42081,42,"109 HP ",42,"19 PP",'2000','2.8s','','','','') 
Spells[idx++]=new spellPT("Restoration",27,42081,42,"138 HP ",42,"25 PP",'2000','2.8s','','','','') 
Spells[idx++]=new spellPT("Resuscitation",31,42081,42,"158 HP ",42,"28 PP",'2000','2.8s','','','','') 
Spells[idx++]=new spellPT("Renascence",36,42081,42,"183 HP ",42,"33 PP",'2000','2.8s','','','','') 
Spells[idx++]=new spellPT("Apotheosis",46,42081,42,"231 HP ",42,"42 PP",'2000','2.8s','','','','') 
Lines[42063]=new linePT('Resurrection','Brings target back to life, and restores a portion of their health and power, and eliminates the experience penalty and con loss they would have suffered were they to have /released. (Note that con loss still applies when resurrected on a PvP server.)',42,0) 
Spells[idx++]=new spellPT("Minor Reconstitution",10,42063,42,"10%H 0%P ",42,"25%+ ",'1500','4.0s','','','','') 
Lines[42080]=new linePT('Minor Group Heal','Heals every member of the group for a small amount of health.',42,0) 
Spells[idx++]=new spellPT("Group Revigoration",15,42080,42,"33 HP ",42,"17 PP",'2000','3.0s','','','','') 
Spells[idx++]=new spellPT("Group Regrowth",25,42080,42,"53 HP ",42,"21 PP",'2000','3.0s','','','','') 
Spells[idx++]=new spellPT("Group Renascence",35,42080,42,"73 HP ",42,"24 PP",'2000','3.0s','','','','') 
Spells[idx++]=new spellPT("Group Apotheosis",45,42080,42,"93 HP ",42,"25 PP",'2000','3.0s','','','','') 
Lines[45073]=new linePT('Fatigue Regeneration (Self, Chant)','Spell that increases the caster\'s rate of fatigue regeneration, allowing them to use more styles during combat or sprint for longer distances. Spell is a chant and drains power while being used, and ends when the caster either ends the chant or runs out of power.',45,0) 
Spells[idx++]=new spellPT("Attack Unending",2,45073,45,"4 FAT Regen ",45," 2/P",'','','','8s','5s (pulse)','') 
Lines[45082]=new linePT('Major Heal','Heals target.',45,0) 
Spells[idx++]=new spellPT("Major Resurgance",5,45082,45,"55 HP ",45,"10 PP",'2000','3.2s','','','','') 
Spells[idx++]=new spellPT("Major Revival",8,45082,45,"82 HP ",45,"15 PP",'2000','3.2s','','','','') 
Spells[idx++]=new spellPT("Major Regeneration",11,45082,45,"109 HP ",45,"20 PP",'2000','3.2s','','','','') 
Spells[idx++]=new spellPT("Major Regrowth",15,45082,45,"145 HP ",45,"25 PP",'2000','3.2s','','','','') 
Spells[idx++]=new spellPT("Major Restoration",20,45082,45,"190 HP ",45,"32 PP",'2000','3.2s','','','','') 
Spells[idx++]=new spellPT("Major Resuscitation",26,45082,45,"244 HP ",45,"40 PP",'2000','3.2s','','','','') 
Spells[idx++]=new spellPT("Major Renascence",33,45082,45,"307 HP ",45,"48 PP",'2000','3.2s','','','','') 
Spells[idx++]=new spellPT("Major Apotheosis",42,45082,45,"387 HP ",45,"57 PP",'2000','3.2s','','','','') 
Lines[45089]=new linePT('Buff (Self, Health Regeneration)','Target regenerates the given amount of health every \"tick\".',45,0) 
Spells[idx++]=new spellPT("Solar Conversion",6,45089,45,"3 HP ",45,"8% ",'','3.0s','','','20m','') 
Spells[idx++]=new spellPT("Solar Absorption",14,45089,45,"6 HP ",45,"8% ",'','3.0s','','','20m','') 
Spells[idx++]=new spellPT("Solar Regeneration",25,45089,45,"11 HP ",45,"8% ",'','3.0s','','','20m','') 
Spells[idx++]=new spellPT("Solar Regrowth",35,45089,45,"15 HP ",45,"8% ",'','3.0s','','','20m','') 
Spells[idx++]=new spellPT("Solar Resuscitation",45,45089,45,"19 HP ",45,"8% ",'','3.0s','','','20m','') 
Lines[45074]=new linePT('Fatigue Reduction (Self)','Reduces the fatigue cost of combat styles used by the caster.',45,0) 
Spells[idx++]=new spellPT("Attack Unfading",12,45074,45,"20% ",45,"10% ",'','3.0s','','','20m','') 
Spells[idx++]=new spellPT("Attack Perpetual",22,45074,45,"25% ",45,"10% ",'','3.0s','','','20m','') 
Spells[idx++]=new spellPT("Attack Unceasing",32,45074,45,"30% ",45,"10% ",'','3.0s','','','20m','') 
Spells[idx++]=new spellPT("Attack Uninterrupted",41,45074,45,"40% ",45,"10% ",'','3.0s','','','20m','') 
Lines[45063]=new linePT('Resurrection','Brings target back to life, and restores a portion of their health and power, and eliminates the experience penalty and con loss they would have suffered were they to have /released. (Note that con loss still applies when resurrected on a PvP server.)',45,0) 
Spells[idx++]=new spellPT("Lesser Reconstitution",16,45063,45,"30%H 10%P ",45,"25%+ ",'1500','4.0s','','','','') 
Lines[45099]=new linePT('Cure Nearsight','Attempts to cure target of nearsight.',45,0) 
Spells[idx++]=new spellPT("Cure Nearsight I",25,45099,45,'',45,'','1500','6.0s','','','','') 
Spells[idx++]=new spellPT("Cure Nearsight II",35,45099,45,'',45,'','1500','3.5s','','','','')
Lines[46003]=new linePT('Shield','Adds to the recipient\'s Armor Factor (AF), resulting in better protection against some forms of attack. It acts in addition to any armor the target is wearing.',46,0) 
Spells[idx++]=new spellPT("Minor Bark Skin",2,46003,46,"12 AF ",46,"",'1000','3.0s','','','','') 
Spells[idx++]=new spellPT("Lesser Bark Skin",4,46003,46,"14 AF ",46,"",'1000','3.0s','','','','') 
Spells[idx++]=new spellPT("Bark Skin",6,46003,46,"16 AF ",46,"",'1000','3.0s','','','','') 
Spells[idx++]=new spellPT("Major Bark Skin",9,46003,46,"19 AF ",46,"",'1000','3.0s','','','','') 
Spells[idx++]=new spellPT("Greater Bark Skin",12,46003,46,"22 AF ",46,"",'1000','3.0s','','','','') 
Spells[idx++]=new spellPT("Superior Bark Skin",17,46003,46,"27 AF ",46,"",'1000','3.0s','','','','') 
Spells[idx++]=new spellPT("Skin of the Redwood",21,46003,46,"31 AF ",46,"",'1000','3.0s','','','','') 
Spells[idx++]=new spellPT("Greater Skin of the Redwood",26,46003,46,"36 AF ",46,"",'1000','3.0s','','','','') 
Spells[idx++]=new spellPT("Major Skin of the Redwood",32,46003,46,"42 AF ",46,"",'1000','3.0s','','','','') 
Spells[idx++]=new spellPT("Superior Skin of the Redwood",45,46003,46,"55 AF ",46,"",'1000','3.0s','','','','') 
Lines[46037]=new linePT('Buff (Strength)','Increases the target\'s Strength, which will cause it to be able to carry more weight, do more damage and be more effective in melee combat.',46,0) 
Spells[idx++]=new spellPT("Strength of the Oak",3,46037,46,"+12 STR ",46,"",'1000','3.0s','','','','') 
Spells[idx++]=new spellPT("Strength of the Redwood",7,46037,46,"+15 STR ",46,"",'1000','3.0s','','','','') 
Spells[idx++]=new spellPT("Vigor of the Oak",14,46037,46,"+21 STR ",46,"",'1000','3.0s','','','','') 
Spells[idx++]=new spellPT("Vigor of the Redwood",20,46037,46,"+26 STR ",46,"",'1000','3.0s','','','','') 
Spells[idx++]=new spellPT("Force of the Oak",30,46037,46,"+34 STR ",46,"",'1000','3.0s','','','','') 
Spells[idx++]=new spellPT("Force of the Redwood",41,46037,46,"+42 STR ",46,"",'1000','3.0s','','','','') 
Spells[idx++]=new spellPT("Might of the Redwood",50,46037,46,"+50 STR ",46,"",'1000','3.0s','','','','') 
Lines[46085]=new linePT('Buff (Constitution)','Increases the target\'s Constitution, which will cause it to be able to take more damage.',46,0) 
Spells[idx++]=new spellPT("Oak's Stoutness",5,46085,46,"+14 CON ",46,"",'1000','3.0s','','','','') 
Spells[idx++]=new spellPT("Oak's Stamina",11,46085,46,"+18 CON ",46,"",'1000','3.0s','','','','') 
Spells[idx++]=new spellPT("Oak's Girth",15,46085,46,"+22 CON ",46,"",'1000','3.0s','','','','') 
Spells[idx++]=new spellPT("Redwood's Stoutness",24,46085,46,"+29 CON ",46,"",'1000','3.0s','','','','') 
Spells[idx++]=new spellPT("Redwood's Stamina",33,46085,46,"+36 CON ",46,"",'1000','3.0s','','','','') 
Spells[idx++]=new spellPT("Redwood's Girth",43,46085,46,"+44 CON ",46,"",'1000','3.0s','','','','') 
Lines[46039]=new linePT('Buff (Dexterity)','Increases the target\'s Dexterity, which will cause it to be more effective in melee combat and to cast spells faster.',46,0) 
Spells[idx++]=new spellPT("Dexterity of the Ferret",8,46039,46,"+16 DEX ",46,"",'1000','3.0s','','','','') 
Spells[idx++]=new spellPT("Dexterity of the Rabbit",13,46039,46,"+20 DEX ",46,"",'1000','3.0s','','','','') 
Spells[idx++]=new spellPT("Dexterity of the Badger",19,46039,46,"+25 DEX ",46,"",'1000','3.0s','','','','') 
Spells[idx++]=new spellPT("Dexterity of the Lynx",28,46039,46,"+32 DEX ",46,"",'1000','3.0s','','','','') 
Spells[idx++]=new spellPT("Dexterity of the Bear",38,46039,46,"+40 DEX ",46,"",'1000','3.0s','','','','') 
Spells[idx++]=new spellPT("Dexterity of the Wolf",48,46039,46,"+48 DEX ",46,"",'1000','3.0s','','','','') 
Lines[49010]=new linePT('Bladeturn','A \"bubble\" that absorbs the damage of a single melee hit. Assassin critical strikes and attacks by very high level creatures will ignore a bladeturn bubble.',49,0) 
Spells[idx++]=new spellPT("Nature's Ward",2,49010,49,"Self ",49,"8% ",'','4.0s','','','Special','') 
Spells[idx++]=new spellPT("Nature's Fend",10,49010,49,"Friend ",49,"8% ",'1250','4.0s','','','Special','') 
Spells[idx++]=new spellPT("Nature's Shield",18,49010,49,"Group ",49,"12% ",'1250','4.0s','','','Special','') 
Lines[49011]=new linePT('Bladeturn (Group, Chant)','A \"bubble\" that absorbs the damage of a single melee hit. Assassin critical strikes and attacks by very high level creatures will ignore a bladeturn bubble. This chant uses the caster\'s power.',49,0) 
Spells[idx++]=new spellPT("Nature's Guard",26,49011,49,"10 sec (pulse) ",49,"16  & 4/P",'1250','','','16s','10s (pulse)','') 
Spells[idx++]=new spellPT("Nature's Barrier",36,49011,49,"8 sec (pulse) ",49,"23  & 5/P",'1250','','','16s','8s (pulse)','') 
Spells[idx++]=new spellPT("Nature's Wall",45,49011,49,"6 sec (pulse) ",49,"29  & 7/P",'1250','','','16s','6s (pulse)','') 
Lines[49040]=new linePT('Buff (Self, Combat Speed)','Increases the target\'s combat speed, which will cause it to be considerably more effective in melee combat.',49,0) 
Spells[idx++]=new spellPT("Ferocity of Nature",3,49040,49,"16% Hasted ",49,"15% ",'','3.0s','','','20m','') 
Spells[idx++]=new spellPT("Rage of Nature",8,49040,49,"19% Hasted ",49,"15% ",'','3.0s','','','20m','') 
Spells[idx++]=new spellPT("Fury of Nature",13,49040,49,"21% Hasted ",49,"15% ",'','3.0s','','','20m','') 
Spells[idx++]=new spellPT("Anger of Nature",21,49040,49,"25% Hasted ",49,"15% ",'','3.0s','','','20m','') 
Spells[idx++]=new spellPT("Hostility of Nature",30,49040,49,"30% Hasted ",49,"15% ",'','3.0s','','','20m','') 
Spells[idx++]=new spellPT("Aggression of Nature",38,49040,49,"34% Hasted ",49,"15% ",'','3.0s','','','20m','') 
Spells[idx++]=new spellPT("Reckoning of Nature",47,49040,49,"38% Hasted ",49,"15% ",'','3.0s','','','20m','') 
Lines[49053]=new linePT('Speed (Group, Chant)','The movement speed of the caster and his/her group is increased. Does not work in combat.',49,0) 
Spells[idx++]=new spellPT("Guardian's Encouragement",4,49053,49,"+123% SPEED ",49,"",'2000','3.0s','','','6s (pulse)','') 
Spells[idx++]=new spellPT("Benefactor's Encouragement",15,49053,49,"+131% SPEED ",49,"",'2000','3.0s','','','6s (pulse)','') 
Spells[idx++]=new spellPT("Protector's Encouragement",24,49053,49,"+138% SPEED ",49,"",'2000','3.0s','','','6s (pulse)','') 
Spells[idx++]=new spellPT("Warden's Encouragement",34,49053,49,"+145% SPEED ",49,"",'2000','3.0s','','','6s (pulse)','') 
Spells[idx++]=new spellPT("Paragon's Encouragement",44,49053,49,"+153% SPEED ",49,"",'2000','3.0s','','','6s (pulse)','') 
Lines[49061]=new linePT('Damage Add (Group, Chant)','Everyone in the caster\'s group has the given amount of damage added to each melee swing.',49,0) 
Spells[idx++]=new spellPT("Nature's Revenge",5,49061,49,"1 DPS ",49,"",'1500','','','8s','5s (pulse)','') 
Spells[idx++]=new spellPT("Nature's Vendetta",9,49061,49,"1 DPS ",49,"",'1500','','','8s','5s (pulse)','') 
Spells[idx++]=new spellPT("Nature's Vengeance",14,49061,49,"2 DPS ",49,"",'1500','','','8s','5s (pulse)','') 
Spells[idx++]=new spellPT("Nature's Retaliation",19,49061,49,"3 DPS ",49,"",'1500','','','8s','5s (pulse)','') 
Spells[idx++]=new spellPT("Nature's Retribution",25,49061,49,"4 DPS ",49,"",'1500','','','8s','5s (pulse)','') 
Spells[idx++]=new spellPT("Nature's Feud",35,49061,49,"5 DPS ",49,"",'1500','','','8s','5s (pulse)','') 
Spells[idx++]=new spellPT("Nature's Reckoning",46,49061,49,"7 DPS ",49,"",'1500','','','8s','5s (pulse)','') 
Lines[49086]=new linePT('Buff (Group, Body Resistance)','Target\'s resistance to Body damage is increased.',49,0) 
Spells[idx++]=new spellPT("Bolster Health",22,49086,49,"+8 BODY ",49,"18 PP",'1000','3.0s','','','10m','') 
Spells[idx++]=new spellPT("Bolster Resillience",32,49086,49,"+16 BODY ",49,"26 PP",'1000','3.0s','','','10m','') 
Spells[idx++]=new spellPT("Bolster Heartiness",43,49086,49,"+24 BODY ",49,"36 PP",'1000','3.0s','','','10m','') 
Lines[49087]=new linePT('Buff (Group, Spirit Resistance)','Target\'s resistance to Spirit damage is increased.',49,0) 
Spells[idx++]=new spellPT("Warden's Courage",23,49087,49,"+8 SPIRIT ",49,"19 PP",'1000','3.0s','','','10m','') 
Spells[idx++]=new spellPT("Warden's Honor",33,49087,49,"+16 SPIRIT ",49,"27 PP",'1000','3.0s','','','10m','') 
Spells[idx++]=new spellPT("Warden's Spirit",48,49087,49,"+24 SPIRIT ",49,"41 PP",'1000','3.0s','','','10m','') 
Lines[49088]=new linePT('Buff (Group, Energy Resistance)','Target\'s resistance to Energy damage is increased.',49,0) 
Spells[idx++]=new spellPT("Defy Thunder",27,49088,49,"+8 ENERGY ",49,"22 PP",'1000','3.0s','','','10m','') 
Spells[idx++]=new spellPT("Defy Storm",37,49088,49,"+16 ENERGY ",49,"31 PP",'1000','3.0s','','','10m','') 
Spells[idx++]=new spellPT("Defy Lightning",49,49088,49,"+24 ENERGY ",49,"42 PP",'1000','3.0s','','','10m','') 
