from django.shortcuts import render,redirect
# from django.contrib.auth.models import user
from .models import food_details

def index(request):
    return render(request,"index.html")

def add(request):
    return render(request,"add.html")

def view(request):
    data= food_details.objects.all()
    return render(request,"view.html",{'data':data})

def Adddata(request):
    if request.method=="POST":
        hname=request.POST['hname']
        rating=request.POST['rating']
        item=request.POST['item']
        price=request.POST['price']
        contact=request.POST['contact']
        address=request.POST['address']
        add=food_details(hotel_name=hname,rating=rating,item=item,price=price,contact=contact,address=address)
        add.save()
        return redirect('view')
    return render(request,"add.html")

def edit(request,id):
    Data=food_details.objects.get(id=id)
    return render(request,'edit.html',{'Data':Data})


def formupdate(request,id):
    if request.method=="POST":
        add=food_details.objects.get(id=id)
        add.hotel_name=request.POST['hname']
        add.rating=request.POST['rating']
        add.item=request.POST['item']
        add.price=request.POST['price']
        add.contact=request.POST['contact']
        add.address=request.POST['address']
        add.save()
        return redirect("view")



def delete(request,id):
    add=food_details.objects.get(id=id)
    add.delete()
    return redirect('view')

    

