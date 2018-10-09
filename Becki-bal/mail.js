 $(function () {
        $('#submit').click(function (event) {
          event.preventDefault();
            if( !$('#name').val() || !$('#email').val() || !$('#content').val()  )  {
       alert('Sva polja moraju biti popunjena!');
       return false;
      }
    
          $.ajax({
            type: 'post',
            url: 'sendmail.php',
            data: $('#contact').serialize(),
            success: function () {
              alert('Vaša poruka je prosleđena!');
                $("#contact")[0].reset();
            }
          });
          return false;
         });
      });
     
