// ===== 프로토 회차 데이터 (매 회차 이 파일만 교체) =====
// combos: 조합번호: { odd: 총배당, betAmount: 구매금액 }  ← 조합 번호 = 구매 순서
// matches: 킥오프 순서 / type: "승무패" | "H-1.0" | "H+1.0" | "U/O 3.5"(언더오버: home=언더, away=오버)
// pickTarget: "home"(승) | "draw"(무) | "away"(패) / combs: 이 경기가 들어간 조합 번호들
window.ROUND_DATA = {
  round: "138",

  combos: {
    1: { odd: 37.6, betAmount: 15000 },
    2: { odd: 22.5, betAmount: 20000 },
    3: { odd: 62.3, betAmount: 20000 },
    4: { odd: 40.2, betAmount: 15000 },
    5: { odd: 35.7, betAmount: 15000 },
    6: { odd: 38.1, betAmount: 15000 },
    7: { odd: 68.2, betAmount: 10000 },
    8: { odd: 82.2, betAmount: 10000 },
    9: { odd: 54.4, betAmount: 10000 },
    10: { odd: 37.8, betAmount: 20000 },
    11: { odd: 25.7, betAmount: 16000 },
    12: { odd: 110.6, betAmount: 7000 },
    13: { odd: 68.2, betAmount: 7000 }
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
    { id: "m17", time: "11.21 21:30", league: "잉글랜드 챔피언십", type: "승무패", home: "노리치 시티", away: "카디프 시티", pickTarget: "home", odd: "1.61", combs: [9] },
    { id: "m18", time: "11.21 21:30", league: "잉글랜드 챔피언십", type: "H-1.0", home: "노리치 시티", away: "카디프 시티", pickTarget: "home", odd: "2.60", combs: [8] },
    { id: "m19", time: "11.21 21:30", league: "잉글랜드 챔피언십", type: "U/O 3.5", home: "노리치 시티", away: "카디프 시티", pickTarget: "home", odd: "1.80", combs: [7] },
    { id: "m20", time: "11.21 23:30", league: "분데스리가", type: "H+1.0", home: "묀헨글라트바흐", away: "도르트문트", pickTarget: "draw", odd: "3.45", combs: [8] },
    { id: "m5", time: "11.22 00:00", league: "EPL", type: "승무패", home: "코번트리 시티", away: "크리스털 팰리스", pickTarget: "home", odd: "2.17", combs: [1, 3] },
    { id: "m21", time: "11.22 00:00", league: "잉글랜드 챔피언십", type: "승무패", home: "스완지 시티", away: "웨스트브로미치", pickTarget: "away", odd: "2.45", combs: [8] },
    { id: "m22", time: "11.22 00:00", league: "EPL", type: "승무패", home: "AFC본머스", away: "노팅엄 포리스트", pickTarget: "home", odd: "1.70", combs: [8] },
    { id: "m23", time: "11.22 00:00", league: "EPL", type: "H-1.0", home: "AFC본머스", away: "노팅엄 포리스트", pickTarget: "home", odd: "3.20", combs: [7] },
    { id: "m24", time: "11.22 00:00", league: "EPL", type: "H-1.0", home: "AFC본머스", away: "노팅엄 포리스트", pickTarget: "draw", odd: "3.35", combs: [9] },
    { id: "m25", time: "11.22 02:30", league: "라리가", type: "승무패", home: "세비야", away: "레알 베티스", pickTarget: "away", odd: "2.20", combs: [7, 8, 9] },
    { id: "m6", time: "11.22 04:00", league: "MLS", type: "승무패", home: "뉴잉글랜드 레벌루션", away: "필라델피아 유니언", pickTarget: "home", odd: "2.65", combs: [3] },
    { id: "m28", time: "11.22 16:30", league: "K리그2", type: "승무패", home: "서울 이랜드", away: "충남아산", pickTarget: "home", odd: "1.72", combs: [10, 11, 12, 13] },
    { id: "m29", time: "11.22 21:00", league: "잉글랜드 챔피언십", type: "승무패", home: "번리", away: "블랙번 로버스", pickTarget: "away", odd: "3.35", combs: [11] },
    { id: "m7", time: "11.22 22:30", league: "에레디비시", type: "H+1.0", home: "스파르타 로테르담", away: "AZ알크마르", pickTarget: "draw", odd: "3.60", combs: [4] },
    { id: "m8", time: "11.22 23:00", league: "세리에A", type: "승무패", home: "볼로냐", away: "우디네세", pickTarget: "home", odd: "1.57", combs: [1, 4, 11, 13] },
    { id: "m9", time: "11.22 23:00", league: "세리에A", type: "H-1.0", home: "볼로냐", away: "우디네세", pickTarget: "home", odd: "2.75", combs: [3] },
    { id: "m30", time: "11.22 23:00", league: "세리에A", type: "H-1.0", home: "볼로냐", away: "우디네세", pickTarget: "draw", odd: "3.20", combs: [10] },
    { id: "m31", time: "11.22 23:00", league: "세리에A", type: "승무패", home: "볼로냐", away: "우디네세", pickTarget: "draw", odd: "3.50", combs: [12] },
    { id: "m10", time: "11.22 23:00", league: "세리에A", type: "승무패", home: "US사수올로", away: "제노아", pickTarget: "away", odd: "2.29", combs: [1, 2, 3, 4, 10, 12] },
    { id: "m32", time: "11.22 23:00", league: "세리에A", type: "H+1.0", home: "US사수올로", away: "제노아", pickTarget: "home", odd: "1.45", combs: [11] },
    { id: "m33", time: "11.22 23:00", league: "세리에A", type: "승무패", home: "US사수올로", away: "제노아", pickTarget: "draw", odd: "3.15", combs: [13] },
    { id: "m34", time: "11.23 00:15", league: "라리가", type: "H+1.0", home: "라싱 산탄데르", away: "레알 소시에다드", pickTarget: "draw", odd: "3.80", combs: [12, 13] },
    { id: "m26", time: "11.23 01:15", league: "리그1", type: "승무패", home: "로리앙", away: "스타드 렌", pickTarget: "home", odd: "2.55", combs: [7] },
    { id: "m27", time: "11.23 04:45", league: "리그1", type: "H-1.0", home: "올랭피크 마르세유", away: "르망FC", pickTarget: "home", odd: "2.11", combs: [7, 9, 10, 12, 13] },
    { id: "m35", time: "11.23 04:45", league: "리그1", type: "승무패", home: "올랭피크 마르세유", away: "르망FC", pickTarget: "home", odd: "1.38", combs: [11] },
    { id: "m36", time: "11.23 05:00", league: "라리가", type: "승무패", home: "헤타페", away: "아틀레티코 마드리드", pickTarget: "away", odd: "1.42", combs: [10, 11] },
    { id: "m16", time: "11.23 10:30", league: "MLS", type: "H-1.0", home: "밴쿠버 화이트캡스FC", away: "레알 솔트레이크", pickTarget: "home", odd: "2.17", combs: [5, 6, 9] }
  ]
};
