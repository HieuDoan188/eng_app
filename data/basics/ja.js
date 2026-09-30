// Japanese basics: kana, pronunciation rules and core grammar.
window.LT_BASICS = window.LT_BASICS || {};
window.LT_BASICS['ja'] = {
  intro: 'Tiếng Nhật dùng 3 bộ chữ cùng lúc: hiragana (chữ mềm), katakana (chữ cứng, cho từ ngoại lai) và kanji (chữ Hán). Bắt đầu với hiragana — chỉ cần 46 chữ là đọc được mọi câu viết bằng kana.',
  groups: [
  {
    "id": "hiragana",
    "title": "Hiragana",
    "native": "ひらがな",
    "desc": "46 chữ cái mềm, dùng cho từ thuần Nhật, trợ từ và đuôi động từ. Học đầu tiên.",
    "items": [
      {
        "ch": "あ",
        "rom": "a",
        "say": "あ",
        "set": "a"
      },
      {
        "ch": "い",
        "rom": "i",
        "say": "い",
        "set": "a"
      },
      {
        "ch": "う",
        "rom": "u",
        "say": "う",
        "set": "a"
      },
      {
        "ch": "え",
        "rom": "e",
        "say": "え",
        "set": "a"
      },
      {
        "ch": "お",
        "rom": "o",
        "say": "お",
        "set": "a"
      },
      {
        "ch": "か",
        "rom": "ka",
        "say": "か",
        "set": "k"
      },
      {
        "ch": "き",
        "rom": "ki",
        "say": "き",
        "set": "k"
      },
      {
        "ch": "く",
        "rom": "ku",
        "say": "く",
        "set": "k"
      },
      {
        "ch": "け",
        "rom": "ke",
        "say": "け",
        "set": "k"
      },
      {
        "ch": "こ",
        "rom": "ko",
        "say": "こ",
        "set": "k"
      },
      {
        "ch": "さ",
        "rom": "sa",
        "say": "さ",
        "set": "s"
      },
      {
        "ch": "し",
        "rom": "shi",
        "say": "し",
        "set": "s"
      },
      {
        "ch": "す",
        "rom": "su",
        "say": "す",
        "set": "s"
      },
      {
        "ch": "せ",
        "rom": "se",
        "say": "せ",
        "set": "s"
      },
      {
        "ch": "そ",
        "rom": "so",
        "say": "そ",
        "set": "s"
      },
      {
        "ch": "た",
        "rom": "ta",
        "say": "た",
        "set": "t"
      },
      {
        "ch": "ち",
        "rom": "chi",
        "say": "ち",
        "set": "t"
      },
      {
        "ch": "つ",
        "rom": "tsu",
        "say": "つ",
        "set": "t"
      },
      {
        "ch": "て",
        "rom": "te",
        "say": "て",
        "set": "t"
      },
      {
        "ch": "と",
        "rom": "to",
        "say": "と",
        "set": "t"
      },
      {
        "ch": "な",
        "rom": "na",
        "say": "な",
        "set": "n"
      },
      {
        "ch": "に",
        "rom": "ni",
        "say": "に",
        "set": "n"
      },
      {
        "ch": "ぬ",
        "rom": "nu",
        "say": "ぬ",
        "set": "n"
      },
      {
        "ch": "ね",
        "rom": "ne",
        "say": "ね",
        "set": "n"
      },
      {
        "ch": "の",
        "rom": "no",
        "say": "の",
        "set": "n"
      },
      {
        "ch": "は",
        "rom": "ha",
        "say": "は",
        "set": "h"
      },
      {
        "ch": "ひ",
        "rom": "hi",
        "say": "ひ",
        "set": "h"
      },
      {
        "ch": "ふ",
        "rom": "fu",
        "say": "ふ",
        "set": "h"
      },
      {
        "ch": "へ",
        "rom": "he",
        "say": "へ",
        "set": "h"
      },
      {
        "ch": "ほ",
        "rom": "ho",
        "say": "ほ",
        "set": "h"
      },
      {
        "ch": "ま",
        "rom": "ma",
        "say": "ま",
        "set": "m"
      },
      {
        "ch": "み",
        "rom": "mi",
        "say": "み",
        "set": "m"
      },
      {
        "ch": "む",
        "rom": "mu",
        "say": "む",
        "set": "m"
      },
      {
        "ch": "め",
        "rom": "me",
        "say": "め",
        "set": "m"
      },
      {
        "ch": "も",
        "rom": "mo",
        "say": "も",
        "set": "m"
      },
      {
        "ch": "や",
        "rom": "ya",
        "say": "や",
        "set": "y"
      },
      {
        "ch": "ゆ",
        "rom": "yu",
        "say": "ゆ",
        "set": "y"
      },
      {
        "ch": "よ",
        "rom": "yo",
        "say": "よ",
        "set": "y"
      },
      {
        "ch": "ら",
        "rom": "ra",
        "say": "ら",
        "set": "r"
      },
      {
        "ch": "り",
        "rom": "ri",
        "say": "り",
        "set": "r"
      },
      {
        "ch": "る",
        "rom": "ru",
        "say": "る",
        "set": "r"
      },
      {
        "ch": "れ",
        "rom": "re",
        "say": "れ",
        "set": "r"
      },
      {
        "ch": "ろ",
        "rom": "ro",
        "say": "ろ",
        "set": "r"
      },
      {
        "ch": "わ",
        "rom": "wa",
        "say": "わ",
        "set": "y"
      },
      {
        "ch": "を",
        "rom": "wo (o)",
        "say": "を",
        "set": "y"
      },
      {
        "ch": "ん",
        "rom": "n",
        "say": "ん",
        "set": "y"
      }
    ]
  },
  {
    "id": "dakuten",
    "title": "Hiragana biến âm",
    "native": "濁音・半濁音",
    "desc": "Thêm dấu ゛ (dakuten) → âm đục: か→が, さ→ざ, た→だ, は→ば. Thêm dấu ゜ (handakuten) → は→ぱ.",
    "items": [
      {
        "ch": "が",
        "rom": "ga",
        "say": "が",
        "set": "g"
      },
      {
        "ch": "ぎ",
        "rom": "gi",
        "say": "ぎ",
        "set": "g"
      },
      {
        "ch": "ぐ",
        "rom": "gu",
        "say": "ぐ",
        "set": "g"
      },
      {
        "ch": "げ",
        "rom": "ge",
        "say": "げ",
        "set": "g"
      },
      {
        "ch": "ご",
        "rom": "go",
        "say": "ご",
        "set": "g"
      },
      {
        "ch": "ざ",
        "rom": "za",
        "say": "ざ",
        "set": "z"
      },
      {
        "ch": "じ",
        "rom": "ji",
        "say": "じ",
        "set": "z"
      },
      {
        "ch": "ず",
        "rom": "zu",
        "say": "ず",
        "set": "z"
      },
      {
        "ch": "ぜ",
        "rom": "ze",
        "say": "ぜ",
        "set": "z"
      },
      {
        "ch": "ぞ",
        "rom": "zo",
        "say": "ぞ",
        "set": "z"
      },
      {
        "ch": "だ",
        "rom": "da",
        "say": "だ",
        "set": "d"
      },
      {
        "ch": "ぢ",
        "rom": "ji (di)",
        "say": "ぢ",
        "set": "d"
      },
      {
        "ch": "づ",
        "rom": "zu (du)",
        "say": "づ",
        "set": "d"
      },
      {
        "ch": "で",
        "rom": "de",
        "say": "で",
        "set": "d"
      },
      {
        "ch": "ど",
        "rom": "do",
        "say": "ど",
        "set": "d"
      },
      {
        "ch": "ば",
        "rom": "ba",
        "say": "ば",
        "set": "b"
      },
      {
        "ch": "び",
        "rom": "bi",
        "say": "び",
        "set": "b"
      },
      {
        "ch": "ぶ",
        "rom": "bu",
        "say": "ぶ",
        "set": "b"
      },
      {
        "ch": "べ",
        "rom": "be",
        "say": "べ",
        "set": "b"
      },
      {
        "ch": "ぼ",
        "rom": "bo",
        "say": "ぼ",
        "set": "b"
      },
      {
        "ch": "ぱ",
        "rom": "pa",
        "say": "ぱ",
        "set": "p"
      },
      {
        "ch": "ぴ",
        "rom": "pi",
        "say": "ぴ",
        "set": "p"
      },
      {
        "ch": "ぷ",
        "rom": "pu",
        "say": "ぷ",
        "set": "p"
      },
      {
        "ch": "ぺ",
        "rom": "pe",
        "say": "ぺ",
        "set": "p"
      },
      {
        "ch": "ぽ",
        "rom": "po",
        "say": "ぽ",
        "set": "p"
      }
    ]
  },
  {
    "id": "yoon",
    "title": "Âm ghép (yōon)",
    "native": "拗音",
    "desc": "Chữ cột い + ゃ/ゅ/ょ viết nhỏ → một âm tiết: き + ゃ = きゃ (kya).",
    "items": [
      {
        "ch": "きゃ",
        "rom": "kya",
        "say": "きゃ",
        "set": "ky"
      },
      {
        "ch": "きゅ",
        "rom": "kyu",
        "say": "きゅ",
        "set": "ky"
      },
      {
        "ch": "きょ",
        "rom": "kyo",
        "say": "きょ",
        "set": "ky"
      },
      {
        "ch": "しゃ",
        "rom": "sha",
        "say": "しゃ",
        "set": "sh"
      },
      {
        "ch": "しゅ",
        "rom": "shu",
        "say": "しゅ",
        "set": "sh"
      },
      {
        "ch": "しょ",
        "rom": "sho",
        "say": "しょ",
        "set": "sh"
      },
      {
        "ch": "ちゃ",
        "rom": "cha",
        "say": "ちゃ",
        "set": "ch"
      },
      {
        "ch": "ちゅ",
        "rom": "chu",
        "say": "ちゅ",
        "set": "ch"
      },
      {
        "ch": "ちょ",
        "rom": "cho",
        "say": "ちょ",
        "set": "ch"
      },
      {
        "ch": "にゃ",
        "rom": "nya",
        "say": "にゃ",
        "set": "ny"
      },
      {
        "ch": "にゅ",
        "rom": "nyu",
        "say": "にゅ",
        "set": "ny"
      },
      {
        "ch": "にょ",
        "rom": "nyo",
        "say": "にょ",
        "set": "ny"
      },
      {
        "ch": "ひゃ",
        "rom": "hya",
        "say": "ひゃ",
        "set": "hy"
      },
      {
        "ch": "ひゅ",
        "rom": "hyu",
        "say": "ひゅ",
        "set": "hy"
      },
      {
        "ch": "ひょ",
        "rom": "hyo",
        "say": "ひょ",
        "set": "hy"
      },
      {
        "ch": "みゃ",
        "rom": "mya",
        "say": "みゃ",
        "set": "my"
      },
      {
        "ch": "みゅ",
        "rom": "myu",
        "say": "みゅ",
        "set": "my"
      },
      {
        "ch": "みょ",
        "rom": "myo",
        "say": "みょ",
        "set": "my"
      },
      {
        "ch": "りゃ",
        "rom": "rya",
        "say": "りゃ",
        "set": "ry"
      },
      {
        "ch": "りゅ",
        "rom": "ryu",
        "say": "りゅ",
        "set": "ry"
      },
      {
        "ch": "りょ",
        "rom": "ryo",
        "say": "りょ",
        "set": "ry"
      },
      {
        "ch": "ぎゃ",
        "rom": "gya",
        "say": "ぎゃ",
        "set": "gy"
      },
      {
        "ch": "ぎゅ",
        "rom": "gyu",
        "say": "ぎゅ",
        "set": "gy"
      },
      {
        "ch": "ぎょ",
        "rom": "gyo",
        "say": "ぎょ",
        "set": "gy"
      },
      {
        "ch": "じゃ",
        "rom": "ja",
        "say": "じゃ",
        "set": "j"
      },
      {
        "ch": "じゅ",
        "rom": "ju",
        "say": "じゅ",
        "set": "j"
      },
      {
        "ch": "じょ",
        "rom": "jo",
        "say": "じょ",
        "set": "j"
      },
      {
        "ch": "びゃ",
        "rom": "bya",
        "say": "びゃ",
        "set": "by"
      },
      {
        "ch": "びゅ",
        "rom": "byu",
        "say": "びゅ",
        "set": "by"
      },
      {
        "ch": "びょ",
        "rom": "byo",
        "say": "びょ",
        "set": "by"
      }
    ]
  },
  {
    "id": "katakana",
    "title": "Katakana",
    "native": "カタカナ",
    "desc": "46 chữ cái cứng, dùng cho từ ngoại lai, tên nước ngoài và từ tượng thanh. Cùng âm với hiragana.",
    "items": [
      {
        "ch": "ア",
        "rom": "a",
        "say": "ア",
        "set": "a"
      },
      {
        "ch": "イ",
        "rom": "i",
        "say": "イ",
        "set": "a"
      },
      {
        "ch": "ウ",
        "rom": "u",
        "say": "ウ",
        "set": "a"
      },
      {
        "ch": "エ",
        "rom": "e",
        "say": "エ",
        "set": "a"
      },
      {
        "ch": "オ",
        "rom": "o",
        "say": "オ",
        "set": "a"
      },
      {
        "ch": "カ",
        "rom": "ka",
        "say": "カ",
        "set": "k"
      },
      {
        "ch": "キ",
        "rom": "ki",
        "say": "キ",
        "set": "k"
      },
      {
        "ch": "ク",
        "rom": "ku",
        "say": "ク",
        "set": "k"
      },
      {
        "ch": "ケ",
        "rom": "ke",
        "say": "ケ",
        "set": "k"
      },
      {
        "ch": "コ",
        "rom": "ko",
        "say": "コ",
        "set": "k"
      },
      {
        "ch": "サ",
        "rom": "sa",
        "say": "サ",
        "set": "s"
      },
      {
        "ch": "シ",
        "rom": "shi",
        "say": "シ",
        "set": "s"
      },
      {
        "ch": "ス",
        "rom": "su",
        "say": "ス",
        "set": "s"
      },
      {
        "ch": "セ",
        "rom": "se",
        "say": "セ",
        "set": "s"
      },
      {
        "ch": "ソ",
        "rom": "so",
        "say": "ソ",
        "set": "s"
      },
      {
        "ch": "タ",
        "rom": "ta",
        "say": "タ",
        "set": "t"
      },
      {
        "ch": "チ",
        "rom": "chi",
        "say": "チ",
        "set": "t"
      },
      {
        "ch": "ツ",
        "rom": "tsu",
        "say": "ツ",
        "set": "t"
      },
      {
        "ch": "テ",
        "rom": "te",
        "say": "テ",
        "set": "t"
      },
      {
        "ch": "ト",
        "rom": "to",
        "say": "ト",
        "set": "t"
      },
      {
        "ch": "ナ",
        "rom": "na",
        "say": "ナ",
        "set": "n"
      },
      {
        "ch": "ニ",
        "rom": "ni",
        "say": "ニ",
        "set": "n"
      },
      {
        "ch": "ヌ",
        "rom": "nu",
        "say": "ヌ",
        "set": "n"
      },
      {
        "ch": "ネ",
        "rom": "ne",
        "say": "ネ",
        "set": "n"
      },
      {
        "ch": "ノ",
        "rom": "no",
        "say": "ノ",
        "set": "n"
      },
      {
        "ch": "ハ",
        "rom": "ha",
        "say": "ハ",
        "set": "h"
      },
      {
        "ch": "ヒ",
        "rom": "hi",
        "say": "ヒ",
        "set": "h"
      },
      {
        "ch": "フ",
        "rom": "fu",
        "say": "フ",
        "set": "h"
      },
      {
        "ch": "ヘ",
        "rom": "he",
        "say": "ヘ",
        "set": "h"
      },
      {
        "ch": "ホ",
        "rom": "ho",
        "say": "ホ",
        "set": "h"
      },
      {
        "ch": "マ",
        "rom": "ma",
        "say": "マ",
        "set": "m"
      },
      {
        "ch": "ミ",
        "rom": "mi",
        "say": "ミ",
        "set": "m"
      },
      {
        "ch": "ム",
        "rom": "mu",
        "say": "ム",
        "set": "m"
      },
      {
        "ch": "メ",
        "rom": "me",
        "say": "メ",
        "set": "m"
      },
      {
        "ch": "モ",
        "rom": "mo",
        "say": "モ",
        "set": "m"
      },
      {
        "ch": "ヤ",
        "rom": "ya",
        "say": "ヤ",
        "set": "y"
      },
      {
        "ch": "ユ",
        "rom": "yu",
        "say": "ユ",
        "set": "y"
      },
      {
        "ch": "ヨ",
        "rom": "yo",
        "say": "ヨ",
        "set": "y"
      },
      {
        "ch": "ラ",
        "rom": "ra",
        "say": "ラ",
        "set": "r"
      },
      {
        "ch": "リ",
        "rom": "ri",
        "say": "リ",
        "set": "r"
      },
      {
        "ch": "ル",
        "rom": "ru",
        "say": "ル",
        "set": "r"
      },
      {
        "ch": "レ",
        "rom": "re",
        "say": "レ",
        "set": "r"
      },
      {
        "ch": "ロ",
        "rom": "ro",
        "say": "ロ",
        "set": "r"
      },
      {
        "ch": "ワ",
        "rom": "wa",
        "say": "ワ",
        "set": "y"
      },
      {
        "ch": "ヲ",
        "rom": "wo (o)",
        "say": "ヲ",
        "set": "y"
      },
      {
        "ch": "ン",
        "rom": "n",
        "say": "ン",
        "set": "y"
      }
    ]
  }
],
  lessons: [
    {
      id: 'p1', kind: 'pronunciation', title: 'Ba bộ chữ và nhịp mora',
      summary: 'Hiragana, katakana, kanji — và mỗi chữ kana là một "phách" bằng nhau.',
      body: [
        'Hiragana dùng cho từ thuần Nhật, trợ từ (は, を, に…) và đuôi động từ (たべます). Katakana dùng cho từ mượn: テレビ (TV), コーヒー (cà phê). Kanji là chữ Hán mang nghĩa: 日本 (Nhật Bản), 学生 (học sinh).',
        'Một câu bình thường trộn cả ba: 私はコーヒーを飲みます (Tôi uống cà phê).',
        'Tiếng Nhật đọc theo "mora": mỗi kana (kể cả ん và っ) chiếm một nhịp bằng nhau. にほん = ni-ho-n (3 nhịp).',
        'Nguyên âm u và i thường đọc rất nhẹ, gần như câm giữa các phụ âm vô thanh: です → "des", ～ます → "mas".',
      ],
      examples: [
        { t: 'わたしはがくせいです。', r: 'watashi wa gakusei desu', v: 'Tôi là học sinh (viết toàn hiragana).' },
        { t: '私は学生です。', r: 'watashi wa gakusei desu', v: 'Cùng câu, có kanji.' },
        { t: 'テレビ', r: 'terebi', v: 'ti vi (katakana)' },
        { t: 'コーヒー', r: 'koohii', v: 'cà phê (katakana)' },
        { t: 'にほん', r: 'nihon', v: 'Nhật Bản — 3 mora: ni-ho-n' },
      ],
      quiz: [
        { q: 'Từ mượn nước ngoài như "cà phê" thường viết bằng…', o: ['Katakana', 'Hiragana', 'Kanji', 'Romaji'], a: 0 },
        { q: '"です" thường được phát âm gần với…', o: ['"des"', '"đê-xu"', '"đét-su"', '"di"'], a: 0 },
      ],
    },
    {
      id: 'p2', kind: 'pronunciation', title: 'Trường âm (âm kéo dài)',
      summary: 'Nguyên âm dài chiếm 2 nhịp và làm đổi nghĩa từ.',
      body: [
        'Trong hiragana, âm dài được viết bằng cách thêm một nguyên âm: あ→ああ, い→いい, う→うう; え dài thường viết えい (せんせい), お dài thường viết おう (こうこう).',
        'Trong katakana dùng dấu gạch ー: ビール (bia), コーヒー.',
        'Đọc sai độ dài sẽ thành từ khác: おばさん (cô, dì) ≠ おばあさん (bà).',
      ],
      examples: [
        { t: 'おばさん', r: 'obasan', v: 'cô, dì' },
        { t: 'おばあさん', r: 'obaasan', v: 'bà' },
        { t: 'ビル', r: 'biru', v: 'tòa nhà' },
        { t: 'ビール', r: 'biiru', v: 'bia' },
        { t: 'せんせい', r: 'sensee', v: 'giáo viên (えい đọc dài "ê")' },
        { t: 'がっこう', r: 'gakkoo', v: 'trường học (おう đọc dài "ô")' },
      ],
      quiz: [
        { q: '"ビール" nghĩa là gì?', o: ['bia', 'tòa nhà', 'cái ví', 'mưa'], a: 0 },
        { q: 'Trong katakana, âm dài được viết bằng…', o: ['dấu ー', 'chữ っ nhỏ', 'dấu ゛', 'viết hai lần phụ âm'], a: 0 },
      ],
    },
    {
      id: 'p3', kind: 'pronunciation', title: 'Âm ngắt っ và âm mũi ん',
      summary: 'っ nhỏ = dừng một nhịp, gấp đôi phụ âm sau; ん = một nhịp mũi.',
      body: [
        'っ (tsu viết nhỏ) không đọc thành "tsu" mà là một khoảng ngắt ngắn trước phụ âm sau; romaji viết gấp đôi phụ âm: きって = kitte.',
        'Thiếu hay thừa っ sẽ đổi nghĩa: きて (đến đi) ≠ きって (tem).',
        'ん là một nhịp riêng, đọc như n/m/ng tùy âm phía sau: せんぱい [sempai], ぎんこう [gingkoo].',
      ],
      examples: [
        { t: 'きって', r: 'kitte', v: 'con tem' },
        { t: 'きて', r: 'kite', v: '(hãy) đến' },
        { t: 'ざっし', r: 'zasshi', v: 'tạp chí' },
        { t: 'ちょっと', r: 'chotto', v: 'một chút' },
        { t: 'こんにちは', r: 'konnichiwa', v: 'xin chào (ん là một nhịp)' },
      ],
      quiz: [
        { q: '"がっこう" viết romaji là…', o: ['gakkou', 'gatsukou', 'gakou', 'gako'], a: 0 },
        { q: 'っ nhỏ trong từ có tác dụng gì?', o: ['Tạo khoảng ngắt, gấp đôi phụ âm sau', 'Đọc là "tsu"', 'Kéo dài nguyên âm', 'Biến thành âm mũi'], a: 0 },
      ],
    },
    {
      id: 'p4', kind: 'pronunciation', title: 'Âm ghép ゃ ゅ ょ',
      summary: 'Chữ cột i + ゃ/ゅ/ょ nhỏ = một âm tiết.',
      body: [
        'Ghép chữ cột い (き, し, ち, に, ひ, み, り, ぎ, じ, び, ぴ) với ゃ ゅ ょ viết nhỏ để tạo âm kya, sha, cho…',
        'Chữ ゃ ゅ ょ nhỏ không chiếm thêm nhịp: きょ là một nhịp. Nếu viết to (きよ) sẽ thành hai nhịp ki-yo.',
        'Cẩn thận: びょういん (bệnh viện) ≠ びよういん (tiệm làm tóc).',
      ],
      examples: [
        { t: 'しゃしん', r: 'shashin', v: 'ảnh chụp' },
        { t: 'りょこう', r: 'ryokoo', v: 'du lịch' },
        { t: 'じゅぎょう', r: 'jugyoo', v: 'giờ học' },
        { t: 'びょういん', r: 'byooin', v: 'bệnh viện' },
        { t: 'びよういん', r: 'biyooin', v: 'tiệm làm tóc' },
      ],
      quiz: [
        { q: '"しゃ" đọc là…', o: ['sha', 'shiya', 'sa', 'shi-ya'], a: 0 },
        { q: '"bệnh viện" là từ nào?', o: ['びょういん', 'びよういん', 'ぴょういん', 'びょいん'], a: 0 },
      ],
    },
    {
      id: 'p5', kind: 'pronunciation', title: 'Trợ từ đọc khác chữ viết',
      summary: 'は → "wa", へ → "e", を → "o" khi làm trợ từ.',
      body: [
        'Khi là trợ từ, は đọc là wa, へ đọc là e, を đọc là o. Trong từ bình thường chúng vẫn đọc ha, he, (w)o.',
        'Vì vậy "こんにちは" và "こんばんは" kết thúc bằng âm "wa".',
      ],
      examples: [
        { t: 'わたしは', r: 'watashi wa', v: 'tôi thì… (は = wa)' },
        { t: 'にほんへいきます', r: 'nihon e ikimasu', v: 'đi đến Nhật (へ = e)' },
        { t: 'みずをのみます', r: 'mizu o nomimasu', v: 'uống nước (を = o)' },
        { t: 'はな', r: 'hana', v: 'hoa (は trong từ = ha)' },
      ],
      quiz: [
        { q: 'Trong "これはペンです", chữ は đọc là…', o: ['wa', 'ha', 'ba', 'a'], a: 0 },
        { q: 'Trợ từ を đọc là…', o: ['o', 'wo-o', 'wa', 'n'], a: 0 },
      ],
    },
    {
      id: 'g1', kind: 'grammar', title: 'N は N です — câu "là"',
      summary: 'A は B です = A là B. Phủ định: ではありません / じゃないです. Hỏi: thêm か.',
      body: [
        'は (đọc wa) đánh dấu chủ đề câu; です là đuôi lịch sự "là".',
        'Phủ định: ではありません (trang trọng) hoặc じゃないです (thân mật hơn).',
        'Câu hỏi: thêm か vào cuối, không cần đảo trật tự; lên giọng.',
        'Quá khứ: でした (đã là), ではありませんでした.',
      ],
      patterns: ['N1 は N2 です。', 'N1 は N2 ではありません。', 'N1 は N2 ですか。'],
      examples: [
        { t: 'わたしはベトナムじんです。', r: 'watashi wa betonamujin desu', v: 'Tôi là người Việt Nam.' },
        { t: 'わたしはがくせいではありません。', r: 'watashi wa gakusei de wa arimasen', v: 'Tôi không phải học sinh.' },
        { t: 'たなかさんはせんせいですか。', r: 'Tanaka-san wa sensee desu ka', v: 'Anh Tanaka là giáo viên phải không?' },
        { t: 'はい、そうです。', r: 'hai, soo desu', v: 'Vâng, đúng vậy.' },
      ],
      quiz: [
        { q: 'Thêm gì vào cuối câu để thành câu hỏi?', o: ['か', 'よ', 'ね', 'を'], a: 0 },
        { q: '"Tôi không phải bác sĩ" (いしゃ)?', o: ['わたしはいしゃではありません。', 'わたしはいしゃです。', 'わたしはいしゃがありません。', 'わたしをいしゃではありません。'], a: 0 },
      ],
    },
    {
      id: 'g2', kind: 'grammar', title: 'これ・それ・あれ và の',
      summary: 'Cái này / cái đó / cái kia; の nối hai danh từ ("của").',
      body: [
        'これ (cái này, gần người nói), それ (cái đó, gần người nghe), あれ (cái kia, xa cả hai). Đứng trước danh từ: この/その/あの + N.',
        'Tương tự cho nơi chốn: ここ/そこ/あそこ (chỗ này/đó/kia).',
        'N1 の N2: N2 của N1, hoặc N2 thuộc loại N1 — わたしのほん (sách của tôi), にほんごのほん (sách tiếng Nhật).',
      ],
      examples: [
        { t: 'これはなんですか。', r: 'kore wa nan desu ka', v: 'Cái này là gì?' },
        { t: 'それはわたしのかさです。', r: 'sore wa watashi no kasa desu', v: 'Đó là ô của tôi.' },
        { t: 'このほんはにほんごのほんです。', r: 'kono hon wa nihongo no hon desu', v: 'Quyển sách này là sách tiếng Nhật.' },
        { t: 'トイレはあそこです。', r: 'toire wa asoko desu', v: 'Nhà vệ sinh ở đằng kia.' },
      ],
      quiz: [
        { q: '"Sách của tôi" là…', o: ['わたしのほん', 'ほんのわたし', 'わたしはほん', 'わたしをほん'], a: 0 },
        { q: 'Trước danh từ, "cái này" dùng dạng nào?', o: ['この', 'これ', 'ここ', 'こちら'], a: 0 },
      ],
    },
    {
      id: 'g3', kind: 'grammar', title: 'Động từ thể ます',
      summary: '～ます (hiện tại/tương lai), ～ません (không), ～ました (đã), ～ませんでした (đã không).',
      body: [
        'Thể ます là dạng lịch sự dùng hằng ngày. Động từ đứng cuối câu.',
        'Hiện tại và tương lai dùng chung: たべます = ăn / sẽ ăn.',
        'Rủ rê: ～ましょう (cùng … nhé), ～ませんか (… không?).',
      ],
      tables: [{ title: 'Chia たべます (ăn)', head: ['', 'Khẳng định', 'Phủ định'], rows: [['Hiện tại', 'たべます', 'たべません'], ['Quá khứ', 'たべました', 'たべませんでした']] }],
      examples: [
        { t: 'まいにちコーヒーをのみます。', r: 'mainichi koohii o nomimasu', v: 'Mỗi ngày tôi uống cà phê.' },
        { t: 'あしたがっこうへいきません。', r: 'ashita gakkoo e ikimasen', v: 'Ngày mai tôi không đi học.' },
        { t: 'きのうえいがをみました。', r: 'kinoo eega o mimashita', v: 'Hôm qua tôi đã xem phim.' },
        { t: 'いっしょにたべましょう。', r: 'issho ni tabemashoo', v: 'Cùng ăn nhé.' },
      ],
      quiz: [
        { q: '"Đã không uống" (のみます) là…', o: ['のみませんでした', 'のみませんでしたか', 'のみました', 'のみません'], a: 0 },
        { q: '"Cùng đi nhé" là…', o: ['いきましょう', 'いきます', 'いきません', 'いきました'], a: 0 },
      ],
    },
    {
      id: 'g4', kind: 'grammar', title: 'Trợ từ を・に・で・へ',
      summary: 'を tân ngữ; に đích đến/thời điểm; で nơi hành động/phương tiện; へ hướng đi.',
      body: [
        'を (o): đánh dấu tân ngữ — パンをたべます (ăn bánh mì).',
        'に: nơi đến (がっこうにいきます), thời điểm cụ thể (7じにおきます), người nhận (ともだちにあげます).',
        'で: nơi diễn ra hành động (としょかんでべんきょうします), phương tiện (バスでいきます).',
        'へ (e): hướng di chuyển, gần nghĩa với に khi đi đâu.',
      ],
      examples: [
        { t: 'パンをたべます。', r: 'pan o tabemasu', v: 'Tôi ăn bánh mì.' },
        { t: '７じにおきます。', r: 'shichi-ji ni okimasu', v: 'Tôi dậy lúc 7 giờ.' },
        { t: 'としょかんでべんきょうします。', r: 'toshokan de benkyoo shimasu', v: 'Tôi học ở thư viện.' },
        { t: 'でんしゃでかいしゃへいきます。', r: 'densha de kaisha e ikimasu', v: 'Tôi đi đến công ty bằng tàu điện.' },
      ],
      quiz: [
        { q: 'バス__いきます。(đi bằng xe buýt)', o: ['で', 'を', 'に', 'は'], a: 0 },
        { q: 'レストラン__ばんごはんをたべます。(ăn tối ở nhà hàng)', o: ['で', 'に', 'へ', 'を'], a: 0 },
      ],
    },
    {
      id: 'g5', kind: 'grammar', title: 'あります・います (có, ở)',
      summary: 'あります cho đồ vật/cây cối; います cho người/động vật.',
      body: [
        'Nơi に N が あります/います: Ở (nơi) có N.',
        'N は nơi に あります/います: N ở (nơi).',
        'Phủ định: ありません / いません.',
      ],
      examples: [
        { t: 'つくえのうえにほんがあります。', r: 'tsukue no ue ni hon ga arimasu', v: 'Trên bàn có quyển sách.' },
        { t: 'にわにねこがいます。', r: 'niwa ni neko ga imasu', v: 'Trong vườn có con mèo.' },
        { t: 'ははははうちにいます。', r: 'haha wa uchi ni imasu', v: 'Mẹ tôi ở nhà.' },
        { t: 'じかんがありません。', r: 'jikan ga arimasen', v: 'Tôi không có thời gian.' },
      ],
      quiz: [
        { q: 'こどもが___。(có đứa trẻ)', o: ['います', 'あります', 'です', 'ます'], a: 0 },
        { q: 'くるまが___。(có xe hơi)', o: ['あります', 'います', 'いきます', 'です'], a: 0 },
      ],
    },
    {
      id: 'g6', kind: 'grammar', title: 'Tính từ い và な',
      summary: 'Hai loại tính từ, chia phủ định/quá khứ khác nhau.',
      body: [
        'Tính từ い kết thúc bằng い: たかい (đắt), おいしい (ngon). Phủ định: bỏ い + くないです. Quá khứ: bỏ い + かったです.',
        'Tính từ な: きれい (đẹp), しずか (yên tĩnh), すき (thích). Phủ định: じゃないです / ではありません. Quá khứ: でした. Trước danh từ thêm な: しずかなまち.',
        'Ngoại lệ: いい (tốt) → よくないです, よかったです.',
      ],
      tables: [{ title: 'So sánh', head: ['', 'たかい (い)', 'しずか (な)'], rows: [['Hiện tại', 'たかいです', 'しずかです'], ['Phủ định', 'たかくないです', 'しずかじゃないです'], ['Quá khứ', 'たかかったです', 'しずかでした'], ['+ danh từ', 'たかいくるま', 'しずかなまち']] }],
      examples: [
        { t: 'このラーメンはおいしいです。', r: 'kono raamen wa oishii desu', v: 'Mì ramen này ngon.' },
        { t: 'きょうはさむくないです。', r: 'kyoo wa samukunai desu', v: 'Hôm nay không lạnh.' },
        { t: 'このまちはしずかです。', r: 'kono machi wa shizuka desu', v: 'Thành phố này yên tĩnh.' },
        { t: 'りょこうはたのしかったです。', r: 'ryokoo wa tanoshikatta desu', v: 'Chuyến du lịch đã rất vui.' },
      ],
      quiz: [
        { q: 'おおきい → phủ định?', o: ['おおきくないです', 'おおきいじゃないです', 'おおきくありますん', 'おおきかったです'], a: 0 },
        { q: '"Người tử tế" (しんせつ, tính từ な) + ひと?', o: ['しんせつなひと', 'しんせついひと', 'しんせつのひと', 'しんせつひと'], a: 0 },
      ],
    },
    {
      id: 'g7', kind: 'grammar', title: 'Muốn: ～たいです và N がほしいです',
      summary: 'Bỏ ます + たいです = muốn làm; N がほしいです = muốn có N.',
      body: [
        'Động từ thể ます bỏ ます + たいです: たべます → たべたいです (muốn ăn).',
        'Phủ định: たくないです (không muốn).',
        'Muốn có đồ vật: N が ほしいです.',
      ],
      examples: [
        { t: 'すしがたべたいです。', r: 'sushi ga tabetai desu', v: 'Tôi muốn ăn sushi.' },
        { t: 'にほんへいきたいです。', r: 'nihon e ikitai desu', v: 'Tôi muốn đi Nhật.' },
        { t: 'きょうははたらきたくないです。', r: 'kyoo wa hatarakitakunai desu', v: 'Hôm nay tôi không muốn làm việc.' },
        { t: 'あたらしいパソコンがほしいです。', r: 'atarashii pasokon ga hoshii desu', v: 'Tôi muốn có máy tính mới.' },
      ],
      quiz: [
        { q: 'のみます → muốn uống?', o: ['のみたいです', 'のむたいです', 'のみほしいです', 'のみましたい'], a: 0 },
        { q: '"Tôi muốn có xe hơi" là…', o: ['くるまがほしいです。', 'くるまをたいです。', 'くるまがたべたいです。', 'くるまにほしいです。'], a: 0 },
      ],
    },
    {
      id: 'g8', kind: 'grammar', title: 'Thể て + ください (xin hãy…)',
      summary: 'Động từ thể て + ください = lời nhờ lịch sự.',
      body: [
        'Thể て là dạng nối quan trọng nhất. Cách tạo từ thể ます:',
        '• Nhóm 2 (たべます, みます…) và ～します: bỏ ます + て → たべて, みて, して.',
        '• Nhóm 1: い・ち・り + ます → って (かいます→かって, まちます→まって); み・び・に → んで (のみます→のんで); き → いて (かきます→かいて), ぎ → いで; し → して (はなします→はなして).',
        '• Ngoại lệ: いきます → いって; きます → きて.',
      ],
      examples: [
        { t: 'ちょっとまってください。', r: 'chotto matte kudasai', v: 'Xin đợi một chút.' },
        { t: 'ここになまえをかいてください。', r: 'koko ni namae o kaite kudasai', v: 'Xin viết tên vào đây.' },
        { t: 'ゆっくりはなしてください。', r: 'yukkuri hanashite kudasai', v: 'Xin nói chậm.' },
        { t: 'これをみてください。', r: 'kore o mite kudasai', v: 'Xin hãy xem cái này.' },
      ],
      quiz: [
        { q: 'のみます → thể て?', o: ['のんで', 'のみて', 'のって', 'のいて'], a: 0 },
        { q: 'いきます → thể て?', o: ['いって', 'いきて', 'いいて', 'いんで'], a: 0 },
      ],
    },
    {
      id: 'g9', kind: 'grammar', title: 'が, も và すき・じょうず',
      summary: 'も = cũng; が đi với すき (thích), じょうず (giỏi), わかります (hiểu).',
      body: [
        'も thay cho は/が để nói "cũng": わたしもがくせいです (tôi cũng là học sinh).',
        'Một số từ chỉ cảm xúc/khả năng dùng が cho đối tượng: N がすきです (thích N), N がじょうずです (giỏi N), N がわかります (hiểu N).',
        'だれ/なに làm chủ ngữ trong câu hỏi luôn đi với が: だれがきましたか.',
      ],
      examples: [
        { t: 'わたしもベトナムじんです。', r: 'watashi mo betonamujin desu', v: 'Tôi cũng là người Việt.' },
        { t: 'ねこがすきです。', r: 'neko ga suki desu', v: 'Tôi thích mèo.' },
        { t: 'かれはりょうりがじょうずです。', r: 'kare wa ryoori ga joozu desu', v: 'Anh ấy nấu ăn giỏi.' },
        { t: 'にほんごがすこしわかります。', r: 'nihongo ga sukoshi wakarimasu', v: 'Tôi hiểu một chút tiếng Nhật.' },
      ],
      quiz: [
        { q: 'おんがく__すきです。', o: ['が', 'を', 'で', 'へ'], a: 0 },
        { q: '"Tôi cũng đi" là…', o: ['わたしもいきます。', 'わたしはもいきます。', 'わたしがいきます。', 'わたしもをいきます。'], a: 0 },
      ],
    },
    {
      id: 'g10', kind: 'grammar', title: 'Số đếm và giờ',
      summary: 'いち、に、さん… và cách nói giờ ～じ～ふん.',
      body: [
        'Số: いち(1) に(2) さん(3) よん/し(4) ご(5) ろく(6) なな/しち(7) はち(8) きゅう/く(9) じゅう(10). 11 = じゅういち, 20 = にじゅう, 100 = ひゃく, 1000 = せん, 10.000 = いちまん.',
        'Giờ: số + じ. Chú ý: 4じ = よじ, 7じ = しちじ, 9じ = くじ.',
        'Phút: ～ふん/～ぷん (1 いっぷん, 3 さんぷん, 5 ごふん, 10 じゅっぷん). Rưỡi: はん.',
        'Hỏi giờ: いまなんじですか。 Hỏi giá: いくらですか。',
      ],
      examples: [
        { t: 'いまなんじですか。', r: 'ima nanji desu ka', v: 'Bây giờ là mấy giờ?' },
        { t: 'よじはんです。', r: 'yoji han desu', v: '4 giờ rưỡi.' },
        { t: 'くじにあいましょう。', r: 'kuji ni aimashoo', v: 'Gặp nhau lúc 9 giờ nhé.' },
        { t: 'せんえんです。', r: 'sen en desu', v: '1000 yên.' },
      ],
      quiz: [
        { q: '"4 giờ" đọc là…', o: ['よじ', 'しじ', 'よんじ', 'よっじ'], a: 0 },
        { q: '"9 giờ" đọc là…', o: ['くじ', 'きゅうじ', 'くうじ', 'ここのじ'], a: 0 },
      ],
    },
  ],
};
