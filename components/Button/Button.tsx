import styles from "./styles";
const Button = () => {
  return (
    <div
      className="h-11 w-[163px] rounded-3xl flex items-center justify-center "
      style={styles.button}
    >
      <button className="text-sm font-bold">Request Invite</button>
    </div>
  );
};

export default Button;
