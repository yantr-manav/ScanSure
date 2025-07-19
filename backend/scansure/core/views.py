from django.shortcuts import render

# Create your views here.
from django.http import JsonResponse
from django.views import View

# Temporary hardcoded users for testing
USERS = [
    {"id": 1, "name": "Saivamshi Jilla"},
    {"id": 2, "name": "Aarav Shah"},
    {"id": 3, "name": "Meera Kulkarni"},
]

class UserListView(View):
    def get(self, request):
        return JsonResponse(USERS, safe=False)
