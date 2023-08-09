from django.db import models
class food_details(models.Model):
    hotel_name=models.CharField(max_length=30)
    rating=models.CharField(max_length=30)
    item=models.CharField(max_length=10)
    price=models.CharField(max_length=10)
    contact=models.CharField(max_length=10)
    address=models.CharField(max_length=30)