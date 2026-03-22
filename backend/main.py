from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from openai import OpenAI
from dotenv import load_dotenv
load_dotenv()

app = FastAPI()

# ✅ Allow frontend to connect
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

import os

client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

class Task(BaseModel):
    task: str

@app.post("/solve-task")
@app.post("/solve-task")
def solve_task(data: Task):
    steps = [
        f"Understanding: {data.task}",
        "Breaking task into steps",
        "Planning solution",
        "Generating output"
    ]

    return {
        "steps": steps,
        "final_answer": f"This is a simulated AI response for: {data.task}"
    }