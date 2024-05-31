import styles from "./WavyText.module.css";

const WavyText = ({ text, fontSize, fontWeight }) => {
  return (
    <div>
      {text.split(" ").map((word, wordIndex) => (
        <h2
          key={wordIndex}
          className={`${styles.word} ${fontSize} ${fontWeight}`}
        >
          {word.split("").map((char, charIndex) => (
            <span
              key={charIndex}
              className={styles.wavy}
              style={{
                animationDelay: `${
                  wordIndex * 0.5 + charIndex * 0.1
                }s`,
              }}
            >
              {char}
            </span>
          ))}
          {/* Adding a non-breaking space between words */}
          {wordIndex < text.split(" ").length - 1 && (
            <span>&nbsp;</span>
          )}
        </h2>
      ))}
    </div>
  );
};

export default WavyText;
