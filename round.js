// ===== 프로토 회차 데이터 (매 회차 이 파일만 교체) =====
// combos: 조합번호: { odd: 총배당, betAmount: 구매금액 }  ← 조합 번호 = 구매 순서
// matches: 킥오프 순서 / type: "승무패" | "H-1.0" | "H+1.0" | "언더" | "오버"
// pickTarget: "home"(승) | "draw"(무) | "away"(패) / combs: 이 경기가 들어간 조합 번호들
window.ROUND_DATA = {
  round: "137",

  combos: {
    1: { odd: 7.8, betAmount: 20000 },
    2: { odd: 11.8, betAmount: 20000 },
    3: { odd: 7.7, betAmount: 20000 },
    4: { odd: 10.0, betAmount: 10000 }
  },

  matches: [
    { id: "m1", time: "11.18 19:00", league: "WKBL", type: "승패", home: "신한은행 에스버드", away: "KB 스타즈", pickTarget: "home", odd: "2.27", combs: [2] },
    { id: "m2", time: "11.20 12:00", league: "MLS", type: "승무패", home: "시애틀 사운더스FC", away: "레알 솔트레이크", pickTarget: "away", odd: "3.10", combs: [4] },
    { id: "m3", time: "11.20 19:00", league: "일본 J1리그", type: "승무패", home: "가시마 앤틀러스", away: "시미즈 에스펄스", pickTarget: "home", odd: "1.44", combs: [3] },
    { id: "m4", time: "11.20 19:00", league: "일본 J1리그", type: "H-1.0", home: "가시마 앤틀러스", away: "시미즈 에스펄스", pickTarget: "home", odd: "2.40", combs: [1, 2] },
    { id: "m5", time: "11.20 19:00", league: "일본 J1리그", type: "승무패", home: "가시와 레이솔", away: "제프 유나이티드", pickTarget: "home", odd: "1.49", combs: [1, 4] },
    { id: "m6", time: "11.20 19:00", league: "일본 J1리그", type: "H-1.0", home: "가시와 레이솔", away: "제프 유나이티드", pickTarget: "home", odd: "2.45", combs: [3] },
    { id: "m7", time: "11.20 19:00", league: "일본 J1리그", type: "H-1.0", home: "비셀 고베", away: "미토 홀리호크", pickTarget: "home", odd: "2.16", combs: [1, 2, 3, 4] }
  ]
};
