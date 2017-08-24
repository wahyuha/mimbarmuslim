from django.contrib import admin
from .models import Sholat, Events, Dalil


class SholatAdmin(admin.ModelAdmin):
    model = Sholat
    list_display = ('nama', 'hukum', 'waktu')

admin.site.register(Sholat, SholatAdmin)
admin.site.register(Events)
admin.site.register(Dalil)

