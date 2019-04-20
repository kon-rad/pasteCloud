from django.db import models

class User(models.Model):
    user_name = models.CharField(max_length=200)
    user_created = models.DateTimeField('date user created')

class Paste(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    paste_id = models.IntegerField(primary_key=True)
    paste_name = models.CharField(max_length=200)
    paste_text = models.TextField(blank=True, null=True)
    paste_created = models.DateTimeField('date paste created')
    paste_modified = models.DateTimeField('date paste modified')
