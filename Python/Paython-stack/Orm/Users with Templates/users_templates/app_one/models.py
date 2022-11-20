from django.db import models

    
class User(models.Model):
    name = models.CharField(max_length=45)
    last = models.CharField(max_length=45)
    email = models.CharField(max_length=100)
    age = models.IntegerField()
    

