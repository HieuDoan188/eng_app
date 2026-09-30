// Korean basics: Hangul, pronunciation rules and core grammar.
// Schema: see README ("Basics data"). Hand-written, not generated.
window.LT_BASICS = window.LT_BASICS || {};
window.LT_BASICS['ko'] = {
  intro: 'Hangul (한글) là bảng chữ cái ghép vần: mỗi chữ (âm tiết) là một khối gồm phụ âm đầu + nguyên âm (+ phụ âm cuối). Học 40 chữ cái là đọc được mọi chữ Hàn.',
  groups: [
    {
      id: 'consonants', title: 'Phụ âm cơ bản', native: '자음',
      desc: '14 phụ âm cơ bản. Tên chữ ở cột phụ; bấm để nghe âm ghép với ㅏ.',
      items: [
        { ch: 'ㄱ', rom: 'g/k', name: '기역', say: '가', set: 'k' },
        { ch: 'ㄴ', rom: 'n', name: '니은', say: '나', set: 'n' },
        { ch: 'ㄷ', rom: 'd/t', name: '디귿', say: '다', set: 't' },
        { ch: 'ㄹ', rom: 'r/l', name: '리을', say: '라', set: 'n' },
        { ch: 'ㅁ', rom: 'm', name: '미음', say: '마', set: 'n' },
        { ch: 'ㅂ', rom: 'b/p', name: '비읍', say: '바', set: 'p' },
        { ch: 'ㅅ', rom: 's', name: '시옷', say: '사', set: 's' },
        { ch: 'ㅇ', rom: 'câm / ng', name: '이응', say: '아', set: 'n', note: 'Đứng đầu thì câm (아 = a), đứng cuối đọc "ng" (강 gang).' },
        { ch: 'ㅈ', rom: 'j', name: '지읒', say: '자', set: 'j' },
        { ch: 'ㅊ', rom: 'ch', name: '치읓', say: '차', set: 'j' },
        { ch: 'ㅋ', rom: 'k (bật hơi)', name: '키읔', say: '카', set: 'k' },
        { ch: 'ㅌ', rom: 't (bật hơi)', name: '티읕', say: '타', set: 't' },
        { ch: 'ㅍ', rom: 'p (bật hơi)', name: '피읖', say: '파', set: 'p' },
        { ch: 'ㅎ', rom: 'h', name: '히읗', say: '하', set: 's' },
      ],
    },
    {
      id: 'double', title: 'Phụ âm căng (đôi)', native: '쌍자음',
      desc: 'Phát âm căng, mạnh, không bật hơi — gần với "c, t, p" trong "cá, tá, pa" nhưng gằn hơn.',
      items: [
        { ch: 'ㄲ', rom: 'kk', name: '쌍기역', say: '까', set: 'k' },
        { ch: 'ㄸ', rom: 'tt', name: '쌍디귿', say: '따', set: 't' },
        { ch: 'ㅃ', rom: 'pp', name: '쌍비읍', say: '빠', set: 'p' },
        { ch: 'ㅆ', rom: 'ss', name: '쌍시옷', say: '싸', set: 's' },
        { ch: 'ㅉ', rom: 'jj', name: '쌍지읒', say: '짜', set: 'j' },
      ],
    },
    {
      id: 'vowels', title: 'Nguyên âm cơ bản', native: '모음',
      desc: '10 nguyên âm cơ bản. Khi viết một mình phải thêm ㅇ câm phía trước (아, 어...).',
      items: [
        { ch: 'ㅏ', rom: 'a', say: '아', set: 'a' },
        { ch: 'ㅑ', rom: 'ya', say: '야', set: 'a' },
        { ch: 'ㅓ', rom: 'eo (ơ)', say: '어', set: 'eo' },
        { ch: 'ㅕ', rom: 'yeo (yơ)', say: '여', set: 'eo' },
        { ch: 'ㅗ', rom: 'o (ô)', say: '오', set: 'o' },
        { ch: 'ㅛ', rom: 'yo', say: '요', set: 'o' },
        { ch: 'ㅜ', rom: 'u', say: '우', set: 'u' },
        { ch: 'ㅠ', rom: 'yu', say: '유', set: 'u' },
        { ch: 'ㅡ', rom: 'eu (ư)', say: '으', set: 'eu' },
        { ch: 'ㅣ', rom: 'i', say: '이', set: 'eu' },
      ],
    },
    {
      id: 'compound', title: 'Nguyên âm ghép', native: '복합 모음',
      desc: '11 nguyên âm ghép. ㅐ và ㅔ ngày nay đọc gần như giống nhau (e).',
      items: [
        { ch: 'ㅐ', rom: 'ae (e)', say: '애', set: 'e' },
        { ch: 'ㅒ', rom: 'yae (ye)', say: '얘', set: 'e' },
        { ch: 'ㅔ', rom: 'e (ê)', say: '에', set: 'e' },
        { ch: 'ㅖ', rom: 'ye (yê)', say: '예', set: 'e' },
        { ch: 'ㅘ', rom: 'wa (oa)', say: '와', set: 'w' },
        { ch: 'ㅙ', rom: 'wae (oe)', say: '왜', set: 'w' },
        { ch: 'ㅚ', rom: 'oe (uê)', say: '외', set: 'w' },
        { ch: 'ㅝ', rom: 'wo (uơ)', say: '워', set: 'w' },
        { ch: 'ㅞ', rom: 'we (uê)', say: '웨', set: 'w' },
        { ch: 'ㅟ', rom: 'wi (uy)', say: '위', set: 'wi' },
        { ch: 'ㅢ', rom: 'ui (ưi)', say: '의', set: 'wi' },
      ],
    },
    {
      id: 'batchim', title: 'Phụ âm cuối (patchim)', native: '받침',
      desc: 'Ở vị trí cuối âm tiết, mọi phụ âm chỉ đọc thành 7 âm đại diện.',
      modes: ['read'],
      items: [
        { ch: 'ㄱ · ㅋ · ㄲ', rom: '-k', say: '국', note: '국 guk (canh), 부엌 bueok' },
        { ch: 'ㄴ', rom: '-n', say: '산', note: '산 san (núi)' },
        { ch: 'ㄷ · ㅌ · ㅅ · ㅆ · ㅈ · ㅊ · ㅎ', rom: '-t', say: '옷', note: '옷 ot (áo), 꽃 kkot (hoa)' },
        { ch: 'ㄹ', rom: '-l', say: '물', note: '물 mul (nước)' },
        { ch: 'ㅁ', rom: '-m', say: '밤', note: '밤 bam (đêm)' },
        { ch: 'ㅂ · ㅍ', rom: '-p', say: '밥', note: '밥 bap (cơm), 앞 ap' },
        { ch: 'ㅇ', rom: '-ng', say: '방', note: '방 bang (phòng)' },
      ],
    },
  ],
  lessons: [
    {
      id: 'p1', kind: 'pronunciation', title: 'Cấu tạo một chữ Hangul',
      summary: 'Phụ âm đầu + nguyên âm (+ patchim) xếp thành một khối vuông.',
      body: [
        'Mỗi âm tiết tiếng Hàn được viết thành một khối vuông. Khối luôn bắt đầu bằng một phụ âm; nếu âm tiết bắt đầu bằng nguyên âm thì dùng ㅇ câm làm phụ âm đầu.',
        'Nguyên âm "dọc" (ㅏ ㅓ ㅣ ...) đặt bên phải phụ âm: 가, 너, 이. Nguyên âm "ngang" (ㅗ ㅜ ㅡ ...) đặt bên dưới: 고, 누, 으.',
        'Phụ âm cuối (patchim) luôn nằm ở đáy khối: 한 = ㅎ + ㅏ + ㄴ, 글 = ㄱ + ㅡ + ㄹ.',
      ],
      patterns: ['Phụ âm + nguyên âm dọc: 가 (ㄱ+ㅏ)', 'Phụ âm + nguyên âm ngang: 고 (ㄱ+ㅗ)', 'Phụ âm + nguyên âm + patchim: 한 (ㅎ+ㅏ+ㄴ)'],
      examples: [
        { t: '가', r: 'ga', v: 'ㄱ + ㅏ' },
        { t: '고', r: 'go', v: 'ㄱ + ㅗ' },
        { t: '한국', r: 'hanguk', v: 'Hàn Quốc' },
        { t: '사람', r: 'saram', v: 'người' },
        { t: '우유', r: 'uyu', v: 'sữa (ㅇ câm đầu âm tiết)' },
      ],
      quiz: [
        { q: 'Chữ 문 gồm những chữ cái nào?', o: ['ㅁ + ㅜ + ㄴ', 'ㅁ + ㅗ + ㄴ', 'ㅂ + ㅜ + ㄴ', 'ㅁ + ㅡ + ㄹ'], a: 0 },
        { q: 'Vì sao chữ "아" có ㅇ?', o: ['ㅇ câm, vì khối chữ phải bắt đầu bằng phụ âm', 'ㅇ đọc là "ng"', 'Để đọc dài hơn', 'Để chỉ câu hỏi'], a: 0 },
      ],
    },
    {
      id: 'p2', kind: 'pronunciation', title: 'Âm thường – bật hơi – căng',
      summary: 'Bộ ba ㄱ/ㅋ/ㄲ, ㄷ/ㅌ/ㄸ, ㅂ/ㅍ/ㅃ, ㅈ/ㅊ/ㅉ và cặp ㅅ/ㅆ.',
      body: [
        'Âm thường (ㄱ ㄷ ㅂ ㅈ): nhẹ, hơi bật hơi ở đầu từ, giữa từ nghe gần như g, d, b, j.',
        'Âm bật hơi (ㅋ ㅌ ㅍ ㅊ): đẩy một luồng hơi mạnh ra — đặt tờ giấy trước miệng sẽ thấy giấy rung.',
        'Âm căng (ㄲ ㄸ ㅃ ㅉ ㅆ): căng cổ họng, không bật hơi, âm gọn và mạnh.',
        'Nghĩa của từ thay đổi theo ba loại âm này, nên cần luyện nghe kỹ.',
      ],
      tables: [{ title: 'Bộ ba âm', head: ['Thường', 'Bật hơi', 'Căng'], rows: [['가 ga', '카 ka', '까 kka'], ['다 da', '타 ta', '따 tta'], ['바 ba', '파 pa', '빠 ppa'], ['자 ja', '차 cha', '짜 jja'], ['사 sa', '—', '싸 ssa']] }],
      examples: [
        { t: '달', r: 'dal', v: 'mặt trăng' },
        { t: '탈', r: 'tal', v: 'mặt nạ' },
        { t: '딸', r: 'ttal', v: 'con gái' },
        { t: '불', r: 'bul', v: 'lửa' },
        { t: '뿔', r: 'ppul', v: 'sừng' },
        { t: '비싸요', r: 'bissayo', v: 'đắt' },
      ],
      quiz: [
        { q: 'Chữ nào là âm căng?', o: ['ㄸ', 'ㅌ', 'ㄷ', 'ㄴ'], a: 0 },
        { q: '"딸" (con gái) khác "달" (mặt trăng) ở điểm nào?', o: ['Phụ âm đầu căng ㄸ', 'Nguyên âm', 'Phụ âm cuối', 'Không khác'], a: 0 },
      ],
    },
    {
      id: 'p3', kind: 'pronunciation', title: 'Nối âm (연음)',
      summary: 'Patchim + âm tiết bắt đầu bằng ㅇ câm → patchim chuyển sang âm tiết sau.',
      body: [
        'Khi âm tiết trước có patchim và âm tiết sau bắt đầu bằng ㅇ câm, patchim được đọc nối sang âm tiết sau.',
        'Đây là quy tắc quan trọng nhất: gặp trong gần như mọi câu (ví dụ đuôi -아요/-어요, trợ từ 이/을/은).',
        'Với patchim đôi (ㄺ, ㅄ...), phụ âm thứ hai được nối sang: 읽어요 [일거요].',
      ],
      patterns: ['한국어 → [한구거]', '먹어요 → [머거요]'],
      examples: [
        { t: '한국어', r: 'hangugeo', v: 'tiếng Hàn — đọc [한구거]' },
        { t: '음악', r: 'eumak', v: 'âm nhạc — đọc [으막]' },
        { t: '먹어요', r: 'meogeoyo', v: 'ăn — đọc [머거요]' },
        { t: '있어요', r: 'isseoyo', v: 'có — đọc [이써요]' },
        { t: '읽어요', r: 'ilgeoyo', v: 'đọc — đọc [일거요]' },
      ],
      quiz: [
        { q: '"직업" (nghề nghiệp) đọc thế nào?', o: ['[지겁]', '[직업]', '[지덥]', '[직겁]'], a: 0 },
        { q: 'Nối âm xảy ra khi âm tiết sau bắt đầu bằng…', o: ['ㅇ câm', 'ㄴ', 'ㅎ', 'bất kỳ phụ âm nào'], a: 0 },
      ],
    },
    {
      id: 'p4', kind: 'pronunciation', title: 'Mũi hóa (비음화)',
      summary: 'Patchim ㄱ/ㄷ/ㅂ gặp ㄴ hoặc ㅁ → đọc thành ㅇ/ㄴ/ㅁ.',
      body: [
        'Âm cuối -k, -t, -p đứng trước ㄴ hoặc ㅁ sẽ biến thành âm mũi tương ứng: -k → -ng, -t → -n, -p → -m.',
        'Vì vậy đuôi trang trọng -ㅂ니다 luôn đọc là [-mnida].',
      ],
      tables: [{ title: 'Quy tắc', head: ['Patchim', '+ ㄴ/ㅁ', 'Đọc thành'], rows: [['ㄱ (-k)', '국물', '[궁물] gungmul'], ['ㄷ (-t)', '믿는', '[민는] minneun'], ['ㅂ (-p)', '합니다', '[함니다] hamnida']] }],
      examples: [
        { t: '감사합니다', r: 'gamsahamnida', v: 'cảm ơn — đọc [감사함니다]' },
        { t: '작년', r: 'jangnyeon', v: 'năm ngoái — đọc [장년]' },
        { t: '국물', r: 'gungmul', v: 'nước canh — đọc [궁물]' },
        { t: '입니다', r: 'imnida', v: 'là — đọc [임니다]' },
      ],
      quiz: [
        { q: '"입니다" đọc thế nào?', o: ['[임니다]', '[입니다]', '[인니다]', '[이니다]'], a: 0 },
        { q: '"한국말" (tiếng Hàn) đọc thế nào?', o: ['[한궁말]', '[한국말]', '[한굼말]', '[한구말]'], a: 0 },
      ],
    },
    {
      id: 'p5', kind: 'pronunciation', title: 'Căng hóa và âm ㅎ',
      summary: 'Sau -k/-t/-p, ㄱㄷㅂㅅㅈ đọc căng; ㅎ bật hơi hoặc câm.',
      body: [
        'Căng hóa: sau patchim -k, -t, -p, các phụ âm ㄱ ㄷ ㅂ ㅅ ㅈ đọc thành âm căng ㄲ ㄸ ㅃ ㅆ ㅉ. Ví dụ 학교 [학꾜].',
        'ㅎ gặp ㄱ ㄷ ㅈ (trước hoặc sau) sẽ làm chúng bật hơi: 좋다 [조타], 축하 [추카].',
        'ㅎ cuối đứng trước nguyên âm thì câm: 좋아요 [조아요].',
      ],
      examples: [
        { t: '학교', r: 'hakgyo', v: 'trường học — đọc [학꾜]' },
        { t: '식당', r: 'sikdang', v: 'nhà hàng — đọc [식땅]' },
        { t: '좋아요', r: 'joayo', v: 'tốt, thích — đọc [조아요]' },
        { t: '축하해요', r: 'chukahaeyo', v: 'chúc mừng — đọc [추카해요]' },
        { t: '괜찮아요', r: 'gwaenchanayo', v: 'không sao — đọc [괜차나요]' },
      ],
      quiz: [
        { q: '"좋아요" đọc thế nào?', o: ['[조아요]', '[조하요]', '[조타요]', '[좋아요]'], a: 0 },
        { q: '"학생" (học sinh) đọc thế nào?', o: ['[학쌩]', '[학생]', '[항생]', '[하생]'], a: 0 },
      ],
    },
    {
      id: 'g1', kind: 'grammar', title: 'Trật tự câu và 은/는 (chủ đề)',
      summary: 'Tiếng Hàn: Chủ ngữ – Tân ngữ – Động từ. Động từ luôn đứng cuối.',
      body: [
        'Câu tiếng Hàn theo trật tự S – O – V: "Tôi cơm ăn" thay vì "Tôi ăn cơm".',
        'Trợ từ gắn sau danh từ cho biết vai trò của nó. 은/는 đánh dấu chủ đề ("về phần…"), thường dùng khi giới thiệu hay so sánh.',
        'Danh từ có patchim + 은, không có patchim + 는.',
      ],
      patterns: ['N (có patchim) + 은: 선생님은', 'N (không patchim) + 는: 저는'],
      examples: [
        { t: '저는 학생이에요.', r: 'jeoneun haksaengieyo', v: 'Tôi là học sinh.' },
        { t: '저는 밥을 먹어요.', r: 'jeoneun babeul meogeoyo', v: 'Tôi ăn cơm.' },
        { t: '동생은 회사원이에요.', r: 'dongsaengeun hoesawonieyo', v: 'Em tôi là nhân viên công ty.' },
        { t: '오늘은 바빠요.', r: 'oneureun bappayo', v: 'Hôm nay (thì) tôi bận.' },
      ],
      quiz: [
        { q: 'Điền trợ từ: 선생님__ 한국 사람이에요.', o: ['은', '는', '을', '가'], a: 0, why: '선생님 kết thúc bằng patchim ㅁ → 은.' },
        { q: 'Trong câu tiếng Hàn, động từ thường đứng ở đâu?', o: ['Cuối câu', 'Đầu câu', 'Sau chủ ngữ', 'Tùy ý'], a: 0 },
      ],
    },
    {
      id: 'g2', kind: 'grammar', title: 'Là / không phải: 이에요·예요, 아니에요',
      summary: 'N + 이에요/예요 = "là N"; N + 이/가 아니에요 = "không phải N".',
      body: [
        'Danh từ có patchim + 이에요, không có patchim + 예요.',
        'Phủ định: N + 이/가 아니에요 (이 sau patchim, 가 sau nguyên âm).',
        'Câu hỏi giống câu khẳng định, chỉ lên giọng ở cuối: 학생이에요?',
        'Dạng trang trọng: 입니다 / 입니까?',
      ],
      patterns: ['학생 + 이에요 → 학생이에요', '의사 + 예요 → 의사예요', '학생이 아니에요 / 의사가 아니에요'],
      examples: [
        { t: '저는 베트남 사람이에요.', r: 'jeoneun beteunam saramieyo', v: 'Tôi là người Việt Nam.' },
        { t: '이것은 커피예요.', r: 'igeoseun keopiyeyo', v: 'Cái này là cà phê.' },
        { t: '저는 의사가 아니에요.', r: 'jeoneun uisaga anieyo', v: 'Tôi không phải bác sĩ.' },
        { t: '이게 뭐예요?', r: 'ige mwoyeyo?', v: 'Cái này là gì?' },
      ],
      quiz: [
        { q: '가수 (ca sĩ) + ___', o: ['예요', '이에요', '을', '은'], a: 0, why: '가수 không có patchim → 예요.' },
        { q: '"Tôi không phải học sinh" là…', o: ['저는 학생이 아니에요.', '저는 학생이에요.', '저는 학생가 아니에요.', '저는 학생 안 이에요.'], a: 0 },
      ],
    },
    {
      id: 'g3', kind: 'grammar', title: 'Chủ ngữ 이/가 và có/không 있어요·없어요',
      summary: '이/가 đánh dấu chủ ngữ; 있어요 = có/ở, 없어요 = không có.',
      body: [
        '이 sau danh từ có patchim, 가 sau danh từ không có patchim.',
        '이/가 nhấn vào "ai/cái gì" làm hành động, thường dùng với câu hỏi 누가, 뭐가 và với 있어요/없어요.',
        'Lưu ý: 나/저 + 가 → 내가/제가; 누구 + 가 → 누가.',
      ],
      patterns: ['N + 이/가 있어요 (có N)', 'N + 이/가 없어요 (không có N)'],
      examples: [
        { t: '시간이 있어요?', r: 'sigani isseoyo?', v: 'Bạn có thời gian không?' },
        { t: '돈이 없어요.', r: 'doni eopseoyo', v: 'Tôi không có tiền.' },
        { t: '친구가 와요.', r: 'chinguga wayo', v: 'Bạn (tôi) đến.' },
        { t: '누가 했어요?', r: 'nuga haesseoyo?', v: 'Ai đã làm?' },
      ],
      quiz: [
        { q: '동생___ 있어요.', o: ['이', '가', '을', '는'], a: 0, why: '동생 có patchim ㅇ → 이.' },
        { q: '"Tôi không có xe" là…', o: ['차가 없어요.', '차가 있어요.', '차를 없어요.', '차 아니에요.'], a: 0 },
      ],
    },
    {
      id: 'g4', kind: 'grammar', title: 'Tân ngữ 을/를',
      summary: '을/를 gắn sau danh từ bị tác động: "ăn CƠM", "đọc SÁCH".',
      body: [
        '을 sau danh từ có patchim, 를 sau danh từ không có patchim.',
        'Trong văn nói thân mật, 을/를 hay được lược bỏ: 커피 마셔요.',
      ],
      patterns: ['책 + 을 → 책을', '커피 + 를 → 커피를'],
      examples: [
        { t: '책을 읽어요.', r: 'chaegeul ilgeoyo', v: 'Tôi đọc sách.' },
        { t: '커피를 마셔요.', r: 'keopireul masyeoyo', v: 'Tôi uống cà phê.' },
        { t: '한국어를 공부해요.', r: 'hangugeoreul gongbuhaeyo', v: 'Tôi học tiếng Hàn.' },
        { t: '영화를 봐요.', r: 'yeonghwareul bwayo', v: 'Tôi xem phim.' },
      ],
      quiz: [
        { q: '물___ 주세요. (Cho tôi nước)', o: ['을', '를', '이', '은'], a: 0 },
        { q: '음악___ 들어요. (nghe nhạc)', o: ['을', '를', '가', '는'], a: 0, why: '음악 có patchim ㄱ → 을.' },
      ],
    },
    {
      id: 'g5', kind: 'grammar', title: 'Nơi chốn và thời gian: 에 / 에서',
      summary: '에 = đến / ở (tồn tại) / lúc; 에서 = tại (nơi diễn ra hành động).',
      body: [
        '에 dùng với nơi đến (가다, 오다), nơi tồn tại (있다, 없다) và mốc thời gian (세 시에, 월요일에).',
        '에서 dùng với nơi xảy ra hành động (공부하다, 일하다, 먹다...).',
        'Không dùng 에 với 오늘, 내일, 어제, 지금.',
      ],
      patterns: ['Nơi + 에 가요/와요/있어요', 'Nơi + 에서 + động từ hành động', 'Giờ + 에'],
      examples: [
        { t: '학교에 가요.', r: 'hakgyoe gayo', v: 'Tôi đi đến trường.' },
        { t: '집에 있어요.', r: 'jibe isseoyo', v: 'Tôi ở nhà.' },
        { t: '도서관에서 공부해요.', r: 'doseogwaneseo gongbuhaeyo', v: 'Tôi học ở thư viện.' },
        { t: '세 시에 만나요.', r: 'se sie mannayo', v: 'Gặp nhau lúc 3 giờ nhé.' },
      ],
      quiz: [
        { q: '회사___ 일해요. (Tôi làm việc ở công ty)', o: ['에서', '에', '을', '가'], a: 0, why: 'Nơi diễn ra hành động 일하다 → 에서.' },
        { q: '서울___ 가요.', o: ['에', '에서', '를', '은'], a: 0 },
      ],
    },
    {
      id: 'g6', kind: 'grammar', title: 'Thì hiện tại lịch sự -아요/-어요/-해요',
      summary: 'Đuôi câu dùng nhiều nhất trong giao tiếp hằng ngày.',
      body: [
        'Bỏ 다 ở động từ nguyên thể để có gốc. Nếu nguyên âm cuối của gốc là ㅏ hoặc ㅗ → + 아요; còn lại → + 어요; động từ 하다 → 해요.',
        'Gốc kết thúc bằng nguyên âm thường rút gọn: 가 + 아요 → 가요, 마시 + 어요 → 마셔요, 오 + 아요 → 와요.',
        'Cùng một dạng dùng cho câu kể, câu hỏi (lên giọng) và lời rủ (가요! = đi thôi).',
      ],
      tables: [{ title: 'Ví dụ chia', head: ['Nguyên thể', 'Quy tắc', 'Hiện tại'], rows: [['가다 (đi)', 'ㅏ → 아요', '가요'], ['보다 (xem)', 'ㅗ → 아요', '봐요'], ['먹다 (ăn)', 'khác → 어요', '먹어요'], ['마시다 (uống)', 'khác → 어요', '마셔요'], ['공부하다 (học)', '하다 → 해요', '공부해요']] }],
      examples: [
        { t: '어디 가요?', r: 'eodi gayo?', v: 'Bạn đi đâu?' },
        { t: '밥을 먹어요.', r: 'babeul meogeoyo', v: 'Tôi ăn cơm.' },
        { t: '매일 운동해요.', r: 'maeil undonghaeyo', v: 'Tôi tập thể dục mỗi ngày.' },
        { t: '날씨가 좋아요.', r: 'nalssiga joayo', v: 'Thời tiết đẹp.' },
      ],
      quiz: [
        { q: '읽다 (đọc) → ?', o: ['읽어요', '읽아요', '읽해요', '읽요'], a: 0 },
        { q: '사다 (mua) → ?', o: ['사요', '사어요', '사해요', '샀어요'], a: 0 },
      ],
    },
    {
      id: 'g7', kind: 'grammar', title: 'Thì quá khứ -았/었/했어요',
      summary: 'Thay 아요/어요/해요 bằng 았어요/었어요/했어요.',
      body: [
        'Quy tắc chọn ㅏ/ㅗ giống thì hiện tại: ㅏ/ㅗ → 았어요, khác → 었어요, 하다 → 했어요.',
        'Rút gọn tương tự: 가다 → 갔어요, 오다 → 왔어요, 마시다 → 마셨어요.',
      ],
      tables: [{ title: 'Hiện tại → Quá khứ', head: ['Nguyên thể', 'Hiện tại', 'Quá khứ'], rows: [['가다', '가요', '갔어요'], ['먹다', '먹어요', '먹었어요'], ['하다', '해요', '했어요'], ['이다 (là)', '이에요/예요', '이었어요/였어요']] }],
      examples: [
        { t: '어제 뭐 했어요?', r: 'eoje mwo haesseoyo?', v: 'Hôm qua bạn làm gì?' },
        { t: '친구를 만났어요.', r: 'chingureul mannasseoyo', v: 'Tôi đã gặp bạn.' },
        { t: '점심을 먹었어요.', r: 'jeomsimeul meogeosseoyo', v: 'Tôi đã ăn trưa.' },
        { t: '작년에 한국에 갔어요.', r: 'jangnyeone hanguge gasseoyo', v: 'Năm ngoái tôi đã đến Hàn Quốc.' },
      ],
      quiz: [
        { q: '보다 (xem) → quá khứ?', o: ['봤어요', '봈어요', '보었어요', '봐요'], a: 0 },
        { q: '공부하다 → quá khứ?', o: ['공부했어요', '공부핬어요', '공부해요', '공부하었어요'], a: 0 },
      ],
    },
    {
      id: 'g8', kind: 'grammar', title: 'Phủ định: 안, -지 않아요, 못',
      summary: '안/-지 않다 = không (chủ ý); 못 = không thể.',
      body: [
        '안 + động từ (ngắn gọn, văn nói): 안 가요. Với động từ N+하다, 안 đặt trước 하다: 공부 안 해요.',
        'Gốc + 지 않아요 (trang trọng hơn một chút): 가지 않아요.',
        '못 + động từ = không thể (do khả năng/hoàn cảnh): 못 가요. Dạng dài: -지 못해요.',
      ],
      examples: [
        { t: '오늘은 학교에 안 가요.', r: 'oneureun hakgyoe an gayo', v: 'Hôm nay tôi không đi học.' },
        { t: '고기를 먹지 않아요.', r: 'gogireul meokji anayo', v: 'Tôi không ăn thịt.' },
        { t: '수영을 못 해요.', r: 'suyeongeul mot haeyo', v: 'Tôi không biết bơi.' },
        { t: '매운 음식을 못 먹어요.', r: 'maeun eumsigeul mot meogeoyo', v: 'Tôi không ăn được đồ cay.' },
      ],
      quiz: [
        { q: '"Tôi không thể đến" — chọn câu đúng:', o: ['못 가요.', '안 가요.', '가요.', '가지 않아요.'], a: 0 },
        { q: '운동하다 + 안 → ?', o: ['운동 안 해요', '안 운동해요', '운동해요 안', '운동하안요'], a: 0 },
      ],
    },
    {
      id: 'g9', kind: 'grammar', title: 'Muốn và sẽ: -고 싶어요, -(으)ㄹ 거예요',
      summary: 'Gốc + 고 싶어요 = muốn; gốc + (으)ㄹ 거예요 = sẽ.',
      body: [
        '-고 싶어요 gắn thẳng vào gốc động từ: 가고 싶어요, 먹고 싶어요.',
        '-(으)ㄹ 거예요: gốc không patchim (hoặc patchim ㄹ) + ㄹ 거예요; gốc có patchim + 을 거예요.',
      ],
      patterns: ['가다 → 가고 싶어요 / 갈 거예요', '먹다 → 먹고 싶어요 / 먹을 거예요'],
      examples: [
        { t: '한국에 가고 싶어요.', r: 'hanguge gago sipeoyo', v: 'Tôi muốn đi Hàn Quốc.' },
        { t: '비빔밥을 먹고 싶어요.', r: 'bibimbabeul meokgo sipeoyo', v: 'Tôi muốn ăn bibimbap.' },
        { t: '내일 친구를 만날 거예요.', r: 'naeil chingureul mannal geoyeyo', v: 'Ngày mai tôi sẽ gặp bạn.' },
        { t: '주말에 뭐 할 거예요?', r: 'jumare mwo hal geoyeyo?', v: 'Cuối tuần bạn sẽ làm gì?' },
      ],
      quiz: [
        { q: '읽다 → "sẽ đọc"?', o: ['읽을 거예요', '읽ㄹ 거예요', '읽고 거예요', '읽을 싶어요'], a: 0 },
        { q: '"Tôi muốn ngủ" (자다)?', o: ['자고 싶어요', '잘 싶어요', '자요 싶어요', '자고 거예요'], a: 0 },
      ],
    },
    {
      id: 'g10', kind: 'grammar', title: 'Nhờ và mời: -(으)세요, -아/어 주세요',
      summary: 'Lời đề nghị lịch sự: 앉으세요 (mời ngồi), 도와주세요 (giúp tôi với).',
      body: [
        '-(으)세요: gốc không patchim + 세요, có patchim + 으세요. Dùng để mời/yêu cầu lịch sự: 들어오세요 (mời vào).',
        'N + 주세요 = "cho tôi N": 물 주세요. Động từ -아/어 + 주세요 = "làm ơn làm … cho tôi": 기다려 주세요.',
        'Phủ định lời yêu cầu: gốc + 지 마세요 (đừng…).',
      ],
      examples: [
        { t: '여기 앉으세요.', r: 'yeogi anjeuseyo', v: 'Mời ngồi đây.' },
        { t: '물 좀 주세요.', r: 'mul jom juseyo', v: 'Cho tôi chút nước.' },
        { t: '천천히 말해 주세요.', r: 'cheoncheonhi malhae juseyo', v: 'Làm ơn nói chậm.' },
        { t: '걱정하지 마세요.', r: 'geokjeonghaji maseyo', v: 'Đừng lo lắng.' },
      ],
      quiz: [
        { q: '읽다 → lời mời lịch sự?', o: ['읽으세요', '읽세요', '읽어세요', '읽주세요'], a: 0 },
        { q: '"Đừng đi" là…', o: ['가지 마세요', '안 가세요', '가 주세요', '못 가요'], a: 0 },
      ],
    },
    {
      id: 'g11', kind: 'grammar', title: 'Hai hệ số đếm',
      summary: 'Số thuần Hàn (하나, 둘…) để đếm cái/người/giờ; số Hán Hàn (일, 이…) cho tiền, ngày, phút.',
      body: [
        'Số thuần Hàn: 하나 둘 셋 넷 다섯 여섯 일곱 여덟 아홉 열. Trước đơn vị đếm, 하나/둘/셋/넷/스물 rút gọn thành 한/두/세/네/스무.',
        'Số Hán Hàn: 일 이 삼 사 오 육 칠 팔 구 십, 백 (100), 천 (1.000), 만 (10.000).',
        'Giờ dùng số thuần Hàn (세 시 = 3 giờ), phút dùng Hán Hàn (삼십 분 = 30 phút). Tiền, tháng, ngày, số điện thoại dùng Hán Hàn.',
      ],
      tables: [{ title: '1–10', head: ['Số', 'Thuần Hàn', 'Hán Hàn'], rows: [['1', '하나 (한)', '일'], ['2', '둘 (두)', '이'], ['3', '셋 (세)', '삼'], ['4', '넷 (네)', '사'], ['5', '다섯', '오'], ['6', '여섯', '육'], ['7', '일곱', '칠'], ['8', '여덟', '팔'], ['9', '아홉', '구'], ['10', '열', '십']] }],
      examples: [
        { t: '사과 두 개 주세요.', r: 'sagwa du gae juseyo', v: 'Cho tôi hai quả táo.' },
        { t: '지금 세 시 삼십 분이에요.', r: 'jigeum se si samsip bunieyo', v: 'Bây giờ là 3 giờ 30.' },
        { t: '만 원이에요.', r: 'man wonieyo', v: '10.000 won.' },
        { t: '사월 십오일', r: 'sawol siboil', v: 'ngày 15 tháng 4' },
      ],
      quiz: [
        { q: '"5 giờ" nói thế nào?', o: ['다섯 시', '오 시', '다섯 분', '오 분'], a: 0 },
        { q: '"3 người" (명)?', o: ['세 명', '셋 명', '삼 명', '석 명'], a: 0 },
      ],
    },
  ],
};
