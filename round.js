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
    4: { odd: 40.2, betAmount: 15000 },
    5: { odd: 35.7, betAmount: 15000 },
    6: { odd: 38.1, betAmount: 15000 }
  },

  // ※ 회차 중간 추가분은 기존 id(m1~m10) 유지 + 새 경기 m11~ (이미 입력한 결과 보존용)
  matches: [
    { id: "m1", time: "11.20 19:00", league: "일본 J1리그", type: "H-1.0", home: "비셀 고베", away: "미토 홀리호크", pickTarget: "home", odd: "2.04", combs: [2] },
    { id: "m2", time: "11.21 14:00", league: "일본 J1리그", type: "승무패", home: "도쿄 베르디", away: "나고야 그램퍼스", pickTarget: "home", odd: "2.80", combs: [1, 2] },
    { id: "m11", time: "11.21 14:00", league: "일본 J2리그", type: "승무패", home: "도치기 시티FC", away: "알비렉스 니가타", pickTarget: "away", odd: "2.07", combs: [5, 6] },
    { id: "m12", time: "11.21 14:00", league: "일본 J2리그", type: "승무패", home: "카탈레 도야마", away: "오이타 트리니타", pickTarget: "home", odd: "1.59", combs: [6] },
    { id: "m13", time: "11.21 14:00", league: "일본 J2리그", type: "H-1.0", home: "카탈레 도야마", away: "오이타 트리니타", pickTarget: "home", odd: "2.75", combs: [5] },
    { id: "m14", time: "11.21 14:00", league: "일본 J2리그", type: "승무패", home: "테게바자로 미야자키", away: "이와키FC", pickTarget: "home", odd: "1.68", combs: [5] },
    { id: "m15", time: "11.21 14:00", league: "일본 J2리그", type: "H-1.0", home: "테게바자로 미야자키", away: "이와키FC", pickTarget: "home", odd: "3.10", combs: [6] },
    { id: "m3", time: "11.21 15:00", league: "일본 J1리그", type: "승무패", home: "가와사키 프론탈레", away: "아비스파 후쿠오카", pickTarget: "home", odd: "1.72", combs: [1, 2, 3, 5, 6] },
    { id: "m4", time: "11.21 15:00", league: "일본 J1리그", type: "H-1.0", home: "가와사키 프론탈레", away: "아비스파 후쿠오카", pickTarget: "home", odd: "3.10", combs: [4] },
    { id: "m5", time: "11.22 00:00", league: "EPL", type: "승무패", home: "코번트리 시티", away: "크리스털 팰리스", pickTarget: "home", odd: "2.17", combs: [1, 3] },
    { id: "m6", time: "11.22 04:00", league: "MLS", type: "승무패", home: "뉴잉글랜드 레벌루션", away: "필라델피아 유니언", pickTarget: "home", odd: "2.65", combs: [3] },
    { id: "m7", time: "11.22 22:30", league: "에레디비시", type: "H+1.0", home: "스파르타 로테르담", away: "AZ알크마르", pickTarget: "draw", odd: "3.60", combs: [4] },
    { id: "m8", time: "11.22 23:00", league: "세리에A", type: "승무패", home: "볼로냐", away: "우디네세", pickTarget: "home", odd: "1.57", combs: [1, 4] },
    { id: "m9", time: "11.22 23:00", league: "세리에A", type: "H-1.0", home: "볼로냐", away: "우디네세", pickTarget: "home", odd: "2.75", combs: [3] },
    { id: "m10", time: "11.22 23:00", league: "세리에A", type: "승무패", home: "US사수올로", away: "제노아", pickTarget: "away", odd: "2.29", combs: [1, 2, 3, 4] },
    { id: "m16", time: "11.23 10:30", league: "MLS", type: "H-1.0", home: "밴쿠버 화이트캡스FC", away: "레알 솔트레이크", pickTarget: "home", odd: "2.17", combs: [5, 6] }
  ]
};
