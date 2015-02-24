var myvar = 'my value'; 

(function() { 
    console.log(myvar);
    var myvar = 'local value'; 
})();
