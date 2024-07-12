from django.db import models

# Create your models here.
class Project(models.Model):
    title = models.CharField(max_length=200, verbose_name = 'Título')
    subtitle = models.CharField(max_length=200, verbose_name = 'Subtítulo')
    link = models.URLField(verbose_name = "Sitio Web", null=True, blank=True)
    image = models.ImageField(verbose_name = 'Imagen', upload_to='projects')
    created = models.DateTimeField(auto_now_add=True, verbose_name = 'Fecha de creación')
    update = models.DateTimeField(auto_now=True, verbose_name = 'Fecha de modificación')
    
    def __str__(self):
        return self.title
    
    class Meta:
        verbose_name = 'proyecto'
        verbose_name_plural = 'proyectos'
        ordering = ['-created']