// ===== 프로토 회차 데이터 (매 회차 이 파일만 교체) =====
// combos: 조합번호: { odd: 총배당, betAmount: 구매금액 }  ← 조합 번호 = 구매 순서
// matches: 킥오프 순서 / type: "승무패" | "H-1.0" | "H+1.0" | "U/O 3.5"(언더오버: home=언더, away=오버)
// pickTarget: "home"(승) | "draw"(무) | "away"(패) / combs: 이 경기가 들어간 조합 번호들
window.ROUND_DATA = {
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
    { id: "m5", time: "11.25 19:00", league: "일본 J1리그", type: "승무패", home: "미토 홀리호크", away: "도쿄 베르디", pickTarget: "away", odd: "2.27", combs: [2, 3, 4, 8] },
    { id: "m14", time: "11.25 19:00", league: "일본 J1리그", type: "승무패", home: "미토 홀리호크", away: "도쿄 베르디", pickTarget: "draw", odd: "2.90", combs: [6] },
    { id: "m6", time: "11.25 19:00", league: "일본 J1리그", type: "승무패", home: "제프 유나이티드", away: "나고야 그램퍼스", pickTarget: "home", odd: "2.85", combs: [2, 5, 7] },
    { id: "m7", time: "11.25 19:00", league: "일본 J1리그", type: "승무패", home: "파지아노 오카야마", away: "시미즈 에스펄스", pickTarget: "home", odd: "1.86", combs: [1, 2, 3, 4, 6] },
    { id: "m15", time: "11.25 19:00", league: "일본 J1리그", type: "승무패", home: "파지아노 오카야마", away: "시미즈 에스펄스", pickTarget: "draw", odd: "3.15", combs: [5, 8] },
    { id: "m16", time: "11.25 19:00", league: "일본 J1리그", type: "H-1.0", home: "파지아노 오카야마", away: "시미즈 에스펄스", pickTarget: "draw", odd: "3.30", combs: [7] },
    { id: "m8", time: "11.25 19:30", league: "일본 J1리그", type: "승무패", home: "우라와 레드", away: "세레소 오사카", pickTarget: "home", odd: "1.70", combs: [4] }
  ]
};
