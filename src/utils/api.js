const BASE_URL = "https://grad-next.onrender.com";

const submitUser = async (name, email, phone) => {
  const resp = await fetch(`${BASE_URL}/api/user/submit`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, phone }),
  });

  if (!resp.ok) {
    throw new Error("Failed to submit user");
  }

  const data = await resp.json();
  return data;
};

export { submitUser };
