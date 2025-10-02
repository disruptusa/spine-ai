from fastapi import APIRouter, Depends
from app.middleware.auth import get_current_user
from supabase.auth import User

router = APIRouter(prefix="/api/user", tags=["user"])

@router.get("/me")
async def get_user_profile(current_user: User = Depends(get_current_user)):
    """
    Get current user profile
    Protected route - requires valid JWT token
    """
    return {
        "id": current_user.id,
        "email": current_user.email,
        "created_at": current_user.created_at,
        "user_metadata": current_user.user_metadata
    }

@router.get("/dashboard")
async def get_dashboard_data(current_user: User = Depends(get_current_user)):
    """
    Get user dashboard data
    Protected route example
    """
    return {
        "message": "Welcome to your dashboard!",
        "user_id": current_user.id,
        "user_email": current_user.email,
        "stats": {
            "total_scans": 0,
            "total_books": 0,
            "pending_review": 0
        }
    }
