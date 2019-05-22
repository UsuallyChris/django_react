""" serializer definitons for leads app """
from rest_framework import serializers
from .models import Lead


class LeadSerializer(serializers.ModelSerializer):
    """ Lead serializer definition """
    class Meta:
        model = Lead
        fields = '__all__'
