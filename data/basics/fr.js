// French basics: letters and sounds, pronunciation rules and core grammar.
window.LT_BASICS = window.LT_BASICS || {};
window.LT_BASICS['fr'] = {
  intro: 'Tiếng Pháp dùng chữ Latin như tiếng Việt, thêm vài dấu (é, è, ê, à, ç…). Chữ viết nhiều hơn âm đọc: phụ âm cuối thường câm và nhiều tổ hợp chữ chỉ đọc thành một âm. Nắm các tổ hợp này, nguyên âm mũi và quy tắc nối âm là đọc được phần lớn các từ.',
  groups: [
    {
      id: 'vowels', title: 'Nguyên âm và dấu', native: 'Voyelles et accents',
      desc: 'Nguyên âm đơn và các chữ có dấu. Bấm để nghe từ ví dụ.',
      items: [
        { ch: 'a / à', rom: 'a', say: 'ami', note: 'ami — bạn; à — ở, đến', set: 'a' },
        { ch: 'e', rom: 'ơ (nhẹ) hoặc câm', say: 'le', note: 'le, petit; cuối từ thường câm: une', set: 'e' },
        { ch: 'é', rom: 'ê (khép)', say: 'café', note: 'café, été', set: 'e' },
        { ch: 'è / ê', rom: 'e (mở)', say: 'mère', note: 'mère — mẹ; fête — lễ hội', set: 'e' },
        { ch: 'i / y', rom: 'i', say: 'ici', note: 'ici — ở đây; stylo', set: 'i' },
        { ch: 'o / ô', rom: 'ô', say: 'rose', note: 'rose, hôtel', set: 'o' },
        { ch: 'u', rom: 'uy (môi tròn, lưỡi như "i")', say: 'tu', note: 'tu — bạn; rue — đường', set: 'u' },
        { ch: 'ç', rom: 'x (c đọc như s)', say: 'français', note: 'français, garçon, ça' },
      ],
    },
    {
      id: 'combos', title: 'Tổ hợp nguyên âm', native: 'Voyelles composées',
      desc: 'Nhiều chữ viết cạnh nhau nhưng chỉ đọc thành một âm.',
      items: [
        { ch: 'ou', rom: 'u', say: 'vous', note: 'vous — các bạn; tout — tất cả', set: 'u' },
        { ch: 'oi', rom: 'oa', say: 'moi', note: 'moi — tôi; trois — ba' },
        { ch: 'au / eau', rom: 'ô', say: 'beau', note: 'beau — đẹp; eau — nước; aussi', set: 'o' },
        { ch: 'ai / ei', rom: 'e (mở)', say: 'lait', note: 'lait — sữa; neige — tuyết', set: 'e' },
        { ch: 'eu / œu', rom: 'ơ (tròn môi)', say: 'deux', note: 'deux — hai; sœur — chị em gái', set: 'ơ' },
        { ch: 'er / ez (cuối)', rom: 'ê', say: 'parler', note: 'parler, chez, nez — r và z câm', set: 'e' },
        { ch: 'ill / -ail', rom: 'i-ơ / ai', say: 'fille', note: 'fille — con gái; travail — công việc' },
      ],
    },
    {
      id: 'nasals', title: 'Nguyên âm mũi', native: 'Voyelles nasales',
      desc: 'Nguyên âm + n/m (không có nguyên âm theo sau) đọc bằng mũi, KHÔNG bật âm n.',
      items: [
        { ch: 'an / en', rom: 'ăng (mũi, miệng mở)', say: 'enfant', note: 'enfant — trẻ em; dans, temps' },
        { ch: 'on', rom: 'ông (mũi, môi tròn)', say: 'bon', note: 'bon — tốt; nom — tên' },
        { ch: 'in / ain / ein', rom: 'anh (mũi)', say: 'vin', note: 'vin — rượu vang; pain — bánh mì; plein' },
        { ch: 'un', rom: 'ơng (mũi)', say: 'un', note: 'un — một; lundi (nay nhiều người đọc như "in")' },
        { ch: 'ien', rom: 'i-anh (mũi)', say: 'bien', note: 'bien — tốt; rien — không có gì' },
      ],
    },
    {
      id: 'consonants', title: 'Phụ âm đặc biệt', native: 'Consonnes',
      desc: 'Những phụ âm và tổ hợp đọc khác tiếng Việt.',
      items: [
        { ch: 'r', rom: 'r họng (gần "gr" khàn)', say: 'rouge', note: 'rouge — đỏ; Paris' },
        { ch: 'h', rom: 'câm', say: 'hôtel', note: 'hôtel, homme — không bao giờ đọc' },
        { ch: 'ch', rom: 's nặng (như "sh")', say: 'chat', note: 'chat — con mèo; chez', set: 's' },
        { ch: 'j / g (+e, i)', rom: 'giơ (như "j")', say: 'bonjour', note: 'bonjour, manger, girafe', set: 's' },
        { ch: 'gn', rom: 'nh', say: 'montagne', note: 'montagne — núi; Espagne' },
        { ch: 'qu', rom: 'k', say: 'quatre', note: 'quatre — bốn; qui, que' },
        { ch: 'th', rom: 't', say: 'thé', note: 'thé — trà; théâtre' },
        { ch: 'ph', rom: 'ph', say: 'photo', note: 'photo, pharmacie' },
        { ch: 's (giữa 2 nguyên âm)', rom: 'z', say: 'maison', note: 'maison — nhà; ss đọc "x": poisson', set: 'z' },
      ],
    },
  ],
  lessons: [
    {
      id: 'p1', kind: 'pronunciation', title: 'Chữ cuối câm',
      summary: 'Phụ âm cuối từ thường không đọc — trừ C, R, F, L ("CaReFuL").',
      body: [
        'Phần lớn phụ âm cuối từ KHÔNG được đọc: petit [pơ-ti], grand [grăng], vous [vu], trop [trô], les [lê].',
        'Chữ e cuối từ cũng câm: une [uyn], table [ta-blơ nhẹ], France [frăngx].',
        'Mẹo "CaReFuL": c, r, f, l cuối từ thường được đọc: avec, bonjour, neuf, hôtel. Nhưng -er ở động từ đọc "ê": parler, manger.',
        'Đuôi -ent của động từ số nhiều câm hoàn toàn: ils parlent đọc giống il parle.',
      ],
      examples: [
        { t: 'Bonjour!', r: 'bông-giua', v: 'Xin chào! (r cuối được đọc)' },
        { t: 'petit', r: 'pơ-ti', v: 'nhỏ (t câm)' },
        { t: 'Merci beaucoup.', r: 'mec-xi bô-cu', v: 'Cảm ơn rất nhiều. (p câm)' },
        { t: 'avec moi', r: 'a-vec moa', v: 'với tôi (c cuối được đọc)' },
        { t: 'Ils parlent français.', r: 'il pac-lơ frăng-xê', v: 'Họ nói tiếng Pháp. (-ent câm)' },
      ],
      quiz: [
        { q: 'Chữ nào KHÔNG được đọc trong "petit"?', o: ['t cuối', 'p đầu', 'i', 'e'], a: 0 },
        { q: '"ils parlent" và "il parle" đọc…', o: ['giống nhau', 'khác ở âm "ent"', 'khác ở âm "s"', 'khác hoàn toàn'], a: 0 },
        { q: 'Theo mẹo "CaReFuL", chữ cuối nào thường ĐƯỢC đọc?', o: ['l trong hôtel', 't trong petit', 's trong vous', 'd trong grand'], a: 0 },
      ],
    },
    {
      id: 'p2', kind: 'pronunciation', title: 'Nguyên âm mũi',
      summary: 'an/en, on, in/ain, un: đọc qua mũi và không bật "n".',
      body: [
        'Khi nguyên âm đứng trước n hoặc m và sau đó là phụ âm hoặc hết từ, nó thành nguyên âm mũi: bon, vin, enfant, temps.',
        'Không đọc chữ n/m như tiếng Việt: "bon" không phải "bon" mà gần "bông" đọc bằng mũi, không khép miệng ở cuối.',
        'Nếu sau n/m là một nguyên âm (hoặc nn/mm), âm KHÔNG mũi: bon [bông] ≠ bonne [bon-nơ]; fin ≠ fine.',
        'Ba âm mũi chính: /ɑ̃/ an, en (dans, enfant); /ɔ̃/ on (bon, maison); /ɛ̃/ in, ain, ein, un (vin, pain, un).',
      ],
      examples: [
        { t: 'un bon vin blanc', r: 'anh bông vanh blăng', v: 'một chai vang trắng ngon (4 âm mũi)' },
        { t: 'enfant', r: 'ăng-phăng', v: 'đứa trẻ' },
        { t: 'bon / bonne', r: 'bông / bon-nơ', v: 'tốt (đực / cái)' },
        { t: 'le pain', r: 'lơ panh', v: 'bánh mì' },
        { t: 'Il fait beau en France.', r: 'il phe bô ăng frăngx', v: 'Trời đẹp ở Pháp.' },
      ],
      quiz: [
        { q: 'Từ nào có nguyên âm mũi?', o: ['bon', 'bonne', 'ami', 'lune'], a: 0 },
        { q: '"ain" trong "pain" đọc gần…', o: ['anh (mũi)', 'ai-n', 'ăng', 'ông'], a: 0 },
        { q: 'Khi đọc nguyên âm mũi, chữ n…', o: ['không bật ra', 'đọc rõ như tiếng Việt', 'đọc thành "m"', 'đọc thành "ng" rõ'], a: 0 },
      ],
    },
    {
      id: 'p3', kind: 'pronunciation', title: 'Nối âm (liaison) và nuốt âm (élision)',
      summary: 'Phụ âm cuối câm "sống lại" trước nguyên âm; le, je, ne… mất e trước nguyên âm.',
      body: [
        'Liaison: phụ âm cuối vốn câm được đọc nối sang từ sau nếu từ sau bắt đầu bằng nguyên âm hoặc h câm: les amis [lê-za-mi], vous avez [vu-za-vê], deux heures [đơ-zơr].',
        'Khi nối, s và x đọc thành "z", d đọc thành "t": un grand homme [grăng-tom].',
        'Liaison bắt buộc sau mạo từ, đại từ, số đếm và tính từ đứng trước danh từ. Không nối sau "et": et / un [ê ơng].',
        'Élision: le, la, je, me, te, se, ne, de, que bỏ nguyên âm cuối và thay bằng dấu \' khi từ sau bắt đầu bằng nguyên âm hoặc h câm: l\'ami, j\'habite, c\'est, je n\'ai pas.',
      ],
      examples: [
        { t: 'les enfants', r: 'lê-zăng-phăng', v: 'những đứa trẻ (s → z)' },
        { t: 'Vous avez raison.', r: 'vu-za-vê rê-dông', v: 'Bạn nói đúng.' },
        { t: 'J\'habite à Hanoï.', r: 'gia-bít a ha-nô-i', v: 'Tôi sống ở Hà Nội. (je → j\')' },
        { t: 'C\'est très gentil.', r: 'xê tre giăng-ti', v: 'Thật tốt bụng. (ce → c\')' },
        { t: 'Je n\'ai pas le temps.', r: 'giơ nê pa lơ tăng', v: 'Tôi không có thời gian. (ne → n\')' },
      ],
      quiz: [
        { q: '"les amis" đọc là…', o: ['lê-za-mi', 'lê a-mi', 'lết a-mi', 'lê-sa-mi'], a: 0 },
        { q: 'Viết đúng: "je + aime" →', o: ['j\'aime', 'je aime', 'jaime', 'je\'aime'], a: 0 },
        { q: 'Khi nối âm, chữ s cuối đọc thành…', o: ['z', 's', 'x', 'câm'], a: 0 },
      ],
    },
    {
      id: 'p4', kind: 'pronunciation', title: 'Âm U, OU và R',
      summary: 'tu ≠ tout; r phát từ cổ họng.',
      body: [
        'u /y/: đặt lưỡi như khi nói "i" rồi tròn môi lại — gần "uy" nhưng giữ nguyên một âm: tu, rue, bus, sur.',
        'ou /u/: như "u" tiếng Việt: tout, vous, rouge, bonjour.',
        'Phân biệt làm đổi nghĩa: tu (bạn) ≠ tout (tất cả), dessus (bên trên) ≠ dessous (bên dưới), rue (đường) ≠ roue (bánh xe).',
        'R tiếng Pháp phát ở cuống họng, gần âm "gr" khàn hoặc "r" miền Nam đọc sâu trong cổ; không rung đầu lưỡi: Paris, merci, rouge.',
      ],
      examples: [
        { t: 'tu / tout', r: 'tuy / tu', v: 'bạn / tất cả' },
        { t: 'la rue', r: 'la ruy', v: 'con đường' },
        { t: 'Où est la gare?', r: 'u e la gar', v: 'Nhà ga ở đâu?' },
        { t: 'Au revoir!', r: 'ô rơ-voa', v: 'Tạm biệt!' },
        { t: 'Il est sûr.', r: 'i le xuyr', v: 'Anh ấy chắc chắn.' },
      ],
      quiz: [
        { q: '"tout" nghĩa là…', o: ['tất cả', 'bạn', 'đường', 'bánh xe'], a: 0 },
        { q: 'Chữ "u" trong "rue" đọc thế nào?', o: ['lưỡi như "i", môi tròn', 'như "u" tiếng Việt', 'như "ơ"', 'như "a"'], a: 0 },
        { q: 'R tiếng Pháp phát ra ở…', o: ['cuống họng', 'đầu lưỡi rung', 'hai môi', 'răng'], a: 0 },
      ],
    },
    {
      id: 'p5', kind: 'pronunciation', title: 'Dấu và trọng âm',
      summary: 'é, è, ê, à, ç, ë… và trọng âm luôn ở âm tiết cuối.',
      body: [
        'Dấu sắc é = "ê" khép: café, été. Dấu huyền è và dấu mũ ê = "e" mở: mère, fête.',
        'Dấu huyền trên a và u chỉ phân biệt nghĩa, không đổi âm: a (có) / à (ở, đến); ou (hoặc) / où (ở đâu).',
        'ç (c có móc) luôn đọc "x" trước a, o, u: ça, garçon, reçu. Dấu hai chấm (tréma) tách hai nguyên âm: Noël [nô-el], naïf.',
        'Trọng âm: tiếng Pháp nhấn nhẹ vào âm tiết CUỐI của từ hoặc cụm từ, các âm tiết khác đọc đều: restau-RANT, merci beau-COUP.',
      ],
      examples: [
        { t: 'un café', r: 'anh ca-phê', v: 'một ly cà phê' },
        { t: 'ma mère', r: 'ma me', v: 'mẹ tôi' },
        { t: 'Ça va?', r: 'xa va', v: 'Khỏe không?' },
        { t: 'Où habitez-vous?', r: 'u a-bi-tê vu', v: 'Bạn sống ở đâu?' },
        { t: 'Joyeux Noël!', r: 'goa-yơ nô-el', v: 'Giáng sinh vui vẻ!' },
      ],
      quiz: [
        { q: '"où" nghĩa là…', o: ['ở đâu', 'hoặc', 'có', 'và'], a: 0 },
        { q: 'Chữ "ç" trong "garçon" đọc là…', o: ['x', 'k', 'ch', 'g'], a: 0 },
        { q: 'Trọng âm tiếng Pháp thường rơi vào…', o: ['âm tiết cuối', 'âm tiết đầu', 'âm tiết giữa', 'không cố định'], a: 0 },
      ],
    },
    {
      id: 'g1', kind: 'grammar', title: 'Giống và mạo từ',
      summary: 'Danh từ có giống đực/cái: le/la/les, un/une/des.',
      body: [
        'Mọi danh từ đều là giống đực hoặc giống cái, cần học kèm mạo từ: le livre (quyển sách – đực), la maison (ngôi nhà – cái).',
        'Mạo từ xác định: le (đực), la (cái), l\' (trước nguyên âm/h câm), les (số nhiều). Không xác định: un (đực), une (cái), des (số nhiều).',
        'Số nhiều thường thêm -s (không đọc): le livre → les livres. -eau thêm -x: le gâteau → les gâteaux.',
        'Gợi ý: từ tận cùng -tion, -té, -ette thường giống cái (la nation, la santé); -ment, -age thường giống đực (le moment, le fromage).',
      ],
      tables: [
        { title: 'Mạo từ', head: ['', 'Đực', 'Cái', 'Số nhiều'], rows: [['Xác định', 'le livre', 'la table', 'les livres'], ['Không xác định', 'un livre', 'une table', 'des livres']] },
      ],
      examples: [
        { t: 'le père', r: '', v: 'người bố' },
        { t: 'la mère', r: '', v: 'người mẹ' },
        { t: 'l\'hôtel', r: '', v: 'khách sạn' },
        { t: 'des amis', r: '', v: 'những người bạn' },
      ],
      quiz: [
        { q: '___ maison (giống cái, xác định)', o: ['la', 'le', 'un', 'les'], a: 0 },
        { q: '___ ami (trước nguyên âm)', o: ['l\'', 'le', 'la', 'les\''], a: 0 },
        { q: 'Mạo từ không xác định số nhiều là…', o: ['des', 'les', 'une', 'du'], a: 0 },
      ],
    },
    {
      id: 'g2', kind: 'grammar', title: 'Đại từ và động từ être, avoir',
      summary: 'être (là) và avoir (có) – hai động từ quan trọng nhất.',
      body: [
        'Đại từ nhân xưng: je (tôi), tu (bạn – thân mật), il/elle (anh ấy/cô ấy), nous (chúng tôi), vous (các bạn / ngài – lịch sự), ils/elles (họ).',
        'Dùng "vous" với người lạ, người lớn tuổi, nơi trang trọng; "tu" với bạn bè, gia đình.',
        'être: je suis, tu es, il est, nous sommes, vous êtes, ils sont.',
        'avoir: j\'ai, tu as, il a, nous avons, vous avez, ils ont. Tuổi dùng avoir: J\'ai vingt-cinq ans (Tôi 25 tuổi).',
      ],
      tables: [
        { title: 'Chia động từ', head: ['Đại từ', 'être', 'avoir'], rows: [['je', 'suis', 'ai (j\'ai)'], ['tu', 'es', 'as'], ['il / elle', 'est', 'a'], ['nous', 'sommes', 'avons'], ['vous', 'êtes', 'avez'], ['ils / elles', 'sont', 'ont']] },
      ],
      examples: [
        { t: 'Je suis étudiant.', r: '', v: 'Tôi là sinh viên.' },
        { t: 'Je suis vietnamien.', r: '', v: 'Tôi là người Việt Nam.' },
        { t: 'J\'ai vingt-cinq ans.', r: '', v: 'Tôi hai mươi lăm tuổi.' },
        { t: 'Vous avez raison.', r: '', v: 'Bạn nói đúng.' },
      ],
      quiz: [
        { q: 'Nous ___ vietnamiens.', o: ['sommes', 'êtes', 'sont', 'suis'], a: 0 },
        { q: 'Tôi 20 tuổi: J\'___ vingt ans.', o: ['ai', 'suis', 'est', 'as'], a: 0 },
        { q: 'Nói với người lạ một cách lịch sự, dùng…', o: ['vous', 'tu', 'il', 'on'], a: 0 },
      ],
    },
    {
      id: 'g3', kind: 'grammar', title: 'Động từ nhóm 1 (-er) ở hiện tại',
      summary: 'parler → je parle, nous parlons, vous parlez…',
      body: [
        'Khoảng 90% động từ tiếng Pháp tận cùng -er và chia theo cùng một mẫu: bỏ -er, thêm đuôi -e, -es, -e, -ons, -ez, -ent.',
        'Các đuôi -e, -es, -ent đều câm, nên je parle, tu parles, il parle, ils parlent đọc giống nhau.',
        'Thì hiện tại tiếng Pháp dịch cả "đang" và "thường": Je parle français = Tôi nói / đang nói tiếng Pháp.',
        'Động từ -er thông dụng: parler (nói), habiter (sống), aimer (thích, yêu), travailler (làm việc), manger (ăn), regarder (xem).',
      ],
      tables: [
        { title: 'parler (nói)', head: ['Đại từ', 'Động từ', 'Đọc'], rows: [['je', 'parle', 'pac-lơ'], ['tu', 'parles', 'pac-lơ'], ['il / elle', 'parle', 'pac-lơ'], ['nous', 'parlons', 'pac-lông'], ['vous', 'parlez', 'pac-lê'], ['ils / elles', 'parlent', 'pac-lơ']] },
      ],
      examples: [
        { t: 'Je parle un peu français.', r: '', v: 'Tôi nói được một chút tiếng Pháp.' },
        { t: 'J\'habite à Hanoï.', r: '', v: 'Tôi sống ở Hà Nội.' },
        { t: 'J\'aime apprendre les langues.', r: '', v: 'Tôi thích học ngoại ngữ.' },
        { t: 'Vous parlez français?', r: '', v: 'Bạn nói tiếng Pháp không?' },
      ],
      quiz: [
        { q: 'Nous ___ (travailler) ici.', o: ['travaillons', 'travaillez', 'travaille', 'travaillent'], a: 0 },
        { q: 'Vous ___ (habiter) où?', o: ['habitez', 'habitons', 'habite', 'habitent'], a: 0 },
        { q: 'Dạng nào đọc KHÁC "il parle"?', o: ['nous parlons', 'ils parlent', 'tu parles', 'je parle'], a: 0 },
      ],
    },
    {
      id: 'g4', kind: 'grammar', title: 'Câu phủ định ne … pas',
      summary: 'Kẹp động từ giữa ne và pas: Je ne parle pas.',
      body: [
        'Phủ định: ne + động từ + pas. Je parle → Je ne parle pas. Trước nguyên âm ne → n\': Je n\'aime pas.',
        'Khi nói thân mật, người Pháp thường bỏ "ne": J\'sais pas / C\'est pas grave.',
        'Sau phủ định, un/une/des/du/de la thường đổi thành "de": J\'ai un frère → Je n\'ai pas de frère.',
        'Các dạng khác: ne … jamais (không bao giờ), ne … plus (không còn nữa), ne … rien (không gì cả), ne … personne (không ai).',
      ],
      examples: [
        { t: 'Je ne parle pas très bien français.', r: '', v: 'Tôi nói tiếng Pháp chưa giỏi lắm.' },
        { t: 'Ce n\'est pas grave.', r: '', v: 'Không sao đâu.' },
        { t: 'Je n\'ai pas le temps.', r: '', v: 'Tôi không có thời gian.' },
        { t: 'Je ne mange jamais de viande.', r: '', v: 'Tôi không bao giờ ăn thịt.' },
      ],
      quiz: [
        { q: 'Phủ định của "J\'aime le café":', o: ['Je n\'aime pas le café.', 'Je ne aime pas le café.', 'Je aime pas ne le café.', 'Je pas aime le café.'], a: 0 },
        { q: 'J\'ai une voiture → Je n\'ai pas ___ voiture.', o: ['de', 'une', 'la', 'des'], a: 0 },
        { q: '"ne … jamais" nghĩa là…', o: ['không bao giờ', 'không còn nữa', 'không gì cả', 'không ai'], a: 0 },
      ],
    },
    {
      id: 'g5', kind: 'grammar', title: 'Đặt câu hỏi',
      summary: 'Lên giọng, est-ce que, hoặc đảo ngữ; các từ để hỏi.',
      body: [
        'Ba cách hỏi Có/Không: (1) lên giọng cuối câu: Vous parlez français? (2) thêm Est-ce que: Est-ce que vous parlez français? (3) đảo ngữ (trang trọng): Parlez-vous français?',
        'Từ để hỏi: où (ở đâu), quand (khi nào), comment (thế nào), pourquoi (tại sao), combien (bao nhiêu), qui (ai), que / qu\'est-ce que (cái gì), quel/quelle (nào).',
        'Vị trí: Où habitez-vous? / Vous habitez où? / Où est-ce que vous habitez? – cả ba đều đúng.',
        'Quel đổi theo giống, số: quel livre, quelle heure, quels films, quelles questions.',
      ],
      examples: [
        { t: 'Comment vous appelez-vous?', r: '', v: 'Bạn tên là gì?' },
        { t: 'D\'où venez-vous?', r: '', v: 'Bạn đến từ đâu?' },
        { t: 'Quel est votre nom?', r: '', v: 'Tên của bạn là gì?' },
        { t: 'Pouvez-vous parler plus lentement?', r: '', v: 'Bạn có thể nói chậm hơn không?' },
      ],
      quiz: [
        { q: '___ habitez-vous? — À Paris.', o: ['Où', 'Quand', 'Qui', 'Combien'], a: 0 },
        { q: '___ heure est-il?', o: ['Quelle', 'Quel', 'Quels', 'Quoi'], a: 0, why: '"heure" là danh từ giống cái → quelle.' },
        { q: '"pourquoi" nghĩa là…', o: ['tại sao', 'thế nào', 'khi nào', 'bao nhiêu'], a: 0 },
      ],
    },
    {
      id: 'g6', kind: 'grammar', title: 'Tính từ: vị trí và hợp giống, số',
      summary: 'Tính từ thường đứng sau danh từ và đổi theo giống, số.',
      body: [
        'Tính từ thường đứng SAU danh từ (như tiếng Việt): une voiture rouge (chiếc xe màu đỏ).',
        'Một số tính từ ngắn, thông dụng đứng TRƯỚC: beau, bon, grand, petit, jeune, vieux, nouveau, joli: un petit café, une grande maison.',
        'Giống cái thường thêm -e: petit → petite, content → contente (t được đọc ở dạng cái). Số nhiều thêm -s: petits, petites.',
        'Tính từ đã tận cùng -e không đổi ở giống cái: rouge, facile, jeune. Bất quy tắc: beau → belle, bon → bonne, nouveau → nouvelle.',
      ],
      examples: [
        { t: 'Je suis content de vous voir.', r: '', v: 'Tôi rất vui được gặp bạn. (nam)' },
        { t: 'Elle est contente.', r: '', v: 'Cô ấy vui. (nữ, thêm -e)' },
        { t: 'une grande maison', r: '', v: 'một ngôi nhà lớn' },
        { t: 'un vin rouge', r: '', v: 'một chai vang đỏ' },
      ],
      quiz: [
        { q: 'Elle est ___ (petit).', o: ['petite', 'petit', 'petits', 'petites'], a: 0 },
        { q: 'Vị trí đúng:', o: ['une voiture rouge', 'une rouge voiture', 'rouge une voiture', 'une voiture rouges'], a: 0 },
        { q: 'Giống cái của "beau" là…', o: ['belle', 'beaue', 'bonne', 'bele'], a: 0 },
      ],
    },
    {
      id: 'g7', kind: 'grammar', title: 'Động từ bất quy tắc thông dụng',
      summary: 'aller, faire, pouvoir, vouloir, venir – cần học thuộc.',
      body: [
        'aller (đi): je vais, tu vas, il va, nous allons, vous allez, ils vont.',
        'faire (làm): je fais, tu fais, il fait, nous faisons, vous faites, ils font. Thời tiết: Il fait beau (trời đẹp).',
        'pouvoir (có thể): je peux, vous pouvez. vouloir (muốn): je veux, vous voulez; lịch sự: je voudrais (tôi muốn).',
        'venir (đến): je viens, vous venez, ils viennent. Je viens du Vietnam (Tôi đến từ Việt Nam).',
        'Sau pouvoir / vouloir / aimer + động từ nguyên mẫu: Je peux vous aider. Je voudrais réserver.',
      ],
      tables: [
        { title: 'Bốn động từ', head: ['Đại từ', 'aller', 'faire', 'pouvoir', 'vouloir'], rows: [['je', 'vais', 'fais', 'peux', 'veux'], ['tu', 'vas', 'fais', 'peux', 'veux'], ['il / elle', 'va', 'fait', 'peut', 'veut'], ['nous', 'allons', 'faisons', 'pouvons', 'voulons'], ['vous', 'allez', 'faites', 'pouvez', 'voulez'], ['ils / elles', 'vont', 'font', 'peuvent', 'veulent']] },
      ],
      examples: [
        { t: 'Je viens du Vietnam.', r: '', v: 'Tôi đến từ Việt Nam.' },
        { t: 'Puis-je vous aider?', r: '', v: 'Tôi có thể giúp bạn không?' },
        { t: 'Il fait beau aujourd\'hui.', r: '', v: 'Hôm nay trời đẹp.' },
        { t: 'Je voudrais un café, s\'il vous plaît.', r: '', v: 'Làm ơn cho tôi một ly cà phê.' },
      ],
      quiz: [
        { q: 'Nous ___ au cinéma ce soir. (aller)', o: ['allons', 'allez', 'vont', 'vais'], a: 0 },
        { q: 'Vous ___ du sport? (faire)', o: ['faites', 'faisez', 'font', 'fais'], a: 0 },
        { q: 'Cách nói "tôi muốn" lịch sự nhất:', o: ['je voudrais', 'je veux', 'je vais', 'je peux'], a: 0 },
      ],
    },
    {
      id: 'g8', kind: 'grammar', title: 'Quá khứ kép (passé composé)',
      summary: 'avoir / être + phân từ quá khứ: J\'ai mangé, Je suis allé.',
      body: [
        'Diễn tả việc đã xảy ra, đã xong: avoir (chia ở hiện tại) + phân từ quá khứ: J\'ai mangé (tôi đã ăn), Nous avons parlé.',
        'Phân từ quá khứ: -er → -é (parler → parlé), -ir → -i (finir → fini). Bất quy tắc: faire → fait, prendre → pris, voir → vu, avoir → eu, être → été.',
        'Một nhóm động từ chỉ di chuyển/thay đổi trạng thái dùng être: aller, venir, arriver, partir, entrer, sortir, naître, mourir, rester, tomber… Phân từ hợp giống, số với chủ ngữ: Elle est allée, Ils sont partis.',
        'Phủ định: ne + trợ động từ + pas + phân từ: Je n\'ai pas compris.',
      ],
      examples: [
        { t: 'Je suis né à Da Nang.', r: '', v: 'Tôi sinh ra ở Đà Nẵng.' },
        { t: 'J\'ai perdu mon passeport.', r: '', v: 'Tôi bị mất hộ chiếu.' },
        { t: 'Elle est partie hier.', r: '', v: 'Cô ấy đã đi hôm qua.' },
        { t: 'Je n\'ai pas compris.', r: '', v: 'Tôi không hiểu.' },
      ],
      quiz: [
        { q: 'Hier, j\'___ un film.', o: ['ai regardé', 'suis regardé', 'ai regarder', 'regarde'], a: 0 },
        { q: 'Elle ___ à Paris.', o: ['est allée', 'a allé', 'est allé', 'a allée'], a: 0, why: 'aller dùng être; chủ ngữ giống cái → allée.' },
        { q: 'Phân từ quá khứ của "faire" là…', o: ['fait', 'fairé', 'fais', 'fit'], a: 0 },
      ],
    },
    {
      id: 'g9', kind: 'grammar', title: 'Tương lai gần và tương lai đơn',
      summary: 'aller + nguyên mẫu (sắp) và đuôi -ai, -as, -a… (sẽ).',
      body: [
        'Tương lai gần (futur proche) – rất hay dùng khi nói: aller (chia) + động từ nguyên mẫu: Je vais partir (Tôi sắp đi), Nous allons manger.',
        'Tương lai đơn (futur simple): nguyên mẫu + đuôi -ai, -as, -a, -ons, -ez, -ont: je parlerai, tu parleras, il parlera, nous parlerons. Động từ -re bỏ e: prendre → je prendrai.',
        'Gốc bất quy tắc: être → ser- (je serai), avoir → aur- (j\'aurai), aller → ir- (j\'irai), faire → fer- (je ferai), pouvoir → pourr-, venir → viendr-.',
        'Mốc thời gian: demain (ngày mai), la semaine prochaine (tuần sau), l\'année prochaine (năm sau), bientôt (sớm).',
      ],
      examples: [
        { t: 'Je vais réserver une table.', r: '', v: 'Tôi sẽ đặt một bàn.' },
        { t: 'Il va pleuvoir.', r: '', v: 'Trời sắp mưa.' },
        { t: 'Je vous appellerai demain.', r: '', v: 'Tôi sẽ gọi cho bạn ngày mai.' },
        { t: 'Nous serons en retard.', r: '', v: 'Chúng tôi sẽ đến muộn.' },
      ],
      quiz: [
        { q: 'Ce soir, je ___ regarder un film.', o: ['vais', 'va', 'allons', 'irai'], a: 0 },
        { q: 'Tương lai đơn của "être" với je:', o: ['je serai', 'je étrai', 'je suirai', 'j\'aurai'], a: 0 },
        { q: 'Demain, nous ___ (parler) au directeur.', o: ['parlerons', 'parlons', 'parlerez', 'parleront'], a: 0 },
      ],
    },
    {
      id: 'g10', kind: 'grammar', title: 'Mạo từ bộ phận du, de la, des',
      summary: '"một ít" với đồ ăn, thức uống, thứ không đếm được.',
      body: [
        'Khi nói về một lượng không xác định của thứ không đếm được, dùng mạo từ bộ phận: du (đực), de la (cái), de l\' (trước nguyên âm), des (số nhiều).',
        'Je bois du café (Tôi uống cà phê), Je mange de la soupe, Je voudrais de l\'eau.',
        'Nói chung về sở thích thì dùng le/la/les: J\'aime le café (Tôi thích cà phê nói chung).',
        'Sau phủ định và từ chỉ lượng dùng "de": Je ne bois pas de café. Beaucoup de gens, un peu de sucre, un kilo de pommes.',
      ],
      tables: [
        { title: 'Mạo từ bộ phận', head: ['Giống', 'Mạo từ', 'Ví dụ'], rows: [['Đực', 'du', 'du pain'], ['Cái', 'de la', 'de la viande'], ['Trước nguyên âm', 'de l\'', 'de l\'eau'], ['Số nhiều', 'des', 'des fruits']] },
      ],
      examples: [
        { t: 'Je voudrais de l\'eau.', r: '', v: 'Tôi muốn một ít nước.' },
        { t: 'Vous voulez du pain?', r: '', v: 'Bạn có muốn bánh mì không?' },
        { t: 'Je ne bois pas de café.', r: '', v: 'Tôi không uống cà phê.' },
        { t: 'Un peu de sucre, s\'il vous plaît.', r: '', v: 'Làm ơn cho một chút đường.' },
      ],
      quiz: [
        { q: 'Je mange ___ viande. (la viande)', o: ['de la', 'du', 'des', 'le'], a: 0 },
        { q: 'Je voudrais ___ fromage. (le fromage)', o: ['du', 'de la', 'des', 'la'], a: 0 },
        { q: 'Je ne mange pas ___ pain.', o: ['de', 'du', 'le', 'des'], a: 0 },
      ],
    },
    {
      id: 'g11', kind: 'grammar', title: 'Tính từ sở hữu',
      summary: 'mon, ma, mes… hợp theo vật được sở hữu, không theo người sở hữu.',
      body: [
        'Tính từ sở hữu đổi theo giống và số của DANH TỪ đi sau: mon père (bố tôi), ma mère (mẹ tôi), mes parents (bố mẹ tôi).',
        '"son / sa" = của anh ấy HOẶC của cô ấy – tùy danh từ: sa voiture có thể là "xe của anh ấy" hoặc "xe của cô ấy".',
        'Trước danh từ giống cái bắt đầu bằng nguyên âm, dùng mon/ton/son thay ma/ta/sa: mon amie, mon adresse.',
      ],
      tables: [
        { title: 'Tính từ sở hữu', head: ['Người sở hữu', 'Đực', 'Cái', 'Số nhiều'], rows: [['je (của tôi)', 'mon', 'ma', 'mes'], ['tu (của bạn)', 'ton', 'ta', 'tes'], ['il / elle', 'son', 'sa', 'ses'], ['nous', 'notre', 'notre', 'nos'], ['vous', 'votre', 'votre', 'vos'], ['ils / elles', 'leur', 'leur', 'leurs']] },
      ],
      examples: [
        { t: 'Ma mère habite près de chez moi.', r: '', v: 'Mẹ tôi sống gần nhà tôi.' },
        { t: 'Je parle souvent avec mon frère.', r: '', v: 'Tôi thường nói chuyện với anh/em trai tôi.' },
        { t: 'Mon adresse est rue Pasteur.', r: '', v: 'Địa chỉ của tôi là đường Pasteur.' },
        { t: 'Quel est votre nom?', r: '', v: 'Tên của bạn là gì?' },
      ],
      quiz: [
        { q: '___ sœur (chị/em gái của tôi)', o: ['ma', 'mon', 'mes', 'me'], a: 0 },
        { q: '___ amie (bạn gái của tôi, trước nguyên âm)', o: ['mon', 'ma', 'm\'', 'mes'], a: 0 },
        { q: '"sa voiture" có thể nghĩa là…', o: ['xe của anh ấy hoặc cô ấy', 'chỉ xe của cô ấy', 'xe của tôi', 'xe của họ'], a: 0 },
      ],
    },
    {
      id: 'g12', kind: 'grammar', title: 'Giới từ với nơi chốn: à, en, au, chez',
      summary: 'à Paris, en France, au Vietnam, chez moi.',
      body: [
        'Thành phố: à (ở/đến) và de (từ): J\'habite à Hanoï. Je viens de Paris.',
        'Quốc gia giống cái (thường tận cùng -e): en / de: en France, de France. Quốc gia giống đực: au / du: au Vietnam, du Vietnam. Số nhiều: aux / des: aux États-Unis.',
        'chez + người = ở nhà của / ở chỗ của: chez moi (ở nhà tôi), chez le médecin (ở chỗ bác sĩ).',
        'à + le = au, à + les = aux; de + le = du, de + les = des: au restaurant, à la gare, du travail.',
      ],
      tables: [
        { title: 'Đến / ở và Từ', head: ['Nơi', 'Ở / đến', 'Từ'], rows: [['Thành phố', 'à Paris', 'de Paris'], ['Nước giống cái', 'en France', 'de France'], ['Nước giống đực', 'au Vietnam', 'du Vietnam'], ['Nước số nhiều', 'aux États-Unis', 'des États-Unis']] },
      ],
      examples: [
        { t: 'Je viens du Vietnam.', r: '', v: 'Tôi đến từ Việt Nam.' },
        { t: 'J\'habite à Hô Chi Minh-Ville.', r: '', v: 'Tôi sống ở Thành phố Hồ Chí Minh.' },
        { t: 'Je vais au restaurant.', r: '', v: 'Tôi đi đến nhà hàng.' },
        { t: 'Ma mère habite près de chez moi.', r: '', v: 'Mẹ tôi sống gần nhà tôi.' },
      ],
      quiz: [
        { q: 'Je travaille ___ France.', o: ['en', 'au', 'à', 'aux'], a: 0 },
        { q: 'Il habite ___ Vietnam.', o: ['au', 'en', 'à', 'du'], a: 0 },
        { q: 'Nous allons ___ gare. (la gare)', o: ['à la', 'au', 'aux', 'en'], a: 0 },
      ],
    },
  ],
};
