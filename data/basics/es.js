// Spanish basics: alphabet and sounds, pronunciation rules and core grammar.
window.LT_BASICS = window.LT_BASICS || {};
window.LT_BASICS['es'] = {
  intro: 'Tiếng Tây Ban Nha dùng chữ Latin (27 chữ, thêm ñ) và gần như "đọc sao viết vậy". Chỉ cần nắm 5 nguyên âm, vài phụ âm đặc biệt và quy tắc trọng âm là đọc được mọi từ.',
  groups: [
    {
      id: 'vowels', title: 'Nguyên âm', native: 'Vocales',
      desc: '5 nguyên âm luôn đọc rõ, ngắn, không bao giờ câm. Bấm để nghe từ ví dụ.',
      items: [
        { ch: 'a', rom: 'a', say: 'casa', note: 'casa — nhà' },
        { ch: 'e', rom: 'ê', say: 'mesa', note: 'mesa — bàn' },
        { ch: 'i', rom: 'i', say: 'sí', note: 'sí — vâng' },
        { ch: 'o', rom: 'ô', say: 'ojo', note: 'ojo — mắt' },
        { ch: 'u', rom: 'u', say: 'uno', note: 'uno — một' },
      ],
    },
    {
      id: 'consonants', title: 'Phụ âm quen thuộc', native: 'Consonantes',
      desc: 'Đọc gần giống tiếng Việt hoặc tiếng Anh.',
      items: [
        { ch: 'b / v', rom: 'b (cả hai giống nhau)', say: 'vino', note: 'bueno — tốt; vino — rượu vang' },
        { ch: 'd', rom: 'đ (giữa từ nhẹ như "th" tiếng Anh)', say: 'dedo', note: 'dedo — ngón tay' },
        { ch: 'f', rom: 'ph', say: 'foto', note: 'foto — ảnh' },
        { ch: 'l', rom: 'l', say: 'luna', note: 'luna — mặt trăng' },
        { ch: 'm', rom: 'm', say: 'mamá', note: 'mamá — mẹ' },
        { ch: 'n', rom: 'n', say: 'no', note: 'no — không' },
        { ch: 'p', rom: 'p (không bật hơi)', say: 'papá', note: 'papá — bố' },
        { ch: 's', rom: 'x', say: 'sol', note: 'sol — mặt trời' },
        { ch: 't', rom: 't (không bật hơi)', say: 'todo', note: 'todo — tất cả' },
        { ch: 'ch', rom: 'ch (như "ch" tiếng Anh)', say: 'chico', note: 'chico — cậu bé' },
        { ch: 'k / w', rom: 'k / u (chỉ ở từ mượn)', say: 'kilo', note: 'kilo, whisky' },
      ],
    },
    {
      id: 'special', title: 'Chữ và âm đặc biệt', native: 'Sonidos especiales',
      desc: 'Những chữ đọc khác tiếng Việt/tiếng Anh — cần học kỹ.',
      items: [
        { ch: 'c', rom: 'k trước a/o/u; th/x trước e/i', say: 'cena', note: 'casa (k), cena (th ở Tây Ban Nha, x ở Mỹ Latin)' },
        { ch: 'z', rom: 'th (Tây Ban Nha) / x (Mỹ Latin)', say: 'zapato', note: 'zapato — giày' },
        { ch: 'g', rom: 'g trước a/o/u; h (khàn) trước e/i', say: 'gente', note: 'gato (g), gente (h khàn)' },
        { ch: 'j', rom: 'h khàn (như "kh")', say: 'jamón', note: 'jamón — giăm bông' },
        { ch: 'h', rom: 'câm (không đọc)', say: 'hola', note: 'hola — xin chào, đọc "ô-la"' },
        { ch: 'll', rom: 'y / gi', say: 'llamar', note: 'llamar — gọi' },
        { ch: 'y', rom: 'y / gi; đứng một mình = i', say: 'yo', note: 'yo — tôi; y — và' },
        { ch: 'ñ', rom: 'nh', say: 'niño', note: 'niño — đứa trẻ; España' },
        { ch: 'qu', rom: 'k (u câm)', say: 'queso', note: 'queso — phô mai' },
        { ch: 'gu (+e/i)', rom: 'g (u câm)', say: 'guitarra', note: 'guitarra, guerra' },
        { ch: 'r', rom: 'r đập một lần', say: 'pero', note: 'pero — nhưng' },
        { ch: 'rr', rom: 'r rung mạnh', say: 'perro', note: 'perro — con chó; r đầu từ cũng rung: rojo' },
        { ch: 'x', rom: 'ks (México: h khàn)', say: 'taxi', note: 'taxi, examen' },
      ],
    },
  ],
  lessons: [
    {
      id: 'p1', kind: 'pronunciation', title: 'Năm nguyên âm — đọc sao viết vậy',
      summary: 'a e i o u luôn đọc rõ ràng, không biến đổi.',
      body: [
        'Tiếng Tây Ban Nha chỉ có 5 nguyên âm: a (a), e (ê), i (i), o (ô), u (u). Chúng ngắn, rõ và không đổi dù có trọng âm hay không.',
        'Mọi chữ đều được đọc (trừ h, và u trong que/qui/gue/gui). Vì vậy nhìn chữ là đọc được.',
        'Hai nguyên âm cạnh nhau: nguyên âm mạnh (a, e, o) + yếu (i, u) đọc lướt thành một âm tiết: bueno (bu-ê-nô → "buê-nô"), Europa.',
      ],
      examples: [
        { t: 'casa', r: '', v: 'nhà (ca-xa)' },
        { t: 'mesa', r: '', v: 'bàn (mê-xa)' },
        { t: 'libro', r: '', v: 'sách (li-brô)' },
        { t: 'luna', r: '', v: 'mặt trăng (lu-na)' },
        { t: 'bueno', r: '', v: 'tốt (buê-nô)' },
      ],
      quiz: [
        { q: 'Chữ "e" trong "mesa" đọc như…', o: ['ê', 'i', 'ơ', 'a'], a: 0 },
        { q: 'Tiếng Tây Ban Nha có mấy nguyên âm?', o: ['5', '7', '12', '3'], a: 0 },
      ],
    },
    {
      id: 'p2', kind: 'pronunciation', title: 'C, Z, G, J và H câm',
      summary: 'Cách đọc c/g thay đổi theo nguyên âm theo sau.',
      body: [
        'C + a/o/u = "k" (casa, cosa, cuna). C + e/i = "th" như trong "think" (ở Tây Ban Nha) hoặc "x" (Mỹ Latin): cena, cine.',
        'Z luôn đọc như c + e/i: zapato, azul.',
        'G + a/o/u = "g" (gato). G + e/i = "h" khàn giống j (gente, gira). Muốn âm "g" trước e/i thì viết gue/gui: guerra, guitarra.',
        'J luôn là âm "h" khàn gần "kh": jamón, jugo.',
        'H không bao giờ đọc: hola [ô-la], hotel [ô-ten].',
      ],
      examples: [
        { t: 'gracias', r: '', v: 'cảm ơn (g + r)' },
        { t: 'cine', r: '', v: 'rạp phim (thi-nê / xi-nê)' },
        { t: 'gente', r: '', v: 'mọi người (hên-tê, h khàn)' },
        { t: 'jugo', r: '', v: 'nước ép (hu-gô)' },
        { t: 'hola', r: '', v: 'xin chào (ô-la)' },
      ],
      quiz: [
        { q: 'Chữ nào KHÔNG được đọc?', o: ['h', 'j', 'g', 'z'], a: 0 },
        { q: '"ge" trong "gente" đọc như…', o: ['hê (h khàn)', 'ghê', 'giê', 'kê'], a: 0 },
      ],
    },
    {
      id: 'p3', kind: 'pronunciation', title: 'R đơn và RR rung',
      summary: 'r giữa từ đập lưỡi một lần; rr và r đầu từ rung nhiều lần.',
      body: [
        'r giữa các nguyên âm: đầu lưỡi đập nhẹ một lần vào lợi — gần âm "đ" nhanh: pero ≈ "pê-đô" rất nhanh.',
        'rr (và r đứng đầu từ, sau n, l, s): rung lưỡi nhiều lần: perro, rojo, Enrique.',
        'Phân biệt r / rr làm đổi nghĩa: pero (nhưng) ≠ perro (con chó); caro (đắt) ≠ carro (xe).',
      ],
      examples: [
        { t: 'pero', r: '', v: 'nhưng' },
        { t: 'perro', r: '', v: 'con chó' },
        { t: 'caro', r: '', v: 'đắt' },
        { t: 'carro', r: '', v: 'xe hơi (Mỹ Latin)' },
        { t: 'rojo', r: '', v: 'màu đỏ (r đầu từ rung)' },
      ],
      quiz: [
        { q: '"perro" nghĩa là…', o: ['con chó', 'nhưng', 'đắt', 'xe hơi'], a: 0 },
        { q: 'R ở đầu từ (rosa) đọc thế nào?', o: ['Rung mạnh như rr', 'Đập nhẹ một lần', 'Câm', 'Như "h"'], a: 0 },
      ],
    },
    {
      id: 'p4', kind: 'pronunciation', title: 'Trọng âm và dấu sắc',
      summary: 'Hai quy tắc mặc định; dấu sắc đánh dấu ngoại lệ.',
      body: [
        'Từ tận cùng bằng nguyên âm, n hoặc s: nhấn âm tiết áp chót — CA-sa, HA-blan, LI-bros.',
        'Từ tận cùng bằng phụ âm khác (trừ n, s): nhấn âm tiết cuối — ha-BLAR, ciu-DAD, es-pa-ÑOL.',
        'Nếu từ không theo quy tắc trên, dấu sắc (´) cho biết âm tiết nhấn: ca-FÉ, te-LÉ-fo-no, can-CIÓN.',
        'Dấu sắc cũng phân biệt nghĩa: sí (vâng) / si (nếu), él (anh ấy) / el (mạo từ), tú (bạn) / tu (của bạn). Từ để hỏi luôn có dấu: qué, dónde, cómo.',
      ],
      examples: [
        { t: 'casa', r: '', v: 'CA-sa (nguyên âm → áp chót)' },
        { t: 'hablar', r: '', v: 'ha-BLAR (phụ âm r → cuối)' },
        { t: 'café', r: '', v: 'ca-FÉ (có dấu)' },
        { t: 'teléfono', r: '', v: 'te-LÉ-fo-no' },
        { t: 'canción', r: '', v: 'can-CIÓN (bài hát)' },
      ],
      quiz: [
        { q: '"ciudad" nhấn âm tiết nào?', o: ['dad (cuối)', 'ciu (đầu)', 'không nhấn', 'cả hai'], a: 0, why: 'Tận cùng bằng d (không phải n/s) → nhấn âm tiết cuối.' },
        { q: '"joven" (trẻ) nhấn âm tiết nào?', o: ['jo (áp chót)', 'ven (cuối)', 'không nhấn', 'cả hai'], a: 0 },
      ],
    },
    {
      id: 'p5', kind: 'pronunciation', title: 'LL, Y, Ñ và QU/GU',
      summary: 'Các tổ hợp chữ có cách đọc riêng.',
      body: [
        'll và y (trước nguyên âm) đọc như "y/gi": llamar, calle, yo. Ở Argentina đọc gần "sh".',
        'Chữ y đứng một mình (nghĩa là "và") hoặc cuối từ đọc là "i": y, hoy, muy.',
        'ñ đọc "nh": España, mañana, niño.',
        'qu = "k", u câm: queso, aquí. gu + e/i = "g", u câm: guerra. Muốn đọc u thì thêm hai chấm: pingüino.',
      ],
      examples: [
        { t: 'Me llamo Ana.', r: '', v: 'Tôi tên là Ana.' },
        { t: 'mañana', r: '', v: 'ngày mai / buổi sáng (ma-nha-na)' },
        { t: 'España', r: '', v: 'Tây Ban Nha (ét-pa-nha)' },
        { t: 'aquí', r: '', v: 'ở đây (a-ki)' },
        { t: 'muy bien', r: '', v: 'rất tốt (mui biên)' },
      ],
      quiz: [
        { q: '"queso" đọc gần với…', o: ['kê-xô', 'quê-xô', 'kuê-xô', 'guê-xô'], a: 0 },
        { q: 'Chữ ñ đọc như…', o: ['nh', 'n', 'ng', 'ny tách rời'], a: 0 },
      ],
    },
    {
      id: 'g1', kind: 'grammar', title: 'Giống và mạo từ',
      summary: 'Mọi danh từ là giống đực hoặc cái: el/la (the), un/una (a).',
      body: [
        'Danh từ tận cùng -o thường giống đực (el libro), -a thường giống cái (la casa). Có ngoại lệ: el día (ngày), la mano (tay), el problema.',
        'Mạo từ xác định: el (đực, số ít), la (cái, số ít), los (đực, số nhiều), las (cái, số nhiều).',
        'Mạo từ không xác định: un (đực), una (cái), unos/unas (vài).',
        'Số nhiều: tận cùng nguyên âm + s (libros), tận cùng phụ âm + es (ciudades).',
      ],
      tables: [{ title: 'Mạo từ', head: ['', 'Đực', 'Cái'], rows: [['Xác định số ít', 'el libro', 'la casa'], ['Xác định số nhiều', 'los libros', 'las casas'], ['Không xác định', 'un libro', 'una casa']] }],
      examples: [
        { t: 'el libro', r: '', v: 'quyển sách' },
        { t: 'la casa', r: '', v: 'ngôi nhà' },
        { t: 'los amigos', r: '', v: 'những người bạn' },
        { t: 'una mesa', r: '', v: 'một cái bàn' },
      ],
      quiz: [
        { q: '___ ciudad (thành phố, giống cái)', o: ['la', 'el', 'los', 'un'], a: 0 },
        { q: 'Số nhiều của "el profesor"?', o: ['los profesores', 'los profesors', 'las profesores', 'el profesores'], a: 0 },
      ],
    },
    {
      id: 'g2', kind: 'grammar', title: 'Tính từ đứng sau và hợp giống, số',
      summary: 'un coche rojo, una casa roja, casas rojas.',
      body: [
        'Tính từ thường đứng SAU danh từ (giống tiếng Việt): un coche rojo (một chiếc xe đỏ).',
        'Tính từ đổi theo giống và số của danh từ: rojo / roja / rojos / rojas.',
        'Tính từ tận cùng -e hoặc phụ âm không đổi giống: grande, azul → chỉ thêm -s/-es ở số nhiều.',
      ],
      examples: [
        { t: 'un coche rojo', r: '', v: 'một chiếc xe đỏ' },
        { t: 'una casa roja', r: '', v: 'một ngôi nhà đỏ' },
        { t: 'los chicos altos', r: '', v: 'những cậu bé cao' },
        { t: 'una ciudad grande', r: '', v: 'một thành phố lớn' },
      ],
      quiz: [
        { q: 'la camisa ___ (blanco — trắng)', o: ['blanca', 'blanco', 'blancos', 'blancas'], a: 0 },
        { q: 'los libros ___ (interesante)', o: ['interesantes', 'interesante', 'interesantas', 'interesantos'], a: 0 },
      ],
    },
    {
      id: 'g3', kind: 'grammar', title: 'Đại từ và động từ ser (là)',
      summary: 'yo soy, tú eres, él es… — "ser" dùng cho bản chất, nghề, quốc tịch.',
      body: [
        'Động từ chia theo ngôi nên đại từ chủ ngữ thường được lược bỏ: Soy estudiante = (Yo) soy estudiante.',
        'usted/ustedes: ngôi "ngài" lịch sự, chia như ngôi thứ ba.',
        'ser dùng cho: danh tính, nghề nghiệp, quốc tịch, nguồn gốc (ser de), đặc điểm cố định, giờ.',
      ],
      tables: [{ title: 'ser — hiện tại', head: ['Đại từ', 'ser'], rows: [['yo (tôi)', 'soy'], ['tú (bạn)', 'eres'], ['él / ella / usted', 'es'], ['nosotros (chúng tôi)', 'somos'], ['vosotros (các bạn, TBN)', 'sois'], ['ellos / ellas / ustedes', 'son']] }],
      examples: [
        { t: 'Soy de Vietnam.', r: '', v: 'Tôi đến từ Việt Nam.' },
        { t: 'Ella es médica.', r: '', v: 'Cô ấy là bác sĩ.' },
        { t: '¿Eres estudiante?', r: '', v: 'Bạn là sinh viên à?' },
        { t: 'Somos amigos.', r: '', v: 'Chúng tôi là bạn.' },
      ],
      quiz: [
        { q: 'Nosotros ___ vietnamitas.', o: ['somos', 'son', 'sois', 'es'], a: 0 },
        { q: '"Tôi là giáo viên"?', o: ['Soy profesor.', 'Es profesor.', 'Estoy profesor.', 'Yo es profesor.'], a: 0 },
      ],
    },
    {
      id: 'g4', kind: 'grammar', title: 'Ser và estar',
      summary: 'Cả hai đều là "là/thì": ser = bản chất lâu dài; estar = trạng thái, vị trí.',
      body: [
        'estar dùng cho trạng thái tạm thời (mệt, vui, bận), cảm xúc, và vị trí (ở đâu).',
        'So sánh: Es aburrido (anh ta là người nhàm chán) / Está aburrido (anh ta đang chán).',
      ],
      tables: [{ title: 'estar — hiện tại', head: ['Đại từ', 'estar'], rows: [['yo', 'estoy'], ['tú', 'estás'], ['él / ella / usted', 'está'], ['nosotros', 'estamos'], ['vosotros', 'estáis'], ['ellos / ustedes', 'están']] }],
      examples: [
        { t: 'Estoy cansado.', r: '', v: 'Tôi (nam) mệt.' },
        { t: '¿Cómo estás?', r: '', v: 'Bạn khỏe không?' },
        { t: 'Madrid está en España.', r: '', v: 'Madrid ở Tây Ban Nha.' },
        { t: 'Soy alto, pero hoy estoy triste.', r: '', v: 'Tôi cao, nhưng hôm nay tôi buồn.' },
      ],
      quiz: [
        { q: 'El banco ___ cerca. (Ngân hàng ở gần)', o: ['está', 'es', 'son', 'están'], a: 0, why: 'Vị trí → estar.' },
        { q: 'Mi madre ___ enfermera. (Mẹ tôi là y tá)', o: ['es', 'está', 'son', 'estoy'], a: 0, why: 'Nghề nghiệp → ser.' },
      ],
    },
    {
      id: 'g5', kind: 'grammar', title: 'Chia động từ thì hiện tại: -ar, -er, -ir',
      summary: 'Bỏ đuôi -ar/-er/-ir, thêm đuôi theo ngôi.',
      body: [
        'Động từ được chia thành 3 nhóm theo đuôi nguyên thể. Bỏ đuôi rồi thêm đuôi chia.',
        'Một số động từ rất hay dùng là bất quy tắc: ir (đi) voy, vas, va, vamos, vais, van; hacer (làm) hago…; tener (có) tengo…',
      ],
      tables: [{ title: 'Đuôi chia hiện tại', head: ['', 'hablar (nói)', 'comer (ăn)', 'vivir (sống)'], rows: [['yo', 'hablo', 'como', 'vivo'], ['tú', 'hablas', 'comes', 'vives'], ['él / ella / usted', 'habla', 'come', 'vive'], ['nosotros', 'hablamos', 'comemos', 'vivimos'], ['vosotros', 'habláis', 'coméis', 'vivís'], ['ellos / ustedes', 'hablan', 'comen', 'viven']] }],
      examples: [
        { t: 'Hablo un poco de español.', r: '', v: 'Tôi nói một chút tiếng Tây Ban Nha.' },
        { t: '¿Dónde vives?', r: '', v: 'Bạn sống ở đâu?' },
        { t: 'Comemos a las dos.', r: '', v: 'Chúng tôi ăn trưa lúc 2 giờ.' },
        { t: 'Ellos trabajan mucho.', r: '', v: 'Họ làm việc nhiều.' },
      ],
      quiz: [
        { q: 'estudiar (học): yo ___', o: ['estudio', 'estudia', 'estudias', 'estudiar'], a: 0 },
        { q: 'beber (uống): nosotros ___', o: ['bebemos', 'bebimos', 'bebamos', 'beben'], a: 0 },
      ],
    },
    {
      id: 'g6', kind: 'grammar', title: 'Tener và hay',
      summary: 'tener = có (sở hữu, tuổi, cảm giác); hay = có (tồn tại).',
      body: [
        'tener (bất quy tắc): tengo, tienes, tiene, tenemos, tenéis, tienen.',
        'Tuổi dùng tener: Tengo 25 años. Cảm giác: tener hambre (đói), sed (khát), frío (lạnh), calor (nóng), sueño (buồn ngủ), miedo (sợ).',
        'tener que + nguyên thể = phải làm: Tengo que trabajar.',
        'hay (không đổi) = "có" chỉ sự tồn tại: Hay un banco aquí (Ở đây có một ngân hàng).',
      ],
      examples: [
        { t: 'Tengo dos hermanos.', r: '', v: 'Tôi có hai anh em.' },
        { t: '¿Cuántos años tienes?', r: '', v: 'Bạn bao nhiêu tuổi?' },
        { t: 'Tengo hambre.', r: '', v: 'Tôi đói.' },
        { t: 'Hay mucha gente.', r: '', v: 'Có rất nhiều người.' },
        { t: 'Tengo que irme.', r: '', v: 'Tôi phải đi rồi.' },
      ],
      quiz: [
        { q: '"Tôi 20 tuổi"?', o: ['Tengo 20 años.', 'Soy 20 años.', 'Estoy 20 años.', 'Hay 20 años.'], a: 0 },
        { q: '"Gần đây có siêu thị không?"', o: ['¿Hay un supermercado cerca?', '¿Tiene un supermercado cerca?', '¿Está un supermercado cerca?', '¿Es un supermercado cerca?'], a: 0 },
      ],
    },
    {
      id: 'g7', kind: 'grammar', title: 'Phủ định và câu hỏi',
      summary: 'no đặt trước động từ; câu hỏi có ¿…? và từ để hỏi có dấu.',
      body: [
        'Phủ định: no + động từ: No hablo inglés. Phủ định kép là chuẩn: No tengo nada (tôi không có gì).',
        'Câu hỏi có/không: giữ trật tự, lên giọng, viết thêm dấu ¿ ở đầu: ¿Hablas español?',
        'Từ để hỏi (luôn có dấu): qué (gì), quién (ai), dónde (đâu), cuándo (khi nào), cómo (thế nào), por qué (tại sao), cuánto (bao nhiêu).',
      ],
      examples: [
        { t: 'No entiendo.', r: '', v: 'Tôi không hiểu.' },
        { t: '¿Hablas inglés?', r: '', v: 'Bạn nói tiếng Anh không?' },
        { t: '¿Qué es esto?', r: '', v: 'Đây là cái gì?' },
        { t: '¿Cuánto cuesta?', r: '', v: 'Giá bao nhiêu?' },
        { t: '¿Por qué estudias español?', r: '', v: 'Tại sao bạn học tiếng Tây Ban Nha?' },
      ],
      quiz: [
        { q: '"Tôi không ăn thịt" (comer carne)?', o: ['No como carne.', 'Como no carne.', 'Yo carne no como.', 'No comer carne.'], a: 0 },
        { q: '"Ở đâu" là…', o: ['dónde', 'cuándo', 'cómo', 'quién'], a: 0 },
      ],
    },
    {
      id: 'g8', kind: 'grammar', title: 'Tương lai gần: ir a + nguyên thể',
      summary: 'voy a estudiar = tôi sẽ học.',
      body: [
        'Cách dễ nhất để nói về tương lai: ir (chia) + a + động từ nguyên thể.',
        'ir: voy, vas, va, vamos, vais, van.',
        '¡Vamos a…! cũng có nghĩa "Chúng ta hãy…!": ¡Vamos a comer!',
      ],
      examples: [
        { t: 'Voy a estudiar esta noche.', r: '', v: 'Tối nay tôi sẽ học.' },
        { t: '¿Qué vas a hacer mañana?', r: '', v: 'Ngày mai bạn sẽ làm gì?' },
        { t: 'Va a llover.', r: '', v: 'Trời sắp mưa.' },
        { t: '¡Vamos a la playa!', r: '', v: 'Đi biển thôi!' },
      ],
      quiz: [
        { q: 'Ellos ___ a viajar. (Họ sẽ đi du lịch)', o: ['van', 'va', 'vamos', 'voy'], a: 0 },
        { q: '"Tôi sẽ ăn" là…', o: ['Voy a comer.', 'Voy comer.', 'Voy a como.', 'Soy a comer.'], a: 0 },
      ],
    },
    {
      id: 'g9', kind: 'grammar', title: 'Thích: gustar',
      summary: 'Me gusta + số ít / Me gustan + số nhiều (nghĩa đen: "làm tôi thích").',
      body: [
        'gustar hoạt động ngược tiếng Việt: thứ được thích là chủ ngữ. Me gusta el café = cà phê làm tôi thích.',
        'Vật số ít hoặc động từ → gusta; vật số nhiều → gustan.',
        'Đại từ: me (tôi), te (bạn), le (anh ấy/cô ấy/ngài), nos (chúng tôi), os (các bạn), les (họ).',
      ],
      examples: [
        { t: 'Me gusta el café.', r: '', v: 'Tôi thích cà phê.' },
        { t: 'Me gustan los libros.', r: '', v: 'Tôi thích sách.' },
        { t: '¿Te gusta bailar?', r: '', v: 'Bạn có thích nhảy không?' },
        { t: 'No nos gusta el frío.', r: '', v: 'Chúng tôi không thích trời lạnh.' },
      ],
      quiz: [
        { q: 'Me ___ las frutas.', o: ['gustan', 'gusta', 'gusto', 'gustas'], a: 0 },
        { q: '"Bạn thích âm nhạc không?"', o: ['¿Te gusta la música?', '¿Tú gustas la música?', '¿Te gustan la música?', '¿Gustas tú música?'], a: 0 },
      ],
    },
    {
      id: 'g10', kind: 'grammar', title: 'Quá khứ đơn (pretérito) cơ bản',
      summary: 'Hành động đã xong: hablé, comí, viví.',
      body: [
        'Pretérito dùng cho việc đã xảy ra và kết thúc ở một thời điểm: ayer (hôm qua), el año pasado (năm ngoái).',
        'Động từ -er và -ir có chung đuôi.',
        'Bất quy tắc quan trọng: ser và ir cùng một dạng: fui, fuiste, fue, fuimos, fuisteis, fueron. hacer: hice, hiciste, hizo… tener: tuve, tuviste, tuvo…',
      ],
      tables: [{ title: 'Đuôi pretérito', head: ['', 'hablar', 'comer', 'vivir'], rows: [['yo', 'hablé', 'comí', 'viví'], ['tú', 'hablaste', 'comiste', 'viviste'], ['él / ella / usted', 'habló', 'comió', 'vivió'], ['nosotros', 'hablamos', 'comimos', 'vivimos'], ['vosotros', 'hablasteis', 'comisteis', 'vivisteis'], ['ellos / ustedes', 'hablaron', 'comieron', 'vivieron']] }],
      examples: [
        { t: 'Ayer hablé con mi madre.', r: '', v: 'Hôm qua tôi đã nói chuyện với mẹ.' },
        { t: 'Comí paella en Valencia.', r: '', v: 'Tôi đã ăn paella ở Valencia.' },
        { t: 'Fuimos al cine.', r: '', v: 'Chúng tôi đã đi xem phim.' },
        { t: '¿Qué hiciste el fin de semana?', r: '', v: 'Cuối tuần bạn đã làm gì?' },
      ],
      quiz: [
        { q: 'trabajar: yo ___ (hôm qua)', o: ['trabajé', 'trabajo', 'trabajó', 'trabajaba'], a: 0 },
        { q: '"Họ đã đi Madrid" (ir)?', o: ['Fueron a Madrid.', 'Van a Madrid.', 'Fue a Madrid.', 'Iban a Madrid.'], a: 0 },
      ],
    },
  ],
};
