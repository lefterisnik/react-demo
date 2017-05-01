from django.core.management import BaseCommand
from demo.models import DailyLog, Comment
from faker import Factory

fake = Factory.create()


class Command(BaseCommand):
    def handle(self, *args, **options):
        DailyLog.objects.all().delete()

        for _ in range(10):
            log = DailyLog.objects.create(
                username=fake.name(),
                title=fake.catch_phrase(),
                entry=fake.text(max_nb_chars=600)
            )

            for _ in range(5):
                Comment.objects.create(
                    log=log,
                    username=fake.name(),
                    comment="{0} and {1}".format(fake.bs(), fake.bs())
                )