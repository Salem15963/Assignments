from tkinter import PAGES
from unicodedata import name
from django.db import models
    
class Authors(models.Model):
    name = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


class Books(models.Model):
    title = models.CharField(max_length=255)
    author = models.ForeignKey(Authors, related_name="books", on_delete = models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

