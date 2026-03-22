from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from openai import OpenAI

app = FastAPI()

# ✅ Allow frontend to connect
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ✅ Your OpenAI API key here
client = OpenAI(api_key="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")

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