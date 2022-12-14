sSTR[999]=0;sCON[999]=0;sDEX[999]=0;sQUI[999]=0;sINT[999]=0;sPIE[999]=0;sEMP[999]=0;sCHA[999]=0; 
sSTR[998]=0;sCON[998]=0;sDEX[998]=0;sQUI[998]=0;sINT[998]=0;sPIE[998]=0;sEMP[998]=0;sCHA[998]=0; 
sSTR[6]=60;sCON[6]=60;sDEX[6]=60;sQUI[6]=60;sINT[6]=60;sPIE[6]=60;sEMP[6]=60;sCHA[6]=60; 
sSTR[7]=70;sCON[7]=70;sDEX[7]=50;sQUI[7]=50;sINT[7]=60;sPIE[7]=60;sEMP[7]=60;sCHA[7]=60; 
sSTR[8]=50;sCON[8]=50;sDEX[8]=80;sQUI[8]=60;sINT[8]=60;sPIE[8]=60;sEMP[8]=60;sCHA[8]=60; 

Abilities = new Array()		
Abilities[1]=new abilityPT("Staff",0,83,5,0,0,0)
Abilities[2]=new abilityPT("Slash",0,85,5,1,0,0)
Abilities[3]=new abilityPT("Thrust",0,89,5,1,0,0)
Abilities[4]=new abilityPT("Cloth Armor",0,99,7,0,0,0)
Abilities[5]=new abilityPT("Leather Armor",0,100,7,0,0,0)
Abilities[6]=new abilityPT("Evade I",0,113,4,0,0,0)
Abilities[7]=new abilityPT("Stealth", 5, 119, 2, 1, 0, 0)
Abilities[8]=new abilityPT("Instruments",5,5,2,1,0,0)
Abilities[9]=new abilityPT("Shields (Small)",5,102,7,0,0,0)
Abilities[10]=new abilityPT("Studded Armor",10,101,7,0,0,0)
Abilities[11]=new abilityPT("Evade II",15,114,4,0,0,0)
Abilities[12]=new abilityPT("Chain Armor",20,104,7,0,0,0)
	
Spells = new Array()
Lines = new Array();

var idx=1;
Lines[5067]=new linePT('Health Regeneration (Group, Song)','Song that increases the group\'s rate of health regeneration, reducing downtime between battles.  Only one song can be sung at a time.',5,0) 
Spells[idx++]=new spellPT("Song of Minor Renewal",1,5067,5,"2 HP ",5,"",'700','3.0s','','','6s (pulse)','') 
Spells[idx++]=new spellPT("Song of Renewal",8,5067,5,"8 HP ",5,"",'700','3.0s','','','6s (pulse)','') 
Spells[idx++]=new spellPT("Song of Minor Healing",14,5067,5,"13 HP ",5,"",'700','3.0s','','','6s (pulse)','') 
Spells[idx++]=new spellPT("Song of Healing",19,5067,5,"17 HP ",5,"",'700','3.0s','','','6s (pulse)','') 
Spells[idx++]=new spellPT("Song of Minor Regeneration",25,5067,5,"22 HP ",5,"",'700','3.0s','','','6s (pulse)','') 
Spells[idx++]=new spellPT("Song of Regeneration",31,5067,5,"26 HP ",5,"",'700','3.0s','','','6s (pulse)','') 
Spells[idx++]=new spellPT("Song of Minor Rejuvenation",37,5067,5,"31 HP ",5,"",'700','3.0s','','','6s (pulse)','') 
Spells[idx++]=new spellPT("Song of Rejuvenation",47,5067,5,"39 HP ",5,"",'700','3.0s','','','6s (pulse)','') 
Lines[105069]=new linePT('Damage (Instant)','Target takes damage. Damage done is of the spell\'s given damage type.  Spell can be cast during combat.',5,0) 
Spells[idx++]=new spellPT("Dischordant Note",2,105069,5,"7  D ",5,"2 PP",'700','','','15s','','Body') 
Spells[idx++]=new spellPT("Dischordant Tone",7,105069,5,"21  D ",5,"5 PP",'700','','','15s','','Body') 
Spells[idx++]=new spellPT("Dischordant Wail",17,105069,5,"46  D ",5,"10 PP",'700','','','15s','','Body') 
Spells[idx++]=new spellPT("Dischordant Shriek",35,105069,5,"92  D ",5,"22 PP",'700','','','15s','','Body') 
Spells[idx++]=new spellPT("Discordant Howl",43,105069,5,"111  D ",5,"27 PP",'700','','','15s','','Body') 
Lines[5069]=new linePT('Damage (Instant)','Target takes damage. Damage done is of the spell\'s given damage type.  Spell can be cast during combat.',5,0) 
Spells[idx++]=new spellPT("Lesser Cacophony",4,5069,5,"12  D ",5,"3 PP",'700','','','15s','','Body') 
Spells[idx++]=new spellPT("Cacophony",12,5069,5,"32  D ",5,"8 PP",'700','','','15s','','Body') 
Spells[idx++]=new spellPT("Greater Cacophony",26,5069,5,"69  D ",5,"16 PP",'700','','','15s','','Body') 
Spells[idx++]=new spellPT("Major Cacophony",44,5069,5,"114  D ",5,"28 PP",'700','','','15s','','Body') 
Spells[idx++]=new spellPT("Deafening Cacophany",50,5069,5,"128  D ",5,"33 PP",'700','','','15s','','Body') 
Lines[5066]=new linePT('Speed (Group, Song)','The movement speed of the caster and his/her group is greatly increased. Does not work in combat. Only one song can be sung at a time.',5,0) 
Spells[idx++]=new spellPT("Motivational Chant",3,5066,5,"+144% SPEED ",5,"",'2000','3.0s','','','6s (pulse)','') 
Spells[idx++]=new spellPT("Motivational Song",11,5066,5,"+156% SPEED ",5,"",'2000','3.0s','','','6s (pulse)','') 
Spells[idx++]=new spellPT("Motivational Hymn",23,5066,5,"+174% SPEED ",5,"",'2000','3.0s','','','6s (pulse)','') 
Spells[idx++]=new spellPT("Motivational Strains",33,5066,5,"+189% SPEED ",5,"",'2000','3.0s','','','6s (pulse)','') 
Spells[idx++]=new spellPT("Motivational Anthem",43,5066,5,"+204% SPEED ",5,"",'2000','3.0s','','','6s (pulse)','') 
Lines[5071]=new linePT('Stun (Instant)','Target is stunned and cannot move or take any other action for the duration of the spell. Spells cast by friendly players, resistances to the spell\'s damage type, or realm abilities such as \"Purge\" and \"Determination\" can help to counteract the effect. Spell can be cast during combat.',5,0) 
Spells[idx++]=new spellPT("Stunning Yell",5,5071,5,"3 sec ",5,"4 PP",'700','','','10s','3s','Body') 
Spells[idx++]=new spellPT("Stunning Shout",15,5071,5,"5 sec ",5,"9 PP",'700','','','10s','5s','Body') 
Spells[idx++]=new spellPT("Stunning Screech",28,5071,5,"7 sec ",5,"17 PP",'700','','','10s','7s','Body') 
Spells[idx++]=new spellPT("Stunning Bellow",40,5071,5,"9 sec ",5,"25 PP",'700','','','10s','9s','Body') 
Lines[5049]=new linePT('Confusion','Target has a chance to switch targets that they are fighting. There is a smaller chance that they will actually attack one of their own allies.',5,0) 
Spells[idx++]=new spellPT("Cant of Befuddling",5,5049,5,"70% &nbsp;0% ",5,"",'700','','','30s','20s','Spirit') 
Spells[idx++]=new spellPT("Cant of Bewilderment",15,5049,5,"85% &nbsp;0% ",5,"",'700','','','30s','20s','Spirit') 
Spells[idx++]=new spellPT("Cant of Confusion",25,5049,5,"100% &nbsp;0% ",5,"",'700','','','30s','20s','Spirit') 
Spells[idx++]=new spellPT("Cant of Discord",35,5049,5,"100% 15% ",5,"",'700','','','30s','20s','Spirit') 
Spells[idx++]=new spellPT("Cant of Perplexity",45,5049,5,"100% 30% ",5,"",'700','','','30s','20s','Body') 
Lines[5070]=new linePT('Charm (Song)','Compels creature to fight and die for the caster. This spell has a chance (based on the caster\'s specialization versus the creature\'s level) of breaking each \"tick\". The level of the creature charmed is 70%-110% of the caster\'s level (based on the caster\'s specialization). Only one song can be sung at a time.',5,0) 
Spells[idx++]=new spellPT("Captivating Melodies",6,5070,5,"",5,"",'2000','','','5s','10s (pulse)','') 
Spells[idx++]=new spellPT("Enchanting Melodies",13,5070,5,"",5,"",'2000','','','5s','10s (pulse)','') 
Spells[idx++]=new spellPT("Attracting Melodies",20,5070,5,"",5,"",'2000','','','5s','10s (pulse)','') 
Spells[idx++]=new spellPT("Pleasurable Melodies",27,5070,5,"",5,"",'2000','','','5s','10s (pulse)','') 
Spells[idx++]=new spellPT("Enticing Melodies",34,5070,5,"",5,"",'2000','','','5s','10s (pulse)','') 
Spells[idx++]=new spellPT("Alluring Melodies",41,5070,5,"",5,"",'2000','','','5s','10s (pulse)','') 
Lines[5072]=new linePT('Mesmerise (Song)','Target is stunned and cannot move or take any other action for the duration of the spell. Spells cast by friendly players, resistances to the spell\'s damage type, or realm abilities such as \"Purge\" and \"Determination\" can help to counteract the effect. If the target suffers any damage or other negative effect,  the spell will break. Unlike other mesmerisation spells, this song will keep a target mesmerized as long as the song is sung, and a variable time thereafter. Only one song can be sung at a time.',5,0) 
Spells[idx++]=new spellPT("Compelling Cadence",9,5072,5,"12 sec (pulse) ",5,"",'1500','3.0s','','','12s (pulse)','Body') 
Spells[idx++]=new spellPT("Constraining Cadence",18,5072,5,"17 sec (pulse) ",5,"",'1500','3.0s','','','17s (pulse)','Body') 
Spells[idx++]=new spellPT("Coercing Cadence",24,5072,5,"20 sec (pulse) ",5,"",'1500','3.0s','','','20s (pulse)','Body') 
Spells[idx++]=new spellPT("Compulsory Cadence",36,5072,5,"26 sec (pulse) ",5,"",'1500','3.0s','','','26s (pulse)','Body') 
Spells[idx++]=new spellPT("Commanding Cadence",42,5072,5,"29 sec (pulse) ",5,"",'1500','3.0s','','','29s (pulse)','Body') 
Lines[5057]=new linePT('Mesmerise (AOE)','Target is stunned and cannot move or take any other action for the duration of the spell. Spells cast by friendly players, resistances to the spell\'s damage type, or realm abilities such as \"Purge\" and \"Determination\" can help to counteract the effect. If the target suffers any damage or other negative effect, the spell will break. This is an \"Area of Effect\" (AOE) spell which can affect multiple targets in the spell\'s radius. The spell\'s effect may be more easily resisted further away from the spell\'s center.',5,0) 
Spells[idx++]=new spellPT("Comforting Lullaby",10,5057,5,"13 sec ",5,"6 PP",'1500','5.0s','250','','13s','Body') 
Spells[idx++]=new spellPT("Enchanting Lullaby",15,5057,5,"15 sec ",5,"9 PP",'1500','5.0s','250','','15s','Body') 
Spells[idx++]=new spellPT("Pacifying Lullaby",21,5057,5,"18 sec ",5,"13 PP",'1500','5.0s','250','','18s','Body') 
Spells[idx++]=new spellPT("Entrancing Lullaby",28,5057,5,"22 sec ",5,"17 PP",'1500','5.0s','250','','22s','Body') 
Spells[idx++]=new spellPT("Sedating Lullaby",36,5057,5,"26 sec ",5,"23 PP",'1500','5.0s','250','','26s','Body') 
Spells[idx++]=new spellPT("Enrapturing Lullaby",45,5057,5,"30 sec ",5,"29 PP",'1500','5.0s','250','','30s','Body') 
Lines[5068]=new linePT('Power Regeneration (Group, Song)','Song that increases the group\'s rate of power regeneration, reducing downtime between battles.  Only one song can be sung at a time.',5,0) 
Spells[idx++]=new spellPT("Song of Power",10,5068,5,"1 PP Regen ",5,"",'700','3.0s','','','6s (pulse)','') 
Spells[idx++]=new spellPT("Song of Energy",21,5068,5,"2 PP Regen ",5,"",'700','3.0s','','','6s (pulse)','') 
Spells[idx++]=new spellPT("Song of Clarity",30,5068,5,"3 PP Regen ",5,"",'700','3.0s','','','6s (pulse)','') 
Spells[idx++]=new spellPT("Song of the Mind",39,5068,5,"4 PP Regen ",5,"",'700','3.0s','','','6s (pulse)','') 
Spells[idx++]=new spellPT("Song of Empowering",50,5068,5,"5 PP Regen ",5,"",'700','3.0s','','','6s (pulse)','') 
Lines[5054]=new linePT('Remove Mesmerisation','Target is no longer mesmerised.',5,0) 
Spells[idx++]=new spellPT("Focusing Chant",27,5054,5,"",5,"6% ",'1500','3.0s','','','','') 
Lines[5102]=new linePT('Buff (Group, Ablative Armor)','Adds to your group\'s hit points temporarily (which are used to absorb damage, up to 25% of each individual hit) .',5,0) 
Spells[idx++]=new spellPT("Barrier of Sound",30,5102,5,"25 HP ",5,"",'1500','','','8s','6s (pulse)','') 
Spells[idx++]=new spellPT("Shield of Melody",40,5102,5,"40 HP ",5,"",'1500','','','8s','6s (pulse)','') 
Spells[idx++]=new spellPT("Wall of Song",50,5102,5,"70 HP ",5,"",'1500','','','8s','6s (pulse)','') 

Lines[123456] = new linePT('Stealth', 'Ability to hide', 119, 0)
Spells[idx++] = new spellPT("Distraction", 5, 123456, 119, "Distraction", 119, "", '', '', '', '', '', '')
Spells[idx++] = new spellPT("Dangersense", 8, 123456, 119, "Dangersense", 119, "", '', '', '', '', '', '')
Spells[idx++] = new spellPT("Safefall1", 10, 123456, 119, "Safefall1", 119, "", '', '', '', '', '', '')
Spells[idx++] = new spellPT("Detect hidden", 16, 123456, 119, "Detect Hidden", 119, "", '', '', '', '', '', '')
Spells[idx++] = new spellPT("Safefall2", 20, 123456, 119, "Safefall2", 119, "", '', '', '', '', '', '')
Spells[idx++] = new spellPT("Climb walls", 25, 123456, 119, "Climb walls", 119, "", '', '', '', '', '', '')
Spells[idx++] = new spellPT("Safefall3", 30, 123456, 119, "Safefall3", 119, "", '', '', '', '', '', '')
Spells[idx++] = new spellPT("Safefall4", 40, 123456, 119, "Safefall4", 119, "", '', '', '', '', '', '')
Spells[idx++] = new spellPT("Safefall5", 50, 123456, 119, "Safefall5", 119, "", '', '', '', '', '', '')