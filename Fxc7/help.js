// menu fitur bot
const help = (prefix, instagram, yt, name, pushname2, user, limitt, uptime, jam, tanggal) => { 
	return `
	
\`\`\`Follow My Instagram\`\`\`
_https://instagram.com.yuu_fck18_

\`\`\`Hai ngab\`\`\` ${pushname2} 👋🏻

\`\`\`Limit:\`\`\` _${limitt} limit anda_
\`\`\`RunTime:\`\`\` _${kyun(uptime)}_
\`\`\`Time:\`\`\` _${jam} WIB_
\`\`\`Date:\`\`\` _${tanggal}_
\`\`\`Register:\`\`\` ${user.length} User


╭──────「 *ABOUT* 」
┴
│➻ ${prefix}report lapor bug
│➻ ${prefix}info
│➻ ${prefix}donasi
│➻ ${prefix}owner
│➻ ${prefix}speed
│➻ ${prefix}daftar
│➻ ${prefix}limit
│➻ ${prefix}totaluser
│➻ ${prefix}blocklist
│➻ ${prefix}banlist
│➻ ${prefix}premiumlist
│➻ ${prefix}bahasa
┬
╰──────「 *ABOUT* 」


͏͏͏͏͏͏͏͏͏͏͏͏͏͏╭──────「 *MEDIA* 」
┴
│➻ ${prefix}tiktokstalk _username_
│➻ ${prefix}igstalk _yuu_fck18_
│➻ ${prefix}instavid _link_
│➻ ${prefix}instaimg _link_ 
│➻ ${prefix}instastory _username_
│➻ ${prefix}ssweb _url_
│➻ ${prefix}url2img _Url_
│➻ ${prefix}tiktok
│➻ ${prefix}fototiktok
│➻ ${prefix}kbbi
│➻ ${prefix}wait
│➻ ${prefix}trendtwit
│➻ ${prefix}google berita terkini
┬
╰──────「 *MEDIA* 」


╭──────「 *CREATOR MENU* 」
┴
│➻ ${prefix}quotemaker _text/wtrmk/tema_
│➻ ${prefix}nulis _nama/kelas/text_
│➻ ${prefix}croman _YXU dan Friend_
│➻ ${prefix}slide _YXU BOT WA_
├───────────────────
│➻ ${prefix}tp _1 - 162_
│➻ ${prefix}ep _1 - 216_
│➻ ${prefix}tahta _text_
│➻ ${prefix}cglass _text_
│➻ ${prefix}cstyle _text_
│➻ ${prefix}cgame _text_
│➻ ${prefix}clove _text_
│➻ ${prefix}cparty _text_
│➻ ${prefix}csky _text_
│➻ ${prefix}tts _<lang><text>
│➻ ${prefix}ttp _text_
│➻ ${prefix}cpaper _text_
├───────────────────
│➻ ${prefix}stiker
│➻ ${prefix}gifstiker
│➻ ${prefix}toimg
│➻ ${prefix}img2url _url_
│➻ ${prefix}tomp3
│➻ ${prefix}ocr
┬
╰──────「 *CREATOR MENU* 」


╭──────「 *NSFW ONLY* 」
┴
│➻ ${prefix}modeanime _On/Off_
│➻ ${prefix}neonime naruto
│➻ ${prefix}naruto
│➻ ${prefix}minato
│➻ ${prefix}boruto
│➻ ${prefix}hinata
│➻ ${prefix}sakura
│➻ ${prefix}sasuke
│➻ ${prefix}toukachan
│➻ ${prefix}rize
│➻ ${prefix}akira
│➻ ${prefix}itori
│➻ ${prefix}kurumi
│➻ ${prefix}miku
│➻ ${prefix}anime
│➻ ${prefix}animecry
│➻ ${prefix}animekiss
┬
╰──────「 *NSFW ONLY* 」


╭──────「 *GROUP ONLY* 」
┴
│➻ ${prefix}antilink _On/Off_
│➻ ${prefix}welcome _On/Off_
│➻ ${prefix}grup _buka/tutup_
│➻ ${prefix}ownergrup
│➻ ${prefix}setpp
│➻ ${prefix}infogc
│➻ ${prefix}add _628xxxxxxxxxx_
│➻ ${prefix}kick _@mentioned_
│➻ ${prefix}kicktime _@mentioned_
│➻ ${prefix}promote _@mentioned_
│➻ ${prefix}demote _@mentioned_
│➻ ${prefix}setname
│➻ ${prefix}setdesc
│➻ ${prefix}linkgrup
│➻ ${prefix}tagme
│➻ ${prefix}hidetag
│➻ ${prefix}tagall
│➻ ${prefix}mentionall
│➻ ${prefix}fitnah _@mentioned/isi/balasan_
│➻ ${prefix}listadmin
┬
╰──────「 *GROUP ONLY* 」


╭──────「 *NSFW MENU* 」
┴
│➻ ${prefix}nsfw _On/Off_
│➻ ${prefix}nsfwloli
│➻ ${prefix}nsfwblowjob
│➻ ${prefix}nsfwneko
│➻ ${prefix}nsfwtrap
│➻ ${prefix}hentai
│➻ ${prefix}simih _On/Off_
│➻ ${prefix}bott _on/off_
┬
╰──────「 *NSFW MENU* 」


╭──────「 *OTHERS FUN* 」
┴
│➻ ${prefix}anjing
│➻ ${prefix}kucing
│➻ ${prefix}testime
│➻ ${prefix}hilih
│➻ ${prefix}apakah
│➻ ${prefix}kapankah
│➻ ${prefix}bisakah
│➻ ${prefix}rate
│➻ ${prefix}watak
│➻ ${prefix}hobby
│➻ ${prefix}infogempa
│➻ ${prefix}infonomor
│➻ ${prefix}quotes
│➻ ${prefix}truth
│➻ ${prefix}dare
│➻ ${prefix}katabijak
│➻ ${prefix}fakta
│➻ ${prefix}darkjokes hp
│➻ ${prefix}bucin
│➻ ${prefix}pantun
│➻ ${prefix}katacinta
│➻ ${prefix}jadwaltvnow
│➻ ${prefix}hekerbucin
│➻ ${prefix}katailham
┬
╰──────「 *OTHERS FUN* 」


╭──────「 *OTHERS SANS* 」
┴
│➻ ${prefix}jarak _Palembang_
│➻ ${prefix}translate _lang/text_
│➻ ${prefix}pasangan
│➻ ${prefix}gantengcek _triggere_
│➻ ${prefix}cantikcek _tag_
│➻ ${prefix}artinama _tag_
│➻ ${prefix}persengay _tag_
│➻ ${prefix}pbucin _tag_
│➻ ${prefix}bpfont _YXU_
│➻ ${prefix}textstyle _YXU_
│➻ ${prefix}jadwaltv _antv_
│➻ ${prefix}lirik _judul_
│➻ ${prefix}chord _Judul_
│➻ ${prefix}wiki _Adolf Hitler_
│➻ ${prefix}brainly _pertanyaan_
│➻ ${prefix}resepmasakan
│➻ ${prefix}map _Palembang_
│➻ ${prefix}film _judul film_
│➻ ${prefix}pinterest _judu gambar_
│➻ ${prefix}infocuaca _Palembang_
│➻ ${prefix}jamdunia _Palembang_
│➻ ${prefix}mimpi _Lu mati_
│➻ ${prefix}infoalamat
│➻ ${prefix}playstore _WhatsApp_
┬
╰──────「 *OTHERS SANS* 」


╭──────「 *GAME* 」
┴
│➻ ${prefix}readmore
│➻ ${prefix}puisiimg
│➻ ${prefix}asupan
│➻ ${prefix}tebakgambar
│➻ ${prefix}caklontong
│➻ ${prefix}family100
│➻ ${prefix}memeindo
│➻ ${prefix}kalkulator _EROR_
│➻ ${prefix}moddroid _NamaApk_
│➻ ${prefix}happymod _NamaApk_
┬
╰──────「 *GAME* 」


╭─────「 *COLAY MENU* 」
┴
│➻ ${prefix}randomkpop
│➻ ${prefix}cersex
│➻ ${prefix}randombokep
│➻ ${prefix}pornhub stepMoms
│➻ ${prefix}xvideos japan
│➻ ${prefix}nekopoi oni chichi
┬
╰─────「 *COLAY MENU* 」


╭──────「 *MENU TOBAT* 」
┴
│➻ ${prefix}jadwalsholat _palembang_
│➻ ${prefix}quran
│➻ ${prefix}quranlist
│➻ ${prefix}quransurah _angka_
┬
╰──────「 *MENU TOBAT* 」


╭──────「 *FIND ME SIR* 」
┴
│➻ ${prefix}becrypt string
│➻ ${prefix}encode64 string
│➻ ${prefix}decode64 encrypt
│➻ ${prefix}encode32 string
│➻ ${prefix}decode32 encrypt
│➻ ${prefix}encbinary string
│➻ ${prefix}decbinary encrypt
│➻ ${prefix}encoctal string
│➻ ${prefix}decoctal encrypt
│➻ ${prefix}hashidentifier Encrypt Hash
│➻ ${prefix}dorking dork
│➻ ${prefix}pastebin teks
│➻ ${prefix}tinyurl link
│➻ ${prefix}bitly link
┬
╰──────「 *FIND ME SIR* 」


╭──────「 *SPAM MENU* 」
┴
│➻ ${prefix}spamcall _083xxxxxxxxx_
│➻ ${prefix}spamgmail _contoh@gmail.com_
┬
╰──────「 *SPAM MENU* 」


╭──────「 *OWNER ONLY* 」
┴
│➻ ${prefix}addprem _mentioned_
│➻ ${prefix}removeprem _mention_
│➻ ${prefix}setmemlimit
│➻ ${prefix}setlimit
│➻ ${prefix}setreply
│➻ ${prefix}setprefix
│➻ ${prefix}setnamebot
│➻ ${prefix}setppbot
│➻ ${prefix}bc
│➻ ${prefix}bcgc
│➻ ${prefix}ban
│➻ ${prefix}unban
│➻ ${prefix}block
│➻ ${prefix}unblock
│➻ ${prefix}clearall
│➻ ${prefix}delete
│➻ ${prefix}clone
│➻ ${prefix}getses
│➻ ${prefix}leave
┬
╰──────「 *OWNER ONLY* 」


╭──────「 *PREMIUM ONLY* 」
┴
│➻ ${prefix}playmp3 _judul lagu_
│➻ ${prefix}fb _link video_
│➻ ${prefix}snack _link snack video_
│➻ ${prefix}ytmp3 _link yt_
│➻ ${prefix}ytmp4 _link yt_
│➻ ${prefix}joox _judul lagu_
│➻ ${prefix}smule _Link Video Smule_
┬
╰──────「 *PREMIUM ONLY* 」
`
}

exports.help = help

// penghitung aktif bot
function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (6060));
  var minutes = Math.floor(seconds % (6060) / 60);
  var seconds = Math.floor(seconds % 60);
  return `${pad(hours)} Jam ${pad(minutes)} Menit ${pad(seconds)} Detik`
}

// info bot 
const bottt = (prefix) => {
return `
\`\`\`Untuk Sekarang Bot Hanya Bisa Digunakan Di Group Karna\`\`\` KUOTA MAHAL\n\n Mohon Pengertiannya
Sekali Lagi Maaf

Jika Bot Ini Ada Di Grup Anda Admin Grup Suruh Aktifkan Bot Dengan Cara ${prefix}bott aktif
`
}
exports.bottt = bottt
// donasi menu
const donasi = (name) => { 
	return `       
╭─────「 *DONASI* 」
┴
│*PULSA: _081373323199_*
│
│\`\`\`Pulsa\`\`\`
│ *Seiklasnya aja ngab:D*
┬
╰──────「 *BY YXU* 」

Untuk Kelangsungan Hidup Bot Karna Kuota Mahal:'
`
}
exports.donasi = donasi

// bahasa list
const bahasa = (prefix) => {
return `
List Bahasa Untuk Command ${prefix}tts

  af: Afrikaans
  sq: Albanian
  ar: Arabic
  hy: Armenian
  ca: Catalan
  zh: Chinese
  zh-cn: Chinese (Mandarin/China)
  zh-tw: Chinese (Mandarin/Taiwan)
  zh-yue: Chinese (Cantonese)
  hr: Croatian
  cs: Czech
  da: Danish
  nl: Dutch
  en: English
  en-au: English (Australia)
  en-uk: English (United Kingdom)
  en-us: English (United States)
  eo: Esperanto
  fi: Finnish
  fr: French
  de: German
  el: Greek
  ht: Haitian Creole
  hi: Hindi
  hu: Hungarian
  is: Icelandic
  id: Indonesian
  it: Italian
  ja: Japanese
  ko: Korean
  la: Latin
  lv: Latvian
  mk: Macedonian
  no: Norwegian
  pl: Polish
  pt: Portuguese
  pt-br: Portuguese (Brazil)
  ro: Romanian
  ru: Russian
  sr: Serbian
  sk: Slovak
  es: Spanish
  es-es: Spanish (Spain)
  es-us: Spanish (United States)
  sw: Swahili
  sv: Swedish
  ta: Tamil
  th: Thai
  tr: Turkish
  vi: Vietnamese
  cy: Welsh
`
}
exports.bahasa = bahasa

// Limit
const limitend = (pushname2) => {
        return`maaf *${pushname2* limit hari ini habis\nlimit di reset setiap jam 12:00 WIB TENGAH MALAM`
}

const limitcount = (limitCounts) => {
        return`
Limit Kamu: *${limitCounts}*
`
}

exports.limitend = limitend
exports.limitcount = limitcount