from rest_framework import viewsets
from .serializers import DailyLogSerializer, CommentSerializer
from .models import DailyLog, Comment


class DailyLogViewSet(viewsets.ModelViewSet):
    queryset = DailyLog.objects.all()
    serializer_class = DailyLogSerializer

    resource_name = 'daily-logs'


class CommentViewSet(viewsets.ModelViewSet):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer

    resource_name = 'comments'
