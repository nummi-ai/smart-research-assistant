import { OpenAI } from "openai";
import { NextResponse } from "next/server";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function POST(req: Request) {
  try {
    const { text } = await req.json();
    
    const response = await openai.chat.completions.create({
      model: "gpt-4-turbo",
      messages: [{ role: "system", content: "Summarize this research document." }, { role: "user", content: text }],
    });

    return NextResponse.json({ summary: response.choices[0]?.message?.content });
  } catch (error) {
    return NextResponse.json({ error: "Processing failed" }, { status: 500 });
  }
}