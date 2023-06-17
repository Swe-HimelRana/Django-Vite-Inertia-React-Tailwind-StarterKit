from inertia import share
from django.conf import settings
from django.contrib.messages import get_messages
import json
def get_client_ip(request):
    x_forwarded_for = request.META.get('HTTP_X_FORWARDED_FOR')
    if x_forwarded_for:
        ip = x_forwarded_for.split(',')[0]
    else:
        ip = request.META.get('REMOTE_ADDR')
    return ip

def inertia_share(get_response):
    def middleware(request):
        message = None
        for message in get_messages(request):
            message = {
                "message": message.message,
                "level": message.level,
                "tags": message.tags,
                "extra_tags": message.extra_tags,
                "level_tag": message.level_tag,
            }
        share(
            request,
            ip = get_client_ip(request),
            userAgent = request.META['HTTP_USER_AGENT'],
            isAuthenticated = request.user.is_authenticated,
            flash=message,
            user = lambda: request.user if request.user.is_authenticated else None
            # user= lambda: request.user,  # evaluated lazily at render time
        )

        return get_response(request)

    return middleware