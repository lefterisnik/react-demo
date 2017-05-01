from rest_framework_json_api.serializers import ModelSerializer
from .models import DailyLog, Comment
from rest_framework_json_api.serializers import ResourceRelatedField


class DailyLogSerializer(ModelSerializer):
    comments = ResourceRelatedField(many=True, read_only=True)

    class Meta:
        model = DailyLog
        fields = '__all__'


class CommentSerializer(ModelSerializer):
    class Meta:
        model = Comment
        fields = '__all__'
