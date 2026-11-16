// ===== 프로토 회차 데이터 (매 회차 이 파일만 교체) =====
// combos: 조합번호: { odd: 총배당, betAmount: 구매금액 }  ← 조합 번호 = 구매 순서
// matches: 킥오프 순서 / type: "승무패" | "H-1.0" | "H+1.0" | "언더" | "오버"
// pickTarget: "home"(승) | "draw"(무) | "away"(패) / combs: 이 경기가 들어간 조합 번호들
window.ROUND_DATA = {
  round: "136",

  combos: {
    1: { odd: 17.5, betAmount: 20000 },
    2: { odd: 18.4, betAmount: 30000 },
    3: { odd: 18.7, betAmount: 20000 },
    4: { odd: 43.4, betAmount: 5000 },
    5: { odd: 19.0, betAmount: 15000 }
  },

  matches: [
    { id: "m1", time: "11.17 02:00", league: "UEFA 네이션스리그", type: "승무패", home: "아이슬란드", away: "룩셈부르크", pickTarget: "away", odd: "9.00", combs: [4] },
    { id: "m2", time: "11.17 04:45", league: "UEFA 네이션스리그", type: "승무패", home: "스위스", away: "스코틀랜드", pickTarget: "home", odd: "1.66", combs: [1, 3] },
    { id: "m3", time: "11.17 04:45", league: "UEFA 네이션스리그", type: "H-1.0", home: "스위스", away: "스코틀랜드", pickTarget: "home", odd: "3.05", combs: [2, 4] },
    { id: "m4", time: "11.17 22:10", league: "국제친선경기", type: "승무패", home: "일본", away: "파라과이", pickTarget: "home", odd: "1.58", combs: [2, 3, 4, 5] },
    { id: "m5", time: "11.17 22:10", league: "국제친선경기", type: "H-1.0", home: "일본", away: "파라과이", pickTarget: "home", odd: "2.75", combs: [1] },
    { id: "m6", time: "11.18 04:45", league: "UEFA 네이션스리그", type: "승무패", home: "보스니아", away: "루마니아", pickTarget: "home", odd: "1.80", combs: [1, 2, 5] },
    { id: "m7", time: "11.18 04:45", league: "UEFA 네이션스리그", type: "H-1.0", home: "보스니아", away: "루마니아", pickTarget: "home", odd: "3.35", combs: [3] },
    { id: "m8", time: "11.18 04:45", league: "UEFA 네이션스리그", type: "승무패", home: "우크라이나", away: "조지아", pickTarget: "home", odd: "2.12", combs: [1, 2, 3, 5] },
    { id: "m9", time: "11.18 04:45", league: "UEFA 네이션스리그", type: "H-1.0", home: "헝가리", away: "북아일랜드", pickTarget: "draw", odd: "3.15", combs: [5] }
  ]
};
