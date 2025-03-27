import styles from "./styles";
const Button = () => {
  return (
    <div
      className="h-11 w-[163px] rounded-3xl flex items-center justify-center bg-gradient-to-r from-[#33D35E] to-[#2AB6D9] text-white hover:opacity-40 hover:cursor-pointer"
      //   style={styles.button}
    >
      <button className="text-sm font-bold">Request Invite</button>
    </div>
  );
};

export default Button;
