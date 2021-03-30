var dataTable = $('#example').dataTable({
            "columnDefs": [
            { "searchable": false, "targets": [1] }
          ]});
        $("#searchbox").keyup(function() {
            dataTable.fnFilter(this.value);
         });