from django.db import models


class Ninja(models.Model):
    first_name = models.CharField(max_length=90)
    last_name = models.CharField(max_length=90)
    # Dojo = models.ForeignKey(Dojo, related_name="ninjas", on_delete = models.CASCADE)   

class Dojo(models.Model):
    name = models.CharField(max_length=90)
    city = models.CharField(max_length=90)
    state = models.CharField(max_length=90)
    ninjas = models.ForeignKey(Ninja, related_name="ninjas", on_delete = models.CASCADE)   #list of ninjas




# def find_dojo():
#     Dojo.objects.all()

# 1 ninja --> 1 dojo
# 1 dojo --> many ninjas

# list of ninjas in a dojo 

# for ninja in dojo.ninjas.all
#     ninja.firstname