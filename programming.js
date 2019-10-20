 var ax = 'x';
 $(document).ready(function() {

     $('#card').flip({
         trigger: 'manual',
         axis: 'x'
     });


     $("#card").on('flip:change', function() {
         $('#card').flip('toggle');
     });

     $('#left').click(function() {

         if (ax != 'y') {
             $("#card").flip({
                 axis: 'y'
             });

             ax = 'y';
         }
         else {
             $("#card").flip('toggle');
         }
     });
     $('#right').click(function() {
         if (ax != 'x') {
             $("#card").flip({
                 axis: 'x'
             });

             ax = 'x';
         }
         else {
             $("#card").flip('toggle');
         }
     });
 });
 