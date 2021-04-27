<<<<<<< HEAD
// const PORT=process.env.PORT||8080
=======

>>>>>>> 740e84ea4b91b9916717f51d4d7dd52cd095f3d8

$("#add_user").submit(function(event){
    alert("Data Inserted successfully")
})

$("#update_user").submit(function(event){
    event.preventDefault();

    var unindexed_array=$(this).serializeArray();
    var data={}

    $.map(unindexed_array, function(n,i){
        data[n['name']]= n['value']
    })

    console.log(data);
    var $form = $( this ),
    url = $form.attr( "action" );

    var request={
<<<<<<< HEAD
        "url":`http://localhost:3000/api/users/${data.id}`,
=======
        "url":`${url}${data.id}`,
>>>>>>> 740e84ea4b91b9916717f51d4d7dd52cd095f3d8
        "method":"PUT",
        "data":data
    }

    $.ajax(request).done(function(response){
        alert("Data updated successfully!")
    })
})

if(window.location.pathname=="/"){
    $ondelete = $(".table tbody td a.delete");
    $ondelete.click(function(){
        var id=$(this).attr("data-id")
        var request={
            "url":`http://localhost:3000/api/users/${id}`,
            "method":"DELETE",
        }

        if(confirm("Do you really want to delete this record?")){
            $.ajax(request).done(function(response){
                alert("Data Deleted Successfully!")
                location.reload()
            })
        }
    })
}