""" routes for leads app """
from rest_framework import routers
from .views import LeadViewSet

ROUTER = routers.DefaultRouter()
ROUTER.register('api/leads', LeadViewSet, 'leads')

urlpatterns = ROUTER.urls
