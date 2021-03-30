$(document).ready(function(){

    
	 $('#sidebar a').click(function (e) {
            e.preventDefault();
            $('a').removeClass('active');
            $(this).addClass('active');
        });
    showDate(); 
    setInterval(showDate,1000);
    function showDate(){
        var time=new Date();
        var date=time.getDate();
        var month=time.getMonth()+1;
        var year=time.getFullYear();
        var hour=time.getHours();
        var minutes=time.getMinutes();
        var second=time.getSeconds();
        var am_pm='am';
        if(hour>12)
        {
            hour-=12;
            am_pm='pm';
        }
        else
        {
            am_pm='am';
        }
        //var hour=hour<10?"0"+hour:hour;
        minutes=minutes<10?"0"+minutes:minutes  ;
        second=second<10?"0"+second:second  ;
        let output=date+"/"+month+"/"+year+"    "+hour+":"+minutes+":"+second+" "+am_pm;
        document.getElementById("date_time").innerHTML=output;
    }    
    

    
    var dataTable = $('#example').dataTable({
            "columnDefs": [
            { "searchable": false, "targets": [0,1] }
          ]});
        $("#searchbox").keyup(function() {
            dataTable.fnFilter(this.value);
        });    
     

    

});