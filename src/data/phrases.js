// accent: · で音節区切り、大文字が強勢音節
export const phrases = [
  // 朝・起床
  { id: 1,  ja: '起きた',                   en: 'I woke up',                   es: 'Me desperté',                    kana: 'メ デスペルテー',                     accent: 'me des·per·TÉ',                    category: 'morning' },
  { id: 2,  ja: '眠いな〜',                  en: 'I\'m sleepy',                 es: 'Tengo sueño',                    kana: 'テンゴ スエニョ',                     accent: 'TEN·go SUE·ño',                    category: 'morning' },
  { id: 3,  ja: 'もう少し寝たい',            en: 'I want to sleep more',        es: 'Quiero dormir más',              kana: 'キエロ ドルミール マス',               accent: 'QUIE·ro dor·MIR MÁS',              category: 'morning' },
  { id: 4,  ja: 'シャワー浴びよう',          en: 'I\'ll take a shower',         es: 'Voy a ducharme',                 kana: 'ボイ ア ドゥチャルメ',                accent: 'voy a du·CHAR·me',                 category: 'morning' },
  { id: 5,  ja: '歯を磨こう',               en: 'I\'ll brush my teeth',        es: 'Voy a cepillarme los dientes',   kana: 'ボイ ア セピジャルメ ロス ディエンテス', accent: 'voy a ce·pi·LLAR·me los DIEN·tes', category: 'morning' },
  { id: 6,  ja: 'コーヒーが飲みたい',        en: 'I want some coffee',          es: 'Quiero tomar café',              kana: 'キエロ トマール カフェ',               accent: 'QUIE·ro to·MAR ca·FÉ',             category: 'morning' },
  { id: 7,  ja: '朝ごはん何にしよう',        en: 'What should I eat for breakfast', es: '¿Qué como hoy?',            kana: 'ケ コモ オイ',                        accent: 'QUÉ CO·mo hoy',                    category: 'morning' },
  { id: 8,  ja: '遅刻しそう',               en: 'I\'m going to be late',       es: 'Voy a llegar tarde',             kana: 'ボイ ア ジェガール タルデ',           accent: 'voy a lle·GAR TAR·de',             category: 'morning' },
  { id: 9,  ja: '服を着ようかな',           en: 'I should get dressed',        es: 'Voy a vestirme',                 kana: 'ボイ ア ベスティルメ',                accent: 'voy a ves·TIR·me',                 category: 'morning' },
  { id: 10, ja: '今日も頑張ろう',           en: 'Let\'s do our best today',    es: 'Hagamos nuestro mejor esfuerzo hoy', kana: 'アガモス ヌエストロ メホール エスフエルソ オイ', accent: 'ha·GA·mos NUES·tro me·JOR es·FUER·zo hoy', category: 'morning' },

  // 体・気分
  { id: 11, ja: 'お腹空いたな〜',           en: 'I\'m hungry',                 es: 'Tengo hambre',                   kana: 'テンゴ アンブレ',                     accent: 'TEN·go AM·bre',                    category: 'body' },
  { id: 12, ja: '喉が渇いた',              en: 'I\'m thirsty',                es: 'Tengo sed',                      kana: 'テンゴ セド',                         accent: 'TEN·go sed',                       category: 'body' },
  { id: 13, ja: '疲れたな〜',              en: 'I\'m tired',                  es: 'Estoy cansado',                  kana: 'エストイ カンサード',                 accent: 'es·TOY can·SA·do',                 category: 'body' },
  { id: 14, ja: '気分がいい',              en: 'I feel great',                es: 'Me siento bien',                 kana: 'メ シエント ビエン',                  accent: 'me SIEN·to bien',                  category: 'body' },
  { id: 15, ja: '頭が痛い',               en: 'I have a headache',           es: 'Me duele la cabeza',             kana: 'メ ドゥエレ ラ カベサ',               accent: 'me DUE·le la ca·BE·za',            category: 'body' },
  { id: 16, ja: '水を飲もう',              en: 'I\'ll drink some water',      es: 'Voy a tomar agua',               kana: 'ボイ ア トマール アグア',             accent: 'voy a to·MAR A·gua',               category: 'body' },
  { id: 17, ja: 'やる気出た！',            en: 'I\'m motivated!',             es: '¡Me siento motivado!',           kana: 'メ シエント モティバード',             accent: 'me SIEN·to mo·ti·VA·do',           category: 'body' },
  { id: 18, ja: 'ドキドキする',            en: 'I\'m nervous',                es: 'Estoy nervioso',                 kana: 'エストイ ネルビオソ',                 accent: 'es·TOY ner·VIO·so',                category: 'body' },
  { id: 19, ja: '嬉しい！',               en: 'I\'m happy!',                 es: '¡Estoy feliz!',                  kana: 'エストイ フェリス',                   accent: 'es·TOY fe·LIS',                    category: 'body' },

  // 天気・外出
  { id: 20, ja: '雨かな',                  en: 'Is it raining?',              es: '¿Está lloviendo?',               kana: 'エスタ ジョビエンド',                 accent: 'es·TÁ llo·VIEN·do',                category: 'outdoor' },
  { id: 21, ja: '暑いな〜',               en: 'It\'s hot',                   es: 'Hace calor',                     kana: 'アセ カロール',                       accent: 'A·ce ca·LOR',                      category: 'outdoor' },
  { id: 22, ja: '寒いな〜',               en: 'It\'s cold',                  es: 'Hace frío',                      kana: 'アセ フリオ',                         accent: 'A·ce FRÍ·o',                       category: 'outdoor' },
  { id: 23, ja: '風が強いな',              en: 'It\'s very windy',            es: 'Hace mucho viento',              kana: 'アセ ムーチョ ビエント',              accent: 'A·ce MU·cho VIEN·to',              category: 'outdoor' },
  { id: 24, ja: '暑すぎる',               en: 'It\'s too hot',               es: 'Hace demasiado calor',           kana: 'アセ デマシアード カロール',           accent: 'A·ce de·ma·SIA·do ca·LOR',         category: 'outdoor' },
  { id: 25, ja: 'どの靴にしようかな',      en: 'Which shoes should I wear?',  es: '¿Qué zapatos me pongo?',         kana: 'ケ サパトス メ ポンゴ',               accent: 'QUÉ za·PA·tos me PON·go',          category: 'outdoor' },
  { id: 26, ja: 'あの電車に乗りたいな',    en: 'I want to take that train',   es: 'Quiero tomar ese tren',          kana: 'キエロ トマール エセ トレン',          accent: 'QUIE·ro to·MAR E·se tren',         category: 'outdoor' },
  { id: 27, ja: 'すいません、どいてください', en: 'Excuse me, please move',   es: 'Perdón, ¿puede moverse?',        kana: 'ペルドン プエデ モベルセ',             accent: 'per·DÓN PUE·de mo·VER·se',         category: 'outdoor' },
  { id: 28, ja: '電車が混んでる',          en: 'The train is crowded',        es: 'El tren está lleno',             kana: 'エル トレン エスタ ジェノ',           accent: 'el tren es·TÁ LLE·no',             category: 'outdoor' },
  { id: 29, ja: '座れた！',               en: 'I got a seat!',               es: '¡Me senté!',                     kana: 'メ センテ',                           accent: 'me sen·TÉ',                        category: 'outdoor' },
  { id: 30, ja: '忘れ物した',              en: 'I forgot something',          es: 'Se me olvidó algo',              kana: 'セ メ オルビード アルゴ',             accent: 'se me ol·vi·DÓ AL·go',             category: 'outdoor' },
  { id: 31, ja: '急がないと',              en: 'I have to hurry',             es: 'Tengo que apurarme',             kana: 'テンゴ ケ アプラルメ',                accent: 'TEN·go ke a·pu·RAR·me',            category: 'outdoor' },

  // 社交・日常
  { id: 32, ja: '元気ですか？',            en: 'How are you?',                es: '¿Cómo estás?',                   kana: 'コモ エスタス',                       accent: 'CÓ·mo es·TÁS',                     category: 'social' },
  { id: 33, ja: '久しぶり！',              en: 'Long time no see!',           es: '¡Cuánto tiempo!',                kana: 'クアント ティエンポ',                 accent: 'CUÁN·to TIEM·po',                  category: 'social' },
  { id: 34, ja: '綺麗だね',               en: 'You\'re beautiful',           es: 'Eres hermosa',                   kana: 'エレス エルモサ',                     accent: 'E·res er·MO·sa',                   category: 'social' },
  { id: 35, ja: '爪が綺麗だね',           en: 'Your nails look nice',        es: 'Tienes las uñas bonitas',        kana: 'ティエネス ラス ウニャス ボニタス',   accent: 'TIE·nes las Ú·ñas bo·NI·tas',     category: 'social' },
  { id: 36, ja: '美味しそうだね',          en: 'That looks delicious',        es: 'Eso se ve delicioso',            kana: 'エソ セ ベ デリシオソ',               accent: 'E·so se ve de·li·CIO·so',          category: 'social' },
  { id: 37, ja: 'ありがとう',              en: 'Thank you',                   es: 'Gracias',                        kana: 'グラシアス',                          accent: 'GRA·cias',                         category: 'social' },
  { id: 38, ja: 'どういたしまして',        en: 'You\'re welcome',             es: 'De nada',                        kana: 'デ ナダ',                             accent: 'de NA·da',                         category: 'social' },
  { id: 39, ja: 'また後で',               en: 'See you later',               es: 'Hasta luego',                    kana: 'アスタ ルエゴ',                       accent: 'AS·ta LUE·go',                     category: 'social' },
  { id: 40, ja: 'いいね！',               en: 'Nice!',                       es: '¡Qué bien!',                     kana: 'ケ ビエン',                           accent: 'QUÉ bien',                         category: 'social' },
  { id: 41, ja: 'ちょっと待って',          en: 'Wait a moment',               es: 'Espera un momento',              kana: 'エスペラ ウン モメント',              accent: 'es·PE·ra un mo·MEN·to',            category: 'social' },
  { id: 42, ja: '了解です',               en: 'Got it',                      es: 'Entendido',                      kana: 'エンテンディード',                    accent: 'en·ten·DI·do',                     category: 'social' },
  { id: 43, ja: '本当に？',               en: 'Really?',                     es: '¿En serio?',                     kana: 'エン セリオ',                         accent: 'en SE·rio',                        category: 'social' },
  { id: 44, ja: 'すごいね！',              en: 'That\'s amazing!',            es: '¡Qué increíble!',                kana: 'ケ インクレイブレ',                   accent: 'QUÉ in·cre·Í·ble',                 category: 'social' },
  { id: 45, ja: 'また連絡するね',          en: 'I\'ll contact you later',     es: 'Te contacto luego',              kana: 'テ コンタクト ルエゴ',                accent: 'te con·TAC·to LUE·go',             category: 'social' },

  // 食事
  { id: 46, ja: '美味しい！',              en: 'It\'s delicious!',            es: '¡Está rico!',                    kana: 'エスタ リコ',                         accent: 'es·TÁ RI·co',                      category: 'food' },
  { id: 47, ja: 'もう一杯',               en: 'One more drink',              es: 'Una copa más',                   kana: 'ウナ コパ マス',                      accent: 'U·na CO·pa MÁS',                   category: 'food' },
  { id: 48, ja: 'お腹いっぱい',           en: 'I\'m full',                   es: 'Estoy lleno',                    kana: 'エストイ ジェノ',                     accent: 'es·TOY LLE·no',                    category: 'food' },
  { id: 49, ja: '何食べよう',              en: 'What should I eat?',          es: '¿Qué como?',                     kana: 'ケ コモ',                             accent: 'QUÉ CO·mo',                        category: 'food' },
  { id: 50, ja: '昼ごはんどうしよう',      en: 'What should I have for lunch?', es: '¿Qué almuerzo hoy?',           kana: 'ケ アルムエルソ オイ',                accent: 'QUÉ al·MUER·zo hoy',               category: 'food' },

  // 仕事
  { id: 51, ja: '仕事始めよう',            en: 'Let\'s get to work',          es: 'Vamos a trabajar',               kana: 'バモス ア トラバハール',              accent: 'VA·mos a tra·ba·JAR',              category: 'work' },
  { id: 52, ja: 'メールが来てる',          en: 'I have an email',             es: 'Tengo un correo',                kana: 'テンゴ ウン コレオ',                  accent: 'TEN·go un co·RRE·o',               category: 'work' },
  { id: 53, ja: '会議か〜',               en: 'There\'s a meeting',          es: 'Hay una reunión',                kana: 'アイ ウナ レウニオン',                accent: 'hay U·na reu·NIÓN',                category: 'work' },
  { id: 54, ja: '頑張れ自分',              en: 'Come on, I can do it',        es: 'Ánimo, yo puedo',                kana: 'アニモ ジョ プエド',                  accent: 'Á·ni·mo yo PUE·do',                category: 'work' },
  { id: 55, ja: '帰りたい',               en: 'I want to go home',           es: 'Quiero irme a casa',             kana: 'キエロ イルメ ア カサ',               accent: 'QUIE·ro IR·me a CA·sa',            category: 'work' },
  { id: 56, ja: 'お疲れ様',               en: 'Good work today',             es: 'Buen trabajo',                   kana: 'ブエン トラバホ',                     accent: 'buen tra·BA·jo',                   category: 'work' },
  { id: 57, ja: '最高だ！',               en: 'This is the best!',           es: '¡Es lo mejor!',                  kana: 'エス ロ メホール',                    accent: 'es lo me·JOR',                     category: 'work' },

  // 夜・就寝
  { id: 58, ja: 'お風呂入ろう',            en: 'I\'ll take a bath',           es: 'Voy a bañarme',                  kana: 'ボイ ア バニャルメ',                  accent: 'voy a ba·ÑAR·me',                  category: 'evening' },
  { id: 59, ja: 'もう寝よう',              en: 'I\'m going to sleep',         es: 'Ya me duermo',                   kana: 'ジャ メ ドゥエルモ',                  accent: 'ya me DUER·mo',                    category: 'evening' },
  { id: 60, ja: '今日も終わった',          en: 'Another day done',            es: 'Ya terminé el día',              kana: 'ジャ テルミネ エル ディア',           accent: 'ya ter·mi·NÉ el DÍ·a',             category: 'evening' },

  // 買い物
  { id: 61, ja: 'これいくら？',            en: 'How much is this?',           es: '¿Cuánto cuesta esto?',           kana: 'クアント クエスタ エスト',             accent: 'CUÁN·to CUES·ta ES·to',            category: 'shopping' },
  { id: 62, ja: '安い！',                  en: 'It\'s cheap!',                es: '¡Qué barato!',                   kana: 'ケ バラト',                           accent: 'QUÉ ba·RA·to',                     category: 'shopping' },
  { id: 63, ja: '高いな',                  en: 'It\'s expensive',             es: 'Es muy caro',                    kana: 'エス ムイ カロ',                      accent: 'es muy CA·ro',                     category: 'shopping' },
  { id: 64, ja: 'これください',            en: 'I\'ll take this',             es: 'Me llevo esto',                  kana: 'メ ジェボ エスト',                    accent: 'me LLE·vo ES·to',                  category: 'shopping' },

  // ホットドッグ営業！
  { id: 65, ja: 'ホットドッグはいかがですか？', en: 'Would you like a hot dog?', es: '¿Le gustaría un perro caliente?', kana: 'レ グスタリア ウン ペロ カリエンテ', accent: 'le gus·ta·RÍ·a un PE·rro ca·LIEN·te', category: 'sales' },
  { id: 66, ja: 'めっちゃ美味しいですよ！', en: 'It\'s super delicious!',      es: '¡Es deliciosísimo!',             kana: 'エス デリシオシシモ',                 accent: 'es de·li·cio·SÍ·si·mo',            category: 'sales' },
  { id: 67, ja: '今日のおすすめです！',     en: 'This is today\'s special!',   es: '¡Es la especialidad del día!',   kana: 'エス ラ エスペシアリダード デル ディア', accent: 'es la es·pe·cia·li·DAD del DÍ·a', category: 'sales' },
  { id: 68, ja: '安いですよ！',            en: 'It\'s a great deal!',         es: '¡Es una ganga!',                 kana: 'エス ウナ ガンガ',                    accent: 'es U·na GAN·ga',                   category: 'sales' },
  { id: 69, ja: '試してみてください！',     en: 'Please give it a try!',       es: '¡Pruébelo, no se va a arrepentir!', kana: 'プルエベロ ノ セ バ ア アレペンティール', accent: 'PRUE·be·lo no se va a a·rre·pen·TIR', category: 'sales' },
  { id: 70, ja: '絶対に後悔しません！',     en: 'You won\'t regret it!',       es: '¡No se va a arrepentir!',        kana: 'ノ セ バ ア アレペンティール',         accent: 'no se va a a·rre·pen·TIR',         category: 'sales' },
  { id: 71, ja: '一個だけでいいですか？',   en: 'Just one is fine?',           es: '¿Solo uno?',                     kana: 'ソロ ウノ',                           accent: 'SO·lo U·no',                       category: 'sales' },
  { id: 72, ja: '特別に値引きしますよ',     en: 'I\'ll give you a special discount', es: 'Le hago un descuento especial', kana: 'レ アゴ ウン デスクエント エスペシアル', accent: 'le A·go un des·CUEN·to es·pe·CIAL', category: 'sales' },

  // ビジネス電話
  { id: 73, ja: 'お電話ありがとうございます', en: 'Thank you for calling',     es: 'Gracias por llamar',             kana: 'グラシアス ポル ジャマール',           accent: 'GRA·cias por lla·MAR',             category: 'business' },
  { id: 74, ja: '少々お待ちください',       en: 'Please hold on',              es: 'Un momento, por favor',          kana: 'ウン モメント ポル ファボール',        accent: 'un mo·MEN·to por fa·VOR',          category: 'business' },
  { id: 75, ja: 'よろしくお願いします',     en: 'Nice to meet you',            es: 'Mucho gusto',                    kana: 'ムーチョ グスト',                     accent: 'MU·cho GUS·to',                    category: 'business' },
  { id: 76, ja: '確認して折り返します',     en: 'I\'ll check and call you back', es: 'Voy a verificar y le llamo',   kana: 'ボイ ア ベリフィカール イ レ ジャモ', accent: 'voy a ve·ri·fi·CAR i le LLA·mo',   category: 'business' },
  { id: 77, ja: '担当者に代わります',       en: 'I\'ll transfer you',          es: 'Le paso con el responsable',     kana: 'レ パソ コン エル レスポンサブレ',    accent: 'le PA·so con el res·pon·SA·ble',   category: 'business' },
  { id: 78, ja: 'ご連絡ありがとうございます', en: 'Thank you for contacting us', es: 'Gracias por contactarnos',      kana: 'グラシアス ポル コンタクタルノス',    accent: 'GRA·cias por con·tac·TAR·nos',     category: 'business' },
]

export function getRandomPhrase() {
  return phrases[Math.floor(Math.random() * phrases.length)]
}

export function getRandomPhraseExcluding(currentId) {
  const others = phrases.filter(p => p.id !== currentId)
  return others[Math.floor(Math.random() * others.length)]
}
