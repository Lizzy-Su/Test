from channels.routing import ProtocolTypeRouter, URLRouter
from django.urls import path

from canvas import consumers

websocket_urlpatterns = [
    path('ws/canvas/', consumers.MyConsumer.as_asgi()),
]

# application = ProtocolTypeRouter({
#     'websocket': URLRouter(websocket_urlpatterns)
# })