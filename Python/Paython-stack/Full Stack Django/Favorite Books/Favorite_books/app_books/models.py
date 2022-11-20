from django.db import models
from app_users.models import User

class Book(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField(max_length=255)
    uploaded_by = models.ForeignKey(User,related_name="books_uploaded", on_delete=models.CASCADE, blank=True, null=True)
    users_who_like = models.ManyToManyField(User,related_name="liked_books")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
