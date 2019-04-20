from rest_framework import serializers
from pasteCloudApp.models import Paste

class PasteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Paste
        fields = ('paste_id', 'paste_username', 'paste_title', 'paste_text', 'paste_created', 'paste_modified')
