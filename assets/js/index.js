

$("#add_user").submit(function(event){
    alert("Data Inserted successfully")
})

$("#search_city").submit(function(event){
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
        "url":`${url}?city=${data.city}`,
        "method":"GET"
    }

    $.ajax(request).done(function(response){
        alert("Data searched")
    })
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
        "url":`${url}${data.id}`,
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
            "url":`http://localhost:${PORT}/api/users/${id}`,
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