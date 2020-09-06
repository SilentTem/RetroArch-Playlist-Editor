
var KNOWN_SYSTEMS=[
	['-','DETECT'],
	['Amstrad - CPC','cap32','crocods'],
	['Arcade','mame','mame2000','mame2003','mame2010','mame2014','mame2016','fbalpha','fbalpha2012','fbalpha2012_cps1','fbalpha2012_cps2','fbalpha2012_neogeo'],
	['Atari - 2600','stella'],
	['Atari - 5200','atari800'],
	['Atari - 7800','prosystem'],
	['Atari - Jaguar','virtualjaguar'],
	['Atari - Lynx','mednafen_lynx','handy'],
	['Atari - ST/STE/TT/Falcon','hatari'],
	['Bandai - WonderSwan/Color','mednafen_wswan'],
	['Commodore - Amiga','puae'],
	['Commodore - C64','vice_x64'],
	['Commodore - C128','vice_x128'],
	['Commodore - PLUS4','vice_xplus4'],
	['Commodore - VIC20','vice_xvic'],
	['DOS','dosbox'],
	['Microsoft - MSX/2/2+','fmsx'],
	['MSX/SVI/ColecoVision/SG-1000','bluemsx'],
	['NEC - PC Engine/CD','mednafen_pce_fast'],
	['NEC - PC Engine SuperGrafx','mednafen_sgx'],
	['NEC - PC-98','np2kai','nekop2'],
	['NEC - PC-FX','mednafen_pcfx'],
	['Nintendo - NES/Famicom','bnes','emux_nes','fceumm','mesen','nestopia','quicknes'],
	['Nintendo - SNES/Famicom','snes9x','snes9x2002','snes9x2005','snes9x2005_plus','snes9x2010'],
	['Nintendo - Virtual Boy','mednafen_vb'],
	['Nintendo - Nintendo 64','mupen64plus', 'mupen64plus_next', 'parallel_n64'],
	['Nintendo - GameCube/Wii','dolphin'],
	['Nintendo - Game Boy/Color','emux_gb','gambatte','gearboy','sameboy','tgbdual'],
	['Nintendo - Game Boy Advance','mednafen_gba','gpsp','meteor','mgba','vba_next','vbam'],
	['Nintendo - DS','desmume','desmume2015','melonds'],
	['Nintendo - 3DS','citra','citra_canary'],
	['Nintendo - Pokémon Mini','pokemini'],
	['Sega - Sega MS/GG/MD/CD','genesis_plus_gx'],
	['Sega - Sega MS/GG/MD/CD/32x','picodrive'],
	['Sega - Master System/Mark III','emux_sms'],
	['Sega - Saturn','mednafen_saturn','yabause'],
	['Sega - Dreamcast','flycast','reicast','redream'],
	['Sharp - X68000','px68k'],
	['SNK - Neo Geo Pocket/Color','mednafen_ngp'],
	['Sony - PlayStation','mednafen_psx','mednafen_psx_hw','pcsx_rearmed'],
	['Sony - PlayStation 2','play'],
	['Sony - PlayStation Portable','ppsspp'],
	['The 3DO Company - 3DO','4do'],
	['Sinclair - ZX Spectrum','fuse']
];


	
var KNOWN_CORES={
	'4do':'4DO',
	'81':'EightyOne',
	'atari800':'Atari800',
	'beetle_wswan':'Beetle Cygne',
	'bluemsx':'blueMSX',
	'bnes':'bnes',
	'cap32':'Caprice32',
	'citra':'Citra',
	'crocods':'CrocoDS',
	'desmume':'DeSmuME',
	'desmume2015':'DeSmuME 2015',
	'dolphin':'Dolphin',
	'dosbox':'DOSBox',
	'emux_gb':'Emux GB',
	'emux_nes':'Emux NES',
	'emux_sms':'Emux SMS',
	'fbalpha':'FB Alpha 2012',
	'fbalpha2012':'FB Alpha 2012',
	'fbalpha2012_cps1':'FB Alpha 2012 CPS-1',
	'fbalpha2012_cps2':'FB Alpha 2012 CPS-2',
	'fbalpha2012_neogeo':'FB Alpha 2012 Neo Geo',
	'fceumm':'FCEUmm',
	'flycast':'Flycast',
	'fmsx':'fMSX',
	'fuse':'Fuse',
	'gambatte':'Gambatte',
	'gearboy':'Gearboy',
	'genesis_plus_gx':'Genesis Plus GX',
	'gpsp':'gpSP',
	'handy':'Handy',
	'hatari':'Hatari',
	'mame':'MAME',
	'mame2000':'MAME 2000',
	'mame2003':'MAME 2003 (0.78)',
	'mame2010':'MAME 2010 (0.139)',
	'mame2014':'MAME 2014',
	'mame2016':'MAME 2016',
	'mednafen_gba':'Beetle GBA',
	'mednafen_lynx':'Beetle Handy',
	'mednafen_ngp':'Beetle NeoPop',
	'mednafen_pce_fast':'Beetle PCE Fast',
	'mednafen_pcfx':'Beetle PC-FX',
	'mednafen_psx':'Beetle PSX',
	'mednafen_psx_hw':'Beetle PSX HW',
	'mednafen_saturn':'Beetle Saturn',
	'mednafen_sgx':'Beetle SGX',
	'mednafen_vb':'Beetle VB',
	'mednafen_wswan':'Beetle Cygne',
	'melonds':'melonDS',
	'mesen':'Mesen',
	'meteor':'meteor',
	'mgba':'mGBA',
	'mupen64plus':'Mupen64Plus',
	'mupen64plus_next':'Mupen64Plus-Next',
	'nekop2':'Neko Project II',
	'nestopia':'Nestopia UE',
	'np2kai':'Neko Project II Kai',
	'parallel_n64':'ParaLLEl N64',
	'pcsx_rearmed':'PCSX ReARMed',
	'picodrive':'Picodrive',
	'pokemini':'PokeMini',
	'ppsspp':'PPSSPP',
	'prosystem':'ProSystem',
	'puae':'P-UAE',
	'px68k':'PX68k',
	'play':'Play!',
	'quicknes':'QuickNES',
	'redream':'Redream',
	'reicast':'Reicast',
	'sameboy':'SameBoy',
	'snes9x':'Snes9x',
	'snes9x2002':'Snes9x 2002',
	'snes9x2005':'Snes9x 2005',
	'snes9x2005_plus':'Snes9x 2005 Plus',
	'snes9x2010':'Snes9x 2010',
	'stella':'Stella',
	'tgbdual':'TGB Dual',
	'vba_next':'VBA Next',
	'vbam':'VBA-M',
	'vice_x128':'VICE C128',
	'vice_x64':'VICE C64',
	'vice_xplus4':'VICE PLUS4',
	'vice_xvic':'VICE VIC20',
	'virtualjaguar':'Virtual Jaguar',
	'yabause':'Yabause'
};
