from django.db import models

class User(models.Model):
    user_name = models.CharField(max_length=200)
    user_created = models.DateTimeField('date user created')

class Paste(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    paste_id = models.AutoField(primary_key=True)
    paste_username = models.CharField(max_length=200, default='')
    paste_title = models.CharField(max_length=200)
    paste_text = models.TextField(blank=True, null=True)
    paste_created = models.DateTimeField('date paste created', auto_now=True)
    paste_modified = models.DateTimeField('date paste modified', auto_now=True)
