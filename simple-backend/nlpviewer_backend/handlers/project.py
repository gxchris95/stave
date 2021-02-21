from django.contrib import admin
from django.urls import include, path
from django.http import HttpResponse, JsonResponse
from django.forms import model_to_dict
<<<<<<< HEAD
from django.core.exceptions import ObjectDoesNotExist 
from django.contrib.auth.decorators import permission_required
import uuid
import json
from ..models import Project, Document, User
from ..lib.require_login import require_login, require_admin
from ..lib.utils import fetch_project_check_perm
from guardian.shortcuts import get_objects_for_user

@require_login
@permission_required('nlpviewer_backend.view_project', raise_exception=True)
def listAll(request):
    """
    list all projects from the databse.
    accessible for user with 'view' permission
    """

    projects = Project.objects.all().values()
    return JsonResponse(list(projects), safe=False)

# TODO - how to fetch projects may be changed in the future
@require_login
def list_user_projects(request):
    """
    list all projects of the current user.
    """
    
    projects_read = get_objects_for_user(request.user, 'nlpviewer_backend.read_project').all().values('id', 'name')
    projects_user = request.user.projects.all().values('id', 'name')

    projects_list = list(projects_user.union(projects_read))

    return JsonResponse(projects_list, safe=False)



@require_login
@permission_required('nlpviewer_backend.add_project', raise_exception=True)
def create(request):
    """
    create a new project.
    accessible for users with 'add' permission
    """
 
    received_json_data = json.loads(request.body)

    project_type = received_json_data.get('type', 'indoc')

    if project_type == 'indoc':

        project = Project(
            project_type = project_type,
            name=received_json_data.get('name'),
            ontology=received_json_data.get('ontology'),
            config=received_json_data.get('config'),
            user=request.user
        )
    elif project_type == 'crossdoc':
        project = Project(
            project_type = project_type,
            name=received_json_data.get('name'),
            ontology=received_json_data.get('ontology'),
            multi_ontology = received_json_data.get('multiOntology'),
            config=received_json_data.get('config'),
            user=request.user
        )
=======
import uuid
import json
from ..models import Project, Document, User
from ..lib.require_login import require_login


@require_login
def listAll(request):
    projects = Project.objects.all().values()
    return JsonResponse(list(projects), safe=False)


@require_login
def create(request):
    received_json_data = json.loads(request.body)

    project = Project(
        name=received_json_data.get('name'),
        ontology=received_json_data.get('ontology')
    )
>>>>>>> 6fe7a7deb55bd77f5f91c4e387bc7ec9e2da9486

    project.save()

    return JsonResponse({"id": project.id}, safe=False)

<<<<<<< HEAD
@require_login
def edit(request, project_id):
    """
    edit a project, query by id.
    accessible for users with 'edit_project' permission and the owner of the project.
    """
    
    project = fetch_project_check_perm(project_id, request.user, "nlpviewer_backend.edit_project")

    received_json_data = json.loads(request.body)
=======

@require_login
def edit(request, project_id):
    project = Project.objects.get(pk=project_id)
    received_json_data = json.loads(request.body)

>>>>>>> 6fe7a7deb55bd77f5f91c4e387bc7ec9e2da9486
    project.project_name = received_json_data.get('project_name')
    project.ontology = received_json_data.get('ontology')

    project.save()

<<<<<<< HEAD
    docJson = model_to_dict(project)
    return JsonResponse(docJson, safe=False)

@require_login
def query(request, project_id):
    """
    query a project by id.
    accessible for users with 'read_project' permission and the owner of the project.
    """
    project = fetch_project_check_perm(project_id, request.user, "nlpviewer_backend.read_project")
    docJson = model_to_dict(
        project)
=======
    docJson = model_to_dict(pro)
    return JsonResponse(docJson, safe=False)


@require_login
def query(request, project_id):
    docJson = model_to_dict(
        Project.objects.get(pk=project_id))
>>>>>>> 6fe7a7deb55bd77f5f91c4e387bc7ec9e2da9486
    return JsonResponse(docJson, safe=False)

@require_login
def query_docs(request, project_id):
<<<<<<< HEAD

    project = fetch_project_check_perm(project_id, request.user, "nlpviewer_backend.read_project")
    
    docs = project.documents.all().values()
    return JsonResponse(list(docs), safe=False)

@require_login
def query_crossdocs(request, project_id):
    project = Project.objects.get(pk=project_id)
    docs = project.documents.all().values()
    crossdocs = project.crossdocs.all().values()
    response = {"docs": list(docs), "crossdocs": list(crossdocs)}

    return JsonResponse(response, safe=False)

@require_login
def delete(request, project_id):
    
    project = fetch_project_check_perm(project_id, request.user, "nlpviewer_backend.remove_project")
    project.delete()

    return HttpResponse('ok')
=======
    project = Project.objects.get(pk=project_id)
    docs = project.documents.all().values()

    return JsonResponse(list(docs), safe=False)

@require_login
def delete(request, project_id):
    project = Project.objects.get(pk=project_id)
    project.delete()

    return HttpResponse('ok')
    
>>>>>>> 6fe7a7deb55bd77f5f91c4e387bc7ec9e2da9486
