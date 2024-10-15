import { useState } from "react";
import styles from "./Login.module.css";
import { $api } from "../../api";

export default function LoginPage() {
  const [userData, setUserData] = useState({ login: "", password: "" });

  const handleRegistrationClick = (e: any) => {
    e.preventDefault();
    $api.post("/auth", { userData });
  };

  return (
    <div className={styles.wrapper}>
      <div>
        <h1>Finance Tracker</h1>
        <h2>Login page</h2>
        <form className={styles.login}>
          <input
            value={userData.login}
            onChange={(e) =>
              setUserData({
                ...userData,
                login: e.target.value,
              })
            }
            type="text"
            placeholder="Enter your login"
          />
          <input
            value={userData.password}
            onChange={(e) =>
              setUserData({
                ...userData,
                password: e.target.value,
              })
            }
            type="text"
            placeholder="Enter your password"
          />
          <button onClick={handleRegistrationClick} className="primary">
            Registration
          </button>
          <button className="secondary">Login</button>
        </form>
      </div>
    </div>
  );
}
