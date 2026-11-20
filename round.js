// ===== 프로토 회차 데이터 (매 회차 이 파일만 교체) =====
// combos: 조합번호: { odd: 총배당, betAmount: 구매금액 }  ← 조합 번호 = 구매 순서
// matches: 킥오프 순서 / type: "승무패" | "H-1.0" | "H+1.0" | "언더" | "오버"
// pickTarget: "home"(승) | "draw"(무) | "away"(패) / combs: 이 경기가 들어간 조합 번호들
window.ROUND_DATA = {
  round: "138",

  combos: {
    1: { odd: 37.6, betAmount: 15000 },
    2: { odd: 22.5, betAmount: 20000 },
    3: { odd: 62.3, betAmount: 20000 },
    4: { odd: 40.2, betAmount: 15000 }
  },

  matches: [
    { id: "m1", time: "11.20 19:00", league: "일본 J1리그", type: "H-1.0", home: "비셀 고베", away: "미토 홀리호크", pickTarget: "home", odd: "2.04", combs: [2] },
    { id: "m2", time: "11.21 14:00", league: "일본 J1리그", type: "승무패", home: "도쿄 베르디", away: "나고야 그램퍼스", pickTarget: "home", odd: "2.80", combs: [1, 2] },
    { id: "m3", time: "11.21 15:00", league: "일본 J1리그", type: "승무패", home: "가와사키 프론탈레", away: "아비스파 후쿠오카", pickTarget: "home", odd: "1.72", combs: [1, 2, 3] },
    { id: "m4", time: "11.21 15:00", league: "일본 J1리그", type: "H-1.0", home: "가와사키 프론탈레", away: "아비스파 후쿠오카", pickTarget: "home", odd: "3.10", combs: [4] },
    { id: "m5", time: "11.22 00:00", league: "EPL", type: "승무패", home: "코번트리 시티", away: "크리스털 팰리스", pickTarget: "home", odd: "2.17", combs: [1, 3] },
    { id: "m6", time: "11.22 04:00", league: "MLS", type: "승무패", home: "뉴잉글랜드 레벌루션", away: "필라델피아 유니언", pickTarget: "home", odd: "2.65", combs: [3] },
    { id: "m7", time: "11.22 22:30", league: "에레디비시", type: "H+1.0", home: "스파르타 로테르담", away: "AZ알크마르", pickTarget: "draw", odd: "3.60", combs: [4] },
    { id: "m8", time: "11.22 23:00", league: "세리에A", type: "승무패", home: "볼로냐", away: "우디네세", pickTarget: "home", odd: "1.57", combs: [1, 4] },
    { id: "m9", time: "11.22 23:00", league: "세리에A", type: "H-1.0", home: "볼로냐", away: "우디네세", pickTarget: "home", odd: "2.75", combs: [3] },
    { id: "m10", time: "11.22 23:00", league: "세리에A", type: "승무패", home: "US사수올로", away: "제노아", pickTarget: "away", odd: "2.29", combs: [1, 2, 3, 4] }
  ]
};
