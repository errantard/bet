// ===== 프로토 회차 데이터 (회차 작업은 이 파일만 수정) =====
// ROUNDS: 진행중 회차 목록 (최근 2개 유지 — 새 회차 추가 시 바로 앞 회차는 그대로 두고 그 이전 회차는 삭제)
// 회차마다 { round, combos, matches } / 경기 id는 회차 안에서만 고유 (결과는 Supabase에 회차별로 따로 저장)
// combos: 조합번호: { odd: 총배당, betAmount: 구매금액 }  ← 조합 번호 = 구매 순서
// matches: 킥오프 순서 / type: "승무패" | "H-1.0" | "H+1.0" | "U/O 3.5"(언더오버: home=언더, away=오버)
// pickTarget: "home"(승) | "draw"(무) | "away"(패) / combs: 이 경기가 들어간 조합 번호들
window.ROUNDS = [
  {
    round: "139",

    combos: {
      1: { odd: 25.1, betAmount: 20000 },
      2: { odd: 25.3, betAmount: 20000 },
      3: { odd: 28.0, betAmount: 15000 },
      4: { odd: 15.1, betAmount: 25000 },
      5: { odd: 101.7, betAmount: 5000 },
      6: { odd: 50.6, betAmount: 5000 },
      7: { odd: 60.1, betAmount: 5000 },
      8: { odd: 67.1, betAmount: 5000 }
    },

    // ※ 회차 중간 추가분은 기존 id(m1~m8) 유지 + 새 경기 m9~ (이미 입력한 결과 보존용)
    matches: [
      { id: "m1", time: "11.24 04:45", league: "세리에A", type: "승무패", home: "AC몬차", away: "피오렌티나", pickTarget: "home", odd: "3.15", combs: [3] },
      { id: "m2", time: "11.24 05:00", league: "EPL", type: "승무패", home: "브렌트퍼드", away: "에버턴", pickTarget: "home", odd: "2.10", combs: [1, 2, 3, 4] },
      { id: "m9", time: "11.24 19:00", league: "AFC 챔스 엘리트", type: "승무패", home: "교토 상가FC", away: "포항 스틸러스", pickTarget: "home", odd: "1.49", combs: [5] },
      { id: "m10", time: "11.25 04:45", league: "잉글랜드 챔피언십", type: "승무패", home: "노리치 시티", away: "퀸즈파크 레인저스", pickTarget: "home", odd: "1.85", combs: [5, 6, 7, 8] },
      { id: "m11", time: "11.25 04:45", league: "잉글랜드 챔피언십", type: "승무패", home: "브리스틀 시티", away: "렉섬", pickTarget: "away", odd: "2.45", combs: [6, 8] },
      { id: "m12", time: "11.25 04:45", league: "잉글랜드 챔피언십", type: "H-1.0", home: "미들즈브러", away: "스완지 시티", pickTarget: "home", odd: "2.07", combs: [6, 8] },
      { id: "m13", time: "11.25 04:45", league: "잉글랜드 챔피언십", type: "승무패", home: "포츠머스", away: "웨스트햄", pickTarget: "home", odd: "3.45", combs: [7] },
      { id: "m3", time: "11.25 05:00", league: "챔피언스리그", type: "H-1.0", home: "RB라이프치히", away: "RC랑스", pickTarget: "home", odd: "1.81", combs: [1, 5] },
      { id: "m4", time: "11.25 19:00", league: "일본 J1리그", type: "H+1.0", home: "미토 홀리호크", away: "도쿄 베르디", pickTarget: "draw", odd: "3.55", combs: [1] },
      { id: "m5", time: "11.25 19:00", league: "일본 J1리그", type: "승무패", home: "미토 홀리호크", away: "도쿄 베르디", pickTarget: "away", odd: "2.27", combs: [2, 3, 4, 5, 8] },
      { id: "m14", time: "11.25 19:00", league: "일본 J1리그", type: "승무패", home: "미토 홀리호크", away: "도쿄 베르디", pickTarget: "draw", odd: "2.90", combs: [6] },
      { id: "m6", time: "11.25 19:00", league: "일본 J1리그", type: "승무패", home: "제프 유나이티드", away: "나고야 그램퍼스", pickTarget: "home", odd: "2.85", combs: [2, 5, 7] },
      { id: "m7", time: "11.25 19:00", league: "일본 J1리그", type: "승무패", home: "파지아노 오카야마", away: "시미즈 에스펄스", pickTarget: "home", odd: "1.86", combs: [1, 2, 3, 4, 6] },
      { id: "m15", time: "11.25 19:00", league: "일본 J1리그", type: "승무패", home: "파지아노 오카야마", away: "시미즈 에스펄스", pickTarget: "draw", odd: "3.15", combs: [5, 8] },
      { id: "m16", time: "11.25 19:00", league: "일본 J1리그", type: "H-1.0", home: "파지아노 오카야마", away: "시미즈 에스펄스", pickTarget: "draw", odd: "3.30", combs: [7] },
      { id: "m8", time: "11.25 19:30", league: "일본 J1리그", type: "승무패", home: "우라와 레드", away: "세레소 오사카", pickTarget: "home", odd: "1.70", combs: [4] }
    ]
  },

  {
    round: "140",

    combos: {
      1: { odd: 27.5, betAmount: 15000 },
      2: { odd: 23.0, betAmount: 15000 },
      3: { odd: 67.4, betAmount: 10000 },
      4: { odd: 115.4, betAmount: 10000 },
      5: { odd: 33.8, betAmount: 10000 },
      6: { odd: 27.1, betAmount: 10000 },
      7: { odd: 40.9, betAmount: 10000 }
    },

    // ※ 회차 중간 추가분은 기존 id(m1~m11) 유지 + 새 경기 m12~ (이미 입력한 결과 보존용)
    matches: [
      { id: "m1", time: "11.25 19:00", league: "일본 J1리그", type: "승무패", home: "미토 홀리호크", away: "도쿄 베르디", pickTarget: "draw", odd: "2.90", combs: [4, 5] },
      { id: "m12", time: "11.25 19:00", league: "일본 J1리그", type: "승무패", home: "미토 홀리호크", away: "도쿄 베르디", pickTarget: "home", odd: "2.65", combs: [7] },
      { id: "m13", time: "11.25 19:00", league: "일본 J1리그", type: "U/O 2.5", home: "미토 홀리호크", away: "도쿄 베르디", pickTarget: "away", odd: "2.33", combs: [6] },
      { id: "m2", time: "11.25 19:00", league: "일본 J1리그", type: "승무패", home: "제프 유나이티드", away: "나고야 그램퍼스", pickTarget: "home", odd: "2.85", combs: [3, 4, 5, 6] },
      { id: "m3", time: "11.25 19:00", league: "일본 J1리그", type: "승무패", home: "파지아노 오카야마", away: "시미즈 에스펄스", pickTarget: "home", odd: "1.86", combs: [2, 4, 7] },
      { id: "m4", time: "11.25 19:00", league: "일본 J1리그", type: "승무패", home: "파지아노 오카야마", away: "시미즈 에스펄스", pickTarget: "draw", odd: "3.15", combs: [3] },
      { id: "m5", time: "11.25 19:00", league: "일본 J1리그", type: "H+1.0", home: "V바렌 나가사키", away: "가와사키 프론탈레", pickTarget: "draw", odd: "3.60", combs: [1] },
      { id: "m6", time: "11.25 19:00", league: "일본 J1리그", type: "승무패", home: "V바렌 나가사키", away: "가와사키 프론탈레", pickTarget: "away", odd: "1.78", combs: [2] },
      { id: "m7", time: "11.25 19:00", league: "일본 J2리그", type: "승무패", home: "콘사도레 삿포로", away: "후지에다 MYFC", pickTarget: "home", odd: "1.83", combs: [1, 2, 3, 4, 5, 6, 7] },
      { id: "m8", time: "11.26 04:45", league: "잉글랜드 챔피언십", type: "승무패", home: "번리", away: "버밍엄 시티", pickTarget: "away", odd: "2.23", combs: [1, 5, 6, 7] },
      { id: "m9", time: "11.26 05:00", league: "잉글랜드 챔피언십", type: "승무패", home: "스토크 시티", away: "밀월", pickTarget: "home", odd: "2.03", combs: [2, 7] },
      { id: "m10", time: "11.26 05:00", league: "잉글랜드 챔피언십", type: "H-1.0", home: "스토크 시티", away: "밀월", pickTarget: "home", odd: "4.10", combs: [3, 4] },
      { id: "m11", time: "11.27 05:00", league: "컨퍼런스리그", type: "승무패", home: "SC프라이부르크", away: "트벤테", pickTarget: "home", odd: "1.87", combs: [1, 2] }
    ]
  }
];
