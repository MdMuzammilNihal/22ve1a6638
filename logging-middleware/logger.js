import axios from 'axios';
const Log = async (stack, level, pkg, message) => {
  try {
    const payload = { stack, level, package: pkg, message };

    await axios.post("http://20.244.56.144/evaluation-service/logs", payload);
  } catch (err) {
    console.error("Logging failed:", err.message);
  }
};

export default Log;
