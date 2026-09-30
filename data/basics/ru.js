// Russian basics: Cyrillic alphabet, pronunciation rules and core grammar.
window.LT_BASICS = window.LT_BASICS || {};
window.LT_BASICS['ru'] = {
  intro: 'Tiếng Nga dùng bảng chữ cái Kirin (Cyrillic) gồm 33 chữ. Nhiều chữ trông giống chữ Latin nhưng đọc khác — hãy học theo 3 nhóm: chữ quen, chữ "bẫy", chữ mới. Sau đó nắm trọng âm, vì trọng âm quyết định cách đọc nguyên âm.',
  groups: [
    {
      id: 'familiar', title: 'Chữ quen thuộc', native: 'Знакомые буквы',
      desc: 'Hình dạng và cách đọc gần giống chữ Latin/tiếng Việt.',
      items: [
        { ch: 'А а', rom: 'a', say: 'а', set: 'v', note: 'мама — mẹ' },
        { ch: 'К к', rom: 'k (c)', say: 'ка', set: 'c', note: 'кот — con mèo' },
        { ch: 'М м', rom: 'm', say: 'ма', set: 'c', note: 'мир — thế giới' },
        { ch: 'О о', rom: 'o (ô)', say: 'о', set: 'v', note: 'он — anh ấy' },
        { ch: 'Т т', rom: 't', say: 'та', set: 'c', note: 'там — ở đó' },
        { ch: 'Е е', rom: 'ye (iê)', say: 'е', set: 'v', note: 'есть — có; нет — không' },
        { ch: 'Э э', rom: 'e (e)', say: 'э', set: 'v', note: 'это — đây là' },
      ],
    },
    {
      id: 'false', title: 'Chữ "bẫy" (giống Latin, đọc khác)', native: 'Ложные друзья',
      desc: 'Trông như chữ Latin nhưng là âm khác — dễ đọc nhầm nhất.',
      items: [
        { ch: 'В в', rom: 'v', say: 'ва', set: 'f', note: 'вода — nước (không phải "b")' },
        { ch: 'Н н', rom: 'n', say: 'на', set: 'f', note: 'нос — mũi (không phải "h")' },
        { ch: 'Р р', rom: 'r (rung)', say: 'ра', set: 'f', note: 'рыба — cá (không phải "p")' },
        { ch: 'С с', rom: 's (x)', say: 'са', set: 'f', note: 'сок — nước ép (không phải "c/k")' },
        { ch: 'У у', rom: 'u', say: 'у', set: 'f', note: 'утро — buổi sáng (không phải "y")' },
        { ch: 'Х х', rom: 'kh', say: 'ха', set: 'f', note: 'хлеб — bánh mì (không phải "x")' },
      ],
    },
    {
      id: 'new', title: 'Chữ mới', native: 'Новые буквы',
      desc: 'Các chữ riêng của bảng Kirin, gồm cả dấu cứng Ъ và dấu mềm Ь.',
      items: [
        { ch: 'Б б', rom: 'b', say: 'ба', set: 'l', note: 'брат — anh em trai' },
        { ch: 'Г г', rom: 'g', say: 'га', set: 'l', note: 'город — thành phố' },
        { ch: 'Д д', rom: 'd (đ)', say: 'да', set: 'l', note: 'да — vâng' },
        { ch: 'Ж ж', rom: 'zh (gi nặng)', say: 'жа', set: 's', note: 'жена — vợ' },
        { ch: 'З з', rom: 'z (d miền Bắc)', say: 'за', set: 's', note: 'зима — mùa đông' },
        { ch: 'И и', rom: 'i', say: 'и', set: 'i', note: 'и — và' },
        { ch: 'Й й', rom: 'y (i ngắn)', say: 'мой', set: 'i', note: 'мой — của tôi', listen: false },
        { ch: 'Л л', rom: 'l', say: 'ла', set: 'l', note: 'лампа — đèn' },
        { ch: 'П п', rom: 'p', say: 'па', set: 'l', note: 'папа — bố' },
        { ch: 'Ф ф', rom: 'f (ph)', say: 'фа', set: 'l', note: 'фото — ảnh' },
        { ch: 'Ц ц', rom: 'ts', say: 'ца', set: 's', note: 'центр — trung tâm' },
        { ch: 'Ч ч', rom: 'ch', say: 'ча', set: 's', note: 'чай — trà' },
        { ch: 'Ш ш', rom: 'sh (s cứng)', say: 'ша', set: 's', note: 'школа — trường học' },
        { ch: 'Щ щ', rom: 'shch (s mềm, dài)', say: 'ща', set: 's', note: 'борщ — súp borsch' },
        { ch: 'Ы ы', rom: 'y (ư-i)', say: 'ты', set: 'i', note: 'ты — bạn; мы — chúng tôi' },
        { ch: 'Ю ю', rom: 'yu (iu)', say: 'ю', set: 'y', note: 'юг — phía nam' },
        { ch: 'Я я', rom: 'ya (ia)', say: 'я', set: 'y', note: 'я — tôi' },
        { ch: 'Ё ё', rom: 'yo (iô)', say: 'ё', set: 'y', note: 'ёлка — cây thông; luôn mang trọng âm' },
        { ch: 'Ъ ъ', rom: 'dấu cứng', say: 'подъезд', set: 'z', note: 'подъезд — lối vào; tách âm, không đọc', listen: false },
        { ch: 'Ь ь', rom: 'dấu mềm', say: 'мать', set: 'z', note: 'мать — mẹ; làm mềm phụ âm trước', listen: false },
      ],
    },
  ],
  lessons: [
    {
      id: 'p1', kind: 'pronunciation', title: 'Trọng âm và nguyên âm "O" đọc thành "A"',
      summary: 'Mỗi từ có một âm tiết nhấn; nguyên âm không nhấn bị đọc nhẹ đi.',
      body: [
        'Mỗi từ tiếng Nga có đúng một âm tiết mang trọng âm, và vị trí trọng âm phải học thuộc cùng với từ (sách học thường đánh dấu sắc: молоко́).',
        'О không mang trọng âm đọc gần như "a": молоко́ [malakó], хорошо́ [kharashó]. Đây gọi là hiện tượng "akanye".',
        'Е và Я không mang trọng âm đọc gần "i": сестра́ [sistrá], язы́к [yizýk].',
        'Ё luôn mang trọng âm. Trong văn bản thường Ё hay được viết thành Е.',
      ],
      examples: [
        { t: 'молоко́', r: 'malakó', v: 'sữa' },
        { t: 'хорошо́', r: 'kharashó', v: 'tốt' },
        { t: 'спаси́бо', r: 'spasíba', v: 'cảm ơn' },
        { t: 'вода́', r: 'vadá', v: 'nước' },
        { t: 'Москва́', r: 'Maskvá', v: 'Moskva' },
      ],
      quiz: [
        { q: '"хорошо" (trọng âm cuối) đọc gần với…', o: ['kharashó', 'khoroshó', 'khóroshó', 'kharásha'], a: 0 },
        { q: 'O không mang trọng âm thường đọc thành…', o: ['a', 'u', 'i', 'câm'], a: 0 },
      ],
    },
    {
      id: 'p2', kind: 'pronunciation', title: 'Phụ âm cứng và mềm, dấu mềm Ь',
      summary: 'Trước Е Ё И Ю Я và Ь, phụ âm được làm "mềm".',
      body: [
        'Hầu hết phụ âm tiếng Nga có hai dạng: cứng và mềm. Phụ âm mềm đọc với lưỡi nâng lên như chuẩn bị đọc "i".',
        'Phụ âm trở nên mềm khi đứng trước Е, Ё, И, Ю, Я hoặc Ь. Trước А, О, У, Ы, Э thì cứng.',
        'Ь không có âm riêng, chỉ làm mềm phụ âm đứng trước. Cứng/mềm có thể đổi nghĩa: брат (anh em trai) ≠ брать (lấy).',
        'Ж, Ш, Ц luôn cứng; Ч, Щ luôn mềm.',
      ],
      examples: [
        { t: 'мат / мать', r: 'mat / mat’', v: 'chiếu tướng / mẹ' },
        { t: 'брат / брать', r: 'brat / brat’', v: 'anh em trai / lấy' },
        { t: 'день', r: 'den’', v: 'ngày' },
        { t: 'учи́тель', r: 'uchítel’', v: 'giáo viên' },
        { t: 'нет', r: 'n’et', v: 'không (Н mềm trước Е)' },
      ],
      quiz: [
        { q: 'Chữ nào KHÔNG làm mềm phụ âm đứng trước?', o: ['Ы', 'И', 'Я', 'Ь'], a: 0 },
        { q: 'Dấu mềm Ь có âm riêng không?', o: ['Không, chỉ làm mềm phụ âm trước', 'Có, đọc là "i"', 'Có, đọc là "ư"', 'Đọc là "y"'], a: 0 },
      ],
    },
    {
      id: 'p3', kind: 'pronunciation', title: 'Vô thanh hóa và đồng hóa',
      summary: 'Б В Г Д Ж З cuối từ đọc thành П Ф К Т Ш С.',
      body: [
        'Phụ âm hữu thanh ở cuối từ bị đọc thành phụ âm vô thanh tương ứng: б→п, в→ф, г→к, д→т, ж→ш, з→с.',
        'Khi hai phụ âm đứng cạnh nhau, phụ âm trước "bắt chước" phụ âm sau: вокза́л [vagzál], в шко́ле [fshkóli].',
        'Nhờ quy tắc này, cách viết giữ nguyên gốc từ còn cách đọc thì tự nhiên hơn.',
      ],
      tables: [{ title: 'Cặp hữu thanh – vô thanh', head: ['Hữu thanh', 'б', 'в', 'г', 'д', 'ж', 'з'], rows: [['Vô thanh', 'п', 'ф', 'к', 'т', 'ш', 'с']] }],
      examples: [
        { t: 'хлеб', r: 'khl’ep', v: 'bánh mì (б → п)' },
        { t: 'го́род', r: 'górat', v: 'thành phố (д → т)' },
        { t: 'друг', r: 'druk', v: 'bạn (г → к)' },
        { t: 'Ивано́в', r: 'Ivanóf', v: 'Ivanov (в → ф)' },
        { t: 'в шко́ле', r: 'fshkóle', v: 'ở trường (в → ф trước ш)' },
      ],
      quiz: [
        { q: '"друг" (bạn) đọc là…', o: ['druk', 'drug', 'drux', 'druv'], a: 0 },
        { q: 'Chữ Д ở cuối từ đọc thành…', o: ['т', 'д', 'з', 'câm'], a: 0 },
      ],
    },
    {
      id: 'p4', kind: 'pronunciation', title: 'Các âm khó: Ы, Р, Ж/Ш, Щ',
      summary: 'Luyện các âm không có trong tiếng Việt.',
      body: [
        'Ы: đặt lưỡi như đọc "ư" rồi lướt về "i", không tròn môi. мы (chúng tôi) ≠ ми.',
        'Р: âm rung đầu lưỡi (như "r" rung của giọng miền Nam khi nhấn mạnh).',
        'Ж và Ш: âm "gi"/"s" cứng, lưỡi lùi về sau, môi hơi tròn. Luôn cứng: жить đọc [zhyt’].',
        'Щ: "s" mềm và kéo dài, gần "sh-sh" nhẹ: борщ [borshch], ещё [yishchó].',
      ],
      examples: [
        { t: 'мы', r: 'my', v: 'chúng tôi' },
        { t: 'сыр', r: 'syr', v: 'phô mai' },
        { t: 'ры́ба', r: 'rýba', v: 'cá' },
        { t: 'журна́л', r: 'zhurnál', v: 'tạp chí' },
        { t: 'борщ', r: 'borshch', v: 'súp borsch' },
      ],
      quiz: [
        { q: 'Âm nào đọc như "ư" lướt sang "i"?', o: ['Ы', 'И', 'Й', 'Ю'], a: 0 },
        { q: 'Chữ Р đọc là…', o: ['r rung', 'p', 'ph', 'rờ nhẹ không rung'], a: 0 },
      ],
    },
    {
      id: 'p5', kind: 'pronunciation', title: 'Ngữ điệu câu hỏi',
      summary: 'Câu hỏi có/không giữ nguyên trật tự, chỉ đổi ngữ điệu.',
      body: [
        'Tiếng Nga không đảo từ khi hỏi có/không. "Это Анна." (Đây là Anna) → "Это Анна?" (Đây là Anna à?).',
        'Trong câu hỏi, giọng nâng cao rõ ở từ được hỏi rồi hạ xuống ngay sau đó.',
        'Câu hỏi có từ để hỏi (что, где…) thì nhấn vào từ để hỏi, cuối câu hạ giọng.',
      ],
      examples: [
        { t: 'Это А́нна.', r: 'Éta Ánna.', v: 'Đây là Anna.' },
        { t: 'Это А́нна?', r: 'Éta Ánna?', v: 'Đây là Anna à?' },
        { t: 'Ты студе́нт?', r: 'Ty studént?', v: 'Bạn là sinh viên à?' },
        { t: 'Где метро́?', r: 'Gde metró?', v: 'Tàu điện ngầm ở đâu?' },
      ],
      quiz: [
        { q: 'Để hỏi "Bạn là bác sĩ à?" từ "Ты врач." ta…', o: ['Giữ nguyên, lên giọng: Ты врач?', 'Đảo: Врач ты?', 'Thêm "ли" bắt buộc', 'Thêm "да" cuối câu'], a: 0 },
        { q: '"Это" đọc là…', o: ['Éta', 'Éto (ô rõ)', 'Ito', 'Eta không trọng âm'], a: 0 },
      ],
    },
    {
      id: 'g1', kind: 'grammar', title: 'Không mạo từ, không "là" ở hiện tại',
      summary: 'Я студент = Tôi (là) sinh viên.',
      body: [
        'Tiếng Nga không có mạo từ (a/the).',
        'Ở thì hiện tại, động từ "là" (быть) bị lược bỏ: Я студент. Trong văn viết có thể dùng gạch ngang: Москва — столица России.',
        'Это = "đây là / đó là", không đổi theo giống số: Это книга. Это мой брат.',
      ],
      examples: [
        { t: 'Я студе́нт.', r: 'Ya studént.', v: 'Tôi là sinh viên.' },
        { t: 'Он врач.', r: 'On vrach.', v: 'Anh ấy là bác sĩ.' },
        { t: 'Это кни́га.', r: 'Éta kníga.', v: 'Đây là quyển sách.' },
        { t: 'Москва́ — столи́ца Росси́и.', r: 'Maskvá — stalítsa Rassíi.', v: 'Moskva là thủ đô nước Nga.' },
      ],
      quiz: [
        { q: '"Tôi là giáo viên" (учитель)?', o: ['Я учитель.', 'Я есть учитель.', 'Я это учитель.', 'Я быть учитель.'], a: 0 },
        { q: 'Tiếng Nga có mạo từ như "the" không?', o: ['Không', 'Có', 'Chỉ với danh từ giống cái', 'Chỉ ở số nhiều'], a: 0 },
      ],
    },
    {
      id: 'g2', kind: 'grammar', title: 'Đại từ nhân xưng; ты và вы',
      summary: 'я, ты, он, она, оно, мы, вы, они.',
      body: [
        'ты: bạn (thân mật, với bạn bè, trẻ em, người nhà). вы: bạn (lịch sự) hoặc các bạn (số nhiều). Với người lạ, người lớn tuổi dùng вы; khi viết thư có thể viết hoa Вы.',
        'он/она/оно (anh ấy/cô ấy/nó) dùng cả cho đồ vật theo giống ngữ pháp: стол → он, книга → она.',
      ],
      tables: [{ title: 'Đại từ', head: ['Ngôi', 'Số ít', 'Số nhiều'], rows: [['1', 'я (tôi)', 'мы (chúng tôi)'], ['2', 'ты (bạn)', 'вы (các bạn / ngài)'], ['3', 'он / она / оно', 'они (họ)']] }],
      examples: [
        { t: 'Как тебя́ зову́т?', r: 'Kak tibyá zavút?', v: 'Bạn tên gì? (thân mật)' },
        { t: 'Как вас зову́т?', r: 'Kak vas zavút?', v: 'Ngài tên gì? (lịch sự)' },
        { t: 'Где кни́га? — Она́ там.', r: 'Gde kníga? — Aná tam.', v: 'Quyển sách đâu? — Nó ở đó.' },
        { t: 'Мы из Вьетна́ма.', r: 'My iz V’yetnáma.', v: 'Chúng tôi đến từ Việt Nam.' },
      ],
      quiz: [
        { q: 'Nói với một giáo sư lớn tuổi, dùng…', o: ['вы', 'ты', 'он', 'они'], a: 0 },
        { q: '"Cái bàn" (стол, giống đực) thay bằng…', o: ['он', 'она', 'оно', 'они'], a: 0 },
      ],
    },
    {
      id: 'g3', kind: 'grammar', title: 'Giống của danh từ',
      summary: 'Đực (phụ âm), cái (-а/-я), trung (-о/-е). Tính từ và "của tôi" đổi theo.',
      body: [
        'Giống đực: thường kết thúc bằng phụ âm hoặc -й: стол (bàn), музей.',
        'Giống cái: -а, -я: кни́га (sách), неде́ля (tuần). Nhiều từ tận cùng -ь có thể đực hoặc cái (день đực, ночь cái).',
        'Giống trung: -о, -е: окно́ (cửa sổ), мо́ре (biển).',
        'Ngoại lệ tự nhiên: па́па (bố), мужчи́на (đàn ông) là giống đực dù tận cùng -а.',
        '"Của tôi": мой (đực), моя́ (cái), моё (trung), мои́ (số nhiều).',
      ],
      tables: [{ title: 'Ví dụ', head: ['Giống', 'Danh từ', 'Của tôi'], rows: [['Đực', 'стол', 'мой стол'], ['Cái', 'кни́га', 'моя́ кни́га'], ['Trung', 'окно́', 'моё окно́'], ['Số nhiều', 'кни́ги', 'мои́ кни́ги']] }],
      examples: [
        { t: 'Это мой брат.', r: 'Éta moy brat.', v: 'Đây là anh trai tôi.' },
        { t: 'Это моя́ ма́ма.', r: 'Éta mayá máma.', v: 'Đây là mẹ tôi.' },
        { t: 'Это моё письмо́.', r: 'Éta mayó pis’mó.', v: 'Đây là lá thư của tôi.' },
      ],
      quiz: [
        { q: '"машина" (xe hơi) thuộc giống…', o: ['cái', 'đực', 'trung', 'không xác định'], a: 0 },
        { q: '"Cửa sổ của tôi" (окно)?', o: ['моё окно', 'мой окно', 'моя окно', 'мои окно'], a: 0 },
      ],
    },
    {
      id: 'g4', kind: 'grammar', title: 'Chia động từ thì hiện tại',
      summary: 'Nhóm 1 (-ю/-ешь…), nhóm 2 (-ю/-ишь…).',
      body: [
        'Động từ đổi đuôi theo ngôi. Hầu hết động từ thuộc 2 nhóm chia.',
        'Nhóm 1 (phần lớn động từ -ать, -ять): чита́ть → я чита́ю, ты чита́ешь…',
        'Nhóm 2 (phần lớn động từ -ить): говори́ть → я говорю́, ты говори́шь…',
        'Vì đuôi đã cho biết ngôi, trong lời nói có thể bỏ đại từ, nhưng người mới học nên giữ.',
      ],
      tables: [{ title: 'Hai nhóm chia', head: ['', 'чита́ть (đọc) — nhóm 1', 'говори́ть (nói) — nhóm 2'], rows: [['я', 'чита́ю', 'говорю́'], ['ты', 'чита́ешь', 'говори́шь'], ['он/она́', 'чита́ет', 'говори́т'], ['мы', 'чита́ем', 'говори́м'], ['вы', 'чита́ете', 'говори́те'], ['они́', 'чита́ют', 'говоря́т']] }],
      examples: [
        { t: 'Я чита́ю кни́гу.', r: 'Ya chitáyu knígu.', v: 'Tôi đọc sách.' },
        { t: 'Ты говори́шь по-ру́сски?', r: 'Ty gavarísh’ pa-rússki?', v: 'Bạn nói tiếng Nga không?' },
        { t: 'Мы рабо́таем в Ханое.', r: 'My rabótayem v Khanóye.', v: 'Chúng tôi làm việc ở Hà Nội.' },
        { t: 'Они́ живу́т в Москве́.', r: 'Aní zhivút v Maskvé.', v: 'Họ sống ở Moskva.' },
      ],
      quiz: [
        { q: 'знать (biết, nhóm 1): я ___', o: ['зна́ю', 'зна́ешь', 'зна́ет', 'знать'], a: 0 },
        { q: 'говорить: они ___', o: ['говоря́т', 'говори́т', 'говорю́т', 'говори́те'], a: 0 },
      ],
    },
    {
      id: 'g5', kind: 'grammar', title: 'Thì quá khứ theo giống',
      summary: 'Bỏ -ть, thêm -л (đực), -ла (cái), -ло (trung), -ли (số nhiều).',
      body: [
        'Quá khứ không chia theo ngôi mà theo giống và số của chủ ngữ.',
        'Người nói là nữ dùng đuôi -ла: я чита́ла; người nói là nam dùng -л: я чита́л.',
        '"Đã là / đã ở": был, была́, бы́ло, бы́ли.',
      ],
      tables: [{ title: 'чита́ть → quá khứ', head: ['Chủ ngữ', 'Dạng'], rows: [['он / я (nam)', 'чита́л'], ['она / я (nữ)', 'чита́ла'], ['оно', 'чита́ло'], ['они / мы / вы', 'чита́ли']] }],
      examples: [
        { t: 'Вчера́ я был до́ма.', r: 'Fchirá ya byl dóma.', v: 'Hôm qua tôi (nam) ở nhà.' },
        { t: 'Она́ рабо́тала в банке.', r: 'Aná rabótala v bánke.', v: 'Cô ấy đã làm ở ngân hàng.' },
        { t: 'Мы смотре́ли фильм.', r: 'My smatréli fil’m.', v: 'Chúng tôi đã xem phim.' },
      ],
      quiz: [
        { q: 'Một cô gái nói "tôi đã hiểu" (понять → понял-)?', o: ['Я поняла́.', 'Я по́нял.', 'Я по́няли.', 'Я по́няло.'], a: 0 },
        { q: '"Họ đã ở đó" — был/была/были?', o: ['Они́ бы́ли там.', 'Они́ был там.', 'Они́ была́ там.', 'Они́ есть там.'], a: 0 },
      ],
    },
    {
      id: 'g6', kind: 'grammar', title: 'Phủ định: не và нет',
      summary: 'не đứng trước từ bị phủ định; нет = "không" (trả lời) / "không có".',
      body: [
        'не đặt ngay trước từ bị phủ định, thường là động từ: Я не зна́ю.',
        'нет: trả lời "không" (Нет, спаси́бо), hoặc "không có": У меня́ нет вре́мени (tôi không có thời gian) — danh từ sau нет chuyển sang sinh cách.',
      ],
      examples: [
        { t: 'Я не понима́ю.', r: 'Ya ni panimáyu.', v: 'Tôi không hiểu.' },
        { t: 'Он не студе́нт.', r: 'On ni studént.', v: 'Anh ấy không phải sinh viên.' },
        { t: 'Нет, спаси́бо.', r: 'Net, spasíba.', v: 'Không, cảm ơn.' },
        { t: 'У меня́ нет вре́мени.', r: 'U minyá net vrémeni.', v: 'Tôi không có thời gian.' },
      ],
      quiz: [
        { q: '"Tôi không nói tiếng Anh" (говорю по-английски)?', o: ['Я не говорю́ по-англи́йски.', 'Я нет говорю́ по-англи́йски.', 'Не я говорю́ по-англи́йски.', 'Я говорю́ не.'], a: 0 },
        { q: 'Trả lời "Không" cho câu hỏi có/không dùng…', o: ['Нет', 'Не', 'Ни', 'Да'], a: 0 },
      ],
    },
    {
      id: 'g7', kind: 'grammar', title: 'Sáu cách và giới cách với в / на',
      summary: 'Danh từ đổi đuôi theo vai trò trong câu. Bắt đầu với "ở đâu": в/на + -е.',
      body: [
        'Tiếng Nga có 6 cách: chủ cách (chủ ngữ), sinh cách (của, không có), tặng cách (cho ai), đối cách (tân ngữ), công cụ cách (với, bằng), giới cách (về, ở).',
        'Giới cách trả lời câu hỏi где? (ở đâu?) sau в (trong) hoặc на (trên, ở — dùng cho sự kiện, quảng trường, công việc…). Đuôi thường là -е: Москва → в Москве́, шко́ла → в шко́ле, рабо́та → на рабо́те.',
        'Danh từ tận cùng -ия → -ии: Росси́я → в Росси́и.',
      ],
      tables: [{ title: '6 cách — câu hỏi', head: ['Cách', 'Hỏi', 'Dùng khi'], rows: [['Chủ cách', 'кто? что?', 'chủ ngữ'], ['Sinh cách', 'кого́? чего́?', 'của, không có, sau số'], ['Tặng cách', 'кому́? чему́?', 'cho ai'], ['Đối cách', 'кого́? что?', 'tân ngữ, đi đâu (в/на)'], ['Công cụ cách', 'кем? чем?', 'với, bằng'], ['Giới cách', 'о ком? где?', 'về ai/gì, ở đâu']] }],
      examples: [
        { t: 'Я живу́ в Москве́.', r: 'Ya zhivú v Maskvé.', v: 'Tôi sống ở Moskva.' },
        { t: 'Он на рабо́те.', r: 'On na rabóte.', v: 'Anh ấy đang ở chỗ làm.' },
        { t: 'Мы в шко́ле.', r: 'My f shkóle.', v: 'Chúng tôi ở trường.' },
        { t: 'Она́ живёт в Росси́и.', r: 'Aná zhivyót v Rassíi.', v: 'Cô ấy sống ở Nga.' },
      ],
      quiz: [
        { q: '"Ở Hà Nội" (Ханой, giống đực) là…', o: ['в Ханое', 'в Ханой', 'на Ханой', 'в Ханоя'], a: 0 },
        { q: 'Câu hỏi "где?" dùng với cách nào?', o: ['Giới cách', 'Đối cách', 'Tặng cách', 'Chủ cách'], a: 0 },
      ],
    },
    {
      id: 'g8', kind: 'grammar', title: 'Tân ngữ (đối cách) và "tôi có": у меня есть',
      summary: 'Danh từ giống cái -а → -у khi làm tân ngữ; sở hữu dùng у + sinh cách + есть.',
      body: [
        'Đối cách (tân ngữ): danh từ giống cái đổi -а → -у, -я → -ю: Я люблю́ ма́му. Danh từ đực/trung chỉ đồ vật giữ nguyên: Я чита́ю журна́л.',
        'Danh từ đực chỉ người/động vật thêm -а: Я зна́ю бра́та.',
        '"Tôi có…" không dùng động từ "có" mà nói "ở tôi có": У меня́ есть + N (chủ cách). Tương tự у тебя́, у него́, у неё, у нас, у вас, у них.',
      ],
      examples: [
        { t: 'Я люблю́ ма́му.', r: 'Ya lyublyú mámu.', v: 'Tôi yêu mẹ.' },
        { t: 'Я пью ко́фе.', r: 'Ya p’yu kófe.', v: 'Tôi uống cà phê.' },
        { t: 'У меня́ есть брат.', r: 'U minyá yest’ brat.', v: 'Tôi có một anh/em trai.' },
        { t: 'У тебя́ есть вре́мя?', r: 'U tibyá yest’ vrémya?', v: 'Bạn có thời gian không?' },
      ],
      quiz: [
        { q: 'Я чита́ю ___ (кни́га).', o: ['кни́гу', 'кни́га', 'кни́ге', 'кни́ги'], a: 0 },
        { q: '"Cô ấy có con mèo" (кошка)?', o: ['У неё есть ко́шка.', 'Она есть ко́шка.', 'Она́ име́ть ко́шку.', 'У она есть ко́шка.'], a: 0 },
      ],
    },
    {
      id: 'g9', kind: 'grammar', title: 'Từ để hỏi',
      summary: 'что, кто, где, куда́, когда́, как, почему́, ско́лько.',
      body: [
        'Từ để hỏi đứng đầu câu, không cần trợ động từ: Где ты живёшь? (Bạn sống ở đâu?)',
        'где = ở đâu (vị trí), куда́ = đi đâu (hướng). Как = thế nào; ско́лько = bao nhiêu.',
      ],
      tables: [{ title: 'Từ để hỏi', head: ['Tiếng Nga', 'Nghĩa'], rows: [['что', 'cái gì'], ['кто', 'ai'], ['где', 'ở đâu'], ['куда́', 'đi đâu'], ['когда́', 'khi nào'], ['как', 'thế nào'], ['почему́', 'tại sao'], ['ско́лько', 'bao nhiêu']] }],
      examples: [
        { t: 'Что э́то?', r: 'Shto éta?', v: 'Đây là cái gì?' },
        { t: 'Кто он?', r: 'Kto on?', v: 'Anh ấy là ai?' },
        { t: 'Куда́ ты идёшь?', r: 'Kudá ty idyósh’?', v: 'Bạn đi đâu?' },
        { t: 'Ско́лько сто́ит?', r: 'Skól’ka stóit?', v: 'Giá bao nhiêu?' },
      ],
      quiz: [
        { q: '"Bạn đang đi đâu?" dùng…', o: ['куда́', 'где', 'когда́', 'что'], a: 0 },
        { q: '"что" đọc là…', o: ['shto', 'chto', 'chtô', 'sto'], a: 0 },
      ],
    },
    {
      id: 'g10', kind: 'grammar', title: 'Muốn, có thể, cần: хочу́, могу́, на́до',
      summary: 'хоте́ть, мочь + động từ nguyên thể; мне на́до / мо́жно.',
      body: [
        'хоте́ть (muốn): я хочу́, ты хо́чешь, он хо́чет, мы хоти́м, вы хоти́те, они хотя́т.',
        'мочь (có thể): я могу́, ты мо́жешь, он мо́жет, мы мо́жем, вы мо́жете, они мо́гут.',
        'Sau hai động từ này dùng động từ nguyên thể: Я хочу́ спать.',
        'Мне на́до + nguyên thể = tôi cần/phải… Мо́жно? = Được không?',
      ],
      examples: [
        { t: 'Я хочу́ пить.', r: 'Ya khachú pit’.', v: 'Tôi muốn uống (tôi khát).' },
        { t: 'Вы мо́жете помо́чь?', r: 'Vy mózhete pamóch’?', v: 'Anh/chị giúp tôi được không?' },
        { t: 'Мне на́до идти́.', r: 'Mne náda ittí.', v: 'Tôi phải đi.' },
        { t: 'Мо́жно войти́?', r: 'Mózhna vaytí?', v: 'Vào được không?' },
      ],
      quiz: [
        { q: '"Tôi muốn ăn" (есть)?', o: ['Я хочу́ есть.', 'Я хоте́ть есть.', 'Я хочу́ ем.', 'Мне хочу́ есть.'], a: 0 },
        { q: '"Tôi phải làm việc"?', o: ['Мне на́до рабо́тать.', 'Я на́до рабо́тать.', 'Мне на́до рабо́таю.', 'Я могу́ рабо́таю.'], a: 0 },
      ],
    },
  ],
};
