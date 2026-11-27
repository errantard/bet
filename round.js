// ===== 프로토 회차 데이터 (회차 작업은 이 파일만 수정) =====
// ROUNDS: 진행중 회차 목록 (최근 2개 유지 — 새 회차 추가 시 바로 앞 회차는 그대로 두고 그 이전 회차는 삭제)
// 회차마다 { round, combos, matches } / 경기 id는 회차 안에서만 고유 (결과는 Supabase에 회차별로 따로 저장)
// combos: 조합번호: { odd: 총배당, betAmount: 구매금액 }  ← 조합 번호 = 구매 순서
// matches: 킥오프 순서 / type: "승무패" | "H-1.0" | "H+1.0" | "U/O 3.5"(언더오버: home=언더, away=오버)
// pickTarget: "home"(승) | "draw"(무) | "away"(패) / combs: 이 경기가 들어간 조합 번호들
window.ROUNDS = [
  {
    round: "140",

    combos: {
      1: { odd: 27.5, betAmount: 15000 },
      2: { odd: 23.0, betAmount: 15000 },
      3: { odd: 67.4, betAmount: 10000 },
      4: { odd: 115.4, betAmount: 10000 },
      5: { odd: 33.8, betAmount: 10000 },
      6: { odd: 27.1, betAmount: 10000 },
      7: { odd: 40.9, betAmount: 10000 },
      8: { odd: 25.4, betAmount: 10000 },
      9: { odd: 78.0, betAmount: 10000 },
      10: { odd: 18.9, betAmount: 10000 },
      11: { odd: 24.2, betAmount: 15000 },
      12: { odd: 39.0, betAmount: 10000 },
      13: { odd: 23.6, betAmount: 15000 }
    },

    // ※ 회차 중간 추가분은 기존 id(m1~m18) 유지 + 새 경기 m19~ (이미 입력한 결과 보존용)
    matches: [
      { id: "m14", time: "11.25 18:30", league: "일본 J2리그", type: "승무패", home: "반라우레 하치노헤FC", away: "알비렉스 니가타", pickTarget: "away", odd: "2.20", combs: [9] },
      { id: "m15", time: "11.25 18:30", league: "일본 J2리그", type: "H+1.0", home: "반라우레 하치노헤FC", away: "알비렉스 니가타", pickTarget: "away", odd: "4.95", combs: [8] },
      { id: "m16", time: "11.25 18:30", league: "일본 J2리그", type: "H+1.0", home: "FC이마바리", away: "테게바자로 미야자키", pickTarget: "draw", odd: "3.20", combs: [9] },
      { id: "m17", time: "11.25 18:30", league: "일본 J2리그", type: "승무패", home: "FC이마바리", away: "테게바자로 미야자키", pickTarget: "away", odd: "1.53", combs: [8] },
      { id: "m1", time: "11.25 19:00", league: "일본 J1리그", type: "승무패", home: "미토 홀리호크", away: "도쿄 베르디", pickTarget: "draw", odd: "2.90", combs: [4, 5] },
      { id: "m12", time: "11.25 19:00", league: "일본 J1리그", type: "승무패", home: "미토 홀리호크", away: "도쿄 베르디", pickTarget: "home", odd: "2.65", combs: [7] },
      { id: "m13", time: "11.25 19:00", league: "일본 J1리그", type: "U/O 2.5", home: "미토 홀리호크", away: "도쿄 베르디", pickTarget: "away", odd: "2.33", combs: [6] },
      { id: "m2", time: "11.25 19:00", league: "일본 J1리그", type: "승무패", home: "제프 유나이티드", away: "나고야 그램퍼스", pickTarget: "home", odd: "2.85", combs: [3, 4, 5, 6] },
      { id: "m3", time: "11.25 19:00", league: "일본 J1리그", type: "승무패", home: "파지아노 오카야마", away: "시미즈 에스펄스", pickTarget: "home", odd: "1.86", combs: [2, 4, 7] },
      { id: "m4", time: "11.25 19:00", league: "일본 J1리그", type: "승무패", home: "파지아노 오카야마", away: "시미즈 에스펄스", pickTarget: "draw", odd: "3.15", combs: [3] },
      { id: "m5", time: "11.25 19:00", league: "일본 J1리그", type: "H+1.0", home: "V바렌 나가사키", away: "가와사키 프론탈레", pickTarget: "draw", odd: "3.60", combs: [1] },
      { id: "m6", time: "11.25 19:00", league: "일본 J1리그", type: "승무패", home: "V바렌 나가사키", away: "가와사키 프론탈레", pickTarget: "away", odd: "1.78", combs: [2, 8] },
      { id: "m18", time: "11.25 19:00", league: "일본 J1리그", type: "H+1.0", home: "V바렌 나가사키", away: "가와사키 프론탈레", pickTarget: "away", odd: "2.70", combs: [9] },
      { id: "m7", time: "11.25 19:00", league: "일본 J2리그", type: "승무패", home: "콘사도레 삿포로", away: "후지에다 MYFC", pickTarget: "home", odd: "1.83", combs: [1, 2, 3, 4, 5, 6, 7] },
      { id: "m8", time: "11.26 04:45", league: "잉글랜드 챔피언십", type: "승무패", home: "번리", away: "버밍엄 시티", pickTarget: "away", odd: "2.23", combs: [1, 5, 6, 7] },
      { id: "m9", time: "11.26 05:00", league: "잉글랜드 챔피언십", type: "승무패", home: "스토크 시티", away: "밀월", pickTarget: "home", odd: "2.03", combs: [2, 7, 8] },
      { id: "m10", time: "11.26 05:00", league: "잉글랜드 챔피언십", type: "H-1.0", home: "스토크 시티", away: "밀월", pickTarget: "home", odd: "4.10", combs: [3, 4, 9] },
      { id: "m19", time: "11.27 02:45", league: "컨퍼런스리그", type: "승무패", home: "파포스FC", away: "미트윌란", pickTarget: "away", odd: "2.00", combs: [10] },
      { id: "m20", time: "11.27 02:45", league: "컨퍼런스리그", type: "H+1.0", home: "파포스FC", away: "미트윌란", pickTarget: "draw", odd: "3.80", combs: [12] },
      { id: "m21", time: "11.27 02:45", league: "컨퍼런스리그", type: "H-1.0", home: "SK브란", away: "AGF오르후스", pickTarget: "home", odd: "3.45", combs: [10] },
      { id: "m22", time: "11.27 02:45", league: "컨퍼런스리그", type: "승무패", home: "SK브란", away: "AGF오르후스", pickTarget: "home", odd: "1.90", combs: [11, 12, 13] },
      { id: "m23", time: "11.27 02:45", league: "유로파리그", type: "승무패", home: "셀타 비고", away: "AFC본머스", pickTarget: "away", odd: "1.83", combs: [10, 11, 12] },
      { id: "m24", time: "11.27 02:45", league: "유로파리그", type: "H-1.0", home: "올랭피크 마르세유", away: "레프스키 소피아", pickTarget: "home", odd: "1.96", combs: [11] },
      { id: "m25", time: "11.27 02:45", league: "유로파리그", type: "승무패", home: "올림피아코스", away: "AC밀란", pickTarget: "away", odd: "2.21", combs: [13] },
      { id: "m11", time: "11.27 05:00", league: "컨퍼런스리그", type: "승무패", home: "SC프라이부르크", away: "트벤테", pickTarget: "home", odd: "1.87", combs: [1, 2] },
      { id: "m26", time: "11.27 05:00", league: "컨퍼런스리그", type: "U/O 3.5", home: "SC프라이부르크", away: "트벤테", pickTarget: "home", odd: "1.49", combs: [10] },
      { id: "m27", time: "11.27 05:00", league: "컨퍼런스리그", type: "H-1.0", home: "SC프라이부르크", away: "트벤테", pickTarget: "home", odd: "2.95", combs: [12, 13] },
      { id: "m28", time: "11.27 05:00", league: "컨퍼런스리그", type: "승무패", home: "SC프라이부르크", away: "트벤테", pickTarget: "draw", odd: "3.55", combs: [11] },
      { id: "m29", time: "11.27 05:00", league: "컨퍼런스리그", type: "승무패", home: "하이두크 스플리트", away: "신트트라위던", pickTarget: "home", odd: "1.90", combs: [13] }
    ]
  },

  {
    round: "141",

    combos: {
      1: { odd: 25.9, betAmount: 10000 },
      2: { odd: 134.4, betAmount: 10000 },
      3: { odd: 48.5, betAmount: 10000 },
      4: { odd: 18.3, betAmount: 20000 },
      5: { odd: 34.6, betAmount: 15000 },
      6: { odd: 47.7, betAmount: 10000 },
      7: { odd: 20.5, betAmount: 15000 }
    },

    matches: [
      { id: "m1", time: "11.27 17:40", league: "호주 A리그", type: "승무패", home: "맥아서FC", away: "멜버른 시티", pickTarget: "home", odd: "2.70", combs: [1, 2] },
      { id: "m2", time: "11.28 04:30", league: "독일 분데스리가", type: "H-1.0", home: "베르더 브레멘", away: "묀헨글라트바흐", pickTarget: "home", odd: "2.55", combs: [1, 3, 7] },
      { id: "m3", time: "11.28 04:30", league: "독일 분데스리가", type: "승무패", home: "베르더 브레멘", away: "묀헨글라트바흐", pickTarget: "home", odd: "1.56", combs: [2, 4] },
      { id: "m4", time: "11.28 04:30", league: "독일 분데스리가", type: "H-2.0", home: "베르더 브레멘", away: "묀헨글라트바흐", pickTarget: "home", odd: "4.65", combs: [6] },
      { id: "m5", time: "11.28 04:45", league: "이탈리아 세리에A", type: "승무패", home: "베네치아", away: "볼로냐", pickTarget: "away", odd: "2.00", combs: [1, 3, 4, 6, 7] },
      { id: "m6", time: "11.28 04:45", league: "이탈리아 세리에A", type: "H+1.0", home: "베네치아", away: "볼로냐", pickTarget: "draw", odd: "3.45", combs: [2] },
      { id: "m7", time: "11.28 04:45", league: "프랑스 리그1", type: "승무패", home: "스타드 브레스투아29", away: "파리FC", pickTarget: "away", odd: "1.95", combs: [2, 3, 4] },
      { id: "m8", time: "11.28 10:00", league: "미국 메이저리그사커", type: "승무패", home: "콜럼버스 크루", away: "인터 마이애미CF", pickTarget: "home", odd: "2.30", combs: [3, 6] },
      { id: "m9", time: "11.28 12:00", league: "미국 메이저리그사커", type: "승무패", home: "레알 솔트레이크", away: "밴쿠버 화이트캡스", pickTarget: "away", odd: "2.12", combs: [3] },
      { id: "m10", time: "11.28 14:00", league: "일본 J1리그", type: "승무패", home: "교토 상가FC", away: "세레소 오사카", pickTarget: "home", odd: "2.23", combs: [5, 6, 7] },
      { id: "m11", time: "11.28 14:00", league: "K리그2", type: "승무패", home: "용인FC", away: "파주 프런티어", pickTarget: "home", odd: "1.80", combs: [7] },
      { id: "m12", time: "11.28 21:30", league: "잉글랜드 챔피언십", type: "승무패", home: "블랙번 로버스", away: "찰턴 애슬레틱", pickTarget: "home", odd: "1.88", combs: [1] },
      { id: "m13", time: "11.29 00:00", league: "잉글랜드 챔피언십", type: "H-1.0", home: "버밍엄 시티", away: "볼턴 원더러스", pickTarget: "home", odd: "2.28", combs: [2] },
      { id: "m14", time: "11.29 00:00", league: "잉글랜드 챔피언십", type: "승무패", home: "버밍엄 시티", away: "볼턴 원더러스", pickTarget: "home", odd: "1.44", combs: [4] },
      { id: "m15", time: "11.29 04:45", league: "프랑스 리그1", type: "H+1.0", home: "르망FC", away: "릴OSC", pickTarget: "draw", odd: "3.30", combs: [5] },
      { id: "m16", time: "11.30 01:15", league: "프랑스 리그1", type: "승무패", home: "툴루즈", away: "스타드 렌", pickTarget: "home", odd: "2.26", combs: [5] },
      { id: "m17", time: "11.30 04:45", league: "프랑스 리그1", type: "승무패", home: "올랭피크 리옹", away: "AS모나코", pickTarget: "home", odd: "2.08", combs: [2, 4, 5] }
    ]
  }
];
