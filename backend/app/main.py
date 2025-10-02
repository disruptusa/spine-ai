from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes import user
import os
from dotenv import load_dotenv

load_dotenv()

app = FastAPI(title="Spine.AI API", version="1.0.0")

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",  # Next.js dev
        os.getenv("FRONTEND_URL", "http://localhost:3000")
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routers
app.include_router(user.router)

@app.get("/")
async def root():
    return {"message": "Spine.AI API is running"}

@app.get("/health")
async def health():
    return {"status": "healthy"}
