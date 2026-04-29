import styles from './HomeScreen.module.css';

const REGIONS = [
  { emoji: '🏔️', name: 'เหนือ',  color: '#8B6914' },
  { emoji: '🌾', name: 'อีสาน', color: '#B8860B' },
  { emoji: '🏛️', name: 'กลาง',  color: '#C41E3A' },
  { emoji: '🌊', name: 'ใต้',   color: '#1B5E20' },
];

const STARS = [
  { x: 8,  y: 12, size: 4, delay: 0.2 },
  { x: 92, y: 18, size: 3, delay: 0.8 },
  { x: 15, y: 78, size: 5, delay: 1.2 },
  { x: 88, y: 82, size: 3, delay: 0.5 },
  { x: 48, y: 6,  size: 4, delay: 1.5 },
  { x: 72, y: 28, size: 3, delay: 0.3 },
  { x: 25, y: 45, size: 4, delay: 1.0 },
  { x: 82, y: 60, size: 3, delay: 0.7 },
  { x: 55, y: 88, size: 4, delay: 1.3 },
  { x: 35, y: 22, size: 3, delay: 0.9 },
  { x: 65, y: 72, size: 5, delay: 0.4 },
  { x: 5,  y: 55, size: 3, delay: 1.1 },
];

export default function HomeScreen({ onStart }) {
  return (
    <div className={styles.container}>

      {/* Subtle Thai-pattern background */}
      <div className={styles.bgPattern} aria-hidden="true" />

      {/* Twinkling stars */}
      <div className={styles.starsLayer} aria-hidden="true">
        {STARS.map((s, i) => (
          <span
            key={i}
            className={styles.star}
            style={{
              left: `${s.x}%`,
              top: `${s.y}%`,
              width: s.size,
              height: s.size,
              animationDelay: `${s.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Corner silhouettes — each region */}
      {/* North: mountain + chickens */}
      <div className={`${styles.silhouette} ${styles.silNorth}`} aria-hidden="true">
        <svg
          className={styles.silSvg}
          style={{ animationDelay: '0s' }}
          viewBox="0 0 120 80"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
        >
          <path d="M0 80 L30 25 L45 45 L60 15 L75 40 L90 20 L120 80 Z" />
          <ellipse cx="24" cy="70" rx="6" ry="5" />
          <circle cx="30" cy="65" r="3.5" />
          <ellipse cx="13" cy="72" rx="4" ry="3.5" />
          <circle cx="17" cy="68" r="2.5" />
          <ellipse cx="38" cy="71" rx="3.5" ry="3" />
          <circle cx="42" cy="68" r="2" />
        </svg>
      </div>

      {/* Isan: rice sheaves + box */}
      <div className={`${styles.silhouette} ${styles.silIsan}`} aria-hidden="true">
        <svg
          className={styles.silSvg}
          style={{ animationDelay: '0.8s' }}
          viewBox="0 0 110 82"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
        >
          <rect x="18" y="46" width="3" height="24" />
          <rect x="30" y="41" width="3" height="29" />
          <rect x="42" y="44" width="3" height="26" />
          <ellipse cx="19" cy="41" rx="4" ry="8" />
          <ellipse cx="31" cy="36" rx="4" ry="9" />
          <ellipse cx="43" cy="39" rx="3.5" ry="8" />
          <rect x="13" y="67" width="36" height="5" rx="2.5" />
          <rect x="63" y="53" width="30" height="22" rx="3" />
          <rect x="63" y="53" width="30" height="9" rx="3" />
          <rect x="71" y="46" width="4" height="8" rx="2" />
        </svg>
      </div>

      {/* Central: temple spire + flower */}
      <div className={`${styles.silhouette} ${styles.silCentral}`} aria-hidden="true">
        <svg
          className={styles.silSvg}
          style={{ animationDelay: '1.5s' }}
          viewBox="0 0 110 86"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
        >
          <polygon points="55,5 46,22 51,22 43,39 49,39 36,57 74,57 61,39 67,39 59,22 64,22" />
          <rect x="36" y="57" width="38" height="8" />
          <rect x="30" y="65" width="50" height="7" />
          <circle cx="20" cy="73" r="5" />
          <ellipse cx="20" cy="67" rx="3" ry="5" />
          <ellipse cx="15" cy="71" rx="2.5" ry="4" />
          <ellipse cx="25" cy="71" rx="2.5" ry="4" />
          <rect x="19" y="73" width="2" height="9" />
        </svg>
      </div>

      {/* South: island + palm + waves */}
      <div className={`${styles.silhouette} ${styles.silSouth}`} aria-hidden="true">
        <svg
          className={styles.silSvg}
          style={{ animationDelay: '0.4s' }}
          viewBox="0 0 120 80"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
        >
          <ellipse cx="65" cy="44" rx="38" ry="17" />
          <rect x="63" y="20" width="4" height="26" />
          <path d="M67 26 Q84 19 85 9 Q72 15 67 26Z" />
          <path d="M65 26 Q48 18 47 8 Q59 14 65 26Z" />
          <path d="M67 29 Q81 32 85 26 Q75 25 67 29Z" />
          <path d="M0 65 Q15 59 30 65 Q45 71 60 65 Q75 59 90 65 Q105 71 120 65 L120 80 L0 80Z" />
        </svg>
      </div>

      {/* ── Main content ── */}
      <div className={styles.content}>

        {/* Decorative wavy line above title */}
        <div className={styles.decoTop}>
          <svg
            className={styles.decoSvg}
            viewBox="0 0 200 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 15 C20 0, 40 30, 60 15 C80 0, 100 30, 120 15 C140 0, 160 30, 180 15 C190 7, 195 15, 200 15"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              opacity="0.45"
            />
          </svg>
        </div>

        <h1 className={styles.title}>นิทานไทย</h1>
        <p className={styles.subtitle}>สี่ภาค ◆ สี่ตำนาน</p>
        <div className={styles.divider} />

        <p className={styles.desc}>
          เลือกเส้นทาง เปลี่ยนชะตา
          <br />
          นิทานพื้นบ้านที่คุณเป็นคนกำหนดตอนจบ
        </p>

        <button onClick={onStart} className={styles.startBtn}>
          <span className={styles.startIcon}>✦</span>
          เริ่มเล่น
        </button>

        <div className={styles.regionCards}>
          {REGIONS.map((r, i) => (
            <div key={i} className={styles.regionCard}>
              <span className={styles.regionEmoji}>{r.emoji}</span>
              <span className={styles.regionName}>{r.name}</span>
              <div className={styles.regionBar} style={{ background: r.color }} />
            </div>
          ))}
        </div>

        <p className={styles.footer}>นิทานพื้นบ้าน ◆ เลือกเส้นทาง ◆ เปลี่ยนตอนจบ</p>
      </div>
    </div>
  );
}
