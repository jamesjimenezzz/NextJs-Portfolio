export async function chatAPI(text: string): Promise<string> {
  const res = await fetch("/api/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text }),
  });

  if (!res.ok) {
    throw new Error("Failed to fetch chat");
  }

  const { data } = (await res.json()) as { data: string };
  return data;
}
