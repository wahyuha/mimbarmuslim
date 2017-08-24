from django.db import models

# Create your models here.

class Sholat(models.Model):
    HUKUM = (
        ('wajib', 'wajib'),
        ('sunnah', 'sunnah')
    )

    nama = models.CharField(null=False, max_length=30)
    label = models.CharField(null=False, max_length=30)
    waktu = models.CharField(null=False, max_length=10)
    hukum = models.CharField(choices=HUKUM, max_length=10)
    gambar = models.TextField(blank=True)

    def __str__(self):
        return self.nama

class Events(models.Model):
    judul = models.CharField(null=False, max_length=100)
    sub_judul = models.CharField(blank=True, max_length=50)
    pemateri = models.CharField(null=False, max_length=100)
    tanggal = models.DateField(blank=True);
    waktu_mulai = models.TimeField(blank=True)
    waktu_selesai = models.TimeField(blank=True)

class Dalil(models.Model):
    nama = models.CharField(null=False, max_length=50)
    judul = models.CharField(null=False, max_length=100)
    isi = models.TextField(null=False)