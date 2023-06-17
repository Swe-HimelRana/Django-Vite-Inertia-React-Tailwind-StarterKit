from inertia import inertia
from inertia import render

@inertia('Home/Index')
def index(request):
    # return render(request, template_name="base.html")
    return {}

@inertia('contact')
def contact(request):
     return render(request, 'contact', props={
    'email' : "contact@himelrana.com",
    "portfolio": "https://himelrana.com",
    "blog": "https://blog.himelrana.com"
  })
