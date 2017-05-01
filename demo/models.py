from django.db import models


class DailyLog(models.Model):
    username = models.CharField(max_length=30)
    added = models.DateTimeField(auto_now_add=True)
    title = models.CharField(max_length=100)
    entry = models.TextField()

    def __str__(self):
        return "Log by {0} on {1}".format(self.username, self.added)

    class Meta:
        ordering = ['-added']


class Comment(models.Model):
    log = models.ForeignKey(DailyLog, related_name='comments')
    username = models.CharField(max_length=30)
    added = models.DateTimeField(auto_now_add=True)
    comment = models.TextField()

    def __str__(self):
        return "Comment by {0} on {1}".format(self.username, self.log)

    class Meta:
        ordering = ['-added']